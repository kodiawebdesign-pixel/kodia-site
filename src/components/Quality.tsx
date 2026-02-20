"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
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
  Target
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";

// توسيع بيانات الجودة مع أيقونات وتفاصيل إضافية
const qualityData = siteData.home.quality;

// خريطة الأيقونات لكل معيار جودة
const iconMap: Record<string, any> = {
  "سرعة تحميل عالية": Gauge,
  "متجاوب بالكامل": Smartphone,
  "SEO أساسي": Search,
  "كود منظم": Code2,
  "تجربة مستخدم قوية": Users,
  "متابعة بعد الإطلاق": Heart,
};

// ألوان متدرجة لكل معيار
const gradientColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-amber-500",
  "from-indigo-500 to-blue-500",
  "from-rose-500 to-red-500",
];

// مؤشرات الأداء لكل معيار
const performanceIndicators = [
  { value: "٩٨٪", label: "سرعة التحميل", color: "text-green-500" },
  { value: "١٠٠٪", label: "توافق", color: "text-blue-500" },
  { value: "٩٥٪", label: "تحسين", color: "text-purple-500" },
  { value: "٩٩٪", label: "نظافة الكود", color: "text-emerald-500" },
  { value: "٩٧٪", label: "رضا المستخدم", color: "text-orange-500" },
  { value: "١٠٠٪", label: "دعم", color: "text-rose-500" },
];

// شهادات الجودة
const qualityBadges = [
  { icon: Award, label: "معتمد", color: "from-yellow-400 to-orange-400" },
  { icon: Shield, label: "موثوق", color: "from-blue-400 to-indigo-400" },
  { icon: Star, label: "ممتاز", color: "from-purple-400 to-pink-400" },
];

export default function Quality() {
  const q = siteData.home.quality;

  return (
    <Section 
      title={q.title} 
      subtitle={q.subtitle}
      badge="معايير الجودة"
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
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {q.items.map((item, idx) => {
          const IconComponent = iconMap[item.title as keyof typeof iconMap] || Target;
          const gradient = gradientColors[idx % gradientColors.length];
          const indicator = performanceIndicators[idx % performanceIndicators.length];

          return (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }
                },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl border border-gray-200/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* خلفية متدرجة متحركة */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* شارة الجودة */}
                <div className="absolute top-3 right-3">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${gradient} text-white text-xs font-bold rounded-full shadow-lg`}>
                    <Sparkles className="w-3 h-3" />
                    معيار {idx + 1}
                  </span>
                </div>

                {/* محتوى البطاقة */}
                <div className="p-6">
                  {/* أيقونة الجودة مع تأثيرات */}
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

                  {/* عنوان المعيار */}
                  <h3 className="text-lg font-bold mb-2 group-hover:text-gray-900 transition-colors">
                    {item.title}
                  </h3>

                  {/* وصف المعيار */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {/* مؤشر الأداء */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">معدل الأداء</span>
                      <span className={`text-sm font-bold ${indicator.color}`}>
                        {indicator.value}
                      </span>
                    </div>

                    {/* شريط التقدم */}
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
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
                      whileHover={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 border-t border-gray-100 space-y-2">
                        {[
                          "✓ اختبارات أداء",
                          "✓ معايير عالمية",
                          "✓ ضمان الجودة",
                        ].map((point, pidx) => (
                          <div key={pidx} className="flex items-center gap-2 text-xs text-gray-600">
<CheckCircle2 className="w-3 h-3 text-blue-600" />                            {point}
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
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* شهادات الجودة */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {qualityBadges.map((badge, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4, scale: 1.02 }}
            className={`relative bg-gradient-to-br ${badge.color} rounded-2xl p-6 text-white shadow-xl overflow-hidden group`}
          >
            {/* خلفية متحركة */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 bg-white/10"
            />

            <div className="relative z-10 text-center">
              <badge.icon className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-1">{badge.label}</h3>
              <p className="text-sm opacity-90">معتمد من فريق Kodia</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* إحصائيات الجودة */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
      >
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Gauge, label: "سرعة التحميل", value: "< ٢ث", desc: "أقل من ثانيتين" },
            { icon: Smartphone, label: "توافق", value: "١٠٠٪", desc: "جميع الأجهزة" },
            { icon: Search, label: "SEO", value: "٩٥٪", desc: "تحسين متقدم" },
            { icon: Users, label: "رضا العملاء", value: "٩٨٪", desc: "تقييمات إيجابية" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm font-medium text-gray-700 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* التزام الجودة */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm">
          <Shield className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium">نلتزم بأعلى معايير الجودة في كل مشروع</span>
          <Award className="w-5 h-5 text-yellow-500" />
        </div>
      </motion.div>

      {/* زر طلب الخدمة */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="text-center mt-8"
      >
        <button
          onClick={() => window.location.href = "/quote"}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <Sparkles className="w-5 h-5" />
          <span>احصل على جودة مضمونة</span>
        </button>
      </motion.div>
    </Section>
  );
}