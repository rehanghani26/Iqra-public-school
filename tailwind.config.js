/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
        heading: ['var(--font-outfit)', 'Outfit', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50: '#edf7f2',
          100: '#d8ede2',
          200: '#b5ddc9',
          300: '#87c4a8',
          400: '#59a584',
          500: '#398767',
          600: '#296c51',
          700: '#215541',
          800: '#1b4535',
          900: '#0b3d2e',
          950: '#072a1f',
        },
        forest: {
          50: '#f2f8f5',
          100: '#e1f0e8',
          200: '#c5e2d3',
          300: '#9bceb7',
          400: '#6bb394',
          500: '#469776',
          600: '#337a5e',
          700: '#29614c',
          800: '#234e3e',
          900: '#0b3d2e',
          950: '#06261c',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
};
