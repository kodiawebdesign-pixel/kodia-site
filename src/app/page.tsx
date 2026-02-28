"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import RecentProjects from "@/components/RecentProjects";
import PortfolioTabs from "@/components/PortfolioTabs";
import ClientsLogos from "@/components/ClientsLogos";
import VideoTestimonials from "@/components/VideoTestimonials";
import Testimonials from "@/components/Testimonials";
import HowWeWork from "@/components/HowWeWork";
import Guarantees from "@/components/Guarantees";
import Quality from "@/components/Quality";
import TechStack from "@/components/TechStack";
import AddOns from "@/components/AddOns";
import Pricing from "@/components/Pricing";
import LeadMagnet from "@/components/LeadMagnet";
import FAQ from "@/components/FAQ";
import LocationSection from "@/components/LocationSection";
import WhyUs from "@/components/WhyUs";
import Stats from "@/components/Stats";
import BlogPreview from "@/components/BlogPreview";
import FinalCTA from "@/components/FinalCTA";
import BackToTop from "@/components/BackToTop";
import WelcomeToast from "@/components/WelcomeToast";
import FloatingActions from "@/components/FloatingActions";
import Showreel from "@/components/Showreel";
import PortfolioGallery from "@/components/PortfolioGallery";

// مكون للعنوان المتحرك الفاخر
const SectionTitle = ({ children, gradient = "from-violet-600 to-fuchsia-600" }: { children: React.ReactNode; gradient?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    className="text-center mb-12"
  >
    {/* شارة صغيرة */}
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className="inline-block px-4 py-2 mb-4 bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 rounded-full text-sm font-semibold text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800"
    >
      ✦ {children === "خدماتنا المتكاملة" ? "نقدم لكم" : 
         children === "شاهد الفرق" ? "تميزنا" :
         children === "أحدث الأعمال" ? "من أعمالنا" :
         children === "معرض الأعمال" ? "معرض إبداعاتنا" :
         children === "عملاؤنا يثقون فينا" ? "شركاء النجاح" :
         children === "كيف نعمل" ? "منهجيتنا" :
         children === "الجودة التي نضمنها" ? "لماذا نحن مختلفون" :
         children === "خدمات إضافية" ? "مميزات حصرية" :
         children === "الأسئلة الشائعة" ? "استفساراتكم" :
         children === "لماذا نحن" ? "مزايا التعاون معنا" :
         children === "المدونة" ? "آخر المقالات" : "✦"} ✦
    </motion.span>

    {/* العنوان الرئيسي */}
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
      <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {children}
      </span>
    </h2>

    {/* خط سفلي متحرك */}
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "6rem", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      className={`h-1 bg-gradient-to-r ${gradient} mx-auto rounded-full`}
    />

    {/* نقطة متحركة في النص */}
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
      className="w-2 h-2 bg-violet-600 rounded-full mx-auto mt-3"
    />
  </motion.div>
);

// مكون للقسم مع تأثير ظهور متدرج وخلفيات متناسقة
const SectionWrapper = ({ 
  children, 
  className = "", 
  bgGradient = "from-white to-violet-50/30 dark:from-gray-950 dark:to-violet-950/20",
  delay = 0
}: { 
  children: React.ReactNode; 
  className?: string; 
  bgGradient?: string;
  delay?: number;
}) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay }}
    className={`relative py-20 md:py-28 overflow-hidden bg-gradient-to-b ${bgGradient} ${className}`}
  >
    {/* عناصر خلفية متحركة فاخرة */}
    <div className="absolute inset-0 -z-10">
      {/* دوائر متدرجة متحركة */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-violet-200/30 to-fuchsia-200/30 dark:from-violet-800/20 dark:to-fuchsia-800/20 rounded-full blur-3xl"
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
      
      {/* نقاط متحركة */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 dark:opacity-10" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      {children}
    </div>
  </motion.section>
);

export default function HomePage() {
  return (
    <>
      {/* ترحيب وتأثيرات أولى */}
      <WelcomeToast />
      <FloatingActions />
      
      {/* 1) First impression - قسم الهيرو مع تأثيرات خاصة */}
      <section className="relative min-h-screen bg-gradient-to-br from-violet-900/5 via-fuchsia-900/5 to-amber-900/5 dark:from-violet-950/20 dark:via-fuchsia-950/20 dark:to-amber-950/20">
        <Hero />
        <TrustBar />
      </section>

      {/* 2) ما نقدمه + دليل - خدماتنا */}
      <SectionWrapper bgGradient="from-white to-violet-50/30 dark:from-gray-950 dark:to-violet-950/20">
        <SectionTitle gradient="from-violet-600 to-fuchsia-600">خدماتنا المتكاملة</SectionTitle>
        <Services />
      </SectionWrapper>

      {/* 3) Showreel - فيديو تعريفي */}
      <SectionWrapper bgGradient="from-violet-50/30 to-white dark:from-violet-950/20 dark:to-gray-950">
        <SectionTitle gradient="from-fuchsia-600 to-violet-600">شاهد الفرق</SectionTitle>
        <Showreel />
      </SectionWrapper>

      {/* 4) أحدث المشاريع - مع تأثيرات متقدمة */}
      <SectionWrapper bgGradient="from-white to-violet-50/20 dark:from-gray-950 dark:to-violet-950/10">
        <SectionTitle gradient="from-violet-600 to-fuchsia-600">أحدث الأعمال</SectionTitle>
        <RecentProjects />
      </SectionWrapper>

      {/* 5) معرض الأعمال المتقدم */}
      <SectionWrapper bgGradient="from-violet-50/30 to-white dark:from-violet-950/20 dark:to-gray-950">
        <SectionTitle gradient="from-fuchsia-600 to-amber-600">معرض الأعمال</SectionTitle>
        <PortfolioTabs />
        
        {/* معرض الصور الكامل */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          className="mt-16"
        >
          <PortfolioGallery />
        </motion.div>
      </SectionWrapper>

      {/* 6) بناء الثقة - عملاء وشهادات */}
      <SectionWrapper bgGradient="from-white to-violet-50/30 dark:from-gray-950 dark:to-violet-950/20">
        <SectionTitle gradient="from-violet-600 to-fuchsia-600">عملاؤنا يثقون فينا</SectionTitle>
        <ClientsLogos />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20"
        >
          <VideoTestimonials />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20"
        >
          <Testimonials />
        </motion.div>
      </SectionWrapper>

      {/* 7) طريقة العمل + الضمانات */}
      <SectionWrapper bgGradient="from-violet-50/20 to-white dark:from-violet-950/10 dark:to-gray-950">
        <SectionTitle gradient="from-fuchsia-600 to-violet-600">كيف نعمل</SectionTitle>
        <HowWeWork />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-24"
        >
          <Guarantees />
        </motion.div>
      </SectionWrapper>

      {/* 8) إثبات الجودة + التقنيات */}
      <SectionWrapper bgGradient="from-white to-violet-50/30 dark:from-gray-950 dark:to-violet-950/20">
        <SectionTitle gradient="from-violet-600 to-fuchsia-600">الجودة التي نضمنها</SectionTitle>
        <Quality />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-24"
        >
          <TechStack />
        </motion.div>
      </SectionWrapper>

      {/* 9) العروض الإضافية + التسعير */}
      <SectionWrapper bgGradient="from-violet-50/20 to-white dark:from-violet-950/10 dark:to-gray-950">
        <SectionTitle gradient="from-fuchsia-600 to-amber-600">خدمات إضافية</SectionTitle>
        <AddOns />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-24"
        >
          <Pricing />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 100 }}
          className="mt-24"
        >
          <LeadMagnet />
        </motion.div>
      </SectionWrapper>

      {/* 10) الأسئلة الشائعة + الموقع */}
      <SectionWrapper bgGradient="from-white to-violet-50/30 dark:from-gray-950 dark:to-violet-950/20">
        <SectionTitle gradient="from-violet-600 to-fuchsia-600">الأسئلة الشائعة</SectionTitle>
        <FAQ />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-24"
        >
          <LocationSection />
        </motion.div>
      </SectionWrapper>

      {/* 11) مصداقية إضافية + إحصائيات */}
      <SectionWrapper bgGradient="from-violet-50/20 to-white dark:from-violet-950/10 dark:to-gray-950">
        <SectionTitle gradient="from-fuchsia-600 to-violet-600">لماذا نحن</SectionTitle>
        <WhyUs />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-24"
        >
          <Stats />
        </motion.div>
      </SectionWrapper>

      {/* 12) محتوى + تحويل نهائي */}
      <SectionWrapper bgGradient="from-white to-violet-50/20 dark:from-gray-950 dark:to-violet-950/10">
        <SectionTitle gradient="from-violet-600 to-amber-600">المدونة</SectionTitle>
        <BlogPreview />
      </SectionWrapper>

      {/* قسم الدعوة النهائي - بدون SectionWrapper عشان يكون مميز */}
      <section className="relative">
        <FinalCTA />
      </section>

      {/* زر العودة للأعلى */}
      <BackToTop />
    </>
  );
}
