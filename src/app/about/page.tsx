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
  Calendar,
  Zap,
  Shield,
  TrendingUp,
  Globe,
  Palette,
  Code,
  Camera,
  Video,
  Layers
} from "lucide-react";

// بيانات الفريق الوهمية (بصور حقيقية)
const teamMembers = [
  {
    name: "أحمد كوديا",
    role: "مؤسس ومدير إبداعي",
    bio: "خبرة ٨ سنوات في تصميم تجارب المستخدم. عمل مع شركات في دبي والقاهرة. شغوف بتحويل الأفكار إلى منتجات رقمية مبهرة.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    expertise: ["UI/UX", "قيادة الفرق", "استراتيجية رقمية"],
    rating: 4.9
  },
  {
    name: "سارة عبدالله",
    role: "كبيرة مصممي UI/UX",
    bio: "حاصلة على جائزة أفضل تصميم تفاعلي ٢٠٢٤. تصمم واجهات تجمع بين الجمال والوظيفة لزيادة التحويل.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    expertise: ["فيجما", "بروتوتايب", "أبحاث المستخدمين"],
    rating: 5.0
  },
  {
    name: "محمود خالد",
    role: "مهندس برمجيات أول",
    bio: "خبير في React و Next.js. يبني تطبيقات سريعة وآمنة وقابلة للتوسع. مساهم في مشاريع مفتوحة المصدر.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    expertise: ["React", "Next.js", "Node.js"],
    rating: 4.8
  },
  {
    name: "فاطمة الزهراء",
    role: "مديرة التسويق الرقمي",
    bio: "ساعدت أكثر من ٥٠ علامة تجارية في النمو عبر استراتيجيات SEO ومحتوى إبداعي. خبرة ٦ سنوات في جوجل.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    expertise: ["SEO", "تسويق محتوى", "تحليلات"],
    rating: 4.9
  },
  {
    name: "يوسف عمر",
    role: "مطور تطبيقات موبايل",
    bio: "متخصص في Flutter و React Native. لديه ١٠+ تطبيقات منشورة بأكثر من ٥٠٠ ألف تحميل.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    expertise: ["Flutter", "iOS", "Android"],
    rating: 4.7
  },
  {
    name: "نورا أحمد",
    role: "مصممة جرافيك وحركة",
    bio: "مبدعة في تصميم الهويات البصرية والموشن جرافيك. حاصلة على ٣ جوائز محلية ودولية.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    expertise: ["هويات بصرية", "موشن", "فوتوشوب"],
    rating: 5.0
  }
];

// إحصائيات دقيقة
const stats = [
  { label: "سنوات الخبرة", value: "٨+", icon: Calendar, color: "from-blue-500 to-cyan-500" },
  { label: "مشاريع ناجحة", value: "٤٥+", icon: Briefcase, color: "from-purple-500 to-pink-500" },
  { label: "عملاء سعداء", value: "٣٢+", icon: Heart, color: "from-red-500 to-orange-500" },
  { label: "خبراء متفرغين", value: "١٢+", icon: Users, color: "from-green-500 to-emerald-500" },
  { label: "سنوات معدل الخبرة", value: "٦.٥", icon: Award, color: "from-yellow-500 to-amber-500" },
  { label: "معدل رضا", value: "٩٨٪", icon: Star, color: "from-indigo-500 to-purple-500" },
];

// قيم الشركة
const values = [
  { title: "تميز بلا حدود", desc: "لا نقدم أقل من الأفضل في كل مشروع", icon: Award, color: "from-blue-500 to-cyan-500" },
  { title: "شفافية كاملة", desc: "نبقيك على اطلاع بكل تفاصيل المشروع", icon: Users, color: "from-purple-500 to-pink-500" },
  { title: "التزام بالمواعيد", desc: "نسلم مشاريعك في الوقت المحدد أو قبل", icon: Clock, color: "from-amber-500 to-orange-500" },
  { title: "تقنيات حديثة", desc: "نستخدم أحدث الأدوات والتقنيات", icon: Zap, color: "from-green-500 to-emerald-500" },
  { title: "دعم مستمر", desc: "فريق دعم فني متاح ٢٤/٧", icon: Shield, color: "from-red-500 to-rose-500" },
  { title: "نتائج ملموسة", desc: "نركز على تحقيق أهدافك وزيادة أرباحك", icon: TrendingUp, color: "from-indigo-500 to-purple-500" },
];

// شهادات العملاء
const testimonials = [
  {
    name: "د. منى سامي",
    role: "مديرة عيادة Prime Dental",
    content: "فريق Kodia غير مفهومنا عن المواقع الطبية. التصميم راقي جداً والمرضى صاروا يحجزوا أونلاين. التجربة كانت أكثر من رائعة.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop"
  },
  {
    name: "أحمد عبدالله",
    role: "صاحب متجر UrbanWear",
    content: "المبيعات زادت ٨٥٪ في أول ٣ شهور. تصميم المتجر أنيق وسهل والطلبات زادت بشكل ملحوظ. شكراً Kodia.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
  },
  {
    name: "خالد السيد",
    role: "صاحب FitTrack App",
    content: "تطبيق FitTrack حصل على تقييم ٤.٨ في المتاجر بفضل تصميم Kodia الاحترافي. أنصح بالتعامل معهم.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
  }
];

// بيانات إضافية
const story = {
  title: "من شغف بسيط إلى شركة رقمية رائدة",
  paragraphs: [
    "بدأت قصة Kodia في ٢٠٢٢ بفكرة بسيطة: نقدم تصاميم راقية بأسعار مناسبة. اليوم، بعد ٣ سنوات من العمل الجاد، نفخر بفريق متكامل من ١٢ خبيراً في مختلف المجالات التقنية.",
    "ما يميزنا هو نظرتنا الشاملة للمشروع. لا نصمم فقط، بل ندرس السوق والجمهور والمنافسين لنقدم لك موقعاً أو تطبيقاً يحقق أهدافك التجارية.",
    "نؤمن أن كل عميل هو شريك نجاح، ونسعى دائماً لبناء علاقات طويلة المدى مبنية على الثقة والنتائج الملموسة."
  ]
};

export default function AboutPage() {
  // متغيرات الحركة المتطورة
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  };

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      }
    }
  };

  const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -6,
      transition: { 
        duration: 0.3, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* قسم الهيرو الفاخر */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* عناصر خلفية متحركة فاخرة */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl"
          />
        </div>

        <Container>
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-5xl mx-auto"
          >
            {/* شارة الصفحة الفاخرة */}
            <motion.div variants={fadeInUp} className="inline-block mb-8">
              <span className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 backdrop-blur-sm rounded-full border border-violet-200/50 shadow-lg">
                <Sparkles className="w-5 h-5 text-violet-600" />
                <span className="text-sm font-medium bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  تعرف على فريق كوديا
                </span>
                <Sparkles className="w-5 h-5 text-fuchsia-600" />
              </span>
            </motion.div>

            {/* العنوان الرئيسي بتصميم فاخر */}
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                نصنع 
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent">
                تجارب رقمية
              </span>
              <br />
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                لا تُنسى
              </span>
            </motion.h1>

            {/* وصف مبهر */}
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            >
              {story.paragraphs[0]}
            </motion.p>

            {/* زرين رئيسيين */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-6 mt-12"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href={siteData.brand.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group relative px-10 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-violet-500/30 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  تواصل مع فريق الخبراء
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="/portfolio"
                className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-semibold text-lg shadow-2xl border-2 border-slate-200 hover:border-violet-600/30 hover:shadow-xl transition-all duration-300"
              >
                استكشف أعمالنا
              </motion.a>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* قسم الإحصائيات المبهر */}
      <section className="py-16">
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                  whileHover="hover"
                  initial="rest"
                  variants={{ hover: cardHover }}
                  className="group relative bg-white rounded-2xl border border-slate-200 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* الخلفية المتدرجة عند الهوفر */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} p-3 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full" />
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-slate-500 font-medium mt-1">{stat.label}</div>
                  </div>

                  {/* عنصر زخرفي */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full opacity-30"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* قصة الشركة بتصميم فاخر */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* الجانب الأيمن - معرض الصور التفاعلي */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* الصورة الرئيسية */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="فريق العمل"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                {/* تدرج علوي */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* نص داخل الصورة */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 text-white"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5" />
                    <span className="text-sm font-medium">فريق كوديا - ٢٠٢٥</span>
                  </div>
                </motion.div>
              </div>

              {/* بطاقة صغيرة عائمة */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 max-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 p-2 text-white">
                    <Award className="w-full h-full" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">جوائز</div>
                    <div className="text-lg font-bold text-slate-900">١٢+ جائزة</div>
                  </div>
                </div>
              </motion.div>

              {/* بطاقة أخرى */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-5 max-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-2 text-white">
                    <Globe className="w-full h-full" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">عملاء دوليين</div>
                    <div className="text-lg font-bold text-slate-900">٨ دول</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* الجانب الأيسر - النص */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">قصتنا</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-5xl font-bold leading-tight"
              >
                {story.title}
              </motion.h2>

              {story.paragraphs.map((para, idx) => (
                <motion.p 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="text-lg text-slate-600 leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}

              {/* مميزات سريعة */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-2 gap-4 pt-6"
              >
                {[
                  { icon: CheckCircle2, text: "فريق معتمد من Google" },
                  { icon: CheckCircle2, text: "أحدث التقنيات العالمية" },
                  { icon: CheckCircle2, text: "ضمان استعادة الحقوق" },
                  { icon: CheckCircle2, text: "دعم فني ٢٤ ساعة" },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-slate-700"
                  >
                    <item.icon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* قيمنا بتصميم عصري */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3 block">
              مبادئنا
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              القيم التي تميزنا
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              نؤمن بأن النجاح الحقيقي يبدأ من قيم راسخة نعيشها في كل مشروع
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
                  staggerChildren: 0.15,
                }
              }
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                  whileHover="hover"
                  initial="rest"
                  variants={{ hover: cardHover }}
                  className="group relative bg-white rounded-3xl border border-slate-200 p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  {/* الخلفية المتدرجة */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                  
                  {/* الأيقونة */}
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${value.color} p-4 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="w-full h-full" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-slate-900">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.desc}</p>

                  {/* عنصر زخرفي */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                    className="absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-slate-100 to-slate-200 rounded-full opacity-50"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* فريق العمل الفاخر */}
      <section className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3 block">
              الخبراء
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              العقول المبدعة خلف كوديا
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              فريق من الخبراء المتخصصين في مختلف المجالات الرقمية
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
                  staggerChildren: 0.15,
                }
              }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* الصورة */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* تدرج على الصورة */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                  
                  {/* معلومات فوق الصورة */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(member.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                      ))}
                      <span className="text-sm mr-2 text-white/90">{member.rating}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-white/90 font-medium">{member.role}</p>
                  </div>
                </div>

                {/* البايو الذي يظهر عند الهوفر */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-violet-900 via-fuchsia-900/90 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((exp, i) => (
                      <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">
                        {exp}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* شهادات العملاء */}
      <section className="py-24 bg-slate-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3 block">
              آراء شركاء النجاح
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              ماذا يقول عملاؤنا
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              ثقتهم هي أعلى وسام فخر لنا
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-slate-900">{testimonial.name}</h3>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* علامات اقتباس */}
                <div className="mt-4 text-6xl text-slate-200 font-serif opacity-50 text-left">
                  "
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition-colors group"
            >
              <span>عرض المزيد من الشهادات</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl"
              >
                ←
              </motion.span>
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* قسم التواصل الفاخر */}
      <section className="py-24 relative overflow-hidden">
        {/* خلفية متدرجة */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-amber-600" />
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [0, 360, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent"
          />
        </div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto text-white"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-8"
            >
              <div className="w-20 h-20 mx-auto rounded-3xl bg-white/20 backdrop-blur p-5">
                <MessageCircle className="w-full h-full" />
              </div>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              دعنا نحول فكرتك إلى واقع
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              فريقنا جاهز لمناقشة مشروعك وتقديم استشارة مجانية
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href={siteData.brand.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group relative px-10 py-5 bg-white text-slate-900 rounded-2xl font-semibold text-lg shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  تواصل عبر واتساب
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-slate-100 to-white"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${siteData.brand.phoneE164}`}
                className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur"
              >
                <span className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  اتصال مباشر
                </span>
              </motion.a>
            </div>

            {/* روابط إضافية */}
            <div className="flex justify-center gap-8 mt-12 text-white/80">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={`mailto:${siteData.brand.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                {siteData.brand.email}
              </motion.a>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
