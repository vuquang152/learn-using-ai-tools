# 04 — Agent Configuration

Học cách cấu hình Claude Code và Codex cho một repo dùng chung. Các ví dụ chạy trên CLI local và dùng lại Ticket CLI ở phần 03. [Chuẩn bị workspace và bài tổng hợp](./practice/README.md)

1. [AGENTS.md và CLAUDE.md](./01-repository-instructions/README.md)
2. [Skills tái sử dụng](./02-reusable-skills/README.md)
3. [MCP](./03-mcp-and-tools/README.md)
4. [Hooks](./04-hooks-and-automation/README.md)
5. [Phân quyền và sandbox](./05-permissions-and-sandboxing/README.md)

| Khi cần | Dùng |
|---|---|
| Quy ước repo và lệnh kiểm tra áp dụng thường xuyên | AGENTS.md hoặc CLAUDE.md |
| Quy trình review hay triage lặp lại | Skill |
| Nguồn dữ liệu hoặc thao tác từ công cụ bên ngoài phiên | MCP |
| Chạy lệnh theo sự kiện của client | Hook |
| Giới hạn hành động của client và tiến trình | Approval, sandbox và quyền dịch vụ |

Tài liệu sản phẩm đối chiếu ngày **2026-11-25**. Mẫu nhắm đến CLI local. Khi chuyển sang IDE, desktop hoặc cloud, đối chiếu nơi cấu hình được nạp và chính sách tài khoản.
