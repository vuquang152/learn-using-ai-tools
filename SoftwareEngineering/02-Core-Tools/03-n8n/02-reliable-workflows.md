# 02 — Xử lý lỗi và kiểm soát tác động

## Phân biệt lỗi build và lỗi workflow

`status=failed` là một kết quả build hợp lệ cần phân loại. Payload thiếu `runId` hoặc có trạng thái lạ cần đi tới nhánh báo dữ liệu không hợp lệ. Nếu bước gọi API hết thời gian chờ, xem node lỗi trong **Executions** và xử lý như lỗi tích hợp. Khi triển khai trigger tự động, có thể cấu hình error workflow với **Error Trigger** để ghi nhận sự cố thực thi. [Xử lý lỗi trong n8n](https://docs.n8n.io/flow-logic/error-handling/)

| Tình huống | Hành vi mong đợi |
|---|---|
| Build lỗi | Tạo mục cần review |
| Dữ liệu thiếu hoặc sai | Trả lý do từ chối và kết thúc |
| API báo giới hạn hoặc lỗi tạm thời | Chờ theo chính sách giới hạn số lần thử |
| Sự kiện build được gửi lại | Dùng cùng khóa để tránh tạo thêm thông báo hoặc ticket |

## Trước khi nối với hệ thống thật

- Lưu khóa API trong n8n Credentials. Khi chia sẻ workflow, kiểm tra workflow export và execution data để loại dữ liệu nhạy cảm.
- Chọn khóa chống trùng theo hệ thống nguồn, chẳng hạn `service:runId` nếu một build có một kết quả cuối. Nếu ghi vào hệ thống khác, dùng cơ chế idempotency của đích hoặc lưu khóa với ràng buộc duy nhất. Hai execution song song có thể cùng vượt qua một bước kiểm tra trùng thông thường.
- Khi thêm HTTP Request, đặt timeout và giới hạn retry. Với thao tác ghi, kiểm tra idempotency trước khi thử lại vì timeout có thể xảy ra sau khi phía đích đã ghi thành công. [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/)
- Giữ bước review cho thông báo nhạy cảm. Đầu ra cần duyệt có thể chứa `runId`, `service` và bản nháp tóm tắt đã loại dữ liệu nhạy cảm.
