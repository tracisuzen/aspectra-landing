const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#FFFFFF",
        "canvas-muted": "#F5F5F5",
        primary: {
          DEFAULT: "#E53935",
          light: "#EF5350",
          dark: "#C62828",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#FAFAFA",
          border: "#F0F0F0",
        },
        text: {
          DEFAULT: "#1A1A1A",
          secondary: "#666666",
          muted: "#999999",
        },
        accent: {
          gold: "#D4A574",
          purple: "#7C3AED",
          teal: "#0D9488",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};