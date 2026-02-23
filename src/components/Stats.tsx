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
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";

type StatFromData = {
  label: string;
  value: string;
  icon?: string;
};

// قاموس تحويل الاسم النصي -> أيقونة
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
};

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

// استخراج رقم مناسب للعدّاد من أي قيمة (100% / 24/7 / ٢+ / ٧ أيام ...)
function parseNumber(val: string) {
  const v = toEnglishDigits(String(val)).trim();

  // حالة 24/7 أو 4.9/5: نأخذ الرقم الأول
  if (v.includes("/")) {
    const first = v.split("/")[0]?.replace(/[^\d.]/g, "");
    const n = Number(first);
    return Number.isFinite(n) ? n : 0;
  }

  // أي شيء آخر: نجمع الأرقام فقط
  const cleaned = v.replace(/[^\d.]/g, "");
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
}

function getSuffix(originalValue: string) {
  const v = toEnglishDigits(String(originalValue));
  if (v.includes("+")) return "+";
  if (v.includes("%")) return "%";
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

            // ✅ هنا الإصلاح: مفيش type annotation، وfallback مضمون
            const IconComponent =
              (s.icon ? ICONS[s.icon] : undefined) ?? Sparkles;

            const gradient = gradientColors[idx % gradientColors.length];
            const bgColor = bgColors[idx % bgColors.length];

            return (
              <motion.div
                key={`${s.label}-${idx}`}
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
                    },
                  },
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl border border-gray-200/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <div className="absolute -bottom-4 -left-4 opacity-5">
                    <IconComponent className="w-24 h-24" />
                  </div>

                  <div className="relative p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`relative w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${gradient} p-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <IconComponent className="w-full h-full" />

                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.1, 0.3],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} -z-10 blur-md`}
                      />
                    </motion.div>

                    <div className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
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

                    <div className="text-sm text-gray-600 font-medium">
                      {s.label}
                    </div>

                    <div className="mt-4 flex justify-center">
                      <div
                        className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center`}
                        title="عنصر زخرفي"
                      >
                        <span className="text-xs font-bold text-gray-700">
                          {Math.min(Math.max(n, 0), 100)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-xs text-gray-400 bg-white p-3 rounded-xl border border-gray-100"
        >
          <Sparkles className="w-3 h-3 inline-block ml-1 text-blue-500" />
          * اجعل الأرقام واقعية (أو اكتب Demo/قريباً لو لسه جديد)
        </motion.p>
      </div>
    </Section>
  );
}