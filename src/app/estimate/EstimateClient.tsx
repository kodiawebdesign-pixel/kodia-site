"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import PriceEstimator from "@/components/PriceEstimator";
import { 
  Calculator, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  CheckCircle2,
  HelpCircle,
  ArrowLeft,
  FileText,
  MessageCircle,
  Zap,
  Shield,
  Star,
  Users,
  Award,
  Rocket
} from "lucide-react";
import Link from "next/link";

export default function EstimateClient() {
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
                <Calculator className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">حاسبة السعر</span>
                <Sparkles className="w-3 h-3 text-amber-500" />
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              احسب تكلفة 
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent mx-2">
                مشروعك
              </span>
              تقريبياً
            </motion.h1>

            {/* الوصف */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
            >
              اختر مواصفات مشروعك وسيظهر لك نطاق سعري تقريبي. يمكنك إرسال النتيجة مباشرة على واتساب للحصول على عرض دقيق.
            </motion.p>

            {/* إحصائيات سريعة */}
            <motion.div variants={fadeInUp} className="flex justify-center gap-6 mt-8">
              {[
                { icon: Users, label: "مستخدم", value: "٥٠٠+" },
                { icon: TrendingUp, label: "دقة", value: "٩٠٪" },
                { icon: Clock, label: "وقت", value: "١ دقيقة" },
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
            {[
              { icon: TrendingUp, label: "دقة التقدير", value: "٩٠٪", color: "from-violet-600 to-fuchsia-600" },
              { icon: Clock, label: "وقت الحساب", value: "دقيقة واحدة", color: "from-blue-600 to-cyan-600" },
              { icon: CheckCircle2, label: "مشروع مقدر", value: "٥٠+", color: "from-green-600 to-emerald-600" },
              { icon: MessageCircle, label: "استشارات", value: "مجانية", color: "from-amber-600 to-orange-600" },
            ].map((stat, idx) => (
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
                  <stat.icon className="w-full h-full" />
                </div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* الحاسبة */}
      <section className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden"
            >
              {/* رأس الحاسبة */}
              <div className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-2">حاسبة التكلفة التقديرية</h2>
                  <p className="text-white/90 text-sm max-w-xl">
                    حرك المؤشرات واختر الخيارات المناسبة لمشروعك لتحصل على تقدير سريع
                  </p>
                </div>
              </div>

              {/* الحاسبة */}
              <div className="p-6 md:p-8">
                <PriceEstimator />
              </div>

              {/* تذييل الحاسبة */}
              <div className="bg-gray-50 dark:bg-gray-900/50 p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <HelpCircle className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
                  <p>
                    هذا تقدير تقريبي للمساعدة فقط. للحصول على عرض سعر دقيق، يرجى التواصل معنا مباشرة أو إرسال النموذج عبر واتساب.
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
                  title: "دقة التقدير",
                  desc: "كلما كانت المعلومات أكثر تفصيلاً، زادت دقة التقدير",
                  color: "from-violet-600 to-fuchsia-600"
                },
                {
                  icon: TrendingUp,
                  title: "عوامل التأثير",
                  desc: "عدد الصفحات، التعقيد، الميزات المطلوبة تؤثر على السعر",
                  color: "from-blue-600 to-cyan-600"
                },
                {
                  icon: Clock,
                  title: "المدة الزمنية",
                  desc: "المشاريع العاجلة قد تؤثر على التكلفة النهائية",
                  color: "from-amber-600 to-orange-600"
                },
                {
                  icon: FileText,
                  title: "المواصفات",
                  desc: "ننصح بتعبئة نموذج Brief للحصول على عرض دقيق",
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
                      <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-1">{tip.title}</h3>
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
                هل تريد طريقة أكثر دقة؟
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/brief"
                  className="inline-flex items-center gap-1 text-sm text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 transition-colors group"
                >
                  نموذج Brief
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                </Link>
                <span className="text-gray-300 dark:text-gray-600">|</span>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-1 text-sm text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 transition-colors group"
                >
                  طلب عرض سعر
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                </Link>
                <span className="text-gray-300 dark:text-gray-600">|</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-sm text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 transition-colors group"
                >
                  تواصل معنا
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* الأسئلة الشائعة عن الأسعار */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">أسئلة شائعة عن الأسعار</h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "كم تكلفة تصميم موقع بسيط؟",
                  a: "المواقع البسيطة تبدأ من ٥,٠٠٠ جنيه وتشمل ٣-٥ صفحات مع تصميم متجاوب ونموذج تواصل."
                },
                {
                  q: "هل السعر يشمل الاستضافة والدومين؟",
                  a: "السعر الأساسي لا يشمل الاستضافة والدومين. يمكننا مساعدتك في اختيار الخطة المناسبة كخدمة إضافية."
                },
                {
                  q: "كم تكلفة متجر إلكتروني؟",
                  a: "المتاجر الإلكترونية تبدأ من ١٥,٠٠٠ جنيه حسب عدد المنتجات والميزات المطلوبة."
                },
                {
                  q: "هل يوجد تقسيط للأسعار؟",
                  a: "نعم، يمكن الاتفاق على نظام أقساط حسب طبيعة المشروع. ناقشنا في الاستشارة المجانية."
                },
                {
                  q: "ما الفرق بين الأسعار المختلفة؟",
                  a: "الفرق يعتمد على عدد الصفحات، التعقيد التقني، الميزات المطلوبة، ومدة التنفيذ."
                }
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

      {/* مقارنة سريعة للباقات */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 rounded-full text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
              اختر الباقة المناسبة
            </span>
            <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">مقارنة الباقات</h2>
            <p className="text-gray-600 dark:text-gray-400">اختر الباقة التي تناسب احتياجاتك وميزانيتك</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "ابتدائي",
                price: "٥,٠٠٠ - ٨,٠٠٠ ج.م",
                features: [
                  "٣-٥ صفحات رئيسية",
                  "تصميم متجاوب بالكامل",
                  "نموذج تواصل احترافي",
                  "ربط واتساب تلقائي",
                  "تهيئة SEO أساسية"
                ],
                gradient: "from-violet-600 to-fuchsia-600",
                icon: "✨",
                delay: 0.1
              },
              {
                name: "متقدم",
                price: "٩,٠٠٠ - ١٥,٠٠٠ ج.م",
                features: [
                  "٥-١٠ صفحات احترافية",
                  "تصميم فاخر حسب الطلب",
                  "تحسين سرعة متقدم",
                  "تهيئة SEO شاملة",
                  "دعم فني لمدة شهر",
                  "تحليلات وإحصائيات"
                ],
                gradient: "from-fuchsia-600 to-pink-600",
                icon: "🚀",
                popular: true,
                delay: 0.2
              },
              {
                name: "احترافي",
                price: "١٥,٠٠٠ - ٢٥,٠٠٠ ج.م",
                features: [
                  "١٠-٢٠ صفحة مخصصة",
                  "تصميم حسب الطلب بالكامل",
                  "محتوى تسويقي احترافي",
                  "تحسينات تحويل متقدمة",
                  "دعم فني ٣ أشهر",
                  "تدريب على الإدارة"
                ],
                gradient: "from-amber-600 to-orange-600",
                icon: "💎",
                delay: 0.3
              }
            ].map((pkg, idx) => (
              <motion.div
                key={`package-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pkg.delay }}
                whileHover={{ y: -8 }}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl border-2 p-8 shadow-xl ${
                  pkg.popular ? 'border-violet-300 dark:border-violet-700' : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                {pkg.popular && (
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

                <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center text-white text-2xl shadow-lg`}>
                  {pkg.icon}
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{pkg.name}</h3>
                <p className={`text-2xl font-bold mb-6 bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}>
                  {pkg.price}
                </p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fidx) => (
                    <li key={`package-${idx}-feature-${fidx}`} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/quote"
                  className={`block text-center py-3 px-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all bg-gradient-to-r ${pkg.gradient} hover:scale-105 transform duration-300`}
                >
                  طلب عرض سعر
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs text-gray-400 dark:text-gray-500 mt-8"
          >
            * الأسعار تقديرية للمعاينة وقد تتغير حسب متطلبات المشروع
          </motion.p>
        </Container>
      </section>

      {/* دعوة للتجربة */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-5 text-white shadow-xl">
                <Calculator className="w-full h-full" />
              </div>
            </motion.div>

            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">جرب الحاسبة الآن</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              استخدم الحاسبة أعلاه للحصول على تقدير سريع، أو تواصل معنا مباشرة لمناقشة تفاصيل مشروعك بالكامل
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/brief"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                املأ نموذج Brief
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل معنا
              </Link>
            </div>

            <p className="text-xs text-gray-400 dark:text-gray-500 mt-6">
              * استشارة مجانية • رد خلال ٢٤ ساعة • ضمان الجودة
            </p>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
