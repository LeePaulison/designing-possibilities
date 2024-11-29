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
          primary: "#5D7371", // Muted Teal (mapped from palette)
          secondary: "#B4BEBF", // Soft Gray
          background: "#F0F2F2", // Lightest Gray
          text: "#011C26", // Deep Blue-Black
          accent: "#052326", // Slightly lighter Deep Blue-Black
        },
        dark: {
          primary: "#5D7371", // Muted Teal
          secondary: "#B4BEBF", // Soft Gray
          background: "#011C26", // Deep Blue-Black
          text: "#F0F2F2", // Lightest Gray
          accent: "#052326", // Slightly lighter Deep Blue-Black
        },
      },
      typography: {
        DEFAULT: {
          css: {
            code: {
              color: "#5D7371", // Muted Teal
              backgroundColor: "#F0F2F2", // Lightest Gray
              borderRadius: "0.25rem", // Rounded code blocks
              padding: "0.2rem 0.4rem", // Highlight size
            },
          },
        },
        dark: {
          css: {
            code: {
              color: "#B4BEBF", // Soft Gray
              backgroundColor: "#011C26", // Deep Blue-Black
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
