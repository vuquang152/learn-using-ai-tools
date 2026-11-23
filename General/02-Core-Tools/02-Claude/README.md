# 02 — Claude

Sau bài này, bạn có thể dùng Claude để đọc, so sánh và biên tập tài liệu theo bằng chứng. Chuẩn bị hai nguồn mẫu hoặc dùng ví dụ bên dưới.

## Làm việc với tài liệu

1. Đặt tên tài liệu và phiên bản rõ ràng. Tải tệp vào chat, hoặc tổ chức các tệp và hướng dẫn dùng chung trong một Project nếu tài khoản hỗ trợ.
2. Xác định phần cần đọc, mục tiêu và quy tắc ưu tiên nguồn. Với tài liệu dài, lấy cấu trúc và vị trí đoạn liên quan trước, sau đó xử lý theo mục rồi tổng hợp.
3. Yêu cầu bảng kết luận có tên tài liệu, mục hoặc đoạn trích ngắn. Khi tài liệu có ảnh quét, bảng hoặc chú thích, kiểm tra xem chi tiết cần dùng có được đọc đúng. Có thể cung cấp đoạn văn đã đối chiếu nếu tệp khó đọc.
4. Tách lượt đọc, lượt phản biện và lượt biên tập. Khi sửa, yêu cầu giữ nguyên dữ kiện đã duyệt, chỉ rõ chỗ đã đổi. Lưu quyết định cần dùng ở phiên sau trong nguồn bàn giao của bạn.

Với câu “Tóm tắt những gì thay đổi”, công cụ phải tự đoán phần nào quan trọng. Chỉ định đối tượng và trường cần so sánh nếu đầu ra dùng để cập nhật công việc.

## Thực hành so sánh hai thông báo

- **A — bản cũ, mục Địa điểm.** “Ngày 12/12, phòng B1, tối đa 30 người.”
- **B — bản thay thế, mục Địa điểm.** “Ngày 12/12, phòng B3, tối đa 24 người.”
- **B — mục Thực hiện.** “Người đã đăng ký giữ nguyên lượt đăng ký.”

```text
B là bản có hiệu lực. So sánh ngày, phòng, số chỗ và yêu cầu đăng ký.
Trả bảng Hạng mục | A | B | Ảnh hưởng | Căn cứ.
Ghi “không nêu” nếu bản tương ứng thiếu thông tin. Sau bảng, viết một
đoạn tối đa 70 từ để báo lại cho người đã đăng ký. Đừng thêm giờ.
```

Bài đạt khi phòng đổi từ B1 sang B3, sức chứa giảm 6, ngày giữ nguyên, và thông báo xác nhận người đã đăng ký giữ lượt. A không có thông tin về việc đăng ký lại. Mở đúng mục để kiểm từng dòng rồi dùng Claude rút gọn đoạn thông báo, kiểm tra lại các dữ kiện sau lượt sửa.

## Tài liệu chính thức

Kiểm tra ngày 23/11/2026.

- [What are projects?](https://support.claude.com/en/articles/9517075-what-are-projects)
- [Upload files to Claude](https://support.claude.com/en/articles/8241126-upload-files-to-claude)
