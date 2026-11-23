# 02 — Context engineering cho repository

Context engineering là chọn, tổ chức và duy trì thông tin giúp agent ra quyết định đúng. Nhiều lỗi bị gọi là “model yếu” thực chất đến từ context thiếu, cũ hoặc mâu thuẫn.

## Năm lớp context

1. **Task context:** goal, input, output, constraint, done when.
2. **Repository context:** cấu trúc, convention, command, architecture.
3. **Local code context:** file và symbol trực tiếp liên quan.
4. **Runtime evidence:** error, log, stack trace, test failure, API response.
5. **Decision context:** lựa chọn đã thống nhất và lý do không chọn phương án khác.

## Context tốt không đồng nghĩa context nhiều

Context thừa có thể:

- Làm agent ưu tiên nhầm tài liệu cũ.
- Che khuất constraint quan trọng.
- Tốn context window và làm phiên khó duy trì.
- Đưa dữ liệu nhạy cảm vào task không cần thiết.

Áp dụng progressive disclosure:

1. Bắt đầu bằng goal, vùng code dự kiến và acceptance criteria.
2. Cho agent tự khám phá bằng tìm kiếm và đọc file.
3. Bổ sung log, tài liệu hoặc quyết định khi agent gặp gap cụ thể.
4. Tóm tắt quyết định trước khi context trở nên dài và nhiễu.

## Context bền vững và context của một task

| Loại | Nơi phù hợp |
|---|---|
| Build/test command, convention, do-not rules | `AGENTS.md` hoặc `CLAUDE.md` |
| Mục tiêu và acceptance criteria hiện tại | prompt/task |
| Quy trình lặp lại nhiều lần | skill/playbook |
| Dữ liệu đang thay đổi ngoài repo | tool/MCP phù hợp |
| Một quyết định kiến trúc lâu dài | ADR/tài liệu kiến trúc |

Đừng nhét procedure dài vào instruction gốc. Đừng đưa constraint lâu dài vào một prompt rồi kỳ vọng phiên sau tự nhớ.

## Kỹ thuật routing context

Thay vì nói “đọc repo”, hãy chỉ đường:

```text
Bắt đầu từ OrderController#create.
Theo luồng tới service và repository.
Đọc test trong module orders để nhận diện convention.
Không cần đọc module billing trừ khi có dependency trực tiếp.
```

## Dấu hiệu context có vấn đề

- Agent hỏi lại điều đã có trong repo.
- Dẫn file không liên quan hoặc pattern đã deprecated.
- Lặp lại assumption như fact.
- Mỗi lần sửa lại phá một constraint trước đó.
- Cần prompt ngày càng dài để giữ kết quả ổn định.

Khi gặp các dấu hiệu này, dừng và tái cấu trúc context thay vì tiếp tục thêm mệnh lệnh rời rạc.
