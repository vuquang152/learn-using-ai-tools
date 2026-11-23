# 04 — Giữ context khi làm việc nhiều lượt

Context là thông tin AI có thể dùng khi tạo câu trả lời, chẳng hạn yêu cầu, đoạn chat, tệp hoặc kết quả tìm kiếm được đưa vào lượt xử lý. Khi có nhiều lượt sửa, thông tin cũ và mới dễ bị trộn. Quyết định đã chốt cần được lưu ở nơi bạn có thể kiểm tra và đưa lại vào chat khi cần.

## Tạo bản bàn giao ngắn

1. Ghi mục tiêu, người đọc và đầu ra đang làm.
2. Liệt kê nguồn theo tên hoặc phiên bản, chỉ rõ bản nào có hiệu lực.
3. Ghi quyết định đã chốt, việc còn mở và điều kiện nghiệm thu.
4. Cho AI tóm tắt lại điểm cần giữ trước khi sửa. So với bản bàn giao, rồi mới tiếp tục.

```text
Mục tiêu: Soạn thông báo đổi lịch buổi hướng dẫn.
Nguồn đang dùng: Lịch v2 do ban tổ chức xác nhận.
Đã chốt: 15:00 ngày 11/12 tại B2. Lịch v1 ghi 09/12 đã được thay thế.
Còn mở: Tên người phụ trách trực tại phòng.
Bước tiếp theo: Soạn thân email, giữ nguyên ngày, giờ và địa điểm.
Tiêu chí: Người đọc biết lịch mới và cách báo không tham dự được.
```

## Bài thực hành và kiểm tra

Tạo một chat có hai phiên bản lịch ở trên, rồi chuyển sang chat mới với bản bàn giao đã kiểm tra. Yêu cầu tạo bản nháp. Bài đạt khi lịch mới xuất hiện đúng, người phụ trách chưa được tự điền và đầu ra theo đúng mục tiêu. Nếu lịch cũ quay lại, đối chiếu đoạn nào bạn gửi chưa thể hiện rõ phiên bản đang dùng.

Cập nhật ngày 23/11/2026.
