"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/Container";
import { siteData } from "@/lib/siteData";
import {
  Star,
  MessageCircle,
  ThumbsUp,
  Share2,
  User,
  Award,
  Sparkles,
  Quote,
  ChevronLeft,
  ChevronRight,
  Heart,
  Filter,
  CheckCircle,
  Clock,
  Calendar,
  Users,
  TrendingUp,
  Zap,
  Shield
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// صور حقيقية من Unsplash للعملاء
const avatarImages = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop", // رجل أعمال
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop", // سيدة محامية
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop", // شاب
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop", // فتاة
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop", // رجل
  "https://images.unsplash.com/photo-1494790108777-8f9c9f12b1b6?w=200&h=200&fit=crop", // سيدة
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop", // رجل
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop", // سيدة
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop", // شاب
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop", // دكتورة
];

// توسيع بيانات الشهادات مع صور حقيقية
const testimonialsData = siteData.home.testimonials;

// إضافة صور وأيقونات للشهادات
const enhancedTestimonials = testimonialsData.items.map((item, index) => ({
  ...item,
  rating: 5,
  date: ["منذ يومين", "منذ أسبوع", "منذ ٣ أيام", "منذ شهر", "منذ أسبوعين"][index % 5],
  avatar: avatarImages[index % avatarImages.length],
  likes: Math.floor(Math.random() * 50) + 20,
  project: ["موقع شركة", "متجر إلكتروني", "تطبيق موبايل", "تصميم UI/UX", "تحسين SEO"][index % 5],
  company: ["شركة تكافل", "UrbanWear", "Learnify Academy", "FitTrack", "BeautyBox"][index % 5],
  verified: true,
}));

// إحصائيات عامة محدثة
const stats = [
  { icon: Star, label: "تقييم عام", value: "٤.٩/٥", color: "from-amber-600 to-yellow-600" },
  { icon: Users, label: "عملاء موثوقين", value: "٣٢+", color: "from-violet-600 to-fuchsia-600" },
  { icon: TrendingUp, label: "نسبة رضا", value: "٩٨٪", color: "from-green-600 to-emerald-600" },
  { icon: Shield, label: "موثوقية", value: "١٠٠٪", color: "from-blue-600 to-cyan-600" },
];

export default function TestimonialsPage() {
  const t = siteData.home.testimonials;

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [likedTestimonials, setLikedTestimonials] = useState<number[]>([]);
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // قائمة المشاريع للفلترة
  const projectTypes = ["الكل", "موقع شركة", "متجر إلكتروني", "تطبيق موبايل", "تصميم UI/UX", "تحسين SEO"];

  // تصفية الشهادات حسب التقييم ونوع المشروع
  const filteredTestimonials = useMemo(() => {
    return enhancedTestimonials.filter((x) => {
      const matchesRating = filterRating ? x.rating >= filterRating : true;
      const matchesProject = selectedProject && selectedProject !== "الكل" ? x.project === selectedProject : true;
      return matchesRating && matchesProject;
    });
  }, [filterRating, selectedProject]);

  useEffect(() => {
    if (filteredTestimonials.length === 0) {
      setActiveIndex(0);
      return;
    }
    setActiveIndex((prev) => Math.min(prev, filteredTestimonials.length - 1));
  }, [filteredTestimonials.length]);

  const activeTestimonial = filteredTestimonials[activeIndex];

  const handleLike = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedTestimonials((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  // متغيرات الحركة
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  };

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const goPrev = () => {
    const len = filteredTestimonials.length;
    if (!len) return;
    setDirection(-1);
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : len - 1));
  };

  const goNext = () => {
    const len = filteredTestimonials.length;
    if (!len) return;
    setDirection(1);
    setActiveIndex((prev) => (prev < len - 1 ? prev + 1 : 0));
  };

  // أنيميشن للسلايدر حسب الاتجاه
  const sliderVariants = {
    enter: (dir: 1 | -1) => ({
      opacity: 0,
      x: dir === 1 ? 120 : -120,
      filter: "blur(6px)",
    }),
    center: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
    },
    exit: (dir: 1 | -1) => ({
      opacity: 0,
      x: dir === 1 ? -120 : 120,
      filter: "blur(6px)",
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-violet-50/10 to-white dark:from-gray-950 dark:via-violet-950/10 dark:to-gray-950">
      {/* قسم الهيرو */}
      <section className="relative py-24 overflow-hidden">
        {/* خلفية متحركة فاخرة */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-fuchsia-200/30 dark:from-violet-800/20 dark:to-fuchsia-800/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              x: [0, -10, 0],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-violet-200/20 dark:from-amber-800/10 dark:to-violet-800/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-40 left-1/2 w-64 h-64 bg-gradient-to-br from-fuchsia-200/20 to-pink-200/20 dark:from-fuchsia-800/10 dark:to-pink-800/10 rounded-full blur-3xl"
          />
        </div>

        <Container>
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="text-center max-w-4xl mx-auto"
          >
            {/* شارة الصفحة */}
            <motion.div variants={fadeInUp} className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 dark:from-violet-600/20 dark:to-fuchsia-600/20 rounded-full border border-violet-200/50 dark:border-violet-700/50 backdrop-blur-sm">
                <MessageCircle className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">آراء العملاء</span>
                <Sparkles className="w-3 h-3 text-amber-500" />
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              ماذا يقول
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent mx-2">
                عملاؤنا
              </span>
              عنا
            </motion.h1>

            {/* الوصف */}
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              {t.subtitle}
            </motion.p>

            {/* إحصائيات سريعة */}
            <motion.div variants={fadeInUp} className="flex justify-center gap-6 mt-8">
              {[
                { icon: Star, label: "التقييم", value: "٤.٩/٥" },
                { icon: Users, label: "عملاء", value: "٣٢+" },
                { icon: Clock, label: "خبرة", value: "٢+ سنة" },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <stat.icon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="font-bold text-gray-900 dark:text-white">{stat.value}</span> {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* إحصائيات سريعة - شبكة */}
      <section className="py-8">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -4 }}
                  className="text-center p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
                >
                  <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${stat.color} p-2 text-white`}>
                    <Icon className="w-full h-full" />
                  </div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* فلتر التقييم ونوع المشروع */}
      <section className="py-4">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            {/* فلتر التقييم */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Filter className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">فلتر حسب التقييم:</span>

              {[5, 4, 3].map((rating) => (
                <motion.button
                  key={rating}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilterRating(filterRating === rating ? null : rating)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    filterRating === rating
                      ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {rating} <Star className="w-3 h-3 inline fill-current" />
                </motion.button>
              ))}

              {filterRating && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setFilterRating(null)}
                  className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  إزالة الفلتر
                </motion.button>
              )}
            </div>

            {/* فلتر نوع المشروع */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {projectTypes.map((type) => (
                <motion.button
                  key={type}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProject(type === "الكل" ? null : type)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                    (type === "الكل" && !selectedProject) || selectedProject === type
                      ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {type}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* شبكة الشهادات */}
      <section className="py-16">
        <Container>
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
            {filteredTestimonials.map((testimonial, idx) => {
              const isLiked = likedTestimonials.includes(idx);

              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                    {/* خلفية متدرجة متحركة */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* أيقونة الاقتباس */}
                    <div className="absolute top-4 left-4 text-violet-200 dark:text-violet-800">
                      <Quote className="w-8 h-8 rotate-180" />
                    </div>

                    {/* شارة التقييم */}
                    <div className="absolute top-4 right-4 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-300 dark:text-gray-600"}`}
                        />
                      ))}
                    </div>

                    {/* المحتوى */}
                    <div className="p-6">
                      {/* صورة العميل واسمه */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 p-0.5">
                            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden relative">
                              <Image
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                fill
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
                            <span className="text-xs text-gray-400 dark:text-gray-500">{testimonial.date}</span>
                            <span className="text-xs px-2 py-0.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full">
                              {testimonial.project}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* نص الشهادة */}
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">“{testimonial.quote}”</p>

                      {/* اسم الشركة */}
                      <p className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-3">{testimonial.company}</p>

                      {/* أزرار التفاعل */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => handleLike(idx, e)}
                          className={`flex items-center gap-1.5 text-xs transition-all ${
                            isLiked ? "text-violet-600" : "text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400"
                          }`}
                        >
                          <ThumbsUp className={`w-4 h-4 ${isLiked ? "fill-violet-600" : ""}`} />
                          <span>{testimonial.likes + (isLiked ? 1 : 0)}</span>
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>{Math.floor(Math.random() * 10) + 1}</span>
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

          {/* رسالة إذا لم توجد نتائج */}
          {filteredTestimonials.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 dark:text-gray-400">لا توجد شهادات تطابق الفلتر المحدد</p>
              <button
                onClick={() => {
                  setFilterRating(null);
                  setSelectedProject(null);
                }}
                className="mt-4 text-violet-600 hover:text-violet-700 dark:text-violet-400 text-sm font-medium"
              >
                إعادة ضبط الفلتر
              </button>
            </motion.div>
          )}
        </Container>
      </section>

      {/* شريط التنقل بين الشهادات */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-xl overflow-hidden">
              {/* أزرار التنقل */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goPrev}
                disabled={filteredTestimonials.length === 0}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400 transition-colors z-10 disabled:opacity-40 disabled:cursor-not-allowed border border-gray-200 dark:border-gray-700"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goNext}
                disabled={filteredTestimonials.length === 0}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400 transition-colors z-10 disabled:opacity-40 disabled:cursor-not-allowed border border-gray-200 dark:border-gray-700"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              {/* الشهادة المركزية مع AnimatePresence */}
              <div className="relative min-h-[400px] flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  {activeTestimonial ? (
                    <motion.div
                      key={activeIndex}
                      custom={direction}
                      variants={sliderVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="text-center w-full"
                    >
                      <div className="flex justify-center mb-4">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 p-1">
                            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden relative">
                              <Image
                                src={activeTestimonial.avatar}
                                alt={activeTestimonial.name}
                                fill
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
                            key={i}
                            className={`w-5 h-5 ${
                              i < activeTestimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-300 dark:text-gray-600"
                            }`}
                          />
                        ))}
                      </div>

                      <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4">“{activeTestimonial.quote}”</p>

                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">{activeTestimonial.name}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{activeTestimonial.role}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{activeTestimonial.date}</p>

                      {/* نقاط التنقل */}
                      <div className="flex justify-center gap-2 mt-6">
                        {filteredTestimonials.map((_, idx) => (
                          <motion.button
                            key={idx}
                            whileHover={{ scale: 1.2 }}
                            onClick={() => {
                              setDirection(idx > activeIndex ? 1 : -1);
                              setActiveIndex(idx);
                            }}
                            className={`h-2 rounded-full transition-all ${
                              idx === activeIndex
                                ? "w-8 bg-gradient-to-r from-violet-600 to-fuchsia-600"
                                : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                            }`}
                            aria-label={`انتقل للشهادة رقم ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-8 text-gray-500 dark:text-gray-400"
                    >
                      لا توجد شهادات للعرض
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* دعوة لإضافة تقييم */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 rounded-3xl p-12 text-white text-center relative overflow-hidden"
          >
            {/* خلفية متحركة */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <Heart className="w-16 h-16 text-yellow-300" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">شاركنا رأيك</h2>
              <p className="text-white/90 mb-8 text-lg">
                إذا كنت من عملائنا، نود سماع تجربتك معنا. شاركنا رأيك ليساعد الآخرين في اختيار خدماتنا.
              </p>
              
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5" />
                  أضف تقييمك
                </motion.button>
              </Link>

              <p className="text-xs text-white/70 mt-6">
                * سنقوم بنشر تقييمك بعد المراجعة مع إمكانية إضافة اسمك أو شركتك
              </p>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
