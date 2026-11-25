# Phân tích dữ liệu

**Khi dùng.** Tính một chỉ số từ bảng có định nghĩa trường. Nếu chỉ có ảnh bảng hoặc phép tính yêu cầu số chính xác, đối chiếu dữ liệu đã trích và kiểm lại bằng bảng tính trước khi dùng kết quả.

**Điền.** `{{CÂU_HỎI}}` là chỉ số và nhóm cần so sánh. `{{ĐỊNH_NGHĨA}}` mô tả một dòng, khóa, đơn vị và dữ liệu thiếu. `{{QUY_TẮC}}` gồm mẫu số, quy tắc loại dòng và cách làm tròn đã thống nhất. `{{DỮ_LIỆU}}` là bảng, CSV hoặc tên tệp và trang tính.

```text
Dùng {{DỮ_LIỆU}} để trả lời {{CÂU_HỎI}}.
Áp dụng {{ĐỊNH_NGHĨA}} và {{QUY_TẮC}}.
Trước khi tính, báo số dòng gốc, dòng trùng, giá trị thiếu và bất thường.
Nếu một quy tắc chưa rõ có thể đổi kết quả, dừng và hỏi tôi.
Trả bảng gồm Nhóm | Số dòng dùng | Tử số | Mẫu số | Chỉ số.
Nêu công thức, đơn vị và số dòng bị loại theo lý do. Nếu cần biểu đồ,
đề xuất loại phù hợp, nhãn và phạm vi. Kết thúc với một quan sát
và một giới hạn của dữ liệu. Nêu rõ khi mẫu số bằng 0.
```

**Kiểm.** Tính lại một nhóm, xem số dòng còn lại và kiểm quy tắc xử lý ô rỗng. Với dữ liệu ở [workflow Phân tích dữ liệu](../03-Workflows/04-data-analysis/README.md), có 5 dòng gốc, 4 buổi sau khi bỏ bản sao và 3 buổi đủ dữ liệu. Tỷ lệ chung trên ba buổi là 42/60 = 70%. Buổi C2 thiếu số check-in, nên cả buổi nằm ngoài phép tính.

Cập nhật ngày 25/11/2026.
