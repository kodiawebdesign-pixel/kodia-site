"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  ShoppingBag,
  Smartphone,
  PenTool,
  TrendingUp,
  Settings,
  FileText,
  Shield,
  ArrowLeft,
  Sparkles,
  Zap,
  Star,
  Heart,
  Award,
  Users,
  Clock,
  Gem,
  Target,
  Rocket
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";

// خريطة الأيقونات لكل خدمة - محدثة
const iconMap: Record<string, any> = {
  "تصميم مواقع الشركات": Building2,
  "تصميم المتاجر الإلكترونية": ShoppingBag,
  "برمجة تطبيقات الهاتف": Smartphone,
  "UI/UX Design": PenTool,
  "تحسين محركات البحث (SEO)": TrendingUp,
  "الدعم الفني والصيانة": Settings,
  "كتابة المحتوى التسويقي": FileText,
  "استضافة وحماية": Shield,
};

// ألوان متدرجة لكل خدمة - محدثة بالبنفسجي
const gradientColors = [
  "from-violet-600 to-fuchsia-600",
  "from-fuchsia-600 to-pink-600",
  "from-blue-600 to-cyan-600",
  "from-emerald-600 to-teal-600",
  "from-amber-600 to-orange-600",
  "from-purple-600 to-pink-600",
  "from-indigo-600 to-violet-600",
  "from-green-600 to-emerald-600",
];

// خلفيات متدرجة للبطاقات - محدثة
const cardGradients = [
  "hover:from-violet-50 hover:to-fuchsia-50 dark:hover:from-violet-900/20 dark:hover:to-fuchsia-900/20",
  "hover:from-fuchsia-50 hover:to-pink-50 dark:hover:from-fuchsia-900/20 dark:hover:to-pink-900/20",
  "hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/20 dark:hover:to-cyan-900/20",
  "hover:from-emerald-50 hover:to-teal-50 dark:hover:from-emerald-900/20 dark:hover:to-teal-900/20",
  "hover:from-amber-50 hover:to-orange-50 dark:hover:from-amber-900/20 dark:hover:to-orange-900/20",
  "hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20",
  "hover:from-indigo-50 hover:to-violet-50 dark:hover:from-indigo-900/20 dark:hover:to-violet-900/20",
  "hover:from-green-50 hover:to-emerald-50 dark:hover:from-green-900/20 dark:hover:to-emerald-900/20",
];

// شارات الخدمات - محدثة
const serviceBadges: Record<string, string> = {
  "تصميم مواقع الشركات": "✨ الأكثر طلباً",
  "تصميم المتاجر الإلكترونية": "🔥 نمو سريع",
  "برمجة تطبيقات الهاتف": "📱 تقنية حديثة",
  "UI/UX Design": "🎨 إبداع",
  "تحسين محركات البحث (SEO)": "📈 نتائج مضمونة",
  "الدعم الفني والصيانة": "🛡️ دائم معك",
  "كتابة المحتوى التسويقي": "✍️ احترافي",
  "استضافة وحماية": "🔒 آمن وسريع",
};

<<<<<<< HEAD
// إحصائيات الخدمات
=======
// إحصائيات الخدمات - محدثة
>>>>>>> 6b0f7410fa10801cb29b683cf6e81bde0bc0b564
const serviceStats = [
  { icon: Zap, label: "خدمة سريعة", value: "خلال ٢٤ ساعة", color: "from-violet-600 to-fuchsia-600" },
  { icon: Heart, label: "عملاء سعداء", value: "٢٠+", color: "from-blue-600 to-cyan-600" },
  { icon: Star, label: "تقييم ممتاز", value: "٤.٩/٥", color: "from-amber-600 to-orange-600" },
  { icon: Shield, label: "ضمان الجودة", value: "١٠٠٪", color: "from-green-600 to-emerald-600" },
];

export default function Services() {
  const { servicesIntro, services } = siteData.home;
  const safeServices = services ?? [];

  // متغيرات الحركة
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Section
      title={servicesIntro?.title ?? ""}
      subtitle={servicesIntro?.subtitle ?? ""}
      badge="جميع الحلول الرقمية"
      className="bg-gradient-to-b from-white to-violet-50/30 dark:from-gray-950 dark:to-violet-950/20"
    >
      {/* شبكة الخدمات */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {safeServices.map((service, index) => {
          const IconComponent = iconMap[service.title] || Sparkles;
          const gradientClass = gradientColors[index % gradientColors.length];
          const cardGradient = cardGradients[index % cardGradients.length];
          const badge = serviceBadges[service.title] || "خدمة مميزة";

          return (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
<<<<<<< HEAD
              <Link href="/services">
                <div
                  className={`relative h-full bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${cardGradient}`}
                >
                  {/* خلفية متحركة */}
=======
              {/* بطاقة الخدمة */}
              <div
                className={`relative h-full bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${cardGradient}`}
              >
                {/* خلفية متحركة */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:via-transparent dark:to-transparent transition-opacity duration-500"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 0.1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* شارة الخدمة */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="absolute top-4 right-4 z-10"
                >
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-bold rounded-full shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    {badge}
                  </span>
                </motion.div>

                {/* الأيقونة مع تأثيرات */}
                <div className={`relative w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${gradientClass} p-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <IconComponent className="w-full h-full" />

                  {/* تأثير نبض حول الأيقونة */}
>>>>>>> 6b0f7410fa10801cb29b683cf6e81bde0bc0b564
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:via-transparent dark:to-transparent transition-opacity duration-500"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 0.1 }}
                    transition={{ duration: 0.6 }}
                  />
<<<<<<< HEAD

                  {/* شارة الخدمة */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-bold rounded-full shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      {badge}
                    </span>
                  </div>

                  {/* الأيقونة مع تأثيرات */}
                  <div className={`relative w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${gradientClass} p-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent className="w-full h-full" />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradientClass} -z-10 blur-md`}
                    />
                  </div>
=======
                </div>

                {/* عنوان الخدمة */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors text-gray-900 dark:text-white">
                  {service.title}
                </h3>

                {/* وصف الخدمة */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{service.desc}</p>
>>>>>>> 6b0f7410fa10801cb29b683cf6e81bde0bc0b564

                  {/* عنوان الخدمة */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors text-gray-900 dark:text-white">
                    {service.title}
                  </h3>

                  {/* وصف الخدمة */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{service.desc}</p>

                  {/* مميزات سريعة */}
                  <div className="space-y-2 mb-4">
                    {["⚡ تنفيذ احترافي", "🎨 تصميم جذاب", "📱 متجاوب بالكامل"].map((feature, idx) => (
<<<<<<< HEAD
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
=======
                      <motion.div
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
                      >
>>>>>>> 6b0f7410fa10801cb29b683cf6e81bde0bc0b564
                        <span className="w-1 h-1 bg-violet-500 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>

<<<<<<< HEAD
                  {/* زر طلب الخدمة */}
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 group-hover:gap-3 transition-all">
                    <span>اطلب الخدمة</span>
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </div>

                  {/* خط سفلي متدرج */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: "right" }}
                  />
                </div>
              </Link>
=======
                {/* رابط الخدمة */}
                <Link href={slug}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors"
                  >
                    <span>اطلب الخدمة</span>
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </motion.div>
                </Link>

                {/* خط سفلي متحرك */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: "right" }}
                />
              </div>
>>>>>>> 6b0f7410fa10801cb29b683cf6e81bde0bc0b564
            </motion.div>
          );
        })}
      </motion.div>

      {/* إحصائيات الخدمات */}
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
              delayChildren: 0.5,
            },
          },
        }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {serviceStats.map((stat, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -4 }}
            className="text-center p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
          >
            <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${stat.color} p-2 text-white`}>
              <stat.icon className="w-full h-full" />
            </div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* رابط عرض كل الخدمات */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center mt-12"
      >
        <Link href="/services">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span>استعرض جميع الخدمات</span>
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
        </Link>
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
          { icon: Award, text: "خدمات معتمدة" },
          { icon: Users, text: "فريق محترف" },
          { icon: Clock, text: "تنفيذ سريع" },
          { icon: Gem, text: "جودة عالية" },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <item.icon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span>{item.text}</span>
          </div>
        ))}
      </motion.div>
    </Section>
  );
}
