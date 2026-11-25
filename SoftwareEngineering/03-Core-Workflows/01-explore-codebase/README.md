# 01 — Đọc codebase

## Mục tiêu

Lần theo một hành vi từ điểm vào đến kết quả quan sát được. Đầu ra là bản đồ đủ để chọn đúng nơi sửa và đúng lệnh kiểm tra.

## Quy trình

1. Đọc README và cấu trúc thư mục. Tìm lệnh chạy, lệnh test và ranh giới của module liên quan.
2. Chọn một hành vi cụ thể rồi tìm entry point theo command, route, event hoặc tên test.
3. Theo dữ liệu qua từng hàm. Ghi nơi nhập, nơi biến đổi, nơi trả kết quả và nơi xử lý lỗi.
4. Gắn mỗi nhận định với đường dẫn và tên hàm. Đánh dấu giả thuyết hoặc điều chưa biết. Chạy một ca nhỏ để kiểm tra bản đồ.

## Ví dụ

Trong [CLI mẫu](../practice/ticket-cli/README.md), `node bin/tickets.mjs --status closed` đi từ `bin/tickets.mjs` qua `listTickets` trong `src/cli.mjs`, rồi qua `selectTickets` trong `src/tickets.mjs`. CLI in hai ticket từ fixture theo thứ tự T-102, T-104. Việc giữ thứ tự có thể kiểm tra qua test và kết quả chạy. Chính sách sắp xếp của sản phẩm thật vẫn là một câu hỏi ở bước lập kế hoạch.

## Bài thực hành

Lập bản đồ cho lệnh `--status open` và một lần nhập trạng thái sai. Prompt gợi ý: “Chỉ đọc phần liên quan đến hai lệnh. Trả bảng bước, file/hàm, dữ liệu vào/ra và bằng chứng. Ghi rõ chỗ chưa xác minh.” Sau đó tự chạy hai ca.

Đạt khi bản đồ giải thích được nơi đọc tham số, nơi lọc, nơi in JSON và nơi chuyển lỗi thành exit code. Với React có thể lần từ thao tác đến state và render. Với API có thể lần từ route đến response và error handler.
