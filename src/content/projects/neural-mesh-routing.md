---
title: "Neural Mesh Routing Protocol"
description: "Mô phỏng thuật toán định tuyến gói tin thông minh dựa trên Reinforcement Learning cho mạng vệ tinh quỹ đạo thấp (LEO Constellation)."
pubDate: 2026-10-20
tags: ["AI", "Python", "Simulation", "Networking", "Reinforcement Learning"]
category: "AI"
status: "ONLINE"
demoUrl: "/lab/"
githubUrl: "https://github.com/vokhaitoancm-jpg/vokhaitoancm-jpg.github-io"
featured: true
icon: "network"
---

# Neural Mesh Routing Protocol

## 1. Thách thức định tuyến không gian

Trong các chùm vệ tinh hàng nghìn nút (như Starlink hay OneWeb), vị trí tương đối giữa các vệ tinh thay đổi liên tục theo từng phút. Thuật toán OSPF hoặc BGP truyền thống quá chậm và sinh ra quá nhiều gói tin thông báo trạng thái (routing flood), làm tắc nghẽn liên kết laser liên vệ tinh (ISL).

## 2. Giải pháp thuật toán AI

Dự án áp dụng mô hình **Multi-Agent Q-Learning** phân tán:

- Mỗi vệ tinh là một tác tử (Agent) độc lập đưa ra quyết định chuyển tiếp gói tin dựa trên tải bộ đệm cục bộ và vị trí tương đối của nút lân cận.
- Tránh được điểm nghẽn toàn cục (traffic hot spots) ngay cả khi một số vệ tinh bị mất kết nối do bão mặt trời.

```python
class OrbitalNodeAgent:
    def __init__(self, node_id, orbit_plane):
        self.node_id = node_id
        self.orbit_plane = orbit_plane
        self.q_table = {}

    def select_next_hop(self, packet_destination, neighbors):
        """Lựa chọn nút kế tiếp tối ưu giữa trễ truyền và tải hàng đợi"""
        scores = [self.evaluate_link(n, packet_destination) for n in neighbors]
        best_idx = int(np.argmax(scores))
        return neighbors[best_idx]
```

## 3. Đánh giá thực nghiệm

- Giảm 28% độ trễ truyền gói tin trung bình so với định tuyến Dijkstra tĩnh.
- Tỷ lệ mất gói tin (Packet Drop Rate) giảm từ 4.2% xuống 0.8% trong kịch bản bùng nổ lưu lượng đột biến.
