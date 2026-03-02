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
  ChevronLeft
} from "lucide-react";

export default function ServiceSlugClient({ slug }: { slug: string }) {
  const svc = siteData.home.serviceLandings.find((x: any) => x.slug === slug);
  if (!svc) return notFound();

  // بيانات إضافية للصفحة
  const relatedServices = siteData.home.serviceLandings
    .filter((s: any) => s.slug !== slug)
    .slice(0, 3);

  // إحصائيات عامة
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

  // تحديد الألوان حسب نوع الخدمة
  const getGradient = () => {
    if (svc.slug.includes("web")) return "from-blue-500 to-cyan-500";
    if (svc.slug.includes("ecom")) return "from-purple-500 to-pink-500";
    if (svc.slug.includes("mobile")) return "from-emerald-500 to-teal-500";
    return "from-blue-600 to-purple-600";
  };

  const gradient = getGradient();

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* قسم الهيرو الخاص بالخدمة */}
      <section className={`relative py-20 overflow-hidden bg-gradient-to-br ${gradient}`}>
        {/* خلفية متحركة */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
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
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">خدمة احترافية</span>
              </span>
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

            {/* إحصائيات سريعة */}
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
                دعم فني
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
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={`stat-${idx}`}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-md"
                  >
                    <Icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
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
              className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100"
            >
              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {[1,2,3,4,5].map((star) => (
                  <Star key={`testimonial-star-${star}`} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "خدمة احترافية وسريعة. الفريق فهم متطلباتي بدقة ونفذها بشكل رائع. أنصح بالتعامل معهم."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                <div>
                  <p className="font-bold text-sm">أحمد عبدالله</p>
                  <p className="text-xs text-gray-500">عميل سابق</p>
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
                <h2 className="text-2xl font-bold mb-6">أسئلة شائعة عن {svc.title}</h2>
                <div className="space-y-4">
                  {svc.faq.map((item: any, idx: number) => (
                    <motion.div
                      key={`faq-${idx}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
                    >
                      <h3 className="font-bold mb-2 text-blue-600">{item.q}</h3>
                      <p className="text-sm text-gray-600">{item.a}</p>
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
        <section className="py-16 bg-gray-50">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-bold mb-2">خدمات مشابهة</h2>
              <p className="text-gray-600">قد تهمك أيضاً</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((service: any, idx: number) => (
                <motion.div
                  key={`related-${service.slug}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Link href={`/services/${service.slug}`}>
                    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition-all h-full">
                      <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{service.subtitle}</p>
                      <span className="text-blue-600 text-sm inline-flex items-center gap-1">
                        اكتشف المزيد
                        <ChevronLeft className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* دعوة للتواصل */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-r ${gradient} rounded-3xl p-8 text-white text-center`}
          >
            <h2 className="text-2xl font-bold mb-4">هل أنت مستعد لبدء مشروعك؟</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              تواصل معنا الآن ودعنا نناقش تفاصيل مشروعك ونقدم لك أفضل الحلول
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={siteData.brand.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                واتساب
              </a>
              <a
                href={`tel:${siteData.brand.phoneE164}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition-all"
              >
                <Phone className="w-5 h-5" />
                اتصال
              </a>
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
              <span className="text-sm text-gray-600">خدمة موثوقة من أكثر من ١٠ عملاء سعداء</span>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}