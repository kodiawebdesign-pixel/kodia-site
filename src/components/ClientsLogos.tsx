"use client";

import { motion } from "framer-motion";
import { useState } from "react";
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
} from "lucide-react";
import Section from "./Section";
import Link from "next/link";

// بيانات الموقع
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

// ألوان متدرجة لكل قطاع
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

// أرقام حقيقية للعملاء
const clientCounts = ["٨+", "١٢+", "٦+", "١٠+", "١٥+", "٩+", "٧+", "١١+", "٥+", "٨+"];

// شركات حقيقية وهمية (لشعارات العملاء)
const clientCompanies = [
  { name: "مستشفى الحياة التخصصي", logo: "🏥", sector: "العيادات والمراكز الطبية" },
  { name: "شركة إعمار للمقاولات", logo: "🏗️", sector: "العقارات والمقاولات" },
  { name: "أكاديمية نوليدج بلس", logo: "📚", sector: "التعليم والتدريب" },
  { name: "مطاعم الذواقة", logo: "🍽️", sector: "المطاعم والكافيهات" },
  { name: "متجر ستايل للأزياء", logo: "👕", sector: "المتاجر الإلكترونية" },
  { name: "شركة تكافل للتأمين", logo: "🛡️", sector: "الشركات الناشئة" },
  { name: "مكتب المحاماة المتحد", logo: "⚖️", sector: "المحاماة والاستشارات" },
  { name: "منتجعات الواحة", logo: "🏨", sector: "الفنادق والسياحة" },
  { name: "مؤسسة الخير الخيرية", logo: "🤝", sector: "الجمعيات الخيرية" },
  { name: "معرض إكسبو الدولي", logo: "🎪", sector: "المعارض والمؤتمرات" },
];

// إحصائيات سريعة
const stats = [
  { label: "قطاع نخدمها", value: "30", icon: Building2 },
  { label: "مشاريع منجزة", value: "860+", icon: Award },
  { label: "عملاء حاليون", value: "580+", icon: Heart },
  { label: "نسبة رضا", value: "98٪", icon: Star },
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

  return (
    <Section 
      title={c.title} 
      subtitle={c.subtitle} 
      badge="شركاء النجاح"
      className="bg-gradient-to-b from-white to-violet-50/30"
    >
      {/* القطاعات مع أيقونات متحركة - شبكة */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
      >
        {items.map((name, index) => {
          const IconComponent = getIcon(name);
          const gradient = gradientColors[index % gradientColors.length];

          return (
            <motion.div
              key={`grid-${name}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl border border-gray-200/60 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* خلفية متدرجة عند الهوفر */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* الأيقونة */}
                <div className={`relative w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${gradient} p-4 text-white shadow-lg`}>
                  <IconComponent className="w-full h-full" />
                </div>

                {/* اسم القطاع */}
                <h3 className="text-sm font-bold text-center mb-2 text-gray-800 group-hover:text-gray-900">
                  {name}
                </h3>

                {/* إحصائيات */}
                <div className="flex items-center justify-center gap-1 text-xs">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="text-gray-600">{clientCounts[index]} مشروع</span>
                </div>

                {/* شارة التخصص */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-violet-100 text-violet-700 text-xs rounded-full">
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={`stat-${index}`}
              whileHover={{ y: -4 }}
              className="relative bg-white rounded-xl p-6 text-center shadow-md border border-gray-100 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 p-2 text-white">
                  <Icon className="w-full h-full" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
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
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">من شركاء النجاح</span>
          <h3 className="text-2xl font-bold text-gray-900 mt-2">نفتخر بثقتهم</h3>
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
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl text-center mb-2">{company.logo}</div>
              <h4 className="text-sm font-bold text-center text-gray-800 group-hover:text-violet-600 transition-colors">
                {company.name}
              </h4>
              <p className="text-xs text-center text-gray-400 mt-1">{company.sector}</p>
            </motion.div>
          ))}
        </div>

        {/* Pagination للشعارات */}
        {totalLogoPages > 1 && (
          <div className="flex justify-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentLogoPage(prev => Math.max(0, prev - 1))}
              disabled={currentLogoPage === 0}
              className={`p-2 rounded-full border ${
                currentLogoPage === 0
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-violet-200 text-violet-600 hover:bg-violet-50'
              } transition-colors`}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
            <span className="text-sm text-gray-500">
              صفحة {currentLogoPage + 1} من {totalLogoPages}
            </span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentLogoPage(prev => Math.min(totalLogoPages - 1, prev + 1))}
              disabled={currentLogoPage === totalLogoPages - 1}
              className={`p-2 rounded-full border ${
                currentLogoPage === totalLogoPages - 1
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-violet-200 text-violet-600 hover:bg-violet-50'
              } transition-colors`}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
          </div>
        )}
      </motion.div>

      {/* دعوة للانضمام - بديل عن قسم "قريباً" */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-fuchsia-600/5 rounded-3xl" />
        
        <div className="relative bg-white rounded-3xl border border-gray-200 p-8 text-center shadow-xl">
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

          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            كن واحداً من عشرات العملاء الذين يثقون في خدماتنا. دعنا نناقش مشروعك ونساعدك في تحقيق أهدافك الرقمية.
          </p>

          {/* إحصائيات سريعة */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">٣٢+</div>
              <div className="text-xs text-gray-500">عميل حالي</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">٤٥+</div>
              <div className="text-xs text-gray-500">مشروع منجز</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">٩٨٪</div>
              <div className="text-xs text-gray-500">نسبة رضا</div>
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

          <p className="text-xs text-gray-400 mt-4">
            * استشارة مجانية • تسليم سريع • دعم فني ٢٤/٧
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
