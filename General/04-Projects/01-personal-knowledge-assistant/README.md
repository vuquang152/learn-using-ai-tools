# 01 — Trợ lý kiến thức cá nhân

## Brief

Bạn phụ trách buổi thực hành đầu tiên và muốn học quy trình chuẩn bị phòng. Hãy tạo một trợ lý hỏi đáp theo tài liệu để tra cứu trong ca trực và tự luyện bằng tình huống. Bắt đầu từ [workflow Học tập](../../03-Workflows/03-learning/README.md). Dùng [Gemini Notebook](../../02-Core-Tools/03-NotebookLM/README.md) hoặc một trợ lý chat có thể đọc các nguồn bạn cung cấp.

## Dữ liệu mẫu

Tạo ba tài liệu K1, K2 và K3 từ các đoạn sau. Giữ mã và số mục để đối chiếu.

| Nguồn | Nội dung |
| --- | --- |
| K1 — Quy trình ca trực, §1 | Người trực đến trước giờ bắt đầu 20 phút để kiểm tra máy chiếu, bút bảng và cáp HDMI. |
| K1 — Quy trình ca trực, §2 | Nếu máy chiếu hỏng, chuyển sang bảng trắng. Nếu không có bút bảng, báo điều phối viên và chờ hướng dẫn. |
| K2 — Bổ sung phòng B3, §1 | Riêng phòng B3, người trực đến trước 30 phút. Các bước kiểm tra thiết bị vẫn theo K1. |
| K3 — Biểu mẫu bàn giao, §1 | Sau buổi học, ghi mã phòng, tình trạng thiết bị và sự cố chưa xử lý vào sổ bàn giao. |

Nguồn K1 gồm hai mục trong cùng một tài liệu. K2 áp dụng riêng cho B3. Bộ nguồn chưa nêu người duyệt mua thiết bị.

## Mốc thực hiện

1. **Chuẩn bị nguồn.** Tạo một không gian hỏi đáp, thêm K1–K3 và lập bảng tên nguồn, phạm vi cùng mục liên quan. Mở lại từng nguồn để xác nhận nội dung đã nhập đúng.
2. **Thiết lập hỏi đáp.** Dùng [mẫu trả lời theo nguồn](../../05-Prompt-Library/research-and-verification.md). Yêu cầu mỗi câu trả lời có mã nguồn và mục, phân biệt ngoại lệ và ghi rõ khi thiếu bằng chứng.
3. **Tạo tài liệu học.** Tạo một trang ôn tập gồm trình tự trước và sau buổi học, ngoại lệ B3 và phương án xử lý thiết bị. Tạo ba câu tự kiểm tra có đáp án để riêng. Đối chiếu đáp án với nguồn trước khi luyện.
4. **Đánh giá.** Chạy từng câu trong bảng dưới ở phiên chỉ có bộ nguồn quy định. Nếu sai, ghi loại lỗi và sửa cách chọn nguồn hoặc cách hỏi, rồi chạy lại.

## Bộ câu hỏi đánh giá

| Câu hỏi | Kết quả cần có |
| --- | --- |
| Phòng A2 bắt đầu lúc 09:00. Đến khi nào, kiểm tra gì? | 08:40. Máy chiếu, bút bảng, cáp HDMI. Dẫn K1 §1. |
| Phòng B3 cũng bắt đầu lúc 09:00. Điều gì thay đổi? | Đến 08:30. Danh sách thiết bị giữ theo K1. Dẫn cả K2 §1 và K1 §1. |
| Máy chiếu hỏng và phòng hết bút. Làm gì? | Phương án là bảng trắng. Khi thiếu bút, báo điều phối viên và chờ hướng dẫn. Dẫn K1 §2. |
| Cần ghi gì sau buổi? | Mã phòng, tình trạng thiết bị, sự cố chưa xử lý. Dẫn K3 §1. |
| Ai duyệt chi phí mua cáp? | Chưa đủ thông tin trong bộ nguồn. |
| Khi chỉ cung cấp K1 và K2, biểu mẫu bàn giao cần gì? | Chưa đủ thông tin trong nguồn được cung cấp. Chạy câu này ở phiên mới với đúng hai nguồn để tránh dùng lại câu trả lời trước đó. |

## Đầu ra và rubric

Lưu danh mục nguồn, hướng dẫn hỏi đáp, tài liệu ôn tập và bảng kết quả sáu câu có cột Kỳ vọng, Thực tế, Căn cứ và Kết quả.

| Tiêu chí | Đạt 2 điểm khi |
| --- | --- |
| Bộ nguồn | K1–K3 dễ mở và có mã mục rõ ràng |
| Độ đúng và phạm vi **(bắt buộc)** | Cả sáu câu đúng theo nguồn được cung cấp. Trích dẫn mở được hoặc chỉ tới đúng mục |
| Tài liệu ôn tập | Có trình tự, ngoại lệ, ba câu tự kiểm và đáp án đã đối chiếu |
| Vòng kiểm | Có kết quả từng câu và một lần kiểm lại sau khi sửa hoặc đổi phạm vi nguồn |

## Retrospective

Ghi câu nào dễ bị trả lời vượt nguồn, bạn đã phát hiện bằng cách nào và thử một câu có ngoại lệ mới cần cập nhật K2.

Cập nhật ngày 25/11/2026.
