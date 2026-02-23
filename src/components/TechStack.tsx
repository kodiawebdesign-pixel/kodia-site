"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Palette,
  Zap,
  Shield,
  Globe,
  Database,
  Smartphone,
  Cloud,
  Figma,
  Terminal,
  Sparkles,
  Star,
  Award,
  Layers,
  Headphones,
  CheckCircle2,
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";

// توسيع بيانات التقنيات مع أيقونات وتفاصيل إضافية
const techData = siteData.home.techStack;

// خريطة الأيقونات لكل تقنية (Typed بدل any)
const iconMap: Record<string, LucideIcon> = {
  "Next.js 14": Globe,
  React: Code2,
  "Tailwind CSS": Palette,
  TypeScript: Terminal,
  Figma: Figma,
  Vercel: Zap,
  Prisma: Database,
  "NextAuth.js": Shield,
  "React Native": Smartphone,
  "Node.js": Globe,
  GraphQL: Database,
  AWS: Cloud,
};

// ألوان متدرجة لكل تقنية
const gradientColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-amber-500",
  "from-indigo-500 to-blue-500",
  "from-rose-500 to-red-500",
  "from-violet-500 to-purple-500",
  "from-amber-500 to-yellow-500",
  "from-green-500 to-emerald-500",
  "from-sky-500 to-indigo-500",
];

// مستويات الخبرة لكل تقنية
const expertiseLevels: Array<{ level: string; percentage: number; icon: LucideIcon }> = [
  { level: "متقدم", percentage: 95, icon: Award },
  { level: "خبير", percentage: 90, icon: Star },
  { level: "متقدم", percentage: 92, icon: Award },
  { level: "خبير", percentage: 88, icon: Star },
  { level: "متقدم", percentage: 85, icon: Award },
  { level: "خبير", percentage: 93, icon: Star },
  { level: "متوسط", percentage: 75, icon: Sparkles },
  { level: "متقدم", percentage: 82, icon: Award },
];

// سنوات الخبرة لكل تقنية
const experienceYears = [
  "٣+ سنوات",
  "٤+ سنوات",
  "٣+ سنوات",
  "٢+ سنوات",
  "٥+ سنوات",
  "٣+ سنوات",
  "٢+ سنوات",
  "٤+ سنوات",
];

// مميزات كل تقنية
const techFeatures = [
  ["SSR", "SEO", "سرعة"],
  ["مكونات", "hooks", "JSX"],
  ["تنسيق", "responsive", "customizable"],
  ["type safety", "interfaces", "intellisense"],
  ["تصميم", "prototyping", "collaboration"],
  ["deployment", "serverless", "edge"],
];

export default function TechStack() {
  const t = siteData.home.techStack;

  return (
    <Section title={t.title} subtitle={t.subtitle} badge="التقنيات التي نستخدمها">
      {/* شبكة التقنيات */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {t.items.map((tech, idx) => {
          const IconComponent = iconMap[tech.title] ?? Code2;
          const gradient = gradientColors[idx % gradientColors.length];
          const expertise = expertiseLevels[idx % expertiseLevels.length];
          const ExpertiseIcon = expertise.icon; // ✅ مهم: PascalCase
          const experience = experienceYears[idx % experienceYears.length];
          const features = techFeatures[idx % techFeatures.length];

          return (
            <motion.div
              key={tech.title}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 100, damping: 15 },
                },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl border border-gray-200/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* خلفية متدرجة متحركة */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* شارة مستوى الخبرة */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${gradient} text-white text-xs font-bold rounded-full shadow-lg`}
                  >
                    <ExpertiseIcon className="w-3 h-3" />
                    {expertise.level}
                  </span>
                </div>

                {/* شارة سنوات الخبرة */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    {experience}
                  </span>
                </div>

                {/* محتوى البطاقة */}
                <div className="p-6">
                  {/* أيقونة التقنية مع تأثيرات */}
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

                  {/* عنوان التقنية */}
                  <h3 className="text-lg font-bold mb-2 group-hover:text-gray-900 transition-colors">
                    {tech.title}
                  </h3>

                  {/* وصف التقنية */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{tech.desc}</p>

                  {/* مؤشر الخبرة */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">مستوى الخبرة</span>
                      <span
                        className={`text-sm font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                      >
                        {expertise.percentage}%
                      </span>
                    </div>

                    {/* شريط التقدم */}
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${expertise.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1, duration: 1 }}
                        className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
                      />
                    </div>

                    {/* مميزات التقنية - تظهر عند الهوفر */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex flex-wrap gap-2">
                          {features.map((feature, fidx) => (
                            <span
                              key={fidx}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
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
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* إحصائيات التقنيات */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { icon: Code2, label: "تقنية", value: t.items.length },
          { icon: Zap, label: "مشروع منجز", value: "٢٠+" },
          { icon: Star, label: "تقييم", value: "٤.٩/٥" },
          { icon: Award, label: "شهادة", value: "معتمد" },
        ].map((stat, idx) => {
          const StatIcon = stat.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="text-center p-4 bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-100"
            >
              <StatIcon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* شريط التقنيات المتقدم */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
      >
        <h3 className="text-xl font-bold mb-6 text-center">مستويات الخبرة في التقنيات</h3>

        <div className="space-y-4">
          {t.items.slice(0, 5).map((tech, idx) => {
            const expertise = expertiseLevels[idx % expertiseLevels.length];
            const gradient = gradientColors[idx % gradientColors.length];

            return (
              <div key={idx} className="flex items-center gap-4">
                <span className="w-24 text-sm font-medium text-gray-700">{tech.title}</span>
                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${expertise.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + idx * 0.1, duration: 1 }}
                    className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
                  />
                </div>
                <span
                  className={`text-sm font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                >
                  {expertise.percentage}%
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* شعار الجودة */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm">
          <CheckCircle2 className="w-5 h-5 text-green-500" />
          <span className="text-sm font-medium">نستخدم أحدث التقنيات لضمان أفضل أداء</span>
          <Sparkles className="w-5 h-5 text-blue-500" />
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
          onClick={() => (window.location.href = "/quote")}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <Zap className="w-5 h-5" />
          <span>اطلب مشروعك بأحدث التقنيات</span>
        </button>
      </motion.div>
    </Section>
  );
}