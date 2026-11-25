# 02 — Core Tools

Phần này hướng dẫn dùng coding agent trong repository, tự động hóa quy trình kỹ thuật và tích hợp mô hình AI vào ứng dụng.

## Các module

1. [Claude Code](./01-Claude-Code/README.md)
2. [Codex](./02-Codex/README.md)
3. [n8n — Tự động hóa quy trình kỹ thuật](./03-n8n/README.md)
4. [OpenRouter — Tích hợp và chọn mô hình qua API](./04-OpenRouter/README.md)
5. [Vận hành và tối ưu — Context, chất lượng, hạn mức và chi phí](./05-Optimization/README.md)

## Chọn coding agent chính

Không cần đổi tool theo từng prompt. Chọn một primary tool trong ít nhất 2–4 tuần để xây thói quen, instruction và dữ liệu đánh giá ổn định.

| Tiêu chí | Claude Code | Codex |
|---|---|---|
| Instruction dự án | `CLAUDE.md`, rules; cũng hỗ trợ `AGENTS.md` tùy cấu hình | `AGENTS.md` và file lồng theo thư mục |
| Cấu hình dự án | `.claude/settings.json` | `.codex/config.toml` |
| Workflow tái sử dụng | skills, hooks, plugins | skills, hooks, plugins |
| External tools/context | MCP | MCP và app/plugin tùy surface |
| Môi trường | terminal, IDE, desktop, web/cloud | CLI, IDE, desktop và cloud/worktree |

Bảng trên dùng để định vị khái niệm, không phải tuyên bố tool nào “tốt hơn”. Tính năng thay đổi nhanh; hãy dùng tài liệu chính thức được dẫn trong từng module để kiểm tra giao diện và giới hạn hiện tại.

## Cách học

1. Hoàn thành setup và safety của primary tool.
2. Dùng Task A ở Start Here để hoàn thành bài thực hành.
3. Dùng Task B để luyện debug dựa trên evidence.
4. Chuyển sang tool còn lại với cùng task contract và codebase state.
5. So sánh chất lượng, review effort, quyền hạn và khả năng kiểm chứng — không chỉ thời gian tạo patch.
6. Học n8n bằng workflow kiểm tra kết quả build. Học OpenRouter bằng một request trực tiếp và bài tích hợp Java/Spring. Sau đó ghép hai công cụ trong [bài thực hành n8n + OpenRouter](./04-OpenRouter/03-practice.md#bài-2--ghép-với-n8n).
7. Áp dụng [Vận hành và tối ưu](./05-Optimization/README.md) cho từng công cụ sau bài thực hành đầu tiên. Bài tổng hợp cho phép chọn repository và stack tùy ý.

## Điều kiện hoàn thành

- Có instruction file ngắn, đúng với repository.
- Biết kiểm tra session đang dùng config/permission nào.
- Thực hiện được explore → plan → implement → verify → review.
- Biết khi nào dùng prompt, instruction, skill, hook hoặc MCP.
- Có scorecard cho cùng một task trên cả hai tool.
- Xử lý được kết quả build hợp lệ và đầu vào sai trong n8n.
- Gọi được một mô hình đã chọn qua OpenRouter và kiểm thử cách ứng dụng xử lý lỗi hoặc kết quả thiếu.
- Đo được tác động của một thay đổi về context, model hoặc workflow bằng chỉ số sử dụng thực tế và cùng tiêu chí chất lượng.
