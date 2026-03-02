"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Palette,
  Code2,
  TestTube,
  Heart,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";

// خريطة الأيقونات لكل خطوة
const iconMap = [
  Users, // تحليل المتطلبات
  Palette, // تصميم UI/UX
  Code2, // التطوير والبرمجة
  TestTube, // الاختبار والتسليم
  Heart, // الدعم والتحسين
];

// ألوان متدرجة لكل خطوة
const gradientColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-amber-500",
  "from-indigo-500 to-blue-500",
  "from-rose-500 to-red-500",
];

// أيقونات المميزات لكل خطوة
const stepFeatures = [
  ["فهم النشاط", "تحليل الجمهور", "تحديد الأهداف"],
  ["wireframes", "تصميم واجهات", "تجربة مستخدم"],
  ["برمجة نظيفة", "responsive", "أداء عالي"],
  ["اختبار شامل", "مراجعة", "تسليم"],
  ["متابعة", "تحسينات", "دعم فني"],
];

export default function HowWeWork() {
  const w = siteData.home.howWeWork;

  // ✅ ضمان إن steps دايمًا Array حتى مع strict/noUncheckedIndexedAccess
  const steps = w?.steps ?? [];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <Section title={w?.title ?? ""} subtitle={w?.subtitle ?? ""} badge="منهجية العمل">
      {/* الخط الزمني المتقدم */}
      <div ref={containerRef} className="relative">
        {/* خط زمني متحرك */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left hidden lg:block"
          style={{ transformOrigin: "left" }}
        />

        {/* نقاط على الخط الزمني */}
        <div className="absolute top-[88px] left-0 right-0 hidden lg:flex justify-between px-4">
          {steps.map((_, idx) => (
            <motion.div
              key={`dot-${idx}`}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.8 + idx * 0.2, type: "spring" as const }}
              className={`w-4 h-4 rounded-full bg-gradient-to-r ${
                gradientColors[idx % gradientColors.length]
              } shadow-lg`}
            />
          ))}
        </div>

        {/* شبكة الخطوات */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10"
        >
          {steps.map((step, idx) => {
            const IconComponent = iconMap[idx] || Sparkles;
            const gradient = gradientColors[idx % gradientColors.length];

            // ✅ features دايمًا array
            const features = stepFeatures[idx % stepFeatures.length] ?? [];

            return (
              <motion.div
                key={`step-${idx}-${step?.title ?? "no-title"}`}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring" as const, // ✅ Fix TS
                      stiffness: 100,
                      damping: 15,
                    },
                  },
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* بطاقة الخطوة */}
                <div className="relative bg-white rounded-2xl border border-gray-200/50 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* خلفية متدرجة متحركة */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* رقم الخطوة */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r ${gradient} text-white text-sm font-bold shadow-lg`}
                    >
                      {idx + 1}
                    </span>
                  </div>

                  {/* أيقونة الخطوة مع تأثيرات */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`relative w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${gradient} p-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <IconComponent className="w-full h-full" />

                    {/* تأثير نبض */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} -z-10 blur-md`}
                    />
                  </motion.div>

                  {/* عنوان الخطوة */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gray-900 transition-colors">
                    {step?.title ?? ""}
                  </h3>

                  {/* وصف الخطوة */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{step?.desc ?? ""}</p>

                  {/* مميزات الخطوة */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      {features.map((feature, fidx) => (
                        <motion.div
                          key={`feature-${idx}-${fidx}`}
                          initial={{ x: -20, opacity: 0 }}
                          whileHover={{ x: 0, opacity: 1 }}
                          transition={{ delay: fidx * 0.1 }}
                          className="flex items-center gap-2 text-xs text-gray-600"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 bg-gradient-to-r ${gradient} text-white rounded-full p-0.5`}
                          />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* المدة الزمنية المقدرة */}
                  <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>
                      المدة: {idx + 1} - {idx + 3} أيام
                    </span>
                  </div>

                  {/* خط سفلي متدرج */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* سهم الاتصال بين الخطوات (لشاشات الكبيرة) */}
                {idx < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + idx * 0.2 }}
                    className="hidden lg:block absolute -left-3 top-1/2 transform -translate-y-1/2 z-20"
                  >
                    <div className="relative">
                      <ArrowLeft className="w-6 h-6 text-gray-400" />
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute inset-0 text-blue-500"
                      >
                        <ArrowLeft className="w-6 h-6" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ملخص سريع للعملية */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* الجانب الأيسر - إحصائيات */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              منهجية عمل{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                احترافية
              </span>
            </h3>
            <p className="text-gray-600 mb-6">
              نتبع خطوات واضحة ومنظمة لضمان تنفيذ مشروعك بأعلى جودة وفي الوقت المحدد. كل خطوة تخضع للمراجعة والتقييم قبل
              الانتقال للخطوة التالية.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "خطوة منظمة", value: steps.length },
                { label: "أيام تنفيذ", value: "١٤-٣٠" },
                { label: "مراجعات", value: "٣+" },
                { label: "ضمان", value: "شهر" },
              ].map((stat, idx) => (
                <div key={`stat-${idx}`} className="bg-white/50 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* الجانب الأيمن - شريط التقدم الوهمي */}
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <motion.div
                key={`progress-${idx}`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + idx * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-gray-700">{step?.title ?? ""}</span>
                  <span className="text-xs text-gray-500">{idx * 20 + 20}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(idx + 1) * 20}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + idx * 0.1, duration: 0.8 }}
                    className={`h-full bg-gradient-to-r ${gradientColors[idx % gradientColors.length]} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* شعار الثقة */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-xs text-gray-600">نضمن لك الشفافية في كل خطوة</span>
          <CheckCircle2 className="w-4 h-4 text-green-500" />
        </div>
      </motion.div>

      {/* زر التواصل */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9 }}
        className="text-center mt-8"
      >
        <button
          onClick={() => (window.location.href = "/quote")}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <span>ابدأ رحلتك الآن</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </Section>
  );
}