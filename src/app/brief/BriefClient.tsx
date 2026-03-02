"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import BriefForm from "@/components/BriefForm";
import { 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  MessageCircle,
  ArrowLeft,
  HelpCircle,
  Target,
  Rocket
} from "lucide-react";
import Link from "next/link";
import { siteData } from "@/lib/siteData";

export default function BriefClient() {
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
                <span className="text-sm font-medium text-gray-700">نموذج Brief</span>
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              أخبرنا عن 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mx-2">
                مشروعك
              </span>
            </motion.h1>

            {/* الوصف */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            >
              هذا النموذج يساعدك توصل فكرة المشروع بسرعة ووضوح. املأ المعلومات وسنقوم بمراجعتها والرد عليك في أسرع وقت.
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
              { icon: Clock, label: "وقت التعبئة", value: "٣-٥ دقائق" },
              { icon: MessageCircle, label: "الرد خلال", value: "٢٤ ساعة" },
              { icon: CheckCircle2, label: "نسبة اكتمال", value: "٩٥٪" },
              { icon: Target, label: "دقة العرض", value: "عالية" },
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

      {/* نموذج Brief */}
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
                <h2 className="text-2xl font-bold mb-2">نموذج Brief المشروع</h2>
                <p className="text-white/90 text-sm">
                  املأ المعلومات التالية وسيتم إرسالها مباشرة إلى فريق العمل
                </p>
              </div>

              {/* النموذج */}
              <div className="p-6 md:p-8">
                <BriefForm />
              </div>

              {/* تذييل النموذج */}
              <div className="bg-gray-50 p-6 border-t border-gray-200">
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p>
                    بعد إرسال النموذج، سيتم إرسال البيانات إلى واتساب فريق العمل. 
                    سنقوم بمراجعة المعلومات والتواصل معك في أقرب وقت ممكن.
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
                  desc: "كلما كانت المعلومات أدق، كان العرض السعري أكثر دقة",
                },
                {
                  icon: Target,
                  title: "حدد أهدافك",
                  desc: "ما الذي تريد تحقيقه من هذا المشروع؟",
                },
                {
                  icon: Rocket,
                  title: "شارك أمثلة",
                  desc: "إذا كان لديك مواقع أو تطبيقات تعجبك، شاركنا بها",
                },
                {
                  icon: Clock,
                  title: "الميزانية والوقت",
                  desc: "حدد الميزانية التقريبية والوقت المتاح للمشروع",
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
                  صفحة الاتصال
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
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* أسئلة شائعة سريعة */}
      <section className="py-12 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-center mb-8">أسئلة شائعة عن الـ Brief</h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "متى سأتلقى رداً على طلبي؟",
                  a: "نقوم بمراجعة جميع الطلبات خلال 24 ساعة عمل، والتواصل معك عبر واتساب أو البريد الإلكتروني."
                },
                {
                  q: "هل النموذج ملزم؟",
                  a: "لا، النموذج مجاني وغير ملزم. هو فقط لتوضيح الفكرة والحصول على عرض سعر مبدئي."
                },
                {
                  q: "ماذا لو لم أستطع إكمال جميع الحقول؟",
                  a: "لا مشكلة، املأ المعلومات المتوفرة لديك وسنكمل المناقشة لاحقاً."
                },
                {
                  q: "هل يمكنني إرسال ملفات إضافية؟",
                  a: "نعم، يمكنك ذكر أي ملفات أو روابط في حقل 'ملاحظات إضافية' وسنقوم بمراجعتها."
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