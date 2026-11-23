# 01 — Nghiên cứu và kiểm chứng

Kết quả của bài là một bản trả lời ngắn có nguồn, kèm bảng cho biết kết luận nào đã được xác nhận và câu hỏi nào còn mở. Trước khi làm, xem [bài kiểm chứng đầu ra](../../01-Foundations/05-verifying-outputs.md).

## Quy trình

1. Viết câu hỏi theo quyết định cần đưa ra. Xác định nơi, thời điểm, đối tượng và phần nằm ngoài phạm vi.
2. Nhờ AI đề xuất từ khóa và loại nguồn. Khi tìm công khai, bắt đầu từ trang của đơn vị ban hành, tài liệu gốc hoặc bộ dữ liệu gốc. Ghi tiêu đề, đơn vị, ngày ban hành, ngày truy cập và vị trí đoạn liên quan.
3. Với từng kết luận, tạo một hàng gồm kết luận, trích đoạn, nguồn, phạm vi và trạng thái. Nếu nguồn cập nhật khác nguồn cũ, tìm thông tin về hiệu lực. Nếu các nguồn còn mâu thuẫn, mô tả khác biệt và để mở điểm chưa thể giải quyết.
4. Nhờ AI viết từ bảng đã duyệt. Mở lại nguồn cho từng kết luận quan trọng. Kiểm tra câu trích có hỗ trợ đúng đối tượng và thời điểm của kết luận.
5. Kết thúc bằng việc cần làm tiếp hoặc câu hỏi cần xác nhận, nhất là khi dữ liệu thiếu có thể đổi quyết định.

## Bài thực hành

**Câu hỏi:** Nhóm 18 người có thể dùng phòng C để chạy thử không, và cần xác nhận thêm gì? Dùng ba nguồn giả theo thứ tự ngày/tháng.

| Nguồn | Nội dung |
| --- | --- |
| A — Ban quản lý, hướng dẫn 01/10, mục Phòng C | “Phòng C có 20 chỗ. Gửi yêu cầu đặt phòng trước buổi sử dụng 2 ngày làm việc.” |
| B — Ban quản lý, cập nhật 15/10, mục Phòng C | “Từ 16/10, sức chứa phòng C là 16 chỗ trong thời gian sửa chữa. Thông báo này chỉ cập nhật sức chứa. Chưa công bố ngày kết thúc.” |
| C — Bản tin nhóm, 18/10 | “Phòng C thường có 20 chỗ”, dẫn hướng dẫn A. |

```text
Giả sử buổi chạy thử diễn ra ngày 22/10. Với từng kết luận về sức chứa
và hạn gửi yêu cầu, ghi nguồn, câu chứng minh, phạm vi hiệu lực và trạng thái.
Giải thích vì sao bản tin C có số khác. Viết khuyến nghị trong ba câu.
Đánh dấu câu hỏi chưa có dữ liệu, gồm tình trạng còn trống của phòng.
```

**Tiêu chí:** Bản trả lời xác định 18 người vượt sức chứa 16 tại thời điểm xét theo B, giữ điều kiện 2 ngày làm việc từ A và để mở lịch trống. C dẫn A nên không tạo thêm bằng chứng độc lập cho sức chứa. Người học chọn hỏi ban quản lý hoặc tìm phòng đủ chỗ.

Để áp dụng vào câu hỏi thật, thay ba đoạn mẫu bằng nguồn đã mở. Tránh dùng phần xem trước kết quả tìm kiếm làm căn cứ duy nhất. Giữ bản ghi những nguồn đã kiểm tra và ngày truy cập để có thể cập nhật bản trả lời.

Cập nhật ngày 23/11/2026.
