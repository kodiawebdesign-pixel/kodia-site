"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { siteData } from "@/lib/siteData";
import { Sparkles, MessageCircle, Rocket, Gift, Star } from "lucide-react";

export default function WelcomeToast() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const key = "kodia_welcome_shown";
    const shown = localStorage.getItem(key);
    if (shown) return;

    // تأخير بسيط لظهور التوست بعد تحميل الصفحة
    const timer = setTimeout(() => {
      // رسالة ترحيب متغيرة حسب الوقت
      const hour = new Date().getHours();
      let greeting = "";
      
      if (hour >= 5 && hour < 12) {
        greeting = "صباح الخير";
      } else if (hour >= 12 && hour < 17) {
        greeting = "مساء الخير";
      } else if (hour >= 17 && hour < 21) {
        greeting = "مساء النور";
      } else {
        greeting = "مساء الخير";
      }

      localStorage.setItem(key, "1");

      toast.custom((t) => (
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* رأس التوست مع تدرج لوني */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Sparkles className="w-6 h-6 text-yellow-300" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{greeting} 👋</h3>
                <p className="text-sm text-white/90">أهلًا بك في {siteData.brand.name}</p>
              </div>
            </div>
          </div>

          {/* محتوى التوست */}
          <div className="p-4">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              لو عندك فكرة مشروع، ابعتها على واتساب وسأرد عليك بسرعة. فريقنا جاهز لمساعدتك!
            </p>

            {/* إحصائيات سريعة */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { icon: Rocket, label: "رد سريع", value: "خلال ساعة" },
                { icon: Gift, label: "استشارة", value: "مجانية" },
                { icon: Star, label: "تقييم", value: "٤.٩/٥" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <stat.icon className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                  <div className="text-xs font-bold text-gray-900 dark:text-gray-100">{stat.value}</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* أزرار الإجراء */}
            <div className="flex gap-2">
              <button
                onClick={() => {
                  window.open(siteData.brand.whatsappLink, "_blank");
                  toast.dismiss(t);
                }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                تواصل واتساب
              </button>
              <button
                onClick={() => toast.dismiss(t)}
                className="px-4 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-xl font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              >
                لاحقاً
              </button>
            </div>
          </div>

          {/* تذييل */}
          <div className="px-4 pb-3 text-center">
            <p className="text-[10px] text-gray-400 dark:text-gray-500">
              * لن تظهر هذه الرسالة مرة أخرى
            </p>
          </div>
        </div>
      ), {
        duration: 10000,
        position: "top-center",
      });

    }, 1500); // تأخير 1.5 ثانية

    return () => clearTimeout(timer);
  }, [mounted]);

  return null;
}

// استيراد motion للتأثيرات
import { motion } from "framer-motion";