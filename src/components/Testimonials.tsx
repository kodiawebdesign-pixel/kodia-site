"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ThumbsUp,
  Share2,
  User,
  Award,
  Sparkles,
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";

// توسيع بيانات الشهادات
const testimonialsData = siteData.home.testimonials;

// بيانات ثابتة بدلاً من الأرقام العشوائية
const dates = ["منذ يومين", "منذ أسبوع", "منذ ٣ أيام", "منذ شهر", "منذ أسبوعين"];
const projects = ["موقع شركة", "متجر إلكتروني", "تطبيق موبايل", "UI/UX", "SEO"];
const likesCounts = [32, 28, 45, 23, 38, 41, 29, 33, 47, 52];
const commentsCounts = [5, 3, 8, 4, 6, 7, 3, 5, 9, 4];

// نوع الشهادة بعد الإضافة (عشان TS ما يقول undefined)
type EnhancedTestimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  date: string;
  avatar?: string;
  likes: number;
  comments: number;
  project: string;
};

// إضافة أيقونات وتفاصيل إضافية للشهادات - بأرقام ثابتة
const enhancedTestimonials: EnhancedTestimonial[] = testimonialsData.items.map(
  (item: any, index: number) => ({
    ...item,
    rating: 5,
    date: dates[index % dates.length],
    avatar: `/images/avatars/avatar-${index + 1}.jpg`,
    likes: likesCounts[index % likesCounts.length] ?? 0,
    comments: commentsCounts[index % commentsCounts.length] ?? 0,
    project: projects[index % projects.length],
  })
);

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [likedTestimonials, setLikedTestimonials] = useState<number[]>([]);
  const [expandedQuote, setExpandedQuote] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLike = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedTestimonials((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % enhancedTestimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? enhancedTestimonials.length - 1 : prev - 1
    );
  };

  return (
    <Section
      title={testimonialsData.title}
      subtitle={testimonialsData.subtitle}
      badge="آراء حقيقية"
    >
      {/* شبكة الشهادات */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {enhancedTestimonials.map((testimonial, idx) => {
          const isLiked = likedTestimonials.includes(idx);
          const isExpanded = expandedQuote === idx;

          // ✅ fallback مضمون
          const likes = testimonial.likes ?? 0;
          const comments = testimonial.comments ?? 0;

          return (
            <motion.div
              key={`testimonial-${idx}`}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  },
                },
              }}
              whileHover={{ y: -8 }}
              className="group relative cursor-pointer"
              onClick={() => setExpandedQuote(isExpanded ? null : idx)}
            >
              <div className="relative bg-white rounded-2xl border border-gray-200/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* خلفية متدرجة متحركة */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={isExpanded ? { opacity: 0.5 } : {}}
                />

                {/* أيقونة الاقتباس */}
                <div className="absolute top-4 left-4 text-blue-200">
                  <Quote className="w-8 h-8 rotate-180" />
                </div>

                {/* محتوى البطاقة */}
                <div className="relative p-6">
                  {/* صورة العميل واسمه */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-0.5">
                        <div className="w-full h-full rounded-full bg-white overflow-hidden">
                          {testimonial.avatar ? (
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <User className="w-full h-full p-3 text-gray-400" />
                          )}
                        </div>
                      </div>
                      {/* علامة التحقق */}
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                        <Award className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-400">{testimonial.date}</span>
                        <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-600 rounded-full">
                          {testimonial.project}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* التقييم بالنجوم */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={`star-${idx}-${i}`}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Star
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      </motion.div>
                    ))}
                    <span className="text-xs text-gray-500 mr-2">
                      {testimonial.rating}.0
                    </span>
                  </div>

                  {/* نص الشهادة */}
                  <motion.div
                    animate={{ height: isExpanded ? "auto" : "4.5rem" }}
                    className="overflow-hidden"
                  >
                    <p
                      className={`text-gray-600 leading-relaxed ${
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
                      className="text-blue-600 text-sm font-medium mt-2 hover:text-blue-700 transition-colors"
                    >
                      {isExpanded ? "عرض أقل" : "قراءة المزيد..."}
                    </button>
                  )}

                  {/* أزرار التفاعل */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <button
                      onClick={(e) => handleLike(idx, e)}
                      className={`flex items-center gap-1.5 text-xs transition-all ${
                        isLiked ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
                      }`}
                    >
                      <ThumbsUp className={`w-4 h-4 ${isLiked ? "fill-blue-600" : ""}`} />
                      <span>{mounted ? likes + (isLiked ? 1 : 0) : likes}</span>
                    </button>

                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{comments}</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigator.clipboard?.writeText(window.location.href);
                        alert("تم نسخ الرابط!");
                      }}
                      className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>مشاركة</span>
                    </button>
                  </div>
                </div>

                {/* خط سفلي متدرج */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* شريط التنقل بين الشهادات */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="relative mt-12"
      >
        <div className="relative bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 p-8">
          <button
            onClick={handlePrev}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={`active-${activeIndex}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1">
                    <div className="w-full h-full rounded-full bg-white overflow-hidden">
                      {enhancedTestimonials[activeIndex]?.avatar ? (
                        <img
                          src={enhancedTestimonials[activeIndex].avatar}
                          alt={enhancedTestimonials[activeIndex].name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-full h-full p-4 text-gray-400" />
                      )}
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
                      i < enhancedTestimonials[activeIndex].rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                “{enhancedTestimonials[activeIndex].quote}”
              </p>

              <h4 className="font-bold text-lg">
                {enhancedTestimonials[activeIndex].name}
              </h4>
              <p className="text-gray-500 text-sm mb-2">
                {enhancedTestimonials[activeIndex].role}
              </p>
              <p className="text-xs text-gray-400">
                {enhancedTestimonials[activeIndex].date}
              </p>

              <div className="flex justify-center gap-2 mt-6">
                {enhancedTestimonials.map((_, idx) => (
                  <button
                    key={`dot-${idx}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeIndex
                        ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500"
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
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { icon: Star, label: "تقييم عام", value: "٤.٩/٥" },
          { icon: MessageCircle, label: "شهادة", value: "١٠+" },
          { icon: ThumbsUp, label: "نسبة رضا", value: "٩٨٪" },
          { icon: Award, label: "موثوقية", value: "١٠٠٪" },
        ].map((stat, index) => {
          const StatIcon = stat.icon;
          return (
            <motion.div
              key={`stat-${index}`}
              whileHover={{ y: -4 }}
              className="text-center p-4 bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-100"
            >
              <StatIcon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
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
        className="text-center mt-8"
      >
        <button
          onClick={() => (window.location.href = "/testimonials/new")}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Sparkles className="w-5 h-5" />
          <span>أضف تقييمك</span>
        </button>
      </motion.div>
    </Section>
  );
}