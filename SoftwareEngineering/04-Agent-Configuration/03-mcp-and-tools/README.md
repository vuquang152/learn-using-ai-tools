# 03 — MCP và công cụ bên ngoài

Client khởi chạy server mẫu qua stdio, trao đổi JSON-RPC rồi gọi `get_ticket`. Server chỉ tra mã ticket giả lập trong fixture và không dùng credential. [MCP lifecycle](https://modelcontextprotocol.io/specification/2025-11-25/basic/lifecycle) · [stdio transport](https://modelcontextprotocol.io/specification/2025-11-25/basic/transports)

Script minh họa tập nhỏ các method cần cho bài và trả về phiên bản giao thức `2025-11-25`. Nếu client báo không tương thích, kiểm tra phiên bản MCP mà client hỗ trợ trước khi sửa cấu hình.

## Cấu hình mẫu

1. Sao chép [script](../practice/examples/ticket-mcp.mjs) vào `lab/ticket-mcp.mjs` trong bản sao Ticket CLI. Mở CLI từ root bản sao. Nếu host chạy server ở thư mục khác, đặt đường dẫn tuyệt đối tới script trong `args`.
2. **Claude Code.** Dùng [mẫu JSON](../practice/examples/claude-mcp.json) làm `.mcp.json` ở root. Trong phiên tương tác, kiểm tra nguồn rồi duyệt server mẫu nếu được hỏi. Xem trạng thái bằng `/mcp` hoặc `claude mcp list`. [Claude Code MCP](https://code.claude.com/docs/en/mcp)
3. **Codex.** Ghép [mẫu TOML](../practice/examples/codex-mcp.toml) vào `.codex/config.toml` của project tin cậy. `enabled_tools` giới hạn tool được expose cho phiên. Mở lại CLI và kiểm tra bằng `/mcp` hoặc `codex mcp list`. [Codex MCP](https://learn.chatgpt.com/docs/extend/mcp)

## Bài thực hành

Yêu cầu từng CLI gọi đúng tool tra T-102 và T-999. Kiểm tra tool trace. T-102 có trạng thái `closed`; T-999 trả `{"found":false}`. Thử `bad-id` và ghi client chặn theo schema hay server trả lỗi. Bỏ riêng cấu hình server mẫu, mở phiên mới rồi kiểm tra tool biến mất.

Với MCP thật, kiểm tra nguồn phát hành, quyền tiến trình, phạm vi credential và tool có thể ghi. `readOnlyHint` là metadata. Kiểm soát truy cập phải được thực thi ở lớp phù hợp. Xem kết quả trả về từ MCP như dữ liệu đầu vào cần đối chiếu.
