# 07 — Thực hành có đối chứng và scorecard

## Bài 1 — Đo một coding agent

Chọn một lỗi nhỏ, một diff cần review hoặc một yêu cầu có test rõ trong repo của bạn. Có thể dùng bất cứ stack nào. Nếu chưa có repo phù hợp, dùng ca đọc hiểu dưới đây.

### Ca mẫu không cần framework

```javascript
function paginate(items, page, size) {
  const start = page * size;
  return items.slice(start, start + size);
}
```

Trang đầu là trang 1. Với `items = ['a', 'b', 'c']` và `size = 2`, trang 1 phải trả `['a', 'b']`, trang 2 trả `['c']`, trang 3 trả `[]`. `page` và `size` luôn là số nguyên dương trong bài này. Yêu cầu agent giải thích điểm sai, đề xuất bản sửa nhỏ và đưa ba ca kiểm tra. Kỳ vọng căn nguyên là phép tính offset cho chỉ số trang bắt đầu từ 0.

### Thiết kế phép đo

1. Chốt đầu vào, base commit hoặc fixture, tiêu chí đạt, quyền truy cập và thời gian thử. Dùng hai chat mới và workspace cùng trạng thái. Lưu phiên bản tool, model, mức suy luận và thời điểm đo.
2. Chạy **A** với prompt bạn thường dùng. Chạy **B** với điểm vào và vùng tìm kiếm rõ hơn. Giữ cùng yêu cầu, đầu ra và tiêu chí kiểm tra. Với ca mẫu, giữ nguyên đoạn mã và hành vi yêu cầu, rồi thêm hướng dẫn tập trung vào hai tham số `page` và `size` ở lượt B.
3. Ghi lại trước và sau mỗi lượt theo mẫu. Review bằng cùng rubric. Nếu chỉ số hạn mức còn lại bị ảnh hưởng bởi phiên khác hoặc làm mới giữa lượt, đánh dấu dữ liệu đó chưa so sánh được.
4. Khi thử tối ưu model, mức suy luận, compact hoặc instruction file, chạy cặp mới và thay đúng yếu tố đó. Với thử nghiệm compact, tạo lại cùng lịch sử và checkpoint trước điểm can thiệp. Nếu chi phí cho phép, lặp lại vài lần hoặc đảo thứ tự để thấy kết quả có ổn định không.

### Scorecard

| Chỉ số | Lượt A | Lượt B |
|---|---|---|
| Tool, môi trường, phiên bản, model và mức suy luận | | |
| Biến thay đổi | | |
| Context trước/sau, nếu thấy | | |
| Input, output, cache read/write nếu có | | |
| Hạn mức trước/sau và thời điểm làm mới nếu thấy | | |
| Chi phí ghi nhận, nếu có | | |
| Số file đã đọc hoặc số tool call quan sát được | | |
| Thời gian agent chạy và thời gian engineer review | | |
| Số vòng làm lại | | |
| Tiêu chí đạt và bằng chứng | | |

Ca mẫu đạt khi nêu đúng lỗi, giữ phạm vi sửa ở phép tính offset và kiểm tra đủ ba trang. Với repo thật, thay dòng rubric bằng acceptance criteria của task. Không có số liệu cho một cột thì ghi `N/A`. Một lượt có token thấp hơn nhưng sai test được ghi là thất bại.

## Bài 2 — Đo workflow và API

1. Chạy [bài đo n8n](./05-n8n.md#bài-đo-nhanh) với stub, ghi số execution, request thành công và tác động ghi nếu có.
2. Chạy [bài đo OpenRouter](./06-openrouter.md#bài-đo-nhanh) với cùng loại log. Chọn API thật khi cần đo tiền hoặc cache. Chọn stub khi chỉ kiểm tra retry, schema và nhánh dự phòng.
3. Giả lập upstream lỗi và xem workflow có dừng đúng số lần thử hay không. So số bản nháp hợp lệ theo cùng rubric trước khi ghi nhận tiết kiệm.

## Kết luận sau bài

Viết một quyết định có thể kiểm tra lại. Ví dụ “Giữ prompt có tên test cho nhóm lỗi phân trang vì hai lượt đều đạt ba ca kiểm tra và lượt B cần ít thời gian review hơn. Đo lại khi chuyển sang lỗi liên quan nhiều module.” Ghi rõ dữ liệu nào là quan sát, dữ liệu nào là ước tính và khi nào nên hoàn nguyên cấu hình.
