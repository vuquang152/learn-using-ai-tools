# Tự động hóa

**Khi dùng.** Đặc tả và kiểm thử một quy trình lặp lại có quy tắc đã thống nhất. Nếu quy trình còn thay đổi thường xuyên, làm thủ công và ghi các ngoại lệ trước khi triển khai.

**Điền.** `{{LUỒNG_HIỆN_TẠI}}` ghi bước làm tay, tần suất và điểm hay lỗi. `{{ĐẦU_VÀO}}` mô tả trường bắt buộc, ví dụ và khóa định danh. `{{QUY_TẮC}}` ghi điều kiện, người duyệt, phiên bản và quyền ghi. `{{ĐẦU_RA}}` ghi trạng thái, nơi ghi thử và yêu cầu tránh trùng.

```text
Lập đặc tả và ca thử cho {{LUỒNG_HIỆN_TẠI}}.
Dùng {{ĐẦU_VÀO}}, {{QUY_TẮC}} và {{ĐẦU_RA}}.
Trả bảng Bước | Điều kiện | Đầu ra | Người duyệt (nếu có) | Cách xử lý lỗi.
Ghi kiểm tra trước thao tác ghi, trạng thái khi thiếu dữ liệu hoặc duyệt
sai phiên bản, lúc cần kiểm bảng trước khi thử lại và cách tạm dừng.
Sau đó trả bảng Ca thử | Đầu vào | Trạng thái trước | Kỳ vọng | Bằng chứng.
Bao phủ ca thường, dữ liệu thiếu, từ chối, trùng mã, chạy lại và lỗi ghi.
Chỉ trả đặc tả và ca thử để tôi duyệt.
```

**Kiểm.** Mỗi ca cần có đầu ra quan sát được và điều kiện để kiểm bằng tay. Ví dụ một phản hồi F01 đang chờ duyệt phiên bản `v1`. Duyệt bằng `v0` giữ nguyên trạng thái. Duyệt đúng rồi chạy lại cho đúng một hàng được duyệt. Đối chiếu với quy tắc ở [project Tự động hóa với n8n](../04-Projects/04-n8n-automation/README.md).

Cập nhật ngày 25/11/2026.
