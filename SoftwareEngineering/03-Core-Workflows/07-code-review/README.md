# 07 — Code review

## Quy trình

1. Chốt base, acceptance criteria và những vùng dễ hồi quy.
2. Đọc diff và đường đi thật của đầu vào. Tìm ca có thể bác bỏ hành vi agent tuyên bố.
3. Xác minh nhận xét bằng test, một ca chạy hoặc bằng chứng từ đường đi của code. Xếp vấn đề theo tác động. Ghi giới hạn nếu chưa thể xác minh.
4. Đọc lại sau khi sửa và chạy kiểm tra liên quan.

## Ví dụ

Giả sử diff thay phần chọn ticket bằng `selectTickets(tickets.slice(0, limit), status)` khi có limit. Với fixture mẫu, `--status open --limit 2` chỉ trả T-101 vì T-102 nằm trong hai phần tử đầu nhưng có trạng thái closed.

Nhận xét mẫu: “Nhánh có limit cắt danh sách trước khi lọc. Với fixture, limit 2 cho trạng thái open chỉ trả T-101, trong khi contract yêu cầu T-101 và T-103. Hãy lọc trước rồi cắt và thêm test qua cả hai cờ.” Khi review diff thật, đính kèm file và dòng tương ứng.

## Bài thực hành

Review diff của bài implement hoặc tạo diff giả trong bản sao bằng lỗi trên. Yêu cầu agent chỉ review và trả nhận xét theo mẫu: vị trí, ảnh hưởng, input tái hiện, expected và đề xuất kiểm tra. Tự xác minh trước khi chấp nhận. Đạt khi có ít nhất một nhận xét được kiểm chứng trên diff giả, đồng thời phân biệt phát hiện confirmed với câu hỏi cần làm rõ. Với repo thật, xem thêm lỗi tương thích, xử lý dữ liệu không hợp lệ và quyền truy cập theo phạm vi thay đổi.
