# 03 — Task contract và acceptance criteria

Một task contract tốt giúp agent tự kiểm tra tiến độ và giúp người review biết kết quả nào cần được chứng minh.

## Cấu trúc tối thiểu

```text
Goal:
Kết quả nghiệp vụ hoặc kỹ thuật cần đạt.

Context:
File, lỗi, issue, ví dụ hoặc behavior hiện tại liên quan.

Constraints:
Giới hạn kiến trúc, compatibility, dependency, security và phạm vi.

Non-goals:
Những việc dễ bị hiểu nhầm nhưng không nằm trong task.

Done when:
Các điều kiện quan sát hoặc kiểm tra được.

Verification:
Command, test, manual check hoặc evidence phải cung cấp.
```

## Goal: mô tả outcome, không ra lệnh sửa file

Yếu:

```text
Sửa UserController.java và thêm if kiểm tra email.
```

Tốt hơn:

```text
API tạo user phải từ chối email sai định dạng bằng HTTP 400 và error code INVALID_EMAIL, nhất quán với validation error hiện có.
```

Goal thứ hai cho agent không gian tìm implementation phù hợp, còn constraint và review kiểm soát giải pháp.

## Acceptance criteria phải kiểm tra được

Yếu: “xử lý lỗi tốt hơn”, “code sạch”, “test đầy đủ”.

Có thể kiểm tra:

- Với email `abc`, endpoint trả HTTP 400 và `code=INVALID_EMAIL`.
- Với email hợp lệ, behavior hiện tại không thay đổi.
- Không thêm runtime dependency.
- Unit và integration test liên quan pass.

## Nêu unknown thay vì để agent tự quyết

```text
Unknown:
- Chưa rõ email rỗng dùng REQUIRED hay INVALID_EMAIL.
- Nếu code hiện tại không cho thấy convention, hãy dừng và hỏi.
```

Đây không phải thiếu sót của prompt. Đó là cách ngăn agent biến quyết định sản phẩm thành assumption ngầm.

## Template cho bug

```text
Observed:
[Điều đang xảy ra + evidence]

Expected:
[Điều phải xảy ra]

Reproduction:
[Các bước hoặc failing test]

Scope:
[Vùng được phép thay đổi]

Done when:
- Root cause được giải thích bằng code/runtime evidence.
- Có regression test fail trước và pass sau sửa.
- Không phá behavior liên quan.
```
