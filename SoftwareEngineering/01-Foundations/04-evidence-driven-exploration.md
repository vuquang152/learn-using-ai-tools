# 04 — Khám phá codebase dựa trên bằng chứng

Agent rất giỏi tìm kiếm nhanh nhưng vẫn có thể biến tên file, convention hoặc kiến trúc “thường gặp” thành mô tả sai về repository hiện tại. Vì vậy khám phá phải tạo ra evidence map.

## Trình tự khám phá

1. Xác định repository/module boundary.
2. Tìm entry point của behavior.
3. Theo data/control flow qua các layer.
4. Tìm test chứng minh behavior hiện tại.
5. Tìm pattern tương tự đã được team chấp nhận.
6. Xác định command kiểm chứng.
7. Liệt kê unknown và rủi ro.

## Yêu cầu đầu ra có dẫn chứng

```text
Chưa sửa code. Hãy tạo bảng:
- Claim
- File/symbol hoặc command output hỗ trợ claim
- Fact hay inference
- Unknown còn lại
```

Ví dụ:

| Claim | Evidence | Loại |
|---|---|---|
| Validation chạy trước service | annotation trên DTO và controller parameter | fact |
| Team muốn dùng Bean Validation cho rule mới | các DTO tương tự đều dùng annotation | inference mạnh |
| Error code cho field rỗng | chưa tìm thấy test/tài liệu | unknown |

## Fact, inference và proposal

- **Fact:** trực tiếp quan sát từ code, test, config hoặc runtime.
- **Inference:** kết luận từ pattern; cần ghi mức chắc chắn.
- **Proposal:** cách làm được đề xuất; chưa phải behavior hiện tại.

Yêu cầu agent gắn nhãn ba loại này giúp giảm câu trả lời nghe chắc chắn nhưng không có cơ sở.

## Với Java/Spring

Khi khám phá một endpoint, thường cần kiểm tra:

- Controller mapping và request/response DTO.
- Bean Validation và global exception handler.
- Service transaction boundary.
- Repository query và entity mapping.
- Security filter/method authorization.
- Unit, slice và integration test.
- Migration/config có ảnh hưởng.

Danh sách này là checklist tìm kiếm, không phải assumption rằng mọi dự án đều có kiến trúc giống nhau.
