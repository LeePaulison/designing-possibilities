"use client";

import { useTheme } from "@/app/context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light"); // Toggle between light and dark
  };

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded bg-primary text-primary hover:bg-primary-dark hover:text-primary-light'
    >
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
}
