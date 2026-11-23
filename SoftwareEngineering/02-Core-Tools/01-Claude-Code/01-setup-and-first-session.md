# 01 — Setup và phiên đầu tiên

## Chọn surface

- **Terminal CLI:** phù hợp để hiểu rõ command, permission và repository workflow.
- **IDE:** thuận tiện khi cần context từ file đang mở và review trực tiếp.
- **Desktop/web/cloud:** phù hợp task nền hoặc môi trường tách biệt, nhưng cách settings và quyền có thể khác local CLI.

Lộ trình bắt đầu bằng CLI để cơ chế quan sát được rõ nhất.

## Cài đặt

Làm theo [quickstart chính thức](https://code.claude.com/docs/en/quickstart) cho hệ điều hành hiện tại. Tài liệu chính thức khuyến nghị native installer và cung cấp lựa chọn riêng cho macOS/Linux/WSL, PowerShell, CMD và WinGet.

Sau cài đặt:

```powershell
claude --version
```

Mở terminal ở repository thực hành rồi chạy:

```powershell
claude
```

Hoàn tất đăng nhập theo hướng dẫn trên màn hình. Không dán API key vào chat hoặc commit credential vào repository.

## Kiểm tra trước task

Trong hoặc ngoài phiên, xác nhận:

- Đúng working directory.
- `git status` không chứa thay đổi lạ.
- Build/test baseline chạy được.
- Claude Code đang dùng đúng account và settings source.

Các command hữu ích cần biết, nhưng hãy kiểm tra `/help` vì danh sách có thể thay đổi:

- `/status`: xem trạng thái và nguồn settings đang dùng.
- `/permissions`: quản lý rule cho tool/action.
- `/memory`: xem instruction/memory.
- `/compact`: tóm gọn context khi phiên dài.
- `/doctor`: chẩn đoán setup; nếu CLI không khởi động, dùng `claude doctor` từ shell.

## Phiên read-first

Yêu cầu đầu tiên không nên là “hãy sửa code”.

```text
Chỉ đọc repository, chưa sửa file và chưa chạy command thay đổi trạng thái.
Hãy cho biết:
1. Cấu trúc module chính.
2. Lệnh build/test được repository định nghĩa.
3. Entry point của ứng dụng.
4. Ba câu hỏi cần làm rõ trước khi thay đổi code.
Mỗi claim phải dẫn file hoặc command output hỗ trợ.
```

## Dấu hiệu setup chưa sẵn sàng

- Claude không tìm được build tool hoặc dependency.
- Working directory không phải repo root.
- Settings project không được load vì chưa trust repository.
- Command cơ bản liên tục cần quyền ngoài dự kiến.
- Agent đọc file secret hoặc thư mục ngoài phạm vi.

Giải quyết setup trước khi đánh giá chất lượng model.

## Nguồn

- [Quickstart](https://code.claude.com/docs/en/quickstart)
- [Troubleshooting](https://code.claude.com/docs/en/troubleshooting)
