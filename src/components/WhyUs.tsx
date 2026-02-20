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
  Globe
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";

// توسيع بيانات المميزات مع أيقونات وتفاصيل إضافية
const whyData = siteData.home.why;

// خريطة الأيقونات لكل ميزة
const iconMap: Record<string, any> = {
  "تصميم UI/UX احترافي يركز على التحويل": PenTool,
  "موقع سريع ومتجاوب على كل الأجهزة": Zap,
  "تهيئة أساسية لمحركات البحث": Search,
  "تسليم منظم + دعم فني بعد الإطلاق": Heart,
  "نحن لا نصنع مواقع فقط، بل نبني أدوات نجاح حقيقية": Rocket,
  "تصميم UI/UX احترافي": PenTool,
  "سرعة وأداء عالي": Zap,
  "تحسين محركات البحث": Search,
  "دعم مستمر": Heart,
  "تواصل شفاف": MessageCircle,
  "ضمان الجودة": Shield,
};

// ألوان متدرجة لكل ميزة
const gradientColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-amber-500",
  "from-indigo-500 to-blue-500",
  "from-rose-500 to-red-500",
  "from-violet-500 to-purple-500",
  "from-amber-500 to-yellow-500",
];

// إحصائيات إضافية لكل ميزة
const featureStats = [
  { value: "٩٨٪", label: "نسبة رضا" },
  { value: "١٠٠٪", label: "توافق" },
  { value: "٩٥٪", label: "تحسين" },
  { value: "٢٤/٧", label: "دعم" },
  { value: "٩٩٪", label: "جودة" },
  { value: "٩٧٪", label: "سرعة" },
  { value: "٩٦٪", label: "شفافية" },
  { value: "١٠٠٪", label: "ضمان" },
];

export default function WhyUs() {
  const { why } = siteData.home;

  return (
    <Section 
      title={why.title}
      subtitle="اكتشف لماذا آلاف العملاء يثقون في خدماتنا"
      badge="مميزاتنا"
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
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {why.items.map((feature, idx) => {
          // التأكد من أن feature هو نص
          const featureText = typeof feature === 'string' 
            ? feature 
            : (feature as any).title || (feature as any).text || JSON.stringify(feature);
          
          const IconComponent = iconMap[featureText] || Star;
          const gradient = gradientColors[idx % gradientColors.length];
          const stat = featureStats[idx % featureStats.length];

          return (
            <motion.div
              key={`feature-${idx}-${featureText.substring(0, 20)}`}
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

                {/* شارة الميزة */}
                <div className="absolute top-3 right-3">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${gradient} text-white text-xs font-bold rounded-full shadow-lg`}>
                    <Sparkles className="w-3 h-3" />
                    ميزة {idx + 1}
                  </span>
                </div>

                {/* شارة الإحصائية */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    <Target className="w-3 h-3" />
                    {stat.value}
                  </span>
                </div>

                {/* محتوى البطاقة */}
                <div className="p-6">
                  {/* أيقونة الميزة مع تأثيرات */}
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

                  {/* نص الميزة */}
                  <h3 className="text-base font-bold mb-3 group-hover:text-gray-900 transition-colors">
                    {featureText}
                  </h3>

                  {/* شريط التقدم */}
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">معدل الأداء</span>
                      <span className={`text-xs font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: stat.value }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1, duration: 1 }}
                        className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
                      />
                    </div>
                  </div>

                  {/* نقاط إضافية - تظهر عند الهوفر */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 border-t border-gray-100 space-y-2">
                      {[
                        "✓ ضمان الجودة",
                        "✓ دعم فني مستمر",
                        "✓ نتائج مضمونة",
                      ].map((point, pidx) => (
                        <div key={`point-${idx}-${pidx}`} className="flex items-center gap-2 text-xs text-gray-600">
<CheckCircle2 className="w-3 h-3 text-blue-600" />                          {point}
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
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* إحصائيات عامة */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { icon: Users, label: "عميل سعيد", value: "١٠+" },
          { icon: Clock, label: "سنوات خبرة", value: "٢+" },
          { icon: Award, label: "مشروع منجز", value: "١٥+" },
          { icon: ThumbsUp, label: "توصية", value: "٩٨٪" },
        ].map((stat, idx) => (
          <motion.div
            key={`stat-${idx}`}
            whileHover={{ y: -4 }}
            className="text-center p-4 bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-100 shadow-sm"
          >
            <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-gray-900">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* شهادة الجودة */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 text-center"
      >
        <div className="flex justify-center mb-4">
          <div className="relative">
            <Shield className="w-12 h-12 text-blue-600" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-blue-500 rounded-full blur-xl -z-10"
            />
          </div>
        </div>

        <h3 className="text-lg font-bold mb-2">لماذا تختار Kodia؟</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          لأننا نؤمن أن التصميم الجيد هو استثمار، وليس تكلفة. نساعدك على بناء هوية رقمية قوية تحقق أهدافك وتنمي أعمالك.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {[
            { icon: Globe, text: "خدمة عالمية" },
            { icon: Rocket, text: "تقنيات حديثة" },
            { icon: Heart, text: "دائمًا معك" },
          ].map((item, idx) => (
            <div key={`badge-${idx}`} className="flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm">
              <item.icon className="w-4 h-4 text-blue-600" />
              <span className="text-xs text-gray-600">{item.text}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* زر التواصل */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center mt-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = "/quote"}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Rocket className="w-5 h-5" />
          <span>ابدأ مشروعك الآن</span>
        </motion.button>
      </motion.div>
    </Section>
  );
}