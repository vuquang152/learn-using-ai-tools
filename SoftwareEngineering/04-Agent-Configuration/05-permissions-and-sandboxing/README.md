# 05 — Phân quyền và sandbox

Approval quyết định khi nào client hỏi. Sandbox giới hạn khả năng của tiến trình chạy trong sandbox. MCP server còn có quyền riêng của tiến trình hoặc credential. Dùng fixture vô hại để kiểm tra từng lớp.

## Claude Code

Ghép [mẫu JSON](../practice/examples/claude-permissions.json) vào `.claude/settings.local.json` của bản sao. Mẫu yêu cầu duyệt tool tra ticket, từ chối sửa fixture trong `data/` và từ chối đọc bằng file tools trong `lab-private/`. Tạo một file giả `lab-private/demo.txt` để thử. Dùng `/permissions` để kiểm tra rule.

Thử đọc `src/cli.mjs`, đọc file giả bằng công cụ file và sửa fixture bằng công cụ file. Kỳ vọng ca đầu được phép, hai ca sau bị chặn. Với MCP đã kết nối, gọi `get_ticket` để quan sát prompt yêu cầu quyền. Rule file tools có giới hạn, đặc biệt với subprocess đọc hoặc sửa gián tiếp. Kiểm tra sandbox theo OS và shell nếu cần biên kỹ thuật cho shell. [Claude Code permissions](https://code.claude.com/docs/en/permissions) · [Sandbox Bash](https://code.claude.com/docs/en/sandboxing)

## Codex

Ghép [hai khóa TOML](../practice/examples/codex-read-only.toml) vào đầu `.codex/config.toml`, trước các bảng TOML như `[mcp_servers.ticketlab]`. Mở phiên mới trong project tin cậy. Có thể thử một lần bằng `codex --sandbox read-only --ask-for-approval on-request` nếu chính sách cho phép.

Đọc `src/cli.mjs` rồi yêu cầu tạo `lab/sandbox-probe.txt`. Kỳ vọng ca đọc được phép, ca ghi bị chặn hoặc xin duyệt. Từ chối đề nghị nâng quyền rồi kiểm tra file chưa xuất hiện. Nếu cần luyện phiên có ghi, dùng `workspace-write` trong bản sao với policy tương ứng. [Codex approvals và sandbox](https://learn.chatgpt.com/docs/agent-approvals-security)

Đạt khi ghi được hành động, policy có hiệu lực, kết quả kỳ vọng, kết quả thực và trạng thái file cuối. Khi áp dụng cho repo thật, kiểm tra riêng quyền mạng, dữ liệu nhạy cảm, push và MCP tool ghi.
