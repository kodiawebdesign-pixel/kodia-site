"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/Container";
import { siteData } from "@/lib/siteData";
import { notFound } from "next/navigation";
import ServiceLanding from "@/components/ServiceLanding";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Star, 
  Clock, 
  Users,
  MessageCircle,
  Phone,
  Sparkles,
  Award,
  Shield,
  Rocket,
  Target,
  Heart,
  ChevronLeft,
  Zap,
  Code2,
  Palette,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  Settings,
  FileText,
  Globe
} from "lucide-react";

export default function ServiceSlugClient({ slug }: { slug: string }) {
  const svc = siteData.home.serviceLandings.find((x: any) => x.slug === slug);
  if (!svc) return notFound();

  // خدمات مشابهة
  const relatedServices = siteData.home.serviceLandings
    .filter((s: any) => s.slug !== slug)
    .slice(0, 3);

  // إحصائيات عامة
  const stats = [
    { icon: Clock, label: "مدة التنفيذ", value: "٧-٢١ يوم", color: "from-violet-600 to-fuchsia-600" },
    { icon: Users, label: "عملاء سعداء", value: "٢٠+", color: "from-blue-600 to-cyan-600" },
    { icon: Star, label: "تقييم الخدمة", value: "٤.٩/٥", color: "from-amber-600 to-orange-600" },
    { icon: Shield, label: "ضمان", value: "استعادة الحقوق", color: "from-green-600 to-emerald-600" },
  ];

  // تحديد الألوان حسب نوع الخدمة
  const getGradient = () => {
    if (svc.slug.includes("web")) return "from-violet-600 to-fuchsia-600";
    if (svc.slug.includes("ecom")) return "from-fuchsia-600 to-pink-600";
    if (svc.slug.includes("mobile")) return "from-blue-600 to-cyan-600";
    if (svc.slug.includes("ui")) return "from-purple-600 to-pink-600";
    if (svc.slug.includes("seo")) return "from-emerald-600 to-teal-600";
    return "from-violet-600 to-fuchsia-600";
  };

  const getIcon = () => {
    if (svc.slug.includes("web")) return Code2;
    if (svc.slug.includes("ecom")) return ShoppingCart;
    if (svc.slug.includes("mobile")) return Smartphone;
    if (svc.slug.includes("ui")) return Palette;
    if (svc.slug.includes("seo")) return TrendingUp;
    return Sparkles;
  };

  const gradient = getGradient();
  const Icon = getIcon();

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
      {/* قسم الهيرو الخاص بالخدمة */}
      <section className={`relative py-24 overflow-hidden bg-gradient-to-br ${gradient}`}>
        {/* خلفية متحركة */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              x: [0, -10, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
        </div>

        <Container>
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="relative z-10 text-white"
          >
            {/* رابط الرجوع */}
            <motion.div variants={fadeInUp}>
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm">الرجوع إلى جميع الخدمات</span>
              </Link>
            </motion.div>

            {/* شارة الخدمة */}
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">خدمة احترافية</span>
              </span>
            </motion.div>

            {/* أيقونة الخدمة */}
            <motion.div variants={fadeInUp} className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm p-4 text-white mb-4">
              <Icon className="w-full h-full" />
            </motion.div>

            {/* عنوان الخدمة */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              {svc.title}
            </motion.h1>

            {/* وصف الخدمة */}
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/90 mb-6 max-w-2xl"
            >
              {svc.subtitle}
            </motion.p>

            {/* مميزات سريعة */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4 text-sm text-white/80"
            >
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                تسليم سريع
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                ضمان الجودة
              </span>
              <span className="flex items-center gap-1">
                <Rocket className="w-4 h-4" />
                دعم فني 24/7
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                فريق متخصص
              </span>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* المحتوى الرئيسي */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* مكون ServiceLanding الأصلي */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ServiceLanding service={svc} />
            </motion.div>

            {/* إحصائيات إضافية */}
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
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat, idx) => {
                const IconStat = stat.icon;
                return (
                  <motion.div
                    key={`stat-${idx}`}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ y: -4 }}
                    className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 text-center shadow-md hover:shadow-lg transition-all"
                  >
                    <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${stat.color} p-2 text-white`}>
                      <IconStat className="w-full h-full" />
                    </div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* شهادة عميل */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 rounded-2xl p-6 border border-violet-100 dark:border-violet-800"
            >
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[1,2,3,4,5].map((star) => (
                  <Star key={`testimonial-star-${star}`} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                "خدمة احترافية وسريعة. الفريق فهم متطلباتي بدقة ونفذها بشكل رائع. أنصح بالتعامل معهم."
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient}`} />
                <div>
                  <p className="font-bold text-sm text-gray-900 dark:text-white">أحمد عبدالله</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">عميل سابق</p>
                </div>
              </div>
            </motion.div>

            {/* الأسئلة الشائعة للخدمة */}
            {svc.faq && svc.faq.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">أسئلة شائعة عن {svc.title}</h2>
                <div className="space-y-4">
                  {svc.faq.map((item: any, idx: number) => (
                    <motion.div
                      key={`faq-${idx}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm hover:shadow-md transition-all"
                    >
                      <h3 className="font-bold mb-2 text-violet-600 dark:text-violet-400">{item.q}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.a}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </Container>
      </section>

      {/* خدمات مشابهة */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">خدمات مشابهة</h2>
              <p className="text-gray-600 dark:text-gray-400">قد تهمك أيضاً</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((service: any, idx: number) => {
                const getRelatedGradient = () => {
                  if (service.slug.includes("web")) return "from-violet-600 to-fuchsia-600";
                  if (service.slug.includes("ecom")) return "from-fuchsia-600 to-pink-600";
                  if (service.slug.includes("mobile")) return "from-blue-600 to-cyan-600";
                  return "from-violet-600 to-fuchsia-600";
                };
                
                return (
                  <motion.div
                    key={`related-${service.slug}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <Link href={`/services/${service.slug}`}>
                      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-md hover:shadow-lg transition-all h-full group">
                        <div className={`w-10 h-10 mb-3 rounded-lg bg-gradient-to-br ${getRelatedGradient()} p-2 text-white`}>
                          <Sparkles className="w-full h-full" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{service.subtitle}</p>
                        <span className="text-violet-600 dark:text-violet-400 text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          اكتشف المزيد
                          <ChevronLeft className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* دعوة للتواصل */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className={`bg-gradient-to-r ${gradient} rounded-3xl p-12 text-white text-center relative overflow-hidden`}
          >
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
                className="inline-block mb-6"
              >
                <Rocket className="w-16 h-16 text-yellow-300" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">هل أنت مستعد لبدء مشروعك؟</h2>
              <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                تواصل معنا الآن ودعنا نناقش تفاصيل مشروعك ونقدم لك أفضل الحلول
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={siteData.brand.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  واتساب
                </a>
                <a
                  href={`tel:${siteData.brand.phoneE164}`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  اتصال
                </a>
              </div>

              <p className="text-xs text-white/70 mt-6">
                * استشارة مجانية • رد خلال ٢٤ ساعة • ضمان الجودة
              </p>
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
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
              <Award className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">خدمة موثوقة من أكثر من ٢٠ عميل سعيد</span>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
