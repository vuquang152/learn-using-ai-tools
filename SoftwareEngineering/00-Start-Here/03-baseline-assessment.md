# 03 — Đo baseline kỹ năng và hiệu quả

Nếu không đo trạng thái trước khi dùng AI, bạn dễ nhầm cảm giác “làm nhanh hơn” với hiệu quả thật.

## Bài baseline

Tự thực hiện Task A mà chưa dùng coding agent. Ghi lại:

| Chỉ số | Giá trị |
|---|---|
| Thời gian hiểu yêu cầu | ... |
| Thời gian tìm file cần sửa | ... |
| Thời gian implement | ... |
| Thời gian test/debug | ... |
| Số lần test fail | ... |
| Số file thay đổi | ... |
| Lỗi phát hiện khi tự review | ... |

Không cần tối ưu thời gian. Baseline chỉ có ý nghĩa khi phản ánh cách bạn làm việc bình thường.

## Đánh giá chất lượng

Chấm kết quả từ 0–2 cho từng tiêu chí:

- Correctness: behavior đúng theo yêu cầu.
- Scope control: không có thay đổi ngoài phạm vi.
- Tests: test chứng minh behavior và failure case.
- Maintainability: code theo convention của dự án.
- Security: không tạo lỗ hổng hoặc lộ dữ liệu.
- Explainability: bạn giải thích được toàn bộ diff.

Điểm tối đa là 12. Sau này không coi phiên AI tốt hơn nếu nhanh hơn nhưng điểm chất lượng thấp hơn baseline.

## Nhật ký học tập

Mỗi task nên ghi:

```markdown
## Task

## Tôi đã cung cấp context gì?

## Agent đã làm gì?

## Tôi phải sửa hoặc nhắc lại điều gì?

## Bằng chứng kiểm chứng

## Thời gian chủ động của tôi

## Bài học cần đưa vào instruction/workflow
```

“Thời gian chủ động” là thời gian bạn thực sự phải đọc, viết, chờ hoặc sửa; nên tách khỏi thời gian agent chạy nền.
