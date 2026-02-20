"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import { 
  Briefcase, 
  Users, 
  Heart, 
  Calendar, 
  Star, 
  Award,
  Zap,
  Clock,
  Sparkles,
  TrendingUp,
  Target,
  Rocket
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";

// توسيع بيانات الإحصائيات مع أيقونات
const statsData = siteData.home.stats;

// خريطة الأيقونات لكل إحصائية
const iconMap = [
  Calendar,    // سنوات خبرة
  Briefcase,   // مشاريع تحت التنفيذ
  Heart,       // عملاء سعداء
  Award,       // مشروعات منتهية
  TrendingUp,  // إحصائية إضافية
  Star,        // إحصائية إضافية
];

// ألوان متدرجة لكل إحصائية
const gradientColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-amber-500",
  "from-indigo-500 to-blue-500",
  "from-rose-500 to-red-500",
];

// ألوان خلفية
const bgColors = [
  "bg-blue-50",
  "bg-purple-50",
  "bg-emerald-50",
  "bg-orange-50",
  "bg-indigo-50",
  "bg-rose-50",
];

export default function Stats() {
  const { stats } = siteData.home;
  const [mounted, setMounted] = useState(false);
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  useEffect(() => setMounted(true), []);

  function parseNumber(val: string) {
    const n = Number(String(val).replace(/[^\d]/g, ""));
    return Number.isFinite(n) ? n : 0;
  }

  // إضافة إحصائيات إضافية
  const extendedStats = [
    ...stats,
    { label: "رضا العملاء", value: "٩٨٪", icon: Heart },
    { label: "سرعة التنفيذ", value: "٧ أيام", icon: Zap },
  ];

  return (
    <Section 
      title="أرقام تتحدث عنا"
      subtitle="إحصائيات تعكس خبرتنا والتزامنا بالجودة"
      badge="إحصائيات"
    >
      <div ref={statsRef} className="space-y-8">
        {/* شبكة الإحصائيات الرئيسية */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((s, idx) => {
            const n = parseNumber(s.value);
            const suffix = String(s.value).includes("+") ? "+" : "";
            const IconComponent = iconMap[idx % iconMap.length];
            const gradient = gradientColors[idx % gradientColors.length];
            const bgColor = bgColors[idx % bgColors.length];

            return (
              <motion.div
                key={s.label}
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
                <div className="relative bg-white rounded-2xl border border-gray-200/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* خلفية متدرجة متحركة */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* أيقونة كبيرة في الخلفية */}
                  <div className="absolute -bottom-4 -left-4 opacity-5">
                    <IconComponent className="w-24 h-24" />
                  </div>

                  <div className="relative p-6 text-center">
                    {/* أيقونة مع تأثيرات */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${gradient} p-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <IconComponent className="w-full h-full" />
                      
                      {/* تأثير نبض */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} -z-10 blur-md`}
                      />
                    </motion.div>

                    {/* العداد */}
                    <div className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {mounted && isInView ? (
                        <CountUp 
                          end={n} 
                          duration={2.5}
                          delay={0.3 + idx * 0.1}
                          separator=","
                        />
                      ) : n}
                      {suffix}
                    </div>

                    {/* التسمية */}
                    <div className="text-sm text-gray-600 font-medium">
                      {s.label}
                    </div>

                    {/* شريط تقدم دائري */}
                    <div className="mt-4 flex justify-center">
                      <div className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center`}>
                        <span className="text-xs font-bold text-gray-700">
                          {n}%
                        </span>
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

        {/* إحصائيات إضافية بتصميم مختلف */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "معدل النجاح", value: "٩٨٪", icon: Target },
            { label: "مشاريع متكررة", value: "٧٥٪", icon: TrendingUp },
            { label: "تقييم العملاء", value: "٤.٩/٥", icon: Star },
            { label: "دعم فني", value: "٢٤/٧", icon: Clock },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="text-center p-4 bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-100 shadow-sm"
            >
              <stat.icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* شريط التقدم الإجمالي */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">نسبة الإنجاز الإجمالية</h3>
            <span className="text-sm text-gray-600">٨٥٪</span>
          </div>
          <div className="h-3 bg-white rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "85%" } : {}}
              transition={{ delay: 1, duration: 1.5 }}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>مشاريع ناجحة</span>
            <span>عملاء سعداء</span>
            <span>توصيات</span>
          </div>
        </motion.div>

        {/* ملاحظة */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center text-xs text-gray-400 bg-white p-3 rounded-xl border border-gray-100"
        >
          <Sparkles className="w-3 h-3 inline-block ml-1 text-blue-500" />
          * اجعل الأرقام واقعية (أو اكتب Demo/قريباً لو لسه جديد)
        </motion.p>
      </div>
    </Section>
  );
}