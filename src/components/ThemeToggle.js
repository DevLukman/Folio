"use client";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
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
    <div className="flex items-center justify-end gap-4">
      <button
        onClick={() => setTheme("light")}
        aria-label="Switch to light mode"
      >
        <IoSunnyOutline className="text-secondary" size="20px" />
      </button>
      <button onClick={() => setTheme("dark")} aria-label="Switch to dark mode">
        <FiMoon size="20px" />
      </button>
      <button onClick={() => setTheme("system")} aria-label="Use system theme">
        <HiOutlineComputerDesktop size="20px" />
      </button>
    </div>
  );
}
