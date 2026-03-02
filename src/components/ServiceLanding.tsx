"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/siteData";
import Link from "next/link";
import { 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  Zap,
  Shield,
  Star,
  TrendingUp,
  Users,
  Clock,
  Award,
  ArrowLeft,
  ChevronDown,
  HelpCircle,
  Rocket,
  Target,
  Heart,
  Gem
} from "lucide-react";
import { useState } from "react";

export default function ServiceLanding({ service }: { service: any }) {
  const wa = siteData.brand.whatsappLink;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const waMsg = (title: string) =>
    `${wa}?text=${encodeURIComponent(
      `مرحبًا 👋\nعايز تفاصيل/عرض سعر لخدمة: ${title}\n\nمحتاج أعرف:\n- نوع النشاط\n- المطلوب بالظبط\n- أمثلة تعجبني\n\nاسمي: …\nرقمي: …`
    )}`;

  // تحديد الألوان المتدرجة حسب نوع الخدمة
  const getGradient = () => {
    if (service.slug.includes("web")) return "from-blue-500 to-cyan-500";
    if (service.slug.includes("ecom")) return "from-purple-500 to-pink-500";
    if (service.slug.includes("mobile")) return "from-emerald-500 to-teal-500";
    return "from-blue-600 to-purple-600";
  };

  const gradient = getGradient();

  // إحصائيات سريعة
  const stats = [
    { icon: Clock, label: "مدة التنفيذ", value: "٧-٢١ يوم" },
    { icon: Users, label: "عملاء سعداء", value: "١٠+" },
    { icon: Star, label: "تقييم الخدمة", value: "٤.٩/٥" },
    { icon: Shield, label: "ضمان", value: "استعادة الحقوق" },
  ];

  // متغيرات الحركة
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  return (
    <div className="space-y-16">
      {/* قسم الهيرو */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="relative overflow-hidden"
      >
        {/* خلفية متدرجة */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5`} />
        
        <motion.div variants={fadeInUp} className="relative z-10">
          <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${gradient} text-white text-sm font-medium mb-4`}>
            {siteData.home.marketing.speedLine}
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {service.title}
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            {service.subtitle}
          </p>

          {/* أزرار الإجراء */}
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${gradient} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all`}
              href={waMsg(service.title)}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              اطلب عرض سعر
            </motion.a>
            
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
            >
              نموذج سريع
            </Link>
            
            <Link
              href="/brief"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all"
            >
              نموذج Brief
            </Link>
          </div>

          {/* إحصائيات سريعة */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center">
                  <Icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* المشكلة والحل */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerChildren}
        className="grid lg:grid-cols-2 gap-6"
      >
        <motion.div
          variants={fadeInUp}
          className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
              <span className="text-xl">⚠️</span>
            </div>
            <h2 className="text-xl font-bold">المشكلة</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">{service.problem}</p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <span className="text-xl">✅</span>
            </div>
            <h2 className="text-xl font-bold">الحل</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">{service.solution}</p>
        </motion.div>
      </motion.div>

      {/* المميزات */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerChildren}
        className="bg-white rounded-3xl border border-gray-200 p-8 shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-blue-600" />
          مميزات التنفيذ
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.features.map((feature: any, idx: number) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all"
            >
              <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5`}>
                ✓
              </div>
              <span className="text-sm text-gray-700">{feature.title || feature}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* الباقات */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerChildren}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">الباقات</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            باقات مرنة تناسب احتياجاتك المختلفة. اختر الباقة المناسبة أو اطلب تصميم حسب الطلب.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {service.packages.map((pkg: any, idx: number) => (
            <motion.div
              key={pkg.name}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className={`relative bg-white rounded-2xl border-2 p-6 shadow-xl ${
                idx === 1 ? 'border-purple-200 scale-105 lg:scale-110' : 'border-gray-200'
              }`}
            >
              {idx === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                  الأكثر طلباً
                </div>
              )}

              <div className={`text-2xl mb-4 bg-gradient-to-r ${gradient} w-14 h-14 rounded-xl flex items-center justify-center text-white`}>
                {idx === 0 ? '🚀' : idx === 1 ? '💎' : '👑'}
              </div>

              <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
              <p className={`text-2xl font-bold mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                {pkg.price}
              </p>

              <ul className="space-y-3 mb-6">
                {pkg.points.map((point: string, pidx: number) => (
                  <li key={pidx} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>

              <a
                href={waMsg(`${service.title} - باقة ${pkg.name}`)}
                target="_blank"
                rel="noreferrer"
                className={`block text-center py-3 px-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all bg-gradient-to-r ${gradient}`}
              >
                اطلب هذه الباقة
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* الأسئلة الشائعة */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerChildren}
        className="bg-white rounded-3xl border border-gray-200 p-8 shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-blue-600" />
          الأسئلة الشائعة
        </h2>

        <div className="space-y-4">
          {service.faq.map((faq: any, idx: number) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 text-right hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-sm">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openFaq === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 pb-4 text-sm text-gray-600 leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* دعوة للتواصل */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`bg-gradient-to-r ${gradient} rounded-3xl p-8 text-white text-center relative overflow-hidden`}
      >
        {/* خلفية متحركة */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
        
        <div className="relative z-10">
          <Rocket className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-3xl font-bold mb-4">جاهز نبدأ؟</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            ابعت تفاصيل بسيطة وسأرد عليك بخطة تنفيذ واضحة تناسب احتياجاتك وميزانيتك.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={waMsg(service.title)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              تواصل واتساب
            </a>
            <a
              href={`tel:${siteData.brand.phoneE164}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition-all"
            >
              <Phone className="w-5 h-5" />
              اتصال
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}