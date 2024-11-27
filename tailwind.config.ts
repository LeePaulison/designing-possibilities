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
        light: {
          primary: "#F59E0B", // amber.500
          secondary: "#6366F1", // indigo.500
          background: "#FAFAF9", // stone.50
          text: "#1C1917", // stone.900
          accent: "#38B2AC", // teal.400
        },
        dark: {
          primary: "#D97706", // amber.600
          secondary: "#2563EB", // blue.600
          background: "#1C1917", // stone.900
          text: "#E7E5E4", // stone.200
          accent: "#319795", // teal.500
        },
      },
      typography: {
        DEFAULT: {
          css: {
            code: {
              color: "#F59E0B", // Light Amber
              backgroundColor: "#FAFAF9", // Stone-50
              borderRadius: "0.25rem", // Rounded code blocks
              padding: "0.2rem 0.4rem", // Highlight size
            },
          },
        },
        dark: {
          css: {
            code: {
              color: "#D97706", // Dark Amber
              backgroundColor: "#1C1917", // Stone-900
            },
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Primary font
        serif: ["Playfair Display", "serif"], // Secondary font
      },
    },
  },
  darkMode: "class",
  plugins: [typography],
} satisfies Config;
