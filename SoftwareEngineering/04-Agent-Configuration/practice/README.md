# Thực hành cấu hình hai coding agent

Sao chép [Ticket CLI](../../03-Core-Workflows/practice/ticket-cli/README.md) vào một thư mục riêng ngoài repo học liệu và khởi tạo Git trong bản sao để có project root rõ ràng. Từ root bản sao, chạy `node test/smoke.test.mjs` và ghi kết quả. Dùng Node.js từ 18 trở lên và hai CLI đã đăng nhập. Lab MCP và hook chạy local, không cần server từ xa hay khóa riêng.

Các mẫu nằm trong `examples/` và có tên để đọc hoặc sao chép. Áp dụng từng nhóm theo cột đích. Nếu file đích đã có giá trị, ghép phần cần thiết và xem diff trước khi mở phiên mới.

| Mẫu | Đích tương đối so với root Ticket CLI |
|---|---|
| [Quy ước chung](./examples/AGENTS.md.example) và [file import](./examples/CLAUDE.md.example) | `AGENTS.md`, `CLAUDE.md` |
| [Quy ước src](./examples/nested-AGENTS.md.example) và [file import src](./examples/nested-CLAUDE.md.example) | `src/AGENTS.md`, `src/CLAUDE.md` |
| [Skill review](./examples/SKILL.md.example) | `.claude/skills/ticket-review/SKILL.md` và `.agents/skills/ticket-review/SKILL.md` |
| [MCP server](./examples/ticket-mcp.mjs) | `lab/ticket-mcp.mjs` |
| [Claude MCP](./examples/claude-mcp.json) và [Codex MCP](./examples/codex-mcp.toml) | `.mcp.json` và phần bảng MCP trong `.codex/config.toml` |
| [Hook script](./examples/session-note.mjs) | `lab/session-note.mjs` |
| [Hook JSON](./examples/session-hooks.json) | Ghép vào `.claude/settings.json` và đặt tại `.codex/hooks.json` |
| [Claude permissions](./examples/claude-permissions.json) và [Codex read-only](./examples/codex-read-only.toml) | `.claude/settings.local.json` và các khóa cấp root trong `.codex/config.toml` |

## Bài tổng hợp

Chạy hai phiên CLI riêng trên cùng baseline. Áp dụng [bài 01–05](../README.md) theo thứ tự. Sau mỗi bài, ghi một phép thử dương và một phép thử đối chứng. Lưu phiên bản CLI, config đã dùng và kết quả kiểm tra có thể chạy lại. Chấm mỗi mục tối đa hai điểm: một điểm nếu có kết quả, hai điểm nếu có cả bằng chứng đối chứng.

1. Root instruction và quy ước `src` xuất hiện ở scope tương ứng.
2. Skill trả đúng ba mục ở ca review và giữ nguyên fixture.
3. MCP tra đúng T-102, xử lý mã không tồn tại và biến mất khi bỏ config.
4. Marker xuất hiện sau khi bật hook và biến mất sau khi tắt.
5. Phép thử đọc/sửa đúng biên quyền và file cuối có trạng thái như dự kiến.

Nếu client hoặc policy quản trị không cho chạy một sản phẩm, ghi bài nào chưa xác nhận. Dùng smoke test, kiểm tra cấu hình và chạy script local để xác nhận phần có thể thực hiện trong môi trường hiện tại.
