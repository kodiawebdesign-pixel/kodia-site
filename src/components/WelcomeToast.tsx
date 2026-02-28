"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { siteData } from "@/lib/siteData";
import { 
  Sparkles, 
  MessageCircle, 
  Rocket, 
  Gift, 
  Star,
  Zap,
  Shield,
  Heart,
  Coffee,
  Sun,
  Moon
} from "lucide-react";
import { motion } from "framer-motion";

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
      let icon = null;
      
      if (hour >= 5 && hour < 12) {
        greeting = "صباح الخير";
        icon = <Sun className="w-5 h-5 text-yellow-300" />;
      } else if (hour >= 12 && hour < 17) {
        greeting = "مساء الخير";
        icon = <Coffee className="w-5 h-5 text-amber-300" />;
      } else if (hour >= 17 && hour < 21) {
        greeting = "مساء النور";
        icon = <Zap className="w-5 h-5 text-yellow-300" />;
      } else {
        greeting = "مساء الخير";
        icon = <Moon className="w-5 h-5 text-indigo-300" />;
      }

      localStorage.setItem(key, "1");

      toast.custom((t) => (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          {/* رأس التوست مع تدرج لوني - محدث بالبنفسجي */}
          <div className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 p-4 text-white relative overflow-hidden">
            {/* خلفية متحركة */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-2xl"
            />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Sparkles className="w-6 h-6 text-yellow-300" />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
<<<<<<< HEAD
                    transition={{ duration: 2, repeat: Infinity ,
  repeatType: "reverse"}}
=======
                    transition={{ duration: 2, repeat: Infinity }}
>>>>>>> 6b0f7410fa10801cb29b683cf6e81bde0bc0b564
                    className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"
                  />
                </div>
                <div className="flex items-center gap-2">
                  {icon}
                  <div>
                    <h3 className="font-bold text-lg">{greeting} 👋</h3>
                    <p className="text-sm text-white/90">أهلًا بك في {siteData.brand.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* محتوى التوست */}
          <div className="p-4">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              لو عندك فكرة مشروع، ابعتها على واتساب وسأرد عليك بسرعة. فريقنا جاهز لمساعدتك!
            </p>

            {/* إحصائيات سريعة - محدثة */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { icon: Rocket, label: "رد سريع", value: "خلال ساعة", color: "from-violet-600 to-fuchsia-600" },
                { icon: Gift, label: "استشارة", value: "مجانية", color: "from-blue-600 to-cyan-600" },
                { icon: Star, label: "تقييم", value: "٤.٩/٥", color: "from-amber-600 to-orange-600" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className={`w-8 h-8 mx-auto mb-1 rounded-lg bg-gradient-to-br ${stat.color} p-1.5 text-white`}>
                    <stat.icon className="w-full h-full" />
                  </div>
                  <div className="text-xs font-bold text-gray-900 dark:text-gray-100">{stat.value}</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* عروض خاصة */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-4 p-2 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg border border-amber-200 dark:border-amber-800"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-xs">
                  🎁
                </div>
                <p className="text-xs text-amber-800 dark:text-amber-300">
                  خصم ٢٠٪ على أول مشروع! استخدم الكود: <span className="font-mono font-bold">KODIA20</span>
                </p>
              </div>
            </motion.div>

            {/* أزرار الإجراء */}
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  window.open(siteData.brand.whatsappLink, "_blank");
                  toast.dismiss(t);
                }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                تواصل واتساب
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toast.dismiss(t)}
                className="px-4 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-xl font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              >
                لاحقاً
              </motion.button>
            </div>
          </div>

          {/* تذييل */}
          <div className="px-4 pb-3 text-center">
            <p className="text-[10px] text-gray-400 dark:text-gray-500 flex items-center justify-center gap-1">
              <Shield className="w-3 h-3" />
              * لن تظهر هذه الرسالة مرة أخرى
            </p>
          </div>
        </motion.div>
      ), {
        duration: 15000, // زيادة المدة إلى 15 ثانية
        position: "top-center",
      });

    }, 2000); // تأخير 2 ثانية

    return () => clearTimeout(timer);
  }, [mounted]);

  return null;
}
