"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import { 
  Shield, 
  Clock, 
  RefreshCw, 
  CreditCard,
  CheckCircle2,
  AlertCircle,
  Award,
  Headphones,
  FileText,
  Lock,
  Heart,
  Star,
  Sparkles,
  ChevronLeft,
  HelpCircle,
  Zap,
  Globe,
  Users,
  Target,
  Rocket,
  Gem,
  Scale
} from "lucide-react";
import Link from "next/link";

export default function PoliciesClient() {
  // بيانات إضافية للسياسات
  const policies = [
    {
      icon: Clock,
      title: "سياسة التسليم",
      description: "نلتزم بجدول زمني واضح ومنظم يضمن حصولك على مشروعك في الوقت المتفق عليه",
      items: [
        "جدول زمني واضح حسب حجم المشروع",
        "معاينة قبل التسليم النهائي للتأكد من رضاك",
        "تسليم منظم للملفات/الصفحات مع توثيق كامل",
        "مراحل متعددة للتسليم لمشاريع التطوير الكبيرة",
        "إشعارات دورية عن تقدم العمل عبر البريد أو واتساب"
      ],
      gradient: "from-violet-600 to-fuchsia-600",
      bgLight: "bg-violet-50 dark:bg-violet-900/20",
      textLight: "text-violet-700 dark:text-violet-300",
      borderLight: "border-violet-200 dark:border-violet-800"
    },
    {
      icon: RefreshCw,
      title: "سياسة التعديلات",
      description: "نضمن لك المرونة في التعديلات مع الحفاظ على جودة العمل النهائي",
      items: [
        "تعديلات بسيطة بعد التسليم حسب الاتفاق المبدئي",
        "توثيق الملاحظات لضمان الجودة وتجنب التكرار",
        "أي تطوير إضافي يتم تقييمه أولاً وإبلاغك بالتكلفة",
        "فترة تعديلات مجانية (حسب حجم المشروع)",
        "المراجعات النهائية قبل الإطلاق"
      ],
      gradient: "from-fuchsia-600 to-pink-600",
      bgLight: "bg-fuchsia-50 dark:bg-fuchsia-900/20",
      textLight: "text-fuchsia-700 dark:text-fuchsia-300",
      borderLight: "border-fuchsia-200 dark:border-fuchsia-800"
    },
    {
      icon: CreditCard,
      title: "سياسة الدفع",
      description: "نظام دفع شفاف ومرن يناسب احتياجاتك ويضمن حقوق الطرفين",
      items: [
        "دفعة بداية + دفعة عند التسليم (حسب الاتفاق)",
        "الفواتير/الإثباتات متاحة عند الطلب",
        "وضوح كامل قبل بدء التنفيذ (عرض سعر مفصل)",
        "خيارات دفع متعددة (تحويل بنكي، محافظ إلكترونية)",
        "إيصالات رسمية لكل دفعة"
      ],
      gradient: "from-amber-600 to-orange-600",
      bgLight: "bg-amber-50 dark:bg-amber-900/20",
      textLight: "text-amber-700 dark:text-amber-300",
      borderLight: "border-amber-200 dark:border-amber-800"
    }
  ];

  // الضمانات الإضافية
  const guarantees = [
    {
      icon: Award,
      title: "ضمان الجودة",
      description: "نضمن أن العمل المقدم يطابق المواصفات المتفق عليها",
      gradient: "from-violet-600 to-fuchsia-600"
    },
    {
      icon: Headphones,
      title: "دعم فني",
      description: "دعم فني لمدة شهر بعد التسليم لحل أي مشكلة",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Lock,
      title: "سرية المعلومات",
      description: "نحافظ على سرية بيانات مشروعك وأفكارك",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      icon: Heart,
      title: "رضا العملاء",
      description: "نعمل حتى ترى راضياً تماماً عن النتيجة النهائية",
      gradient: "from-rose-600 to-red-600"
    },
    {
      icon: FileText,
      title: "توثيق كامل",
      description: "نوثق كل مراحل المشروع بالاتفاقيات والفواتير",
      gradient: "from-indigo-600 to-violet-600"
    },
    {
      icon: Shield,
      title: "ضمان استعادة الحقوق",
      description: "إذا لم نلتزم بالمواصفات، نضمن استرداد أموالك",
      gradient: "from-amber-600 to-orange-600"
    },
    {
      icon: Zap,
      title: "سرعة التنفيذ",
      description: "نلتزم بالمواعيد المتفق عليها ونسلم قبل الموعد إن أمكن",
      gradient: "from-yellow-600 to-amber-600"
    },
    {
      icon: Scale,
      title: "توازن وعدالة",
      description: "عقود متوازنة تراعي حقوق الطرفين",
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  // الأسئلة الشائعة عن السياسات
  const faqs = [
    {
      q: "متى تبدأ فترة التعديلات بعد التسليم؟",
      a: "تبدأ فترة التعديلات فور استلامك للمشروع النهائي، وتستمر لمدة ٧ أيام للمشاريع الصغيرة و١٤ يوماً للمشاريع الكبيرة."
    },
    {
      q: "هل يمكنني استرداد أموالي إذا لم يعجبني التصميم؟",
      a: "نعم، نضمن استرداد أموالك إذا لم نلتزم بالمواصفات المتفق عليها في العقد. نحرص على شفافية كاملة في التعامل."
    },
    {
      q: "كيف يتم حساب الدفعات للمشاريع الكبيرة؟",
      a: "للمشاريع الكبيرة، نقسم الدفعات على مراحل: ٤٠٪ بداية، ٣٠٪ بعد منتصف المشروع، ٣٠٪ عند التسليم النهائي."
    },
    {
      q: "ماذا يحدث إذا تأخر التسليم عن الموعد المتفق عليه؟",
      a: "نلتزم بالجدول الزمني المتفق عليه. في حالة التأخر (بسبب من طرفنا)، نقدم تعويضات مناسبة حسب الاتفاق."
    },
    {
      q: "هل توثقون الاتفاقات بعقود رسمية؟",
      a: "نعم، نوثق كل مشروع بعقد واضح يحدد المواصفات، الجدول الزمني، الدفعات، وحقوق وواجبات الطرفين."
    }
  ];

  // مميزات إضافية
  const features = [
    {
      icon: Globe,
      title: "نعمل مع عملاء حول العالم",
      desc: "خدماتنا متاحة لعملاء في جميع الدول العربية"
    },
    {
      icon: Users,
      title: "فريق متخصص",
      desc: "فريق من الخبراء في مختلف المجالات التقنية"
    },
    {
      icon: Target,
      title: "دقة في التنفيذ",
      desc: "نلتزم بالمواصفات ونسعى لتجاوز التوقعات"
    },
    {
      icon: Rocket,
      title: "تطوير مستمر",
      desc: "نواكب أحدث التقنيات والحلول في السوق"
    }
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
                <Shield className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">السياسات والضمانات</span>
                <Sparkles className="w-3 h-3 text-amber-500" />
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              سياسات واضحة
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent mx-2">
                وضمانات موثوقة
              </span>
            </motion.h1>

            {/* الوصف */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
            >
              نوضح لك سياسات العمل والضمانات التي نقدمها لضمان تجربة شفافة وموثوقة. نؤمن بأن الوضوح هو أساس الثقة.
            </motion.p>

            {/* إحصائيات سريعة */}
            <motion.div variants={fadeInUp} className="flex justify-center gap-6 mt-8">
              {[
                { icon: Shield, label: "ضمان", value: "١٠٠٪" },
                { icon: Clock, label: "تسليم", value: "في الموعد" },
                { icon: Users, label: "عملاء", value: "موثوق" },
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

      {/* السياسات الرئيسية */}
      <section className="py-16">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {policies.map((policy, idx) => {
              const Icon = policy.icon;
              return (
                <motion.div
                  key={`policy-${idx}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 shadow-xl hover:shadow-2xl transition-all overflow-hidden">
                    {/* خلفية متدرجة متحركة */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${policy.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

                    {/* أيقونة كبيرة في الخلفية */}
                    <Icon className="absolute -bottom-4 -left-4 w-32 h-32 text-violet-600 dark:text-violet-700 opacity-5" />
                    
                    {/* المحتوى */}
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${policy.gradient} p-3.5 text-white mb-6 shadow-lg`}>
                        <Icon className="w-full h-full" />
                      </div>

                      <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{policy.title}</h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                        {policy.description}
                      </p>

                      <ul className="space-y-3">
                        {policy.items.map((item, iidx) => (
                          <motion.li
                            key={`policy-${idx}-item-${iidx}`}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + iidx * 0.1 }}
                            className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                          >
                            <CheckCircle2 className={`w-5 h-5 ${policy.gradient.replace('from-', 'text-').split(' ')[0]} flex-shrink-0 mt-0.5`} />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* خط سفلي متدرج */}
                    <motion.div 
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${policy.gradient}`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* شعار الثقة */}
      <section className="py-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 rounded-3xl p-8 text-white text-center relative overflow-hidden"
          >
            {/* خلفية متحركة */}
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
                className="inline-block mb-4"
              >
                <Shield className="w-16 h-16 text-yellow-300" />
              </motion.div>
              <h2 className="text-2xl font-bold mb-4">ضمان استعادة الحقوق</h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                إذا لم نلتزم بالمواصفات المتفق عليها في العقد، نضمن لك استرداد أموالك كاملة. 
                ثقتك هي رأس مالنا الحقيقي.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* الضمانات الإضافية */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 rounded-full text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
              ضمانات إضافية
            </span>
            <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">نقدم لك أكثر من مجرد خدمة</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              نضمن لك تجربة متكاملة وراحة بال من خلال مجموعة من الضمانات الإضافية
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
            {guarantees.map((guarantee, idx) => {
              const Icon = guarantee.icon;
              return (
                <motion.div
                  key={`guarantee-${idx}`}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${guarantee.gradient} p-2 text-white flex-shrink-0`}>
                      <Icon className="w-full h-full" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-gray-900 dark:text-white">{guarantee.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{guarantee.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* مميزات إضافية */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Container>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 p-2 text-white flex-shrink-0">
                  <feature.icon className="w-full h-full" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white">{feature.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* الأسئلة الشائعة */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">أسئلة شائعة عن السياسات</h2>
              <p className="text-gray-600 dark:text-gray-400">إجابات واضحة لأهم استفساراتك</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
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

      {/* شفافية الأسعار */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-xs font-medium mb-4">
                الشفافية أولاً
              </span>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">نؤمن بالشفافية والوضوح</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                نؤمن بأن العلاقة الناجحة مع العملاء تبدأ بالشفافية والوضوح. لذلك نحرص على:
              </p>
              <ul className="space-y-3">
                {[
                  "توثيق كل التفاصيل في عقد مكتوب",
                  "توضيح التكاليف قبل البدء (بدون مفاجآت)",
                  "إبلاغك بأي تغييرات قد تؤثر على الجدول أو التكلفة",
                  "توفير تقارير دورية عن تقدم العمل",
                  "الاستماع لملاحظاتك وأخذها بجدية"
                ].map((item, idx) => (
                  <motion.li
                    key={`transparency-${idx}`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-violet-600 via-fuchsia-600 to-amber-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Gem className="w-6 h-6 text-yellow-300" />
                  <span className="text-sm font-medium opacity-90">لماذا تثق بنا؟</span>
                </div>
                <h3 className="text-xl font-bold mb-4">نحن لا نقدم وعوداً فقط</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  أكثر من ٢٠ عميل سعيد، و٢٥+ مشروع منجز، ونسبة رضا ٩٨٪. ثقة عملائنا هي أكبر دليل على التزامنا بالجودة والشفافية.
                </p>
                <div className="flex items-center gap-1 text-yellow-300">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={`star-${star}`} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="mr-2 text-white">٤.٩/٥</span>
                </div>
                <p className="text-xs text-white/70 mt-4">
                  * بناءً على تقييمات العملاء الحقيقية
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* دعوة للتواصل */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-4 text-white shadow-xl">
                <HelpCircle className="w-full h-full" />
              </div>
            </motion.div>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">لديك استفسار عن سياساتنا؟</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              نحن هنا للإجابة على جميع أسئلتك وتوضيح أي نقطة تود الاستفسار عنها
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                تواصل معنا
                <ChevronLeft className="w-4 h-4" />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                الأسئلة الشائعة
              </Link>
            </div>

            <p className="text-xs text-gray-400 dark:text-gray-500 mt-6">
              * فريق الدعم متواجد للرد على استفساراتكم خلال ساعات العمل
            </p>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
