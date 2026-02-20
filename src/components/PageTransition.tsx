"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    setIsFirstMount(false);
  }, []);

  // تأثيرات مختلفة حسب الصفحة
  const getTransitionVariants = (path: string) => {
    // صفحات رئيسية
    if (path === "/") {
      return {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.02 },
      };
    }
    
    // صفحات الخدمات
    if (path.includes("/services")) {
      return {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 },
      };
    }
    
    // صفحة الأعمال
    if (path.includes("/portfolio")) {
      return {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
      };
    }
    
    // صفحة المدونة
    if (path.includes("/blog")) {
      return {
        initial: { opacity: 0, rotateX: -10 },
        animate: { opacity: 1, rotateX: 0 },
        exit: { opacity: 0, rotateX: 10 },
      };
    }
    
    // التأثير الافتراضي
    return {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
    };
  };

  // مدة الانتقال حسب نوع الصفحة
  const getTransitionDuration = (path: string) => {
    if (path === "/") return 0.35;
    if (path.includes("/portfolio")) return 0.3;
    if (path.includes("/services")) return 0.25;
    return 0.2;
  };

  const variants = getTransitionVariants(pathname);
  const duration = getTransitionDuration(pathname);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={variants.initial}
        animate={variants.animate}
        exit={variants.exit}
        transition={{
          duration: duration,
          ease: [0.4, 0, 0.2, 1], // cubic-bezier محسّن
          opacity: { duration: duration * 0.8 },
        }}
        className="relative"
      >
        {/* شريط تقدم علوي (اختياري) */}
        {!isFirstMount && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: duration * 0.5 }}
            className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 origin-left z-50"
            style={{ transformOrigin: "0%" }}
          />
        )}

        {children}
      </motion.div>
    </AnimatePresence>
  );
}