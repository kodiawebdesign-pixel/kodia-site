"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  ShoppingBag,
  Smartphone,
  PenTool,
  TrendingUp,
  Settings,
  FileText,
  Shield,
  ArrowLeft,
  Sparkles,
  Zap,
  Star,
  Heart,
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";

// خريطة الأيقونات لكل خدمة
const iconMap: Record<string, any> = {
  "تصميم مواقع الشركات": Building2,
  "تصميم المتاجر الإلكترونية": ShoppingBag,
  "برمجة تطبيقات الهاتف": Smartphone,
  "UI/UX Design": PenTool,
  "تحسين محركات البحث (SEO)": TrendingUp,
  "الدعم الفني والصيانة": Settings,
  "كتابة المحتوى التسويقي": FileText,
  "استضافة وحماية": Shield,
};

// ألوان متدرجة لكل خدمة
const gradientColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-red-500",
  "from-indigo-500 to-blue-500",
  "from-amber-500 to-yellow-500",
  "from-rose-500 to-pink-500",
  "from-violet-500 to-purple-500",
];

// خلفيات متدرجة للبطاقات
const cardGradients = [
  "hover:from-blue-50 hover:to-indigo-50",
  "hover:from-purple-50 hover:to-pink-50",
  "hover:from-emerald-50 hover:to-teal-50",
  "hover:from-orange-50 hover:to-amber-50",
  "hover:from-indigo-50 hover:to-blue-50",
  "hover:from-amber-50 hover:to-yellow-50",
  "hover:from-rose-50 hover:to-pink-50",
  "hover:from-violet-50 hover:to-purple-50",
];

// شارات الخدمات
const serviceBadges: Record<string, string> = {
  "تصميم مواقع الشركات": "✨ الأكثر طلباً",
  "تصميم المتاجر الإلكترونية": "🔥 نمو سريع",
  "برمجة تطبيقات الهاتف": "📱 تقنية حديثة",
  "UI/UX Design": "🎨 إبداع",
  "تحسين محركات البحث (SEO)": "📈 نتائج مضمونة",
  "الدعم الفني والصيانة": "🛡️ دائم معك",
  "كتابة المحتوى التسويقي": "✍️ احترافي",
  "استضافة وحماية": "🔒 آمن وسريع",
};

export default function Services() {
  const { servicesIntro, services } = siteData.home;

  // متغيرات الحركة
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const, // ✅ Fix
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const safeServices = services ?? [];

  return (
    <Section
      title={servicesIntro?.title ?? ""}
      subtitle={servicesIntro?.subtitle ?? ""}
      badge="جميع الحلول الرقمية"
    >
      {/* شبكة الخدمات */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {safeServices.map((service, index) => {
          const IconComponent = iconMap[service.title] || Sparkles;
          const gradientClass = gradientColors[index % gradientColors.length];
          const cardGradient = cardGradients[index % cardGradients.length];
          const badge = serviceBadges[service.title] || "خدمة مميزة";
          const slug = service.slug || `/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`;

          return (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring" as const, stiffness: 400, damping: 17 }, // ✅ Fix
              }}
              className="group relative"
            >
              {/* بطاقة الخدمة */}
              <div
                className={`relative h-full bg-white rounded-2xl border border-gray-200/50 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${cardGradient}`}
              >
                {/* خلفية متحركة */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 0.1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* شارة الخدمة */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="absolute top-4 right-4"
                >
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-bold rounded-full shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    {badge}
                  </span>
                </motion.div>

                {/* الأيقونة مع تأثيرات */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`relative w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${gradientClass} p-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <IconComponent className="w-full h-full" />

                  {/* تأثير نبض حول الأيقونة */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradientClass} -z-10 blur-md`}
                  />
                </motion.div>

                {/* عنوان الخدمة */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-gray-900 transition-colors">
                  {service.title}
                </h3>

                {/* وصف الخدمة */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.desc}</p>

                {/* قائمة مميزات سريعة */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mb-4"
                >
                  <div className="space-y-2 pt-2">
                    {["⚡ تنفيذ احترافي", "🎨 تصميم جذاب", "📱 متجاوب بالكامل"].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2 text-xs text-gray-600"
                      >
                        <span className="w-1 h-1 bg-blue-500 rounded-full" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* رابط الخدمة */}
                <Link href={slug}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors"
                  >
                    <span>اطلب الخدمة</span>
                    <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>

                {/* خط سفلي متحرك */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* قسم إضافي: إحصائيات الخدمات */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { icon: Zap, label: "خدمة سريعة", value: "خلال 24 ساعة" },
          { icon: Heart, label: "عملاء سعداء", value: "10+" },
          { icon: Star, label: "تقييم ممتاز", value: "5/5" },
          { icon: Shield, label: "ضمان الجودة", value: "100%" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4 }}
            className="text-center p-4 bg-gradient-to-b from-gray-50 to-white rounded-xl border border-gray-100"
          >
            <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-gray-900">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* رابط عرض كل الخدمات */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center mt-12"
      >
        <Link href="/services">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span>استعرض جميع الخدمات</span>
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
        </Link>
      </motion.div>
    </Section>
  );
}