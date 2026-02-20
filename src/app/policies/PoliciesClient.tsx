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
  HelpCircle
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
        "إشعارات دورية عن تقدم العمل"
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-50",
      textLight: "text-blue-700",
      borderLight: "border-blue-200"
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
      gradient: "from-purple-500 to-pink-500",
      bgLight: "bg-purple-50",
      textLight: "text-purple-700",
      borderLight: "border-purple-200"
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
      gradient: "from-amber-500 to-orange-500",
      bgLight: "bg-amber-50",
      textLight: "text-amber-700",
      borderLight: "border-amber-200"
    }
  ];

  // الضمانات الإضافية
  const guarantees = [
    {
      icon: Award,
      title: "ضمان الجودة",
      description: "نضمن أن العمل المقدم يطابق المواصفات المتفق عليها"
    },
    {
      icon: Headphones,
      title: "دعم فني",
      description: "دعم فني لمدة شهر بعد التسليم لحل أي مشكلة"
    },
    {
      icon: Lock,
      title: "سرية المعلومات",
      description: "نحافظ على سرية بيانات مشروعك وأفكارك"
    },
    {
      icon: Heart,
      title: "رضا العملاء",
      description: "نعمل حتى ترى راضياً تماماً عن النتيجة النهائية"
    },
    {
      icon: FileText,
      title: "توثيق كامل",
      description: "نوثق كل مراحل المشروع بالاتفاقيات والفواتير"
    },
    {
      icon: Shield,
      title: "ضمان استعادة الحقوق",
      description: "إذا لم نلتزم بالمواصفات، نضمن استرداد أموالك"
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
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">السياسات والضمانات</span>
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              سياسات واضحة
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mx-2">
                وضمانات موثوقة
              </span>
            </motion.h1>

            {/* الوصف */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            >
              نوضح لك سياسات العمل والضمانات التي نقدمها لضمان تجربة شفافة وموثوقة. نؤمن بأن الوضوح هو أساس الثقة.
            </motion.p>
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
                  <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-xl hover:shadow-2xl transition-all overflow-hidden">
                    {/* خلفية متدرجة متحركة */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${policy.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

                    {/* أيقونة كبيرة في الخلفية */}
<Icon className="absolute -bottom-4 -left-4 w-32 h-32 text-blue-600 opacity-5" />
                    {/* المحتوى */}
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${policy.gradient} p-3.5 text-white mb-6 shadow-lg`}>
                        <Icon className="w-full h-full" />
                      </div>

                      <h2 className="text-2xl font-bold mb-3">{policy.title}</h2>
                      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
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
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
<CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />                            {item}
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
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center relative overflow-hidden"
          >
            {/* خلفية متحركة */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
            
            <div className="relative z-10">
              <Shield className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
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
            <h2 className="text-3xl font-bold mb-3">ضمانات إضافية</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نقدم لك أكثر من مجرد خدمة، نقدم لك راحة البال
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
            {guarantees.map((guarantee, idx) => {
              const Icon = guarantee.icon;
              return (
                <motion.div
                  key={`guarantee-${idx}`}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-2 text-white flex-shrink-0">
                      <Icon className="w-full h-full" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{guarantee.title}</h3>
                      <p className="text-sm text-gray-600">{guarantee.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* الأسئلة الشائعة */}
      <section className="py-16 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-3">أسئلة شائعة عن السياسات</h2>
              <p className="text-gray-600">إجابات واضحة لأهم استفساراتك</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={`faq-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all"
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

      {/* شفافية الأسعار */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4">الشفافية أولاً</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
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
                    className="flex items-start gap-2 text-sm text-gray-700"
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
              className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl p-8 text-white shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-300" />
                <span className="text-sm font-medium opacity-90">لماذا تثق بنا؟</span>
              </div>
              <h3 className="text-xl font-bold mb-4">نحن لا نقدم وعوداً فقط</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-6">
                أكثر من ١٠ عملاء سعداء، و١٥+ مشروع منجز، ونسبة رضا ٩٨٪. ثقة عملائنا هي أكبر دليل على التزامنا بالجودة والشفافية.
              </p>
              <div className="flex items-center gap-1 text-yellow-300">
                {[1,2,3,4,5].map((star) => (
                  <Star key={`star-${star}`} className="w-5 h-5 fill-current" />
                ))}
                <span className="mr-2 text-white">٤.٩/٥</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* دعوة للتواصل */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4">لديك استفسار عن سياساتنا؟</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              نحن هنا للإجابة على جميع أسئلتك وتوضيح أي نقطة تود الاستفسار عنها
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                تواصل معنا
                <ChevronLeft className="w-4 h-4" />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                الأسئلة الشائعة
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
