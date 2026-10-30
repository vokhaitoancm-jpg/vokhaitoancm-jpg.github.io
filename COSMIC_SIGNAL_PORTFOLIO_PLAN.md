# MASTER PLAN — COSMIC SIGNAL PORTFOLIO

> Tài liệu yêu cầu triển khai cho AI Coding Agent. Xây dựng portfolio cá nhân trên GitHub Pages, phong cách nghệ thuật tương lai kết hợp **vũ trụ, viễn thông, IT và AI**, có hiệu ứng tinh tế, tương tác mượt và hệ thống bài viết Markdown.

## 1. Mục tiêu

- Tạo portfolio cá nhân ấn tượng, độc đáo, chuyên nghiệp, phù hợp sinh viên/người làm IT.
- Có **6 trang chính**: Home, About, Posts, Projects, Lab, Contact.
- Viết bài bằng Markdown/MDX (ưu tiên Markdown thuần), quản lý bài qua Git, không cần database.
- Triển khai tĩnh trên GitHub Pages; responsive, SEO, accessibility và hiệu năng tốt.
- Thiết kế không giống template portfolio đại trà: ngôn ngữ thị giác **Cosmic Signal / Deep Space Network**.

## 2. Stack đề xuất

- **Astro + TypeScript**: static site generation, tối ưu nội dung Markdown và SEO.
- **Tailwind CSS**: hệ thống giao diện, token và responsive.
- **Astro Content Collections**: quản lý posts và projects bằng Markdown, schema kiểm tra frontmatter.
- **Three.js** (chỉ tải động khi cần): không gian 3D ở hero, ưu tiên canvas nhẹ; có chế độ fallback CSS.
- **GSAP + ScrollTrigger** (tùy chọn): hoạt ảnh theo cuộn; dùng CSS và IntersectionObserver cho hiệu ứng đơn giản.
- **Pagefind**: tìm kiếm tĩnh bài viết sau build.
- **Shiki**: tô sáng code, copy code, hỗ trợ theme tối.
- **GitHub Actions**: build và deploy GitHub Pages tự động.
- Không sử dụng backend bắt buộc, API key bí mật ở frontend hay tính năng cần server runtime.

## 3. Định hướng nghệ thuật

**Tên concept:** COSMIC SIGNAL — *Transmitting ideas across the digital universe*.

- Nền đen xanh `#050816`, bề mặt `#0B1230`, cyan `#4DEBFF`, violet `#9B6DFF`, điểm nhấn amber `#FFCA80`, chữ `#EAF3FF`.
- Typography: heading phong cách sci-fi dễ đọc (ví dụ Space Grotesk), body Inter, code JetBrains Mono; dùng font có giấy phép phù hợp.
- Visual: thiên hà nhiều lớp, sao chuyển động chậm, quỹ đạo vệ tinh, tín hiệu radio, bản đồ chòm sao, lưới dữ liệu, HUD holographic, đường truyền packet, terminal AI.
- Phong cách nghệ thuật có tiết chế: ưu tiên phân cấp nội dung và khoảng trắng, không để hiệu ứng che chữ.
- Chuyển động: glow, parallax, constellation hover, orbit, scanline rất nhẹ, text reveal, magnetic button, cursor spotlight trên desktop.
- Hỗ trợ `prefers-reduced-motion`: tắt chuyển động mạnh và autoplay; không phụ thuộc animation để xem nội dung.

## 4. Sitemap & chức năng

### 4.1 Home `/`

- Hero toàn màn hình: không gian vũ trụ 3D, tên/chức danh, câu giới thiệu ngắn, CTA **Explore Projects** và **Read Posts**.
- Khối **Mission Control**: chuyên môn IT / AI / Telecommunications / Space-inspired technology.
- Featured Projects (3 dự án nổi bật).
- Latest Transmissions (3 bài viết mới).
- Tech stack dưới dạng các vệ tinh / nút mạng tương tác.
- Timeline hoặc metrics thực tế (không tự bịa số liệu).
- CTA cuối trang dẫn tới Contact.

### 4.2 About `/about/`

- Giới thiệu bản thân, định hướng học tập và nghề nghiệp.
- Timeline học tập, kinh nghiệm, thành tựu (dữ liệu có thể sửa).
- Skills: frontend, backend, AI, networking, tools; mức độ thành thạo chỉ khi có dữ liệu thật.
- Ảnh đại diện tùy chọn, CV PDF tùy chọn.
- Hiệu ứng đường truyền tín hiệu chạy qua các mốc timeline.

### 4.3 Posts `/posts/` và `/posts/[slug]/`

- Danh sách bài viết dạng **Signal Archive**: card, cover, tiêu đề, mô tả, ngày đăng, tags, reading time.
- Tìm kiếm bằng Pagefind; lọc tag và sắp xếp mới nhất/cũ nhất.
- Bài chi tiết render từ Markdown: heading anchors, table of contents, code highlighting, ảnh, blockquote, bảng, liên kết.
- Bài liên quan, trước/sau, nút copy link và chia sẻ.
- Hỗ trợ `draft: true` để không xuất bản; `featured: true` để ghim bài nổi bật.
- Không cần giao diện admin: thêm/sửa `.md` trong repo và push là bài tự xuất bản sau khi GitHub Actions chạy.
- Nếu cần đăng bài bằng form trong trình duyệt về sau, coi là giai đoạn 2: cần CMS dựa trên Git hoặc dịch vụ xác thực riêng; không giả vờ có backend trên GitHub Pages.

### 4.4 Projects `/projects/` và `/projects/[slug]/`

- Portfolio dự án: lọc theo công nghệ/chủ đề; ảnh preview, stack, trạng thái, link demo và GitHub.
- Trang chi tiết dạng case study: vấn đề, giải pháp, kiến trúc, hình ảnh, vai trò, kết quả và bài học.
- Có thể quản lý dự án qua Markdown Content Collection.

### 4.5 Lab `/lab/`

- Khu **Experimental Lab** cho mini demos: visualizer mạng, mô phỏng packet flow, AI playground giả lập (ghi rõ demo), star map tương tác.
- Mỗi thí nghiệm phải có giải thích ngắn, hướng dẫn thao tác, fallback và giới hạn hiệu năng.
- Không gửi dữ liệu riêng tư đến dịch vụ AI bên ngoài nếu chưa có sự đồng ý.

### 4.6 Contact `/contact/`

- Email, GitHub, LinkedIn, mạng xã hội tùy chọn.
- Nút sao chép email, liên kết `mailto:`; không làm form gửi mail giả.
- Nếu muốn form thật, tích hợp dịch vụ form bên thứ ba ở giai đoạn sau và có thông báo quyền riêng tư.
- Visual: tín hiệu phát từ trạm không gian đến người truy cập.

## 5. Cấu trúc thư mục dự kiến

```text
portfolio/
├── public/
│   ├── images/
│   ├── favicon.svg
│   └── og-default.png
├── src/
│   ├── components/
│   │   ├── layout/ (Header, Footer, Navigation)
│   │   ├── ui/ (Button, Card, Badge, SectionTitle)
│   │   ├── effects/ (Starfield, SignalLines, CursorGlow)
│   │   ├── posts/ (PostCard, TOC, Search)
│   │   └── projects/ (ProjectCard)
│   ├── content/
│   │   ├── posts/
│   │   │   └── hello-cosmic-world.md
│   │   └── projects/
│   │       └── sample-project.md
│   ├── content.config.ts
│   ├── layouts/ (BaseLayout, PostLayout, ProjectLayout)
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── posts/ (index.astro, [slug].astro)
│   │   ├── projects/ (index.astro, [slug].astro)
│   │   ├── lab.astro
│   │   └── contact.astro
│   ├── styles/global.css
│   ├── data/site.ts
│   └── utils/
├── .github/workflows/deploy.yml
├── astro.config.mjs
├── package.json
└── README.md
```

## 6. Frontmatter Markdown

Ví dụ `src/content/posts/hello-cosmic-world.md`:

```md
---
title: "Hello, Cosmic World!"
description: "Bài viết đầu tiên về hành trình IT và AI."
pubDate: 2026-10-30
updatedDate: 2026-10-30
cover: "/images/posts/hello-cosmic-world.webp"
tags: ["IT", "AI", "Journey"]
category: "Technology"
featured: true
draft: false
---

# Hello, Cosmic World!

Đây là bài viết đầu tiên trên portfolio của mình.

## Điều mình đang học

- Web Development
- Artificial Intelligence
- Networking

```ts
console.log("Hello from the digital universe!");
```
```

**Lưu ý:** Đoạn code Markdown bên trên minh họa frontmatter và nội dung; khi tạo file thực tế, dùng fenced code block đúng chuẩn Markdown.

Schema cần validate: `title`, `description`, `pubDate`, `tags`, `draft`; các trường còn lại tùy chọn. Dùng slug theo đường dẫn file hoặc trường slug có quy tắc nhất quán; xử lý ảnh cover không tồn tại bằng fallback.

## 7. Quy tắc UI/UX & hiệu ứng

- Header cố định dạng glassmorphism, active navigation rõ, mobile menu hỗ trợ bàn phím.
- Hero 3D chỉ khởi tạo khi phần tử xuất hiện; giảm pixel ratio và số sao trên mobile; dọn tài nguyên khi unmount.
- Không tải GSAP/Three.js cho trang blog thuần nội dung nếu không cần.
- Loading animation tối đa ngắn và không chặn nội dung; không dùng preloader dài.
- Hover có phản hồi, focus visible, độ tương phản chữ tốt.
- Tối ưu hình WebP/AVIF, lazy load ảnh dưới fold, hạn chế layout shift.
- Mục tiêu Lighthouse: Performance ≥ 90 trên cấu hình thử nghiệm hợp lý, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95; đây là mục tiêu, không phải kết quả cam kết.

## 8. SEO & nội dung

- Metadata riêng cho từng trang, canonical URL, Open Graph, Twitter cards.
- `sitemap.xml`, `robots.txt`, RSS feed cho Posts.
- Structured data phù hợp: Person, BlogPosting, CreativeWork/SoftwareSourceCode khi có dữ liệu chính xác.
- Trang 404 tùy biến theo concept "Lost in Space".
- Ngày đăng, tác giả, tiêu đề và slug rõ ràng; alt text cho hình ảnh.
- Ngôn ngữ mặc định tiếng Việt, thiết kế sẵn cấu trúc để bổ sung tiếng Anh sau.

## 9. GitHub Pages deployment

- Hỗ trợ cả `username.github.io` (root) và repo dạng `username.github.io/repository/` (subpath).
- Cấu hình `site` và `base` của Astro theo URL thực tế; không hardcode đường dẫn asset bắt đầu bằng `/` nếu chạy dưới subpath.
- GitHub Actions: checkout → setup Node → npm ci → astro build → upload artifact → deploy pages.
- Bật Settings → Pages → Build and deployment → GitHub Actions.
- Thiết lập quyền workflow tối thiểu cần thiết; không commit secrets.
- Đảm bảo deep links bài viết, CSS/JS và ảnh hoạt động đúng dưới base path.
- Mỗi commit lên nhánh chính có thể trigger deploy; draft không được đưa vào build public.

## 10. Lộ trình triển khai cho Coding Agent

### Phase 1 — Foundation
1. Khởi tạo Astro + TypeScript + Tailwind.
2. Thiết lập tokens màu, typography, layout, responsive, navigation, footer.
3. Cấu hình `site`/`base` qua biến môi trường hoặc file config có chú thích.
4. Tạo data mẫu có thể thay thế, không bịa thông tin cá nhân.

### Phase 2 — Content system
1. Tạo Content Collections cho posts và projects với schema.
2. Tạo danh sách, trang chi tiết, tags, bài nổi bật, draft, 404.
3. Thêm TOC, Shiki, RSS, sitemap, Pagefind.
4. Viết ít nhất 2 bài Markdown mẫu và 2 dự án mẫu, đánh dấu là demo.

### Phase 3 — Design & motion
1. Xây dựng Home, About, Projects, Posts, Lab, Contact theo concept.
2. Tạo starfield / orbital system, signal lines, scroll reveal, hover micro-interactions.
3. Chỉ thêm Three.js sau khi nội dung và mobile layout hoàn thiện.
4. Thêm reduced motion và fallback cho WebGL không khả dụng.

### Phase 4 — QA & deploy
1. Chạy lint, typecheck, build và kiểm tra liên kết.
2. Kiểm tra trên mobile, tablet, desktop; Chrome, Firefox, Safari nếu có.
3. Kiểm tra keyboard navigation, screen reader basics, reduced motion.
4. Kiểm tra bài Markdown mới tự hiển thị và draft không xuất bản.
5. Triển khai GitHub Pages, kiểm tra link trực tiếp `/posts/slug/`.
6. Viết README: cài đặt, phát triển, cách đăng bài, deploy, tùy biến.

## 11. Acceptance criteria (bắt buộc)

- [ ] 6 trang chính có nội dung, điều hướng hoạt động.
- [ ] Post Markdown thêm mới → build → xuất hiện trên trang danh sách và URL riêng.
- [ ] `draft: true` không xuất hiện trong site, sitemap, RSS hay search index.
- [ ] Có ít nhất 3 kiểu hiệu ứng đặc trưng: starfield, signal/orbit, scroll reveal.
- [ ] Không có horizontal overflow trên mobile; nội dung đọc tốt khi tắt JavaScript (trừ demos).
- [ ] Tắt chuyển động khi bật reduced motion.
- [ ] Search, tag filters và links hoạt động.
- [ ] SEO, RSS, sitemap, OG metadata có cấu hình hợp lệ.
- [ ] Build thành công và deploy trên GitHub Pages với base path đúng.
- [ ] README hướng dẫn đăng bài bằng Markdown rõ ràng.

## 12. Prompt điều hành cho AI Coding Agent

Bạn là senior frontend engineer, creative developer và UI/UX designer. Hãy **triển khai website thật** theo tài liệu này, không chỉ tạo mockup. Ưu tiên trải nghiệm nghệ thuật cao cấp, mã dễ bảo trì, tối ưu tốc độ và khả năng truy cập. Triển khai theo từng phase; sau mỗi phase chạy kiểm tra và sửa lỗi trước khi tiếp tục. Nếu thiếu dữ liệu cá nhân, dùng placeholder được đánh dấu rõ, không tự bịa thành tích. Mọi tính năng phải hoạt động thực tế trên GitHub Pages tĩnh. Hãy chủ động chọn thư viện tương thích phiên bản hiện hành, kiểm tra API trước khi dùng, tránh phụ thuộc không cần thiết. Kết thúc bằng hướng dẫn chạy local, thêm bài Markdown, cấu hình GitHub Pages và deploy.
