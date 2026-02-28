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
  Server,
  Lock,
  Rocket,
  Cpu,
  GitBranch,
  Gauge,
  Infinity,
  Workflow,
  Box,
  Heart,
  Target,
  Gem,
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";
import Link from "next/link";

// توسيع بيانات التقنيات
const techData = siteData.home.techStack;

// خريطة الأيقونات لكل تقنية - محدثة
const iconMap: Record<string, LucideIcon> = {
  "Next.js 14": Rocket,
  React: Code2,
  "Tailwind CSS": Palette,
  TypeScript: Terminal,
  Figma: Figma,
  Vercel: Zap,
  Prisma: Database,
  "NextAuth.js": Lock,
  "React Native": Smartphone,
  "Node.js": Server,
  GraphQL: Workflow,
  AWS: Cloud,
  "Framer Motion": Heart,
  "Stripe": Shield,
  "PostgreSQL": Database,
  "MongoDB": Database,
  "Docker": Box,
  "Git": GitBranch,
  "Jest": Target,
  "Cypress": Cpu,
  "Storybook": Layers,
};

// ألوان متدرجة لكل تقنية - محدثة بالبنفسجي
const gradientColors = [
  "from-violet-600 to-fuchsia-600",
  "from-blue-600 to-cyan-600",
  "from-emerald-600 to-teal-600",
  "from-amber-600 to-orange-600",
  "from-purple-600 to-pink-600",
  "from-indigo-600 to-violet-600",
  "from-rose-600 to-red-600",
  "from-green-600 to-emerald-600",
  "from-sky-600 to-indigo-600",
  "from-fuchsia-600 to-pink-600",
];

type Expertise = { level: string; percentage: number; icon: LucideIcon };

// مستويات الخبرة لكل تقنية - محدثة
const expertiseLevels: Expertise[] = [
  { level: "متقدم", percentage: 95, icon: Award },
  { level: "خبير", percentage: 90, icon: Star },
  { level: "متقدم", percentage: 92, icon: Award },
  { level: "خبير", percentage: 88, icon: Star },
  { level: "متقدم", percentage: 85, icon: Award },
  { level: "خبير", percentage: 93, icon: Star },
  { level: "متوسط", percentage: 75, icon: Sparkles },
  { level: "متقدم", percentage: 82, icon: Award },
  { level: "خبير", percentage: 96, icon: Star },
  { level: "متقدم", percentage: 89, icon: Award },
];

// سنوات الخبرة لكل تقنية - محدثة
const experienceYears = [
  "٣+ سنوات",
  "٤+ سنوات",
  "٣+ سنوات",
  "٢+ سنوات",
  "٥+ سنوات",
  "٣+ سنوات",
  "٢+ سنوات",
  "٤+ سنوات",
  "٣+ سنوات",
  "٥+ سنوات",
];

// مميزات كل تقنية - محدثة
const techFeatures = [
  ["SSR", "SEO", "سرعة", "توجيه"],
  ["مكونات", "hooks", "JSX", "state"],
  ["تنسيق", "responsive", "customizable", "dark mode"],
  ["type safety", "interfaces", "intellisense", "OOP"],
  ["تصميم", "prototyping", "collaboration", "UI"],
  ["deployment", "serverless", "edge", "analytics"],
  ["ORM", "queries", "relations", "migrations"],
  ["authentication", "authorization", "sessions", "JWT"],
  ["cross-platform", "native", "performance", "UI"],
  ["API", "REST", "GraphQL", "real-time"],
];

// إحصائيات التقنيات - محدثة
const techStats = [
  { icon: Code2, label: "تقنية", value: techData.items.length, color: "from-violet-600 to-fuchsia-600" },
  { icon: Rocket, label: "مشروع منجز", value: "٢٥+", color: "from-blue-600 to-cyan-600" },
  { icon: Star, label: "تقييم", value: "٤.٩/٥", color: "from-amber-600 to-orange-600" },
  { icon: Award, label: "شهادة", value: "معتمد", color: "from-green-600 to-emerald-600" },
  { icon: Heart, label: "رضا العملاء", value: "٩٨٪", color: "from-purple-600 to-pink-600" },
  { icon: Gauge, label: "سرعة الأداء", value: "٩٥٪", color: "from-indigo-600 to-violet-600" },
];

// fallback مضمون
const DEFAULT_EXPERTISE: Expertise = { level: "متوسط", percentage: 75, icon: Sparkles };

export default function TechStack() {
  const t = siteData.home.techStack;

  return (
    <Section 
      title={t.title} 
      subtitle={t.subtitle} 
      badge="التقنيات التي نستخدمها"
      className="bg-gradient-to-b from-white to-violet-50/30 dark:from-gray-950 dark:to-violet-950/20"
    >
      {/* شبكة التقنيات */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {t.items.map((tech, idx) => {
          const IconComponent = iconMap[tech.title] ?? Code2;
          const gradient = gradientColors[idx % gradientColors.length];

          const expertise =
            expertiseLevels[idx % expertiseLevels.length] ?? DEFAULT_EXPERTISE;

          const ExpertiseIcon = expertise.icon;

          const experience =
            experienceYears[idx % experienceYears.length] ?? "—";

          const features =
            techFeatures[idx % techFeatures.length] ?? [];

          return (
            <motion.div
              key={tech.title}
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

                {/* شارة مستوى الخبرة */}
                <div className="absolute top-3 right-3 z-10">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r ${gradient} text-white text-xs font-bold rounded-full shadow-lg`}
                  >
                    <ExpertiseIcon className="w-3 h-3" />
                    {expertise.level}
                  </span>
                </div>

                {/* شارة سنوات الخبرة */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full">
                    {experience}
                  </span>
                </div>

                {/* محتوى البطاقة */}
                <div className="p-6">
                  {/* أيقونة التقنية */}
                  <div className={`relative w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${gradient} p-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent className="w-full h-full" />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} -z-10 blur-md`}
                    />
                  </div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors text-gray-900 dark:text-white">
                    {tech.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {tech.desc}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400">مستوى الخبرة</span>
                      <span
                        className={`text-sm font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                      >
                        {expertise.percentage}%
                      </span>
                    </div>

                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${expertise.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1, duration: 1 }}
                        className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
                      />
                    </div>

                    {/* مميزات إضافية تظهر عند الهوفر */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex flex-wrap gap-2">
                          {features.map((feature, fidx) => (
                            <span
                              key={fidx}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full"
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
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: "right" }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* إحصائيات التقنيات */}
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
        className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        {techStats.map((stat, idx) => {
          const StatIcon = stat.icon;
          return (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -4 }}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
            >
              <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${stat.color} p-2 text-white`}>
                <StatIcon className="w-full h-full" />
              </div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
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
        className="mt-12 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 rounded-2xl p-8 border border-violet-100 dark:border-violet-800"
      >
        <h3 className="text-xl font-bold mb-6 text-center text-gray-900 dark:text-white">مستويات الخبرة في التقنيات</h3>

        <div className="space-y-4 max-w-2xl mx-auto">
          {t.items.slice(0, 6).map((tech, idx) => {
            const expertise =
              expertiseLevels[idx % expertiseLevels.length] ?? DEFAULT_EXPERTISE;
            const gradient = gradientColors[idx % gradientColors.length];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="flex items-center gap-4"
              >
                <span className="w-28 text-sm font-medium text-gray-700 dark:text-gray-300">{tech.title}</span>
                <div className="flex-1 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${expertise.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + idx * 0.1, duration: 1 }}
                    className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
                  />
                </div>
                <span
                  className={`text-sm font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent w-12 text-right`}
                >
                  {expertise.percentage}%
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* شعار الجودة */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
          <CheckCircle2 className="w-5 h-5 text-green-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">نستخدم أحدث التقنيات لضمان أفضل أداء</span>
          <Sparkles className="w-5 h-5 text-amber-500" />
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
          { icon: Shield, text: "تقنيات آمنة" },
          { icon: Cpu, text: "أداء عالي" },
          { icon: Gem, text: "جودة مضمونة" },
          { icon: Infinity, text: "قابل للتوسع" },
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
            <Zap className="w-5 h-5" />
            <span>اطلب مشروعك بأحدث التقنيات</span>
          </motion.button>
        </Link>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
          * استشارة مجانية • تنفيذ احترافي • دعم فني
        </p>
      </motion.div>
    </Section>
  );
}
