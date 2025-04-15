/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          to: {
            transform: 'translateX(calc(-50% - 0.5rem))',
          },
        },
      },
      animation: {
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
    },
  },
  plugins: [require('daisyui')],
};
