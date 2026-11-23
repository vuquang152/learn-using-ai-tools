# 04 — Workflow, review và worktree

## Workflow chuẩn

### 1. Orient

Yêu cầu Codex kiểm tra environment, git status, instruction và verification command trước khi sửa.

### 2. Explore

Tạo evidence map. Với task khó, dùng Plan mode hoặc yêu cầu Codex phỏng vấn để làm rõ requirement trước implementation.

### 3. Task contract

Một prompt tốt có bốn phần cốt lõi: goal, context, constraints và done when. Bổ sung non-goals cùng verification cho task quan trọng.

### 4. Implement theo checkpoint

- Focused change trước.
- Focused test sớm.
- Re-plan khi evidence khác assumption.
- Không làm mất hoặc ghi đè thay đổi của người dùng.

### 5. Verify và review

Yêu cầu mapping acceptance criterion → evidence. Dùng diff view trên desktop hoặc `git diff` trong CLI. `/review` có thể review uncommitted change, commit hoặc so với base branch tùy surface/version; review của agent không thay thế review của con người.

## Worktree dùng để làm gì

Worktree tạo checkout tách biệt để agent làm nền mà không sửa trực tiếp working copy chính. Phù hợp khi:

- Chạy nhiều task độc lập song song.
- Muốn thử approach rủi ro hơn.
- Local checkout đang có công việc dở.
- Cần review diff trước khi đưa thay đổi về foreground.

Không dùng nhiều agent trên cùng file trong cùng working tree. Worktree giảm conflict vật lý nhưng không giải quyết conflict thiết kế giữa hai task.

## Quy tắc worktree

- Mỗi chat/task có outcome rõ.
- Biết branch/commit làm base.
- Thiết lập dependency và file local cần thiết một cách có chủ đích.
- Không copy secret vào worktree nếu task không cần.
- Review và test trong environment nơi thay đổi thực sự chạy.
- Dùng handoff/cơ chế của app thay vì tự làm Git operation mạo hiểm khi chưa hiểu trạng thái.

Git chỉ cho một branch được checkout tại một worktree ở một thời điểm. Codex-managed worktree có thể bắt đầu ở detached HEAD; tạo branch hoặc handoff theo workflow của app trước khi ship.

## Khi không nên dùng worktree

- Task rất nhỏ và cần tương tác liên tục với app đang chạy local.
- Build phụ thuộc nhiều state local chưa được tái tạo.
- Người dùng chưa hiểu thay đổi hiện có sẽ được mang sang worktree thế nào.

## Nguồn

- [Codex best practices](https://learn.chatgpt.com/guides/best-practices)
- [Code review](https://learn.chatgpt.com/docs/code-review)
- [Git worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees)
