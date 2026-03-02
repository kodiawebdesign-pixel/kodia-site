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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";

// توسيع بيانات الباقات مع أيقونات وتفاصيل إضافية
const packagesData = siteData.home.packages;

// ألوان متدرجة لكل باقة
const gradientColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-amber-500 to-orange-500",
  "from-emerald-500 to-teal-500",
];

// ✅ أيقونات مميزة لكل باقة (Typed)
const packageIcons: LucideIcon[] = [Rocket, Zap, Award, Star];

// مميزات إضافية لكل باقة
const extraFeatures: Record<string, string[]> = {
  "موقع تعريفي": ["دعم فني ٣٠ يوم", "تدريب على الإدارة", "ضمان الجودة"],
  "موقع شركة متقدم": ["دعم فني ٦٠ يوم", "تحليلات متقدمة", "تحسين SEO", "تحديثات مجانية"],
  "متجر إلكتروني": ["دعم فني ٩٠ يوم", "تدريب متقدم", "بوابات دفع", "تقارير مبيعات"],
};

// شارات خاصة للباقات
const packageBadges: Record<string, string> = {
  "موقع تعريفي": "للبداية",
  "موقع شركة متقدم": "الأكثر طلباً",
  "متجر إلكتروني": "احترافي",
};

export default function Pricing() {
  const p = siteData.home.packages ?? packagesData;

  return (
    <Section title={p.title} subtitle={p.subtitle} badge="الأسعار">
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
          const extra = extraFeatures[pkg.name] || ["دعم فني", "ضمان", "تحديثات"];
          const badge = packageBadges[pkg.name] || "مميزة";

          return (
            <motion.div
              key={pkg.name}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
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
              }}
              whileHover={{ y: -12, scale: 1.03 }}
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
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-xl opacity-50" />
                    <div className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full shadow-2xl">
                      <Star className="w-5 h-5 fill-white" />
                      <span className="text-sm font-bold whitespace-nowrap">الأكثر طلباً</span>
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* بطاقة السعر */}
              <div
                className={`relative bg-white rounded-3xl border-2 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  isPopular ? "border-purple-200" : "border-gray-200/50"
                }`}
              >
                {/* خلفية متدرجة متحركة */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* رأس الباقة */}
                <div
                  className={`relative p-6 text-center border-b ${
                    isPopular ? "bg-gradient-to-r from-purple-50 to-pink-50" : "bg-gray-50"
                  }`}
                >
                  {/* أيقونة الباقة */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${gradient} p-4 text-white shadow-lg`}
                  >
                    <IconComponent className="w-full h-full" />
                  </motion.div>

                  {/* اسم الباقة */}
                  <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>

                  {/* شارة الباقة */}
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      isPopular ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {badge}
                  </span>

                  {/* السعر */}
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
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
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
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
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="text-xs font-semibold text-gray-500 mb-2">مميزات إضافية:</h4>
                      <div className="space-y-2">
                        {extra.map((item, eidx) => (
                          <div key={eidx} className="flex items-center gap-2 text-xs text-gray-600">
                            <Gift className="w-3 h-3 text-purple-500" />
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
                          isPopular ? "shadow-purple-200" : ""
                        }`}
                      >
                        {pkg.cta.label}
                      </button>
                    </Link>
                  </motion.div>

                  {/* ضمان الجودة */}
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                    <Shield className="w-3 h-3" />
                    <span>ضمان استعادة الحقوق</span>
                  </div>
                </div>

                {/* خط علوي متدرج للباقة المميزة */}
                {isPopular && (
                  <motion.div
                    animate={{
                      background: [
                        "linear-gradient(90deg, #a855f7, #ec4899, #a855f7)",
                        "linear-gradient(90deg, #ec4899, #a855f7, #ec4899)",
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
        className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100"
      >
        <h3 className="text-lg font-bold mb-4 text-center">مقارنة سريعة بين الباقات</h3>

        <div className="grid grid-cols-4 gap-4 text-sm">
          <div className="font-medium text-gray-600">الميزة</div>
          {(p.items ?? []).map((pkg) => (
            <div key={pkg.name} className="font-bold text-center">
              {pkg.name}
            </div>
          ))}

          {["عدد الصفحات", "تصميم متجاوب", "SEO أساسي", "دعم فني", "تدريب", "تحديثات"].map((feature, idx) => (
            <div key={idx} className="contents">
              <div className="text-gray-600 py-2">{feature}</div>
              {(p.items ?? []).map((pkg, pidx) => {
                const hasFeature = idx < (pkg.features ?? []).length;
                return (
                  <div key={pidx} className="text-center py-2">
                    {hasFeature ? <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </motion.div>

      {/* إحصائيات سريعة */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { icon: Users, label: "عملاء شهرياً", value: "١٠+" },
          { icon: Clock, label: "مدة التنفيذ", value: "٧-٣٠ يوم" },
          { icon: Heart, label: "رضا العملاء", value: "٩٨٪" },
          { icon: Award, label: "باقة مميزة", value: "Pro" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            className="text-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
          >
            <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-gray-900">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* ملاحظة مهمة */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-8 text-xs text-gray-500 text-center bg-white p-4 rounded-xl border border-gray-100"
      >
        <Shield className="w-4 h-4 inline-block ml-1 text-blue-500" />
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Headphones className="w-5 h-5" />
            <span>احصل على استشارة مجانية لاختيار الباقة المناسبة</span>
          </motion.button>
        </Link>
      </motion.div>
    </Section>
  );
}