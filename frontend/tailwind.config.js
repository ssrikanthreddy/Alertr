/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f8f8eb',
        secondary: '#92a560',
        tertiary: '#87a36e',
        dark: '#3c453c',
      },
      fontFamily: {
        custom: 'Poppins, sans-serif',
      },
    },
  },
  plugins: [],
};
