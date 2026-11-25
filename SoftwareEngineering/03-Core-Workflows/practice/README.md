# Bài tổng hợp Core Workflows

Chuẩn bị [CLI mẫu](./ticket-cli/README.md) hoặc một repo mà bạn có quyền thực hành. Dùng cùng một branch hoặc ghi rõ base cho từng diff. Có thể tự làm hoặc giao từng bước cho coding agent.

## Bài nộp

1. Bản đồ điểm vào, đường đi của dữ liệu và hai nhận định đã xác minh.
2. Kế hoạch cho một feature với ví dụ đầu vào hợp lệ, đầu vào sai và một ca tương thích.
3. Diff feature, test và kết quả chạy từ điểm vào thực tế.
4. Một lỗi có expected/actual, nguyên nhân, regression test fail trước và pass sau.
5. Một refactor có bằng chứng bảo toàn hành vi và một nhận xét review đã xác minh.
6. Hướng dẫn chạy, thông tin branch hoặc worktree và một cổng kiểm tra CI mô phỏng hoặc thực thi.

## Áp dụng ở stack khác

| Bối cảnh | Feature gợi ý | Kiểm tra quan sát được |
|---|---|---|
| Frontend | Giới hạn kết quả hiển thị sau khi lọc | Kiểm tra ID hoặc nội dung trên UI và trạng thái rỗng |
| Backend | Thêm query parameter giới hạn kết quả | Kiểm tra response, thứ tự và mã lỗi với giá trị sai |
| DevOps | Lọc và giới hạn bản ghi báo cáo build | Chạy bằng fixture và đối chiếu stdout, stderr, exit code |
| Data | Lấy số dòng tối đa sau khi lọc theo trạng thái | Đối chiếu schema, ID, thứ tự và dữ liệu biên |

## Rubric

Chấm mỗi mục từ 0 đến 2. Điểm 0 là thiếu, 1 là có kết quả nhưng thiếu bằng chứng, 2 là đạt và có thể chạy lại hoặc đối chiếu.

- Bản đồ nêu đúng đường đi và điểm kiểm tra.
- Contract bao phủ ca đúng, ca sai và hành vi cũ.
- Feature có diff đúng phạm vi và kiểm tra đi qua điểm vào.
- Bug có bằng chứng trước/sau, review nêu được tác động thực tế.
- README chạy được, có base/diff rõ và giải thích được log fail/pass.

Mục tiêu là 8/10 trở lên, với test feature và regression pass. Sau bài, ghi một thay đổi bạn muốn làm trong cách giao task hoặc review lần sau. Có thể dùng [scorecard tối ưu công cụ](../../02-Core-Tools/05-Optimization/07-practice.md) để đo thay đổi đó.
