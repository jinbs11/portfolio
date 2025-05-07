/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          background: '#151515',
          surface: '#1a1a2e',
          accent: '#7c3aed',
          highlight: '#e879f9',      // fuchsia-300
          text: '#fdf4ff',
          selected_text: '#bae6fd',
        }
      },
    },
    plugins: [],
  }
  