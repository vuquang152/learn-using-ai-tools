# 06 — Tối ưu OpenRouter

## Đo chất lượng, độ trễ và tiền cho cùng workload

Chọn bộ mẫu có ca bình thường, ca biên và đầu vào thiếu bằng chứng. Ghi model yêu cầu, model trả về, response ID, thời gian, usage/cost nếu có và kết quả chấm. Kiểm tra Activity cho số tiền ghi nhận và giữ giá theo model/provider ở thời điểm đo. Dùng cùng output schema và tiêu chí nghiệp vụ khi so model. [OpenRouter Activity](https://openrouter.ai/activity) · [Chat Completions API](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)

## Các thay đổi có thể đo

1. **Đầu vào và đầu ra.** Dùng chỉ dẫn đủ cụ thể, giữ dữ kiện cần cho quyết định và biểu diễn đầu ra ngắn theo schema. Đặt giới hạn output phù hợp. Chấm phản hồi bị cắt hoặc JSON không hợp lệ là fail và tính cả các lần thử lại.
2. **Model và provider.** Thử một model khác trên cùng bộ mẫu trước khi đổi mặc định. Ghi khi fallback xảy ra nếu có dữ liệu. So độ trễ, schema, chất lượng và chi phí vì các tuyến có thể khác nhau. Giới hạn tập provider theo chính sách dữ liệu dự án. [Provider routing](https://openrouter.ai/docs/guides/routing/provider-selection)
3. **Prompt caching.** Khi provider hỗ trợ, giữ phần instruction hoặc schema dùng chung ở đầu request và phần biến đổi ở sau. Kiểm tra token cache đọc/ghi nếu API cung cấp, cùng chi phí của lần đầu và các lần sau. Điều kiện cache, thời hạn và giá phụ thuộc provider. [Prompt caching](https://openrouter.ai/docs/guides/best-practices/prompt-caching)
4. **Ngân sách và retry.** Tách khóa theo môi trường, đặt giới hạn chi tiêu nơi khả dụng và giới hạn số lần gọi cho mỗi tác vụ. Tuân thủ `Retry-After` khi áp dụng. Tính cả request phát sinh khi retry hoặc fallback. [Giá và tính năng theo gói](https://openrouter.ai/pricing) · [Lỗi API](https://openrouter.ai/docs/api/reference/errors-and-debugging)

## Bài đo nhanh

Dùng ba log giả lập: test sai kỳ vọng, thiếu biến cấu hình test và log thiếu thông tin. Yêu cầu đầu ra có trạng thái cùng một câu tóm tắt. Chạy cùng bộ mẫu ở hai model hoặc hai kích thước context. Chấm ba điều kiện: đúng schema, giữ dữ kiện, xử lý hợp lý khi thiếu bằng chứng. Với stub, mô phỏng cả phản hồi bị cắt và `429` để kiểm tra điểm dừng, rồi để cột tiền và cache ở `N/A`.
