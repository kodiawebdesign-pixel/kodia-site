"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Monitor, Sparkles } from "lucide-react";

type Theme = "light" | "dark" | "system";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  // تحديث الثيم عند التحميل
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (saved) {
      setTheme(saved);
      applyTheme(saved);
    } else {
      const systemTheme = prefersDark ? "dark" : "light";
      setTheme("system");
      applyTheme(systemTheme);
    }
  }, []);

  // متابعة تغيير ثيم النظام
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        applyTheme(e.matches ? "dark" : "light");
      }
    };
    
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [theme]);

  const applyTheme = (newTheme: "light" | "dark") => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(prefersDark ? "dark" : "light");
    } else {
      applyTheme(newTheme);
    }
    
    setShowOptions(false);
  };

  // الحصول على الأيقونة المناسبة
  const getThemeIcon = () => {
    switch (theme) {
      case "light": return <Sun className="w-5 h-5" />;
      case "dark": return <Moon className="w-5 h-5" />;
      case "system": return <Monitor className="w-5 h-5" />;
    }
  };

  // الحصول على نص الوضع الحالي
  const getThemeLabel = () => {
    switch (theme) {
      case "light": return "فاتح";
      case "dark": return "داكن";
      case "system": return "تلقائي";
    }
  };

  if (!mounted) return null;

  return (
    <div className="relative">
      {/* الزر الرئيسي */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowOptions(!showOptions)}
        className="relative group flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 transition-all"
        aria-label="تغيير الثيم"
      >
        {/* أيقونة متحركة */}
        <motion.div
          animate={{
            rotate: theme === "dark" ? 360 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          {getThemeIcon()}
        </motion.div>

        {/* النص (يظهر على الشاشات المتوسطة فأكبر) */}
        <span className="hidden sm:inline text-sm">{getThemeLabel()}</span>

        {/* تأثير توهج خلفي */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* قائمة الخيارات */}
      <AnimatePresence>
        {showOptions && (
          <>
            {/* طبقة خلفية تغلق القائمة عند النقر خارجها */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setShowOptions(false)}
            />

            {/* القائمة المنسدلة */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-40 rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden z-50 dark:bg-gray-800 dark:border-gray-700"
            >
              {/* خيار فاتح */}
              <button
                onClick={() => changeTheme("light")}
                className={`flex items-center gap-3 w-full px-4 py-3 text-sm transition-colors ${
                  theme === "light"
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                    : "hover:bg-gray-50 text-gray-700 dark:hover:bg-gray-700 dark:text-gray-200"
                }`}
              >
                <Sun className="w-4 h-4" />
                <span className="flex-1 text-right">فاتح</span>
                {theme === "light" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-1.5 h-1.5 rounded-full bg-blue-600"
                  />
                )}
              </button>

              {/* خيار داكن */}
              <button
                onClick={() => changeTheme("dark")}
                className={`flex items-center gap-3 w-full px-4 py-3 text-sm transition-colors ${
                  theme === "dark"
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                    : "hover:bg-gray-50 text-gray-700 dark:hover:bg-gray-700 dark:text-gray-200"
                }`}
              >
                <Moon className="w-4 h-4" />
                <span className="flex-1 text-right">داكن</span>
                {theme === "dark" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-1.5 h-1.5 rounded-full bg-blue-600"
                  />
                )}
              </button>

              {/* خيار تلقائي */}
              <button
                onClick={() => changeTheme("system")}
                className={`flex items-center gap-3 w-full px-4 py-3 text-sm transition-colors ${
                  theme === "system"
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                    : "hover:bg-gray-50 text-gray-700 dark:hover:bg-gray-700 dark:text-gray-200"
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span className="flex-1 text-right">تلقائي</span>
                {theme === "system" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-1.5 h-1.5 rounded-full bg-blue-600"
                  />
                )}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}