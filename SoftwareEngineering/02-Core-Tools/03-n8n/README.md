# 03 — n8n

n8n chạy quy trình theo trigger, truyền dữ liệu giữa các node và lưu kết quả thực thi để kiểm tra. Module này dùng kết quả build giả lập làm đầu vào, phù hợp với hai nhánh Backend và DevOps của lộ trình.

1. [Thiết lập và chạy workflow đầu tiên](./01-setup-and-first-workflow.md)
2. [Xử lý lỗi và kiểm soát tác động](./02-reliable-workflows.md)
3. [Bài thực hành phân loại kết quả build](./03-practice.md)
4. [Tối ưu execution, API call và tài nguyên n8n](../05-Optimization/05-n8n.md)

Sau module, bạn có thể lần theo dữ liệu ở từng node và giải thích cách workflow phản hồi với lần chạy thành công, build lỗi, đầu vào sai và sự kiện trùng. Bài này dùng Manual Trigger và chạy được với dữ liệu mẫu trong editor.

Tài liệu sản phẩm đối chiếu ngày **2026-11-23**. [Manual Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.manualworkflowtrigger/) · [Cấu trúc dữ liệu](https://docs.n8n.io/data/data-structure/) · [Xử lý lỗi](https://docs.n8n.io/flow-logic/error-handling/)
