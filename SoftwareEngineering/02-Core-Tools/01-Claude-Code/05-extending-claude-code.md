# 05 — Skills, hooks và MCP

Chỉ mở rộng sau khi workflow thủ công đã ổn định. Mỗi cơ chế giải quyết một loại vấn đề khác nhau.

## Chọn đúng cơ chế

| Nhu cầu | Cơ chế |
|---|---|
| Fact/rule luôn áp dụng trong repo | `CLAUDE.md`/rules |
| Procedure lặp lại cần instruction, reference, script | skill |
| Hành động deterministic ở lifecycle event | hook |
| Tool hoặc dữ liệu sống ngoài repository | MCP |
| Đóng gói và chia sẻ nhiều extension | plugin |

## Skills

Skill là thư mục có `SKILL.md` và có thể kèm script/reference/assets. Dùng khi bạn liên tục dán cùng checklist hoặc quy trình vào chat.

Một skill tốt:

- Một nhiệm vụ rõ, ví dụ `spring-api-review`.
- Description nói chính xác khi nào dùng.
- Input/output và verification rõ.
- Chỉ đọc reference hoặc chạy script khi cần.

Không chuyển mọi dòng trong `CLAUDE.md` thành skill. Fact ngắn và rule luôn áp dụng vẫn thuộc instruction dự án.

## Hooks

Hook chạy khi có event như edit, finish hoặc permission request. Dùng cho việc deterministic:

- Auto-format file vừa sửa.
- Chặn sửa file protected.
- Chạy policy check.
- Gửi notification khi cần input.

Hook có thể chạy code tự động, nên phải review command, timeout, failure behavior và dữ liệu đầu vào. Hook không phải nơi tốt cho quyết định nghiệp vụ mơ hồ.

## MCP

Dùng MCP khi Claude cần truy cập issue tracker, tài liệu nội bộ, browser hoặc hệ thống khác. Trước khi kết nối:

1. Liệt kê tool/resource server expose.
2. Phân biệt read và write action.
3. Giới hạn credential/quyền.
4. Đặt approval cho external write.
5. Xem nội dung trả về là untrusted input.

## Thứ tự mở rộng

1. Instruction dự án chính xác.
2. Workflow thủ công lặp lại và đo được.
3. Skill hóa procedure.
4. Hook hóa kiểm tra deterministic.
5. Thêm MCP chỉ khi cần context/action bên ngoài.

## Nguồn

- [Extend Claude with skills](https://code.claude.com/docs/en/skills)
- [Automate actions with hooks](https://code.claude.com/docs/en/hooks-guide)
- [Connect Claude Code to tools via MCP](https://code.claude.com/docs/en/mcp)
