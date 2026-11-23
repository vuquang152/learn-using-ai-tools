# 03 — Học tập

Kết quả của bài là kế hoạch học ngắn, một bài tự kiểm và danh sách lỗ hổng để ôn tiếp. Bạn có thể dùng trợ lý chat hoặc [Gemini Notebook](../../02-Core-Tools/03-NotebookLM/README.md) khi có tập nguồn đã chọn.

## Chu trình học

1. Viết một mục tiêu đo được và làm câu hỏi chẩn đoán trước. Ví dụ, “Với hai nhóm quy mô khác nhau, tôi tính được tỷ lệ gộp và giải thích được mẫu số”.
2. Chia chủ đề theo kiến thức cần trước. Học định nghĩa và xem một ví dụ đã giải. Yêu cầu AI giải thích điểm vướng theo trình độ hiện tại, dùng ví dụ nhỏ và giữ định nghĩa từ nguồn.
3. Dùng **active recall** để tự nhớ lại định nghĩa hoặc giải bài khi chưa xem đáp án. Yêu cầu AI hỏi từng câu, đợi bạn trả lời và cho gợi ý theo từng mức.
4. Đối chiếu phản hồi với nguồn hoặc tự tính. Ghi lỗi theo nguyên nhân, chẳng hạn nhầm mẫu số hoặc thuộc công thức nhưng chưa nhận ra khi áp dụng.
5. Dùng **spaced practice** để ôn sau một khoảng nghỉ. Với bài này, thử ngay sau khi học, hôm sau và cuối tuần. Thay số hoặc đổi bối cảnh để xem bạn có chuyển được kiến thức sang bài mới. [Hướng dẫn của What Works Clearinghouse về ôn giãn cách và truy hồi chủ động](https://ies.ed.gov/ncee/WWC/PracticeGuide/1/Published)

## Bài thực hành

**Nguồn mẫu:** Tỷ lệ check-in của một nhóm bằng số lượt check-in chia số lượt đăng ký. Tỷ lệ gộp dùng tổng check-in chia tổng đăng ký. Nếu mẫu số bằng 0, chỉ số không tính được.

```text
Dạy tôi tính tỷ lệ gộp dựa trên định nghĩa bên trên.
Hỏi chẩn đoán trước, sau đó giải một ví dụ với quy mô hai nhóm khác nhau.
Tiếp theo đặt một bài mới rồi chờ tôi trả lời. Chấm theo ba điều kiện:
chọn đúng mẫu số, tính đúng và giải thích kết quả bằng lời.
Nếu tôi sai, đưa gợi ý trước khi giải.
```

**Tự kiểm sau buổi học:** A có 9/10 lượt check-in, B có 12/30. Tỷ lệ chung là bao nhiêu? Vì sao trung bình 90% và 40% trả lời câu hỏi khác? Nếu một nhóm có 0 lượt đăng ký thì tỷ lệ riêng của nhóm đó là bao nhiêu?

<details>
<summary>Đáp án để đối chiếu sau khi làm</summary>

- Tỷ lệ chung là 21 ÷ 40 = 52,5%.
- Trung bình hai tỷ lệ là 65%. Phép tính đó đặt trọng số bằng nhau cho hai nhóm.
- Tỷ lệ riêng của nhóm có 0 lượt đăng ký không tính được.

</details>

Bài đạt khi bạn giải đúng cả ba câu bằng lời của mình, ghi một lỗi hoặc một điểm từng phân vân và đặt một lần ôn tiếp. Lần ôn sau cần dùng bài có số khác.

Cập nhật ngày 23/11/2026.
