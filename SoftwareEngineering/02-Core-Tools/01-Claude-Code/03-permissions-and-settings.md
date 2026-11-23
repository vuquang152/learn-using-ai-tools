# 03 — Permission, settings và sandbox

Claude Code dùng permission rule và mode để kiểm soát tool/action. Settings quyết định scope của cấu hình. Hãy phân biệt “agent được hướng dẫn không làm” với “hệ thống thực sự chặn agent làm”.

## Các scope settings chính

| Scope | File điển hình | Dùng cho |
|---|---|---|
| User | `~/.claude/settings.json` | preference cá nhân trên máy |
| Shared project | `.claude/settings.json` | permission/hook/plugin dùng chung của team |
| Project local | `.claude/settings.local.json` | override cá nhân, không nên commit |
| Managed | do tổ chức triển khai | policy và compliance |

Trên Windows, `~/.claude` thường tương ứng `%USERPROFILE%\.claude`.

## Rule allow, ask, deny

- `allow`: hành động khớp rule có thể chạy không hỏi trong phạm vi mode/policy.
- `ask`: buộc hỏi trước.
- `deny`: chặn hành động.

Ưu tiên rule cụ thể. Không allow toàn bộ shell chỉ để test chạy tiện hơn.

Ví dụ khởi đầu:

```json
{
  "$schema": "https://json.schemastore.org/claude-code-settings.json",
  "permissions": {
    "allow": [
      "Bash(./mvnw test *)"
    ],
    "deny": [
      "Read(./.env)",
      "Read(./.env.*)"
    ]
  }
}
```

Đây chỉ là ví dụ học tập. Kiểm tra cú pháp rule hiện tại trong tài liệu và thử cả một action được phép lẫn một action phải bị chặn.

## Quy trình cấp quyền

Khi thấy prompt, hỏi:

1. Action có cần cho task không?
2. Target có đúng file/command/domain không?
3. Hậu quả có reversible không?
4. Nên cấp một lần, cả session hay rule lâu dài?
5. Có thể thu hẹp command/path không?

Không chọn “đừng hỏi lại” khi chưa hiểu rule sẽ được lưu ở scope nào.

## Kiểm tra settings đã load

- Dùng `/status` để xem settings source.
- Dùng `/permissions` để xem/quản lý permission.
- Dùng `/doctor` hoặc `claude doctor` để tìm cấu hình lỗi.
- Test một hành động được allow và một hành động deny trước khi tin policy.

## Nguồn

- [Configure permissions](https://code.claude.com/docs/en/permissions)
- [Settings files and precedence](https://code.claude.com/docs/en/settings)
