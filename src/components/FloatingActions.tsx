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

  // إخفاء التلميح بعد 5 ثوانٍ
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // ✅ متغيرات الحركة (Fix TS: type literal + Variants)
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

  // ✅ زرار العناصر (function variant) — نثبت type أيضًا
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
                className="relative bg-white rounded-2xl shadow-xl p-3 mb-2 border border-gray-200 max-w-[200px]"
              >
                <div className="flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-600">
                    تواصل معنا مباشرة عبر واتساب أو اتصال
                  </p>
                </div>
                {/* سهم صغير */}
                <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-white border-r border-b border-gray-200 transform rotate-45" />
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
                  className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2.5 text-white shadow-lg hover:shadow-xl transition-all"
                  aria-label="بريد إلكتروني"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">بريد</span>
                  <span className="text-xs opacity-75 hidden sm:inline">
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
                  className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2.5 text-white shadow-lg hover:shadow-xl transition-all"
                  aria-label="اتصال"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">اتصال</span>
                  <span className="text-xs opacity-75 hidden sm:inline">
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
                  className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-2.5 text-white shadow-lg hover:shadow-xl transition-all"
                  aria-label="تواصل واتساب"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">واتساب</span>
                  <span className="text-xs opacity-75 hidden sm:inline">
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
                : "bg-gradient-to-r from-blue-600 to-purple-600"
            }`}
            aria-label={isOpen ? "إغلاق" : "فتح"}
          >
            {/* خلفية متوهجة */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-50"
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
                className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
              />
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
                className="w-10 h-10 rounded-full bg-gray-800 text-white shadow-lg flex items-center justify-center hover:bg-gray-700 transition-all"
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