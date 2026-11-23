# 00 — Start Here

Sau bài này, bạn sẽ có một việc cụ thể để luyện AI, một mẫu đầu ra để so sánh và một cách ghi lại phần việc AI thực sự giúp được.

## Chọn lộ trình và công cụ

General dành cho học tập và công việc phổ thông như đọc tài liệu, viết, tổng hợp cuộc họp, phân tích bảng tính và tự động hóa. Nếu đầu ra chính của bạn là thay đổi mã nguồn trong repo, hãy bắt đầu từ [Software Engineering](../../SoftwareEngineering/README.md).

| Việc muốn làm | Nhóm công cụ | Ví dụ |
| --- | --- | --- |
| Soạn nháp, giải thích, phản biện | Chatbot | Viết hai phiên bản thông báo cho hai nhóm người đọc |
| Tìm thông tin cập nhật ngoài tài liệu đang có | Research tool hoặc trợ lý có tìm kiếm | Tìm tài liệu chính thức, rồi mở từng nguồn để kiểm chứng |
| Hỏi đáp trong bộ tài liệu đã chọn | Knowledge tool | So sánh hai hướng dẫn đã nhập và mở trích dẫn |
| Thực hiện lại một quy trình có quy tắc | Automation tool | Phân loại phản hồi theo nhãn, đưa ngoại lệ vào hàng chờ |

Một sản phẩm có thể thuộc nhiều nhóm. Chọn theo việc cần hoàn thành và theo quyền sử dụng dữ liệu của bạn.

## Làm bài khởi động trong một phiên

1. Chọn một việc lặp lại mà bạn có thể tự kiểm tra, chẳng hạn tổng hợp ghi chú họp thành danh sách việc cần làm. Giữ phạm vi đủ nhỏ để làm thủ công một lần.
2. Viết ra đầu vào, các bước bạn đang làm, người nhận, định dạng đầu ra và hai lỗi có hậu quả. Với ghi chú họp, lỗi có thể là gán sai người phụ trách hoặc ghi một đề xuất thành quyết định.
3. Tạo đầu vào mẫu. Hãy dùng dữ liệu giả, công khai phù hợp hoặc đã được phép dùng với tài khoản và công cụ bạn chọn. Đọc [bài về dữ liệu và quyền sử dụng](../01-Foundations/06-responsible-use.md) trước khi dùng tài liệu công việc.
4. Làm thủ công, lưu kết quả và ghi số phút làm chủ động. Sau đó dùng AI trên cùng đầu vào. Ghi riêng thời gian chuẩn bị, kiểm tra và sửa đầu ra.
5. Đánh giá hai kết quả bằng cùng tiêu chí. Lưu prompt, lỗi, cách sửa và việc bạn muốn thử ở bài sau.

## Ví dụ để làm ngay

**Đầu vào giả lập:** “Đã chốt An gửi bản mẫu trước 18/12. Bình đề xuất thêm buổi thử nhưng nhóm chưa quyết định. Nhóm cần kiểm tra quyền truy cập, chưa giao người phụ trách.”

**Đầu ra:** Danh sách việc có người phụ trách, hạn và trạng thái. Bản mẫu thuộc về An, hạn trước 18/12. Buổi thử là đề xuất. Việc kiểm tra quyền truy cập chưa có người phụ trách và chưa có hạn.

```text
Chuyển ghi chú trên thành bảng Việc | Người phụ trách | Hạn | Trạng thái.
Phân biệt việc đã chốt, việc cần giao và đề xuất.
Ghi “chưa xác nhận” khi thiếu người phụ trách hoặc hạn.
Trích cụm từ trong ghi chú làm căn cứ cho từng trạng thái.
```

## Nhật ký học tập

| Ngày | Việc và đầu vào | Tiêu chí | Phút thủ công | Phút có AI, gồm kiểm tra | Lỗi và cách sửa |
| --- | --- | --- | --- | --- | --- |
| … | Tổng hợp ghi chú mẫu | Đủ ba mục, đúng trạng thái | … | … | … |

Bạn hoàn thành phần này khi có một đầu vào được phép dùng, hai phiên bản đầu ra, hai tiêu chí kiểm tra và ít nhất một quan sát trong nhật ký. Giữ lại bộ mẫu để luyện tiếp ở [01 — Foundations](../01-Foundations/README.md).

Cập nhật ngày 23/11/2026.
