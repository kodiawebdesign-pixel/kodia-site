"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import QuoteForm from "@/components/QuoteForm";
import { 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  MessageCircle,
  ArrowLeft,
  HelpCircle,
  Target,
  Rocket,
  Shield,
  Star,
  Zap,
  Users,
  Award,
  Calendar,
  TrendingUp,
  Heart,
  Globe
} from "lucide-react";
import Link from "next/link";
import { siteData } from "@/lib/siteData";

export default function QuoteClient() {
  // إحصائيات محسنة
  const stats = [
    { icon: Clock, label: "وقت الرد", value: "٢٤ ساعة", color: "from-violet-600 to-fuchsia-600" },
    { icon: CheckCircle2, label: "دقة العروض", value: "٩٥٪", color: "from-blue-600 to-cyan-600" },
    { icon: Users, label: "عروض شهرية", value: "٣٠+", color: "from-amber-600 to-orange-600" },
    { icon: Star, label: "رضا العملاء", value: "٩٨٪", color: "from-green-600 to-emerald-600" },
  ];

  // مميزات إضافية
  const features = [
    { icon: Zap, text: "رد سريع", color: "from-violet-600 to-fuchsia-600" },
    { icon: Shield, text: "مجاني تماماً", color: "from-blue-600 to-cyan-600" },
    { icon: Award, text: "عرض مفصل", color: "from-amber-600 to-orange-600" },
    { icon: Globe, text: "خدمة عالمية", color: "from-green-600 to-emerald-600" },
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
                <FileText className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">طلب عرض سعر</span>
                <Sparkles className="w-3 h-3 text-amber-500" />
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              احصل على 
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent mx-2">
                عرض سعر دقيق
              </span>
              لمشروعك
            </motion.h1>

            {/* الوصف */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
            >
              املأ البيانات التالية وسيتم إرسال طلبك مباشرة إلى واتساب. سنقوم بمراجعة متطلباتك والرد عليك بأفضل عرض خلال ٢٤ ساعة.
            </motion.p>

            {/* مميزات سريعة */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mt-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <feature.icon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </motion.div>
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

      {/* نموذج طلب عرض السعر */}
      <section className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden"
            >
              {/* رأس النموذج */}
              <div className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-2">طلب عرض سعر</h2>
                  <p className="text-white/90 text-sm">
                    املأ المعلومات التالية وسيتم إرسال طلبك مباشرة إلى واتساب
                  </p>
                </div>
              </div>

              {/* النموذج */}
              <div className="p-6 md:p-8">
                <QuoteForm />
              </div>

              {/* تذييل النموذج */}
              <div className="bg-gray-50 dark:bg-gray-900/50 p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <Shield className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
                  <p>
                    معلوماتك آمنة ومشفرة. لن نشارك بياناتك مع أي طرف ثالث. سيتم استخدامها فقط للتواصل معك بخصوص عرض السعر.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* نصائح سريعة */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 grid sm:grid-cols-2 gap-4"
            >
              {[
                {
                  icon: Sparkles,
                  title: "كن دقيقاً",
                  desc: "كلما كانت المعلومات أكثر تفصيلاً، كان العرض أكثر دقة",
                  color: "from-violet-600 to-fuchsia-600"
                },
                {
                  icon: Target,
                  title: "حدد ميزانيتك",
                  desc: "ذكر الميزانية التقريبية يساعد في تقديم عرض مناسب",
                  color: "from-blue-600 to-cyan-600"
                },
                {
                  icon: Rocket,
                  title: "شارك أمثلة",
                  desc: "إذا كان لديك مواقع أو تطبيقات تعجبك، شاركنا الروابط",
                  color: "from-amber-600 to-orange-600"
                },
                {
                  icon: Clock,
                  title: "الجدول الزمني",
                  desc: "حدد الوقت المتوقع لتنفيذ المشروع إن أمكن",
                  color: "from-green-600 to-emerald-600"
                },
              ].map((tip, idx) => (
                <motion.div
                  key={`tip-${idx}`}
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tip.color} p-2 text-white flex-shrink-0`}>
                      <tip.icon className="w-full h-full" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1 text-gray-900 dark:text-white">{tip.title}</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{tip.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* روابط مساعدة */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-center"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                هل تفضل طريقة أخرى للتواصل؟
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/brief"
                  className="inline-flex items-center gap-1 text-sm text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 transition-colors group"
                >
                  نموذج Brief مفصل
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                </Link>
                <span className="text-gray-300 dark:text-gray-600">|</span>
                <Link
                  href="/estimate"
                  className="inline-flex items-center gap-1 text-sm text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 transition-colors group"
                >
                  حاسبة السعر
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                </Link>
                <span className="text-gray-300 dark:text-gray-600">|</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-sm text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 transition-colors group"
                >
                  تواصل مباشر
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* الأسئلة الشائعة عن عروض الأسعار */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 rounded-full text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
                استفساراتكم
              </span>
              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">أسئلة شائعة عن عروض الأسعار</h2>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  q: "كم من الوقت يستغرق الحصول على عرض سعر؟",
                  a: "نقوم بمراجعة جميع الطلبات خلال ٢٤ ساعة عمل، ونرسل عرض السعر التفصيلي عبر واتساب أو البريد الإلكتروني."
                },
                {
                  q: "هل هناك رسوم للحصول على عرض سعر؟",
                  a: "لا، عروض الأسعار مجانية تماماً وبدون أي التزام. نحن سعداء بمساعدتك في فهم تكلفة مشروعك."
                },
                {
                  q: "ماذا يشمل عرض السعر؟",
                  a: "يشمل عرض السعر تفاصيل الخدمات المطلوبة، المدة الزمنية المتوقعة، التكلفة التقديرية، وأي متطلبات تقنية."
                },
                {
                  q: "هل يمكنني تعديل الطلب بعد الإرسال؟",
                  a: "نعم، يمكنك التواصل معنا مباشرة لتعديل أي تفاصيل في طلبك قبل إصدار العرض النهائي."
                },
                {
                  q: "ما الفرق بين عرض السعر و Brief؟",
                  a: "عرض السعر هو تقدير مبدئي بناءً على معلومات بسيطة، بينما Brief هو نموذج مفصل للحصول على عرض دقيق."
                },
              ].map((faq, idx) => (
                <motion.div
                  key={`faq-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm hover:shadow-md transition-all"
                >
                  <h3 className="font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                    <HelpCircle className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                    {faq.q}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 pr-6">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* مقارنة سريعة بين الخدمات */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 rounded-full text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
              خدماتنا
            </span>
            <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">اختر الخدمة المناسبة</h2>
            <p className="text-gray-600 dark:text-gray-400">نقدم مجموعة متكاملة من الخدمات الرقمية بأسعار تنافسية</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "تصميم مواقع",
                desc: "مواقع شركات، صفحات هبوط، مدونات",
                price: "يبدأ من ٥,٠٠٠ ج.م",
                icon: "🌐",
                gradient: "from-violet-600 to-fuchsia-600",
                features: ["تصميم متجاوب بالكامل", "تهيئة SEO أساسية", "نموذج تواصل احترافي", "ربط واتساب"],
                delay: 0.1
              },
              {
                title: "متاجر إلكترونية",
                desc: "متاجر متكاملة مع بوابات دفع",
                price: "يبدأ من ١٥,٠٠٠ ج.م",
                icon: "🛒",
                gradient: "from-fuchsia-600 to-pink-600",
                features: ["سلة شراء متكاملة", "بوابات دفع متعددة", "إدارة منتجات", "تقارير مبيعات"],
                popular: true,
                delay: 0.2
              },
              {
                title: "تطبيقات جوال",
                desc: "تطبيقات Android و iOS",
                price: "يبدأ من ٢٠,٠٠٠ ج.م",
                icon: "📱",
                gradient: "from-amber-600 to-orange-600",
                features: ["تصميم UI/UX احترافي", "تجربة مستخدم سلسة", "إشعارات فورية", "متوافق مع iOS/Android"],
                delay: 0.3
              },
            ].map((service, idx) => (
              <motion.div
                key={`service-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.delay }}
                whileHover={{ y: -8 }}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl border-2 p-8 shadow-xl ${
                  service.popular ? 'border-violet-300 dark:border-violet-700' : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                {service.popular && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg whitespace-nowrap"
                  >
                    <Sparkles className="w-3 h-3 inline ml-1" />
                    الأكثر طلباً
                  </motion.div>
                )}

                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{service.desc}</p>
                <p className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  {service.price}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fidx) => (
                    <li key={`service-${idx}-feature-${fidx}`} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/quote"
                  className={`block text-center py-3 px-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all bg-gradient-to-r ${service.gradient} hover:scale-105 transform duration-300`}
                >
                  طلب عرض سعر
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* شهادة ثقة */}
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
                "حصلنا على عرض سعر دقيق خلال ساعات قليلة. الفريق محترف وسريع في الرد."
              </p>
              <p className="font-bold text-lg">محمد الجمل</p>
              <p className="text-sm opacity-90">مؤسس Learnify Academy</p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* دعوة للتواصل المباشر */}
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 p-4 text-white shadow-xl">
                <MessageCircle className="w-full h-full" />
              </div>
            </motion.div>

            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">تفضل التواصل المباشر؟</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              يمكنك التحدث معنا مباشرة عبر واتساب للحصول على رد فوري ومناقشة مشروعك بالتفصيل
            </p>
            
            <Link
              href={siteData.brand.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              تواصل عبر واتساب
            </Link>

            <p className="text-xs text-gray-400 dark:text-gray-500 mt-6">
              * الرد خلال ساعات العمل • استشارة مجانية • بدون التزام
            </p>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
