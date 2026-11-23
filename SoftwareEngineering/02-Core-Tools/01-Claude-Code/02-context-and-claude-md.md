# 02 — Context, `CLAUDE.md` và memory

Mỗi session bắt đầu với context mới. Claude Code dùng instruction file và memory để mang kiến thức cần thiết qua các phiên, nhưng hai cơ chế có mục đích khác nhau.

## Dùng `CLAUDE.md` cho hướng dẫn bền vững

Nên chứa:

- Repository/module map ngắn.
- Build, test, lint và run command đã xác minh.
- Convention không thể suy ra dễ dàng từ code.
- Safety boundary và vùng không được sửa.
- Definition of done chung.

Không nên chứa:

- Task hiện tại hoặc status tạm thời.
- Tutorial dài về framework.
- Danh sách mọi file trong repository.
- Quy tắc mơ hồ như “luôn viết code tốt”.
- Procedure dài phù hợp hơn với skill.

## Mẫu tối thiểu

```markdown
# Repository guide

## Structure
- `app-core`: domain và shared DTO.
- `order-service`: Spring Boot service cho order.

## Commands
- Build: `./mvnw verify`
- Focused test: `./mvnw -pl order-service -Dtest=ClassName test`

## Conventions
- Controller không chứa business logic.
- Transaction boundary nằm ở service layer.
- API error dùng cấu trúc hiện có; không tạo format mới.

## Safety
- Không đọc `.env*` hoặc secret.
- Hỏi trước khi thêm dependency, migration hoặc sửa CI.

## Done
- Test liên quan và build pass.
- Báo cáo command đã chạy và giới hạn chưa kiểm tra.
```

## Scope và vị trí

Claude Code có thể đọc instruction ở nhiều scope. Dùng project `CLAUDE.md` cho quy tắc chia sẻ; dùng instruction gần subdirectory khi chỉ module đó cần. Quy tắc gần vùng code nên cụ thể hơn, không lặp toàn bộ root file.

Claude Code hiện cũng có hỗ trợ `AGENTS.md` trong một số cấu hình. Nếu muốn dùng chung instruction giữa nhiều coding agent, đọc phần `AGENTS.md` trong tài liệu memory và kiểm tra behavior của phiên hiện tại; không duy trì hai file mâu thuẫn.

## Auto memory

Auto memory phù hợp với learning cục bộ được tích lũy trong quá trình làm việc. `CLAUDE.md` là instruction do người/team chủ động quản lý và review. Đừng dựa vào auto memory cho safety rule hoặc build command quan trọng.

## Audit instruction

Mỗi tháng hoặc khi agent lặp lỗi:

1. Xóa rule không còn đúng.
2. Biến procedure dài thành skill.
3. Thay lời khuyên mơ hồ bằng command/example.
4. Kiểm tra instruction root và nested có mâu thuẫn không.
5. Xác nhận không có secret hoặc thông tin tạm thời.

## Nguồn

- [How Claude remembers your project](https://code.claude.com/docs/en/memory)
