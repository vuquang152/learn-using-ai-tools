# 04 — Tối ưu Codex

## Đo theo môi trường đang dùng

Với tài khoản ChatGPT, xem hạn mức trong usage dashboard. Trong CLI, dùng `/status` để kiểm tra trạng thái phiên và hạn mức nếu hiển thị. Với cấu hình API được tính phí riêng, dùng số liệu của nhà cung cấp cho lần gọi tương ứng. Ghi rõ CLI, IDE hay desktop và các thông tin client thực sự hiển thị. [Codex pricing và usage](https://learn.chatgpt.com/docs/pricing)

## Giảm chi phí của một vòng làm việc

1. Giữ `AGENTS.md` gọn với lệnh build/test và quy ước chung. Đặt quy tắc riêng của module ở phạm vi tương ứng. Mở một phiên thử để kiểm tra lệnh và chỉ dẫn cần thiết vẫn được áp dụng.
2. Nêu file hoặc symbol bắt đầu, thay đổi cần đạt và test chấp nhận. Giới hạn output của lệnh vào đoạn giúp xác minh. Chỉ kết nối MCP hoặc bật skill liên quan trực tiếp đến task.
3. Theo dõi phiên dài bằng chỉ báo context nếu client có. Trong CLI, dùng `/compact` khi tiếp tục cùng mục tiêu và cần giải phóng context. Ghi lại quyết định và bằng chứng trước khi compact. Mở chat mới cho việc độc lập.
4. Thử model hoặc mức suy luận phù hợp từ các lựa chọn thực sự có trong client. Giữ một cấu hình cho cả lần thử. Nếu dùng chế độ tăng tốc, đo thời gian và đối chiếu cách tính usage hiện hành trước khi lấy làm mặc định.

[Codex best practices](https://learn.chatgpt.com/guides/best-practices) · [Developer commands](https://learn.chatgpt.com/docs/developer-commands) · [Codex pricing](https://learn.chatgpt.com/docs/pricing)

## Thử trên repo bất kỳ

Chọn một diff cần review. Giữ nguyên base commit, diff, model, quyền và rubric. Lượt A dùng prompt thường ngày. Lượt B nêu các file trọng tâm, phạm vi review và yêu cầu dẫn test hoặc dòng code cho mỗi nhận xét. Chấm số nhận xét đúng, nhận xét thiếu bằng chứng, thời gian review và usage quan sát được. Chỉ tăng mức suy luận ở lượt đo riêng khi còn một vấn đề cụ thể chưa giải quyết.
