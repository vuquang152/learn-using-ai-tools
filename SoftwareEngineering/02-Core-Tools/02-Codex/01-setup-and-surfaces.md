# 01 — Setup, surface và phiên đầu tiên

## Chọn surface theo công việc

| Surface | Phù hợp |
|---|---|
| CLI | terminal-first workflow, script, command và kiểm soát trực tiếp |
| IDE extension | làm việc sát file/editor hiện tại |
| ChatGPT desktop/Codex app | quản lý chat, diff, local environment, worktree và công việc song song |
| Cloud | task chạy trong môi trường tách biệt đã cấu hình |

Các surface có thể chia sẻ nhiều lớp cấu hình, nhưng môi trường thực thi và quyền truy cập không mặc nhiên giống nhau. Luôn kiểm tra task đang chạy local, worktree hay cloud.

## CLI setup

Nếu dùng CLI, theo tài liệu hiện tại có thể cài package chính thức:

```powershell
npm install --global @openai/codex
codex --version
```

Sau đó mở terminal ở repo root và chạy:

```powershell
codex
```

Đăng nhập theo luồng được CLI cung cấp. API key không chứng minh bạn có cùng quyền với ChatGPT/Codex cloud; không dán credential vào prompt.

Nếu dùng desktop app, mở project/repository trong app và xác định rõ chat chạy ở `Local` hay `Worktree` trước khi gửi task.

## Kiểm tra session

- Đúng repository và working directory.
- Đúng local/worktree/cloud environment.
- Working tree có thay đổi của người dùng hay không.
- Sandbox mode và approval policy hiện tại.
- Instruction/config nào đang được áp dụng.
- Build/test dependency có sẵn trong environment.

Trong CLI, `/status` hữu ích để xem trạng thái session. `/help` là nguồn đúng cho command hiện có trên phiên bản đang cài. Một số command thường dùng gồm `/plan`, `/review`, `/compact`, `/resume`, `/fork` và `/status`, nhưng không nên viết workflow phụ thuộc command mà chưa kiểm tra phiên bản.

## Phiên đầu tiên: chỉ khám phá

```text
Chỉ đọc repository, chưa sửa file.
1. Kiểm tra git status và không làm mất thay đổi hiện có.
2. Tạo repository map ngắn.
3. Xác định build/test command từ file trong repo.
4. Tìm entry point của ứng dụng.
5. Phân biệt fact, inference và unknown; dẫn evidence cho mỗi claim.
```

## Nguồn

- [Codex CLI](https://learn.chatgpt.com/docs/codex/cli)
- [ChatGPT desktop app](https://learn.chatgpt.com/docs/app)
- [Codex environments](https://learn.chatgpt.com/docs/environments)
