"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { siteData } from "@/lib/siteData";
import { MessageCircle, Phone, Mail, Sparkles, ArrowLeft, Rocket, Send, Zap } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  const c = siteData.home.finalCta;
  const { phoneE164, whatsappLink, email, phoneDisplay } = siteData.brand;

  const resolveHref = (href: string) => {
    if (href === "WHATSAPP") return whatsappLink;
    if (href === "CALL") return `tel:${phoneE164}`;
    if (href === "EMAIL") return `mailto:${email}`;
    return href;
  };

  // أيقونات لكل زر
  const getIcon = (label: string) => {
    if (label.includes("واتساب")) return <MessageCircle className="w-5 h-5" />;
    if (label.includes("اتصال")) return <Phone className="w-5 h-5" />;
    if (label.includes("بريد")) return <Mail className="w-5 h-5" />;
    return <Send className="w-5 h-5" />;
  };

  // ألوان كل زر
  const getButtonGradient = (label: string) => {
    if (label.includes("واتساب")) return "from-green-600 to-emerald-600";
    if (label.includes("اتصال")) return "from-violet-600 to-fuchsia-600";
    if (label.includes("بريد")) return "from-amber-600 to-orange-600";
    return "from-violet-600 to-fuchsia-600";
  };

  // متغيرات الحركة
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <Section 
      title={c.title} 
      subtitle={c.subtitle}
      className="bg-gradient-to-b from-violet-50/50 to-white dark:from-violet-950/20 dark:to-gray-950"
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            }
          }
        }}
        className="relative bg-gradient-to-br from-violet-600 via-fuchsia-600 to-amber-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden"
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

        {/* المحتوى */}
        <div className="relative z-10">
          {/* أيقونة كبيرة */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center mb-6"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
            >
              <Rocket className="w-10 h-10 text-yellow-300" />
            </motion.div>
          </motion.div>

          {/* العنوان */}
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-center mb-4"
          >
            {c.title}
          </motion.h3>

          {/* الوصف */}
          <motion.p 
            variants={fadeInUp}
            className="text-white/90 text-center mb-8 max-w-2xl mx-auto"
          >
            {c.subtitle}
          </motion.p>

          {/* خيارات التواصل */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-6"
          >
            {c.buttons.map((b, idx) => {
              const gradient = getButtonGradient(b.label);
              const icon = getIcon(b.label);
              
              return (
                <motion.a
                  key={b.label}
                  href={resolveHref(b.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${gradient} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                  target={b.href === "WHATSAPP" ? "_blank" : undefined}
                  rel={b.href === "WHATSAPP" ? "noreferrer" : undefined}
                >
                  {icon}
                  {b.label}
                  <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* معلومات إضافية */}
          <motion.div 
            variants={fadeInUp}
            className="text-center text-white/70 text-sm"
          >
            <p className="flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-yellow-300" />
              رد سريع خلال ساعات العمل • استشارة مجانية • بدون التزام
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </p>
          </motion.div>

          {/* رقم الهاتف للتواصل السريع */}
          <motion.div 
            variants={fadeInUp}
            className="mt-6 text-center"
          >
            <a 
              href={`tel:${phoneE164}`}
              className="inline-flex items-center gap-1 text-white/80 hover:text-white transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              {phoneDisplay}
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* شعارات الثقة */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex flex-wrap justify-center gap-6"
      >
        {[
          { text: "دعم فني 24/7", icon: Zap },
          { text: "تسليم سريع", icon: Rocket },
          { text: "ضمان الجودة", icon: MessageCircle },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Icon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <span>{item.text}</span>
            </div>
          );
        })}
      </motion.div>

      {/* رابط للأسئلة الشائعة */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-4"
      >
        <Link 
          href="/faq" 
          className="text-xs text-gray-400 hover:text-violet-600 dark:text-gray-500 dark:hover:text-violet-400 transition-colors"
        >
          لديك أسئلة؟ تصفح الأسئلة الشائعة
        </Link>
      </motion.div>
    </Section>
  );
}
