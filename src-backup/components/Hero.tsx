"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Sparkles, 
  Zap, 
  Shield, 
  Star, 
  Play,
  CheckCircle,
  Users,
  Clock,
  TrendingUp,
  Rocket,
  Award,
  Heart,
  MessageCircle
} from "lucide-react";
import Container from "./Container";
import { siteData } from "@/lib/siteData";
import { useEffect, useState } from "react";

export default function Hero() {
  const h = siteData.home.hero;
  const marketing = siteData.home.marketing;
  const stats = h.stats || [
    { value: "٢٥+", label: "نموذج عمل" },
    { value: "٢٠+", label: "عميل سعيد" },
    { value: "٢٤/٧", label: "دعم فني" },
  ];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

  // كلمات رئيسية للتلوين
  const highlightWords = ["فاخرة", "تبيع", "أفكارك", "مواقع", "تطبيقات"];

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 dark:from-violet-950/20 dark:via-gray-950 dark:to-fuchsia-950/20">
        {/* خلفية متحركة مع تأثير بارالاكس */}
        <div className="absolute inset-0 -z-10">
          {/* أشكال هندسية متحركة */}
          <motion.div
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
            className="absolute top-20 left-10 w-96 h-96 bg-violet-200 dark:bg-violet-800/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
          <motion.div
            animate={{
              x: -mousePosition.x,
              y: -mousePosition.y,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-200 dark:bg-fuchsia-800/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
          <motion.div
            animate={{
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.5,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
            className="absolute top-40 right-40 w-72 h-72 bg-amber-200 dark:bg-amber-800/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
          
          {/* نقاط متحركة */}
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: 'radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)',
              backgroundSize: '40px 40px',
              opacity: 0.2
            }} 
          />
        </div>

        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* الجانب الأيسر - النصوص */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
              className="relative"
            >
              {/* شارات الجودة */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-6">
                {marketing?.trustIndicators?.map((indicator, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm border border-violet-100 dark:border-violet-800/50"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-violet-500 dark:text-violet-400" />
                    {indicator}
                  </motion.span>
                ))}
              </motion.div>

              {/* الشارة الرئيسية */}
              <motion.div variants={fadeInUp} className="inline-block">
                <div className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 dark:from-violet-600/20 dark:to-fuchsia-600/20 rounded-full border border-violet-200/50 dark:border-violet-700/50 backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{marketing?.speedLine}</span>
                </div>
              </motion.div>

              {/* العنوان الرئيسي */}
              <motion.h1 
                variants={fadeInUp}
                className="mt-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight"
              >
                {h.title.split(' ').map((word, index, array) => {
                  // تلوين الكلمات المهمة
                  if (highlightWords.includes(word)) {
                    return (
                      <span key={index} className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent">
                        {word}{' '}
                      </span>
                    );
                  }
                  return <span key={index} className="text-gray-900 dark:text-white">{word} </span>;
                })}
              </motion.h1>

              {/* الوصف */}
              <motion.p 
                variants={fadeInUp}
                className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
              >
                {h.subtitle}
              </motion.p>

              {/* مميزات سريعة بنقط */}
              <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap gap-4">
                {[
                  { icon: CheckCircle, text: "تسليم سريع" },
                  { icon: Shield, text: "ضمان الجودة" },
                  { icon: Users, text: "دعم فني 24/7" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <item.icon className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* الأزرار */}
              <motion.div 
                variants={fadeInUp}
                className="mt-8 flex flex-wrap gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/quote"
                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10">ابدأ مشروعك الآن</span>
                    <ArrowLeft className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600"
                      initial={{ x: "100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={h.primaryCta.href}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-lg border-2 border-gray-200 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-600 hover:bg-violet-50/50 dark:hover:bg-violet-900/30 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {h.primaryCta.label}
                  </Link>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoModalOpen(true)}
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
                  className="group inline-flex items-center gap-2 px-6 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-lg border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-sm"
                >
                  <motion.div
                    animate={{ scale: isHovering ? 1.2 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Play className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  </motion.div>
                  <span>شاهد الفيديو</span>
                </motion.button>
              </motion.div>

              {/* المميزات السريعة - شبكة */}
              <motion.div 
                variants={fadeInUp}
                className="mt-10 grid grid-cols-3 gap-3"
              >
                {[
                  { icon: Shield, text: "ضمان الجودة", color: "from-green-500 to-emerald-500" },
                  { icon: Zap, text: "سرعة فائقة", color: "from-amber-500 to-orange-500" },
                  { icon: Star, text: "تصميم فاخر", color: "from-violet-500 to-fuchsia-500" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-violet-100 dark:border-violet-800/30 shadow-sm"
                  >
                    <div className={`w-10 h-10 mb-2 rounded-lg bg-gradient-to-br ${item.color} p-2 text-white`}>
                      <item.icon className="w-full h-full" />
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* الإحصائيات */}
              <motion.div 
                variants={fadeInUp}
                className="mt-10 flex items-center gap-8"
              >
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + idx * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* روابط سريعة للخدمات */}
              <motion.div 
                variants={fadeInUp}
                className="mt-8 flex flex-wrap gap-2"
              >
                {["تصميم مواقع", "متاجر إلكترونية", "تطبيقات موبايل"].map((service, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${service}`}
                    className="text-xs text-gray-500 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400 transition-colors underline underline-offset-4 decoration-dotted"
                  >
                    {service}
                  </Link>
                ))}
              </motion.div>
            </motion.div>

            {/* الجانب الأيمن - الصورة المتحركة */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* الصورة الرئيسية مع تأثيرات */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                     repeatType: "reverse"
                  }}
                  className="relative z-10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl blur-3xl opacity-20 dark:opacity-30" />
                  <img
                    src="/images/hero-illustration.svg"
                    alt="Kodia Illustration"
                    className="relative w-full rounded-3xl border-8 border-white/50 dark:border-gray-800/50 shadow-2xl"
                  />
                </motion.div>

                {/* عناصر زخرفية حول الصورة */}
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-xl opacity-60"
                />
                <motion.div
                  animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-xl opacity-60"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-20 -right-4 w-16 h-16 bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full blur-xl opacity-40"
                />

                {/* شارات عائمة متحركة */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 1,
                  }}
                  className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 z-20 border border-violet-100 dark:border-violet-800"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">متاح للعمل الآن</span>
                    <Rocket className="w-4 h-4 text-violet-600" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    x: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: 2,
                  }}
                  className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 z-20 border border-fuchsia-100 dark:border-fuchsia-800"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-800 dark:text-gray-200 mr-2">4.9</span>
                    <Heart className="w-4 h-4 text-red-500" />
                  </div>
                </motion.div>

                {/* شارة إضافية */}
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                  className="absolute top-1/2 -left-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg shadow-xl p-3 z-20"
                >
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">دعم فوري</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>

        {/* شريط التمرير السفلي */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-violet-300 dark:border-violet-700 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-violet-500 dark:bg-violet-400 rounded-full mt-2 animate-scroll" />
          </div>
        </motion.div>
      </section>

      {/* مودال الفيديو */}
      {isVideoModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/placeholder?autoplay=1&rel=0&modestbranding=1"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors border border-white/30"
            >
              <span className="text-xl">✕</span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {/* إضافة CSS مخصص للأنيميشن */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(15px); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 2s infinite;
        }
      `}</style>
    </>
  );
}
