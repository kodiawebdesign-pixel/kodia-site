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
  Gem,
  Palette,
  Code2,
  Smartphone,
  ShoppingCart,
  Globe,
  Headphones,
  FileText,
  Camera,
  Layers,
  PenTool
} from "lucide-react";
import { useState } from "react";

export default function ServiceLanding({ service }: { service: any }) {
  const wa = siteData.brand.whatsappLink;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const waMsg = (title: string) =>
    `${wa}?text=${encodeURIComponent(
      `مرحباً 👋\nأود الاستفسار عن خدمة: ${title}\n\nالرجاء إرسال عرض سعر وتفاصيل أكثر.\n\nالاسم: …\nرقم الهاتف: …\nالبريد الإلكتروني: …`
    )}`;

  // تحديد الألوان المتدرجة حسب نوع الخدمة - محدثة بالبنفسجي
  const getGradient = () => {
    if (service.slug.includes("web")) return "from-violet-600 to-fuchsia-600";
    if (service.slug.includes("ecom")) return "from-fuchsia-600 to-pink-600";
    if (service.slug.includes("mobile")) return "from-blue-600 to-cyan-600";
    if (service.slug.includes("ui")) return "from-purple-600 to-pink-600";
    if (service.slug.includes("seo")) return "from-emerald-600 to-teal-600";
    if (service.slug.includes("content")) return "from-amber-600 to-orange-600";
    if (service.slug.includes("hosting")) return "from-indigo-600 to-violet-600";
    return "from-violet-600 to-fuchsia-600";
  };

  // أيقونة مناسبة للخدمة
  const getServiceIcon = () => {
    if (service.slug.includes("web")) return Code2;
    if (service.slug.includes("ecom")) return ShoppingCart;
    if (service.slug.includes("mobile")) return Smartphone;
    if (service.slug.includes("ui")) return Palette;
    if (service.slug.includes("seo")) return TrendingUp;
    if (service.slug.includes("content")) return FileText;
    if (service.slug.includes("hosting")) return Globe;
    if (service.slug.includes("support")) return Headphones;
    return Sparkles;
  };

  const gradient = getGradient();
  const ServiceIcon = getServiceIcon();

  // إحصائيات سريعة - محدثة
  const stats = [
    { icon: Clock, label: "مدة التنفيذ", value: "٧-٢١ يوم", color: "from-violet-600 to-fuchsia-600" },
    { icon: Users, label: "عملاء سعداء", value: "٢٠+", color: "from-blue-600 to-cyan-600" },
    { icon: Star, label: "تقييم الخدمة", value: "٤.٩/٥", color: "from-amber-600 to-orange-600" },
    { icon: Shield, label: "ضمان", value: "استعادة الحقوق", color: "from-green-600 to-emerald-600" },
  ];

  // مميزات إضافية
  const extraFeatures = [
    { icon: Zap, text: "تنفيذ سريع" },
    { icon: Heart, text: "رضا مضمون" },
    { icon: Target, text: "نتائج ملموسة" },
    { icon: Gem, text: "جودة عالية" },
  ];

  // متغيرات الحركة
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  };

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
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
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 dark:opacity-10`} />
        
        <motion.div variants={fadeInUp} className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} p-2.5 text-white`}>
              <ServiceIcon className="w-full h-full" />
            </div>
            <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${gradient} text-white text-sm font-medium`}>
              {siteData.home.marketing.speedLine}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            {service.title}
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            {service.subtitle}
          </p>

          {/* مميزات سريعة */}
          <div className="flex flex-wrap gap-4 mt-6">
            {extraFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                <feature.icon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

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
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            >
              نموذج سريع
            </Link>
            
            <Link
              href="/brief"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
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
                <div key={idx} className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className={`w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-br ${stat.color} p-1.5 text-white`}>
                    <Icon className="w-full h-full" />
                  </div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
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
          className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <span className="text-xl">⚠️</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">المشكلة</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.problem}</p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <span className="text-xl">✅</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">الحل</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.solution}</p>
        </motion.div>
      </motion.div>

      {/* المميزات */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerChildren}
        className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
          <Sparkles className="w-6 h-6 text-violet-600 dark:text-violet-400" />
          مميزات التنفيذ
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.features.map((feature: any, idx: number) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-all"
            >
              <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5`}>
                ✓
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">{feature.title || feature}</span>
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
          <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">الباقات</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            باقات مرنة تناسب احتياجاتك المختلفة. اختر الباقة المناسبة أو اطلب تصميم حسب الطلب.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {service.packages.map((pkg: any, idx: number) => (
            <motion.div
              key={pkg.name}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl border-2 p-6 shadow-xl ${
                idx === 1 ? 'border-violet-300 dark:border-violet-700 scale-105 lg:scale-110' : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {idx === 1 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg whitespace-nowrap"
                >
                  <Sparkles className="w-3 h-3 inline ml-1" />
                  الأكثر طلباً
                </motion.div>
              )}

              <div className={`text-2xl mb-4 bg-gradient-to-r ${gradient} w-14 h-14 rounded-xl flex items-center justify-center text-white`}>
                {idx === 0 ? '🚀' : idx === 1 ? '💎' : '👑'}
              </div>

              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{pkg.name}</h3>
              <p className={`text-2xl font-bold mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                {pkg.price}
              </p>

              <ul className="space-y-3 mb-6">
                {pkg.points.map((point: string, pidx: number) => (
                  <li key={pidx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>

              <a
                href={waMsg(`${service.title} - باقة ${pkg.name}`)}
                target="_blank"
                rel="noreferrer"
                className={`block text-center py-3 px-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all bg-gradient-to-r ${gradient} hover:scale-105 transform duration-300`}
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
        className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
          <HelpCircle className="w-6 h-6 text-violet-600 dark:text-violet-400" />
          الأسئلة الشائعة
        </h2>

        <div className="space-y-4">
          {service.faq.map((faq: any, idx: number) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 text-right hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="font-bold text-sm text-gray-900 dark:text-white">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openFaq === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
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
        transition={{ type: "spring", stiffness: 100 }}
        className={`bg-gradient-to-r ${gradient} rounded-3xl p-12 text-white text-center relative overflow-hidden`}
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
        
        <div className="relative z-10">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <Rocket className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">جاهز نبدأ؟</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            ابعت تفاصيل بسيطة وسأرد عليك بخطة تنفيذ واضحة تناسب احتياجاتك وميزانيتك.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={waMsg(service.title)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              تواصل واتساب
            </a>
            <a
              href={`tel:${siteData.brand.phoneE164}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              اتصال
            </a>
          </div>
          <p className="text-xs text-white/70 mt-4">
            * رد خلال ٢٤ ساعة • استشارة مجانية • ضمان الجودة
          </p>
        </div>
      </motion.div>
    </div>
  );
}
