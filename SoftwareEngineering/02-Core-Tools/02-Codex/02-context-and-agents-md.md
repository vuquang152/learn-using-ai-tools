# 02 — Context và `AGENTS.md`

`AGENTS.md` là nơi lưu durable guidance cho Codex trong repository. Nó nên mô tả cách team thực sự build, test, review và ship code, không phải một prompt dài cho mọi tình huống.

## Nội dung phù hợp

- Repo layout và module quan trọng.
- Build, test, lint và run command đã xác minh.
- Engineering convention và PR expectation.
- Constraint, do-not rule và vùng protected.
- Definition of done và verification expectation.
- Routing: nên bắt đầu đọc file/thư mục nào cho từng loại task.

## Scope

- Global `AGENTS.md` trong Codex home: preference cá nhân áp dụng rộng.
- Root `AGENTS.md`: quy tắc chung của repository/team.
- Nested `AGENTS.md`: quy tắc cụ thể cho subtree/module.

Instruction gần working directory/vùng code hơn được dùng để cụ thể hóa hoặc ưu tiên hơn. Tránh copy nguyên root file vào từng module vì chúng sẽ drift.

## Mẫu cho Java/Spring

```markdown
# Agent guide

## Repository
- `app-core`: shared domain/DTO.
- `order-service`: Spring Boot order API.

## Commands
- Full verification: `./mvnw verify`
- Focused test: `./mvnw -pl order-service -Dtest=ClassName test`

## Architecture
- Controller chỉ xử lý transport/validation.
- Business rule ở service/domain.
- Transaction boundary ở public service method.

## Safety
- Không đọc `.env*` hoặc secret.
- Hỏi trước khi thêm dependency, migration, network access hoặc sửa CI.
- Giữ nguyên thay đổi chưa commit của người dùng.

## Done
- Acceptance criteria được ánh xạ tới evidence.
- Focused test và verification phù hợp đã chạy.
- Báo cáo giới hạn chưa kiểm tra.
```

## Viết instruction bằng feedback loop

1. Bắt đầu ngắn.
2. Khi Codex sai, xác định lỗi là task-specific hay recurring.
3. Nếu recurring, thêm rule hoặc routing gần phạm vi nhất.
4. Dùng linter/test/hook để enforce điều có thể kiểm tra máy móc.
5. Xóa instruction không còn đúng.

Nếu procedure cần nhiều bước, reference hoặc script, chuyển thành skill thay vì làm `AGENTS.md` phình to.

## Scaffold và kiểm tra

CLI có thể cung cấp `/init` để tạo starter `AGENTS.md`. Chỉ coi đó là bản nháp: phải sửa command và convention theo repo thật. Kiểm tra instruction bằng hành vi của session mới, không chỉ hỏi agent có đọc file hay không.

## Nguồn

- [Custom instructions with AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)
- [Codex best practices](https://learn.chatgpt.com/guides/best-practices)
