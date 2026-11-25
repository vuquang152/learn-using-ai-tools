# 08 — Đo hiệu quả sử dụng AI

Số dòng code hoặc tốc độ tạo patch là chỉ số dễ đo nhưng thường không phản ánh giá trị. Mục tiêu là giảm thời gian hoàn thành outcome đúng mà không tăng defect, rủi ro hay gánh nặng review.

## Bốn nhóm chỉ số

### Delivery

- Lead time từ requirement đến verified change.
- Thời gian chủ động của engineer.
- Số vòng sửa lại do hiểu sai requirement.

### Quality

- Defect hoặc regression sau khi merge.
- Tỷ lệ acceptance criteria có evidence.
- Test quality và số lỗi phát hiện trong review.

### Control

- Số file/thay đổi ngoài phạm vi.
- Số lần agent cần quyền vượt baseline.
- Khả năng giải thích và rollback thay đổi.

### Learning

- Pattern sai lặp lại bao nhiêu lần.
- Bao nhiêu bài học được chuyển thành instruction, test, skill hoặc automation.
- Engineer có hiểu code hơn hay chỉ phụ thuộc agent hơn.

## So sánh công bằng

Khi so tool hoặc workflow:

- Dùng cùng task contract và codebase state.
- Tính cả thời gian review và sửa lại.
- Không so một task quen thuộc với một task hoàn toàn mới.
- Ghi rõ model/tool version và ngày thực hiện nếu kết quả phụ thuộc tính năng.
- Chấm chất lượng trước khi nhìn thời gian.

## Scorecard sau mỗi task

Chấm 0–2:

| Tiêu chí | 0 | 1 | 2 |
|---|---|---|---|
| Correctness | sai | đúng một phần | đạt đủ |
| Scope | lan rộng | có nhiễu | tập trung |
| Verification | không có | chưa đủ | đủ evidence |
| Review effort | phải viết lại | sửa đáng kể | ít chỉnh sửa |
| Learning | không rõ | ghi chú | cải thiện hệ thống |

Một workflow chỉ nên tự động hóa sâu hơn sau khi nhiều lần đạt kết quả ổn định, không phải sau một demo thành công.

Áp dụng scorecard vào một thử nghiệm có đối chứng trong [Core Tools — Vận hành và tối ưu](../02-Core-Tools/05-Optimization/README.md).
