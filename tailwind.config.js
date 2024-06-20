/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      translate: {
        'z-0': '0',
        'z-1': '0.25rem',
        'z-2': '0.5rem',
        'z-4': '1rem',
        'z-8': '2rem',
        'z-16': '4rem',
      },
    },
  },
  plugins: [],
};
