"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Smartphone,
  Zap,
  Shield,
  CheckCircle2,
  Award,
  Clock,
  Headphones,
  Rocket,
  Sparkles,
<<<<<<< HEAD
  Heart,
  Gauge,
  Target,
=======
  Gem,
  Heart,
  Star,
  Target,
  Gauge,
>>>>>>> 6b0f7410fa10801cb29b683cf6e81bde0bc0b564
  Palette
} from "lucide-react";
import Container from "./Container";
import { siteData } from "@/lib/siteData";

<<<<<<< HEAD
// بيانات ثابتة للثقة - بدون أي رموز تعبيرية
const trustItems = [
  { text: "تصميم UI/UX احترافي", icon: Palette },
  { text: "متجاوب على كل الأجهزة", icon: Smartphone },
  { text: "تهيئة SEO وسرعة", icon: Zap },
  { text: "تسليم منظم + دعم", icon: Headphones },
  { text: "ضمان استعادة الحقوق", icon: Shield },
  { text: "أداء عالي وسرعة فائقة", icon: Gauge },
  { text: "تصميم يجذب العملاء", icon: Target },
  { text: "جودة مضمونة", icon: Award },
];

// ألوان متدرجة لكل عنصر
=======
// أيقونات متنوعة لكل عنصر - محدثة
const iconMap = {
  "تصميم UI/UX احترافي": Palette,
  "متجاوب على كل الأجهزة": Smartphone,
  "تهيئة SEO أساسية": Zap,
  "تسليم منظم + دعم": Headphones,
  "ضمان استعادة الحقوق": Shield,
  "✨ تصميم UI/UX احترافي": Palette,
  "📱 متجاوب على كل الأجهزة": Smartphone,
  "🚀 تهيئة SEO وسرعة": Rocket,
  "🛠️ تسليم منظم + دعم": Headphones,
  "💯 ضمان استعادة الحقوق": Shield,
  "⚡ أداء عالي وسرعة فائقة": Gauge,
  "🎯 تصميم يجذب العملاء": Target,
} as const;

// ألوان متدرجة لكل عنصر - محدثة بالبنفسجي
>>>>>>> 6b0f7410fa10801cb29b683cf6e81bde0bc0b564
const gradientColors = [
  "from-violet-600 to-fuchsia-600",
  "from-blue-600 to-cyan-600",
  "from-emerald-600 to-teal-600",
  "from-amber-600 to-orange-600",
  "from-purple-600 to-pink-600",
  "from-indigo-600 to-violet-600",
  "from-rose-600 to-red-600",
  "from-green-600 to-emerald-600",
];

<<<<<<< HEAD
// خلفيات متدرجة
=======
// خلفيات متدرجة - محدثة
>>>>>>> 6b0f7410fa10801cb29b683cf6e81bde0bc0b564
const bgGradients = [
  "from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30",
  "from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30",
  "from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30",
  "from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30",
  "from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30",
  "from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30",
<<<<<<< HEAD
  "from-rose-100 to-red-100 dark:from-rose-900/30 dark:to-red-900/30",
  "from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30",
];

export default function TrustBar() {
  // استخدام أول 8 عناصر من البيانات أو الرجوع للبيانات الثابتة
  const items = siteData?.home?.trustBar?.items?.slice(0, 8) || trustItems.map(item => item.text);
  
=======
];

export default function TrustBar() {
  const items = siteData.home.trustBar.items as string[];

>>>>>>> 6b0f7410fa10801cb29b683cf6e81bde0bc0b564
  // Variants للحركة
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

<<<<<<< HEAD
  // دالة لاستخراج النص الأساسي بدون رموز
  const getBaseText = (text: string) => {
    // إزالة أي رموز تعبيرية أو أحرف خاصة
    return text
      .replace(/[✨📱🚀🛠️💯✅⚡🎯]/g, '')
      .replace(/[^\w\s\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/g, '')
      .trim();
  };

  // الحصول على الأيقونة المناسبة للنص
  const getIconForText = (text: string) => {
    const baseText = getBaseText(text);
    if (baseText.includes('UI/UX') || baseText.includes('تصميم')) return Palette;
    if (baseText.includes('متجاوب') || baseText.includes('الأجهزة')) return Smartphone;
    if (baseText.includes('SEO') || baseText.includes('سرعة')) return Zap;
    if (baseText.includes('تسليم') || baseText.includes('دعم')) return Headphones;
    if (baseText.includes('ضمان') || baseText.includes('حقوق')) return Shield;
    if (baseText.includes('أداء') || baseText.includes('فائقة')) return Gauge;
    if (baseText.includes('يجذب') || baseText.includes('عملاء')) return Target;
    return CheckCircle2;
=======
  // تنظيف النص من الإيموجي للاستخدام في الأيقونة
  const getCleanText = (text: string) => {
    return text.replace(/[✨📱🚀🛠️💯✅⚡🎯]/g, "").trim();
>>>>>>> 6b0f7410fa10801cb29b683cf6e81bde0bc0b564
  };

  return (
    <div className="relative border-y bg-gradient-to-r from-white via-violet-50/30 to-white dark:from-gray-950 dark:via-violet-950/20 dark:to-gray-950 overflow-hidden">
      {/* خلفية متحركة خفيفة */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.03)_0%,transparent_50%)]" />
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
<<<<<<< HEAD
          className="grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {items.map((item, index) => {
            const cleanText = getBaseText(item);
            const IconComponent = getIconForText(item);
=======
          className="grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
        >
          {items.map((item, index) => {
            const cleanText = getCleanText(item);

            const IconComponent =
              (iconMap as Record<string, any>)[item] ?? CheckCircle2;

>>>>>>> 6b0f7410fa10801cb29b683cf6e81bde0bc0b564
            const gradientClass = gradientColors[index % gradientColors.length];
            const bgGradient = bgGradients[index % bgGradients.length];

            return (
              <motion.div
                key={`trust-${index}-${cleanText.substring(0, 10)}`}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${bgGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />

                <div className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* خط علوي متحرك */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass}`}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: "right" }}
                  />

                  <div className="flex items-center gap-3">
                    {/* أيقونة مع خلفية متدرجة */}
<<<<<<< HEAD
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${gradientClass} p-2 text-white shadow-lg`}>
                      <IconComponent className="w-full h-full" />
=======
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${gradientClass} p-2 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <IconComponent className="w-full h-full" />
                    </div>

                    {/* النص */}
                    <div className="flex-1">
                      <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {cleanText}
                      </span>

                      {/* نقاط إضافية للثقة */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileHover={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <span className="text-xs text-gray-500 dark:text-gray-400">✓ ضمان الجودة</span>
                      </motion.div>
>>>>>>> 6b0f7410fa10801cb29b683cf6e81bde0bc0b564
                    </div>

                    {/* النص - بدون أي hover effects */}
                    <div className="flex-1">
                      <span className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {cleanText}
                      </span>
                    </div>

<<<<<<< HEAD
                    {/* علامة النجاح الصغيرة - ثابتة */}
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
=======
                  {/* تأثير لمعان عند الهوفر */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
>>>>>>> 6b0f7410fa10801cb29b683cf6e81bde0bc0b564
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* شريط إضافي للإحصائيات السريعة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200 dark:border-gray-700"
        >
          {[
            { icon: Clock, label: "تسليم سريع", value: "خلال أيام", color: "from-violet-600 to-fuchsia-600" },
            { icon: Headphones, label: "دعم فني", value: "24/7", color: "from-blue-600 to-cyan-600" },
            { icon: Award, label: "ضمان", value: "استعادة الحقوق", color: "from-amber-600 to-orange-600" },
          ].map((item, index) => {
            const StatIcon = item.icon;
            return (
              <motion.div
                key={`stat-${index}`}
                whileHover={{ y: -2 }}
                className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400"
              >
                <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${item.color} p-1 text-white`}>
                  <StatIcon className="w-full h-full" />
                </div>
                <span className="text-xs">
                  <span className="font-medium text-gray-900 dark:text-white">{item.value}</span>{" "}
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

<<<<<<< HEAD
        {/* شعار الثقة الإضافي - بدون رموز تعبيرية */}
=======
        {/* شعار الثقة الإضافي */}
>>>>>>> 6b0f7410fa10801cb29b683cf6e81bde0bc0b564
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="flex justify-center gap-2 py-2 text-xs text-gray-400 dark:text-gray-500"
        >
          <Sparkles className="w-3 h-3" />
<<<<<<< HEAD
          <span>موثوق من أكثر من 20 عميل</span>
=======
          <span>موثوق من أكثر من ٢٠ عميل</span>
>>>>>>> 6b0f7410fa10801cb29b683cf6e81bde0bc0b564
          <Heart className="w-3 h-3" />
        </motion.div>
      </Container>
    </div>
  );
}
