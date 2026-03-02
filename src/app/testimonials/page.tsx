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
} from "lucide-react";

// توسيع بيانات الشهادات مع أيقونات وتفاصيل إضافية
const testimonialsData = siteData.home.testimonials;

// إضافة صور وأيقونات للشهادات
const enhancedTestimonials = testimonialsData.items.map((item, index) => ({
  ...item,
  rating: 5,
  date: ["منذ يومين", "منذ أسبوع", "منذ ٣ أيام", "منذ شهر", "منذ أسبوعين"][index % 5],
  avatar: `/images/avatars/avatar-${index + 1}.jpg`,
  likes: Math.floor(Math.random() * 50) + 20,
  project: ["موقع شركة", "متجر إلكتروني", "تطبيق موبايل", "UI/UX", "SEO"][index % 5],
  company: ["شركة تكافل", "UrbanWear", "Learnify", "FitTrack", "BeautyBox"][index % 5],
}));

// إحصائيات عامة
const stats = [
  { icon: Star, label: "تقييم عام", value: "٤.٩/٥" },
  { icon: MessageCircle, label: "شهادة", value: testimonialsData.items.length },
  { icon: ThumbsUp, label: "نسبة رضا", value: "٩٨٪" },
  { icon: Award, label: "موثوقية", value: "١٠٠٪" },
];

export default function TestimonialsPage() {
  const t = siteData.home.testimonials;

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1); // 1 = next (يمين->يسار)، -1 = prev
  const [likedTestimonials, setLikedTestimonials] = useState<number[]>([]);
  const [filterRating, setFilterRating] = useState<number | null>(null);

  // تصفية الشهادات حسب التقييم
  const filteredTestimonials = useMemo(() => {
    return filterRating
      ? enhancedTestimonials.filter((x) => x.rating >= filterRating)
      : enhancedTestimonials;
  }, [filterRating]);

  // ضمان إن activeIndex ما يطلعش برّه حدود القائمة بعد الفلترة
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
    transition: { duration: 0.6, ease: "easeOut" },
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
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* قسم الهيرو */}
      <section className="relative py-20 overflow-hidden">
        {/* خلفية متحركة */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div
            className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
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
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full border border-blue-200/50">
                <MessageCircle className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">آراء العملاء</span>
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              ماذا يقول
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mx-2">
                عملاؤنا
              </span>
              عنا
            </motion.h1>

            {/* الوصف */}
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {t.subtitle}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* إحصائيات سريعة */}
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
                    hidden: { opacity: 0, y: 20, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{ y: -4 }}
                  className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm"
                >
                  <Icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* فلتر التقييم */}
      <section className="py-4">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">فلتر حسب التقييم:</span>

            {[5, 4, 3].map((rating) => (
              <button
                key={rating}
                onClick={() => setFilterRating(filterRating === rating ? null : rating)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  filterRating === rating
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {rating} نجوم
              </button>
            ))}

            {filterRating && (
              <button onClick={() => setFilterRating(null)} className="text-xs text-gray-400 hover:text-gray-600">
                إزالة الفلتر
              </button>
            )}
          </motion.div>
        </Container>
      </section>

      {/* شبكة الشهادات */}
      <section className="py-12">
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
                    hidden: { opacity: 0, y: 30, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-2xl border border-gray-200/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                    {/* خلفية متدرجة متحركة */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* أيقونة الاقتباس */}
                    <div className="absolute top-4 left-4 text-blue-200">
                      <Quote className="w-8 h-8 rotate-180" />
                    </div>

                    {/* شارة التقييم */}
                    <div className="absolute top-4 right-4 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>

                    {/* المحتوى */}
                    <div className="p-6">
                      {/* صورة العميل واسمه */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-0.5">
                            <div className="w-full h-full rounded-full bg-white overflow-hidden">
                              {testimonial.avatar ? (
                                <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
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

                      {/* نص الشهادة */}
                      <p className="text-gray-600 leading-relaxed mb-4">“{testimonial.quote}”</p>

                      {/* اسم الشركة */}
                      <p className="text-sm font-medium text-blue-600 mb-3">{testimonial.company}</p>

                      {/* أزرار التفاعل */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <button
                          onClick={(e) => handleLike(idx, e)}
                          className={`flex items-center gap-1.5 text-xs transition-all ${
                            isLiked ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
                          }`}
                        >
                          <ThumbsUp className={`w-4 h-4 ${isLiked ? "fill-blue-600" : ""}`} />
                          <span>{testimonial.likes + (isLiked ? 1 : 0)}</span>
                        </button>

                        <button
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-600 transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>{Math.floor(Math.random() * 10) + 1}</span>
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
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* رسالة إذا لم توجد نتائج */}
          {filteredTestimonials.length === 0 && (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center py-12">
              <p className="text-gray-500">لا توجد شهادات تطابق الفلتر المحدد</p>
            </motion.div>
          )}
        </Container>
      </section>

      {/* شريط التنقل بين الشهادات */}
      <section className="py-12 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-xl overflow-hidden">
              {/* أزرار التنقل */}
              <button
                onClick={goPrev}
                disabled={filteredTestimonials.length === 0}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors z-10 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={goNext}
                disabled={filteredTestimonials.length === 0}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors z-10 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* الشهادة المركزية مع AnimatePresence */}
              <div className="relative min-h-[360px] flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  {activeTestimonial ? (
                    <motion.div
                      key={activeIndex}
                      custom={direction}
                      variants={sliderVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="text-center w-full"
                    >
                      <div className="flex justify-center mb-4">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1">
                            <div className="w-full h-full rounded-full bg-white overflow-hidden">
                              {activeTestimonial.avatar ? (
                                <img
                                  src={activeTestimonial.avatar}
                                  alt={activeTestimonial.name}
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
                            key={i}
                            className={`w-5 h-5 ${
                              i < activeTestimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <p className="text-xl text-gray-700 leading-relaxed mb-4">“{activeTestimonial.quote}”</p>

                      <h4 className="font-bold text-lg">{activeTestimonial.name}</h4>
                      <p className="text-gray-500 text-sm mb-2">{activeTestimonial.role}</p>
                      <p className="text-xs text-gray-400">{activeTestimonial.date}</p>

                      {/* نقاط التنقل */}
                      <div className="flex justify-center gap-2 mt-6">
                        {filteredTestimonials.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setDirection(idx > activeIndex ? 1 : -1);
                              setActiveIndex(idx);
                            }}
                            className={`h-2 rounded-full transition-all ${
                              idx === activeIndex
                                ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500"
                                : "w-2 bg-gray-300 hover:bg-gray-400"
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
                      className="text-center py-8 text-gray-500"
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
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center"
          >
            <Heart className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-2xl font-bold mb-4">شاركنا رأيك</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              إذا كنت من عملائنا، نود سماع تجربتك معنا. شاركنا رأيك ليساعد الآخرين في اختيار خدماتنا.
            </p>
            <button
              onClick={() => (window.location.href = "/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <Sparkles className="w-5 h-5" />
              أضف تقييمك
            </button>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}