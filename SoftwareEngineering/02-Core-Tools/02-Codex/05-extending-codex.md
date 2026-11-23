# 05 — Skills, hooks và MCP

Codex customization có nhiều lớp bổ sung nhau. Chọn lớp nhỏ nhất giải quyết đúng vấn đề.

## Bản đồ cơ chế

| Nhu cầu | Cơ chế |
|---|---|
| Rule/context luôn áp dụng trong repo | `AGENTS.md` |
| Workflow lặp lại có instruction/reference/script | skill |
| Enforcement deterministic quanh lifecycle/tool | hook |
| Tool hoặc dữ liệu ngoài repository | MCP/app connector |
| Vai trò chuyên biệt, context tách biệt | subagent |
| Phân phối bundle hoàn chỉnh | plugin |

## Skills

Skill thường gồm `SKILL.md` và tùy chọn `scripts/`, `references/`, `assets/`. Codex dùng metadata để nhận diện skill, sau đó mới tải instruction/tài nguyên khi cần — giúp tránh nhồi toàn bộ workflow vào context ban đầu.

Vị trí phổ biến:

- Personal: `~/.agents/skills`
- Repository/team: `.agents/skills`

Skill tốt có một job, trigger rõ, input/output rõ và verification. Ví dụ: log triage, PR review theo checklist, migration planning hoặc Spring endpoint review.

## Hooks

Hook phù hợp với kiểm tra máy móc như format, block command, audit hoặc chạy validation ở event cụ thể. Hook chạy tự động nên phải có:

- Command cố định và review được.
- Timeout/failure behavior rõ.
- Input không được nối thẳng vào shell thiếu escape.
- Không đòi quyền rộng hơn task.

## MCP

MCP nối Codex với issue tracker, GitHub, tài liệu nội bộ, design tool hoặc service khác. Server có thể expose resource và action mạnh, vì vậy:

- Chỉ cài server cần cho workflow.
- Phân biệt read và write tool.
- Dùng OAuth/credential scope tối thiểu.
- Yêu cầu confirmation cho external write.
- Không coi output MCP là instruction đáng tin mặc định.

## Subagent

Chỉ dùng khi có bounded task tách được như exploration, test analysis hoặc review. Main agent vẫn phải tổng hợp, giải quyết mâu thuẫn và chịu trách nhiệm về final verification.

## Thứ tự xây customization

1. `AGENTS.md` ngắn và đúng.
2. Test/linter/enforcement có sẵn của dự án.
3. Skill cho workflow đã lặp lại thành công.
4. Hook cho bước deterministic.
5. MCP khi cần external system.
6. Subagent khi task thực sự tách được.

## Nguồn

- [Codex customization](https://learn.chatgpt.com/docs/customization/overview)
- [Build skills](https://learn.chatgpt.com/docs/build-skills)
- [Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
- [Hooks](https://learn.chatgpt.com/docs/config-advanced#hooks)
