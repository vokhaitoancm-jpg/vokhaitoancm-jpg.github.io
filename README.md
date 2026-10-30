# COSMIC SIGNAL // Personal Portfolio

> **Transmitting ideas across the digital universe**  
> Portfolio cá nhân phong cách nghệ thuật không gian kết hợp IT, Viễn thông và Trí tuệ Nhân tạo.

---

## 🛰️ 1. Cấu trúc Dự Án

- **Framework:** [Astro](https://astro.build/) (Static Site Generation, zero-JS by default)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Visuals:** [Three.js](https://threejs.org/) (Interactive 3D Orbital Hero) + Canvas 2D
- **Content:** Astro Content Collections (Posts & Projects qua Markdown thuần)
- **Code Highlighting:** Shiki (`dracula` theme)
- **Deployment:** GitHub Pages thông qua GitHub Actions

---

## 🚀 2. Hướng dẫn Chạy Cục Bộ (Local Development)

### Yêu cầu
- Node.js >= 18.14.1 (Khuyến nghị Node 20 hoặc 22)
- npm

### Các bước khởi động
```bash
# 1. Cài đặt các gói phụ thuộc
npm install

# 2. Chạy môi trường phát triển (Dev server)
npm run dev

# 3. Mở trình duyệt tại địa chỉ
# http://localhost:4321
```

---

## 📝 3. Hướng dẫn Thêm Bài Viết Mới (Markdown)

Tạo một file `.md` mới trong thư mục `src/content/posts/ten-bai-viet.md`:

```markdown
---
title: "Tiêu đề bài viết mới"
description: "Mô tả ngắn gọn về nội dung bài viết."
pubDate: 2026-11-01
tags: ["Networking", "AI", "Web"]
category: "Technology"
featured: false
draft: false
---

# Nội dung bài viết bằng Markdown

Viết nội dung bài viết ở đây...
```

> **Lưu ý:** Nếu đặt `draft: true`, bài viết sẽ tự động được ẩn khỏi danh sách trang chủ, kho lưu trữ, sitemap và RSS feed.

---

## 🛠️ 4. Hướng dẫn Thêm Dự Án Mới (Projects)

Tạo một file `.md` mới trong thư mục `src/content/projects/ten-du-an.md`:

```markdown
---
title: "Tên dự án mới"
description: "Mô tả ngắn gọn về giải pháp kỹ thuật."
pubDate: 2026-11-01
tags: ["Astro", "TypeScript", "AI"]
category: "Web"
status: "ONLINE" # ONLINE | IN ORBIT | PROTOTYPE | ARCHIVED
demoUrl: "https://demo.example.com"
githubUrl: "https://github.com/vokhaitoancm-jpg/ten-du-an"
featured: true
---

# Chi tiết Case Study của Dự án
```

---

## 📡 5. Triển khai lên GitHub Pages (Automated Deployment)

Repo đã được cấu hình sẵn GitHub Actions tại `.github/workflows/deploy.yml`.

1. Đẩy mã nguồn lên nhánh `main`:
   ```bash
   git add .
   git commit -m "feat: complete cosmic signal portfolio"
   git push origin main
   ```
2. Trên GitHub, vào mục **Settings > Pages > Build and deployment**, chọn **Source: GitHub Actions**.
3. Trang web sẽ tự động build và xuất bản tại: `https://vokhaitoancm-jpg.github.io`
