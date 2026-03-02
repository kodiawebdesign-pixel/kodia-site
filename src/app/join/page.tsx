"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/Container";
import { 
  Users, 
  Sparkles, 
  Briefcase, 
  GraduationCap,
  Heart,
  Target,
  Rocket,
  Award,
  Clock,
  Globe,
  Coffee,
  Laptop,
  MessageCircle,
  Mail,
  Phone,
  ChevronLeft,
  CheckCircle2,
  Star
} from "lucide-react";

export default function JoinPage() {
  // بيانات وظائف وهمية (يمكن استبدالها ببيانات حقيقية لاحقاً)
  const openPositions = [
    {
      title: "مصمم UI/UX",
      type: "دوام كامل",
      location: "عن بُعد",
      experience: "٢-٤ سنوات",
      description: "نبحث عن مصمم UI/UX مبدع للانضمام إلى فريقنا. خبرة في Figma وتصميم واجهات المستخدم.",
      requirements: [
        "خبرة في Figma و Adobe XD",
        "معرفة بمبادئ تصميم UX",
        "القدرة على إنشاء prototypes تفاعلية",
        "معرفة بأساسيات responsive design"
      ]
    },
    {
      title: "مطور Frontend (Next.js)",
      type: "دوام كامل",
      location: "عن بُعد",
      experience: "٣-٥ سنوات",
      description: "نبحث عن مطور Frontend متخصص في Next.js و React للانضمام إلى فريق التطوير.",
      requirements: [
        "خبرة قوية في Next.js و React",
        "معرفة TypeScript",
        "خبرة في Tailwind CSS",
        "فهم مبادئ performance optimization"
      ]
    },
    {
      title: "مطور Backend (Node.js)",
      type: "دوام كامل",
      location: "عن بُعد",
      experience: "٣-٥ سنوات",
      description: "نبحث عن مطور Backend متخصص في Node.js لبناء وتطوير APIs وتكامل قواعد البيانات.",
      requirements: [
        "خبرة في Node.js و Express",
        "معرفة قواعد البيانات SQL و NoSQL",
        "خبرة في بناء RESTful APIs",
        "معرفة أساسيات الأمان"
      ]
    },
    {
      title: "مسوق رقمي",
      type: "دوام جزئي",
      location: "عن بُعد",
      experience: "٢-٣ سنوات",
      description: "نبحث عن مسوق رقمي لإدارة حملات التسويق ووسائل التواصل الاجتماعي.",
      requirements: [
        "خبرة في إدارة حملات السوشيال ميديا",
        "معرفة SEO و SEM",
        "مهارات كتابة محتوى تسويقي",
        "تحليل البيانات والتقارير"
      ]
    }
  ];

  // مميزات العمل معنا
  const benefits = [
    { icon: Laptop, title: "عمل عن بُعد", desc: "نعمل بنظام remote بالكامل" },
    { icon: Clock, title: "ساعات مرنة", desc: "نظام工作时间 مرن يناسبك" },
    { icon: Globe, title: "فريق دولي", desc: "نعمل مع فريق من مختلف الدول" },
    { icon: Coffee, title: "بيئة مريحة", desc: "أجواء عمل مريحة وداعمة" },
    { icon: Target, title: "تطور مستمر", desc: "فرص تعلم وتطور مستمر" },
    { icon: Heart, title: "اهتمام بالموظفين", desc: "نهتم براحة وسعادة فريقنا" },
  ];

  // قيم الشركة
  const values = [
    { icon: Sparkles, title: "الإبداع", desc: "نشجع الأفكار الجديدة والإبداعية" },
    { icon: Award, title: "الجودة", desc: "نسعى دائماً لتقديم الأفضل" },
    { icon: Rocket, title: "الابتكار", desc: "نواكب أحدث التقنيات والحلول" },
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
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">انضم إلينا</span>
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              كن جزءاً من 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mx-2">
                فريقنا
              </span>
            </motion.h1>

            {/* الوصف */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            >
              نبحث عن مواهب مبدعة وشغوفة للانضمام إلى فريق Kodia. نوفر بيئة عمل مريحة وفرصاً للتطور والنمو.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* لماذا تنضم إلينا */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-3">لماذا تعمل معنا؟</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نؤمن بأن فريقنا هو أهم استثمار لنا، ونوفر بيئة عمل تساعد على الإبداع والتطور
            </p>
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
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-2.5 text-white mb-4">
                    <Icon className="w-full h-full" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* قيم الشركة */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-3.5 text-white">
                    <Icon className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* الوظائف المتاحة */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-3">الوظائف المتاحة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نبحث دائماً عن المواهب المبدعة. تصفح الوظائف المتاحة وقدم الآن
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                        <Briefcase className="w-3 h-3" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                        <Globe className="w-3 h-3" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        <GraduationCap className="w-3 h-3" />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">
                    <Star className="w-3 h-3 fill-amber-500" />
                    مطلوب فوراً
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{job.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-sm mb-2">المتطلبات:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, ridx) => (
                      <li key={ridx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="https://forms.google.com/your-form-link"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                  >
                    قدم الآن
                    <ChevronLeft className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 bg-white text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all"
                  >
                    استفسر عن الوظيفة
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* كيفية التقديم */}
      <section className="py-16 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-center mb-8">كيفية التقديم</h2>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  step: "١",
                  title: "اختر الوظيفة",
                  desc: "تصفح الوظائف المتاحة واختر ما يناسب مهاراتك"
                },
                {
                  step: "٢",
                  title: "املأ النموذج",
                  desc: "قدم معلوماتك وأرفق سيرتك الذاتية عبر النموذج"
                },
                {
                  step: "٣",
                  title: "مقابلة",
                  desc: "سنقوم بالتواصل معك لتحديد موعد مقابلة"
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-xl font-bold flex items-center justify-center">
                    {step.step}
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* نموذج التقديم السريع */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">نموذج تقديم سريع</h2>
                <p className="text-white/90 text-sm">
                  املأ المعلومات الأساسية وسنقوم بالتواصل معك
                </p>
              </div>

              <div className="p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      placeholder="أدخل اسمك الكامل"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      placeholder="example@domain.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      placeholder="٠١٢٣٤٥٦٧٨٩٠"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الوظيفة المطلوبة *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                      <option value="">اختر الوظيفة</option>
                      {openPositions.map((job, idx) => (
                        <option key={idx} value={job.title}>{job.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      رابط LinkedIn أو CV (اختياري)
                    </label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      رسالة قصيرة
                    </label>
                    <textarea
                      rows={4}
                      placeholder="حدثنا عن نفسك وخبراتك..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                  >
                    إرسال الطلب
                  </button>
                </form>

                <p className="text-xs text-gray-400 text-center mt-4">
                  * يمكنك أيضاً التقديم عبر نموذج Google Forms للتفاصيل الكاملة
                </p>
              </div>
            </div>

            {/* رابط Google Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl text-center"
            >
              <p className="text-sm text-gray-600 mb-2">
                للتقديم الكامل وتحميل السيرة الذاتية:
              </p>
              <a
                href="https://forms.google.com/your-form-link"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                املأ نموذج Google Forms
                <ChevronLeft className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* تواصل معنا للاستفسار */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">لديك استفسار؟</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              تواصل معنا مباشرة وسنجيب على جميع أسئلتك حول فرص العمل
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:careers@kodia.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <Mail className="w-5 h-5" />
                careers@kodia.com
              </a>
              <a
                href="tel:+201207005495"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition-all"
              >
                <Phone className="w-5 h-5" />
                +٢٠١٢٠٧٠٠٥٤٩٥
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}