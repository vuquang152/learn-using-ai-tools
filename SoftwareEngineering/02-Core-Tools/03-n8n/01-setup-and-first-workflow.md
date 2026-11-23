# 01 — Thiết lập và chạy workflow đầu tiên

## Chọn môi trường

Nếu đã có workspace n8n dành cho thử nghiệm, mở editor và tạo workflow mới. Nếu muốn chạy local để luyện DevOps, kiểm tra Docker và Compose bằng `docker version` và `docker compose version`, rồi làm theo hướng dẫn cài đặt. Dùng port chỉ truy cập được từ máy học và giữ volume dữ liệu để mở lại workflow sau khi khởi động lại. [Cài n8n bằng Docker Compose](https://docs.n8n.io/deploy/host-n8n/install-options/install-using-docker-compose.md)

## Chạy với dữ liệu mẫu

1. Tạo workflow **Build result lab** và thêm **Manual Trigger**.
2. Nối với **Edit Fields (Set)** ở chế độ JSON Output. Dán object bên dưới.
3. Nối với node **If**. Đặt vế trái là expression `{{ $json.status }}`, kiểu String, phép so sánh *is equal to* và vế phải là `failed`.
4. Nối mỗi nhánh tới một node **Edit Fields (Set)**. Giữ các field đầu vào và thêm `decision` bằng `needs_review` ở nhánh true hoặc `passed` ở nhánh false. Bước này dùng đầu vào mẫu có hai trạng thái. Bài thực hành sẽ bổ sung nhánh cho đầu vào sai.

```json
{
  "runId": "orders-42",
  "service": "orders-api",
  "status": "failed",
  "summary": "OrderServiceTest: số lượng mong đợi là 2, thực tế là 1"
}
```

Chạy workflow, mở từng node và xem Input/Output. Mỗi node nhận các *item*. Trong expression, `$json` là dữ liệu JSON của item đang xử lý. Đổi `status` sang `passed` và chạy lại để quan sát nhánh còn lại. [Manual Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.manualworkflowtrigger/) · [Cấu trúc dữ liệu](https://docs.n8n.io/data/data-structure/)

Hoàn thành khi cả hai lượt chạy cho ra `runId` ban đầu, đúng `decision` và đúng nhánh trong execution.
