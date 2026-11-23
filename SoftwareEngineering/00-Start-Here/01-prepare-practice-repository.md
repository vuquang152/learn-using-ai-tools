# 01 — Chuẩn bị repository thực hành

## Mục tiêu

Chọn một codebase đủ thật để việc học có giá trị nhưng đủ an toàn để sai sót không gây hậu quả nghiêm trọng.

## Tiêu chí chọn repository

Repository phù hợp nên:

- Có Git và lịch sử commit rõ ràng.
- Build và test được trên máy hiện tại.
- Có ít nhất một luồng nghiệp vụ có thể giải thích.
- Không chứa secret, dữ liệu khách hàng hoặc thông tin nội bộ không được phép chia sẻ.
- Có một bug nhỏ hoặc feature nhỏ có thể hoàn thành trong 30–90 phút.
- Không phải production checkout đang phục vụ người dùng thật.

Với stack ưu tiên của lộ trình này, lựa chọn tốt là một Spring Boot service nhỏ có controller, service, repository và database test. Nếu chưa có, dùng một project cá nhân hoặc tạo một service tối giản; không nên bắt đầu bằng monorepo lớn.

## Ghi lại bản đồ vận hành tối thiểu

Tạo ghi chú cá nhân với bảng sau:

| Mục | Ví dụ Java/Spring | Giá trị của dự án |
|---|---|---|
| Cài dependency | `./mvnw dependency:resolve` | ... |
| Build | `./mvnw verify` | ... |
| Unit test | `./mvnw test` | ... |
| Một test cụ thể | `./mvnw -Dtest=UserServiceTest test` | ... |
| Chạy ứng dụng | `./mvnw spring-boot:run` | ... |
| Format/lint | tùy plugin của dự án | ... |
| Database | Docker Compose/Testcontainers/... | ... |
| Entry point | class có `@SpringBootApplication` | ... |

Không chép lệnh từ README mà chưa chạy. Mỗi lệnh phải được thực thi ít nhất một lần và ghi lại kết quả.

## Chuẩn bị hai task chuẩn

### Task A — thay đổi nhỏ

Ví dụ: thêm validation cho một request field và trả về đúng error response. Task này dùng cho phiên đầu tiên.

### Task B — bug có thể tái hiện

Ví dụ: query trả sai kết quả khi filter rỗng. Hãy có input tái hiện và expected behavior trước khi nhờ agent.

## Checklist

- [ ] Working tree sạch hoặc đã biết rõ các thay đổi chưa commit.
- [ ] Có checkpoint bằng commit hoặc branch riêng.
- [ ] Build hiện tại thành công.
- [ ] Test hiện tại thành công, hoặc đã ghi lại test đang fail từ trước.
- [ ] Không có secret trong file sẽ đưa vào context.
- [ ] Có Task A và Task B với phạm vi nhỏ.
