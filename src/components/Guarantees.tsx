"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Shield, 
  Award, 
  Clock, 
  Headphones, 
  RefreshCw,
  Heart,
  CheckCircle2,
  Star,
  Sparkles,
  Lock,
  Zap,
  ThumbsUp,
  Gem,
  ShieldCheck,
  BadgeCheck,
  Rocket,
  Target,
  Users
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";

// ✅ تعريف Smartphone في الأعلى قبل استخدامه
const Smartphone = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12" y2="18" />
  </svg>
);

// توسيع بيانات الضمانات مع أيقونات وتفاصيل إضافية
const guaranteesData = siteData.home.guarantees;

// خريطة الأيقونات لكل ضمان
const iconMap: Record<string, any> = {
  "تصميم متجاوب 100% للموبايل والكمبيوتر": Smartphone,
  "تنفيذ سريع ونظيف مع مراعاة الأداء": Zap,
  "تسليم منظم + متابعة بعد الإطلاق": Headphones,
  "تعديلات بسيطة بعد التسليم حسب الاتفاق": RefreshCw,
  "ضمان استعادة الحقوق": Shield,
  "نلتزم بالمواعيد": Clock,
  "جودة مضمونة": Award,
  "دعم فني مستمر": Headphones,
};

// خريطة الشعارات الإضافية
const badgeMap: Record<string, string> = {
  "تصميم متجاوب 100% للموبايل والكمبيوتر": "📱 تقنية حديثة",
  "تنفيذ سريع ونظيف مع مراعاة الأداء": "⚡ أداء عالي",
  "تسليم منظم + متابعة بعد الإطلاق": "🛡️ دائم معك",
  "تعديلات بسيطة بعد التسليم حسب الاتفاق": "🔄 مرونة",
  "ضمان استعادة الحقوق": "💰 ضمان كامل",
};

// ألوان متدرجة لكل ضمان
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

// تفاصيل إضافية لكل ضمان
const guaranteeDetails = [
  {
    stat: "١٠٠٪",
    statLabel: "توافق",
    description: "نضمن ظهور موقعك بشكل مثالي على جميع الأجهزة والشاشات",
  },
  {
    stat: "أيام",
    statLabel: "تنفيذ سريع",
    description: "نلتزم بجدول زمني واضح ونسلم في الوقت المتفق عليه",
  },
  {
    stat: "شهر",
    statLabel: "دعم مجاني",
    description: "نقدم دعماً فنياً لمدة شهر بعد الإطلاق لحل أي مشكلة",
  },
  {
    stat: "مجاني",
    statLabel: "تعديلات",
    description: "تعديلات بسيطة مجانية حسب الاتفاق المبدئي",
  },
  {
    stat: "١٠٠٪",
    statLabel: "ضمان",
    description: "إذا لم نلتزم بالمواصفات، نضمن استعادة حقوقك كاملة",
  },
  {
    stat: "٢٤/٧",
    statLabel: "تواصل",
    description: "فريقنا متاح للإجابة على استفساراتك في أي وقت",
  },
];

export default function Guarantees() {
  const g = siteData.home.guarantees;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // إحصائيات إضافية
  const stats = [
    { icon: ShieldCheck, label: "ضمانات مقدمة", value: g.items.length },
    { icon: BadgeCheck, label: "نسبة الالتزام", value: "١٠٠٪" },
    { icon: Users, label: "عملاء مستفيدين", value: "١٠+" },
    { icon: Gem, label: "جودة الخدمة", value: "ممتازة" },
  ];

  return (
    <Section 
      title={g.title} 
      subtitle={g.subtitle}
      badge="نضمن لك"
    >
      <div ref={sectionRef}>
        {/* شبكة الضمانات */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {g.items.map((guarantee, idx) => {
            // التأكد من أن guarantee هو نص
            const guaranteeText = typeof guarantee === 'string' 
              ? guarantee 
              : (guarantee as any).text || JSON.stringify(guarantee);
            
            const IconComponent = iconMap[guaranteeText] || Shield;
            const gradient = gradientColors[idx % gradientColors.length];
            const badge = badgeMap[guaranteeText] || "ضمان";
            const detail = guaranteeDetails[idx % guaranteeDetails.length];

            return (
              <motion.div
                key={`guarantee-${idx}-${guaranteeText.substring(0, 20)}`}
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

                  {/* شارة الضمان */}
                  <div className="absolute top-3 right-3">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${gradient} text-white text-xs font-bold rounded-full shadow-lg`}>
                      <Award className="w-3 h-3" />
                      {badge}
                    </span>
                  </div>

                  {/* محتوى البطاقة */}
                  <div className="p-6">
                    {/* أيقونة الضمان مع تأثيرات */}
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

                    {/* نص الضمان */}
                    <h3 className="text-base font-bold mb-3 group-hover:text-gray-900 transition-colors">
                      {guaranteeText}
                    </h3>

                    {/* تفاصيل إضافية تظهر عند الهوفر */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 pt-3 border-t border-gray-100">
                        {/* إحصائية سريعة */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{detail.statLabel}</span>
                          <span className={`text-sm font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                            {detail.stat}
                          </span>
                        </div>

                        {/* وصف تفصيلي */}
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {detail.description}
                        </p>

                        {/* نقاط إضافية */}
                        <div className="flex items-center gap-2 text-xs text-gray-500">
<CheckCircle2 className="w-3 h-3 text-blue-600" />                          <span>ضمان مكتوب</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* شريط تقدم وهمي للثقة */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-gray-400">معدل الثقة</span>
                        <span className={`text-xs font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                          ٩٨٪
                        </span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: "98%" } : {}}
                          transition={{ delay: 0.5 + idx * 0.1, duration: 1 }}
                          className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
                        />
                      </div>
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

        {/* إحصائيات الضمانات */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={`stat-${idx}`}
                whileHover={{ y: -4 }}
                className="text-center p-4 bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-100 shadow-sm"
              >
                <Icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* شريط الضمانات الإضافي */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Lock, label: "أمان وحماية", value: "SSL مجاني" },
            { icon: Clock, label: "دعم فني", value: "٢٤/٧" },
            { icon: RefreshCw, label: "تحديثات", value: "دورية" },
            { icon: Heart, label: "رضا مضمون", value: "١٠٠٪" },
          ].map((item, idx) => (
            <motion.div
              key={`extra-${idx}`}
              whileHover={{ y: -4 }}
              className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm"
            >
              <item.icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
              <div className="text-xs text-gray-500">{item.label}</div>
              <div className="text-sm font-bold text-gray-900 mt-1">{item.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* شعار الثقة الكبير */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20" />
          <div className="relative bg-white rounded-2xl border border-gray-200 p-8 text-center overflow-hidden">
            {/* خلفية متحركة */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -5, 5, 0],
              }}
              transition={{ duration: 12, repeat: Infinity }}
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-30"
            />

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Shield className="w-20 h-20 text-blue-600" />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-blue-500 rounded-full blur-xl -z-10"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">
                ضمان استعادة الحقوق
              </h3>
              
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                إذا لم نلتزم بالمواصفات المتفق عليها في العقد، نضمن لك استرداد أموالك كاملة. 
                ثقتك هي رأس مالنا الحقيقي.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { icon: Star, text: "موثوق من عملائنا" },
                  { icon: ThumbsUp, text: "٩٨٪ نسبة رضا" },
                  { icon: Award, text: "ضمان رسمي" },
                ].map((item, idx) => (
                  <motion.div
                    key={`trust-${idx}`}
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full"
                  >
                    <item.icon className="w-4 h-4 text-blue-600" />
                    <span className="text-xs text-gray-600">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* زر طلب الخدمة مع تأثيرات */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = "/quote"}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            <span>اطلب ضمان الجودة الآن</span>
            <Rocket className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </Section>
  );
}