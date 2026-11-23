# 04 — Phân tích dữ liệu

Kết quả của bài là bảng dữ liệu đã làm sạch, một chỉ số có công thức, một biểu đồ và một đoạn diễn giải. Bạn cần bảng tính hoặc trợ lý có thể làm việc với bảng. Dữ liệu mẫu có thể dán trực tiếp.

## Quy trình

1. Chốt câu hỏi trước khi tính. Ghi một dòng đại diện cho gì, khóa định danh là gì, đơn vị và phạm vi thời gian. Kiểm tra kiểu dữ liệu, cột rỗng, trùng lặp và giá trị ngoài phạm vi.
2. Giữ bản gốc. Tạo bản làm sạch và ghi lại quy tắc, số dòng bị ảnh hưởng, lý do loại hoặc giữ. Với hàng thiếu dữ liệu, kiểm tra nguồn hoặc báo số hàng bị loại khỏi phép tính.
3. Xác định công thức và nhóm cần so sánh. Cho AI đề xuất cách tính, sau đó tính lại trên một nhóm mẫu bằng bảng tính hoặc tay.
4. Chọn biểu đồ theo câu hỏi. Dùng cột để so sánh các nhóm và ghi rõ đơn vị, phạm vi cùng mẫu số. Với biểu đồ cột tỷ lệ, bắt đầu trục ở 0 và dùng cùng thang đo cho mọi nhóm.
5. Viết kết luận kèm số và giới hạn. Nếu một nhóm có tỷ lệ thấp, ghi đó là quan sát và đề xuất dữ liệu cần điều tra nguyên nhân. Người dùng duyệt quy tắc làm sạch và diễn giải.

## Bài thực hành

**Câu hỏi:** Tỷ lệ check-in theo ca của những buổi có dữ liệu đầy đủ là bao nhiêu?

```csv
ma_buoi,ca,dang_ky,check_in
S1,sang,20,15
S2,sang,10,9
S2,sang,10,9
C1,chieu,30,18
C2,chieu,10,
```

Mỗi mã là một buổi. Hai dòng S2 giống hệt nhau. Ô rỗng của C2 nghĩa là chưa ghi nhận số check-in. Đếm số dòng trước và sau khi xóa bản sao, sau đó tính tỷ lệ trên các buổi đầy đủ. Dùng tổng lượt check-in chia tổng lượt đăng ký trong từng ca. Tạo biểu đồ cột cho hai ca và ghi chú phạm vi.

```text
Kiểm tra dữ liệu trước khi tính. Bình luận riêng về dòng trùng và ô rỗng.
Trả bảng ca, số buổi được tính, tổng đăng ký, tổng check-in và tỷ lệ.
Giải thích cách xử lý C2, công thức tỷ lệ chung trên phần dữ liệu đủ
và giới hạn khi so hai ca. Hỏi lại nếu phát hiện điều kiện ngoài mô tả.
```

**Đối chiếu:** Có 5 dòng gốc, 4 buổi sau khi bỏ bản sao, 3 buổi dùng để tính. Ca sáng đạt 24/30 = 80%. Ca chiều đạt 18/30 = 60% trên một buổi đủ dữ liệu. Tỷ lệ chung là 42/60 = 70%. Chênh lệch là 20 điểm phần trăm; còn 10 lượt đăng ký từ buổi thiếu số check-in.

Bài đạt khi bạn kiểm được các số trên, biểu đồ khớp bảng, và đoạn diễn giải nêu phần dữ liệu thiếu ở ca chiều cùng giới hạn về nguyên nhân. Có thể thử ca lỗi bằng cách thêm một hàng có check-in lớn hơn đăng ký và xác nhận hàng đó bị đánh dấu để kiểm lại.

Cập nhật ngày 23/11/2026.
