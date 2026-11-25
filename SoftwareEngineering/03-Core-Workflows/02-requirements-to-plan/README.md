# 02 — Lập kế hoạch từ yêu cầu

## Quy trình

1. Viết lại yêu cầu thành hành vi nhìn thấy được. Chốt giá trị mặc định, thứ tự xử lý, đầu vào sai và tương thích ngược.
2. Dùng ví dụ để làm rõ các quyết định có thể đổi kết quả. Hỏi về quyết định nghiệp vụ còn thiếu hoặc ghi giả định để duyệt.
3. Ánh xạ từng điều kiện chấp nhận sang ca kiểm tra. Chia kế hoạch thành các bước có thể review riêng.

## Ví dụ — giới hạn số ticket

Yêu cầu ban đầu là “thêm limit cho lệnh liệt kê”. Dùng contract sau trong [CLI mẫu](../practice/ticket-cli/README.md).

| Khi gọi | Kỳ vọng |
|---|---|
| Không truyền `--limit` | Giữ kết quả và định dạng cũ |
| `--status open --limit 2` | Trả T-101, T-103 theo thứ tự fixture, lọc trước khi cắt |
| `--limit 2 --status open` | Cùng kết quả dù đổi thứ tự cờ |
| `--limit 0` | Thành công và in `[]` |
| `--limit 20` | Trả toàn bộ 5 ticket |
| Thiếu giá trị, cờ lặp, cờ lạ hoặc giá trị âm, thập phân, chữ, vượt số nguyên an toàn | Exit code khác 0, có thông báo stderr, không có JSON stdout |

Quy ước giá trị limit là chuỗi chỉ gồm chữ số ASCII, được chuyển thành số nguyên không âm an toàn của JavaScript. Phạm vi giữ nguyên dữ liệu, định dạng JSON và bộ lọc trạng thái. Lỗi xử lý khoảng trắng của trạng thái dành cho bài Debug.

## Bài thực hành

Viết kế hoạch một trang gồm mục tiêu, phần ngoài phạm vi, file dự kiến, các ca ở bảng trên và lệnh kiểm tra. Yêu cầu agent chỉ lập kế hoạch và chỉ ra lựa chọn ảnh hưởng tương thích. Đạt khi có thể trả lời “limit áp dụng ở đâu?” và “0 khác thiếu limit thế nào?” bằng test cụ thể. Trên stack khác, thay CLI bằng API query parameter, bộ lọc UI hoặc bước lấy mẫu của pipeline.
