"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/Container";
import { 
  BookOpen, 
  Sparkles, 
  Calculator, 
  FileText, 
  Download,
  CheckCircle2,
  ArrowLeft,
  Gift,
  Star,
  Clock,
  Users,
  Target,
  Rocket,
  Heart,
  Share2,
  Bookmark,
  Printer,
  Zap,
  Shield,
  Award,
  Globe,
  Code2,
  Palette
} from "lucide-react";

export default function ResourcesClient() {
  // قائمة الموارد الرئيسية
  const resources = [
    {
      icon: BookOpen,
      title: "Checklist الموقع",
      description: "قائمة جاهزة للتأكد من صفحات الموقع ومحتواه قبل البدء. تشمل العناصر الأساسية التي يجب مراعاتها.",
      features: [
        "قائمة صفحات الموقع (حتى ١٠ صفحات)",
        "عناصر SEO أساسية",
        "محتوى مطلوب لكل صفحة",
        "صور وفيديوهات مطلوبة",
        "روابط التواصل الاجتماعي"
      ],
      link: "/brief",
      buttonText: "افتح نموذج Brief",
      gradient: "from-violet-600 to-fuchsia-600",
      bgLight: "bg-violet-50 dark:bg-violet-900/20",
      iconColor: "text-violet-600",
      stats: "تم تحميله ٥٠٠+ مرة"
    },
    {
      icon: Calculator,
      title: "حاسبة السعر",
      description: "تقدير سريع يساعدك تفهم التكلفة التقريبية لمشروعك قبل التواصل معنا. بناءً على عوامل متعددة.",
      features: [
        "تقدير دقيق للمشروع",
        "عوامل متعددة (صفحات، مميزات، تقنيات)",
        "نتيجة فورية",
        "إرسال عبر واتساب",
        "مقارنة بين الباقات"
      ],
      link: "/estimate",
      buttonText: "افتح حاسبة السعر",
      gradient: "from-fuchsia-600 to-pink-600",
      bgLight: "bg-fuchsia-50 dark:bg-fuchsia-900/20",
      iconColor: "text-fuchsia-600",
      stats: "تم استخدامها ٣٠٠+ مرة"
    },
    {
      icon: FileText,
      title: "Company Profile",
      description: "صفحة تعريفية قابلة للطباعة والحفظ PDF بضغطة واحدة. تحتوي على جميع معلومات الشركة وخدماتها.",
      features: [
        "معلومات الشركة كاملة",
        "الخدمات المقدمة بالتفصيل",
        "طريقة العمل خطوة بخطوة",
        "الضمانات والمميزات",
        "قابلة للطباعة والحفظ PDF"
      ],
      link: "/profile",
      buttonText: "افتح البروفايل",
      gradient: "from-amber-600 to-orange-600",
      bgLight: "bg-amber-50 dark:bg-amber-900/20",
      iconColor: "text-amber-600",
      stats: "تم تحميله ٢٠٠+ مرة"
    }
  ];

  // موارد إضافية
  const additionalResources = [
    {
      icon: Target,
      title: "نموذج Brief مفصل",
      description: "نموذج متكامل يساعدك في توثيق متطلبات مشروعك بدقة",
      link: "/brief",
      gradient: "from-violet-600 to-fuchsia-600"
    },
    {
      icon: Rocket,
      title: "دليل البدء السريع",
      description: "خطوات بسيطة لبدء مشروعك الرقمي بنجاح",
      link: "#",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Heart,
      title: "نصائح لاختيار التصميم",
      description: "إرشادات لمساعدتك في اختيار التصميم المناسب لنشاطك",
      link: "#",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      icon: Star,
      title: "قائمة بأفضل الممارسات",
      description: "أفضل الممارسات في تصميم وتطوير المواقع",
      link: "#",
      gradient: "from-amber-600 to-orange-600"
    },
    {
      icon: Shield,
      title: "دليل الأمان والخصوصية",
      description: "أساسيات حماية موقعك وبيانات عملائك",
      link: "#",
      gradient: "from-indigo-600 to-violet-600"
    },
    {
      icon: Globe,
      title: "دليل تحسين محركات البحث",
      description: "خطوات عملية لتحسين ظهور موقعك في جوجل",
      link: "#",
      gradient: "from-green-600 to-emerald-600"
    }
  ];

  // إحصائيات الموارد
  const stats = [
    { icon: Download, label: "إجمالي التحميلات", value: "١٠٠٠+", color: "from-violet-600 to-fuchsia-600" },
    { icon: Users, label: "مستفيد", value: "٧٠٠+", color: "from-blue-600 to-cyan-600" },
    { icon: Star, label: "تقييم", value: "٤.٨/٥", color: "from-amber-600 to-orange-600" },
    { icon: Clock, label: "متاح", value: "٢٤/٧", color: "from-green-600 to-emerald-600" },
  ];

  // مميزات الموارد
  const benefits = [
    { icon: Zap, text: "مجانية ١٠٠٪" },
    { icon: Shield, text: "جاهزة للاستخدام" },
    { icon: Award, text: "محدثة باستمرار" },
    { icon: Globe, text: "متاحة للجميع" },
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
                <Gift className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Resources & Freebies</span>
                <Sparkles className="w-3 h-3 text-amber-500" />
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              موارد مجانية
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent mx-2">
                لتجهيز مشروعك
              </span>
            </motion.h1>

            {/* الوصف */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
            >
              مجموعة من الأدوات والموارد المجانية التي تساعدك في تجهيز مشروعك وتوفير الوقت والجهد في مرحلة التخطيط.
            </motion.p>

            {/* مميزات سريعة */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mt-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <benefit.icon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  <span>{benefit.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* إحصائيات الموارد */}
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

      {/* الموارد الرئيسية */}
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
                  staggerChildren: 0.2,
                }
              }
            }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {resources.map((resource, idx) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={`resource-${idx}`}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 shadow-xl hover:shadow-2xl transition-all overflow-hidden h-full">
                    {/* خلفية متدرجة متحركة */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

                    {/* أيقونة كبيرة في الخلفية */}
                    <Icon className="absolute -bottom-4 -left-4 w-32 h-32 text-violet-600 dark:text-violet-700 opacity-5" />
                    
                    {/* المحتوى */}
                    <div className="relative z-10">
                      {/* الأيقونة الرئيسية */}
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${resource.gradient} p-3.5 text-white mb-6 shadow-lg`}>
                        <Icon className="w-full h-full" />
                      </div>

                      <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{resource.title}</h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                        {resource.description}
                      </p>

                      {/* المميزات */}
                      <div className="space-y-2 mb-6">
                        {resource.features.map((feature, fidx) => (
                          <div key={`resource-${idx}-feature-${fidx}`} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle2 className={`w-4 h-4 ${resource.gradient.replace('from-', 'text-').split(' ')[0]} flex-shrink-0 mt-0.5`} />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* إحصائية الاستخدام */}
                      <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">{resource.stats}</p>

                      {/* زر الرابط */}
                      <Link
                        href={resource.link}
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${resource.gradient} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
                      >
                        {resource.buttonText}
                        <ArrowLeft className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* خط سفلي متدرج */}
                    <motion.div 
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${resource.gradient}`}
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
        </Container>
      </section>

      {/* موارد إضافية */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 rounded-full text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
              المزيد من الموارد
            </span>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">موارد إضافية</h2>
            <p className="text-gray-600 dark:text-gray-400">أدوات ونماذج تساعدك في رحلتك الرقمية</p>
          </motion.div>

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
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {additionalResources.map((resource, idx) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={`additional-${idx}`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -4 }}
                >
                  <Link href={resource.link}>
                    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-md hover:shadow-lg transition-all h-full">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${resource.gradient} p-2 text-white flex-shrink-0`}>
                          <Icon className="w-full h-full" />
                        </div>
                        <div>
                          <h3 className="font-bold text-sm mb-1 text-gray-900 dark:text-white">{resource.title}</h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{resource.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* قسم المساعدة */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-right"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-2.5 text-white">
                  <Heart className="w-full h-full" />
                </div>
              </motion.div>

              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">تحتاج مساعدة في تجهيز مشروعك؟</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                فريقنا مستعد لمساعدتك في أي استفسار. تواصل معنا الآن ودعنا نناقش فكرة مشروعك.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  تواصل معنا
                  <ArrowLeft className="w-4 h-4" />
                </Link>
                <Link
                  href="/brief"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                >
                  نموذج Brief
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Bookmark, label: "موارد مجانية", value: "٩+", color: "from-violet-600 to-fuchsia-600" },
                { icon: Users, label: "مستفيد شهرياً", value: "١٠٠+", color: "from-blue-600 to-cyan-600" },
                { icon: Star, label: "تقييم", value: "٤.٨", color: "from-amber-600 to-orange-600" },
                { icon: Download, label: "تحميل", value: "مجاني", color: "from-green-600 to-emerald-600" },
              ].map((stat, idx) => (
                <motion.div
                  key={`stat-small-${idx}`}
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 text-center shadow-sm hover:shadow-md transition-all"
                >
                  <div className={`w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-br ${stat.color} p-1.5 text-white`}>
                    <stat.icon className="w-full h-full" />
                  </div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* روابط سريعة */}
      <section className="py-20 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Gift className="w-16 h-16 text-yellow-300" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">ابدأ رحلتك الرقمية الآن</h2>
            <p className="text-white/90 mb-8 text-lg">
              استخدم مواردنا المجانية لتجهيز مشروعك بشكل احترافي ووفر الوقت والجهد
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/brief"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5" />
                Checklist الموقع
              </Link>
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                <Calculator className="w-5 h-5" />
                حاسبة السعر
              </Link>
              <Link
                href="/profile"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                <Printer className="w-5 h-5" />
                Company Profile
              </Link>
            </div>

            <p className="text-xs text-white/70 mt-6">
              * جميع الموارد مجانية ١٠٠٪ ويمكنك استخدامها مباشرة
            </p>
          </motion.div>
        </Container>
      </section>

      {/* دعوة للمشاركة */}
      <section className="py-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">هل وجدت هذه الموارد مفيدة؟</p>
            <div className="flex justify-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert("تم نسخ الرابط! شاركه مع من يهمه الأمر");
                }}
                className="inline-flex items-center gap-1 px-5 py-2.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                مشاركة
              </motion.button>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
              ساعد غيرك في الاستفادة من هذه الموارد المجانية
            </p>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
