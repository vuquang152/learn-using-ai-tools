# 03 — Bài thực hành phân loại kết quả build

Dùng [workflow đầu tiên](./01-setup-and-first-workflow.md) làm điểm xuất phát. Chèn một node **If** sau dữ liệu mẫu và đặt điều kiện Boolean *is true* với expression sau. Nhánh sai kết thúc với `decision=rejected` và lý do. Nhánh đúng tiếp tục qua bước phân loại build.

```javascript
{{ typeof $json.runId === 'string' && $json.runId.trim() !== '' &&
   typeof $json.service === 'string' && $json.service.trim() !== '' &&
   ['passed', 'failed'].includes($json.status) }}
```

Ở nhánh `needs_review`, thêm `draft` bằng biểu thức `{{ $json.service + ' / ' + $json.runId + ': ' + $json.summary }}`. Xem bản nháp trong editor. Dùng `service:runId` làm khóa khi mô phỏng gửi trùng.

| Lượt chạy | Đầu vào | Đầu ra cần thấy |
|---|---|---|
| 1 | `orders-42`, `failed` | `needs_review` và bản nháp |
| 2 | `orders-43`, `passed` | `passed` |
| 3 | Bỏ `runId` | `rejected` trước bước phân loại |
| 4 | `orders-44`, `unknown` | `rejected` trước bước phân loại |
| 5 | Lặp lại lượt 1 | Cùng khóa `orders-api:orders-42` |

Lưu execution ID và kết quả thực tế cho từng lượt. Lượt 5 xác nhận cách sinh khóa. Muốn chứng minh chống trùng khi có bước ghi, cần thêm nơi lưu khóa hoặc idempotency ở đích rồi kiểm tra rằng số bản ghi chỉ tăng một lần.
