"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ThumbsUp,
  User,
  Award,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";
import Image from "next/image";
import Link from "next/link";

// توسيع بيانات الشهادات
const testimonialsData = siteData.home.testimonials;

// تواريخ ثابتة
const dates = ["منذ يومين", "منذ أسبوع", "منذ ٣ أيام", "منذ شهر", "منذ أسبوعين"];

// صور حقيقية من Unsplash
const avatarImages = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1494790108777-8f9c9f12b1b6?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
];

// نوع الشهادة
type EnhancedTestimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  date: string;
  avatar: string;
  project: string;
};

// تحسين بيانات الشهادات
const enhancedTestimonials: EnhancedTestimonial[] = testimonialsData.items.map(
  (item: any, index: number) => ({
    ...item,
    rating: 5,
    date: dates[index % dates.length],
    avatar: avatarImages[index % avatarImages.length],
    project: ["موقع شركة", "متجر إلكتروني", "تطبيق موبايل", "UI/UX", "SEO"][index % 5],
  })
);

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedQuote, setExpandedQuote] = useState<number | null>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % enhancedTestimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? enhancedTestimonials.length - 1 : prev - 1
    );
  };

  // ✅ الحل النهائي لمشكلة 'active is possibly undefined'
  if (!enhancedTestimonials.length) return null;
  const active = enhancedTestimonials[activeIndex];

  return (
    <Section
      title={testimonialsData.title}
      subtitle={testimonialsData.subtitle}
      badge="آراء حقيقية"
      className="bg-gradient-to-b from-white to-violet-50/30"
    >
      {/* شبكة الشهادات */}
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
        {enhancedTestimonials.map((testimonial, idx) => {
          const isExpanded = expandedQuote === idx;

          return (
            <motion.div
              key={`testimonial-${idx}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
              className="group relative cursor-pointer"
              onClick={() => setExpandedQuote(isExpanded ? null : idx)}
            >
              <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                {/* خلفية متدرجة عند الهوفر */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* أيقونة الاقتباس */}
                <div className="absolute top-4 left-4 text-violet-200">
                  <Quote className="w-8 h-8 rotate-180" />
                </div>

                {/* محتوى البطاقة */}
                <div className="relative p-6">
                  {/* صورة العميل واسمه */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 p-0.5">
                        <div className="w-full h-full rounded-full bg-white overflow-hidden relative">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      {/* علامة التحقق */}
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-400">
                          {testimonial.date}
                        </span>
                        <span className="text-xs px-2 py-0.5 bg-violet-100 text-violet-700 rounded-full">
                          {testimonial.project}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* التقييم بالنجوم */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={`star-${idx}-${i}`}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "text-amber-400 fill-amber-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* نص الشهادة */}
                  <motion.div
                    animate={{ height: isExpanded ? "auto" : "4.5rem" }}
                    className="overflow-hidden"
                  >
                    <p
                      className={`text-gray-700 leading-relaxed ${
                        !isExpanded ? "line-clamp-3" : ""
                      }`}
                    >
                      “{testimonial.quote}”
                    </p>
                  </motion.div>

                  {/* زر عرض المزيد */}
                  {testimonial.quote.length > 100 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedQuote(isExpanded ? null : idx);
                      }}
                      className="text-violet-600 text-sm font-medium mt-2 hover:text-violet-700 transition-colors"
                    >
                      {isExpanded ? "عرض أقل" : "قراءة المزيد..."}
                    </button>
                  )}
                </div>

                {/* خط سفلي متدرج */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "right" }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* الشهادة المركزية (السلايدر) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="relative mt-16"
      >
        <div className="relative bg-white rounded-3xl border border-gray-200 p-8 shadow-xl">
          {/* أزرار التنقل */}
          <button
            onClick={handlePrev}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-violet-600 transition-colors z-10 border border-gray-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-violet-600 transition-colors z-10 border border-gray-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* الشهادة المركزية */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`active-${activeIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 p-1">
                    <div className="w-full h-full rounded-full bg-white overflow-hidden relative">
                      <Image
                        src={active.avatar}
                        alt={active.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-5 h-5 rounded-full border-2 border-white" />
                </div>
              </div>

              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={`active-star-${i}`}
                    className={`w-5 h-5 ${
                      i < active.rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                “{active.quote}”
              </p>

              <h4 className="font-bold text-lg text-gray-900">{active.name}</h4>
              <p className="text-gray-500 text-sm mb-2">{active.role}</p>
              <p className="text-xs text-gray-400">{active.date}</p>

              {/* نقاط التنقل */}
              <div className="flex justify-center gap-2 mt-6">
                {enhancedTestimonials.map((_, idx) => (
                  <button
                    key={`dot-${idx}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeIndex
                        ? "w-8 bg-gradient-to-r from-violet-600 to-fuchsia-600"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
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
          { icon: Star, label: "تقييم عام", value: "٤.٩/٥", color: "from-amber-500 to-yellow-500" },
          { icon: MessageCircle, label: "شهادة موثقة", value: "٢٤+", color: "from-blue-500 to-cyan-500" },
          { icon: ThumbsUp, label: "نسبة رضا", value: "٩٨٪", color: "from-green-500 to-emerald-500" },
          { icon: Award, label: "عملاء دائمون", value: "٨٥٪", color: "from-violet-600 to-fuchsia-600" },
        ].map((stat, index) => {
          const StatIcon = stat.icon;
          return (
            <motion.div
              key={`stat-${index}`}
              whileHover={{ y: -4 }}
              className="text-center p-5 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all"
            >
              <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${stat.color} p-2 text-white`}>
                <StatIcon className="w-full h-full" />
              </div>
              <div className="text-xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* زر إضافة تقييم */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center mt-12"
      >
        <Link href="/testimonials/new">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            <span>أضف تقييمك</span>
          </motion.button>
        </Link>
        <p className="text-xs text-gray-400 mt-3">
          * آرائكم تساعدنا في تطوير خدماتنا
        </p>
      </motion.div>
    </Section>
  );
}
