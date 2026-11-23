# 04 — Workflow làm việc hằng ngày

## Vòng lặp chuẩn

### 1. Orient

```text
Kiểm tra working tree, instruction đang áp dụng và lệnh verification.
Không sửa code cho đến khi báo cáo trạng thái ban đầu.
```

### 2. Explore

Yêu cầu evidence map: entry point, data flow, test, pattern tương tự, unknown.

### 3. Contract

Cung cấp goal, context, constraints, non-goals, done when và verification. Nếu agent phát hiện ambiguity ảnh hưởng behavior, phải hỏi trước khi implement.

### 4. Plan

Với task nhiều bước, plan phải có checkpoint và test cho từng outcome. Với bug, không sửa trước khi có reproduction hoặc evidence root cause đủ mạnh.

### 5. Implement

- Thay đổi nhỏ theo plan.
- Không refactor ngoài phạm vi.
- Chạy focused test sớm.
- Dừng nếu cần dependency, migration hoặc quyền mới.

### 6. Verify

```text
Ánh xạ từng acceptance criterion tới test/command/manual evidence.
Nêu rõ điều gì chưa kiểm tra được.
```

### 7. Review

Đọc diff; yêu cầu Claude self-review về correctness, regression, security và scope. Sau đó tự review độc lập.

## Debug workflow

```text
1. Tái hiện lỗi; chưa sửa.
2. Thu thập stack trace/log/test failure.
3. Đề xuất tối đa ba giả thuyết và cách phân biệt.
4. Chạy kiểm tra nhỏ nhất cho giả thuyết ưu tiên.
5. Giải thích root cause bằng evidence.
6. Viết regression test fail vì đúng lý do.
7. Sửa tối thiểu, chạy test hẹp rồi suite liên quan.
```

## Quản lý context phiên dài

- Một session cho một outcome coherent.
- Sau milestone, tóm tắt decision, file đổi và evidence.
- Dùng `/compact` khi cần nhưng kiểm tra constraint quan trọng còn được giữ.
- Mở session mới khi chuyển sang task không liên quan.

## Anti-pattern

- “Fix everything” trên repo lớn.
- Cho phép mọi command rồi hy vọng instruction đủ an toàn.
- Chấp nhận patch vì test agent tự viết pass.
- Tiếp tục prompt chồng prompt khi requirement gốc sai.
- Dùng cùng session cho nhiều feature không liên quan.

## Nguồn

- [Common workflows](https://code.claude.com/docs/en/common-workflows)
- [Best practices](https://code.claude.com/docs/en/best-practices)
