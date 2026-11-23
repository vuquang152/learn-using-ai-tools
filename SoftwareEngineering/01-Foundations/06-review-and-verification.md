# 06 — Review và verification

Code compile được không chứng minh feature đúng. Test pass không chứng minh test đang kiểm tra đúng behavior. Verification cần nhiều lớp bằng chứng độc lập.

## Verification ladder

1. **Static:** diff, type/compile, lint, formatter.
2. **Focused test:** test nhỏ nhất trực tiếp chứng minh thay đổi.
3. **Integration:** interaction với framework, database hoặc service boundary.
4. **Behavior:** gọi API/UI/CLI như người dùng hoặc consumer thật.
5. **Regression:** suite rộng hơn tương xứng blast radius.
6. **Operational:** log, metric, migration, rollback nếu task liên quan vận hành.

Không phải task nào cũng cần đủ sáu lớp. Người review phải chọn lớp phù hợp và nêu lý do.

## Review diff theo thứ tự

1. Đọc danh sách file và kích thước diff.
2. Tìm file ngoài phạm vi hoặc generated artifact.
3. Đọc test để hiểu behavior agent đang tuyên bố.
4. Đọc production code và so với convention hiện có.
5. Kiểm tra error path, null/empty, concurrency, authorization và compatibility phù hợp task.
6. Đối chiếu từng acceptance criterion với evidence.

## Bảng evidence

| Acceptance criterion | Evidence | Kết quả |
|---|---|---|
| Invalid email trả 400 | integration test `createUser_invalidEmail` | pass |
| Email hợp lệ không đổi | existing happy-path test | pass |
| Không thêm dependency | diff `pom.xml` không đổi | pass |

Nếu một tiêu chí không có evidence, trạng thái là “chưa chứng minh”, không phải “có lẽ đúng”.

## Đừng để agent tự chấm toàn bộ bài của nó

Self-review hữu ích để tìm lỗi bổ sung, nhưng agent có thể lặp lại cùng assumption đã tạo ra bug. Cần ít nhất một nguồn độc lập:

- Test do behavior yêu cầu dẫn dắt.
- Review của con người.
- Static analyzer hoặc compiler.
- Runtime reproduction.
- Reviewer/agent khác với context độc lập cho task quan trọng.

## Báo cáo hoàn thành tốt

Phải gồm thay đổi gì, vì sao, kiểm tra nào đã chạy, kết quả, điều chưa kiểm tra được và rủi ro còn lại. “Done” không được chỉ dựa trên việc agent đã hết việc để làm.
