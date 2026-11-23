# 05 — Lập kế hoạch và checkpoint

Plan có giá trị khi nó giảm uncertainty và tạo các điểm có thể kiểm tra. Danh sách chung chung như “sửa code, thêm test, chạy test” không giúp phát hiện hướng sai sớm.

## Khi nào cần plan trước

- Task chạm nhiều module hoặc layer.
- Requirement còn ambiguity.
- Có migration, compatibility hoặc security risk.
- Chưa biết root cause.
- Chi phí rollback cao.

Task sửa typo hoặc thay đổi cục bộ đã rõ có thể không cần plan riêng.

## Một bước plan tốt gồm

```text
1. Outcome của bước.
2. File/symbol dự kiến liên quan.
3. Assumption cần kiểm tra.
4. Cách xác minh bước thành công.
5. Điều kiện dừng hoặc hỏi lại.
```

## Ví dụ checkpoint cho feature Spring

1. Xác nhận API contract và error convention — chưa sửa code.
2. Viết test cho behavior mới — test phải fail vì đúng lý do.
3. Implement thay đổi nhỏ nhất — test hẹp pass.
4. Kiểm tra compatibility và edge case — integration test pass.
5. Review final diff — không có refactor ngoài phạm vi.

Mỗi checkpoint nên để repository ở trạng thái hiểu được. Không để agent thay controller, database, security và CI trong một bước khổng lồ rồi mới chạy test.

## Re-plan khi evidence thay đổi

Plan không phải hợp đồng bất biến. Phải cập nhật khi:

- Codebase khác assumption ban đầu.
- Test lộ ra behavior chưa được mô tả.
- Cần thêm dependency hoặc migration.
- Phạm vi tăng đáng kể.
- Verification command không hoạt động.

Yêu cầu agent nêu lý do thay đổi plan thay vì âm thầm mở rộng scope.

## Checkpoint bằng Git

Git giúp quan sát và khôi phục, nhưng không tự động làm thay đổi an toàn. Trước task lớn:

- Biết rõ working tree đang có gì.
- Tách task bằng branch/worktree.
- Review diff theo checkpoint.
- Commit theo outcome có ý nghĩa nếu workflow cho phép.

Không dùng destructive Git command để “dọn sạch” khi chưa biết thay đổi thuộc về ai.
