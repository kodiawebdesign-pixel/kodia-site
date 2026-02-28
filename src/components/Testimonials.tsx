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
  CheckCircle,
  Heart,
  Zap,
  Shield
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";
import Image from "next/image";
import Link from "next/link";

// توسيع بيانات الشهادات (يمكن استبدالها من siteData)
const testimonialsData = siteData.home.testimonials;

// بيانات ثابتة بدلاً من الأرقام العشوائية
const dates = ["منذ يومين", "منذ أسبوع", "منذ ٣ أيام", "منذ شهر", "منذ أسبوعين"];
const projects = ["موقع شركة", "متجر إلكتروني", "تطبيق موبايل", "تصميم UI/UX", "تحسين SEO"];
const likesCounts = [32, 28, 45, 23, 38, 41, 29, 33, 47, 52];
const commentsCounts = [5, 3, 8, 4, 6, 7, 3, 5, 9, 4];

// صور حقيقية من Unsplash للعملاء
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

// نوع الشهادة بعد الإضافة
type EnhancedTestimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  date: string;
  avatar: string;
  likes: number;
  comments: number;
  project: string;
  verified: boolean;
};

// إضافة أيقونات وتفاصيل إضافية للشهادات - بأرقام ثابتة
const enhancedTestimonials: EnhancedTestimonial[] = testimonialsData.items.map(
  (item: any, index: number) => ({
    ...item,
    rating: 5,
    date: dates[index % dates.length],
    avatar: avatarImages[index % avatarImages.length],
    likes: likesCounts[index % likesCounts.length] ?? 0,
    comments: commentsCounts[index % commentsCounts.length] ?? 0,
    project: projects[index % projects.length],
    verified: true,
  })
);

// إحصائيات سريعة - محدثة
const stats = [
  { icon: Star, label: "تقييم عام", value: "٤.٩/٥", color: "from-amber-600 to-yellow-600" },
  { icon: MessageCircle, label: "شهادة موثقة", value: "٢٤+", color: "from-violet-600 to-fuchsia-600" },
  { icon: ThumbsUp, label: "نسبة رضا", value: "٩٨٪", color: "from-green-600 to-emerald-600" },
  { icon: Award, label: "موثوقية", value: "١٠٠٪", color: "from-blue-600 to-cyan-600" },
];

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
    if (!enhancedTestimonials.length) return;
    setActiveIndex((prev) => (prev + 1) % enhancedTestimonials.length);
  };

  const handlePrev = () => {
    if (!enhancedTestimonials.length) return;
    setActiveIndex((prev) =>
      prev === 0 ? enhancedTestimonials.length - 1 : prev - 1
    );
  };

  // ✅ حل خطأ "Object is possibly undefined"
  const active = enhancedTestimonials[activeIndex] ?? enhancedTestimonials[0];
  if (!active) return null;

  return (
    <Section
      title={testimonialsData.title}
      subtitle={testimonialsData.subtitle}
      badge="آراء حقيقية"
      className="bg-gradient-to-b from-white to-violet-50/30 dark:from-gray-950 dark:to-violet-950/20"
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
          const isLiked = likedTestimonials.includes(idx);
          const isExpanded = expandedQuote === idx;

          const likes = testimonial.likes ?? 0;
          const comments = testimonial.comments ?? 0;

          return (
            <motion.div
              key={`testimonial-${idx}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              whileHover={{ y: -8 }}
              className="group relative cursor-pointer"
              onClick={() => setExpandedQuote(isExpanded ? null : idx)}
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* خلفية متدرجة متحركة */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-5 dark:opacity-0 dark:group-hover:opacity-10 transition-opacity duration-500"
                  animate={isExpanded ? { opacity: 0.1 } : {}}
                />

                {/* أيقونة الاقتباس */}
                <div className="absolute top-4 left-4 text-violet-200 dark:text-violet-800">
                  <Quote className="w-8 h-8 rotate-180" />
                </div>

                {/* محتوى البطاقة */}
                <div className="relative p-6">
                  {/* صورة العميل واسمه */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 p-0.5">
                        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden relative">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={56}
                            height={56}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      {/* علامة التحقق */}
                      {testimonial.verified && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          {testimonial.date}
                        </span>
                        <span className="text-xs px-2 py-0.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full">
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
                              ? "text-amber-400 fill-amber-400"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                        />
                      </motion.div>
                    ))}
                    <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">
                      {testimonial.rating}.0
                    </span>
                  </div>

                  {/* نص الشهادة */}
                  <motion.div
                    animate={{ height: isExpanded ? "auto" : "4.5rem" }}
                    className="overflow-hidden"
                  >
                    <p
                      className={`text-gray-600 dark:text-gray-400 leading-relaxed ${
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
                      className="text-violet-600 dark:text-violet-400 text-sm font-medium mt-2 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                    >
                      {isExpanded ? "عرض أقل" : "قراءة المزيد..."}
                    </button>
                  )}

                  {/* أزرار التفاعل */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => handleLike(idx, e)}
                      className={`flex items-center gap-1.5 text-xs transition-all ${
                        isLiked
                          ? "text-violet-600"
                          : "text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400"
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${isLiked ? "fill-violet-600 text-violet-600" : ""}`}
                      />
                      <span>{mounted ? likes + (isLiked ? 1 : 0) : likes}</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{comments}</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigator.clipboard?.writeText(window.location.href);
                        alert("تم نسخ الرابط!");
                      }}
                      className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>مشاركة</span>
                    </motion.button>
                  </div>
                </div>

                {/* خط سفلي متدرج */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: "right" }}
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
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-xl">
          {/* السابقة */}
          <button
            onClick={handlePrev}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors z-10 border border-gray-200 dark:border-gray-600"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* التالية */}
          <button
            onClick={handleNext}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors z-10 border border-gray-200 dark:border-gray-600"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* الشهادة المركزية */}
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
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 p-1">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden relative">
                      <Image
                        src={active.avatar}
                        alt={active.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={`active-star-${i}`}
                    className={`w-5 h-5 ${
                      i < active.rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>

              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                “{active.quote}”
              </p>

              <h4 className="font-bold text-lg text-gray-900 dark:text-white">{active.name}</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{active.role}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">{active.date}</p>

              {/* نقاط التنقل */}
              <div className="flex justify-center gap-2 mt-6">
                {enhancedTestimonials.map((_, idx) => (
                  <button
                    key={`dot-${idx}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeIndex
                        ? "w-8 bg-gradient-to-r from-violet-600 to-fuchsia-600"
                        : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
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
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => {
          const StatIcon = stat.icon;
          return (
            <motion.div
              key={`stat-${index}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -4 }}
              className="text-center p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
            >
              <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${stat.color} p-2 text-white`}>
                <StatIcon className="w-full h-full" />
              </div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
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
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            <span>أضف تقييمك</span>
          </motion.button>
        </Link>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
          * آراؤكم تساعدنا في تطوير خدماتنا
        </p>
      </motion.div>
    </Section>
  );
}
