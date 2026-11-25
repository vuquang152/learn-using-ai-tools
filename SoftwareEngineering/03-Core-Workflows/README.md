# 03 — Core Workflows

Học cách đưa một thay đổi từ yêu cầu đến diff đã kiểm chứng với Claude Code, Codex hoặc quy trình thủ công. Các bài dùng cùng một [CLI mẫu quản lý ticket](./practice/ticket-cli/README.md), viết bằng JavaScript chạy trên Node.js từ 18 trở lên, không cần cài package. Có thể thay CLI bằng repository của bạn nếu giữ cùng loại đầu ra và tiêu chí cho từng bài.

## Thứ tự học

1. [Đọc codebase](./01-explore-codebase/README.md) — bản đồ có đường dẫn và tên hàm.
2. [Lập kế hoạch từ yêu cầu](./02-requirements-to-plan/README.md) — contract có ví dụ và điều kiện đạt.
3. [Implement feature](./03-implement-feature/README.md) — diff nhỏ và bằng chứng chạy test.
4. [Debug](./04-debugging/README.md) — ca tái hiện, nguyên nhân và regression test.
5. [Testing](./05-testing/README.md) — ma trận hành vi và test ở đúng tầng.
6. [Refactor](./06-refactoring/README.md) — thay đổi cấu trúc với hành vi được bảo toàn.
7. [Code review](./07-code-review/README.md) — nhận xét có bằng chứng và mức ảnh hưởng.
8. [Documentation](./08-documentation/README.md) — hướng dẫn đã đối chiếu với CLI thực tế.
9. [Git và worktree](./09-git-and-worktrees/README.md) — base commit rõ và diff cô lập.
10. [CI/CD](./10-ci-cd/README.md) — phân loại test fail và thiết kế cổng kiểm tra.

Chạy smoke test theo README của CLI trước khi bắt đầu. Lưu bản đồ, kế hoạch, kết quả test và nhận xét review trong một nhật ký bài tập. [Bài tổng hợp](./practice/README.md) có rubric và gợi ý chuyển sang frontend, backend, DevOps hoặc data pipeline.
