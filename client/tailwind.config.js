/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          lime: "#DCFE56",
          dark: "#0B0B0B",
          light: "#FFFFFF",
          gray: "#F6F6F6",
          text: "#131313",
          accent: "#353535",
        },
        neutral: {
          850: "#222222",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        neue: ['"Neue Machina"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
