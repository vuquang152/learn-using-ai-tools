# 04 — Debug

## Quy trình

1. Ghi đầu vào, môi trường, expected và actual. Dùng ca nhỏ nhất tái hiện được.
2. Liệt kê giả thuyết có thể phân biệt bằng phép kiểm tra. Kiểm tra điểm dữ liệu đổi dạng trước khi sửa.
3. Thêm regression test, ghi test fail vì đúng lỗi, sửa nguyên nhân rồi chạy lại cả ca hẹp và suite liên quan.

## Ví dụ

Trong [CLI mẫu](../practice/ticket-cli/README.md), `node bin/tickets.mjs --status " closed "` in `[]`, trong khi `--status closed` trả T-102 và T-104. Validator chấp nhận giá trị sau `trim()`, nhưng selector nhận chuỗi thô và so sánh chính xác. Hai lệnh dùng cùng fixture nên có thể loại giả thuyết dữ liệu thiếu. Contract của bài chấp nhận khoảng trắng hai đầu khi lọc.

## Bài thực hành

Viết test so hai lần gọi với `closed` và `" closed "`. Chứng minh test mới fail trên baseline. Chuẩn hóa một lần ở ranh giới CLI rồi chuyển giá trị đã chuẩn hóa cho selector. Kiểm tra `paused` vẫn bị từ chối. Nếu đã làm bài limit, chạy thêm ca kết hợp trạng thái có khoảng trắng và limit.

Đạt khi nhật ký có lệnh tái hiện, actual/expected, vị trí nguyên nhân và bằng chứng fail trước, pass sau. Với pipeline có thể dùng một record sai kiểu. Với UI có thể thu nhỏ lỗi thành một event và state trước/sau.
