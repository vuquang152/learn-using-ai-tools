# 09 — Git và worktree

## Ví dụ

Bạn đang làm feature limit nhưng muốn điều tra lỗi status từ baseline. Trong bản sao đã khởi tạo Git và có commit, kiểm tra đường dẫn đích chưa tồn tại, rồi tạo worktree bên cạnh bằng `git worktree add -b practice/status-fix ../ticket-cli-status HEAD`. Chạy `git worktree list` và kiểm tra `git status --short` trong cả hai thư mục. HEAD ở đây là commit hiện tại. Nếu cần đúng baseline cũ hơn, dùng commit đã ghi từ bài implement.

## Bài thực hành

1. Ghi base bằng `git rev-parse HEAD`, tạo worktree cho một task, rồi mở agent tại thư mục đó.
2. Chạy test và xem `git status --short` cùng `git diff` để review thay đổi chưa stage. Nếu đã stage thì xem thêm `git diff --cached`.
3. Kiểm tra thay đổi chỉ nằm ở worktree được giao. Khi đã commit phần thực hành, dùng `git diff <base-commit>...HEAD` để chuẩn bị review.

Đạt khi chỉ rõ được branch, base, đường dẫn và diff của task. Nếu hai thay đổi chạm cùng một hàm, ghi cách sẽ kiểm tra lại hành vi sau khi tích hợp. Dùng bản sao để luyện trước khi áp dụng lên nhánh công việc.
