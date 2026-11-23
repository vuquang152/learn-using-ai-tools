# 02 — Chọn mô hình, định tuyến và xử lý lỗi

## Model và provider

Model ID chọn mô hình xử lý. Một mô hình có thể có nhiều provider phục vụ. Provider fallback chuyển sang provider khác của cùng mô hình. Model fallback chuyển sang model khác, vì vậy ứng dụng cần đánh giá lại chất lượng đầu ra và tính tương thích khi bật cơ chế này. Với dữ liệu công việc, đối chiếu các provider đủ điều kiện với chính sách xử lý dữ liệu của dự án trước khi gửi request. [Provider routing](https://openrouter.ai/docs/guides/routing/provider-selection)

Để so hai mô hình, giữ nguyên tập dữ liệu giả lập và tiêu chí chấm. Ghi model được yêu cầu, model trả về, thời gian, token sử dụng nếu có và số lượt đạt. Khi dùng structured output, kiểm tra mẫu JSON và quy tắc nghiệp vụ ngay trong ứng dụng, đồng thời kiểm tra model/provider có hỗ trợ tham số cần dùng.

## Hành vi của backend

| Kết quả | Cách xử lý trong bài tập |
|---|---|
| `400` hoặc `401` | Kiểm tra payload hoặc cấu hình khóa, dừng lần gọi |
| `402` | Kiểm tra nguồn lỗi và trạng thái ngân sách trước khi quyết định có thử lại |
| `429` hoặc `503` | Đọc `Retry-After` nếu có. Chỉ thử lại trong giới hạn số lần và tổng thời gian |
| Timeout | Ghi nhận ứng dụng chưa nhận được kết quả. Khi cân nhắc retry, tính cả khả năng lần gọi trước đã tiêu thụ token |
| HTTP thành công nhưng output lỗi, rỗng hoặc bị cắt | Trả trạng thái cần xử lý và giữ nguyên dữ liệu gốc |

Ghi log mã lỗi, thời gian, model và response ID nếu có. Giữ API key và nội dung build log ngoài log của ứng dụng. Đặt timeout kết nối và timeout đọc trong HTTP client. Bắt đầu với fallback do ứng dụng quản lý ở trạng thái tắt để quan sát hành vi dễ hơn. [Lỗi và `Retry-After`](https://openrouter.ai/docs/api/reference/errors-and-debugging)
