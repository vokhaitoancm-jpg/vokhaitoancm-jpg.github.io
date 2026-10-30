---
title: "Quantum Signal Simulator"
description: "Mô phỏng giao thức phân phối khóa lượng tử BB84 qua kênh truyền quang không gian tự do (Free-Space Optical QKD)."
pubDate: 2026-10-28
tags: ["Quantum", "Security", "Cryptography", "Python", "Simulation"]
category: "Security"
status: "PROTOTYPE"
demoUrl: "/lab/"
githubUrl: "https://github.com/vokhaitoancm-jpg/vokhaitoancm-jpg.github-io"
featured: false
icon: "key"
---

# Quantum Signal Simulator (Mô phỏng Giao thức BB84)

## 1. Nguyên lý cơ bản

Giao thức BB84 sử dụng trạng thái phân cực của các photon đơn lẻ để thiết lập một khóa bí mật dùng chung giữa hai bên (Alice và Bob). Dựa trên nguyên lý bất định Heisenberg, bất kỳ kẻ nghe lén nào (Eve) cố gắng đo đạc photon sẽ làm thay đổi trạng thái lượng tử và ngay lập tức bị phát hiện thông qua tỷ lệ lỗi bit lượng tử (QBER).

## 2. Các pha thực hiện

1. **Chuẩn bị trạng thái:** Alice chọn ngẫu nhiên bit (0/1) và hệ cơ sở phân cực (Thẳng đứng/Ngang hoặc Xiên chéo).
2. **Kênh truyền quang không gian:** Photon truyền qua tầng khí quyển có suy hao và nhiễu loạn môi trường.
3. **Đo đạc:** Bob chọn ngẫu nhiên hệ cơ sở và ghi nhận kết quả.
4. **Sàng lọc khóa & Sửa lỗi:** Công khai cơ sở và loại bỏ các bit bị sai lệch.
