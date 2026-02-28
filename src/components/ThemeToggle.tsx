"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Monitor, Sparkles } from "lucide-react";

type Theme = "light" | "dark" | "system";

export default function ThemeToggle() {
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

  // متابعة تغيير ثيم النظام
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

  if (!mounted) return null;

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowOptions(!showOptions)}
        className="relative group flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 transition-all"
        aria-label="تغيير الثيم"
      >
        <motion.div
          animate={{ 
            rotate: theme === "dark" ? 360 : 0,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 0.5 }}
          className="text-violet-600 dark:text-violet-400"
        >
          {getThemeIcon()}
        </motion.div>

        <span className="hidden sm:inline text-sm">{getThemeLabel()}</span>

        {/* خلفية متدرجة متحركة */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-10 dark:opacity-0 dark:group-hover:opacity-20 transition-opacity"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* شارة صغيرة للتميز */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-1 -right-1 w-2 h-2 bg-violet-600 rounded-full"
        />
      </motion.button>

      <AnimatePresence>
        {showOptions && (
          <>
            {/* طبقة خلفية شفافة */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setShowOptions(false)}
            />

            {/* قائمة الخيارات */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 mt-2 w-40 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl overflow-hidden z-50"
            >
              {/* خيار فاتح */}
              <motion.button
                whileHover={{ x: 2 }}
                onClick={() => changeTheme("light")}
                className={`flex items-center gap-3 w-full px-4 py-3 text-sm transition-colors ${
                  theme === "light"
                    ? "bg-gradient-to-r from-violet-50 to-fuchsia-50 text-violet-700 dark:from-violet-900/30 dark:to-fuchsia-900/30 dark:text-violet-300"
                    : "hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                <Sun className="w-4 h-4 text-amber-500" />
                <span className="flex-1 text-right">فاتح</span>
                {theme === "light" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-1.5 h-1.5 rounded-full bg-violet-600"
                  />
                )}
              </motion.button>

              {/* خيار داكن */}
              <motion.button
                whileHover={{ x: 2 }}
                onClick={() => changeTheme("dark")}
                className={`flex items-center gap-3 w-full px-4 py-3 text-sm transition-colors ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-violet-50 to-fuchsia-50 text-violet-700 dark:from-violet-900/30 dark:to-fuchsia-900/30 dark:text-violet-300"
                    : "hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                <Moon className="w-4 h-4 text-indigo-500" />
                <span className="flex-1 text-right">داكن</span>
                {theme === "dark" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-1.5 h-1.5 rounded-full bg-violet-600"
                  />
                )}
              </motion.button>

              {/* خيار تلقائي */}
              <motion.button
                whileHover={{ x: 2 }}
                onClick={() => changeTheme("system")}
                className={`flex items-center gap-3 w-full px-4 py-3 text-sm transition-colors ${
                  theme === "system"
                    ? "bg-gradient-to-r from-violet-50 to-fuchsia-50 text-violet-700 dark:from-violet-900/30 dark:to-fuchsia-900/30 dark:text-violet-300"
                    : "hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                <Monitor className="w-4 h-4 text-violet-600" />
                <span className="flex-1 text-right">تلقائي</span>
                {theme === "system" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-1.5 h-1.5 rounded-full bg-violet-600"
                  />
                )}
              </motion.button>

              {/* تذييل القائمة مع تأثير متحرك */}
              <div className="p-2 border-t border-gray-100 dark:border-gray-700">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="flex justify-center"
                >
                  <Sparkles className="w-3 h-3 text-amber-500" />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
