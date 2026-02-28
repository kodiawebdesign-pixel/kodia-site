"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Monitor, Sparkles } from "lucide-react";

type Theme = "light" | "dark" | "system";

export default function ThemeToggleSimpleSimple() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const getSystemTheme = (): "light" | "dark" => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const applyTheme = (newTheme: Theme) => {
    const resolved = newTheme === "system" ? getSystemTheme() : newTheme;

    if (resolved === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    setMounted(true);

    const savedRaw = localStorage.getItem("theme");
    const saved: Theme | null =
      savedRaw === "light" || savedRaw === "dark" || savedRaw === "system"
        ? savedRaw
        : null;

    if (saved) {
      setTheme(saved);
      applyTheme(saved);
    } else {
      setTheme("system");
      applyTheme("system");
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = () => {
      if (theme === "system") applyTheme("system");
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [theme]);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
    setShowOptions(false);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="w-5 h-5" />;
      case "dark":
        return <Moon className="w-5 h-5" />;
      case "system":
        return <Monitor className="w-5 h-5" />;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case "light":
        return "فاتح";
      case "dark":
        return "داكن";
      case "system":
        return "تلقائي";
    }
  };

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.theme-toggle-container')) {
        setShowOptions(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative theme-toggle-container">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="relative group flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
        aria-label="تغيير الثيم"
      >
        <div className="text-primary-600 dark:text-primary-400">
          {getThemeIcon()}
        </div>

        <span className="hidden sm:inline text-sm">{getThemeLabel()}</span>

        {/* خلفية متدرجة ثابتة */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-200" />

        {/* شارة صغيرة */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-600 rounded-full animate-pulse" />
      </button>

      {showOptions && (
        <>
          {/* طبقة خلفية شفافة */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowOptions(false)}
          />

          {/* قائمة الخيارات - بدون animations */}
          <div
            className="absolute left-0 mt-2 w-40 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl overflow-hidden z-50"
          >
            {/* خيار فاتح */}
            <button
              onClick={() => changeTheme("light")}
              className={`flex items-center gap-3 w-full px-4 py-3 text-sm transition-colors duration-150 ${
                theme === "light"
                  ? "bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 dark:from-primary-900/30 dark:to-secondary-900/30 dark:text-primary-300"
                  : "hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              <Sun className="w-4 h-4 text-amber-600" />
              <span className="flex-1 text-right">فاتح</span>
              {theme === "light" && (
                <div className="w-1.5 h-1.5 rounded-full bg-primary-600" />
              )}
            </button>

            {/* خيار داكن */}
            <button
              onClick={() => changeTheme("dark")}
              className={`flex items-center gap-3 w-full px-4 py-3 text-sm transition-colors duration-150 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 dark:from-primary-900/30 dark:to-secondary-900/30 dark:text-primary-300"
                  : "hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              <Moon className="w-4 h-4 text-primary-600" />
              <span className="flex-1 text-right">داكن</span>
              {theme === "dark" && (
                <div className="w-1.5 h-1.5 rounded-full bg-primary-600" />
              )}
            </button>

            {/* خيار تلقائي */}
            <button
              onClick={() => changeTheme("system")}
              className={`flex items-center gap-3 w-full px-4 py-3 text-sm transition-colors duration-150 ${
                theme === "system"
                  ? "bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 dark:from-primary-900/30 dark:to-secondary-900/30 dark:text-primary-300"
                  : "hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              <Monitor className="w-4 h-4 text-primary-600" />
              <span className="flex-1 text-right">تلقائي</span>
              {theme === "system" && (
                <div className="w-1.5 h-1.5 rounded-full bg-primary-600" />
              )}
            </button>

            {/* تذييل القائمة */}
            <div className="p-2 border-t border-gray-100 dark:border-gray-700">
              <div className="flex justify-center">
                <Sparkles className="w-3 h-3 text-amber-600 animate-spin-slow" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}