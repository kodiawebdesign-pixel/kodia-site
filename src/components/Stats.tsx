"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import type { LucideIcon } from "lucide-react";
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
  Rocket,
  Layers,
  Headphones,
  Shield,
  Gem,
  Globe,
  Coffee,
  Smile,
  ThumbsUp,
  CheckCircle,
  Coffee as CoffeeIcon,
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";

type StatFromData = {
  label: string;
  value: string;
  icon?: string;
};

// قاموس تحويل الاسم النصي -> أيقونة - محدث
const ICONS: Record<string, LucideIcon> = {
  Calendar,
  Briefcase,
  Users,
  Layers,
  Heart,
  Headphones,
  Star,
  Award,
  Zap,
  Clock,
  Sparkles,
  TrendingUp,
  Target,
  Rocket,
  Shield,
  Gem,
  Globe,
  Coffee,
  Smile,
  ThumbsUp,
  CheckCircle,
};

// ألوان متدرجة لكل إحصائية - محدثة بالبنفسجي
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

// ألوان خلفية - محدثة
const bgColors = [
  "bg-violet-50 dark:bg-violet-900/20",
  "bg-blue-50 dark:bg-blue-900/20",
  "bg-emerald-50 dark:bg-emerald-900/20",
  "bg-amber-50 dark:bg-amber-900/20",
  "bg-purple-50 dark:bg-purple-900/20",
  "bg-indigo-50 dark:bg-indigo-900/20",
  "bg-rose-50 dark:bg-rose-900/20",
  "bg-green-50 dark:bg-green-900/20",
];

// تحويل الأرقام العربية/الفارسية لأرقام إنجليزية
function toEnglishDigits(input: string) {
  const map: Record<string, string> = {
    "٠": "0",
    "١": "1",
    "٢": "2",
    "٣": "3",
    "٤": "4",
    "٥": "5",
    "٦": "6",
    "٧": "7",
    "٨": "8",
    "٩": "9",
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };

  return input.replace(/[٠-٩۰-۹]/g, (d) => map[d] ?? d);
}

// استخراج رقم مناسب للعدّاد من أي قيمة
function parseNumber(val: string) {
  const v = toEnglishDigits(String(val)).trim();

  if (v.includes("/")) {
    const first = v.split("/")[0]?.replace(/[^\d.]/g, "");
    const n = Number(first);
    return Number.isFinite(n) ? n : 0;
  }

  const cleaned = v.replace(/[^\d.]/g, "");
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
}

function getSuffix(originalValue: string) {
  const v = toEnglishDigits(String(originalValue));
  if (v.includes("+")) return "+";
  if (v.includes("%")) return "%";
  if (v.includes("/")) return "/" + v.split("/")[1];
  return "";
}

export default function Stats() {
  const stats = (siteData.home.stats as StatFromData[]) ?? [];

  const [mounted, setMounted] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  useEffect(() => setMounted(true), []);

  return (
    <Section
      title="أرقام تتحدث عنا"
      subtitle="إحصائيات تعكس خبرتنا والتزامنا بالجودة"
      badge="إحصائيات"
      className="bg-gradient-to-b from-white to-violet-50/30 dark:from-gray-950 dark:to-violet-950/20"
    >
      <div ref={statsRef} className="space-y-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((s, idx) => {
            const n = parseNumber(s.value);
            const suffix = getSuffix(s.value);

            const IconComponent =
              (s.icon ? ICONS[s.icon] : undefined) ?? Sparkles;

            const gradient = gradientColors[idx % gradientColors.length];
            const bgColor = bgColors[idx % bgColors.length];

            return (
              <motion.div
                key={`${s.label}-${idx}`}
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
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* خلفية متدرجة متحركة */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 dark:opacity-0 dark:group-hover:opacity-10 transition-opacity duration-500`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* أيقونة كبيرة في الخلفية */}
                  <div className="absolute -bottom-4 -left-4 opacity-5 dark:opacity-10">
                    <IconComponent className="w-24 h-24" />
                  </div>

                  <div className="relative p-6 text-center">
                    {/* أيقونة مع تأثيرات */}
                    <div className={`relative w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${gradient} p-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <IconComponent className="w-full h-full" />

                      {/* تأثير نبض */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.1, 0.3],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} -z-10 blur-md`}
                      />
                    </div>

                    {/* القيمة مع العداد */}
                    <div className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                      {mounted && isInView ? (
                        <CountUp
                          end={n}
                          duration={2.5}
                          delay={0.3 + idx * 0.08}
                          separator=","
                        />
                      ) : (
                        n
                      )}
                      {suffix}
                    </div>

                    {/* التسمية */}
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {s.label}
                    </div>

                    {/* عنصر زخرفي - دائرة مع نسبة */}
                    <div className="mt-4 flex justify-center">
                      <div
                        className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center backdrop-blur-sm`}
                      >
                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                          {Math.min(Math.max(Math.round(n), 0), 100)}%
                        </span>
                      </div>
                    </div>

                    {/* شريط تقدم صغير */}
                    <div className="mt-4 h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${Math.min(n, 100)}%` } : {}}
                        transition={{ delay: 0.5 + idx * 0.1, duration: 1 }}
                        className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
                      />
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

        {/* إحصائيات إضافية */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {[
            { icon: CoffeeIcon, label: "فنجان قهوة", value: "١٠٠٠+" },
            { icon: Smile, label: "عميل سعيد", value: "٢٠+" },
            { icon: ThumbsUp, label: "توصية", value: "٩٥٪" },
            { icon: CheckCircle, label: "مشروع مكتمل", value: "٢٥+" },
          ].map((item, idx) => (
            <motion.div
              key={`extra-${idx}`}
              whileHover={{ y: -4 }}
              className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <item.icon className="w-5 h-5 text-violet-600 dark:text-violet-400 mx-auto mb-1" />
              <div className="text-sm font-bold text-gray-900 dark:text-white">{item.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ملاحظة التطوير */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-xs text-gray-400 dark:text-gray-500 bg-white dark:bg-gray-800 p-3 rounded-xl border border-gray-200 dark:border-gray-700"
        >
          <Sparkles className="w-3 h-3 inline-block ml-1 text-amber-500" />
          * اجعل الأرقام واقعية (أو اكتب Demo/قريباً لو لسه جديد)
        </motion.p>
      </div>
    </Section>
  );
}
