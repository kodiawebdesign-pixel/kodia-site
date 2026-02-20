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
  Users
} from "lucide-react";
import Link from "next/link";
import { siteData } from "@/lib/siteData";

export default function QuoteClient() {
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
                <FileText className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">طلب عرض سعر</span>
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              احصل على 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mx-2">
                عرض سعر دقيق
              </span>
              لمشروعك
            </motion.h1>

            {/* الوصف */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            >
              املأ البيانات التالية وسيتم إرسال طلبك مباشرة إلى واتساب. سنقوم بمراجعة متطلباتك والرد عليك بأفضل عرض خلال 24 ساعة.
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
              { icon: Clock, label: "وقت الرد", value: "٢٤ ساعة" },
              { icon: CheckCircle2, label: "دقة العروض", value: "٩٥٪" },
              { icon: Users, label: "عروض شهرية", value: "٣٠+" },
              { icon: Star, label: "رضا العملاء", value: "٩٨٪" },
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

      {/* نموذج طلب عرض السعر */}
      <section className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden"
            >
              {/* رأس النموذج */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">طلب عرض سعر</h2>
                <p className="text-white/90 text-sm">
                  املأ المعلومات التالية وسيتم إرسال طلبك مباشرة إلى واتساب
                </p>
              </div>

              {/* النموذج */}
              <div className="p-6 md:p-8">
                <QuoteForm />
              </div>

              {/* تذييل النموذج */}
              <div className="bg-gray-50 p-6 border-t border-gray-200">
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
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
                },
                {
                  icon: Target,
                  title: "حدد ميزانيتك",
                  desc: "ذكر الميزانية التقريبية يساعد في تقديم عرض مناسب",
                },
                {
                  icon: Rocket,
                  title: "شارك أمثلة",
                  desc: "إذا كان لديك مواقع أو تطبيقات تعجبك، شاركنا الروابط",
                },
                {
                  icon: Clock,
                  title: "الجدول الزمني",
                  desc: "حدد الوقت المتوقع لتنفيذ المشروع إن أمكن",
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
                هل تفضل طريقة أخرى للتواصل؟
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/brief"
                  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                >
                  نموذج Brief مفصل
                  <ArrowLeft className="w-3 h-3" />
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="/estimate"
                  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                >
                  حاسبة السعر
                  <ArrowLeft className="w-3 h-3" />
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                >
                  تواصل مباشر
                  <ArrowLeft className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* الأسئلة الشائعة عن عروض الأسعار */}
      <section className="py-12 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-center mb-8">أسئلة شائعة عن عروض الأسعار</h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "كم من الوقت يستغرق الحصول على عرض سعر؟",
                  a: "نقوم بمراجعة جميع الطلبات خلال 24 ساعة عمل، ونرسل عرض السعر التفصيلي عبر واتساب أو البريد الإلكتروني."
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

      {/* مقارنة سريعة بين الخدمات */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold mb-3">اختر الخدمة المناسبة</h2>
            <p className="text-gray-600">نقدم مجموعة متكاملة من الخدمات الرقمية</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "تصميم مواقع",
                desc: "مواقع شركات، صفحات هبوط، مدونات",
                price: "يبدأ من ٥,٠٠٠ ج.م",
                icon: "🌐",
                features: ["تصميم متجاوب", "SEO أساسي", "نموذج تواصل"]
              },
              {
                title: "متاجر إلكترونية",
                desc: "متاجر متكاملة مع بوابات دفع",
                price: "يبدأ من ١٥,٠٠٠ ج.م",
                icon: "🛒",
                features: ["سلة شراء", "بوابات دفع", "إدارة منتجات"],
                popular: true
              },
              {
                title: "تطبيقات جوال",
                desc: "تطبيقات Android و iOS",
                price: "يبدأ من ٢٠,٠٠٠ ج.م",
                icon: "📱",
                features: ["تصميم UI/UX", "تجربة مستخدم", "push notifications"]
              },
            ].map((service, idx) => (
              <motion.div
                key={`service-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative bg-white rounded-2xl border-2 p-6 shadow-xl ${
                  service.popular ? 'border-purple-200' : 'border-gray-200'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    الأكثر طلباً
                  </div>
                )}

                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{service.desc}</p>
                <p className="text-lg font-bold text-blue-600 mb-4">{service.price}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fidx) => (
                    <li key={`service-${idx}-feature-${fidx}`} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/quote"
                  className="block text-center py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all"
                >
                  طلب عرض سعر
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* شهادة ثقة */}
      <section className="py-12">
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
              "حصلنا على عرض سعر دقيق خلال ساعات قليلة. الفريق محترف وسريع في الرد."
            </p>
            <p className="font-bold">محمد الجمل</p>
            <p className="text-sm opacity-90">مؤسس Learnify Academy</p>
          </motion.div>
        </Container>
      </section>

      {/* دعوة للتواصل المباشر */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4">تفضل التواصل المباشر؟</h2>
            <p className="text-gray-600 mb-6">
              يمكنك التحدث معنا مباشرة عبر واتساب للحصول على رد فوري
            </p>
            <Link
              href={siteData.brand.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              تواصل عبر واتساب
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}