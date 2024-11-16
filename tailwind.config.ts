import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#fef3c7", // Amber-100
          DEFAULT: "#f59e0b", // Amber-500
          dark: "#78350f", // Amber-800
        },
        neutral: {
          light: "#f5f5f4", // Stone-100
          DEFAULT: "#78716c", // Stone-500
          dark: "#292524", // Stone-900
        },
      },
    },
  },
  darkMode: "class",
  plugins: [typography],
} satisfies Config;
