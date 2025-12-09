/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust to your project
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { 'background-position': '200% 0' },
          '100%': { 'background-position': '-200% 0' },
        },
        fadeInUp: {           // <-- add this
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
        'fade-in-up': 'fadeInUp 0.5s forwards', // <-- add this
      },
    },
  },
  plugins: [],
};
