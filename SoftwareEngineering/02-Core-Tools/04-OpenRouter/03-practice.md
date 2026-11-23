# 03 — Bài thực hành Java/Spring và n8n

## Bài 1 — Tóm tắt build từ Spring

Trong repository luyện tập, tạo một adapter gọi OpenRouter. Dùng Spring `RestClient` nếu project đã hỗ trợ hoặc dùng HTTP client sẵn có. [Spring REST Clients](https://docs.spring.io/spring-framework/reference/integration/rest-clients.html)

1. Cấu hình base URL `https://openrouter.ai/api/v1` và model ID bên ngoài code. Đọc khóa từ biến môi trường hoặc secret store.
2. Viết hàm `summarizeBuild(String summary)`. Gửi `POST /chat/completions` với cấu trúc body ở [bài gọi API đầu tiên](./01-first-api-call.md). Giới hạn thời gian chờ và kích thước đầu vào.
3. Ánh xạ response hợp lệ sang DTO gồm bản tóm tắt, model và response ID. Nếu upstream lỗi hoặc bản tóm tắt không dùng được, trả trạng thái `summary_unavailable` ở lớp ứng dụng.
4. Dùng HTTP stub local cho các ca `200` hợp lệ, `200` với danh sách `choices` trống, `401` và `429`. Kiểm tra kết quả ứng dụng và số lần gọi stub. Bật retry chỉ khi đã có kỳ vọng cụ thể về số lần gọi.

Lấy ba đầu vào giả lập gồm test sai số lượng, build fail vì thiếu cấu hình test và log quá ngắn để xác định nguyên nhân. Chạy cùng ba đầu vào với hai mô hình trong ngân sách học. Chấm mỗi câu theo hai tiêu chí: giữ đúng dữ kiện và tránh thêm nguyên nhân chưa được chứng minh. Ghi thời gian, token nếu có và kết quả chấm trước khi chọn model mặc định.

## Bài 2 — Ghép với n8n

Tiếp tục từ [bài phân loại kết quả build](../03-n8n/03-practice.md).

1. Chèn **HTTP Request** chỉ vào nhánh `needs_review`. Chọn `POST`, URL `https://openrouter.ai/api/v1/chat/completions`, JSON body và xác thực bằng Header Auth credential. Đặt tên header `Authorization` với giá trị `Bearer <khóa>` trong credential.
2. Đặt tên node tạo bản nháp là `Build draft`. Dán expression bên dưới vào trường JSON body của **HTTP Request** và thay model ID. Đặt timeout cho node.
3. Khi API thành công, kiểm tra `error`, `choices[0].finish_reason` và `choices[0].message.content`. Hiển thị bản tóm tắt ở bước cuối để đọc trong editor. Chọn **On Error → Continue (using error output)** để nối nhánh lỗi tới bản nháp gốc. Cũng dùng bản nháp gốc khi output thiếu. Tham chiếu `{{ $('Build draft').item.json.runId }}` và `{{ $('Build draft').item.json.draft }}` để lấy dữ liệu ban đầu sau bước HTTP.
4. Chạy ba lượt: build lỗi có bản tóm tắt, build thành công bỏ qua API và build lỗi gặp lỗi upstream. Với lượt lỗi, dùng HTTP stub trả `503` hoặc credential thử nghiệm có giá trị giả. Ghi lại execution ID và xác nhận nhánh review vẫn giữ được `runId` và bản nháp gốc.

```javascript
{{ {
  model: 'REPLACE_WITH_MODEL_ID',
  stream: false,
  max_completion_tokens: 256,
  messages: [
    { role: 'system', content: 'Tóm tắt log build trong một câu. Chỉ dùng dữ kiện trong log.' },
    { role: 'user', content: String($json.summary ?? '') }
  ]
} }}
```

[HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) · [Chat Completions API](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
