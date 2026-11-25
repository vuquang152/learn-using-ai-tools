# 03 — Tối ưu Claude Code

## Kiểm tra mức sử dụng và context

Trong CLI, dùng `/usage` để xem chỉ số có sẵn cho cách đăng nhập hiện tại. Với API, ghi usage của phiên và đối chiếu số tiền với dashboard nhà cung cấp. Với thuê bao, dùng thanh hạn mức và số liệu credits nếu tài khoản hiển thị. Dùng `/context` để tìm phần chiếm chỗ như lịch sử, instruction hoặc tool. Ghi lại cùng model và phiên bản client. [Quản lý chi phí Claude Code](https://code.claude.com/docs/en/costs)

## Ba thay đổi nên thử

1. **Giảm dữ liệu lặp.** Rút `CLAUDE.md` về quy ước, lệnh kiểm tra và ràng buộc luôn áp dụng. Chuyển checklist chuyên biệt sang skill. Kiểm tra MCP đang bật và chỉ giữ kết nối cần cho task. Với log dài, đưa đoạn liên quan và vị trí trong file.
2. **Quản lý phiên theo mục tiêu.** Khi context lớn và công việc vẫn tiếp diễn, dùng `/compact` với trọng tâm như “giữ acceptance criteria, quyết định, file thay đổi và kết quả test”. Kiểm tra lại các điểm đó sau khi tóm tắt. Dùng `/clear` hoặc phiên mới khi đổi việc.
3. **Chọn model và mức suy luận.** Dùng `/model` để chọn model phù hợp nếu client hỗ trợ. Thử cấu hình nhẹ hơn cho giải thích diff hoặc tác vụ có test rõ. Tăng khi cần phân tích nhiều module hoặc giả thuyết. Ghi số vòng làm lại vì đó cũng là usage. Tính cả mức sử dụng của subagent nếu bài thử có dùng. [Cách giảm token](https://code.claude.com/docs/en/costs#reduce-token-usage)

## Thử trên repo bất kỳ

Chọn một test đã biết vị trí. Chạy A với cách giao việc thường dùng. Chạy B trên cùng commit, cùng model và quyền, thêm tên test, symbol và phạm vi log cần đọc. Giữ cùng yêu cầu đầu ra. So file đã đọc, số lượt, usage quan sát được và chất lượng kết luận. Khi muốn thử model khác, mở thí nghiệm mới và giữ nguyên prompt đã chọn.
