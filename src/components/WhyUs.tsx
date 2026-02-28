"use client";

import { motion } from "framer-motion";
import {
  PenTool,
  Zap,
  Search,
  Heart,
  MessageCircle,
  Shield,
  Star,
  Award,
  Users,
  Clock,
  Target,
  Rocket,
  CheckCircle2,
  Sparkles,
  ThumbsUp,
  Globe,
  Gem,
  Infinity,
  Gauge,
  Headphones,
  Palette,
  Code2,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  Settings,
  FileText,
  Lock
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";
import Link from "next/link";

// توسيع بيانات المميزات مع أيقونات وتفاصيل إضافية
const whyData = siteData.home?.why;

// بيانات افتراضية في حالة عدم وجود بيانات
const defaultWhy = {
  title: "لماذا نحن الخيار الأمثل؟",
  subtitle: "نحن لا نصنع مواقع فقط، بل نبني أدوات نجاح حقيقية",
  items: [
    { title: "تصميم UI/UX احترافي", desc: "نصمم مع التركيز على تحويل الزوار لعملاء", icon: "PenTool" },
    { title: "سرعة وأداء عالي", desc: "أوقات تحميل قياسية وتحسينات متقدمة", icon: "Zap" },
    { title: "تحسين محركات البحث", desc: "ظهور متقدم في جوجل يجلب زوار مجانيين", icon: "Search" },
    { title: "دعم مستمر", desc: "نبقى معك حتى بعد الإطلاق لضمان نجاحك", icon: "Heart" },
    { title: "تواصل شفاف", desc: "نبقيك على اطلاع بكل خطوة في المشروع", icon: "MessageCircle" },
    { title: "ضمان الجودة", desc: "نلتزم بالمواصفات ونضمن رضاك التام", icon: "Shield" },
  ]
};

// خريطة الأيقونات لكل ميزة
const iconMap: Record<string, any> = {
  "PenTool": PenTool,
  "Zap": Zap,
  "Search": Search,
  "Heart": Heart,
  "MessageCircle": MessageCircle,
  "Shield": Shield,
  "Palette": Palette,
  "Smartphone": Smartphone,
  "TrendingUp": TrendingUp,
  "Headphones": Headphones,
  "Rocket": Rocket,
  "Gauge": Gauge,
  "Award": Award,
  "Clock": Clock,
  "Target": Target,
  "Sparkles": Sparkles,
};

// ألوان متدرجة لكل ميزة
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

// إحصائيات إضافية لكل ميزة
const featureStats: Array<{ value: string; label: string; percent: number }> = [
  { value: "٩٨٪", label: "نسبة رضا", percent: 98 },
  { value: "١٠٠٪", label: "توافق", percent: 100 },
  { value: "٩٥٪", label: "تحسين", percent: 95 },
  { value: "٢٤/٧", label: "دعم", percent: 90 },
  { value: "٩٩٪", label: "جودة", percent: 99 },
  { value: "٩٧٪", label: "سرعة", percent: 97 },
  { value: "٩٦٪", label: "شفافية", percent: 96 },
  { value: "١٠٠٪", label: "ضمان", percent: 100 },
  { value: "٩٤٪", label: "ابتكار", percent: 94 },
  { value: "٩٨٪", label: "موثوقية", percent: 98 },
];

// إحصائيات عامة
const generalStats = [
  { icon: Users, label: "عميل سعيد", value: "٢٠+", color: "from-violet-600 to-fuchsia-600" },
  { icon: Clock, label: "سنوات خبرة", value: "٢+", color: "from-blue-600 to-cyan-600" },
  { icon: Award, label: "مشروع منجز", value: "٢٥+", color: "from-amber-600 to-orange-600" },
  { icon: ThumbsUp, label: "توصية", value: "٩٨٪", color: "from-green-600 to-emerald-600" },
];

// شارات إضافية
const trustBadges = [
  { icon: Globe, text: "خدمة عالمية", color: "from-violet-600 to-fuchsia-600" },
  { icon: Rocket, text: "تقنيات حديثة", color: "from-blue-600 to-cyan-600" },
  { icon: Heart, text: "دائمًا معك", color: "from-amber-600 to-orange-600" },
  { icon: Gem, text: "جودة فاخرة", color: "from-emerald-600 to-teal-600" },
  { icon: Infinity, text: "قابل للتوسع", color: "from-purple-600 to-pink-600" },
  { icon: Shield, text: "آمن وموثوق", color: "from-indigo-600 to-violet-600" },
];

const DEFAULT_STAT = { value: "—", label: "", percent: 0 };
const DEFAULT_GRADIENT = "from-violet-600 to-fuchsia-600";

export default function WhyUs() {
  // استخدام البيانات من siteData مع fallback للبيانات الافتراضية
  const why = siteData.home?.why || defaultWhy;
  
  // التأكد من أن items موجودة
  const items = why?.items || defaultWhy.items;

  // حماية إضافية
  const safeGradients = gradientColors.length ? gradientColors : [DEFAULT_GRADIENT];
  const safeStats = featureStats.length ? featureStats : [DEFAULT_STAT];

  return (
    <Section
      title={why.title}
      subtitle="اكتشف لماذا آلاف العملاء يثقون في خدماتنا"
      badge="مميزاتنا"
      className="bg-gradient-to-b from-white to-violet-50/30 dark:from-gray-950 dark:to-violet-950/20"
    >
      {/* شبكة المميزات */}
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
            },
          },
        }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {items.map((feature: any, idx: number) => {
          // التأكد من أن feature هو نص أو كائن
          const featureText = typeof feature === "string"
            ? feature
            : feature?.title || feature?.text || JSON.stringify(feature);

          // الحصول على الأيقونة المناسبة
          const IconComponent = (feature?.icon && iconMap[feature.icon]) || Star;
          const gradient = safeGradients[idx % safeGradients.length] ?? DEFAULT_GRADIENT;
          const stat = safeStats[idx % safeStats.length] ?? DEFAULT_STAT;

          return (
            <motion.div
              key={`feature-${idx}-${featureText.substring(0, 20)}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* خلفية متدرجة متحركة */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 dark:opacity-0 dark:group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* شارة الميزة */}
                <div className="absolute top-3 right-3 z-10">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r ${gradient} text-white text-xs font-bold rounded-full shadow-lg`}
                  >
                    <Sparkles className="w-3 h-3" />
                    ميزة {idx + 1}
                  </span>
                </div>

                {/* شارة الإحصائية */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full">
                    <Target className="w-3 h-3" />
                    {stat.value}
                  </span>
                </div>

                {/* محتوى البطاقة */}
                <div className="p-6">
                  {/* أيقونة الميزة مع تأثيرات */}
                  <div className={`relative w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${gradient} p-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent className="w-full h-full" />

                    {/* تأثير نبض */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} -z-10 blur-md`}
                    />
                  </div>

                  {/* نص الميزة */}
                  <h3 className="text-base font-bold mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors text-gray-900 dark:text-white">
                    {featureText}
                  </h3>

                  {/* شريط التقدم */}
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400">معدل الأداء</span>
                      <span
                        className={`text-xs font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                      >
                        {stat.value}
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.max(0, Math.min(100, stat.percent))}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1, duration: 1 }}
                        className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
                      />
                    </div>
                  </div>

                  {/* نقاط إضافية - تظهر عند الهوفر */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 border-t border-gray-100 dark:border-gray-700 space-y-2">
                      {["✓ ضمان الجودة", "✓ دعم فني مستمر", "✓ نتائج مضمونة"].map((point, pidx) => (
                        <div
                          key={`point-${idx}-${pidx}`}
                          className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
                        >
                          <CheckCircle2 className="w-3 h-3 text-green-500" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </motion.div>
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
            </motion.div>
          );
        })}
      </motion.div>

      {/* إحصائيات عامة */}
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
              delayChildren: 0.4,
            },
          },
        }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {generalStats.map((stat, idx) => (
          <motion.div
            key={`stat-${idx}`}
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

      {/* شهادة الجودة */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="mt-12 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 rounded-2xl p-8 border border-violet-100 dark:border-violet-800 text-center"
      >
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white">
              <Shield className="w-8 h-8" />
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-violet-500 rounded-2xl blur-xl -z-10"
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">لماذا تختار Kodia؟</h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
          لأننا نؤمن أن التصميم الجيد هو استثمار، وليس تكلفة. نساعدك على بناء هوية رقمية قوية تحقق
          أهدافك وتنمي أعمالك.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {trustBadges.slice(0, 3).map((item, idx) => (
            <motion.div
              key={`badge-${idx}`}
              whileHover={{ y: -2 }}
              className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${item.color} text-white rounded-full shadow-md`}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-xs font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* شعارات ثقة إضافية */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex flex-wrap justify-center gap-6"
      >
        {trustBadges.slice(3, 6).map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${item.color} p-1 text-white`}>
              <item.icon className="w-full h-full" />
            </div>
            <span>{item.text}</span>
          </div>
        ))}
      </motion.div>

      {/* زر التواصل */}
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Rocket className="w-5 h-5" />
            <span>ابدأ مشروعك الآن</span>
          </motion.button>
        </Link>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
          * استشارة مجانية • تنفيذ احترافي • دعم فني
        </p>
      </motion.div>
    </Section>
  );
}