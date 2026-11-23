# 04 — Phiên agent đầu tiên

## Mục tiêu

Dùng Claude Code hoặc Codex để thực hiện Task A theo một vòng lặp nhỏ, có kế hoạch, có review và có kiểm chứng.

## Bước 1 — Kiểm tra trạng thái

- Xác nhận đúng working directory.
- Chạy `git status` và đọc thay đổi hiện có.
- Xác nhận branch/worktree dùng cho bài tập.
- Chạy test baseline liên quan.

## Bước 2 — Yêu cầu agent chỉ khám phá

```text
Hãy tìm các file và luồng xử lý liên quan đến [Task A].
Chưa sửa code. Báo cáo:
1. Entry point và data flow.
2. Convention hiện có cần tuân theo.
3. Test liên quan.
4. Những điểm chưa rõ hoặc rủi ro.
```

Đối chiếu câu trả lời với code. Nếu agent dẫn sai file hoặc suy đoán behavior, sửa context trước khi tiếp tục.

## Bước 3 — Cung cấp task contract

```text
Goal:
[Kết quả cần đạt]

Context:
[File, lỗi, ví dụ hoặc tài liệu liên quan]

Constraints:
- Giữ nguyên public API ngoài phần được mô tả.
- Không thêm dependency.
- Tuân theo convention hiện có.

Done when:
- [Behavior quan sát được]
- [Test cần pass]
- Diff không chứa thay đổi ngoài phạm vi.

Trước hết hãy lập kế hoạch ngắn và nêu assumption. Chỉ implement sau khi kế hoạch hợp lý.
```

## Bước 4 — Theo dõi bằng checkpoint

Sau mỗi bước lớn, kiểm tra:

- Agent có đang sửa đúng file không?
- Có mở rộng task hay thêm dependency không cần thiết không?
- Test đang chứng minh behavior hay chỉ làm coverage tăng?
- Có thay đổi formatting hàng loạt che khuất diff không?

## Bước 5 — Kiểm chứng độc lập

1. Đọc toàn bộ diff.
2. Chạy test hẹp nhất liên quan.
3. Chạy build/test suite phù hợp.
4. Thử ít nhất một edge case ngoài test agent đã viết.
5. Yêu cầu agent tự review diff, nhưng không dùng self-review thay cho review của bạn.

## Điều kiện hoàn thành

- [ ] Bạn giải thích được từng file thay đổi.
- [ ] Acceptance criteria có bằng chứng tương ứng.
- [ ] Không có secret hoặc thay đổi ngoài phạm vi.
- [ ] Test baseline và test mới đều pass.
- [ ] Nhật ký ghi ít nhất một điều cần cải thiện cho phiên sau.

Nếu agent thất bại, không cần “cứu” bằng một prompt rất dài. Hãy xác định lỗi thuộc context, requirement, permission, environment hay verification rồi sửa đúng lớp đó.
