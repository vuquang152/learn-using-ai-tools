# 01 — Đọc chỉ số và đo hiệu quả

## Đọc đúng đơn vị

| Chỉ số | Câu hỏi nó trả lời | Nơi xem |
|---|---|---|
| Context đang dùng | Phiên còn chỗ cho bao nhiêu thông tin mới? | Chỉ báo context của client nếu có |
| Token input, output và cache | Mô hình đã xử lý bao nhiêu dữ liệu qua các lượt? | Usage của phiên hoặc response API nếu có |
| Hạn mức gói hoặc credits | Còn bao nhiêu dung lượng sử dụng trong cửa sổ hiện tại? | Usage của tài khoản |
| Chi phí API | Bao nhiêu tiền đã ghi nhận cho các lần gọi? | Activity, dashboard nhà cung cấp hoặc trường cost có hỗ trợ |
| Lượt chạy workflow | Automation đã thực thi bao nhiêu lần? | Execution history của n8n |
| Review và làm lại | Engineer mất bao lâu để chấp nhận kết quả? | Nhật ký task |

Một phiên có thể giảm dung lượng context sau khi tóm tắt, trong khi usage tích lũy vẫn tăng. Hạn mức còn lại có thể đổi vì cửa sổ sử dụng được làm mới hoặc có phiên khác chạy đồng thời. Ghi tên chỉ số, đơn vị, nguồn và mốc thời gian. Với chỉ số client không cung cấp, ghi `N/A`.

## Chi phí cho một kết quả đạt yêu cầu

Với API, lấy tổng chi phí đã ghi nhận của cả lượt thành công, lượt lỗi có phí và lần thử lại. Chia cho số kết quả đạt cùng một rubric. Nếu cả hai lượt đều thất bại, ghi “0 kết quả đạt” cùng tổng chi phí.

Ví dụ giả lập: A tốn 0,06 USD cho 3 lượt và có 2 kết quả đạt, tương đương 0,03 USD/kết quả. B tốn 0,04 USD cho 3 lượt và có 1 kết quả đạt, tương đương 0,04 USD/kết quả. Ghi cả tỷ lệ đạt để thấy vì sao B có tổng chi thấp hơn nhưng hiệu quả kém hơn. Với gói thuê bao, dùng mức sử dụng quan sát được đúng đơn vị của gói và giữ cột tiền ở `N/A` nếu không có số tiền thực tế cho task.

Đặt mục tiêu đo trước khi chạy, chẳng hạn giữ đủ test và giảm thời gian review, hoặc giữ độ chính xác trong khi giảm số API call. Theo dõi riêng thời gian agent chạy và thời gian engineer đọc, sửa hoặc review. [Scorecard Foundations](../../01-Foundations/08-measuring-effectiveness.md)
