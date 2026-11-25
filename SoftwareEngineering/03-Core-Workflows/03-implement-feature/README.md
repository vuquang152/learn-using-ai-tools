# 03 — Implement feature

## Quy trình

1. Ghi base commit, working tree và kết quả test trước sửa.
2. Chọn một lát cắt có cả hành vi và kiểm tra. Thêm một test cần fail vì feature còn thiếu, rồi triển khai đến khi test pass.
3. Xử lý các ca biên theo contract. Chạy test tập trung, test toàn bộ và một lệnh qua điểm vào thật.
4. Đọc diff và đối chiếu từng điều kiện chấp nhận. Ghi phần chưa kiểm chứng.

## Ví dụ

Với `--limit`, parser có thể duyệt theo cặp cờ–giá trị, lưu cờ đã thấy để phát hiện lặp và kiểm tra dạng chuỗi trước khi chuyển đổi. Chọn ticket bằng logic sẵn có, sau đó cắt kết quả nếu có limit. Kiểm tra sự hiện diện của giá trị bằng `limit === undefined` hoặc cách tương đương để giữ hành vi của 0.

## Bài thực hành

Triển khai contract ở [bài lập kế hoạch](../02-requirements-to-plan/README.md) trong bản sao của CLI. Giao agent mục tiêu, tiêu chí, vùng sửa là parser, xử lý danh sách và test. Yêu cầu giữ dependency và fixture. Lưu đầu ra của `node --test` và lệnh `node bin/tickets.mjs --status open --limit 2`.

Đạt khi CLI trả đúng hai ID, đổi thứ tự cờ vẫn chạy và các ca lỗi được kiểm tra. Với service có thể triển khai một endpoint và một integration test. Với UI có thể triển khai một tương tác từ event đến render.
