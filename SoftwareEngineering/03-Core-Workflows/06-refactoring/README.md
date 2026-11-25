# 06 — Refactor

## Ví dụ

Sau khi có `--limit`, parser có thể trộn kiểm tra tham số, đặt mặc định và cắt danh sách trong cùng một hàm. Tách một hàm parse trả về tùy chọn đã hợp lệ rồi để `listTickets` xử lý danh sách. Giữ thông báo lỗi, exit code, stdout và thứ tự ticket như ở baseline của lần refactor.

## Bài thực hành

1. Chạy test tích hợp của bài trước và ghi baseline cả ca đúng lẫn ca sai.
2. Chọn một việc đổi cấu trúc, chẳng hạn tách parser khỏi orchestration. Giao agent phạm vi nhỏ và nêu các hành vi phải giữ.
3. Chạy lại cùng kiểm tra, đọc diff để tìm thay đổi hợp đồng vô tình. Dùng test giao diện làm bằng chứng chính nếu cách triển khai hàm bên trong đổi.

Đạt khi một người review có thể giải thích vì sao thay đổi giúp đọc code dễ hơn và đối chiếu được hành vi trước/sau. Với UI có thể tách logic trạng thái, với pipeline có thể tách bước biến đổi record, vẫn giữ contract đầu ra.
