"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useState, useMemo } from "react";
import {
  Building2,
  Stethoscope,
  GraduationCap,
  Utensils,
  ShoppingCart,
  Rocket,
  Scale,
  Hotel,
  Heart,
  Calendar,
  Sparkles,
  Star,
  Award,
} from "lucide-react";
import Section from "./Section";

// بيانات الموقع
const siteData = {
  home: {
    clients: {
      title: "عملاؤنا",
      subtitle: "نفخر بثقة شركائنا",
      items: [
        "العيادات والمراكز الطبية",
        "العقارات والمقاولات",
        "التعليم والتدريب",
        "المطاعم والكافيهات",
        "المتاجر الإلكترونية",
        "الشركات الناشئة",
        "المحاماة والاستشارات",
        "الفنادق والسياحة",
        "الجمعيات الخيرية",
        "المعارض والمؤتمرات",
      ]
    }
  }
};

// خريطة الأيقونات لكل قطاع
const iconMap: Record<string, any> = {
  "العيادات والمراكز الطبية": Stethoscope,
  "العقارات والمقاولات": Building2,
  "التعليم والتدريب": GraduationCap,
  "المطاعم والكافيهات": Utensils,
  "المتاجر الإلكترونية": ShoppingCart,
  "الشركات الناشئة": Rocket,
  "المحاماة والاستشارات": Scale,
  "الفنادق والسياحة": Hotel,
  "الجمعيات الخيرية": Heart,
  "المعارض والمؤتمرات": Calendar,
};

// ألوان متدرجة لكل قطاع
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

// أرقام وهمية للعملاء
const clientCounts = ["٣+", "٥+", "٢+", "٤+", "٦+", "٣+", "٢+", "٤+", "٣+", "٥+"];

// إحصائيات سريعة
const stats = [
  { label: "قطاع نخدمها", value: "١٠" },
  { label: "مشاريع منجزة", value: "٢٠+" },
  { label: "عملاء حاليون", value: "١٠+" },
  { label: "نسبة رضا", value: "٩٨٪" },
];

// نوع عنصر القطاع
type SectorItem = string;

export default function ClientsLogos() {
  const c = siteData.home.clients;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // للشريط المتحرك
  const baseVelocity = -0.5;
  const baseX = useMotionValue(0);
  const [isHoveringMarquee, setIsHoveringMarquee] = useState(false);

  // العناصر
  const items = (c.items ?? []) as SectorItem[];

  const getIcon = (name: string) => {
    return iconMap[name] || Building2;
  };

  // نسخة مكررة من القطاعات للشريط اللانهائي - مع معرفات فريدة
  const duplicatedItems = useMemo(() => {
    const allItems = [...items, ...items, ...items];
    return allItems.map((item, index) => ({
      name: item,
      uniqueId: `marquee-${index}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      originalIndex: index % items.length,
    }));
  }, [items]);

  // حركة الشريط
  useAnimationFrame((_time, delta) => {
    if (!isHoveringMarquee) {
      const moveBy = baseVelocity * (delta / 16);
      baseX.set(baseX.get() + moveBy);

      if (baseX.get() <= -100) {
        baseX.set(0);
      }
    }
  });

  return (
    <Section title={c.title} subtitle={c.subtitle} badge="شركاء النجاح">
      {/* القطاعات مع أيقونات متحركة - شبكة */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {items.map((name, index) => {
          const IconComponent = getIcon(name);
          const gradient = gradientColors[index % gradientColors.length];

          return (
            <motion.div
              key={`grid-${name}-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl border border-gray-200/50 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* خلفية متدرجة متحركة */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10`}
                  animate={
                    hoveredIndex === index
                      ? {
                          scale: [1, 1.2, 1],
                          opacity: [0.1, 0.15, 0.1],
                        }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* الأيقونة */}
                <motion.div
                  animate={
                    hoveredIndex === index
                      ? {
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }
                      : {}
                  }
                  transition={{ duration: 0.5 }}
                  className={`relative w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${gradient} p-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <IconComponent className="w-full h-full" />

                  {/* تأثير نبض */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} -z-10 blur-md`}
                  />
                </motion.div>

                {/* اسم القطاع */}
                <h3 className="text-sm font-bold text-center mb-2 group-hover:text-gray-900 transition-colors">
                  {name}
                </h3>

                {/* إحصائيات وهمية */}
                <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span>{clientCounts[index % clientCounts.length]} مشروع</span>
                </div>

                {/* شارة التخصص */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="absolute top-2 right-2"
                >
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r ${gradient} text-white text-xs rounded-full shadow-lg`}
                  >
                    <Award className="w-3 h-3" />
                    متخصصون
                  </span>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* شريط متحرك لا نهائي للقطاعات */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 relative overflow-hidden"
        onHoverStart={() => setIsHoveringMarquee(true)}
        onHoverEnd={() => setIsHoveringMarquee(false)}
      >
        {/* تدرجات جانبية */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

        {/* الشريط المتحرك */}
        <motion.div style={{ x: baseX }} className="flex gap-4 whitespace-nowrap">
          {duplicatedItems.map(({ name, uniqueId, originalIndex }) => {
            const IconComponent = getIcon(name);
            const gradient = gradientColors[originalIndex % gradientColors.length];

            return (
              <motion.div
                key={uniqueId}
                whileHover={{ scale: 1.1, y: -2 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-50 to-white rounded-full border border-gray-200 shadow-sm cursor-default"
              >
                <div className={`p-1.5 rounded-full bg-gradient-to-r ${gradient} text-white`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{name}</span>
                <span className="text-xs text-gray-400">{clientCounts[originalIndex % clientCounts.length]}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* قسم شركاء النجاح مع تأثيرات متقدمة */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl" />

        <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl border border-dashed border-gray-300 p-8 text-center overflow-hidden">
          {/* خلفية متحركة */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.03) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(168,85,247,0.03) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.03) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* أيقونات متحركة */}
          <div className="flex justify-center gap-4 mb-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={`sparkle-${i}`}
                animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            شركاء نجاح (قريبًا)
          </h3>

          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            عند توفر شعارات العملاء، سنعرضها هنا لإظهار قصص نجاح حقيقية. كن أنت أول من يضئ هذه المساحة!
          </p>

          {/* شريط تقدم وهمي */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>شركاء حاليون</span>
              <span>الهدف</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "45%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span className="font-bold text-blue-600">١٠+ عميل</span>
              <span className="text-gray-400">٢٠ عميل</span>
            </div>
          </div>

          {/* دعوة للانضمام */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>انضم كشريك نجاح</span>
            <Rocket className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>

      {/* إحصائيات سريعة */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={`stat-${index}`}
            whileHover={{ y: -4 }}
            className="text-center p-4 bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-100"
          >
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}