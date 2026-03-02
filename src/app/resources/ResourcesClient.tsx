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
  Printer
} from "lucide-react";

export default function ResourcesClient() {
  // قائمة الموارد
  const resources = [
    {
      icon: BookOpen,
      title: "Checklist الموقع",
      description: "قائمة جاهزة للتأكد من صفحات الموقع ومحتواه قبل البدء. تشمل العناصر الأساسية التي يجب مراعاتها.",
      features: [
        "قائمة صفحات الموقع",
        "عناصر SEO أساسية",
        "محتوى مطلوب",
        "صور وفيديوهات"
      ],
      link: "/brief",
      buttonText: "افتح نموذج Brief",
      gradient: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Calculator,
      title: "حاسبة السعر",
      description: "تقدير سريع يساعدك تفهم التكلفة التقريبية لمشروعك قبل التواصل معنا. بناءً على عوامل متعددة.",
      features: [
        "تقدير دقيق",
        "عوامل متعددة",
        "نتيجة فورية",
        "إرسال عبر واتساب"
      ],
      link: "/estimate",
      buttonText: "افتح حاسبة السعر",
      gradient: "from-purple-500 to-pink-500",
      bgLight: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: FileText,
      title: "Company Profile",
      description: "صفحة تعريفية قابلة للطباعة والحفظ PDF بضغطة واحدة. تحتوي على جميع معلومات الشركة وخدماتها.",
      features: [
        "معلومات الشركة",
        "الخدمات المقدمة",
        "طريقة العمل",
        "الضمانات"
      ],
      link: "/profile",
      buttonText: "افتح البروفايل",
      gradient: "from-amber-500 to-orange-500",
      bgLight: "bg-amber-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600"
    }
  ];

  // موارد إضافية
  const additionalResources = [
    {
      icon: Target,
      title: "نموذج Brief مفصل",
      description: "نموذج متكامل يساعدك في توثيق متطلبات مشروعك بدقة",
      link: "/brief"
    },
    {
      icon: Rocket,
      title: "دليل البدء السريع",
      description: "خطوات بسيطة لبدء مشروعك الرقمي بنجاح",
      link: "#"
    },
    {
      icon: Heart,
      title: "نصائح لاختيار التصميم",
      description: "إرشادات لمساعدتك في اختيار التصميم المناسب لنشاطك",
      link: "#"
    },
    {
      icon: Star,
      title: "قائمة بأفضل الممارسات",
      description: "أفضل الممارسات في تصميم وتطوير المواقع",
      link: "#"
    }
  ];

  // إحصائيات الموارد
  const stats = [
    { icon: Download, label: "تحميل", value: "٥٠٠+" },
    { icon: Users, label: "مستفيد", value: "٣٠٠+" },
    { icon: Star, label: "تقييم", value: "٤.٨/٥" },
    { icon: Clock, label: "متاح", value: "٢٤/٧" },
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
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* قسم الهيرو */}
      <section className="relative py-20 overflow-hidden">
        {/* خلفية متحركة */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />
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
                <Gift className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Resources & Freebies</span>
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              موارد مجانية
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mx-2">
                لتجهيز مشروعك
              </span>
            </motion.h1>

            {/* الوصف */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            >
              مجموعة من الأدوات والموارد المجانية التي تساعدك في تجهيز مشروعك وتوفير الوقت والجهد في مرحلة التخطيط.
            </motion.p>
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
                    hidden: { opacity: 0, y: 20, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 }
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
                    hidden: { opacity: 0, y: 30, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className={`bg-white rounded-3xl border border-gray-200 p-8 shadow-xl hover:shadow-2xl transition-all overflow-hidden`}>
                    {/* خلفية متدرجة متحركة */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

                    {/* أيقونة كبيرة في الخلفية */}
<Icon className="absolute -bottom-4 -left-4 w-32 h-32 text-blue-600 opacity-5" />
                    {/* المحتوى */}
                    <div className="relative z-10">
                      {/* الأيقونة الرئيسية */}
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${resource.gradient} p-3.5 text-white mb-6 shadow-lg`}>
                        <Icon className="w-full h-full" />
                      </div>

                      <h2 className="text-2xl font-bold mb-3">{resource.title}</h2>
                      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                        {resource.description}
                      </p>

                      {/* المميزات */}
                      <div className="space-y-2 mb-6">
                        {resource.features.map((feature, fidx) => (
                          <div key={`resource-${idx}-feature-${fidx}`} className="flex items-start gap-2 text-sm text-gray-700">
<CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* زر الرابط */}
                      <Link
                        href={resource.link}
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${resource.gradient} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all`}
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
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* موارد إضافية */}
      <section className="py-16 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold mb-3">موارد إضافية</h2>
            <p className="text-gray-600">أدوات ونماذج تساعدك في رحلتك الرقمية</p>
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
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {additionalResources.map((resource, idx) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={`additional-${idx}`}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                  whileHover={{ y: -4 }}
                >
                  <Link href={resource.link}>
                    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-md hover:shadow-lg transition-all">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-2 text-white flex-shrink-0">
                          <Icon className="w-full h-full" />
                        </div>
                        <div>
                          <h3 className="font-bold text-sm mb-1">{resource.title}</h3>
                          <p className="text-xs text-gray-600">{resource.description}</p>
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
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <h2 className="text-2xl font-bold mb-4">تحتاج مساعدة في تجهيز مشروعك؟</h2>
              <p className="text-gray-600 mb-6">
                فريقنا مستعد لمساعدتك في أي استفسار. تواصل معنا الآن ودعنا نناقش فكرة مشروعك.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  تواصل معنا
                  <ArrowLeft className="w-4 h-4" />
                </Link>
                <Link
                  href="/brief"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 bg-white text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all"
                >
                  نموذج Brief
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Bookmark, label: "موارد مجانية", value: "٦+" },
                { icon: Users, label: "مستفيد شهرياً", value: "١٠٠+" },
                { icon: Star, label: "تقييم", value: "٤.٨" },
                { icon: Download, label: "تحميل", value: "مجاني" },
              ].map((stat, idx) => (
                <div key={`stat-small-${idx}`} className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-sm">
                  <stat.icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* روابط سريعة */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-2xl font-bold mb-4">ابدأ رحلتك الرقمية الآن</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              استخدم مواردنا المجانية لتجهيز مشروعك بشكل احترافي
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/brief"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <BookOpen className="w-4 h-4" />
                Checklist الموقع
              </Link>
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition-all"
              >
                <Calculator className="w-4 h-4" />
                حاسبة السعر
              </Link>
              <Link
                href="/profile"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition-all"
              >
                <Printer className="w-4 h-4" />
                Company Profile
              </Link>
            </div>
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
            <p className="text-sm text-gray-500 mb-3">هل وجدت هذه الموارد مفيدة؟</p>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert("تم نسخ الرابط!");
                }}
                className="inline-flex items-center gap-1 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                مشاركة
              </button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}