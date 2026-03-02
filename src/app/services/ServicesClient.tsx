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
  Globe
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
  "استضافة ودومين": Globe,
};

// ألوان متدرجة للخدمات
const gradientColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-amber-500",
  "from-indigo-500 to-blue-500",
  "from-rose-500 to-red-500",
  "from-violet-500 to-purple-500",
  "from-amber-500 to-yellow-500",
];

// إحصائيات عامة
const stats = [
  { icon: Users, label: "عملاء سعداء", value: "١٠+" },
  { icon: Clock, label: "سنوات خبرة", value: "٢+" },
  { icon: Award, label: "مشاريع منجزة", value: "١٥+" },
  { icon: Star, label: "تقييم", value: "٤.٩/٥" },
];

export default function ServicesClient() {
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
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">خدماتنا</span>
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              حلول رقمية 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mx-2">
                متكاملة
              </span>
              لمشروعك
            </motion.h1>

            {/* الوصف */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            >
              نقدم مجموعة متكاملة من الخدمات الرقمية لمساعدتك في بناء حضور قوي على الإنترنت وتحقيق أهدافك التجارية.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* إحصائيات سريعة */}
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
              
              // إنشاء slug من عنوان الخدمة
              const slug = service.title
                .replace(/[^\w\s]/gi, '')
                .replace(/\s+/g, '-')
                .toLowerCase();

              return (
                <motion.div
                  key={`service-${idx}`}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <Link href={`/services/${slug}`}>
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                      {/* خلفية متدرجة متحركة */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />

                      {/* أيقونة الخدمة */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`relative w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${gradient} p-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <Icon className="w-full h-full" />
                        
                        {/* تأثير نبض */}
                        <motion.div
                          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} -z-10 blur-md`}
                        />
                      </motion.div>

                      {/* عنوان الخدمة */}
                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>

                      {/* وصف الخدمة */}
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {service.desc}
                      </p>

                      {/* مميزات سريعة */}
                      <div className="space-y-2 mb-4">
                        {[
                          "تنفيذ احترافي",
                          "تصميم متجاوب",
                          "دعم فني"
                        ].map((feature, fidx) => (
                          <div key={`feature-${idx}-${fidx}`} className="flex items-center gap-2 text-xs text-gray-500">
                            <CheckCircle2 className="w-3 h-3 text-green-500" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* رابط الخدمة */}
                      <div className="inline-flex items-center gap-1 text-sm text-blue-600 group-hover:text-blue-700 transition-colors">
                        <span>اكتشف المزيد</span>
                        <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>

                      {/* خط سفلي متدرج */}
                      <motion.div 
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
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
      <section className="py-16 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold mb-3">لماذا تختار خدماتنا؟</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نقدم أكثر من مجرد خدمة، نقدم شراكة حقيقية لنجاح مشروعك
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Zap,
                title: "سرعة التنفيذ",
                desc: "نلتزم بالجدول الزمني المتفق عليه ونسلم في الوقت المحدد"
              },
              {
                icon: Shield,
                title: "جودة مضمونة",
                desc: "نستخدم أحدث التقنيات وأفضل الممارسات لضمان جودة عالية"
              },
              {
                icon: Heart,
                title: "دعم مستمر",
                desc: "نبقى معك حتى بعد الإطلاق لدعمك في أي استفسار"
              },
              {
                icon: Target,
                title: "تركيز على النتائج",
                desc: "نصمم ونطور بهدف تحقيق أهدافك وزيادة أرباحك"
              },
              {
                icon: Users,
                title: "فريق محترف",
                desc: "فريق متكامل من الخبراء في مختلف المجالات"
              },
              {
                icon: Rocket,
                title: "تقنيات حديثة",
                desc: "نواكب أحدث التقنيات لنقدم لك الأفضل دائماً"
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
                  className="bg-white rounded-xl border border-gray-200 p-5 shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-2 text-white flex-shrink-0">
                      <Icon className="w-full h-full" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-gray-600">{item.desc}</p>
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
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-1 justify-center mb-4">
              {[1,2,3,4,5].map((star) => (
                <Star key={`testimonial-star-${star}`} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xl mb-4 font-light">
              "خدمات احترافية وفريق متعاون. ساعدوني في تحويل فكرتي إلى موقع رائع. أنصح بالتعامل معهم."
            </p>
            <p className="font-bold">محمد الجمل</p>
            <p className="text-sm opacity-90">مؤسس Learnify Academy</p>
          </motion.div>
        </Container>
      </section>

      {/* دعوة للتواصل */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4">هل أنت مستعد لبدء مشروعك؟</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              تواصل معنا الآن ودعنا نناقش فكرة مشروعك ونقدم لك أفضل الحلول
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                طلب عرض سعر
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                تواصل معنا
              </Link>
            </div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <Award className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-gray-600">خدمات موثوقة من أكثر من ١٠ عملاء سعداء</span>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}