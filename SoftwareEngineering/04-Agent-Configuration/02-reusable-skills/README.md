# 02 — Skills tái sử dụng

Skill mô tả khi nào dùng, đầu vào cần có, các bước và định dạng kết quả. Giữ description sát tình huống kích hoạt. Có thể đặt checklist dài cạnh skill rồi dẫn đường dẫn để chỉ đọc khi cần.

Dùng cùng [mẫu SKILL.md](../practice/examples/SKILL.md.example) cho hai CLI.

| Client | Đích trong repo | Cách gọi thử |
|---|---|---|
| Claude Code | `.claude/skills/ticket-review/SKILL.md` | `/ticket-review` |
| Codex | `.agents/skills/ticket-review/SKILL.md` | Chọn hoặc nhắc `$ticket-review` trong composer |

[Claude Code skills](https://code.claude.com/docs/en/skills) · [Codex skills](https://learn.chatgpt.com/docs/build-skills)

## Bài thực hành

1. Mở phiên mới và gọi rõ tên skill. Yêu cầu review hành vi của `--status " closed "` trên baseline. Đầu ra cần có **Phát hiện**, **Bằng chứng** và **Chưa kiểm tra**. Kiểm tra nhận xét bằng [bài Debug](../../03-Core-Workflows/04-debugging/README.md).
2. Review thêm trạng thái `paused` để kiểm tra skill phân biệt bug với đầu vào bị từ chối đúng quy ước.
3. Trong phiên mới, yêu cầu dịch một câu để kiểm tra skill có tự kích hoạt ngoài phạm vi hay không nếu client cung cấp tín hiệu. Thu hẹp description nếu cần.

Đạt khi cả hai CLI trả bằng chứng về hành vi và giữ nguyên working tree trong lượt review.
