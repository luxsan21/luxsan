/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0d0d0d',
        fg: '#f5f5f5',
        blue: '#00e0ff',
        purple: '#9b5cff',
        subtle: '#7a7a7a',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        mono: ['var(--font-geist-mono)'],
      },
      backgroundImage: {
        'accent-grad': 'linear-gradient(135deg,#9B5CFF 0%,#00E0FF 100%)',
      },
    },
  },
  plugins: [],
};
