"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { siteData } from "@/lib/siteData";
import {
  MessageCircle,
  Phone,
  Mail,
  X,
  ChevronUp,
  HelpCircle,
  Sparkles,
  Zap,
  Shield,
  Star
} from "lucide-react";

export default function FloatingActions() {
  const wa = siteData.brand.whatsappLink;
  const tel = `tel:${siteData.brand.phoneE164}`;
  const mail = `mailto:${siteData.brand.email}`;

  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // إخفاء/إظهار عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // إخفاء التلميح بعد 7 ثوانٍ
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  // متغيرات الحركة
  const containerVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
        delay: custom * 0.1,
      },
    }),
    exit: { opacity: 0, scale: 0.5, y: 20 },
  };

  const pulseVariants: Variants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.2, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
         repeatType: "reverse"
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed bottom-6 left-6 z-50 flex flex-col items-end gap-3"
        >
          {/* تلميح المساعدة (يظهر ثم يختفي) */}
          <AnimatePresence>
            {showHint && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -20 }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 mb-2 border border-violet-100 dark:border-violet-800 max-w-[240px]"
              >
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white flex-shrink-0">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-800 dark:text-gray-200 mb-1">
                      تواصل معنا مباشرة
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      واتساب • اتصال • بريد إلكتروني
                    </p>
                  </div>
                </div>
                {/* سهم صغير */}
                <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-white dark:bg-gray-800 border-r border-b border-violet-100 dark:border-violet-800 transform rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* الأزرار الممتدة (تظهر عند الفتح) */}
          <AnimatePresence>
            {isOpen && (
              <motion.div className="flex flex-col gap-2 items-end">
                {/* زر البريد */}
                <motion.a
                  href={mail}
                  variants={buttonVariants}
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-4 py-3 text-white shadow-lg hover:shadow-xl transition-all overflow-hidden"
                  aria-label="بريد إلكتروني"
                >
                  <motion.div
                    variants={pulseVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 blur-lg opacity-50"
                  />
                  <Mail className="w-4 h-4 relative z-10" />
                  <span className="text-sm font-medium relative z-10">بريد</span>
                  <span className="text-xs opacity-75 hidden sm:inline relative z-10">
                    | {siteData.brand.email}
                  </span>
                </motion.a>

                {/* زر الاتصال */}
                <motion.a
                  href={tel}
                  variants={buttonVariants}
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-white shadow-lg hover:shadow-xl transition-all overflow-hidden"
                  aria-label="اتصال"
                >
                  <motion.div
                    variants={pulseVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 blur-lg opacity-50"
                  />
                  <Phone className="w-4 h-4 relative z-10" />
                  <span className="text-sm font-medium relative z-10">اتصال</span>
                  <span className="text-xs opacity-75 hidden sm:inline relative z-10">
                    | {siteData.brand.phoneDisplay}
                  </span>
                </motion.a>

                {/* زر واتساب */}
                <motion.a
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  variants={buttonVariants}
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center gap-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-3 text-white shadow-lg hover:shadow-xl transition-all overflow-hidden"
                  aria-label="تواصل واتساب"
                >
                  <motion.div
                    variants={pulseVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 blur-lg opacity-50"
                  />
                  <MessageCircle className="w-4 h-4 relative z-10" />
                  <span className="text-sm font-medium relative z-10">واتساب</span>
                  <span className="text-xs opacity-75 hidden sm:inline relative z-10">
                    | رد فوري
                  </span>
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* الزر الرئيسي (للفتح/الإغلاق) */}
          <motion.button
            onClick={() => setIsOpen((v) => !v)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all ${
              isOpen
                ? "bg-gradient-to-r from-red-600 to-pink-600 rotate-180"
                : "bg-gradient-to-r from-violet-600 to-fuchsia-600"
            }`}
            aria-label={isOpen ? "إغلاق" : "فتح"}
          >
            {/* خلفية متوهجة */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 blur-xl opacity-50"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* الأيقونة */}
            {isOpen ? (
              <X className="w-6 h-6 text-white relative z-10" />
            ) : (
              <MessageCircle className="w-6 h-6 text-white relative z-10" />
            )}

            {/* شارة الإشعار */}
            {!isOpen && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full border-2 border-white flex items-center justify-center"
              >
                <span className="text-[10px] text-white font-bold">1</span>
              </motion.span>
            )}
          </motion.button>

          {/* زر الرجوع للأعلى */}
          <AnimatePresence>
            {lastScrollY > 300 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-700 text-white shadow-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-600 transition-all"
                aria-label="الرجوع للأعلى"
              >
                <ChevronUp className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
