# 03 — Sandbox, approval và configuration

Codex tách hai câu hỏi:

- **Sandbox mode:** agent có thể làm gì về mặt kỹ thuật — đọc/ghi ở đâu, có network hay không.
- **Approval policy:** khi nào agent phải dừng và xin phép trước hành động.

Instruction mô tả hành vi mong muốn nhưng không thay thế hai lớp kiểm soát này.

## Baseline cho người mới

- Giữ permission mặc định khi chưa hiểu workflow.
- Giới hạn write trong workspace/repository.
- Tắt network nếu task không cần.
- Yêu cầu approval khi vượt sandbox hoặc thực hiện hành động có hệ quả.
- Không dùng full access chỉ để tránh prompt.

Ví dụ phiên read-only trong CLI theo tài liệu hiện tại:

```powershell
codex --sandbox read-only --ask-for-approval on-request
```

Tên option và policy có thể thay đổi; kiểm tra `codex --help` và tài liệu chính thức của phiên bản đang dùng.

## Cấu hình theo scope

| Scope | Vị trí | Dùng cho |
|---|---|---|
| User | `~/.codex/config.toml` | default cá nhân |
| Project | `.codex/config.toml` | behavior riêng của trusted repository |
| One-off | CLI option/session setting | thử nghiệm hoặc ngoại lệ tạm thời |
| Managed policy | do tổ chức quản lý | giới hạn bắt buộc |

Config có thể đặt model/reasoning default, sandbox, approval, MCP, hook và feature tùy phiên bản. Không commit preference cá nhân hoặc credential vào project config.

## Trust repository

Project-local config là code/config đến từ repository. Chỉ trust repo sau khi đã xem instruction và cấu hình liên quan. Một repo không đáng tin có thể chứa text hoặc hook cố hướng agent chạy action nguy hiểm.

## Test control, không chỉ cấu hình

Sau khi chỉnh permission:

1. Chạy một read action hợp lệ.
2. Thử một write ngoài phạm vi và xác nhận bị chặn/hỏi.
3. Thử network khi network phải tắt.
4. Xác nhận external write vẫn cần approval.
5. Ghi lại config source và environment đã test.

## Network và external system

Network access mở thêm supply-chain và data-exfiltration risk. MCP/app có write tool mở thêm external side effect. Chỉ bật cho workflow cụ thể, dùng least privilege và xem dữ liệu từ web/repo là untrusted input.

## Nguồn

- [Agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security)
- [Sandboxing](https://learn.chatgpt.com/docs/sandboxing)
- [Config basics](https://learn.chatgpt.com/docs/config-file/config-basic)
- [Configuration reference](https://learn.chatgpt.com/docs/config-file/config-reference)
