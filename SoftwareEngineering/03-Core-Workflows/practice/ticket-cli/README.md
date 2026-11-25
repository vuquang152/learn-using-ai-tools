# CLI mẫu quản lý ticket

Chạy từ thư mục chứa README này với Node.js từ 18 trở lên.

```sh
node --test
node bin/tickets.mjs
node bin/tickets.mjs --status open
node bin/tickets.mjs --status closed
```

CLI in một mảng JSON. Fixture có ba ticket `open` (T-101, T-103, T-105) và hai ticket `closed` (T-102, T-104) theo thứ tự đầu vào. Smoke test xác nhận các đường đi cơ bản. Một lỗi hành vi được cài sẵn cho bài Debug.

Sao chép toàn bộ thư mục này sang nơi thực hành riêng để giữ bản gốc làm baseline. Nếu cần theo dõi diff, khởi tạo Git trong bản sao đặt ngoài repo học liệu, kiểm tra danh sách file rồi tạo commit baseline. Các bài sau dùng chung bản sao đó. [Về mục lục](../../README.md)
