"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2,
  Star,
  Zap,
  Shield,
  Headphones,
  Sparkles,
  Gift,
  Award,
  Rocket,
  Heart,
  Clock,
  Users,
  Target,
  TrendingUp,
  Gem,
  Crown
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";

// توسيع بيانات الباقات مع أيقونات وتفاصيل إضافية
const packagesData = siteData.home.packages;

// ألوان متدرجة لكل باقة - محدثة بالبنفسجي
const gradientColors = [
  "from-violet-600 to-fuchsia-600",
  "from-fuchsia-600 to-pink-600",
  "from-amber-600 to-orange-600",
  "from-blue-600 to-cyan-600",
  "from-emerald-600 to-teal-600",
];

// ✅ أيقونات مميزة لكل باقة (Typed)
const packageIcons: LucideIcon[] = [Rocket, Zap, Award, Star, Crown];

// مميزات إضافية لكل باقة - محدثة
const extraFeatures: Record<string, string[]> = {
  "موقع تعريفي": ["دعم فني ٣٠ يوم", "تدريب على الإدارة", "ضمان الجودة", "تحديثات شهرية"],
  "موقع شركة متقدم": ["دعم فني ٦٠ يوم", "تحليلات متقدمة", "تحسين SEO", "تحديثات مجانية", "تقارير دورية"],
  "متجر إلكتروني": ["دعم فني ٩٠ يوم", "تدريب متقدم", "بوابات دفع", "تقارير مبيعات", "تكامل شحن"],
  "باقة احترافية": ["دعم VIP", "استشارات غير محدودة", "تحسين أداء", "حماية متقدمة", "نسخ احتياطي"],
};

// شارات خاصة للباقات - محدثة
const packageBadges: Record<string, string> = {
  "موقع تعريفي": "للبداية",
  "موقع شركة متقدم": "الأكثر طلباً",
  "متجر إلكتروني": "احترافي",
  "باقة احترافية": "VIP",
};

// إحصائيات إضافية
const stats = [
  { icon: Users, label: "عملاء شهرياً", value: "٢٠+", color: "from-violet-600 to-fuchsia-600" },
  { icon: Clock, label: "مدة التنفيذ", value: "٧-٣٠ يوم", color: "from-blue-600 to-cyan-600" },
  { icon: Heart, label: "رضا العملاء", value: "٩٨٪", color: "from-amber-600 to-orange-600" },
  { icon: Award, label: "باقة مميزة", value: "Pro", color: "from-green-600 to-emerald-600" },
];

// ميزات المقارنة
const comparisonFeatures = [
  "عدد الصفحات",
  "تصميم متجاوب",
  "SEO أساسي",
  "دعم فني",
  "تدريب",
  "تحديثات",
  "تحليلات",
  "بوابات دفع",
];

export default function Pricing() {
  const p = siteData.home.packages ?? packagesData;

  return (
    <Section 
      title={p.title} 
      subtitle={p.subtitle} 
      badge="الأسعار"
      className="bg-gradient-to-b from-white to-violet-50/30 dark:from-gray-950 dark:to-violet-950/20"
    >
      {/* شبكة الباقات */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="grid gap-8 lg:grid-cols-3 relative"
      >
        {(p.items ?? []).map((pkg, idx) => {
          const gradient = gradientColors[idx % gradientColors.length];
          const IconComponent: LucideIcon = packageIcons[idx % packageIcons.length] ?? Sparkles;

          const isPopular = idx === 1; // الباقة الثانية هي الأكثر طلباً
          const extra = extraFeatures[pkg.name] || ["دعم فني", "ضمان", "تحديثات", "جودة"];
          const badge = packageBadges[pkg.name] || "مميزة";

          return (
            <motion.div
              key={pkg.name}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {/* شارة الأكثر طلباً */}
              {isPopular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" as const }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 z-20"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-xl opacity-50" />
                    <div className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-full shadow-2xl">
                      <Star className="w-5 h-5 fill-white" />
                      <span className="text-sm font-bold whitespace-nowrap">الأكثر طلباً</span>
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* بطاقة السعر */}
              <div
                className={`relative bg-white dark:bg-gray-800 rounded-3xl border-2 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  isPopular ? "border-violet-300 dark:border-violet-700" : "border-gray-200 dark:border-gray-700"
                }`}
              >
                {/* خلفية متدرجة متحركة */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 dark:opacity-0 dark:group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* رأس الباقة */}
                <div
                  className={`relative p-6 text-center border-b ${
                    isPopular 
                      ? "bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-900/30 dark:to-fuchsia-900/30" 
                      : "bg-gray-50 dark:bg-gray-700"
                  }`}
                >
                  {/* أيقونة الباقة */}
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${gradient} p-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full" />
                  </div>

                  {/* اسم الباقة */}
                  <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">{pkg.name}</h3>

                  {/* شارة الباقة */}
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      isPopular 
                        ? "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300" 
                        : "bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    {badge}
                  </span>

                  {/* السعر */}
                  <div className="mt-4">
                    <span className={`text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                      {pkg.price}
                    </span>
                  </div>
                </div>

                {/* محتوى الباقة */}
                <div className="p-6">
                  {/* المميزات الأساسية */}
                  <div className="space-y-3 mb-6">
                    {(pkg.features ?? []).map((feature, fidx) => (
                      <motion.div
                        key={fidx}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + fidx * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* مميزات إضافية - تظهر عند الهوفر */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                      <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">مميزات إضافية:</h4>
                      <div className="space-y-2">
                        {extra.map((item, eidx) => (
                          <div key={eidx} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <Gift className="w-3 h-3 text-violet-500 dark:text-violet-400" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* زر الشراء */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-6">
                    <Link href={pkg.cta.href}>
                      <button
                        className={`w-full py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r ${gradient} ${
                          isPopular ? "shadow-violet-300/50" : ""
                        }`}
                      >
                        {pkg.cta.label}
                      </button>
                    </Link>
                  </motion.div>

                  {/* ضمان الجودة */}
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Shield className="w-3 h-3" />
                    <span>ضمان استعادة الحقوق</span>
                  </div>
                </div>

                {/* خط علوي متدرج للباقة المميزة */}
                {isPopular && (
                  <motion.div
                    animate={{
                      background: [
                        "linear-gradient(90deg, #8b5cf6, #ec4899, #8b5cf6)",
                        "linear-gradient(90deg, #ec4899, #8b5cf6, #ec4899)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-0 left-0 right-0 h-1"
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* جدول مقارنة الباقات */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 rounded-2xl p-6 border border-violet-100 dark:border-violet-800 overflow-x-auto"
      >
        <h3 className="text-lg font-bold mb-4 text-center text-gray-900 dark:text-white">مقارنة سريعة بين الباقات</h3>

        <div className="min-w-[600px]">
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div className="font-medium text-gray-600 dark:text-gray-400">الميزة</div>
            {(p.items ?? []).map((pkg) => (
              <div key={pkg.name} className="font-bold text-center text-gray-900 dark:text-white">
                {pkg.name}
              </div>
            ))}

            {comparisonFeatures.map((feature, idx) => (
              <div key={idx} className="contents">
                <div className="text-gray-600 dark:text-gray-400 py-2 border-t border-gray-200 dark:border-gray-700">{feature}</div>
                {(p.items ?? []).map((pkg, pidx) => {
                  const hasFeature = idx < (pkg.features ?? []).length;
                  return (
                    <div key={pidx} className="text-center py-2 border-t border-gray-200 dark:border-gray-700">
                      {hasFeature ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-gray-300 dark:text-gray-600">—</span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* إحصائيات سريعة */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.5,
            },
          },
        }}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -4 }}
            className="text-center p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
          >
            <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${stat.color} p-2 text-white`}>
              <stat.icon className="w-full h-full" />
            </div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* ملاحظة مهمة */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-8 text-xs text-gray-500 dark:text-gray-400 text-center bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
      >
        <Shield className="w-4 h-4 inline-block ml-1 text-violet-600 dark:text-violet-400" />
        {p.note}
      </motion.p>

      {/* زر طلب استشارة مجانية */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="text-center mt-8"
      >
        <Link href="/quote">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Headphones className="w-5 h-5" />
            <span>احصل على استشارة مجانية لاختيار الباقة المناسبة</span>
          </motion.button>
        </Link>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
          * استشارة بدون التزام • رد خلال ٢٤ ساعة
        </p>
      </motion.div>

      {/* شعارات الثقة */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-8 flex flex-wrap justify-center gap-6"
      >
        {[
          { icon: Target, text: "أسعار شفافة" },
          { icon: TrendingUp, text: "نتائج مضمونة" },
          { icon: Gem, text: "جودة عالية" },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <item.icon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span>{item.text}</span>
          </div>
        ))}
      </motion.div>
    </Section>
  );
}
