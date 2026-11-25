# 10 — CI/CD

## Ví dụ

Cổng kiểm tra cho CLI có ba bước: lấy đúng revision, dùng phiên bản Node đã chốt cho dự án và chạy `node --test` tại thư mục CLI. Vì CLI mẫu không có dependency bên ngoài, bước test dùng trực tiếp runtime. Trên repo thật, dùng lệnh cài dependency theo lockfile nếu dự án có.

| Tín hiệu | Phép kiểm tra đầu tiên |
|---|---|
| CLI báo không tìm thấy file | Kiểm tra revision và working directory |
| Test report có expected/actual | Chạy lại đúng ca với cùng fixture và runtime |
| Local pass, CI fail | So phiên bản runtime, biến môi trường cần thiết và trạng thái cache |
| Bước kiểm tra pass nhưng bỏ qua test | Xem danh sách test thực sự chạy và điều kiện skip |

## Bài thực hành

Viết một job kiểm tra cho CI bạn dùng hoặc mô tả ba bước trên dưới dạng job nếu chưa có CI. Chạy các bước tương đương ở bản sao local. Tạo một test cố ý fail vì kết quả không khớp, xác nhận lệnh trả exit khác 0, rồi hoàn lại đúng dòng test đã thay và chạy lại. Ghi rõ job đã chạy trên CI hay mô phỏng tại local.

Đạt khi bạn có log fail/pass, xác định được bước fail đầu tiên và giải thích cách job chặn merge nếu được đặt thành kiểm tra bắt buộc. Với pipeline có deploy, giữ build/test và deploy ở các bước riêng để có thể áp dụng điều kiện phát hành và quyền phù hợp.
