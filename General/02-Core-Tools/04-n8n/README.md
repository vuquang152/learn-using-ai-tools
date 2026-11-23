# 04 — n8n

Sau bài này, bạn có thể đọc dữ liệu qua từng node, chạy thử một workflow và nhận ra chỗ cần xử lý lỗi hoặc phê duyệt. Bài dùng một môi trường n8n bạn có quyền truy cập và dữ liệu giả, không cần tài khoản email hay khóa API.

## Đọc một workflow

- **Trigger** xác định khi nào chạy. Bắt đầu bằng Manual Trigger để chủ động thử.
- **Node** thực hiện một bước. Edit Fields đặt hoặc đổi trường, If phân nhánh theo điều kiện. Kiểm tra phần dữ liệu vào và ra sau từng node.
- **Item** là một bản ghi đi qua các bước. Xác định trường bắt buộc, kiểu dữ liệu và đường đi khi dữ liệu không hợp lệ.
- **API** cho phép một ứng dụng gửi yêu cầu đến ứng dụng khác. Khi cần dùng HTTP Request ở workflow thật, kiểm tra quyền đọc hoặc ghi, xác thực, cấu trúc phản hồi và mã lỗi. Lưu thông tin xác thực trong credentials thay vì trong dữ liệu mẫu.
- **AI node** phù hợp với tác vụ có ngôn ngữ tự do, chẳng hạn đề xuất nhãn cho phản hồi. Kiểm tra đầu ra theo danh sách nhãn và chuyển trường hợp không rõ cho người duyệt. Điều kiện cố định thực hiện được bằng các node xử lý thông thường.

## Thực hành phân luồng phản hồi

1. Tạo workflow với chuỗi **Manual Trigger → Edit Fields → If**. Trong Edit Fields tạo hai trường kiểu chuỗi, `id` bằng `FB-01` và `muc_do` bằng `cao`.
2. Trong If, so sánh trường `muc_do` với chuỗi `cao` bằng điều kiện bằng nhau. Chọn trường từ dữ liệu đầu vào hoặc dùng biểu thức `{{ $json.muc_do }}`.
3. Thêm một Edit Fields vào mỗi nhánh để gắn `trang_thai`. Dùng `can_duyet` ở nhánh đúng và `kiem_tra_dau_vao` ở nhánh còn lại. Giữ trường đầu vào khi thêm trạng thái.
4. Chạy thử, mở dữ liệu ra và đối chiếu. Đổi `muc_do` thành chuỗi rỗng rồi chạy lại. Bài này coi mọi giá trị ngoài `cao` là trường hợp cần kiểm tra, để người học quan sát nhánh còn lại trước khi mở rộng.

| Dữ liệu thử | Đầu ra mong đợi |
| --- | --- |
| `FB-01`, `cao` | Một item ở nhánh đúng, giữ ID và có `can_duyet` |
| `FB-01`, chuỗi rỗng | Một item ở nhánh còn lại, giữ ID và có `kiem_tra_dau_vao` |

## Thêm kết nối sau khi chạy thử

Khi nối API, ghi lại mã bản ghi và trạng thái chạy để tra lỗi, giới hạn số lần thử lại cho lỗi tạm thời và dùng mã chống trùng nếu thao tác ghi có thể chạy lại. Hành động như gửi thông báo cần người duyệt kiểm tra nội dung và đích gửi. Trong bài này, trường `can_duyet` chỉ biểu diễn trạng thái. [Workflow Automation](../../03-Workflows/07-automation/README.md) đưa ra ca thử cho duyệt, từ chối và chạy lại.

Bài đạt khi cả hai đầu vào đi đúng nhánh, ID được giữ và bạn chỉ được dữ liệu vào/ra của từng node. Lưu workflow ở chế độ chạy tay để có thể mở lại và đối chiếu.

## Tài liệu chính thức

Kiểm tra ngày 23/11/2026.

- [Build your first workflow](https://docs.n8n.io/build-your-first-workflow.md)
- [Edit Fields](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.set/)
- [If](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if/)
- [Handle errors gracefully](https://docs.n8n.io/build/flow-logic/handle-errors-gracefully.md)
- [Human-in-the-loop for AI agent tools](https://docs.n8n.io/build/integrate-ai/ai-examples/human-in-the-loop-for-tools.md)
