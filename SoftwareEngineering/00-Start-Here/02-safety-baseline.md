# 02 — Thiết lập safety baseline

Coding agent có thể đọc file, sửa code, chạy shell command và đôi khi truy cập mạng hoặc hệ thống bên ngoài. Vì vậy rủi ro không chỉ nằm ở code được sinh ra mà còn ở hành động agent thực hiện.

## Phân loại hành động

| Mức | Ví dụ | Quy tắc ban đầu |
|---|---|---|
| Read-only | đọc source, `git diff`, tìm kiếm | cho phép trong workspace |
| Reversible write | sửa source trên branch riêng | cho phép nhưng phải review diff |
| Local execution | build, unit test, formatter | cho phép theo command đã biết |
| Network | tải dependency, gọi API | hỏi trước hoặc giới hạn domain |
| External write | tạo issue, push branch, gửi message | luôn xác nhận mục tiêu và nội dung |
| Destructive | xóa dữ liệu, reset, force push | không tự động; cần phê duyệt rõ ràng |

## Dữ liệu không được đưa vào context

- API key, password, token, private key và file `.env` thật.
- Dữ liệu khách hàng hoặc production dump chưa được ẩn danh.
- Source code hoặc tài liệu mà chính sách công ty không cho phép dùng với dịch vụ AI.
- Log có access token, session ID, email, số điện thoại hoặc định danh cá nhân.

Thêm file nhạy cảm vào `.gitignore` không có nghĩa agent không thể đọc chúng. Phải kết hợp quy tắc dự án, permission/sandbox và thói quen kiểm tra context.

## Quy tắc mặc định cho người mới

1. Bắt đầu bằng quyền mặc định của tool.
2. Chỉ làm trong repository thực hành.
3. Dùng branch hoặc worktree riêng cho mỗi task.
4. Không bật chế độ bỏ qua permission chỉ để giảm số lần xác nhận.
5. Không cho agent chạy migration hoặc thao tác với production.
6. Không chấp nhận thay đổi nếu chưa đọc diff và chạy kiểm tra.
7. Dừng phiên khi agent liên tục mở rộng phạm vi ngoài yêu cầu.

## Bài thực hành

Viết policy ngắn cho repository:

```text
Agent được phép:
- Đọc source và tài liệu trong repository.
- Sửa source/test trong phạm vi task.
- Chạy các lệnh build/test đã liệt kê.

Agent phải hỏi trước khi:
- Thêm hoặc nâng dependency.
- Truy cập mạng.
- Thay đổi schema database.
- Sửa CI/CD hoặc file triển khai.
- Push, tạo PR hoặc tác động hệ thống bên ngoài.

Agent không được:
- Đọc file secret hoặc dữ liệu production.
- Xóa dữ liệu, force push hoặc bỏ qua test.
```

Policy này là đầu vào cho `CLAUDE.md` hoặc `AGENTS.md` ở phần Core Tools.
