"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
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
  ChevronLeft,
  ChevronRight,
  Users,
  Briefcase,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  MessageCircle,
  Phone
} from "lucide-react";
import Section from "./Section";
import Link from "next/link";

// بيانات الموقع - محدثة
const siteData = {
  home: {
    clients: {
      title: "عملاؤنا",
      subtitle: "نفخر بثقة أكثر من ٣٠ شريك نجاح",
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

// ألوان متدرجة لكل قطاع - محدثة
const gradientColors = [
  "from-violet-600 to-fuchsia-600",
  "from-blue-600 to-cyan-600",
  "from-emerald-600 to-teal-600",
  "from-amber-600 to-orange-600",
  "from-indigo-600 to-purple-600",
  "from-rose-600 to-pink-600",
  "from-fuchsia-600 to-purple-600",
  "from-amber-600 to-yellow-600",
  "from-green-600 to-emerald-600",
  "from-sky-600 to-blue-600",
];

// أرقام حقيقية للعملاء - محدثة
const clientCounts = ["٨+", "١٢+", "٦+", "١٠+", "١٥+", "٩+", "٧+", "١١+", "٥+", "٨+"];

// شركات حقيقية وهمية مع شعارات SVG بدل الإيموجي
const clientCompanies = [
  { name: "مستشفى الحياة التخصصي", logo: "/images/clients/healthcare.svg", sector: "العيادات والمراكز الطبية" },
  { name: "شركة إعمار للمقاولات", logo: "/images/clients/construction.svg", sector: "العقارات والمقاولات" },
  { name: "أكاديمية نوليدج بلس", logo: "/images/clients/education.svg", sector: "التعليم والتدريب" },
  { name: "مطاعم الذواقة", logo: "/images/clients/restaurant.svg", sector: "المطاعم والكافيهات" },
  { name: "متجر ستايل للأزياء", logo: "/images/clients/fashion.svg", sector: "المتاجر الإلكترونية" },
  { name: "شركة تكافل للتأمين", logo: "/images/clients/insurance.svg", sector: "الشركات الناشئة" },
  { name: "مكتب المحاماة المتحد", logo: "/images/clients/legal.svg", sector: "المحاماة والاستشارات" },
  { name: "منتجعات الواحة", logo: "/images/clients/hotel.svg", sector: "الفنادق والسياحة" },
  { name: "مؤسسة الخير الخيرية", logo: "/images/clients/charity.svg", sector: "الجمعيات الخيرية" },
  { name: "معرض إكسبو الدولي", logo: "/images/clients/expo.svg", sector: "المعارض والمؤتمرات" },
];

// إحصائيات سريعة - محدثة
const stats = [
  { label: "قطاع نخدمها", value: "١٠", icon: Building2, color: "from-violet-600 to-fuchsia-600" },
  { label: "مشاريع منجزة", value: "٤٥+", icon: Briefcase, color: "from-blue-600 to-cyan-600" },
  { label: "عملاء حاليون", value: "٣٢+", icon: Heart, color: "from-amber-600 to-orange-600" },
  { label: "نسبة رضا", value: "٩٨٪", icon: Star, color: "from-green-600 to-emerald-600" },
];

// شعارات إضافية للثقة
const trustBadges = [
  { icon: Shield, text: "ضمان الجودة" },
  { icon: Zap, text: "تنفيذ سريع" },
  { icon: Globe, text: "خدمة عالمية" },
  { icon: Users, text: "فريق محترف" },
];

type SectorItem = string;

export default function ClientsLogos() {
  const c = siteData.home.clients;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentLogoPage, setCurrentLogoPage] = useState(0);

  const items = (c.items ?? []) as SectorItem[];

  const getIcon = (name: string) => {
    return iconMap[name] || Building2;
  };

  // Pagination للشعارات
  const logosPerPage = 5;
  const totalLogoPages = Math.ceil(clientCompanies.length / logosPerPage);
  const currentLogos = clientCompanies.slice(
    currentLogoPage * logosPerPage,
    (currentLogoPage + 1) * logosPerPage
  );

  // متغيرات الحركة
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  return (
    <Section 
      title={c.title} 
      subtitle={c.subtitle} 
      badge="شركاء النجاح"
      className="bg-gradient-to-b from-white to-violet-50/30 dark:from-gray-950 dark:to-violet-950/20"
    >
      {/* شارات الثقة */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {trustBadges.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={`badge-${idx}`}
              variants={fadeInUp}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <Icon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{badge.text}</span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* القطاعات مع أيقونات متحركة - شبكة */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
      >
        {items.map((name, index) => {
          const IconComponent = getIcon(name);
          const gradient = gradientColors[index % gradientColors.length];

          return (
            <motion.div
              key={`grid-${name}-${index}`}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* خلفية متدرجة عند الهوفر */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 dark:opacity-0 dark:group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* الأيقونة */}
                <div className={`relative w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${gradient} p-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-full h-full" />
                  
                  {/* تأثير نبض خفيف */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} -z-10 blur-md`}
                  />
                </div>

                {/* اسم القطاع */}
                <h3 className="text-sm font-bold text-center mb-2 text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {name}
                </h3>

                {/* إحصائيات */}
                <div className="flex items-center justify-center gap-1 text-xs">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="text-gray-600 dark:text-gray-400">{clientCounts[index]} مشروع</span>
                </div>

                {/* شارة التخصص */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs rounded-full">
                    <Award className="w-3 h-3" />
                    متخصصون
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* إحصائيات سريعة */}
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
            }
          }
        }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={`stat-${index}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -4 }}
              className="relative bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 dark:opacity-0 dark:group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${stat.color} p-2.5 text-white`}>
                  <Icon className="w-full h-full" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* شعارات العملاء الحقيقية */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16"
      >
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 rounded-full text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
            من شركاء النجاح
          </span>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">نفتخر بثقتهم</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
            عشرات الشركات والمؤسسات تثق في خدماتنا
          </p>
        </div>

        {/* شبكة شعارات العملاء */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {currentLogos.map((company, idx) => (
            <motion.div
              key={`company-${idx}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 flex items-center justify-center text-3xl">
                {company.logo}
              </div>
              <h4 className="text-sm font-bold text-center text-gray-800 dark:text-gray-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {company.name}
              </h4>
              <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-1">{company.sector}</p>
            </motion.div>
          ))}
        </div>

        {/* Pagination للشعارات */}
        {totalLogoPages > 1 && (
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentLogoPage(prev => Math.max(0, prev - 1))}
              disabled={currentLogoPage === 0}
              className={`p-2 rounded-full border ${
                currentLogoPage === 0
                  ? 'border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-600 cursor-not-allowed'
                  : 'border-violet-200 dark:border-violet-800 text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/30'
              } transition-colors`}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              صفحة {currentLogoPage + 1} من {totalLogoPages}
            </span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentLogoPage(prev => Math.min(totalLogoPages - 1, prev + 1))}
              disabled={currentLogoPage === totalLogoPages - 1}
              className={`p-2 rounded-full border ${
                currentLogoPage === totalLogoPages - 1
                  ? 'border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-600 cursor-not-allowed'
                  : 'border-violet-200 dark:border-violet-800 text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/30'
              } transition-colors`}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
          </div>
        )}
      </motion.div>

      {/* دعوة للانضمام */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-fuchsia-600/5 dark:from-violet-600/10 dark:to-fuchsia-600/10 rounded-3xl" />
        
        <div className="relative bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 text-center shadow-xl">
          {/* أيقونات متحركة */}
          <div className="flex justify-center gap-4 mb-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={`sparkle-${i}`}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            انضم إلى قائمة شركاء النجاح
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            كن واحداً من عشرات العملاء الذين يثقون في خدماتنا. دعنا نناقش مشروعك ونساعدك في تحقيق أهدافك الرقمية.
          </p>

          {/* إحصائيات سريعة */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">٣٢+</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">عميل حالي</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">٤٥+</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">مشروع منجز</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">٩٨٪</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">نسبة رضا</div>
            </div>
          </div>

          {/* زر الدعوة */}
          <Link href="/brief">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>ابدأ مشروعك الآن</span>
              <Rocket className="w-5 h-5" />
            </motion.button>
          </Link>

          <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
            * استشارة مجانية • تسليم سريع • دعم فني ٢٤/٧
          </p>
        </div>
      </motion.div>

      {/* روابط التواصل السريع */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-12 flex flex-wrap justify-center gap-4"
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          <span>تواصل معنا</span>
        </Link>
        <Link
          href="/quote"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <Phone className="w-4 h-4" />
          <span>طلب عرض سعر</span>
        </Link>
      </motion.div>
    </Section>
  );
}
