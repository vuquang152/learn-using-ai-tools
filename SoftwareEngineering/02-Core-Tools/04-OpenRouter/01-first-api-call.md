# 01 — Gọi API đầu tiên từ PowerShell

1. Tạo khóa dành riêng cho bài học theo Quickstart. Đặt hạn mức chi tiêu thấp cho khóa nếu tài khoản hỗ trợ. Lưu khóa trong biến môi trường `OPENROUTER_API_KEY` của phiên PowerShell bằng cơ chế quản lý secret bạn đang dùng.
2. Chọn model ID hỗ trợ đầu vào và đầu ra dạng văn bản trong danh mục mô hình. Kiểm tra giá và đặt ID đó vào biến `$modelId` trong ví dụ. Lời gọi thật có thể phát sinh phí.
3. Gửi một request không streaming với kết quả build giả lập. [Quickstart](https://openrouter.ai/docs/quickstart) · [Danh mục mô hình](https://openrouter.ai/models)

```powershell
$modelId = 'REPLACE_WITH_MODEL_ID'
if ([string]::IsNullOrWhiteSpace($env:OPENROUTER_API_KEY)) {
    throw 'Thiếu OPENROUTER_API_KEY trong phiên PowerShell.'
}
if ($modelId -eq 'REPLACE_WITH_MODEL_ID') {
    throw 'Chọn một model ID trong danh mục OpenRouter.'
}

$body = @{
    model = $modelId
    stream = $false
    max_completion_tokens = 256
    messages = @(
        @{ role = 'system'; content = 'Summarize fictional build logs in one Vietnamese sentence. Use only facts in the log.' }
        @{ role = 'user'; content = 'orders-api build failed. OrderServiceTest expected 2 orders but found 1.' }
    )
} | ConvertTo-Json -Depth 5

$response = Invoke-RestMethod -Method Post `
    -Uri 'https://openrouter.ai/api/v1/chat/completions' `
    -Headers @{ Authorization = "Bearer $env:OPENROUTER_API_KEY" } `
    -ContentType 'application/json' -Body $body -TimeoutSec 30

$choice = @($response.choices)[0]
if ($response.error -or $choice.error -or
    $choice.finish_reason -ne 'stop' -or
    [string]::IsNullOrWhiteSpace($choice.message.content)) {
    throw 'Phản hồi lỗi, bị cắt hoặc thiếu nội dung hoàn chỉnh.'
}

$choice.message.content
$response | Select-Object id, model, usage
```

Đối chiếu câu trả lời với hai dữ kiện trong đầu vào. Build của `orders-api` thất bại và test kỳ vọng 2 đơn hàng nhưng nhận 1. Nếu câu trả lời khẳng định nguyên nhân mà log chưa cho biết, đánh dấu sai. Lưu model ID và response ID trong nhật ký bài tập. [Chat Completions API](https://openrouter.ai/docs/api/api-reference/chat/send-chat-completion-request?explorer=true)
