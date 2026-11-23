# 06 — Bài thực hành Claude Code

## Bài 1 — Read-first orientation

Cho Claude khám phá repository thực hành mà không sửa file. Đầu ra phải có evidence map, lệnh build/test và ít nhất hai unknown. Tự kiểm tra từng dẫn chứng.

## Bài 2 — Tạo instruction tối thiểu

Viết `CLAUDE.md` không quá khoảng 80 dòng cho repository:

- Structure.
- Command đã chạy thành công.
- Convention quan trọng.
- Safety boundary.
- Definition of done.

Mở session mới và kiểm tra Claude có dùng đúng command, không chỉ hỏi Claude “bạn đã đọc chưa”.

## Bài 3 — Permission test

Tạo rule hẹp cho focused test và deny đọc `.env*`. Chứng minh:

- Focused test phù hợp có thể chạy theo policy.
- Đọc file bị deny thực sự bị chặn.
- Rule nằm ở đúng user/project/local scope.

Không dùng file chứa secret thật để thử.

## Bài 4 — Implement Task A

Thực hiện đầy đủ orient → explore → contract → plan → implement → verify → review. Lưu:

- Prompt/task contract.
- Plan ban đầu và mọi lần re-plan.
- Final diff.
- Command cùng kết quả.
- Scorecard Foundations.

## Bài 5 — Debug Task B

Yêu cầu reproduction và root-cause evidence trước fix. Regression test phải fail trước và pass sau thay đổi.

## Bài 6 — Chọn extension

Từ nhật ký 5 bài trước, chọn đúng một candidate:

- Rule lặp lại → cập nhật `CLAUDE.md`.
- Procedure lặp lại → phác thảo skill.
- Check deterministic → phác thảo hook.
- Context ngoài repo → mô tả MCP cần thiết.

Không cần xây extension nếu chưa có friction thực tế.

## Điều kiện hoàn thành

- [ ] Instruction ngắn và đã được test bằng behavior.
- [ ] Permission được kiểm tra bằng allow/deny case.
- [ ] Task A đạt acceptance criteria.
- [ ] Task B có root cause và regression test.
- [ ] Bạn giải thích được toàn bộ diff.
- [ ] Có scorecard để so với Codex.
