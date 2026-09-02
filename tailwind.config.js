/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F7F1E3",
          50: "#FDFBF7",
          100: "#F7F1E3",
          200: "#EFE5CC",
        },
        forest: {
          DEFAULT: "#24452A",
          50: "#2C5433",
          100: "#24452A",
          200: "#1A3320",
        },
        amla: {
          DEFAULT: "#718B3A",
          50: "#8AA657",
          100: "#718B3A",
          200: "#5A6F2D",
        },
        gold: {
          DEFAULT: "#B99A5B",
          50: "#CBB27C",
          100: "#B99A5B",
          200: "#9C7F44",
        },
        brown: {
          DEFAULT: "#332C24",
          50: "#4A4033",
          100: "#332C24",
          200: "#221D17",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
      },
      boxShadow: {
        soft: "0 2px 12px rgba(51, 44, 36, 0.08)",
        card: "0 1px 3px rgba(51, 44, 36, 0.1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
}
