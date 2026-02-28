"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Sparkles } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScroll = docHeight - winHeight;
      const progress = (scrollY / totalScroll) * 100;
      
      setScrollProgress(progress);
      setVisible(scrollY > 600);
    }
    
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-24 left-4 z-50 group"
          aria-label="الرجوع للأعلى"
        >
          {/* دائرة التقدم */}
          <svg className="absolute -inset-1 rotate-[-90deg]" width="60" height="60" viewBox="0 0 60 60">
            <circle
              cx="30"
              cy="30"
              r="26"
              fill="none"
              stroke="rgba(139, 92, 246, 0.2)"
              strokeWidth="3"
              className="dark:stroke-violet-800/30"
            />
            <circle
              cx="30"
              cy="30"
              r="26"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${(scrollProgress / 100) * 163.36} 163.36`}
              className="transition-all duration-300"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* الزر الرئيسي */}
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-glow">
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            
            {/* تأثير نبض خفيف */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                 repeatType: "reverse"
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 blur-md -z-10"
            />
          </div>

          {/* نص صغير يظهر عند الهوفر */}
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: -50 }}
            transition={{ duration: 0.2 }}
            className="absolute top-1/2 -translate-y-1/2 right-14 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium whitespace-nowrap px-3 py-1.5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 pointer-events-none"
          >
            العودة للأعلى
            <Sparkles className="inline-block w-3 h-3 mr-1 text-amber-500" />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
