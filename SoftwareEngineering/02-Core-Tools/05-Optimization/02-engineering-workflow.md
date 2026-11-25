# 02 — Chọn công cụ, quản lý context và kiểm chứng

## Chọn theo đầu ra cần có

- Dùng test, compiler, linter hoặc truy vấn xác định để kiểm tra thứ có quy tắc rõ. Đưa một ca lỗi và đoạn output liên quan vào phiên agent khi cần giải thích.
- Dùng Claude Code hoặc Codex cho việc cần lần theo code, so sánh cách triển khai, chỉnh sửa có giới hạn hoặc review diff. Với thay đổi xuyên module, tách bước khảo sát, chốt contract và kiểm thử.
- Dùng n8n khi có trigger, dữ liệu và nhánh xử lý lặp lại. Dùng OpenRouter khi ứng dụng hoặc workflow cần gọi mô hình qua API và đánh giá kết quả theo một bộ mẫu.

## Giảm context trước khi đổi model

1. Chỉ định điểm bắt đầu bằng file, symbol, endpoint hoặc tên test. Cho phép agent mở rộng khi có một câu hỏi cần bằng chứng.
2. Cung cấp input tối thiểu đủ tái hiện lỗi. Với CI log, lấy tên job, lỗi đầu tiên có ích và phần stack trace liên quan. Giữ đường dẫn tới bản đầy đủ để kiểm tra khi cần.
3. Đặt quy ước luôn áp dụng trong instruction của repo. Đưa hướng dẫn review, release hay migration vào tài liệu hoặc skill dùng theo tác vụ. Kiểm tra connector và tool nào thực sự cần cho phiên.
4. Giữ phiên cho một mục tiêu. Với mục tiêu đang tiếp diễn, chốt checkpoint trước khi compact. Khi đổi sang việc độc lập, mở phiên mới với đầu vào phù hợp.

Checkpoint nên ghi base commit, phạm vi, quyết định đã chốt, file đã sửa, lệnh kiểm tra, kết quả và câu hỏi còn mở. Sau khi compact hoặc bàn giao, đối chiếu checkpoint với diff và test output.

## Chọn mức suy luận theo dấu hiệu

Bắt đầu với cấu hình thường dùng trên việc cục bộ có test rõ. Tăng mức suy luận khi bằng chứng mâu thuẫn, luồng chạy qua nhiều lớp hoặc có quyết định khó đảo ngược. Khi một lần thử không đạt, phân loại nguyên nhân trước khi thử lại.

| Dấu hiệu | Kiểm tra hoặc điều chỉnh |
|---|---|
| Agent đọc nhiều file và vẫn đoán sai | Bổ sung điểm vào, test mẫu và phạm vi |
| Sửa đúng chỗ nhưng bỏ sót quy tắc | Bổ sung acceptance case và chạy test tập trung |
| Cùng một lỗi lặp lại | Dừng, kiểm tra giả thuyết bằng lệnh nhỏ hơn |
| Bản sửa chạy được nhưng khó review | Chia diff theo thay đổi hành vi và giữ scope hẹp |

Cho phép chạy test theo quyền đã xác định. Với dữ liệu bên ngoài workspace và thao tác ghi vào hệ thống dùng chung, kiểm tra quyền và đích đến trước khi đưa vào workflow. [Security và trust boundary](../../01-Foundations/07-security-and-trust.md)
