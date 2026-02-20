"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Grid, 
  ShoppingBag, 
  Building2, 
  Hotel, 
  GraduationCap, 
  Smartphone,
  Eye,
  ArrowLeft,
  Tag,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";

// خريطة الأيقونات لكل تبويب
const tabIcons: Record<string, any> = {
  company: Building2,
  ecommerce: ShoppingBag,
  tourism: Hotel,
  education: GraduationCap,
  apps: Smartphone,
};

// ألوان متدرجة لكل تبويب
const tabGradients: Record<string, string> = {
  company: "from-blue-500 to-cyan-500",
  ecommerce: "from-purple-500 to-pink-500",
  tourism: "from-amber-500 to-orange-500",
  education: "from-emerald-500 to-teal-500",
  apps: "from-violet-500 to-indigo-500",
};

// ألوان للخلفيات
const bgGradients: Record<string, string> = {
  company: "from-blue-50 to-indigo-50",
  ecommerce: "from-purple-50 to-pink-50",
  tourism: "from-amber-50 to-orange-50",
  education: "from-emerald-50 to-teal-50",
  apps: "from-violet-50 to-indigo-50",
};

// بيانات مشاهدة وهمية ثابتة للمشاريع
const viewCounts: Record<string, number> = {
  // يمكن إضافة أرقام ثابتة لكل مشروع بناءً على الـ slug
  "default": 234,
};

// دالة للحصول على عدد مشاهدات ثابت لكل مشروع
const getViewCount = (slug: string): number => {
  // استخدام دالة تجزئة بسيطة للحصول على رقم ثابت من الـ slug
  const hash = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return 100 + (hash % 400); // ينتج أرقام بين 100 و 500
};

export default function PortfolioTabs() {
  const { portfolioIntro, portfolioTabs } = siteData.home;
  const [active, setActive] = useState(portfolioTabs[0].key);
  const [direction, setDirection] = useState(0); // للتحكم باتجاه الأنيميشن
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const current = useMemo(
    () => portfolioTabs.find((t) => t.key === active) ?? portfolioTabs[0],
    [active, portfolioTabs]
  );

  // تغيير الاتجاه عند تغيير التبويب
  const handleTabChange = (key: string) => {
    const oldIndex = portfolioTabs.findIndex(t => t.key === active);
    const newIndex = portfolioTabs.findIndex(t => t.key === key);
    setDirection(newIndex > oldIndex ? 1 : -1);
    setActive(key);
  };

  // متغيرات الحركة
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction * 50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: -direction * 50,
      transition: { duration: 0.2 }
    }),
  };

  // الحصول على الأيقونة المناسبة للتبويب
  const ActiveIcon = tabIcons[active] || Grid;
  const activeGradient = tabGradients[active] || "from-gray-500 to-gray-600";
  const activeBgGradient = bgGradients[active] || "from-gray-50 to-gray-100";

  return (
    <Section 
      title={portfolioIntro.title} 
      subtitle={portfolioIntro.subtitle}
      badge="معرض الأعمال"
    >
      {/* تبويبات متحركة */}
      <div className="relative mb-8">
        {/* خلفية متحركة */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${activeBgGradient} rounded-2xl -z-10`}
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* أزرار التبويبات */}
        <div className="flex flex-wrap justify-center gap-3 p-2">
          {portfolioTabs.map((t) => {
            const isActive = t.key === active;
            const Icon = tabIcons[t.key] || Grid;
            const gradient = tabGradients[t.key] || "from-gray-500 to-gray-600";

            return (
              <motion.button
                key={t.key}
                onClick={() => handleTabChange(t.key)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative group px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${gradient} text-white shadow-xl`
                    : "bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white hover:shadow-lg border border-gray-200/50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-500 group-hover:text-gray-700"}`} />
                  <span>{t.label}</span>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                  )}
                </div>

                {/* تأثير لمعان */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* شبكة المشاريع مع أنيميشن */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={active}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          custom={direction}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {current.items.map((item: any) => (
            <motion.div
              key={item.slug}
              variants={itemVariants}
              custom={direction}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredItem(item.slug)}
              onHoverEnd={() => setHoveredItem(null)}
              className="group relative cursor-pointer"
            >
              <Link href={`/portfolio/${item.slug}`}>
                {/* بطاقة المشروع */}
                <div className={`relative bg-white rounded-2xl border border-gray-200/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${activeBgGradient} hover:bg-white`}>
                  {/* صورة المشروع مع تأثيرات */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={`/images/demos/${item.slug}-1.svg`}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    
                    {/* طبقة داكنة مع تأثيرات */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                    >
                      {/* أيقونة المشاهدة */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      >
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-blue-600">
                          <Eye className="w-6 h-6" />
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* شارة التبويب */}
                    <div className="absolute top-3 right-3">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${activeGradient} text-white text-xs font-bold rounded-full shadow-lg`}>
                        <ActiveIcon className="w-3 h-3" />
                        {current.label}
                      </span>
                    </div>

                    {/* عدد المشاهدات الثابت - تم إزالة Math.random() */}
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                        <Eye className="w-3 h-3" />
                        {getViewCount(item.slug)}
                      </span>
                    </div>
                  </div>

                  {/* محتوى البطاقة */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {item.summary}
                    </p>

                    {/* التاجات */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags?.slice(0, 3).map((tag: string, idx: number) => (
                        <motion.span
                          key={`${item.slug}-tag-${idx}`}
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* مميزات المشروع */}
                    {item.deliverables && (
                      <div className="border-t border-gray-100 pt-3">
                        <div className="flex flex-wrap gap-1">
                          {item.deliverables.slice(0, 2).map((del: string, idx: number) => (
                            <span
                              key={`${item.slug}-del-${idx}`}
                              className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full"
                            >
                              {del}
                            </span>
                          ))}
                          {item.deliverables.length > 2 && (
                            <span className="text-xs text-gray-400">
                              +{item.deliverables.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* مؤشر التمرير */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${activeGradient}`}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* زر عرض الكل مع تأثيرات */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-10 text-center"
      >
        <Link href={portfolioIntro.ctaHref}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">{portfolioIntro.ctaLabel}</span>
            <ArrowLeft className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            
            {/* تأثير لمعان */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </Link>
      </motion.div>

      {/* إحصائيات سريعة */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: "مشاريع منجزة", value: "15+" },
          { label: "مجالات متنوعة", value: "5" },
          { label: "عملاء سعداء", value: "10+" },
          { label: "نماذج عمل", value: "20+" },
        ].map((stat, index) => (
          <motion.div
            key={`stat-${index}`}
            whileHover={{ y: -4 }}
            className="text-center p-4 bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-100 shadow-sm"
          >
            <div className={`text-2xl font-bold bg-gradient-to-r ${activeGradient} bg-clip-text text-transparent`}>
              {stat.value}
            </div>
            <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}