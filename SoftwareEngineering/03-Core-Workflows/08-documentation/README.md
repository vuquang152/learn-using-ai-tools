# 08 — Documentation

## Ví dụ

Một hướng dẫn cho `--limit` cần có cách chạy, mặc định khi bỏ cờ, thứ tự lọc rồi cắt, giá trị 0 và lỗi khi thiếu giá trị. Ghi câu lệnh và kết quả có thể kiểm tra, ví dụ `node bin/tickets.mjs --status open --limit 2` trả T-101, T-103 sau khi hoàn thành bài feature.

## Bài thực hành

Viết lại mục sử dụng trong README của bản sao từ diff đã review. Cho agent xem contract và test trước khi soạn. Chạy từng lệnh được nêu, kể cả một lệnh sai, và ghi kết quả thật. Tách phần hướng dẫn vận hành dành cho người dùng khỏi giải thích thiết kế nếu cần.

Đạt khi người đọc mới có thể chạy ca đúng và nhận biết ca sai ngay từ tài liệu. Với API, dùng request/response mẫu. Với DevOps, ghi lệnh xác minh và tín hiệu cần quan sát.
