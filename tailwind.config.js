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
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.75" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-up": "fade-in-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-down": "fade-in-down 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-scale": "fade-in-scale 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in-right": "slide-in-right 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in-left": "slide-in-left 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float": "float 4s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 2.5s ease-in-out infinite",
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
}
