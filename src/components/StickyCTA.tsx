"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/siteData";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  X, 
  Sparkles, 
  Rocket,
  Clock,
  CheckCircle2,
  ChevronUp,
  ChevronDown,
  Gift,
  Zap,
  Shield,
  Star,
  Heart
} from "lucide-react";

export default function StickyCTA() {
  const { phoneE164, whatsappLink, email, phoneDisplay } = siteData.brand;
  const [show, setShow] = useState(true);
  const [minimized, setMinimized] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const key = "kodia_sticky_hidden";
    if (localStorage.getItem(key) === "1") setShow(false);
  }, []);

  // مؤقت للعرض المحدود
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleHide = () => {
    localStorage.setItem("kodia_sticky_hidden", "1");
    setShow(false);
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-40"
      >
        <div className="relative">
          {/* شريط CTA الرئيسي */}
          <motion.div
            animate={{ height: minimized ? "auto" : "auto" }}
            className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 text-white shadow-2xl"
          >
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-3">
                {/* الجزء العلوي */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* أيقونة متحركة */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <Sparkles className="w-4 h-4 text-yellow-300" />
                    </motion.div>

                    <div className="text-sm font-medium">
                      <span className="hidden sm:inline">جاهز تبدأ؟ </span>
                      <span className="font-bold">ابعت تفاصيل مشروعك الآن</span> وسأرد عليك بسرعة.
                    </div>

                    {/* مؤقت العرض */}
                    <div className="hidden md:flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                      <Clock className="w-3 h-3" />
                      <span className="font-mono">
                        {String(timeLeft.hours).padStart(2, '0')}:
                        {String(timeLeft.minutes).padStart(2, '0')}:
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* زر التصغير/التوسيع */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setMinimized(!minimized)}
                      className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
                      aria-label={minimized ? "توسيع" : "تصغير"}
                    >
                      {minimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </motion.button>

                    {/* زر الإخفاء */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleHide}
                      className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
                      aria-label="إخفاء الشريط"
                    >
                      <X className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* الجزء السفلي (يظهر عند عدم التصغير) */}
                <AnimatePresence>
                  {!minimized && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 border-t border-white/20"
                    >
                      {/* معلومات إضافية */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-white/80">
                        <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full">
                          <Zap className="w-3 h-3 text-yellow-300" />
                          <span>رد خلال ساعة</span>
                        </div>
                        <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full">
                          <Gift className="w-3 h-3 text-yellow-300" />
                          <span>استشارة مجانية</span>
                        </div>
                        <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full">
                          <Rocket className="w-3 h-3 text-yellow-300" />
                          <span>بدء فوري</span>
                        </div>
                        <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full">
                          <Shield className="w-3 h-3 text-yellow-300" />
                          <span>ضمان الجودة</span>
                        </div>
                      </div>

                      {/* أزرار التواصل */}
                      <div className="flex flex-wrap items-center gap-2">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={whatsappLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span className="hidden sm:inline">واتساب</span>
                        </motion.a>

                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={`tel:${phoneE164}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold text-sm border border-white/30 hover:bg-white/30 transition-all"
                        >
                          <Phone className="w-4 h-4" />
                          <span className="hidden sm:inline">{phoneDisplay}</span>
                        </motion.a>

                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={`mailto:${email}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold text-sm border border-white/30 hover:bg-white/30 transition-all"
                        >
                          <Mail className="w-4 h-4" />
                          <span className="hidden sm:inline">بريد</span>
                        </motion.a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* شارة "عرض خاص" (تظهر عند التصغير) */}
          {minimized && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              عرض خاص
            </motion.div>
          )}

          {/* شارة المتبقي (تظهر عند التصغير) */}
          {minimized && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1"
            >
              <Clock className="w-3 h-3" />
              <span>
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
