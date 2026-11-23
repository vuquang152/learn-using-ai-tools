# 01 — ChatGPT

Sau bài này, bạn có thể thiết lập ngữ cảnh, chọn cách làm trong ChatGPT và kiểm tra bản tổng hợp có số liệu. Bạn cần biết cách viết [yêu cầu có tiêu chí](../../01-Foundations/03-writing-requests.md).

## Chọn cách làm

| Đầu ra | Cách bắt đầu | Kiểm tra trước khi dùng |
| --- | --- | --- |
| Bản nháp, dàn ý hoặc phản biện | Gửi brief và đoạn nguồn liên quan trong chat | Ý chính, người đọc và giới hạn dữ kiện |
| Công việc nhiều phiên | Dùng Projects để nhóm chat, tệp và hướng dẫn liên quan | Tệp hiện hành, quyền truy cập và bản bàn giao |
| Câu hỏi cần thông tin mới | Dùng Search. Cân nhắc Deep Research khi cần lập kế hoạch và tổng hợp nhiều nguồn | Mở nguồn cho từng kết luận quan trọng |
| Bảng, chỉ số hoặc biểu đồ | Đưa bảng có một dòng mỗi quan sát, nêu đơn vị và cách tính | Số dòng, mẫu số, giá trị thiếu và phép tính |
| Minh họa | Mô tả chủ thể, mục đích và bố cục cho ChatGPT Images | Chữ, chi tiết, quyền sử dụng và độ phù hợp với nội dung |

Kiểm tra các công cụ thực sự có trong tài khoản. Với việc dài, lưu mục tiêu, định nghĩa chỉ số và phiên bản dữ liệu ở một chỗ. Khi đổi tệp, nói rõ bản nào thay thế bản nào. Nếu không thể đính kèm tệp, bài tập dưới đây làm được bằng cách dán dữ liệu mẫu.

## Thực hành báo cáo nhanh

Bạn chuẩn bị cập nhật cho người điều phối. Lưu dữ liệu sau thành CSV hoặc dán trực tiếp.

```csv
buoi,dang_ky,check_in
A,20,16
B,30,18
C,10,9
```

```text
Dùng dữ liệu trên để soạn bản cập nhật dài tối đa 120 từ cho người điều phối.
Trước bản cập nhật, hiển thị số dòng, tổng lượt đăng ký, tổng lượt check-in
và công thức tỷ lệ chung. Làm tròn tỷ lệ đến một chữ số thập phân.
Nêu buổi có tỷ lệ thấp nhất, tránh đoán nguyên nhân.
```

Đối chiếu ba dòng, 60 lượt đăng ký, 43 lượt check-in, tỷ lệ chung 71,7% và buổi B có tỷ lệ 60%. Tỷ lệ chung dùng tổng check-in chia tổng đăng ký. Trung bình tỷ lệ ba buổi cho một chỉ số khác vì số đăng ký mỗi buổi khác nhau.

Bài đạt khi báo cáo và bảng tính khớp các mốc trên. Thử thêm lượt sửa “viết ngắn còn hai câu” và kiểm tra lại chỉ số. Nếu dùng biểu đồ, so nhãn trục và các giá trị với CSV.

## Tài liệu chính thức

Kiểm tra ngày 23/11/2026.

- [Projects in ChatGPT](https://help.openai.com/en/articles/10169521-projects-in-chatgpt)
- [Searching the web with ChatGPT](https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt)
- [Deep research in ChatGPT](https://help.openai.com/en/articles/10500283-search-in-chatgpt)
- [Data analysis with ChatGPT](https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt)
- [Images in ChatGPT](https://help.openai.com/en/articles/11084440-images-in-chatgpt)
