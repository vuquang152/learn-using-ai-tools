# 06 — Bài thực hành Codex

Sử dụng cùng repository, Task A, Task B và rubric đã dùng với Claude Code. Nếu codebase state khác, kết quả không còn là phép so sánh công bằng.

## Bài 1 — Surface và environment

Chạy một phiên local read-only và ghi lại:

- Surface đang dùng.
- Working directory.
- Sandbox/approval.
- Instruction/config source.
- Build dependency có sẵn.

Nếu dùng desktop app, tạo thêm một worktree task nhỏ để quan sát sự khác biệt với Local.

## Bài 2 — `AGENTS.md`

Viết file không quá khoảng 80 dòng gồm structure, command, convention, safety và done. Mở chat mới và kiểm tra bằng hành vi:

- Codex dùng đúng focused test.
- Không sửa vùng bị cấm.
- Báo cáo verification theo yêu cầu.

## Bài 3 — Sandbox/approval test

Chứng minh một read action hợp lệ, một write ngoài workspace bị chặn/hỏi và network không được dùng khi đã tắt. Không thử bằng secret hoặc system path quan trọng.

## Bài 4 — Implement Task A

Thực hiện orient → explore → contract → plan → implement → verify → review. Lưu prompt, plan, diff, command/result và scorecard.

## Bài 5 — Debug Task B

Không cho sửa trước reproduction/root-cause evidence. Yêu cầu regression test fail trước và pass sau fix.

## Bài 6 — Worktree

Chạy một task độc lập trong worktree:

1. Xác nhận base commit/branch.
2. Thực hiện và test trong worktree.
3. Review diff.
4. Đưa thay đổi về workflow chính bằng cơ chế an toàn của app/Git.
5. Ghi lại vấn đề với ignored file, dependency hoặc branch nếu có.

## Bài 7 — Chọn customization

Từ friction thực tế, chọn đúng một thay đổi: cập nhật `AGENTS.md`, tạo skill outline, hook proposal hoặc MCP requirement. Giải thích vì sao các cơ chế còn lại không phù hợp.

## So sánh cuối module

| Tiêu chí | Claude Code | Codex |
|---|---|---|
| Thời gian chủ động | ... | ... |
| Correctness 0–2 | ... | ... |
| Scope control 0–2 | ... | ... |
| Verification 0–2 | ... | ... |
| Review effort 0–2 | ... | ... |
| Permission clarity | ... | ... |
| Context/instruction friction | ... | ... |

Không cần chọn “winner” tổng quát. Chọn primary tool cho workflow và môi trường của bạn, đồng thời ghi trường hợp tool còn lại phù hợp hơn.
