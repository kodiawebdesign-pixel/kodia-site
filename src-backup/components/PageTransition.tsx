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

  // تأثيرات مختلفة حسب الصفحة - محدثة
  const getTransitionVariants = (path: string) => {
    // صفحات رئيسية
    if (path === "/") {
      return {
        initial: { opacity: 0, scale: 0.98, filter: "blur(4px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        exit: { opacity: 0, scale: 1.02, filter: "blur(4px)" },
      };
    }
    
    // صفحات الخدمات
    if (path.includes("/services")) {
      return {
        initial: { opacity: 0, x: -20, filter: "blur(2px)" },
        animate: { opacity: 1, x: 0, filter: "blur(0px)" },
        exit: { opacity: 0, x: 20, filter: "blur(2px)" },
      };
    }
    
    // صفحة الأعمال
    if (path.includes("/portfolio")) {
      return {
        initial: { opacity: 0, y: 20, filter: "blur(2px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        exit: { opacity: 0, y: -20, filter: "blur(2px)" },
      };
    }
    
    // صفحة المدونة
    if (path.includes("/blog")) {
      return {
        initial: { opacity: 0, rotateX: -10, y: 10 },
        animate: { opacity: 1, rotateX: 0, y: 0 },
        exit: { opacity: 0, rotateX: 10, y: -10 },
      };
    }
    
    // صفحة من نحن
    if (path.includes("/about")) {
      return {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
      };
    }
    
    // صفحة اتصل بنا
    if (path.includes("/contact")) {
      return {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
      };
    }
    
    // التأثير الافتراضي
    return {
      initial: { opacity: 0, y: 10, filter: "blur(2px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: { opacity: 0, y: -10, filter: "blur(2px)" },
    };
  };

  // مدة الانتقال حسب نوع الصفحة - محدثة
  const getTransitionDuration = (path: string) => {
    if (path === "/") return 0.4;
    if (path.includes("/portfolio")) return 0.35;
    if (path.includes("/services")) return 0.3;
    if (path.includes("/about")) return 0.3;
    if (path.includes("/contact")) return 0.25;
    return 0.25;
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
          ease: [0.43, 0.13, 0.23, 0.96], // cubic-bezier محسّن أكثر سلاسة
          opacity: { duration: duration * 0.7 },
          filter: { duration: duration * 0.5 },
        }}
        className="relative"
      >
        {/* شريط تقدم علوي - محدث بالألوان البنفسجية */}
        {!isFirstMount && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: duration * 0.5 }}
            className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 origin-left z-50"
            style={{ transformOrigin: "0%" }}
          />
        )}

        {/* تأثير ضوء خلفي عند التحميل */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 pointer-events-none z-40 bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 dark:from-violet-500/10 dark:to-fuchsia-500/10"
        />

        {children}
      </motion.div>
    </AnimatePresence>
  );
}
