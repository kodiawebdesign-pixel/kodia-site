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
  Rocket,
  PenTool,
  Zap,
  Shield,
  Users,
  Star
} from "lucide-react";
import Link from "next/link";
import { siteData } from "@/lib/siteData";
import { useState } from "react";

export default function BriefClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">نموذج Brief</span>
                <Sparkles className="w-3 h-3 text-amber-500" />
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              أخبرنا عن 
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent mx-2">
                مشروعك
              </span>
            </motion.h1>

            {/* الوصف */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
            >
              هذا النموذج يساعدك توصل فكرة المشروع بسرعة ووضوح. املأ المعلومات وسنقوم بمراجعتها والرد عليك في أسرع وقت.
            </motion.p>

            {/* شريط التقدم (اختياري) */}
            <motion.div variants={fadeInUp} className="mt-8 flex justify-center gap-2">
              {[1, 2, 3, 4].map((step, idx) => (
                <div key={idx} className="flex items-center">
                  <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-violet-600 w-3' : 'bg-gray-300 dark:bg-gray-600'}`} />
                  {idx < 3 && <div className={`w-8 h-px ${idx === 0 ? 'bg-violet-200' : 'bg-gray-200 dark:bg-gray-700'}`} />}
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
            {[
              { icon: Clock, label: "وقت التعبئة", value: "٣-٥ دقائق", color: "from-violet-600 to-fuchsia-600" },
              { icon: MessageCircle, label: "الرد خلال", value: "٢٤ ساعة", color: "from-blue-600 to-cyan-600" },
              { icon: CheckCircle2, label: "نسبة اكتمال", value: "٩٥٪", color: "from-green-600 to-emerald-600" },
              { icon: Target, label: "دقة العرض", value: "عالية", color: "from-amber-600 to-orange-600" },
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

      {/* نموذج Brief */}
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
                  <h2 className="text-2xl font-bold mb-2">نموذج Brief المشروع</h2>
                  <p className="text-white/90 text-sm max-w-xl">
                    املأ المعلومات التالية وسيتم إرسالها مباشرة إلى فريق العمل للمراجعة والتقييم
                  </p>
                </div>
              </div>

              {/* النموذج */}
              <div className="p-6 md:p-8">
                <BriefForm />
              </div>

              {/* تذييل النموذج */}
              <div className="bg-gray-50 dark:bg-gray-900/50 p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <HelpCircle className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
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
                  color: "from-violet-600 to-fuchsia-600"
                },
                {
                  icon: Target,
                  title: "حدد أهدافك",
                  desc: "ما الذي تريد تحقيقه من هذا المشروع؟",
                  color: "from-blue-600 to-cyan-600"
                },
                {
                  icon: Rocket,
                  title: "شارك أمثلة",
                  desc: "إذا كان لديك مواقع أو تطبيقات تعجبك، شاركنا بها",
                  color: "from-amber-600 to-orange-600"
                },
                {
                  icon: Clock,
                  title: "الميزانية والوقت",
                  desc: "حدد الميزانية التقريبية والوقت المتاح للمشروع",
                  color: "from-green-600 to-emerald-600"
                },
              ].map((tip, idx) => (
                <motion.div
                  key={`tip-${idx}`}
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm hover:shadow-md transition-all"
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
                هل تفضل طريقة أخرى للتواصل؟
              </p>
              <div className="flex flex-wrap justify-center gap-4">
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
                  صفحة الاتصال
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
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* مميزات إضافية */}
      <section className="py-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">لماذا تختار نموذج Brief؟</h2>
            
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Zap, title: "سريع وسهل", desc: "لا يستغرق أكثر من ٥ دقائق" },
                { icon: Shield, title: "آمن وخاص", desc: "بياناتك في أمان تام" },
                { icon: Users, title: "فريق متخصص", desc: "مراجعة يدوية لكل طلب" },
              ].map((feature, idx) => (
                <motion.div
                  key={`feature-${idx}`}
                  whileHover={{ y: -4 }}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <feature.icon className="w-8 h-8 text-violet-600 mx-auto mb-2" />
                  <h3 className="font-bold text-sm mb-1 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* أسئلة شائعة سريعة */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">أسئلة شائعة عن الـ Brief</h2>
            
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

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">تفضل التواصل المباشر؟</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
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
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
              * الرد خلال ساعات العمل
            </p>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
