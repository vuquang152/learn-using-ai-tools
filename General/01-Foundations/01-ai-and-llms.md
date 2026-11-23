# 01 — AI và LLM trong công việc

Sau bài này, bạn có thể chia một việc thành phần AI hỗ trợ và phần người dùng kiểm tra. Dùng đầu vào mẫu từ bài khởi động hoặc ví dụ bên dưới.

## Mô hình làm việc

LLM (large language model) tạo văn bản dựa trên mẫu đã học và thông tin nó nhận được trong lượt xử lý. Sản phẩm dùng LLM có thể cung cấp thêm công cụ như tìm kiếm, đọc tệp, chạy phép tính hoặc kết nối ứng dụng. Khi quan sát kết quả, hãy xác định AI đã dùng đầu vào nào, có gọi công cụ nào và có bằng chứng gì cho kết quả.

- **Tạo và biến đổi nội dung.** Lên ý, rút gọn, đổi giọng văn hoặc chuyển ghi chú thành bảng.
- **Phân tích có điều kiện.** So sánh theo tiêu chí, nêu giả thuyết và chỉ ra dữ kiện còn thiếu.
- **Thực hiện qua công cụ.** Khi có tích hợp phù hợp, trợ lý có thể đọc tệp hoặc thực hiện một bước bên ngoài cuộc trò chuyện. Kiểm tra quyền và đích trước khi cho phép thao tác có tác động.

## Ví dụ

Đầu vào là ba dòng phản hồi: “Hướng dẫn dễ đọc”, “Font ở trang 2 nhỏ”, “Chưa tìm được link đăng ký”. Giao cho AI việc gom phản hồi theo chủ đề, giữ câu gốc bên cạnh mỗi nhãn. Bạn kiểm tra ba câu đều xuất hiện một lần, sau đó tự quyết định hạng mục nào cần sửa trước.

Yêu cầu “Tìm nguyên nhân khiến mọi người không đăng ký” vượt quá dữ kiện. Ba dòng trên chỉ cho thấy một người báo khó tìm link.

## Bài thực hành và kiểm tra

1. Liệt kê ba bước trong việc đã chọn ở phần 00. Đánh dấu bước AI có thể hỗ trợ, bước cần nguồn và bước bạn sẽ tự quyết.
2. Chạy thử một bước biến đổi nội dung. Yêu cầu giữ định danh, con số và trạng thái theo đầu vào.
3. So từng mục với bản gốc. Hoàn thành khi bạn chỉ rõ được việc đã giao, bằng chứng chấp nhận kết quả và một việc cần thêm dữ kiện hoặc quyền.

Cập nhật ngày 23/11/2026.
