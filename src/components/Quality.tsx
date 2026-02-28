"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Search,
  Code2,
  Users,
  Heart,
  Gauge,
  Shield,
  Award,
  Sparkles,
  CheckCircle2,
  Star,
  Target,
  Zap,
  Clock,
  Rocket,
  Gem
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";
import Link from "next/link";

// توسيع بيانات الجودة مع أيقونات وتفاصيل إضافية
const qualityData = siteData.home.quality;

// خريطة الأيقونات لكل معيار جودة - محدثة
const iconMap: Record<string, any> = {
  "سرعة التحميل": Gauge,
  "سرعة تحميل عالية": Gauge,
  "توافق مع الأجهزة": Smartphone,
  "تحسين محركات البحث": Search,
  "كود نظيف": Code2,
  "تجربة مستخدم": Users,
  "أمان عالي": Shield,
  "تصميم جذاب": Heart,
  "إمكانية الوصول": Target,
};

// ألوان متدرجة لكل معيار - محدثة بالبنفسجي
const gradientColors = [
  "from-violet-600 to-fuchsia-600",
  "from-blue-600 to-cyan-600",
  "from-emerald-600 to-teal-600",
  "from-amber-600 to-orange-600",
  "from-indigo-600 to-purple-600",
  "from-rose-600 to-pink-600",
  "from-fuchsia-600 to-pink-600",
  "from-green-600 to-emerald-600",
];

// مؤشرات الأداء لكل معيار - محدثة
const performanceIndicators = [
  { value: "٩٨٪", label: "سرعة التحميل", color: "from-violet-600 to-fuchsia-600" },
  { value: "١٠٠٪", label: "توافق", color: "from-blue-600 to-cyan-600" },
  { value: "٩٥٪", label: "تحسين SEO", color: "from-emerald-600 to-teal-600" },
  { value: "٩٩٪", label: "نظافة الكود", color: "from-amber-600 to-orange-600" },
  { value: "٩٧٪", label: "رضا المستخدم", color: "from-purple-600 to-pink-600" },
  { value: "١٠٠٪", label: "أمان", color: "from-indigo-600 to-violet-600" },
  { value: "٩٦٪", label: "تصميم", color: "from-rose-600 to-red-600" },
  { value: "٩٨٪", label: "إمكانية الوصول", color: "from-green-600 to-emerald-600" },
];

// fallback آمن لمؤشر الأداء
const fallbackIndicator = { value: "٩٥٪", label: "أداء", color: "from-violet-600 to-fuchsia-600" };

// شهادات الجودة - محدثة
const qualityBadges = [
  { icon: Award, label: "معتمد", color: "from-amber-600 to-orange-600", desc: "جودة موثقة" },
  { icon: Shield, label: "موثوق", color: "from-violet-600 to-fuchsia-600", desc: "ضمان كامل" },
  { icon: Star, label: "ممتاز", color: "from-blue-600 to-cyan-600", desc: "تقييم ٥ نجوم" },
  { icon: Gem, label: "فاخر", color: "from-emerald-600 to-teal-600", desc: "تصميم راقي" },
];

// إحصائيات الجودة - محدثة
const stats = [
  { icon: Gauge, label: "سرعة التحميل", value: "< ٢ث", desc: "أقل من ثانيتين", color: "from-violet-600 to-fuchsia-600" },
  { icon: Smartphone, label: "توافق", value: "١٠٠٪", desc: "جميع الأجهزة", color: "from-blue-600 to-cyan-600" },
  { icon: Search, label: "تحسين SEO", value: "٩٥٪", desc: "تحسين متقدم", color: "from-emerald-600 to-teal-600" },
  { icon: Users, label: "رضا العملاء", value: "٩٨٪", desc: "تقييمات إيجابية", color: "from-amber-600 to-orange-600" },
  { icon: Shield, label: "أمان", value: "١٠٠٪", desc: "حماية كاملة", color: "from-purple-600 to-pink-600" },
  { icon: Heart, label: "تصميم", value: "٩٧٪", desc: "جاذبية عالية", color: "from-indigo-600 to-violet-600" },
];

export default function Quality() {
  const q = siteData.home.quality ?? qualityData;

  return (
    <Section 
      title={q.title} 
      subtitle={q.subtitle} 
      badge="معايير الجودة"
      className="bg-gradient-to-b from-white to-violet-50/30 dark:from-gray-950 dark:to-violet-950/20"
    >
      {/* شبكة معايير الجودة */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {(q.items ?? []).map((item, idx) => {
          const IconComponent = iconMap[item.title as keyof typeof iconMap] || Target;
          const gradient = gradientColors[idx % gradientColors.length];

          // ✅ safe indicator
          const indicator =
            performanceIndicators.length > 0
              ? performanceIndicators[idx % performanceIndicators.length] ?? fallbackIndicator
              : fallbackIndicator;

          return (
            <motion.div
              key={item.title}
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
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* شارة الجودة */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r ${gradient} text-white text-xs font-bold rounded-full shadow-lg`}
                  >
                    <Sparkles className="w-3 h-3" />
                    معيار {idx + 1}
                  </span>
                </div>

                {/* محتوى البطاقة */}
                <div className="p-6">
                  {/* أيقونة الجودة مع تأثيرات */}
                  <div className={`relative w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${gradient} p-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent className="w-full h-full" />

                    {/* تأثير نبض */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} -z-10 blur-md`}
                    />
                  </div>

                  {/* عنوان المعيار */}
                  <h3 className="text-lg font-bold mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  {/* وصف المعيار */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{item.desc}</p>

                  {/* مؤشر الأداء */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400">معدل الأداء</span>
                      <span className={`text-sm font-bold bg-gradient-to-r ${indicator.color} bg-clip-text text-transparent`}>
                        {indicator.value}
                      </span>
                    </div>

                    {/* شريط التقدم */}
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: indicator.value }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1, duration: 1 }}
                        className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
                      />
                    </div>

                    {/* نقاط إضافية تظهر عند الهوفر */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 border-t border-gray-100 dark:border-gray-700 space-y-2">
                        {["✓ اختبارات أداء", "✓ معايير عالمية", "✓ ضمان الجودة"].map((point, pidx) => (
                          <div key={pidx} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <CheckCircle2 className="w-3 h-3 text-green-500" />
                            {point}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
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

      {/* شهادات الجودة */}
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
        className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        {qualityBadges.map((badge, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -4 }}
            className={`relative bg-gradient-to-br ${badge.color} rounded-2xl p-6 text-white shadow-xl overflow-hidden group`}
          >
            {/* خلفية متحركة */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 2, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 bg-white/10"
            />

            <div className="relative z-10 text-center">
              <badge.icon className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-1">{badge.label}</h3>
              <p className="text-sm opacity-90">{badge.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* إحصائيات الجودة */}
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
        className="mt-12 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 rounded-2xl p-8 border border-violet-100 dark:border-violet-800"
      >
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.slice(0, 6).map((stat, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -4 }}
              className="text-center"
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} p-2.5 text-white`}>
                <stat.icon className="w-full h-full" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* التزام الجودة */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
          <Shield className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">نلتزم بأعلى معايير الجودة في كل مشروع</span>
          <Award className="w-5 h-5 text-amber-500" />
        </div>
      </motion.div>

      {/* شعارات إضافية */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="mt-8 flex flex-wrap justify-center gap-6"
      >
        {[
          { icon: Zap, text: "تنفيذ سريع" },
          { icon: Clock, text: "تسليم في الموعد" },
          { icon: Rocket, text: "تقنيات حديثة" },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <item.icon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span>{item.text}</span>
          </div>
        ))}
      </motion.div>

      {/* زر طلب الخدمة */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="text-center mt-8"
      >
        <Link href="/quote">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            <span>احصل على جودة مضمونة</span>
          </motion.button>
        </Link>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
          * ضمان الجودة • تنفيذ احترافي • دعم فني
        </p>
      </motion.div>
    </Section>
  );
}
