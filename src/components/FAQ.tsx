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
  Zap
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";

// تصنيفات الأسئلة
const categories = [
  { id: "all", label: "الكل", icon: HelpCircle },
  { id: "general", label: "عام", icon: Star },
  { id: "pricing", label: "الأسعار", icon: Sparkles },
  { id: "technical", label: "تقني", icon: Zap },
  { id: "support", label: "الدعم", icon: Shield },
];

// ألوان متدرجة للتصنيفات
const categoryColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-amber-500 to-orange-500",
  "from-emerald-500 to-teal-500",
  "from-rose-500 to-red-500",
];

// أرقام ثابتة للمشاهدات (بدلاً من الأرقام العشوائية)
const viewCounts = [556, 1054, 234, 876, 432, 654, 789, 345, 567, 890];
const helpfulPercentages = [95, 98, 92, 96, 94, 97, 93, 95, 98, 96];

// إضافة تصنيفات للأسئلة - بأرقام ثابتة
const faqWithCategories = siteData.home.faq.items.map((item, index) => ({
  ...item,
  category: ["general", "pricing", "technical", "support", "general"][index % 5],
  views: viewCounts[index % viewCounts.length],
  helpful: helpfulPercentages[index % helpfulPercentages.length],
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

  return (
    <Section 
      title={f.title} 
      subtitle={f.subtitle}
      badge="نجيب على استفساراتك"
    >
      {/* شريط البحث والتصنيفات */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 space-y-4"
      >
        {/* مربع البحث */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="ابحث في الأسئلة الشائعة..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pr-10 px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        {/* تصنيفات الأسئلة */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            const gradient = categoryColors[idx % categoryColors.length];

            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${gradient} text-white shadow-lg`
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </motion.button>
            );
          })}
        </div>

        {/* عدد النتائج */}
        <p className="text-center text-sm text-gray-500">
          {filteredFaqs.length} سؤال
        </p>
      </motion.div>

      {/* قائمة الأسئلة */}
      <div className="space-y-4 max-w-3xl mx-auto">
        {filteredFaqs.map((item, idx) => {
          const open = openIndex === idx;
          const gradient = categoryColors[idx % categoryColors.length];

          return (
            <motion.div
              key={`faq-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              <div className={`relative bg-white rounded-2xl border border-gray-200/50 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                open ? 'shadow-lg border-blue-200' : ''
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
                    <h3 className="text-base font-bold group-hover:text-blue-600 transition-colors">
                      {item.q}
                    </h3>
                    
                    {/* إحصائيات السؤال - بأرقام ثابتة */}
                    <div className="flex items-center gap-3 mt-1">
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="w-3 h-3" />
                        {mounted ? item.views : item.views} مشاهدة
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <ThumbsUp className="w-3 h-3" />
                        {mounted ? item.helpful : item.helpful}% مفيد
                      </span>
                    </div>
                  </div>

                  {/* أيقونة السؤال */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center text-white`}>
                    <HelpCircle className="w-4 h-4" />
                  </div>

                  {/* أيقونة السهم */}
                  <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      open ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'
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
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item.a}
                          </p>

                          {/* روابط مفيدة */}
                          <div className="mt-4 flex flex-wrap gap-2">
                            <span className="text-xs text-gray-400">هل كان هذا مفيداً؟</span>
                            <button className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1">
                              <ThumbsUp className="w-3 h-3" />
                              نعم
                            </button>
                            <button className="text-xs text-gray-500 hover:text-gray-700">
                              لا
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* لم تجد سؤالك؟ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 text-center"
      >
        <div className="flex justify-center mb-4">
          <div className="relative">
            <MessageCircle className="w-12 h-12 text-blue-600" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-blue-500 rounded-full blur-xl -z-10"
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2">لم تجد إجابة لسؤالك؟</h3>
        <p className="text-gray-600 mb-6">
          تواصل معنا مباشرة وسنجيب على جميع استفساراتك في أسرع وقت
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={siteData.brand.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            واتساب
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`tel:${siteData.brand.phoneDisplay}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            اتصل بنا
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${siteData.brand.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            بريد إلكتروني
          </motion.a>
        </div>
      </motion.div>

      {/* إحصائيات سريعة */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { icon: HelpCircle, label: "سؤال", value: f.items.length },
          { icon: Clock, label: "متوسط الرد", value: "أقل من ساعة" },
          { icon: ThumbsUp, label: "نسبة الرضا", value: "٩٥٪" },
          { icon: Star, label: "تقييم", value: "٤.٨/٥" },
        ].map((stat, idx) => (
          <motion.div
            key={`stat-${idx}`}
            whileHover={{ y: -4 }}
            className="text-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
          >
            <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-gray-900">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}