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
  Star,
  Zap,
  Shield,
  BookOpen,
  Code2,
  Palette,
  PenTool,
  Headphones,
  Calendar
} from "lucide-react";

export default function JoinPage() {
  // بيانات وظائف محدثة
  const openPositions = [
    {
      title: "مصمم UI/UX",
      type: "دوام كامل",
      location: "عن بُعد",
      experience: "٢-٤ سنوات",
      salary: "٨,٠٠٠ - ١٢,٠٠٠ ج.م",
      description: "نبحث عن مصمم UI/UX مبدع للانضمام إلى فريقنا. خبرة في Figma وتصميم واجهات المستخدم وتجربة المستخدم.",
      icon: Palette,
      color: "from-violet-600 to-fuchsia-600",
      requirements: [
        "خبرة في Figma و Adobe XD",
        "معرفة بمبادئ تصميم UX",
        "القدرة على إنشاء prototypes تفاعلية",
        "معرفة بأساسيات responsive design",
        "القدرة على إنشاء design systems"
      ]
    },
    {
      title: "مطور Frontend (Next.js)",
      type: "دوام كامل",
      location: "عن بُعد",
      experience: "٣-٥ سنوات",
      salary: "١٠,٠٠٠ - ١٥,٠٠٠ ج.م",
      description: "نبحث عن مطور Frontend متخصص في Next.js و React للانضمام إلى فريق التطوير.",
      icon: Code2,
      color: "from-blue-600 to-cyan-600",
      requirements: [
        "خبرة قوية في Next.js و React",
        "معرفة TypeScript",
        "خبرة في Tailwind CSS",
        "فهم مبادئ performance optimization",
        "معرفة Git و workflows"
      ]
    },
    {
      title: "مطور Backend (Node.js)",
      type: "دوام كامل",
      location: "عن بُعد",
      experience: "٣-٥ سنوات",
      salary: "١٢,٠٠٠ - ١٨,٠٠٠ ج.م",
      description: "نبحث عن مطور Backend متخصص في Node.js لبناء وتطوير APIs وتكامل قواعد البيانات.",
      icon: Code2,
      color: "from-emerald-600 to-teal-600",
      requirements: [
        "خبرة في Node.js و Express",
        "معرفة قواعد البيانات SQL و NoSQL",
        "خبرة في بناء RESTful APIs",
        "معرفة أساسيات الأمان",
        "خبرة في Docker (ميزة)"
      ]
    },
    {
      title: "مسوق رقمي",
      type: "دوام جزئي",
      location: "عن بُعد",
      experience: "٢-٣ سنوات",
      salary: "٦,٠٠٠ - ٩,٠٠٠ ج.م",
      description: "نبحث عن مسوق رقمي لإدارة حملات التسويق ووسائل التواصل الاجتماعي.",
      icon: PenTool,
      color: "from-amber-600 to-orange-600",
      requirements: [
        "خبرة في إدارة حملات السوشيال ميديا",
        "معرفة SEO و SEM",
        "مهارات كتابة محتوى تسويقي",
        "تحليل البيانات والتقارير",
        "خبرة في Google Analytics"
      ]
    },
    {
      title: "مدير مشاريع",
      type: "دوام كامل",
      location: "عن بُعد",
      experience: "٣-٦ سنوات",
      salary: "١٥,٠٠٠ - ٢٠,٠٠٠ ج.م",
      description: "نبحث عن مدير مشاريع تقنية ذو خبرة لإدارة فرق التطوير وضمان تسليم المشاريع في الموعد المحدد.",
      icon: Target,
      color: "from-indigo-600 to-violet-600",
      requirements: [
        "خبرة في إدارة مشاريع تقنية",
        "معرفة Agile و Scrum",
        "مهارات تواصل ممتازة",
        "خبرة في استخدام Jira أو Trello",
        "إجادة اللغة الإنجليزية"
      ]
    }
  ];

  // مميزات العمل معنا
  const benefits = [
    { icon: Laptop, title: "عمل عن بُعد", desc: "نعمل بنظام remote بالكامل، نوفر لك حرية العمل من أي مكان" },
    { icon: Clock, title: "ساعات مرنة", desc: "نظام工作时间 مرن يناسبك ويناسب ظروفك" },
    { icon: Globe, title: "فريق دولي", desc: "نعمل مع فريق من مختلف الدول العربية والأجنبية" },
    { icon: Coffee, title: "بيئة مريحة", desc: "أجواء عمل مريحة وداعمة تشجع على الإبداع" },
    { icon: Target, title: "تطور مستمر", desc: "فرص تعلم وتطور مستمر من خلال ورش العمل والدورات" },
    { icon: Heart, title: "اهتمام بالموظفين", desc: "نهتم براحة وسعادة فريقنا ونقدم مزايا تنافسية" },
    { icon: Award, title: "مكافآت وحوافز", desc: "نظام مكافآت وحوافز على الإنجازات" },
    { icon: Shield, title: "تأمين صحي", desc: "نوفر تأمين صحي خاص لفريق العمل" },
  ];

  // قيم الشركة
  const values = [
    { icon: Sparkles, title: "الإبداع", desc: "نشجع الأفكار الجديدة والإبداعية وندعم التجريب" },
    { icon: Award, title: "الجودة", desc: "نسعى دائماً لتقديم الأفضل في كل مشروع نعمل عليه" },
    { icon: Rocket, title: "الابتكار", desc: "نواكب أحدث التقنيات والحلول لنقدم خدمات متميزة" },
    { icon: Heart, title: "العمل الجماعي", desc: "نؤمن بأن النجاح الحقيقي يتحقق من خلال الفريق" },
  ];

  // إحصائيات الشركة
  const companyStats = [
    { icon: Users, value: "١٢+", label: "فريق العمل" },
    { icon: Briefcase, value: "٤٠+", label: "مشروع منجز" },
    { icon: Calendar, value: "٢+", label: "سنوات خبرة" },
    { icon: Heart, value: "٩٨٪", label: "رضا العملاء" },
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
                <Users className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">انضم إلينا</span>
                <Sparkles className="w-3 h-3 text-amber-500" />
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              كن جزءاً من 
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent mx-2">
                فريقنا
              </span>
            </motion.h1>

            {/* الوصف */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
            >
              نبحث عن مواهب مبدعة وشغوفة للانضمام إلى فريق Kodia. نوفر بيئة عمل مريحة وفرصاً للتطور والنمو المهني.
            </motion.p>

            {/* إحصائيات سريعة */}
            <motion.div variants={fadeInUp} className="flex justify-center gap-6 mt-8">
              {companyStats.slice(0, 3).map((stat, idx) => (
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

      {/* إحصائيات الشركة */}
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
            {companyStats.map((stat, idx) => (
              <motion.div
                key={`stat-${idx}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -4 }}
                className="text-center p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 p-2 text-white">
                  <stat.icon className="w-full h-full" />
                </div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">لماذا تعمل معنا؟</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -6 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-2.5 text-white mb-4">
                    <Icon className="w-full h-full" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* قيم الشركة */}
      <section className="py-16 bg-gradient-to-b from-violet-50 to-fuchsia-50 dark:from-violet-950/20 dark:to-fuchsia-950/20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">قيمنا</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              المبادئ التي نؤمن بها ونعمل بها في كل مشروع
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
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
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 p-3.5 text-white shadow-lg">
                    <Icon className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* الوظائف المتاحة */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 rounded-full text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
              فرص عمل
            </span>
            <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">الوظائف المتاحة</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              نبحث دائماً عن المواهب المبدعة. تصفح الوظائف المتاحة وقدم الآن
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((job, idx) => {
              const Icon = job.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${job.color} p-2.5 text-white flex-shrink-0`}>
                        <Icon className="w-full h-full" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{job.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-xs">
                            <Briefcase className="w-3 h-3" />
                            {job.type}
                          </span>
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300 rounded-full text-xs">
                            <Globe className="w-3 h-3" />
                            {job.location}
                          </span>
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs">
                            <GraduationCap className="w-3 h-3" />
                            {job.experience}
                          </span>
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-bold">
                            <Star className="w-3 h-3 fill-emerald-500" />
                            {job.salary}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-xs font-bold">
                      <Zap className="w-3 h-3" />
                      مطلوب فوراً
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">{job.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-sm mb-2 text-gray-900 dark:text-white">المتطلبات:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, ridx) => (
                        <li key={ridx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
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
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      قدم الآن
                      <ChevronLeft className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                    >
                      استفسر عن الوظيفة
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs text-gray-400 dark:text-gray-500 mt-8"
          >
            * غير متاح وظيفة مناسبة؟ تواصل معنا واترك لنا بياناتك للفرص المستقبلية
          </motion.p>
        </Container>
      </section>

      {/* كيفية التقديم */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">كيفية التقديم</h2>
            
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  step: "١",
                  title: "اختر الوظيفة",
                  desc: "تصفح الوظائف المتاحة واختر ما يناسب مهاراتك وخبراتك",
                  icon: Briefcase
                },
                {
                  step: "٢",
                  title: "املأ النموذج",
                  desc: "قدم معلوماتك وأرفق سيرتك الذاتية عبر النموذج أو Google Forms",
                  icon: PenTool
                },
                {
                  step: "٣",
                  title: "مقابلة",
                  desc: "سنقوم بالتواصل معك لتحديد موعد مقابلة عبر الإنترنت",
                  icon: Headphones
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
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white text-xl font-bold flex items-center justify-center shadow-lg">
                      {step.step}
                    </div>
                    {idx < 2 && (
                      <div className="hidden sm:block absolute top-8 left-full w-16 h-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-30" />
                    )}
                  </div>
                  <div className="w-12 h-12 mx-auto mb-3">
                    <step.icon className="w-6 h-6 text-violet-600 mx-auto" />
                  </div>
                  <h3 className="font-bold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* نموذج التقديم السريع */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden">
              {/* رأس النموذج */}
              <div className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-2">نموذج تقديم سريع</h2>
                  <p className="text-white/90 text-sm">
                    املأ المعلومات الأساسية وسنقوم بالتواصل معك في أقرب وقت
                  </p>
                </div>
              </div>

              {/* النموذج */}
              <div className="p-6 md:p-8">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      placeholder="أدخل اسمك الكامل"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      placeholder="example@domain.com"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      placeholder="٠١٢٣٤٥٦٧٨٩٠"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      الوظيفة المطلوبة *
                    </label>
                    <select className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white">
                      <option value="">اختر الوظيفة</option>
                      {openPositions.map((job, idx) => (
                        <option key={idx} value={job.title}>{job.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      رابط LinkedIn أو CV (اختياري)
                    </label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/..."
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      رسالة قصيرة
                    </label>
                    <textarea
                      rows={4}
                      placeholder="حدثنا عن نفسك وخبراتك..."
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    إرسال الطلب
                  </motion.button>
                </form>

                <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-4">
                  * يمكنك أيضاً التقديم عبر نموذج Google Forms للتفاصيل الكاملة
                </p>
              </div>
            </div>

            {/* رابط Google Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 p-5 bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl text-center"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                للتقديم الكامل وتحميل السيرة الذاتية:
              </p>
              <a
                href="https://forms.google.com/your-form-link"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 font-semibold group"
              >
                املأ نموذج Google Forms
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* تواصل معنا للاستفسار */}
      <section className="py-20 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-16 h-16 text-yellow-300" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">لديك استفسار؟</h2>
            <p className="text-white/90 mb-8 text-lg">
              تواصل معنا مباشرة وسنجيب على جميع أسئلتك حول فرص العمل
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:careers@kodia.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                careers@kodia.com
              </a>
              <a
                href="tel:+201207005495"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +٢٠١٢٠٧٠٠٥٤٩٥
              </a>
            </div>

            <p className="text-xs text-white/70 mt-6">
              * فريق الموارد البشرية متواجد للرد على استفساراتكم خلال ساعات العمل
            </p>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
