# 09 — Bài tổng hợp Foundations

## Tình huống

Một Spring Boot API tạo order đôi khi trả HTTP 500 khi request không có `customerId`. Team muốn trả HTTP 400 với error code ổn định, không thay đổi behavior của request hợp lệ.

## Yêu cầu

Chưa cần implement. Hãy tạo gói chuẩn bị để giao task cho coding agent:

1. Phân loại mức tự chủ phù hợp và giải thích.
2. Viết task contract đầy đủ.
3. Liệt kê context ban đầu và context chỉ tải khi cần.
4. Viết prompt khám phá yêu cầu evidence map.
5. Tạo plan có checkpoint.
6. Tạo verification ladder cho task.
7. Liệt kê security/trust concern.
8. Chọn chỉ số dùng để so phiên agent với baseline.

## Rubric 12 điểm

- 2 điểm: goal mô tả outcome, không áp đặt implementation.
- 2 điểm: acceptance criteria quan sát được, có happy path và error path.
- 2 điểm: context được route hợp lý, không yêu cầu đọc toàn repo.
- 2 điểm: plan có assumption, evidence và điều kiện dừng.
- 2 điểm: verification ánh xạ trực tiếp tới acceptance criteria.
- 2 điểm: nêu đúng trust boundary và cách đo hiệu quả.

Đạt từ 10 điểm trước khi chuyển sang Core Tools. Sau đó dùng cùng bài này với Claude Code và Codex để so sánh cách vận hành, không so “ai viết code hay hơn” bằng cảm giác.
