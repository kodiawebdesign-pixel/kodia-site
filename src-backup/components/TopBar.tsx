"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import { siteData } from "@/lib/siteData";
import SocialLinks from "@/components/SocialLinks";
import { Phone, Mail, Clock, MapPin, ChevronDown, Sparkles, Gift, Zap, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function TopBar() {
  const { phoneDisplay, phoneE164, email, serviceArea } = siteData.brand;
  const [currentTime, setCurrentTime] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  // تحديث الوقت الحالي
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("ar-EG", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // تحديث كل دقيقة

    return () => clearInterval(interval);
  }, []);

  // حالة العمل (مفتوح/مغلق)
  const isOpen = () => {
    const now = new Date();
    const hours = now.getHours();
    const day = now.getDay(); // 0 = الأحد, 1 = الاثنين, ..., 6 = السبت
    
    // أيام العمل: الأحد - الخميس (0-4)
    if (day >= 0 && day <= 4) {
      return hours >= 9 && hours < 18;
    }
    // السبت (6)
    if (day === 6) {
      return hours >= 10 && hours < 16;
    }
    // الجمعة (5) مغلق
    return false;
  };

  const openStatus = isOpen();

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-b bg-gradient-to-r from-violet-50/50 to-fuchsia-50/50 dark:from-gray-900 dark:to-gray-800 dark:border-violet-800/30"
    >
      <Container>
        <div className="flex flex-col gap-2 py-2 text-xs sm:flex-row sm:items-center sm:justify-between">
          {/* القسم الأيسر - معلومات الاتصال */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300">
            {/* رقم الهاتف */}
            <motion.a
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${phoneE164}`}
              className="inline-flex items-center gap-1.5 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
              aria-label="اتصال"
            >
              <div className="relative">
                <Phone className="w-4 h-4" />
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span dir="ltr" className="font-medium">{phoneDisplay}</span>
            </motion.a>

            {/* البريد الإلكتروني */}
            <motion.a
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1.5 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              aria-label="البريد الإلكتروني"
            >
              <Mail className="w-4 h-4" />
              <span dir="ltr" className="font-medium">{email}</span>
            </motion.a>

            {/* الموقع */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="hidden md:inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400"
            >
              <MapPin className="w-4 h-4" />
              <span>{serviceArea}</span>
            </motion.div>

            {/* الوقت الحالي */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hidden lg:inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400"
            >
              <Clock className="w-4 h-4" />
              <span>{currentTime}</span>
            </motion.div>
          </div>

          {/* القسم الأيمن - حالة العمل والعروض والسوشيال */}
          <div className="flex flex-wrap items-center justify-between sm:justify-end gap-3">
            {/* حالة العمل */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className={`w-2 h-2 rounded-full ${
                    openStatus ? "bg-green-500" : "bg-red-500"
                  }`}
                />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                  {openStatus ? "مفتوح الآن" : "مغلق الآن"}
                </span>
              </div>

              {/* رابط سريع للعروض */}
              <Link href="/quote">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="hidden lg:flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full text-xs shadow-md cursor-pointer"
                >
                  <Zap className="w-3 h-3" />
                  <span>عروض خاصة</span>
                </motion.div>
              </Link>

              {/* رسالة ترحيب متغيرة */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowMessage(!showMessage)}
                className="relative hidden lg:flex items-center gap-1 px-2 py-1 bg-violet-50 dark:bg-violet-900/20 rounded-full text-violet-600 dark:text-violet-400 text-xs"
              >
                <Gift className="w-3 h-3" />
                <span>عرض خاص</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${
                    showMessage ? "rotate-180" : ""
                  }`}
                />
              </motion.button>

              {/* الرسالة المنبثقة */}
              {showMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-8 left-0 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 text-xs border border-violet-100 dark:border-violet-800 whitespace-nowrap"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white">
                      <Heart className="w-3 h-3" />
                    </div>
                    <p className="font-bold text-gray-800 dark:text-gray-200">
                      🎉 خصم ٢٠٪ على أول مشروع
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    استخدم الكود: 
                    <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mr-1 text-violet-600 dark:text-violet-400">
                      KODIA20
                    </span>
                  </p>
                  <Link href="/quote">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full mt-2 py-1.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg text-xs font-medium"
                    >
                      استفد الآن
                    </motion.button>
                  </Link>
                </motion.div>
              )}
            </motion.div>

            {/* روابط التواصل الاجتماعي */}
            <div className="flex items-center">
              <SocialLinks 
                items={siteData.topNav.socials} 
                variant="top" 
                size="sm"
                showLabels={false}
              />
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}
