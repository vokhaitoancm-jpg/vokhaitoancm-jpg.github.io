---
title: "Orbital Satellite Telemetry Tracker"
description: "Hệ thống dự báo lịch bay và góc đón búp sóng vệ tinh thời gian thực sử dụng các tập dữ liệu TLE (Two-Line Element Set)."
pubDate: 2026-10-25
tags: ["Astro", "TypeScript", "TLE", "Canvas API", "Physics"]
category: "Telecommunications"
status: "IN ORBIT"
demoUrl: "/lab/"
githubUrl: "https://github.com/vokhaitoancm-jpg/vokhaitoancm-jpg.github-io"
featured: true
icon: "satellite"
---

# Orbital Satellite Telemetry Tracker

## 1. Mục tiêu dự án

Hỗ trợ các trạm mặt đất nghiệp dư (Amateur Ground Stations) tính toán chính xác thời điểm vệ tinh bay ngang qua bầu trời (AOS - Acquisition of Signal và LOS - Loss of Signal), điều khiển anten bám theo búp sóng vệ tinh với độ chính xác cao.

## 2. Công nghệ áp dụng

- **Mô hình SGP4 (Simplified General Perturbations-4):** Tự động phân tích các tập dữ liệu quỹ đạo TLE được cập nhật hàng ngày từ NORAD/Celestrak.
- **Tính toán hiệu ứng Doppler:** Tự động điều chỉnh tần số thu phát (Frequency Offset) của máy thu vô tuyến theo tốc độ xuyên tâm của vệ tinh.
- **Giao diện Canvas tốc độ cao:** Vẽ quỹ đạo mặt đất (Ground track) trực tiếp trên trình duyệt mà không phụ thuộc thư viện nặng.
