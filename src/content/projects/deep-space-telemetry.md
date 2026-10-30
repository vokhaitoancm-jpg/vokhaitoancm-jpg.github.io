---
title: "Deep Space Telemetry Dashboard"
description: "Bảng điều khiển Mission Control thời gian thực giám sát các luồng dữ liệu viễn trắc vệ tinh, độ trễ quỹ đạo và tình trạng trạm mặt đất."
pubDate: 2026-10-15
tags: ["Astro", "TypeScript", "Three.js", "Telemetry", "WebSockets"]
category: "Web"
status: "ONLINE"
demoUrl: "/lab/"
githubUrl: "https://github.com/vokhaitoancm-jpg/vokhaitoancm-jpg.github-io"
featured: true
icon: "radar"
---

# Deep Space Telemetry Dashboard (Trạm Điều Khiển Viễn Trắc)

## 1. Bối cảnh & Vấn đề

Khi điều hành nhiều trạm vệ tinh viễn thám hoặc thiết bị cảm biến từ xa, các kỹ sư cần một giao diện trực quan hiển thị tọa độ góc ngẩng (Elevation), góc phương vị (Azimuth), độ mạnh tín hiệu (RSSI) và tình trạng gói tin trong thời gian thực mà không làm tràn bộ nhớ trình duyệt.

## 2. Kiến trúc giải pháp

- **Giao diện người dùng:** Xây dựng với Astro và Tailwind CSS, áp dụng phong cách thiết kế HUD vi lai (Cosmic HUD) với độ tương phản cao trong điều kiện ánh sáng phòng vận hành tối.
- **Trực quan hóa không gian 3D:** Three.js hiển thị vị trí quỹ đạo của các nút mạng trong hệ tọa độ cầu ECI (Earth-Centered Inertial).
- **Luồng dữ liệu:** Mô phỏng WebSocket stream xử lý 60 bản tin viễn trắc/giây mà vẫn giữ tỷ lệ khung hình ổn định ở 60 FPS.

```text
[Telemetry Sensors] 
       │ (VHF / S-Band)
       ▼
[Ground Receiver Node] 
       │ (JSON Stream over WSS)
       ▼
[Browser HUD Dashboard] ── (Three.js WebGL Engine)
```

## 3. Tính năng cốt lõi

1. **Hiển thị tọa độ trực quan:** Bản đồ chòm sao và vị trí vệ tinh cập nhật theo thời gian thực.
2. **Biểu đồ sóng phổ tần:** Phân tích quang phổ vô tuyến tức thời bằng Canvas API.
3. **Chế độ tiết kiệm năng lượng:** Tự động hạ xung nhịp khung hình khi tab bị ẩn hoặc bật chế độ `prefers-reduced-motion`.

## 4. Kết quả đạt được

- Kích thước tải ban đầu dưới 120KB gzipped.
- Điểm kiểm định Google Lighthouse đạt mức tối ưu.
- Hoạt động trơn tru trên cả thiết bị di động màn hình cảm ứng và màn hình giám sát ultrawide.
