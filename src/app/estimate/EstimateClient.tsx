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
  MessageCircle
} from "lucide-react";
import Link from "next/link";

export default function EstimateClient() {
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
                <Calculator className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">حاسبة السعر</span>
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              احسب تكلفة 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mx-2">
                مشروعك
              </span>
              تقريبياً
            </motion.h1>

            {/* الوصف */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            >
              اختر مواصفات مشروعك وسيظهر لك نطاق سعري تقريبي. يمكنك إرسال النتيجة مباشرة على واتساب للحصول على عرض دقيق.
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
            {[
              { icon: TrendingUp, label: "دقة التقدير", value: "٩٠٪" },
              { icon: Clock, label: "وقت الحساب", value: "دقيقة واحدة" },
              { icon: CheckCircle2, label: "مشروع مقدر", value: "٥٠+" },
              { icon: MessageCircle, label: "استشارات", value: "مجانية" },
            ].map((stat, idx) => (
              <motion.div
                key={`stat-${idx}`}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                whileHover={{ y: -4 }}
                className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm"
              >
                <stat.icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
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
              className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden"
            >
              {/* رأس الحاسبة */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">حاسبة التكلفة التقديرية</h2>
                <p className="text-white/90 text-sm">
                  حرك المؤشرات واختر الخيارات المناسبة لمشروعك
                </p>
              </div>

              {/* الحاسبة */}
              <div className="p-6 md:p-8">
                <PriceEstimator />
              </div>

              {/* تذييل الحاسبة */}
              <div className="bg-gray-50 p-6 border-t border-gray-200">
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
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
                },
                {
                  icon: TrendingUp,
                  title: "عوامل التأثير",
                  desc: "عدد الصفحات، التعقيد، الميزات المطلوبة تؤثر على السعر",
                },
                {
                  icon: Clock,
                  title: "المدة الزمنية",
                  desc: "المشاريع العاجلة قد تؤثر على التكلفة النهائية",
                },
                {
                  icon: FileText,
                  title: "المواصفات",
                  desc: "ننصح بتعبئة نموذج Brief للحصول على عرض دقيق",
                },
              ].map((tip, idx) => (
                <motion.div
                  key={`tip-${idx}`}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-1.5 text-white flex-shrink-0">
                      <tip.icon className="w-full h-full" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1">{tip.title}</h3>
                      <p className="text-xs text-gray-600">{tip.desc}</p>
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
              <p className="text-sm text-gray-500 mb-4">
                هل تريد طريقة أكثر دقة؟
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/brief"
                  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                >
                  نموذج Brief
                  <ArrowLeft className="w-3 h-3" />
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                >
                  طلب عرض سعر
                  <ArrowLeft className="w-3 h-3" />
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                >
                  تواصل معنا
                  <ArrowLeft className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* الأسئلة الشائعة عن الأسعار */}
      <section className="py-12 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-center mb-8">أسئلة شائعة عن الأسعار</h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "كم تكلفة تصميم موقع بسيط؟",
                  a: "المواقع البسيطة تبدأ من 5,000 جنيه وتشمل 3-5 صفحات مع تصميم متجاوب ونموذج تواصل."
                },
                {
                  q: "هل السعر يشمل الاستضافة والدومين؟",
                  a: "السعر الأساسي لا يشمل الاستضافة والدومين. يمكننا مساعدتك في اختيار الخطة المناسبة كخدمة إضافية."
                },
                {
                  q: "كم تكلفة متجر إلكتروني؟",
                  a: "المتاجر الإلكترونية تبدأ من 15,000 جنيه حسب عدد المنتجات والميزات المطلوبة."
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
                  className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm"
                >
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-600" />
                    {faq.q}
                  </h3>
                  <p className="text-sm text-gray-600 pr-6">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* مقارنة سريعة للباقات */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold mb-3">مقارنة الباقات</h2>
            <p className="text-gray-600">اختر الباقة المناسبة لاحتياجاتك</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "ابتدائي",
                price: "٥,٠٠٠ - ٨,٠٠٠ ج.م",
                features: [
                  "٣-٥ صفحات",
                  "تصميم متجاوب",
                  "نموذج تواصل",
                  "ربط واتساب",
                  "SEO أساسي"
                ],
                gradient: "from-blue-500 to-cyan-500",
                icon: "✨"
              },
              {
                name: "متقدم",
                price: "٩,٠٠٠ - ١٥,٠٠٠ ج.م",
                features: [
                  "٥-١٠ صفحات",
                  "تصميم فاخر",
                  "تحسين سرعة",
                  "SEO متقدم",
                  "دعم شهر",
                  "تحليلات"
                ],
                gradient: "from-purple-500 to-pink-500",
                icon: "🚀",
                popular: true
              },
              {
                name: "احترافي",
                price: "١٥,٠٠٠ - ٢٥,٠٠٠ ج.م",
                features: [
                  "١٠-٢٠ صفحة",
                  "تصميم حسب الطلب",
                  "محتوى تسويقي",
                  "تحسينات تحويل",
                  "دعم ٣ شهور",
                  "تدريب"
                ],
                gradient: "from-amber-500 to-orange-500",
                icon: "💎"
              }
            ].map((pkg, idx) => (
              <motion.div
                key={`package-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative bg-white rounded-2xl border-2 p-6 shadow-xl ${
                  pkg.popular ? 'border-purple-200' : 'border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    الأكثر طلباً
                  </div>
                )}

                <div className={`text-4xl mb-4 bg-gradient-to-r ${pkg.gradient} w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl`}>
                  {pkg.icon}
                </div>

                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className={`text-2xl font-bold mb-4 bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}>
                  {pkg.price}
                </p>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, fidx) => (
                    <li key={`package-${idx}-feature-${fidx}`} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className={`w-4 h-4 text-${pkg.gradient.split(' ')[0].replace('from-', '')}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/quote"
                  className={`block text-center py-3 px-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all bg-gradient-to-r ${pkg.gradient}`}
                >
                  طلب عرض سعر
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* دعوة للتجربة */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Calculator className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">جرب الحاسبة الآن</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              استخدم الحاسبة أعلاه للحصول على تقدير سريع، أو تواصل معنا مباشرة لمناقشة تفاصيل مشروعك
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/brief"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <FileText className="w-5 h-5" />
                املأ نموذج Brief
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل معنا
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}