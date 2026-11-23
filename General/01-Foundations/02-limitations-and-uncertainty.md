# 02 — Giới hạn, hallucination và độ chắc chắn

Sau bài này, bạn có thể nhận ra thông tin AI thêm vào khi dữ liệu chưa đủ. Hallucination là đầu ra có vẻ hợp lý nhưng chứa chi tiết vô căn cứ hoặc sai.

## Gắn nhãn từng kết luận

| Nhãn | Ví dụ với ghi chú “Mai đề xuất họp thứ Sáu, nhóm chưa chốt” |
| --- | --- |
| Được nguồn xác nhận | Mai đề xuất họp thứ Sáu |
| Suy luận | Lịch họp vẫn có thể đổi |
| Chưa biết | Giờ họp và người đặt phòng |

Một phản hồi như “Mai sẽ đặt phòng lúc 9 giờ thứ Sáu” đã thêm hai chi tiết và biến đề xuất thành cam kết. Giọng văn tự tin hoặc phần trăm tự đánh giá của AI không thay thế kiểm tra nguồn.

## Điều chỉnh yêu cầu

```text
Trích các thông tin về lịch họp từ ghi chú.
Mỗi thông tin gồm nội dung, nhãn Được xác nhận / Suy luận / Chưa biết
và cụm từ gốc làm căn cứ nếu có. Để trống thời gian hoặc người thực hiện
khi ghi chú không nêu. Giữ nguyên trạng thái của đề xuất.
```

## Bài thực hành và kiểm tra

Dùng ghi chú trên. Hỏi AI “Ai đặt phòng và mấy giờ họp?” trước, rồi thử yêu cầu có nhãn. Lặp lại một lượt với câu “Phòng do Hà đặt, giờ sẽ chốt sau” được bổ sung vào nguồn. Đối chiếu từng dòng. Bài đạt khi lượt đầu để cả hai trường chưa biết, lượt sau ghi Hà và vẫn để giờ chưa biết. Nếu AI đoán, ghi lại phần nó thêm và chỉnh yêu cầu hoặc sửa đầu ra dựa trên nguồn.

Cập nhật ngày 23/11/2026.
