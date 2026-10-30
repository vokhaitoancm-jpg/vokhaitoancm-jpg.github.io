export interface SiteConfig {
  title: string;
  author: string;
  callsign: string;
  description: string;
  siteUrl: string;
  frequency: string;
  station: string;
  socials: {
    github: string;
    email: string;
    linkedin: string;
  };
  navLinks: Array<{ label: string; href: string }>;
}

export const siteConfig: SiteConfig = {
  title: 'COSMIC SIGNAL // Võ Khải Toàn',
  author: 'Võ Khải Toàn',
  callsign: 'SIGNAL-VKTOAN',
  description: 'Trang thông tin & Portfolio cá nhân hướng tới không gian vũ trụ, viễn thông, mạng máy tính và trí tuệ nhân tạo.',
  siteUrl: 'https://vokhaitoancm-jpg.github.io',
  frequency: '1420.405 MHz (Hydrogen Line)',
  station: 'GROUND-STATION-HCM // EARTH SECTOR',
  socials: {
    github: 'https://github.com/vokhaitoancm-jpg',
    email: 'vokhaitoancm@gmail.com',
    linkedin: 'https://linkedin.com',
  },
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Posts', href: '/posts/' },
    { label: 'Lab', href: '/lab/' },
    { label: 'Contact', href: '/contact/' },
  ],
};

export const domains = [
  {
    title: 'Telecommunications & Systems',
    code: 'SAT-COM',
    icon: 'antenna',
    description: 'Nghiên cứu giao thức truyền gói tin không gian, mạng vệ tinh, xử lý tín hiệu và truyền thông phân tán.',
    skills: ['TCP/IP', 'Routing Protocols', 'Packet Analysis', 'Satellite Uplink', 'Network Architecture'],
  },
  {
    title: 'AI & Telemetry Processing',
    code: 'NEURAL-NET',
    icon: 'brain',
    description: 'Ứng dụng mô hình học máy và phân tích luồng dữ liệu viễn thám, dự báo tín hiệu và tự động hóa hệ thống.',
    skills: ['Machine Learning', 'Data Pipelines', 'Python', 'Signal Analysis', 'TensorFlow / PyTorch'],
  },
  {
    title: 'Full-Stack Web Engineering',
    code: 'CORE-SYS',
    icon: 'terminal',
    description: 'Xây dựng giao diện điều khiển (Mission Control HUD), ứng dụng web hiệu năng cao, tối ưu tĩnh và trải nghiệm người dùng hiện đại.',
    skills: ['TypeScript', 'Astro', 'React', 'Node.js', 'Tailwind CSS', 'High-speed APIs'],
  },
  {
    title: 'Cloud & Infrastructure',
    code: 'DEVOPS-NODE',
    icon: 'server',
    description: 'Triển khai hạ tầng phân tán, container hóa, CI/CD tự động và bảo mật đường truyền dữ liệu số.',
    skills: ['Docker', 'Linux/Unix', 'GitHub Actions', 'Cloud Architecture', 'Security Protocols'],
  },
];
