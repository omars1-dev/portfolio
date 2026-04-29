import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

/**
 * ThemeToggle Component - Dark Mode Toggle Button
 * Design Philosophy: Smooth theme switching with persistent preference
 * - Shows sun/moon icon based on current theme
 * - Smooth transition animation
 * - Saves preference to localStorage
 */

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
      aria-label="تبديل الوضع الليلي"
      title={theme === "light" ? "تفعيل الوضع الليلي" : "تفعيل الوضع النهاري"}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
      ) : (
        <Sun className="w-5 h-5 text-slate-400" />
      )}
    </button>
  );
}
