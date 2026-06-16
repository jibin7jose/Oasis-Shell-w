"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[72px] h-10 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />;
  }

  return (
    <div className="flex items-center p-1 bg-gray-100 dark:bg-gray-800/80 rounded-full border border-gray-200 dark:border-gray-700/50 backdrop-blur-md transition-colors">
      <button
        onClick={() => setTheme("light")}
        className={`p-1.5 rounded-full transition-all duration-300 ${
          theme === "light" 
            ? "bg-white text-emerald-600 shadow-sm" 
            : "text-gray-400 hover:text-gray-900"
        }`}
        aria-label="Light Mode"
      >
        <Sun className="w-4 h-4" />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`p-1.5 rounded-full transition-all duration-300 ${
          theme === "dark" 
            ? "bg-gray-700 text-emerald-400 shadow-sm" 
            : "text-gray-400 hover:text-white"
        }`}
        aria-label="Dark Mode"
      >
        <Moon className="w-4 h-4" />
      </button>
    </div>
  );
}
