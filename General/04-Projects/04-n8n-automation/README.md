# 04 — Tự động hóa với n8n

## Brief

Nhóm tổ chức muốn gom phản hồi về lịch học và thiết bị. Hãy tạo hai workflow n8n dùng chung một bảng thử nghiệm. Workflow đầu nhận phản hồi, kiểm tra và đề xuất nhãn. Workflow thứ hai ghi quyết định của người duyệt. Chỉ các hàng đã duyệt mới được tính vào báo cáo. Ôn [bài n8n](../../02-Core-Tools/04-n8n/README.md) và [workflow Tự động hóa](../../03-Workflows/07-automation/README.md).

## Chuẩn bị và dữ liệu mẫu

Trong project n8n thử nghiệm, tạo Data Table `phan_hoi_thu` với các cột kiểu chuỗi `ma`, `noi_dung`, `nhan`, `phien_ban` và `trang_thai`. Dùng `ma` nhận diện phản hồi nghiệp vụ, phân biệt với cột ID do bảng quản lý. Chạy từng lượt một bằng Manual Trigger và kiểm tra bảng sau mỗi lượt.

| Mã | Nội dung | Nhãn và trạng thái ban đầu |
| --- | --- | --- |
| F01 | Giờ học 14:00 khó tham gia. | `lich_hoc`, `cho_duyet` |
| F02 | Máy chiếu bị mờ. | `thiet_bi`, `cho_duyet` |
| F03 | Máy chiếu chỉ dùng được sau giờ học. | Nhãn để trống, `xu_ly_tay` |
| F04 | *(Chuỗi rỗng)* | Lỗi đầu vào, không tạo hàng |
| F05 | Hướng dẫn đăng ký dễ hiểu. | `khac`, `cho_duyet` |

## Mốc 1 — Nhận và phân loại

1. Nối **Manual Trigger → Edit Fields → If**. Đặt tên Edit Fields là `Nhap phan hoi`. Tạo `ma` và `noi_dung` từ bảng mẫu, một hàng mỗi lần chạy. Trong If, kiểm tra hai chuỗi còn nội dung sau khi bỏ khoảng trắng đầu cuối. Nhánh sai kết thúc bằng Edit Fields với mã và kết quả `loi_dau_vao`.
2. Nhánh hợp lệ dùng **Data Table → Row → Get** trên `phan_hoi_thu`, lọc `ma` bằng mã nhập. Bật **Always Output Data** trên node Get. Dùng một If để kiểm tra kết quả có trường `ma` hay không. Nếu có, trả `ma_da_ton_tai` và giữ nguyên hàng cũ. Nếu mã cũ có nội dung khác, đưa cho người xử lý.
3. Nếu chưa có mã, dùng Edit Fields lấy lại `ma` và `noi_dung` từ `Nhap phan hoi`, chẳng hạn `{{ $('Nhap phan hoi').first().json.ma }}`. Thêm `phien_ban` bằng `v1`. Phân loại dựa trên chuỗi đã chuyển về chữ thường. Nếu chỉ chứa “giờ học”, dùng `lich_hoc`. Nếu chỉ chứa “máy chiếu”, dùng `thiet_bi`. Nếu không khớp từ khóa nào, dùng `khac`. Trường hợp khớp cả hai chuyển `xu_ly_tay`; các nhãn hợp lệ chuyển `cho_duyet`. Có thể tạo hai trường Boolean rồi dùng If để phân nhánh. Ví dụ trường kiểm tra lịch dùng `{{ $json.noi_dung.toLowerCase().includes('giờ học') }}`.
4. Nối **Data Table → Row → Insert** sau các nhánh phân loại. Ánh xạ năm cột. Chạy F01–F05 và so trạng thái với bảng mẫu. Thử nhập lại F01 để xác nhận số hàng không đổi.

## Mốc 2 — Ghi quyết định

1. Tạo workflow thứ hai với **Manual Trigger → Edit Fields**. Đặt tên node nhập là `Nhap quyet dinh`, gồm `ma`, `phien_ban` và `quyet_dinh` bằng `duyet` hoặc `tu_choi`. Người duyệt mở bảng, đối chiếu nội dung, nhãn và phiên bản trước khi nhập.
2. Dùng Data Table **Get** lọc theo mã đã nhập, bật **Always Output Data**. Chỉ cho đi tiếp khi tìm thấy hàng đúng phiên bản, trạng thái đang là `cho_duyet` và quyết định thuộc hai giá trị cho phép. Các trường hợp còn lại kết thúc bằng kết quả ghi lý do, chẳng hạn mã không tồn tại, sai phiên bản hoặc hàng đã có quyết định.
3. Dùng **Update** với **All Conditions**, lọc theo cả `ma`, `phien_ban` và `trang_thai = cho_duyet`. Chỉ ánh xạ cột trạng thái. Giá trị mới là `da_duyet` hoặc `tu_choi` theo quyết định. Kiểm tra số hàng được cập nhật và đọc lại bảng. Báo cáo chỉ lấy các hàng `da_duyet`.

## Mốc 3 — Test lỗi và chạy lại

Trong ca lỗi, đặt tạm **Stop And Error** ngay trước Update. Mở lần chạy lỗi để ghi mã, thời điểm, node, lỗi và trạng thái trong bảng. Sau khi bỏ node mô phỏng, đọc lại hàng để chắc chắn quyết định còn chờ rồi thử lại một lần. Với lỗi ghi không rõ kết quả, kiểm tra bảng trước khi quyết định chạy tiếp.

| Ca thử theo thứ tự | Kết quả cần có |
| --- | --- |
| Nhập F01–F05, sau đó nhập lại F01 | Bảng có bốn hàng. F04 không có hàng. F01 giữ một bản, F03 đi xử lý tay. |
| Duyệt F01 với phiên bản `v0` | F01 vẫn chờ duyệt. |
| Duyệt F01 với `v1`, sau đó chạy lại cùng quyết định | F01 được duyệt một lần và chỉ có một hàng trong báo cáo. |
| Từ chối F02 với `v1` | F02 có trạng thái `tu_choi` và không vào báo cáo. |
| Thử duyệt F03 hoặc một mã chưa tồn tại | Bảng không đổi. Kết quả nêu lý do. |
| Duyệt F05 với `v1` khi có lỗi mô phỏng, rồi thử lại sau khi kiểm bảng | Lần lỗi giữ F05 ở `cho_duyet`. Sau khi xử lý, F05 vào báo cáo đúng một lần. |

Kết thúc bộ thử, bảng có bốn hàng và báo cáo chỉ có F01, F05. Để tạm dừng bài thử, ngừng chạy cả hai workflow và kiểm tra các hàng đang chờ trước khi tiếp tục. Thiết kế trên dành cho một người thao tác tuần tự trong môi trường thử nghiệm.

## Đầu ra và rubric

Lưu hai workflow, ảnh hoặc bản xuất bảng cuối, bảng ca thử với Kỳ vọng và Thực tế, cùng nhật ký lỗi và cách chạy lại.

| Tiêu chí | Đạt 2 điểm khi |
| --- | --- |
| Tiếp nhận và phân loại | F01–F05 ra đúng nhánh, đầu vào trùng giữ nguyên bản cũ |
| Duyệt và chạy lại **(bắt buộc)** | Chỉ duyệt đúng phiên bản đang chờ, chạy lại không nhân bản và báo cáo đúng hai mã |
| Xử lý lỗi | Có bằng chứng ca lỗi, trạng thái trước và sau khi thử lại, và cách tạm dừng |
| Tái lập | Người khác có thể dựng bảng, chạy cùng dữ liệu và đối chiếu kết quả |

## Retrospective

Ghi lỗi tốn thời gian nhất, thao tác nào bạn vẫn cần người duyệt và so sánh thời gian xử lý tay với thời gian chạy kèm review trên cùng bộ mẫu. Dùng [mẫu thiết kế ca thử](../../05-Prompt-Library/automation.md) để bổ sung một ca bạn còn thiếu.

## Tài liệu chính thức

Kiểm tra ngày 25/11/2026.

- [n8n — Data tables](https://docs.n8n.io/build/work-with-data/data-tables.md)
- [n8n — Data Table row operations](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.datatable/rows.md)
- [n8n — Cấu hình node](https://docs.n8n.io/build/understand-workflows/workflow-components/work-with-nodes.md)
- [n8n — Xử lý lỗi workflow](https://docs.n8n.io/build/flow-logic/handle-errors-gracefully.md)
