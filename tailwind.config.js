/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cremeria: {
          blue: '#3A9EBA',
          navy: '#1B2B4A',
          cream: '#F2E8D5',
          red: '#A82C2D',
        },
        dj: {
          black: '#0D0D0D',
          silver: '#D1D1D1',
          gray: '#333333',
          red: '#E50000',
        }
      },
    },
  },
  plugins: [],
};
