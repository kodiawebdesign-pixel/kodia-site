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
import Showreel from "@/components/Showreel"; // مكون جديد هنضيفه
import PortfolioGallery from "@/components/PortfolioGallery"; // مكون جديد

// مكون للعنوان المتحرك
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12"
  >
    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
      {children}
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
  </motion.div>
);

// مكون للقسم مع تأثير ظهور متدرج
const SectionWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8 }}
    className={`relative py-16 md:py-24 overflow-hidden ${className}`}
  >
    {/* خلفية متحركة خفيفة */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-50" />
    </div>
    <div className="container mx-auto px-4">
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
      
      {/* 1) First impression - مع تأثيرات خاصة */}
      <section className="relative min-h-screen">
        <Hero />
        <TrustBar />
      </section>

      {/* 2) What you offer + Proof - مع أنيميشن تسلسلي */}
      <SectionWrapper>
        <SectionTitle>خدماتنا المتكاملة</SectionTitle>
        <Services />
      </SectionWrapper>

      {/* 3) Showreel - مقطع فيديو تعريفي جديد */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <SectionTitle>شاهد الفرق</SectionTitle>
        <Showreel />
      </SectionWrapper>

      {/* 4) Recent Projects - مع تأثيرات */}
      <SectionWrapper>
        <SectionTitle>أحدث الأعمال</SectionTitle>
        <RecentProjects />
      </SectionWrapper>

      {/* 5) Portfolio Tabs - مع معرض متقدم */}
      <SectionWrapper className="bg-gray-50">
        <SectionTitle>معرض الأعمال</SectionTitle>
        <PortfolioTabs />
        
        {/* معرض الصور الكامل */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12"
        >
          <PortfolioGallery />
        </motion.div>
      </SectionWrapper>

      {/* 6) Trust builders - مع شريط متحرك للشعارات */}
      <SectionWrapper>
        <SectionTitle>عملاؤنا يثقون فينا</SectionTitle>
        <ClientsLogos />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <VideoTestimonials />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          
        </motion.div>
      </SectionWrapper>

      {/* 7) Process + guarantees - مع خط زمني متحرك */}
      <SectionWrapper className="bg-gradient-to-b from-white to-gray-50">
        <SectionTitle>كيف نعمل</SectionTitle>
        <HowWeWork />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <Guarantees />
        </motion.div>
      </SectionWrapper>

      {/* 8) Quality proof - مع أيقونات متحركة */}
      <SectionWrapper>
        <SectionTitle>الجودة التي نضمنها</SectionTitle>
        <Quality />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <TechStack />
        </motion.div>
      </SectionWrapper>

      {/* 9) Offers - مع بطاقات متحركة */}
      <SectionWrapper className="bg-gray-50">
        <SectionTitle>خدمات إضافية</SectionTitle>
        <AddOns />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20"
        >
          <Pricing />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <LeadMagnet />
        </motion.div>
      </SectionWrapper>

      {/* 10) Objections - مع أسئلة متحركة */}
      <SectionWrapper>
        <SectionTitle>الأسئلة الشائعة</SectionTitle>
        <FAQ />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <LocationSection />
        </motion.div>
      </SectionWrapper>

      {/* 11) Extra credibility - مع إحصائيات متحركة */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <SectionTitle>لماذا نحن</SectionTitle>
        <WhyUs />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <Stats />
        </motion.div>
      </SectionWrapper>

      {/* 12) Content + final conversion - مع تأثيرات ختامية */}
      <SectionWrapper className="bg-gray-50">
        <SectionTitle>المدونة</SectionTitle>
        <BlogPreview />
      </SectionWrapper>

      <section className="relative">
        <FinalCTA />
      </section>

      {/* زر العودة للأعلى */}
      <BackToTop />
    </>
  );
}
