# 07 — Tự động hóa

Kết quả của bài là workflow chạy thử được và bảng ca thử. Bạn có thể mô phỏng bằng bảng tính, hoặc làm trên n8n sau [bài thực hành n8n](../../02-Core-Tools/04-n8n/README.md). Dùng dữ liệu giả và một nơi ghi thử nghiệm do bạn kiểm soát.

## Thiết kế từ bước làm tay

1. Chọn việc ổn định, có đầu vào, đầu ra và quy tắc rõ ràng. Ghi thời gian và lỗi khi làm tay. Nếu nhóm còn tranh luận về nhãn hoặc quy tắc xử lý, chốt quy tắc trước.
2. Viết luồng **nhận dữ liệu → kiểm tra → phân loại → duyệt → ghi kết quả**. Điều kiện rõ ràng dùng quy tắc. Với văn bản tự do, AI có thể đề xuất nhãn trong danh sách cho phép, rồi chuyển trường hợp mơ hồ hoặc đầu ra sai cấu trúc cho người xử lý.
3. Chỉ tiếp tục bước ghi khi có quyết định duyệt gắn với đúng bản nháp. Người duyệt xem ID, nội dung đề xuất và đích ghi. Khi sửa bản nháp, yêu cầu duyệt lại. Với từ chối hoặc hết thời gian chờ, ghi trạng thái để xử lý bằng tay.
4. Dùng ID bản ghi làm khóa chống ghi trùng. Với thao tác ghi thật, dùng khóa duy nhất hoặc cơ chế idempotency của nơi nhận nếu có. Khi lần ghi trước có thể đã thành công nhưng mất phản hồi, xác minh kết quả trước khi thử lại.
5. Ghi log ID, thời điểm, bước và trạng thái. Chỉ thử lại lỗi tạm thời với giới hạn. Dữ liệu thiếu hoặc quyết định không hợp lệ chuyển xử lý thủ công. Để dừng, tắt tiếp nhận lượt mới, xem các lượt đang chờ và xử lý từng mục trước khi mở lại.

## Bài thực hành phân loại phản hồi

Đầu vào gồm `id` và `noi_dung`. Nhãn có thể là `lich_hoc`, `thiet_bi` hoặc `khac`. Với mô phỏng, dùng hai bảng gồm hàng chờ duyệt và sổ kết quả. Nếu thực hành trên n8n, dùng Manual Trigger và Edit Fields để tạo lần lượt từng ca. Chạy phân loại trước, sau đó mô phỏng sự kiện duyệt bằng một đầu vào riêng có ID, phiên bản nháp và quyết định. Kiểm tra các giá trị này với hàng chờ trước bước ghi. Có thể phân loại bằng quy tắc từ khóa chứa “giờ học” hoặc “máy chiếu” sau khi chuyển nội dung sang chữ thường. Dùng nhãn khac nếu có nội dung và không khớp từ khóa nào. Nếu khớp nhiều nhãn, chuyển kiểm tra thủ công.

| Ca thử | Kết quả cần quan sát |
| --- | --- |
| A01, “Giờ học 14:00 khó tham gia”, chờ duyệt | Đề xuất `lich_hoc` trong hàng chờ, sổ kết quả chưa thêm dòng |
| Duyệt đúng bản nháp của A01 | Sổ kết quả xuất hiện đúng một dòng A01 |
| Chạy lại cùng quyết định A01 | Vẫn có một dòng A01 |
| A02, “Máy chiếu bị mờ”, từ chối | Ghi trạng thái từ chối, sổ kết quả chưa thêm A02 |
| A03, nội dung rỗng | Ghi lỗi đầu vào, bỏ qua phân loại và ghi kết quả |
| A04, “Máy chiếu chỉ dùng được sau giờ học” | Nhiều nhãn phù hợp, chuyển kiểm tra thủ công |
| A05 có bản nháp v2 và quyết định duyệt v1 | Yêu cầu duyệt v2, sổ kết quả chưa thêm A05 |
| A06 có bản nháp hết hạn, chưa được duyệt | Chuyển xử lý thủ công, sổ kết quả chưa thêm A06 |
| Lỗi tạm thời tại bước ghi | Xác minh theo ID, thử lại có giới hạn hoặc chuyển xử lý tay, giữ tối đa một dòng cho ID |

Bài đạt khi bảng đối chiếu có kết quả từng ca, bạn chỉ được cách dừng lượt mới, người duyệt kiểm được bản nháp và log đủ để tìm lỗi. Duyệt quyền truy cập, đích ghi và hành vi khi chạy lại trước khi kết nối dữ liệu thật.

## Tài liệu chính thức

Kiểm tra ngày 23/11/2026.

- [n8n — Xử lý lỗi workflow](https://docs.n8n.io/build/flow-logic/handle-errors-gracefully.md)
- [n8n — Phê duyệt khi AI agent gọi tool](https://docs.n8n.io/build/integrate-ai/ai-examples/human-in-the-loop-for-tools.md)
