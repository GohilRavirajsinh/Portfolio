/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0F172A',
        'light-navy': '#1E293B',
        'accent-blue': '#3B82F6',
        'accent-purple': '#A855F7',
        'accent-pink': '#EC4899',
        'accent-cyan': '#06B6D4',
      },
      backgroundImage: {
        'grad-1': 'linear-gradient(to right, #3B82F6, #A855F7)',
        'grad-2': 'linear-gradient(to right, #A855F7, #EC4899)',
        'grad-3': 'linear-gradient(to right, #06B6D4, #3B82F6)',
        'grad-4': 'linear-gradient(to right, #EC4899, #A855F7)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
