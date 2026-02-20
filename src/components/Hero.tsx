"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Zap, Shield, Star, Play } from "lucide-react";
import Container from "./Container";
import { siteData } from "@/lib/siteData";
import { useEffect, useState } from "react";

export default function Hero() {
  const h = siteData.home.hero;
  const marketing = siteData.home.marketing;
  const stats = h.stats || [
    { value: "15+", label: "نموذج عمل" },
    { value: "10+", label: "عميل سعيد" },
    { value: "24/7", label: "دعم فني" },
  ];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* خلفية متحركة مع تأثير بارالاكس */}
        <div className="absolute inset-0 -z-10">
          {/* أشكال هندسية متحركة */}
          <motion.div
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
            className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
          <motion.div
            animate={{
              x: -mousePosition.x,
              y: -mousePosition.y,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
            className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
          
          {/* نقاط متحركة */}
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)',
            backgroundSize: '40px 40px',
            opacity: 0.3
          }} />
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
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 shadow-sm border border-gray-200"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                    {indicator}
                  </motion.span>
                ))}
              </motion.div>

              {/* الشارة الرئيسية */}
              <motion.div variants={fadeInUp} className="inline-block">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full border border-blue-200/50 backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">{marketing?.speedLine}</span>
                </div>
              </motion.div>

              {/* العنوان الرئيسي */}
              <motion.h1 
                variants={fadeInUp}
                className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              >
                {h.title.split(' ').map((word, index, array) => {
                  // تلوين آخر كلمتين بلون مختلف
                  if (index >= array.length - 2) {
                    return (
                      <span key={index} className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {word}{' '}
                      </span>
                    );
                  }
                  return word + ' ';
                })}
              </motion.h1>

              {/* الوصف */}
              <motion.p 
                variants={fadeInUp}
                className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl"
              >
                {h.subtitle}
              </motion.p>

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
                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10">ابدأ مشروعك الآن</span>
                    <ArrowLeft className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
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
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {h.primaryCta.label}
                  </Link>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl font-semibold border border-gray-200 hover:bg-white transition-all duration-300 shadow-sm"
                >
                  <Play className="w-5 h-5 text-blue-600" />
                  <span>شاهد الفيديو</span>
                </motion.button>
              </motion.div>

              {/* المميزات السريعة */}
              <motion.div 
                variants={fadeInUp}
                className="mt-8 grid grid-cols-3 gap-4"
              >
                {[
                  { icon: Shield, text: "ضمان الجودة" },
                  { icon: Zap, text: "سرعة فائقة" },
                  { icon: Star, text: "تصميم فاخر" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2 }}
                    className="flex flex-col items-center p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200/50"
                  >
                    <item.icon className="w-5 h-5 text-blue-600 mb-1" />
                    <span className="text-xs font-medium text-gray-700">{item.text}</span>
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
                    transition={{ delay: 0.8 + idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </motion.div>
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
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20" />
                  <img
                    src="/images/hero-illustration.svg"
                    alt="Kodia Illustration"
                    className="relative w-full rounded-3xl border-8 border-white/50 shadow-2xl"
                  />
                </motion.div>

                {/* عناصر زخرفية حول الصورة */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-lg opacity-60"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-lg opacity-60"
                />

                {/* شارات عائمة */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 1,
                  }}
                  className="absolute -top-4 -left-4 bg-white rounded-lg shadow-xl p-3 z-20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">متاح للعمل الآن</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: 2,
                  }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-xl p-3 z-20"
                >
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm font-medium mr-2">5.0</span>
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
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-scroll" />
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
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/placeholder?autoplay=1"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              ✕
            </button>
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