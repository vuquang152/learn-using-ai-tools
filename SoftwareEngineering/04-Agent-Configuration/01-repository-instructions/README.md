# 01 — AGENTS.md và CLAUDE.md

Viết quy ước có thể kiểm tra. Ví dụ “giữ stdout là JSON và báo lệnh test đã chạy” cho reviewer biết cần đối chiếu gì. Đưa quy trình dài theo loại task vào skill.

## Cấu hình mẫu

- **Codex.** Sao chép [mẫu root](../practice/examples/AGENTS.md.example) thành `AGENTS.md` và [mẫu theo thư mục](../practice/examples/nested-AGENTS.md.example) thành `src/AGENTS.md`. Khi tạo phiên CLI, Codex đọc scope người dùng và ghép hướng dẫn trên đường từ project root đến working directory. Tại cùng một thư mục, `AGENTS.override.md` được ưu tiên. [Codex AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)
- **Claude Code.** Sao chép [mẫu root](../practice/examples/CLAUDE.md.example) thành `CLAUDE.md` và [mẫu thư mục con](../practice/examples/nested-CLAUDE.md.example) thành `src/CLAUDE.md`. Hai file này import AGENTS.md tương ứng bằng `@AGENTS.md`. Đường dẫn import tính từ file đang chứa nó. Claude Code có thể nạp file hướng dẫn con khi truy cập vùng code đó. Kiểm tra cấu hình nạp AGENTS.md trực tiếp nếu workspace đang dùng cơ chế này để tránh lặp chỉ dẫn. [Claude Code memory](https://code.claude.com/docs/en/memory)

## Bài thực hành

1. Mở phiên mới của từng CLI ở root. Yêu cầu đọc cấu trúc CLI, nêu lệnh smoke test và quy ước stdout. Đối chiếu với file mẫu rồi tự chạy lệnh từ root.
2. Mở Codex tại `src`. Với Claude Code, yêu cầu đọc `src/cli.mjs` từ phiên root. Yêu cầu mô tả logic theo quy ước thư mục mà không nêu tên mục trong prompt. Tìm tiêu đề **Luồng ticket** trong báo cáo.
3. Ghi working directory và bằng chứng. Nếu kết quả khác kỳ vọng, kiểm tra phiên mới, đường dẫn import hoặc danh sách file ở `/memory` của Claude Code.

Đạt khi phân biệt được chỉ dẫn chung và chỉ dẫn theo thư mục bằng hành vi quan sát được.
