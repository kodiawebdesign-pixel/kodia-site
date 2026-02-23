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
} from "lucide-react";
import Container from "./Container";
import { siteData } from "@/lib/siteData";

// أيقونات متنوعة لكل عنصر
const iconMap = {
  "تصميم UI/UX احترافي": Smartphone,
  "متجاوب على كل الأجهزة": Smartphone,
  "تهيئة SEO أساسية": Zap,
  "تسليم منظم + دعم": Headphones,
  "ضمان استعادة الحقوق": Shield,
  "✨ تصميم UI/UX احترافي": Smartphone,
  "📱 متجاوب على كل الأجهزة": Smartphone,
  "🚀 تهيئة SEO وسرعة": Rocket,
  "🛠️ تسليم منظم + دعم": Headphones,
  "💯 ضمان استعادة الحقوق": Shield,
} as const;

// ألوان متنوعة لكل عنصر
const colorClasses = [
  "from-blue-500 to-blue-600",
  "from-purple-500 to-purple-600",
  "from-emerald-500 to-emerald-600",
  "from-orange-500 to-orange-600",
  "from-pink-500 to-pink-600",
  "from-indigo-500 to-indigo-600",
];

export default function TrustBar() {
  const items = siteData.home.trustBar.items as string[];

  // ✅ Variants typed
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

  // ✅ Variants typed + type literal
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // تنظيف النص من الإيموجي للاستخدام في الأيقونة
  const getCleanText = (text: string) => {
    return text.replace(/[✨📱🚀🛠️💯✅⚡]/g, "").trim();
  };

  return (
    <div className="relative border-y bg-gradient-to-r from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* خلفية متحركة خفيفة */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.03)_0%,transparent_50%)]" />
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-5"
        >
          {items.map((item, index) => {
            const cleanText = getCleanText(item);

            const IconComponent =
              (iconMap as Record<string, any>)[item] ?? CheckCircle2;

            const colorClass = colorClasses[index % colorClasses.length];

            return (
              <motion.div
                key={item}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                  transition: {
                    type: "spring" as const,
                    stiffness: 400,
                    damping: 17,
                  },
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />

                <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-4 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* خط علوي متحرك */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClass}`}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />

                  <div className="flex items-center gap-3">
                    {/* أيقونة مع خلفية متدرجة */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${colorClass} p-2 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <IconComponent className="w-full h-full" />
                    </motion.div>

                    {/* النص */}
                    <div className="flex-1">
                      <motion.span className="block text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                        {cleanText}
                      </motion.span>

                      {/* نقاط إضافية للثقة */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileHover={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <span className="text-xs text-gray-500">✓ ضمان الجودة</span>
                      </motion.div>
                    </div>

                    {/* علامة النجاح الصغيرة */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex-shrink-0"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </motion.div>
                  </div>

                  {/* تأثير لمعان عند الهوفر */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* شريط إضافي للإحصائيات السريعة (اختياري) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-4 py-6 border-t border-gray-100"
        >
          {[
            { icon: Clock, label: "تسليم سريع", value: "خلال أيام" },
            { icon: Headphones, label: "دعم فني", value: "24/7" },
            { icon: Award, label: "ضمان", value: "استعادة الحقوق" },
          ].map((item, index) => {
            const StatIcon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="flex items-center justify-center gap-2 text-gray-600"
              >
                <StatIcon className="w-4 h-4 text-blue-500" />
                <span className="text-xs">
                  <span className="font-medium text-gray-900">{item.value}</span>{" "}
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </div>
  );
}