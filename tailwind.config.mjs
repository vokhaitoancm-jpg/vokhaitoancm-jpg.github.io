/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#03050d',
          900: '#050816',
          800: '#0b1230',
          700: '#111b42',
          600: '#1b2961',
        },
        cosmic: {
          cyan: '#4debff',
          violet: '#9b6dff',
          amber: '#ffca80',
          text: '#eaf3ff',
          muted: '#8ba2c4',
          border: 'rgba(77, 235, 255, 0.15)',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'signal-glow': 'signalGlow 3s ease-in-out infinite alternate',
        'orbit-spin': 'spin 30s linear infinite',
      },
      keyframes: {
        signalGlow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 4px rgba(77, 235, 255, 0.4))' },
          '100%': { opacity: '1', filter: 'drop-shadow(0 0 16px rgba(77, 235, 255, 0.8))' },
        },
      },
    },
  },
  plugins: [],
};
