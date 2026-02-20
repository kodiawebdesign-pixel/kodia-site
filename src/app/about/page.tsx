"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { siteData } from "@/lib/siteData";
import { 
  Users, 
  Award, 
  Clock, 
  Heart, 
  Target, 
  Rocket,
  CheckCircle2,
  Star,
  Sparkles,
  MessageCircle,
  Phone,
  Mail,
  Briefcase,
  Calendar
} from "lucide-react";

// بيانات إضافية للصفحة (يمكن نقلها إلى siteData لاحقاً)
const aboutData = {
  story: "بدأنا رحلتنا في 2023 بهدف بسيط: تقديم تصاميم رقمية راقية تجمع بين الجمال والوظيفة. اليوم، نفخر بثقة عملائنا ونعمل على تطوير أنفسنا باستمرار لنقدم الأفضل دائماً.",
  mission: "نحن نؤمن أن التصميم الجيد هو استثمار، وليس تكلفة. نساعد الشركات على بناء هوية رقمية قوية تحقق أهدافها وتنمي أعمالها.",
  vision: "نسعى لنكون الشريك الرقمي الأول للشركات الناشئة والمتوسطة في مصر والوطن العربي، من خلال تقديم حلول مبتكرة تركز على النتائج.",
  values: [
    { title: "الجودة", desc: "نقدم أفضل ما لدينا في كل مشروع", icon: Award },
    { title: "الشفافية", desc: "نبقيك على اطلاع بكل خطوة", icon: Users },
    { title: "الالتزام", desc: "نفي بوعودنا ونسلم في الوقت المحدد", icon: Clock },
    { title: "الاحترافية", desc: "نعمل بأحدث المنهجيات والأدوات", icon: Target },
    { title: "الإبداع", desc: "نفكر خارج الصندوق لنقدم تصاميم مميزة", icon: Sparkles },
    { title: "النتائج", desc: "نركز على تحقيق أهدافك وزيادة أرباحك", icon: Rocket },
  ],
  team: [
    { name: "أحمد كوديا", role: "مؤسس ومصمم UI/UX", bio: "خبرة 5 سنوات في تصميم وتطوير المواقع، شغوف بإنشاء تجارب مستخدم استثنائية.", avatar: "/images/team/ahmed.jpg" },
    { name: "فريق العمل", role: "مطورين ومصممين", bio: "فريق متكامل من الخبراء في مختلف المجالات التقنية.", avatar: "/images/team/team.jpg" },
  ],
  stats: [
    { label: "سنوات خبرة", value: "٢+", icon: Calendar },
    { label: "مشاريع منجزة", value: "١٥+", icon: Briefcase },
    { label: "عملاء سعداء", value: "١٠+", icon: Heart },
    { label: "خبراء", value: "٥+", icon: Users },
  ],
};

export default function AboutPage() {
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
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">من نحن</span>
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              نصنع 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mx-2">
                تجارب رقمية
              </span>
              استثنائية
            </motion.h1>

            {/* الوصف */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 leading-relaxed"
            >
              {aboutData.story}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* قسم الإحصائيات */}
      <section className="py-12">
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
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {aboutData.stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                  whileHover={{ y: -4 }}
                  className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-2.5 text-white">
                    <Icon className="w-full h-full" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* قصة الشركة */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* الجانب الأيسر - الصورة */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-10" />
                <img
                  src="/images/about-illustration.svg"
                  alt="About Kodia"
                  className="w-full h-full object-cover"
                />
                
                {/* عناصر زخرفية */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-lg opacity-60"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-lg opacity-60"
                />
              </div>
            </motion.div>

            {/* الجانب الأيمن - النص */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-4">
                قصتنا
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {aboutData.story}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {aboutData.mission}
              </p>

              {/* مميزات سريعة */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: CheckCircle2, text: "خبرة ٢+ سنة" },
                  { icon: CheckCircle2, text: "أكثر من ١٥ مشروع" },
                  { icon: CheckCircle2, text: "فريق محترف" },
                  { icon: CheckCircle2, text: "دعم ٢٤/٧" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <item.icon className="w-4 h-4 text-green-500" />
                    {item.text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* رؤيتنا ورسالتنا */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {/* الرؤية */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 text-white mb-4">
                <Target className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold mb-3">رؤيتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                {aboutData.vision}
              </p>
            </motion.div>

            {/* الرسالة */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 text-white mb-4">
                <Rocket className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold mb-3">رسالتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                {aboutData.mission}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* قيمنا */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-3">قيمنا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              المبادئ التي نؤمن بها ونعمل بها في كل مشروع
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
            {aboutData.values.map((value, idx) => {
              const Icon = value.icon;
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
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* شهادات سريعة */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">تقييم ٤.٩ من ١٠+ عملاء</span>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                "فريق Kodia محترف ومتفهم. ساعدونا في تحويل فكرتنا إلى موقع رائع. أنصح بالتعامل معهم."
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                <div>
                  <div className="font-bold">محمد الجمل</div>
                  <div className="text-sm text-gray-500">مؤسس Learnify Academy</div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* دعوة للتواصل */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">تواصل معنا</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              لديك فكرة لمشروع؟ دعنا نناقشها معاً ونحولها إلى واقع
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={siteData.brand.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                واتساب
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${siteData.brand.phoneE164}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                اتصال
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${siteData.brand.email}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Mail className="w-5 h-5" />
                بريد
              </motion.a>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}