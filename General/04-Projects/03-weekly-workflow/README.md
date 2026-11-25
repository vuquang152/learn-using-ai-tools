# 03 — Báo cáo công việc hằng tuần

## Brief

Bạn điều phối nhóm tổ chức buổi hướng dẫn cuối tháng 12. Mỗi cuối tuần, nhóm cần bản cập nhật ngắn, bảng việc và kế hoạch ưu tiên cho tuần tới. Hãy xây một quy trình dùng lại qua hai kỳ báo cáo. Ôn [workflow Năng suất văn phòng](../../03-Workflows/06-office-productivity/README.md).

## Dữ liệu mẫu

Dùng kỳ đầu từ 07/12 đến 11/12 và kỳ tiếp theo từ 14/12 đến 18/12. Các mốc là ngày/tháng. Mỗi dòng là một ghi chú đã được nhóm cung cấp.

| Mã nguồn | Ngày | Nội dung |
| --- | --- | --- |
| W1-A | 07/12 | T01. Linh gửi danh sách thiết bị trước hoặc trong ngày 11/12. T02. Minh in tài liệu vào ngày 16/12, sau khi có danh sách thiết bị. |
| W1-B | 10/12 | T01. Linh đã gửi danh sách thiết bị ngày 10/12. T03. An đề xuất dùng phòng B3, đang chờ nhóm chốt. |
| W1-C | 11/12 | T04. Nhóm chốt việc kiểm tra máy chiếu trước hoặc trong ngày 15/12, chưa phân công người phụ trách. |
| W2-A | 14/12 | T04. An nhận kiểm tra máy chiếu, giữ hạn 15/12. T03. Nhóm chốt dùng B3, giao An làm thủ tục đặt phòng, chưa ghi hạn. |
| W2-B | 16/12 | T02. Minh đã in tài liệu ngày 16/12. T04. An đã kiểm tra máy chiếu ngày 15/12, cần mượn thêm một cáp HDMI. |
| W2-C | 18/12 | T05. Nhóm giao Lan mượn cáp HDMI trước hoặc trong ngày 21/12. T03. Ban quản lý xác nhận đã đặt phòng B3 ngày 18/12. |

Dùng mã việc để nối các cập nhật. Theo dõi riêng ngày hoàn thành, hạn và thông tin chưa xác nhận.

## Mốc thực hiện

1. **Tạo mẫu lấy dữ liệu.** Lưu kỳ báo cáo, tập nguồn, bảng việc kỳ trước và người duyệt. Bảng việc có ID, việc, trạng thái, người phụ trách, hạn, ngày hoàn thành, phụ thuộc hoặc vấn đề và căn cứ cập nhật.
2. **Chạy kỳ đầu.** Dùng [mẫu tổng hợp tuần](../../05-Prompt-Library/office-productivity.md) với W1-A đến W1-C. Tạo bản nháp tối đa 180 từ và danh sách tối đa ba ưu tiên tuần sau. So từng trạng thái với nguồn trước khi duyệt.
3. **Chạy kỳ tiếp theo.** Dùng bảng việc đã duyệt và W2-A đến W2-C. Ghi lại thay đổi theo ID. Giữ các việc hoàn thành trong bảng theo dõi và chỉ tính hoàn thành trong kỳ theo ngày được xác nhận.
4. **Đóng gói quy trình.** Ghi người thu thập đầu vào, thời điểm chốt kỳ, cách xử lý mục thiếu và bước người phụ trách xác nhận bản cuối. Lưu prompt để tái sử dụng. Đo thời gian chuẩn bị, review và sửa cho mỗi kỳ.

## Đối chiếu kết quả

| Kỳ | Kết quả cần quan sát |
| --- | --- |
| 07–11/12 | T01 hoàn thành ngày 10/12. T02 đã giao Minh, hạn 16/12, phụ thuộc T01 đã được đáp ứng. T03 là đề xuất. T04 giữ hạn 15/12 và thiếu người phụ trách. Có một việc hoàn thành trong kỳ. |
| 14–18/12 | T02, T03 và T04 hoàn thành trong kỳ. T01 vẫn có trong bảng và thuộc kỳ trước. T05 đang mở, Lan phụ trách, hạn 21/12. Có ba việc hoàn thành trong kỳ và năm mã việc trong bảng. |

Việc kiểm tra thiết bị đã hoàn thành ở T04. Việc mượn cáp được theo dõi riêng ở T05.

## Đầu ra và rubric

Lưu hai bản báo cáo đã duyệt, bảng việc của hai kỳ, mẫu đầu vào và quy trình dùng lại.

| Tiêu chí | Đạt 2 điểm khi |
| --- | --- |
| Bảng việc **(bắt buộc)** | Cả hai kỳ đúng ID, trạng thái, người phụ trách, hạn và số việc hoàn thành |
| Báo cáo và ưu tiên | Bản cuối đủ tiến độ, vướng mắc và việc kế tiếp với người phụ trách đã xác nhận hoặc ghi rõ cần xác nhận |
| Dùng lại | Người khác có thể áp dụng mẫu cho kỳ mới và biết cách xử lý dữ kiện thiếu |
| Duyệt và đo | Có dấu vết duyệt theo nguồn và thời gian chuẩn bị, kiểm tra, sửa |

## Retrospective

Ghi một chỗ suýt đếm trùng hoặc sai trạng thái, bạn đã chặn lỗi ở bước nào và cách sửa mẫu để kỳ sau dễ đối chiếu hơn.

Cập nhật ngày 25/11/2026.
