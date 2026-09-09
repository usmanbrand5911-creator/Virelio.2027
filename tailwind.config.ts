import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#07080A',
          900: '#0B0C10',
          800: '#12141C',
          700: '#1C1F2C',
        },
        champagne: {
          300: '#E1C44C',
          400: '#D4AF37',
          500: '#B89325',
        },
        virelio: {
          blue: '#0F2B48',
          accent: '#1A4B7C',
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5ECBE 0%, #D4AF37 50%, #B89325 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
