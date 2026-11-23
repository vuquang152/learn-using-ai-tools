# 01 — Mental model và mức độ tự chủ

## Coding agent không chỉ là autocomplete

Một coding agent thường vận hành theo vòng lặp:

```text
Nhận mục tiêu → quan sát repository → lập giả thuyết/kế hoạch
→ gọi tool → đọc kết quả → điều chỉnh → tạo thay đổi → kiểm chứng
```

Agent có thể đọc file, tìm kiếm, sửa code và chạy command. Khả năng hành động giúp nó giải quyết task dài hơn, đồng thời làm tăng hậu quả nếu mục tiêu, context hoặc quyền hạn sai.

## Bốn mức tự chủ

| Mức | Agent làm gì | Phù hợp khi |
|---|---|---|
| 0 — Explain | giải thích, không dùng tool | học khái niệm hoặc brainstorm |
| 1 — Inspect | đọc và phân tích, không sửa | codebase lạ, task chưa rõ |
| 2 — Propose | lập kế hoạch hoặc tạo patch để review | thay đổi có rủi ro vừa |
| 3 — Execute and verify | sửa, chạy test, lặp tới khi đạt tiêu chí | task rõ, repo tin cậy, kiểm tra tốt |

Không có mức tốt nhất cho mọi task. Mức tự chủ phải phụ thuộc blast radius, khả năng rollback, chất lượng test và độ rõ của requirement.

## Ma trận giao việc

### Phù hợp để agent thực thi

- Thay đổi cục bộ, expected behavior rõ.
- Có test hoặc cách kiểm chứng tự động.
- Có convention tương tự trong repository.
- Có thể rollback bằng Git.

### Nên để agent phân tích hoặc đề xuất

- Thiết kế kiến trúc ảnh hưởng nhiều service.
- Migration dữ liệu hoặc breaking API.
- Thay đổi auth, payment, permission hay production infrastructure.
- Task phụ thuộc quyết định sản phẩm chưa được đưa ra.

## Ba trách nhiệm không được giao mất

1. **Intent:** con người chịu trách nhiệm quyết định cần xây gì và vì sao.
2. **Trust:** con người quyết định dữ liệu, quyền và hệ thống agent được tiếp cận.
3. **Acceptance:** con người quyết định bằng chứng nào đủ để chấp nhận kết quả.

## Bài tập

Phân loại các task sau theo mức 0–3 và giải thích:

- Giải thích request flow của một endpoint.
- Thêm unit test cho mapper thuần túy.
- Nâng major version Spring Boot.
- Sửa policy IAM production.
- Đổi tên field trong public API.

Không có đáp án duy nhất; câu trả lời tốt phải nêu blast radius, rollback và verification.
