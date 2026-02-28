"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

// بيانات القطاعات
const sectors = [
  { name: "العيادات والمراكز الطبية", icon: Stethoscope, count: "٨+", gradient: "from-violet-600 to-fuchsia-600" },
  { name: "العقارات والمقاولات", icon: Building2, count: "١٢+", gradient: "from-blue-600 to-cyan-600" },
  { name: "التعليم والتدريب", icon: GraduationCap, count: "٦+", gradient: "from-emerald-600 to-teal-600" },
  { name: "المطاعم والكافيهات", icon: Utensils, count: "١٠+", gradient: "from-amber-600 to-orange-600" },
  { name: "المتاجر الإلكترونية", icon: ShoppingCart, count: "١٥+", gradient: "from-indigo-600 to-purple-600" },
  { name: "الشركات الناشئة", icon: Rocket, count: "٩+", gradient: "from-rose-600 to-pink-600" },
  { name: "المحاماة والاستشارات", icon: Scale, count: "٧+", gradient: "from-fuchsia-600 to-purple-600" },
  { name: "الفنادق والسياحة", icon: Hotel, count: "١١+", gradient: "from-amber-600 to-yellow-600" },
  { name: "الجمعيات الخيرية", icon: Heart, count: "٥+", gradient: "from-green-600 to-emerald-600" },
  { name: "المعارض والمؤتمرات", icon: Calendar, count: "٨+", gradient: "from-sky-600 to-blue-600" },
];

// إحصائيات
const stats = [
  { label: "قطاع نخدمها", value: "١٠", icon: Building2, gradient: "from-violet-600 to-fuchsia-600" },
  { label: "مشاريع منجزة", value: "٤٥+", icon: Briefcase, gradient: "from-blue-600 to-cyan-600" },
  { label: "عملاء حاليون", value: "٣٢+", icon: Heart, gradient: "from-amber-600 to-orange-600" },
  { label: "نسبة رضا", value: "٩٨٪", icon: Star, gradient: "from-green-600 to-emerald-600" },
];

// شارات الثقة
const trustBadges = [
  { icon: Shield, text: "ضمان الجودة" },
  { icon: Zap, text: "تنفيذ سريع" },
  { icon: Globe, text: "خدمة عالمية" },
  { icon: Users, text: "فريق محترف" },
];

// شركات وهمية (مؤقتاً بدون صور)
const clientCompanies = [
  { name: "مستشفى الحياة", sector: "الرعاية الصحية" },
  { name: "شركة إعمار", sector: "المقاولات" },
  { name: "أكاديمية نوليدج", sector: "التعليم" },
  { name: "مطاعم الذواقة", sector: "الضيافة" },
  { name: "متجر ستايل", sector: "التجارة الإلكترونية" },
  { name: "شركة تكافل", sector: "التأمين" },
  { name: "مكتب المحاماة", sector: "الاستشارات" },
  { name: "منتجعات الواحة", sector: "السياحة" },
  { name: "مؤسسة الخير", sector: "الخيرية" },
  { name: "معرض إكسبو", sector: "المعارض" },
];

export default function ClientsLogos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentLogoPage, setCurrentLogoPage] = useState(0);
  
  const logosPerPage = 5;
  const totalLogoPages = Math.ceil(clientCompanies.length / logosPerPage);
  const currentLogos = clientCompanies.slice(
    currentLogoPage * logosPerPage,
    (currentLogoPage + 1) * logosPerPage
  );

  return (
    <Section 
      title="عملاؤنا" 
      subtitle="نفخر بثقة أكثر من ٣٠ شريك نجاح" 
      badge="شركاء النجاح"
      className="bg-gradient-to-b from-white to-violet-50/30 dark:from-gray-950 dark:to-violet-950/20"
    >
      {/* شارات الثقة - CSS Grid بسيط */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {trustBadges.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <div
              key={`badge-${idx}`}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{badge.text}</span>
            </div>
          );
        })}
      </div>

      {/* شبكة القطاعات - CSS Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {sectors.map((sector, index) => {
          const Icon = sector.icon;
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={`sector-${index}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* خلفية متدرجة عند الهوفر */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-10 dark:opacity-0 dark:group-hover:opacity-20 transition-opacity duration-300`} />

                {/* الأيقونة */}
                <div className={`relative w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${sector.gradient} p-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full" />
                </div>

                {/* اسم القطاع */}
                <h3 className="text-sm font-bold text-center mb-2 text-gray-800 dark:text-gray-200">
                  {sector.name}
                </h3>

                {/* إحصائيات */}
                <div className="flex items-center justify-center gap-1 text-xs">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="text-gray-600 dark:text-gray-400">{sector.count} مشروع</span>
                </div>

                {/* شارة التخصص - تظهر عند الهوفر فقط */}
                {isHovered && (
                  <div className="absolute top-3 right-3 animate-pulse">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs rounded-full">
                      <Award className="w-3 h-3" />
                      متخصصون
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* إحصائيات سريعة - CSS Grid */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={`stat-${index}`}
              className="relative bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 dark:opacity-0 dark:group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${stat.gradient} p-2.5 text-white`}>
                  <Icon className="w-full h-full" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* شعارات العملاء */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 rounded-full text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
            من شركاء النجاح
          </span>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">نفتخر بثقتهم</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
            عشرات الشركات والمؤسسات تثق في خدماتنا
          </p>
        </div>

        {/* شبكة شعارات العملاء - CSS Grid بسيط */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {currentLogos.map((company, idx) => (
            <div
              key={`company-${idx}`}
              className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-violet-600 dark:text-violet-400" />
              </div>
              <h4 className="text-sm font-bold text-center text-gray-800 dark:text-gray-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {company.name}
              </h4>
              <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-1">{company.sector}</p>
            </div>
          ))}
        </div>

        {/* Pagination للشعارات */}
        {totalLogoPages > 1 && (
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentLogoPage(prev => Math.max(0, prev - 1))}
              disabled={currentLogoPage === 0}
              className={`p-2 rounded-full border ${
                currentLogoPage === 0
                  ? 'border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-600 cursor-not-allowed'
                  : 'border-violet-200 dark:border-violet-800 text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/30'
              } transition-colors`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              صفحة {currentLogoPage + 1} من {totalLogoPages}
            </span>
            <button
              onClick={() => setCurrentLogoPage(prev => Math.min(totalLogoPages - 1, prev + 1))}
              disabled={currentLogoPage === totalLogoPages - 1}
              className={`p-2 rounded-full border ${
                currentLogoPage === totalLogoPages - 1
                  ? 'border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-600 cursor-not-allowed'
                  : 'border-violet-200 dark:border-violet-800 text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/30'
              } transition-colors`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* دعوة للانضمام */}
      <div className="mt-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-fuchsia-600/5 dark:from-violet-600/10 dark:to-fuchsia-600/10 rounded-3xl" />
        
        <div className="relative bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 text-center shadow-xl">
          {/* أيقونات متحركة - CSS Animation */}
          <div className="flex justify-center gap-4 mb-6">
            {[1, 2, 3].map((i) => (
              <div
                key={`sparkle-${i}`}
                className="animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            انضم إلى قائمة شركاء النجاح
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            كن واحداً من عشرات العملاء الذين يثقون في خدماتنا. دعنا نناقش مشروعك ونساعدك في تحقيق أهدافك الرقمية.
          </p>

          {/* إحصائيات سريعة */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
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
            <button
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>ابدأ مشروعك الآن</span>
              <Rocket className="w-5 h-5" />
            </button>
          </Link>

          <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
            * استشارة مجانية • تسليم سريع • دعم فني ٢٤/٧
          </p>
        </div>
      </div>

      {/* روابط التواصل السريع */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300"
        >
          <MessageCircle className="w-4 h-4" />
          <span>تواصل معنا</span>
        </Link>
        <Link
          href="/quote"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <Phone className="w-4 h-4" />
          <span>طلب عرض سعر</span>
        </Link>
      </div>
    </Section>
  );
}