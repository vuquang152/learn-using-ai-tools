# 05 — Testing

## Chọn tầng kiểm tra

Dùng test hàm cho quy tắc thuần, test tích hợp khi nhiều bước phối hợp và test qua điểm vào thật khi kết quả phụ thuộc runtime. Với một API, unit test có thể kiểm tra chuyển đổi limit, integration test kiểm tra thứ tự lọc và contract test kiểm tra HTTP status cùng response body.

## Ví dụ với CLI

| Hành vi | Đầu vào | Bằng chứng |
|---|---|---|
| Lọc trước khi cắt | `--status open --limit 2` | ID đúng là T-101 và T-103, theo thứ tự |
| 0 là giá trị hợp lệ | `--limit 0` | Exit 0, stdout parse thành mảng rỗng |
| CLI từ chối cờ thiếu giá trị | `--limit` | Exit khác 0, stderr có nội dung, stdout rỗng |
| Chuẩn hóa trạng thái | `--status " closed "` | Cùng hai ID và thứ tự như đầu vào `closed` |

Nếu chỉ assert có hai phần tử, test có thể bỏ lọt chuyện trả sai ticket. Nếu chỉ gọi selector, test có thể bỏ lọt lỗi parse hoặc exit code.

## Bài thực hành

Từ [CLI mẫu](../practice/ticket-cli/README.md), mở rộng bộ test của bản sao sau bài implement và debug. Thêm test chạy CLI dưới dạng tiến trình con với `spawnSync(process.execPath, [đường_dẫn_cli, ...args], { encoding: 'utf8' })` và kiểm tra cả `status`, `stdout`, `stderr`. Resolve đường dẫn từ file test bằng `fileURLToPath(new URL('../bin/tickets.mjs', import.meta.url))` để test chạy được từ thư mục khác.

Đạt khi `node --test` pass, mỗi dòng trên có ít nhất một assertion hữu ích và bạn chỉ ra test nào sẽ fail nếu chuyển thao tác cắt lên trước thao tác lọc.
