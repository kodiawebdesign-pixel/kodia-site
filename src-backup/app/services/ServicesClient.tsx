"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/Container";
import { siteData } from "@/lib/siteData";
import { 
  Sparkles, 
  ArrowLeft,
  CheckCircle2,
  Star,
  Users,
  Clock,
  Shield,
  Award,
  Zap,
  Target,
  Rocket,
  Heart,
  Code2,
  Palette,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  Settings,
  FileText,
  Globe,
  MessageCircle,
  Phone
} from "lucide-react";

// خريطة الأيقونات للخدمات
const iconMap: Record<string, any> = {
  "تصميم مواقع الشركات": Code2,
  "تصميم المتاجر الإلكترونية": ShoppingCart,
  "برمجة تطبيقات الهاتف": Smartphone,
  "UI/UX Design": Palette,
  "تحسين محركات البحث (SEO)": TrendingUp,
  "الدعم الفني والصيانة": Settings,
  "كتابة المحتوى": FileText,
  "استضافة وحماية": Globe,
};

// ألوان متدرجة للخدمات
const gradientColors = [
  "from-violet-600 to-fuchsia-600",
  "from-fuchsia-600 to-pink-600",
  "from-blue-600 to-cyan-600",
  "from-purple-600 to-pink-600",
  "from-emerald-600 to-teal-600",
  "from-amber-600 to-orange-600",
  "from-indigo-600 to-violet-600",
  "from-green-600 to-emerald-600",
];

// إحصائيات عامة
const stats = [
  { icon: Users, label: "عملاء سعداء", value: "٢٠+", color: "from-violet-600 to-fuchsia-600" },
  { icon: Clock, label: "سنوات خبرة", value: "٢+", color: "from-blue-600 to-cyan-600" },
  { icon: Award, label: "مشاريع منجزة", value: "٢٥+", color: "from-amber-600 to-orange-600" },
  { icon: Star, label: "تقييم", value: "٤.٩/٥", color: "from-green-600 to-emerald-600" },
];

export default function ServicesClient() {
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
                <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">خدماتنا</span>
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              حلول رقمية 
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent mx-2">
                متكاملة
              </span>
              لمشروعك
            </motion.h1>

            {/* الوصف */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
            >
              نقدم مجموعة متكاملة من الخدمات الرقمية لمساعدتك في بناء حضور قوي على الإنترنت وتحقيق أهدافك التجارية.
            </motion.p>

            {/* إحصائيات سريعة */}
            <motion.div variants={fadeInUp} className="flex justify-center gap-6 mt-8">
              {[
                { icon: Users, label: "عملاء", value: "٢٠+" },
                { icon: Clock, label: "خبرة", value: "٢+ سنة" },
                { icon: Award, label: "مشاريع", value: "٢٥+" },
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
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={`stat-${idx}`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
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

      {/* شبكة الخدمات */}
      <section className="py-16">
        <Container>
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
                }
              }
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {siteData.home.services.map((service, idx) => {
              const Icon = iconMap[service.title] || Sparkles;
              const gradient = gradientColors[idx % gradientColors.length];
              
              // ✅ تعريف slug هنا داخل الـ map
              const slug = service.title
                .replace(/[^\w\s]/gi, '')
                .replace(/\s+/g, '-')
                .toLowerCase();

              return (
                <motion.div
                  key={`service-${idx}`}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  {/* ✅ استخدام slug هنا */}
                  <Link href={`/services/${slug}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                      {/* خلفية متدرجة متحركة */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />

                      {/* أيقونة الخدمة */}
                      <div className={`relative w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${gradient} p-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <Icon className="w-full h-full" />
                        
                        {/* تأثير نبض */}
                        <motion.div
                          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} -z-10 blur-md`}
                        />
                      </div>

                      {/* عنوان الخدمة */}
                      <h3 className="text-lg font-bold mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors text-gray-900 dark:text-white">
                        {service.title}
                      </h3>

                      {/* وصف الخدمة */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        {service.desc}
                      </p>

                      {/* مميزات سريعة */}
                      <div className="space-y-2 mb-4">
                        {[
                          "تنفيذ احترافي",
                          "تصميم متجاوب",
                          "دعم فني 24/7"
                        ].map((feature, fidx) => (
                          <div key={`feature-${idx}-${fidx}`} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                            <CheckCircle2 className="w-3 h-3 text-green-500" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* رابط الخدمة */}
                      <div className="inline-flex items-center gap-1 text-sm text-violet-600 dark:text-violet-400 group-hover:gap-2 transition-all">
                        <span>اكتشف المزيد</span>
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      </div>

                      {/* خط سفلي متدرج */}
                      <motion.div 
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.4 }}
                        style={{ transformOrigin: "right" }}
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* لماذا تختار خدماتنا */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 rounded-full text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
              مميزاتنا
            </span>
            <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">لماذا تختار خدماتنا؟</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              نقدم أكثر من مجرد خدمة، نقدم شراكة حقيقية لنجاح مشروعك
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Zap,
                title: "سرعة التنفيذ",
                desc: "نلتزم بالجدول الزمني المتفق عليه ونسلم في الوقت المحدد",
                color: "from-violet-600 to-fuchsia-600"
              },
              {
                icon: Shield,
                title: "جودة مضمونة",
                desc: "نستخدم أحدث التقنيات وأفضل الممارسات لضمان جودة عالية",
                color: "from-blue-600 to-cyan-600"
              },
              {
                icon: Heart,
                title: "دعم مستمر",
                desc: "نبقى معك حتى بعد الإطلاق لدعمك في أي استفسار",
                color: "from-amber-600 to-orange-600"
              },
              {
                icon: Target,
                title: "تركيز على النتائج",
                desc: "نصمم ونطور بهدف تحقيق أهدافك وزيادة أرباحك",
                color: "from-green-600 to-emerald-600"
              },
              {
                icon: Users,
                title: "فريق محترف",
                desc: "فريق متكامل من الخبراء في مختلف المجالات",
                color: "from-purple-600 to-pink-600"
              },
              {
                icon: Rocket,
                title: "تقنيات حديثة",
                desc: "نواكب أحدث التقنيات لنقدم لك الأفضل دائماً",
                color: "from-indigo-600 to-violet-600"
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={`why-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} p-2 text-white flex-shrink-0`}>
                      <Icon className="w-full h-full" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1 text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* شهادة عميل */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 rounded-3xl p-12 text-white text-center max-w-3xl mx-auto relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-1 justify-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={`testimonial-star-${star}`} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl mb-4 font-light">
                "خدمات احترافية وفريق متعاون. ساعدوني في تحويل فكرتي إلى موقع رائع. أنصح بالتعامل معهم."
              </p>
              <p className="font-bold text-lg">محمد الجمل</p>
              <p className="text-sm opacity-90">مؤسس Learnify Academy</p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* دعوة للتواصل */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-4 text-white shadow-xl">
                <Rocket className="w-full h-full" />
              </div>
            </motion.div>

            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">هل أنت مستعد لبدء مشروعك؟</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              تواصل معنا الآن ودعنا نناقش فكرة مشروعك ونقدم لك أفضل الحلول
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                طلب عرض سعر
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                تواصل معنا
              </Link>
            </div>

            <p className="text-xs text-gray-400 dark:text-gray-500 mt-6">
              * استشارة مجانية • رد خلال ٢٤ ساعة • ضمان الجودة
            </p>
          </motion.div>
        </Container>
      </section>

      {/* شعار الجودة */}
      <section className="pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
              <Award className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">خدمات موثوقة من أكثر من ٢٠ عميل سعيد</span>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}