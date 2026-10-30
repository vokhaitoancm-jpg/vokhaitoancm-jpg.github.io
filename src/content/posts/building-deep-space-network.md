---
title: "Mạng máy tính không gian: Từ TCP/IP đến Delay-Tolerant Networking (DTN)"
description: "Tại sao TCP thông thường không thể truyền tín hiệu giữa các hành tinh và cách Bundle Protocol giải quyết bài toán độ trễ hàng chục phút."
pubDate: 2026-10-31
tags: ["Networking", "DTN", "Protocols", "Space"]
category: "Telecommunications"
featured: true
draft: false
---

# Mạng máy tính không gian: Từ TCP/IP đến DTN

Khi chúng ta lướt web trên Trái Đất, một gói tin HTTP mất khoảng 10ms đến 100ms để khứ hồi (RTT). Nhưng khi gửi dữ liệu lên tàu thăm dò sao Hỏa, khoảng cách từ 55 triệu đến 400 triệu km khiến ánh sáng mất từ **3 đến 22 phút** chỉ cho một chiều truyền phát!

## 1. Giới hạn của bộ giao thức TCP kinh điển

Giao thức TCP dựa trên cơ chế bắt tay ba bước (Three-way handshake) và cửa sổ trượt (sliding window):

1. **Bắt tay 3 bước:** Mất ít nhất 1.5 lần RTT (khoảng 30-45 phút chỉ để thiết lập kết nối).
2. **Cơ chế Timeout:** TCP giả định nếu không nhận được ACK sau vài giây thì gói tin bị rơi rớt mạng và giảm tốc độ truyền (congestion window).
3. **Mất kết nối liên tục:** Vệ tinh quay quanh hành tinh bị che khuất đường truyền (line-of-sight interruption) hàng giờ mỗi ngày.

## 2. Giải pháp: Bundle Protocol (RFC 5050 / RFC 9171)

Kiến trúc **Delay-Tolerant Networking (DTN)** sử dụng phương thức *Store-and-Forward* (Lưu trữ và chuyển tiếp):

```text
[Trạm mặt đất] ---> (Vệ tinh LEO 1) ===[Chờ quỹ đạo]===>> (Vệ tinh Mars Orbiter) ---> [Rover bề mặt]
      |                      |                                     |                     |
  Tạo Bundle           Lưu vào bộ nhớ                         Chuyển tiếp           Giải mã dữ liệu
```

Thay vì giữ kết nối trực tiếp end-to-end liên tục, mỗi nút mạng lưu trữ Bundle dữ liệu an toàn trên bộ nhớ cục bộ cho đến khi vệ tinh tiếp theo tiến vào vùng nhìn thấy.

```bash
# Giả lập gửi một bundle packet qua giao thức DTN
dtn-send --source ipn:1.1 --destination ipn:2.1 --lifetime 86400 --payload telemetry_data.bin
[DTN-DAEMON] Bundle custody accepted by node 1.1. Stored to NVRAM.
[DTN-DAEMON] Next contact window with ipn:2.1 opens at UTC 15:42:00.
```

## 3. Tương lai của Internet liên hành tinh

Các cơ quan không gian và viện nghiên cứu viễn thông đang hoàn thiện hệ thống **Interplanetary Internet (IPN)**. Đây là một mảng nghiên cứu cực kỳ cuốn hút đối với các kỹ sư mạng và phần mềm tương lai!
