// components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setTheme("light")}
        aria-label="Switch to light mode"
        className={`p-2 rounded-full ${
          theme === "light"
            ? "bg-[var(--color-primary)] text-white"
            : "bg-gray-200"
        }`}
      >
        Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        aria-label="Switch to dark mode"
        className={`p-2 rounded-full ${
          theme === "dark"
            ? "bg-[var(--color-primary)] text-white"
            : "bg-gray-200"
        }`}
      >
        Dark
      </button>
      <button
        onClick={() => setTheme("system")}
        aria-label="Use system theme"
        className={`p-2 rounded-full ${
          theme === "system"
            ? "bg-[var(--color-primary)] text-white"
            : "bg-gray-200"
        }`}
      >
        System
      </button>
    </div>
  );
}
