# 00 — Start Here

Phần này chuẩn bị môi trường và thói quen làm việc trước khi giao một thay đổi thật cho coding agent. Hãy hoàn thành theo thứ tự; chưa cần biết Claude Code hay Codex là tool chính.

## Kết quả đầu ra

Sau phần này, bạn sẽ có:

- Một repository thực hành an toàn, chạy được build và test.
- Một bản baseline ghi lại trạng thái dự án trước khi dùng AI.
- Quy tắc về dữ liệu, quyền hạn và hành động cần phê duyệt.
- Một task nhỏ có acceptance criteria rõ ràng.
- Nhật ký của phiên agent đầu tiên, gồm diff và bằng chứng kiểm chứng.

## Thứ tự học

1. [Chuẩn bị repository thực hành](./01-prepare-practice-repository.md)
2. [Thiết lập safety baseline](./02-safety-baseline.md)
3. [Đo baseline kỹ năng và hiệu quả](./03-baseline-assessment.md)
4. [Thực hiện phiên agent đầu tiên](./04-first-agent-session.md)

## Điều kiện hoàn thành

Chỉ chuyển sang Foundations khi bạn có thể trả lời:

- Lệnh nào build, test, lint và chạy ứng dụng?
- Agent được phép đọc, sửa và chạy những gì?
- Những dữ liệu hoặc file nào không được đưa vào context?
- Làm thế nào biết task đã thực sự hoàn thành?
- Có thể khôi phục trạng thái trước khi agent sửa hay không?

> Mục tiêu không phải trao quyền tối đa cho agent. Mục tiêu là xây một vòng lặp cộng tác có thể quan sát, kiểm chứng và khôi phục.
