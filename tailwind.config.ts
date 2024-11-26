import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import colors from "tailwindcss/colors";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: colors.stone[100], // Light theme background
          dark: colors.stone[900], // Dark theme background
        },
        text: {
          light: colors.stone[900], // Light theme text
          dark: colors.stone[100], // Dark theme text
        },
        primary: {
          light: colors.amber[500], // Light theme primary
          dark: colors.amber[800], // Dark theme primary
        },
        secondary: {
          light: colors.amber[800], // Light theme secondary
          dark: colors.amber[500], // Dark theme secondary
        },
      },
    },
  },
  darkMode: "class",
  plugins: [typography],
} satisfies Config;
