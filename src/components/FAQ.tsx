"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  MessageCircle, 
  Phone,
  Mail,
  Sparkles,
  Star,
  ThumbsUp,
  Clock,
  Shield,
  Zap,
  Users,
  Award,
  Heart,
  Target
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";
import Link from "next/link";

// تصنيفات الأسئلة - محدثة
const categories = [
  { id: "all", label: "الكل", icon: HelpCircle, color: "from-violet-600 to-fuchsia-600" },
  { id: "general", label: "عام", icon: Star, color: "from-blue-600 to-cyan-600" },
  { id: "pricing", label: "الأسعار", icon: Sparkles, color: "from-amber-600 to-orange-600" },
  { id: "technical", label: "تقني", icon: Zap, color: "from-emerald-600 to-teal-600" },
  { id: "support", label: "الدعم", icon: Shield, color: "from-purple-600 to-pink-600" },
  { id: "delivery", label: "التسليم", icon: Clock, color: "from-indigo-600 to-violet-600" },
];

// ألوان متدرجة للتصنيفات - محدثة
const categoryColors = [
  "from-violet-600 to-fuchsia-600",
  "from-blue-600 to-cyan-600",
  "from-amber-600 to-orange-600",
  "from-emerald-600 to-teal-600",
  "from-purple-600 to-pink-600",
  "from-indigo-600 to-violet-600",
];

// أرقام ثابتة للمشاهدات (بدلاً من الأرقام العشوائية)
const viewCounts = [556, 1054, 234, 876, 432, 654, 789, 345, 567, 890, 678, 923];
const helpfulPercentages = [95, 98, 92, 96, 94, 97, 93, 95, 98, 96, 97, 94];

// إضافة تصنيفات للأسئلة - بأرقام ثابتة
const faqWithCategories = siteData.home.faq.items.map((item, index) => ({
  ...item,
  category: ["general", "pricing", "technical", "support", "delivery", "general"][index % 6],
  views: viewCounts[index % viewCounts.length],
  helpful: helpfulPercentages[index % helpfulPercentages.length],
  isPopular: index < 3, // أول 3 أسئلة شائعة
}));

export default function FAQ() {
  const f = siteData.home.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [mounted, setMounted] = useState(false);

  // التأكد من أن الكود يعمل فقط بعد التحميل على العميل
  useEffect(() => {
    setMounted(true);
  }, []);

  // تصفية الأسئلة حسب البحث والتصنيف
  const filteredFaqs = faqWithCategories.filter((item) => {
    const matchesSearch = item.q.includes(searchQuery) || item.a.includes(searchQuery);
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // الأسئلة الشائعة (للعرض المنفصل)
  const popularFaqs = faqWithCategories.filter(item => item.isPopular);

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
      title={f.title} 
      subtitle={f.subtitle}
      badge="نجيب على استفساراتك"
      className="bg-gradient-to-b from-white to-violet-50/30 dark:from-gray-950 dark:to-violet-950/20"
    >
      {/* الأسئلة الشائعة (شريط سريع) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="flex flex-wrap justify-center gap-3 mb-8"
      >
        {popularFaqs.map((faq, idx) => (
          <motion.button
            key={`popular-${idx}`}
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const index = faqWithCategories.findIndex(item => item.q === faq.q);
              setOpenIndex(index);
              // تمرير سلس إلى السؤال
              setTimeout(() => {
                document.getElementById(`faq-${index}`)?.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'center' 
                });
              }, 100);
            }}
            className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all text-sm text-gray-700 dark:text-gray-300"
          >
            <Sparkles className="w-3 h-3 inline ml-1 text-amber-500" />
            {faq.q.length > 30 ? faq.q.substring(0, 30) + '...' : faq.q}
          </motion.button>
        ))}
      </motion.div>

      {/* شريط البحث والتصنيفات */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 space-y-4"
      >
        {/* مربع البحث */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="ابحث في الأسئلة الشائعة..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pr-10 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
          />
        </div>

        {/* تصنيفات الأسئلة */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;

            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </motion.button>
            );
          })}
        </div>

        {/* عدد النتائج */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          <span className="font-bold text-violet-600 dark:text-violet-400">{filteredFaqs.length}</span> سؤال
          {searchQuery && ` عن "${searchQuery}"`}
        </p>
      </motion.div>

      {/* قائمة الأسئلة */}
      <div className="space-y-4 max-w-3xl mx-auto">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((item, idx) => {
            const open = openIndex === idx;
            const gradient = categoryColors[idx % categoryColors.length];
            const categoryInfo = categories.find(c => c.id === item.category);

            return (
              <motion.div
                id={`faq-${idx}`}
                key={`faq-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group scroll-mt-24"
              >
                <div className={`relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                  open ? 'shadow-lg border-violet-200 dark:border-violet-800' : ''
                }`}>
                  {/* شريط جانبي متدرج */}
                  <motion.div 
                    className={`absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b ${gradient}`}
                    initial={{ height: 0 }}
                    animate={{ height: open ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* رأس السؤال */}
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between gap-4 text-right"
                    onClick={() => setOpenIndex(open ? null : idx)}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {/* شارة التصنيف */}
                        {categoryInfo && (
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r ${categoryInfo.color} text-white text-xs rounded-full`}>
                            <categoryInfo.icon className="w-3 h-3" />
                            {categoryInfo.label}
                          </span>
                        )}
                        {/* شارة شائع */}
                        {item.isPopular && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs rounded-full">
                            <Sparkles className="w-3 h-3" />
                            شائع
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-bold group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors text-gray-900 dark:text-white">
                        {item.q}
                      </h3>
                      
                      {/* إحصائيات السؤال - بأرقام ثابتة */}
                      <div className="flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
                          <Clock className="w-3 h-3" />
                          {mounted ? item.views : item.views} مشاهدة
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
                          <ThumbsUp className="w-3 h-3" />
                          {mounted ? item.helpful : item.helpful}% مفيد
                        </span>
                      </div>
                    </div>

                    {/* أيقونة السؤال */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-md`}>
                      <HelpCircle className="w-5 h-5" />
                    </div>

                    {/* أيقونة السهم */}
                    <motion.div
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        open 
                          ? 'bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  {/* الإجابة - تظهر عند الفتح */}
                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 pr-14">
                          <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                              {item.a}
                            </p>

                            {/* روابط مفيدة */}
                            <div className="mt-4 flex flex-wrap items-center gap-3">
                              <span className="text-xs text-gray-400 dark:text-gray-500">هل كان هذا مفيداً؟</span>
                              <div className="flex gap-2">
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="text-xs text-green-600 hover:text-green-700 dark:text-green-400 flex items-center gap-1 px-2 py-1 bg-green-50 dark:bg-green-900/30 rounded-full"
                                >
                                  <ThumbsUp className="w-3 h-3" />
                                  نعم
                                </motion.button>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 px-2 py-1 bg-gray-50 dark:bg-gray-800 rounded-full"
                                >
                                  لا
                                </motion.button>
                              </div>
                            </div>

                            {/* روابط ذات صلة */}
                            <div className="mt-3 text-xs text-violet-600 dark:text-violet-400">
                              <Link href="/contact" className="hover:underline">
                                تواصل معنا للمزيد من التفاصيل
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })
        ) : (
          // رسالة عند عدم وجود نتائج
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700"
          >
            <HelpCircle className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">لا توجد نتائج</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">لم نجد أسئلة تطابق بحثك. جرب كلمات بحث مختلفة.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="text-violet-600 hover:text-violet-700 dark:text-violet-400 font-medium"
            >
              عرض جميع الأسئلة
            </button>
          </motion.div>
        )}
      </div>

      {/* لم تجد سؤالك؟ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 rounded-2xl p-8 border border-violet-100 dark:border-violet-800 text-center"
      >
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white shadow-xl">
              <MessageCircle className="w-8 h-8" />
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-violet-500 rounded-2xl blur-xl -z-10"
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">لم تجد إجابة لسؤالك؟</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
          تواصل معنا مباشرة وسنجيب على جميع استفساراتك في أسرع وقت. فريقنا جاهز لمساعدتك.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={siteData.brand.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            واتساب
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`tel:${siteData.brand.phoneE164}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            اتصل بنا
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${siteData.brand.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            بريد إلكتروني
          </motion.a>
        </div>
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
        {[
          { icon: HelpCircle, label: "سؤال", value: f.items.length, color: "from-violet-600 to-fuchsia-600" },
          { icon: Clock, label: "متوسط الرد", value: "أقل من ساعة", color: "from-blue-600 to-cyan-600" },
          { icon: ThumbsUp, label: "نسبة الرضا", value: "٩٥٪", color: "from-amber-600 to-orange-600" },
          { icon: Award, label: "دقة المعلومات", value: "٩٨٪", color: "from-green-600 to-emerald-600" },
        ].map((stat, idx) => (
          <motion.div
            key={`stat-${idx}`}
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
    </Section>
  );
}
