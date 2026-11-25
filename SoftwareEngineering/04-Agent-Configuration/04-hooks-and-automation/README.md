# 04 — Hooks và automation

Bài mẫu chạy một lệnh cố định khi client phát sự kiện `SessionStart` với matcher `startup`. Script chỉ in một marker và kết thúc.

## Cấu hình mẫu

- Sao chép [script](../practice/examples/session-note.mjs) thành `lab/session-note.mjs`. Từ root bản sao, chạy `node lab/session-note.mjs` để kiểm tra output `TICKETLAB-START`.
- **Claude Code.** Ghép [JSON hook](../practice/examples/session-hooks.json) vào `.claude/settings.json`. Mở phiên mới từ root và kiểm tra `/hooks`. Stdout dạng văn bản của `SessionStart` được đưa vào context. [Claude Code hooks](https://code.claude.com/docs/en/hooks)
- **Codex.** Đặt cùng JSON tại `.codex/hooks.json` của project tin cậy. Dùng `/hooks` để kiểm tra và duyệt đúng hook mẫu rồi mở phiên mới. Stdout của `SessionStart` bổ sung context. [Codex hooks](https://learn.chatgpt.com/docs/hooks)

## Bài thực hành

1. Trong một phiên mới trước khi bật, hỏi ghi chú khởi động có marker nào. Yêu cầu trả lời từ context hiện có, không mở file hoặc chạy lệnh. Lặp lại sau khi bật mà không đưa tên marker vào prompt.
2. Đối chiếu marker với nguồn hook trong client hoặc log chẩn đoán. Bỏ riêng handler mẫu, mở phiên mới và xác nhận marker biến mất.
3. Nếu lệnh chạy tay được mà hook không chạy, kiểm tra trust, matcher, PATH và working directory. Ghi thời gian chạy và cách thu hồi.

Khi chuyển sang lint hoặc test, chọn lệnh cố định và timeout rõ. Giữ cổng kiểm tra bắt buộc ở CI. Xác minh schema theo client nếu dùng hook để chặn hành động.
