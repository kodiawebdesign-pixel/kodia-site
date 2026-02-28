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
  Target,
  Zap,
  Rocket,
  Shield,
  Award,
  Star
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";
import Link from "next/link";

// خريطة الأيقونات لكل خطوة - محدثة
const iconMap = [
  Users,      // تحليل المتطلبات
  Palette,    // تصميم UI/UX
  Code2,      // التطوير والبرمجة
  TestTube,   // الاختبار والتسليم
  Heart,      // الدعم والتحسين
  Rocket,     // إطلاق المشروع
];

// ألوان متدرجة لكل خطوة - محدثة بالبنفسجي
const gradientColors = [
  "from-violet-600 to-fuchsia-600",
  "from-blue-600 to-cyan-600",
  "from-emerald-600 to-teal-600",
  "from-amber-600 to-orange-600",
  "from-purple-600 to-pink-600",
  "from-indigo-600 to-violet-600",
];

// أيقونات المميزات لكل خطوة - محدثة
const stepFeatures = [
  ["فهم النشاط التجاري", "تحليل الجمهور المستهدف", "تحديد الأهداف"],
  ["تصميم wireframes", "تصميم واجهات UI", "تجربة مستخدم UX"],
  ["برمجة نظيفة", "تصميم متجاوب", "أداء عالي وسرعة"],
  ["اختبار شامل", "مراجعة العميل", "تسليم نهائي"],
  ["متابعة مستمرة", "تحسينات دورية", "دعم فني 24/7"],
  ["إطلاق رسمي", "تدريب الفريق", "تحليل النتائج"],
];

// المدة الزمنية لكل خطوة
const stepDurations = ["٢-٤ أيام", "٣-٥ أيام", "٥-١٠ أيام", "٢-٣ أيام", "مستمر", "يوم واحد"];

export default function HowWeWork() {
  const w = siteData.home.howWeWork;

  // ✅ ضمان إن steps دايمًا Array
  const steps = w?.steps ?? [];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <Section 
      title={w?.title ?? "كيف نعمل؟"} 
      subtitle={w?.subtitle ?? "منهجية عمل واضحة تضمن نتائج مبهرة في كل مشروع"} 
      badge="منهجية العمل"
      className="bg-gradient-to-b from-white to-violet-50/30 dark:from-gray-950 dark:to-violet-950/20"
    >
      <div ref={containerRef} className="relative">
        {/* خط زمني متحرك - للشاشات الكبيرة */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 origin-left hidden lg:block"
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
              className={`w-5 h-5 rounded-full bg-gradient-to-r ${
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
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 relative z-10"
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
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* بطاقة الخطوة */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                  {/* خلفية متدرجة متحركة */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 dark:opacity-0 dark:group-hover:opacity-10 transition-opacity duration-500`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* رقم الخطوة */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${gradient} text-white text-sm font-bold shadow-lg`}
                    >
                      {idx + 1}
                    </span>
                  </div>

                  {/* أيقونة الخطوة مع تأثيرات */}
                  <div className={`relative w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${gradient} p-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent className="w-full h-full" />

                    {/* تأثير نبض */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} -z-10 blur-md`}
                    />
                  </div>

                  {/* عنوان الخطوة */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors text-gray-900 dark:text-white">
                    {step?.title ?? ""}
                  </h3>

                  {/* وصف الخطوة */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{step?.desc ?? ""}</p>

                  {/* مميزات الخطوة - تظهر عند الهوفر */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                      {features.map((feature, fidx) => (
                        <motion.div
                          key={`feature-${idx}-${fidx}`}
                          initial={{ x: -20, opacity: 0 }}
                          whileHover={{ x: 0, opacity: 1 }}
                          transition={{ delay: fidx * 0.1 }}
                          className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
                        >
                          <CheckCircle2 className={`w-4 h-4 text-violet-600 dark:text-violet-400`} />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* المدة الزمنية المقدرة */}
                  <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>
                      المدة: {stepDurations[idx % stepDurations.length]}
                    </span>
                  </div>

                  {/* خط سفلي متدرج */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: "right" }}
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
                      <ArrowLeft className="w-6 h-6 text-gray-300 dark:text-gray-600" />
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute inset-0 text-violet-600 dark:text-violet-400"
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
        className="mt-16 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 rounded-2xl p-8 border border-violet-100 dark:border-violet-800"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* الجانب الأيسر - إحصائيات */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs rounded-full">
                منهجيتنا
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              منهجية عمل{" "}
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                احترافية
              </span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              نتبع خطوات واضحة ومنظمة لضمان تنفيذ مشروعك بأعلى جودة وفي الوقت المحدد. كل خطوة تخضع للمراجعة والتقييم قبل
              الانتقال للخطوة التالية.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "خطوة منظمة", value: steps.length, color: "from-violet-600 to-fuchsia-600" },
                { label: "أيام تنفيذ", value: "١٤-٣٠", color: "from-blue-600 to-cyan-600" },
                { label: "مراجعات", value: "٣+", color: "from-amber-600 to-orange-600" },
                { label: "ضمان", value: "شهر", color: "from-green-600 to-emerald-600" },
              ].map((stat, idx) => (
                <div key={`stat-${idx}`} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 text-center border border-gray-200 dark:border-gray-700">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
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
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{step?.title ?? ""}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{idx * 20 + 20}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
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
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className="text-xs text-gray-600 dark:text-gray-400">نضمن لك الشفافية في كل خطوة</span>
          <CheckCircle2 className="w-4 h-4 text-green-500" />
        </div>
      </motion.div>

      {/* إحصائيات إضافية */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { icon: Target, label: "دقة التنفيذ", value: "٩٩٪", color: "from-violet-600 to-fuchsia-600" },
          { icon: Zap, label: "سرعة الإنجاز", value: "أقل من المتوقع", color: "from-blue-600 to-cyan-600" },
          { icon: Shield, label: "ضمان الجودة", value: "١٠٠٪", color: "from-amber-600 to-orange-600" },
          { icon: Award, label: "رضا العملاء", value: "٩٨٪", color: "from-green-600 to-emerald-600" },
        ].map((stat, idx) => (
          <motion.div
            key={`stat-extra-${idx}`}
            whileHover={{ y: -4 }}
            className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
          >
            <div className={`w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-br ${stat.color} p-1.5 text-white`}>
              <stat.icon className="w-full h-full" />
            </div>
            <div className="text-sm font-bold text-gray-900 dark:text-white">{stat.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* زر التواصل */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="text-center mt-8"
      >
        <Link href="/quote">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span>ابدأ رحلتك الآن</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </Link>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
          * استشارة مجانية • رد خلال ٢٤ ساعة • ضمان الجودة
        </p>
      </motion.div>
    </Section>
  );
}
