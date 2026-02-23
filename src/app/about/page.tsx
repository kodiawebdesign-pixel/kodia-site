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

// بيانات الفريق (بصور حقيقية)
const teamMembers = [
  {
    name: "أحمد كوديا",
    role: "مؤسس ومدير إبداعي",
    bio: "خبرة ٨ سنوات في تصميم تجارب المستخدم. عمل مع شركات في دبي والقاهرة.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    expertise: ["UI/UX", "قيادة الفرق"],
    rating: 4.9
  },
  {
    name: "سارة عبدالله",
    role: "كبيرة مصممي UI/UX",
    bio: "حاصلة على جائزة أفضل تصميم تفاعلي ٢٠٢٤.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    expertise: ["فيجما", "بروتوتايب"],
    rating: 5.0
  },
  {
    name: "محمود خالد",
    role: "مهندس برمجيات أول",
    bio: "خبير في React و Next.js. يبني تطبيقات سريعة وآمنة.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    expertise: ["React", "Next.js"],
    rating: 4.8
  },
  {
    name: "فاطمة الزهراء",
    role: "مديرة التسويق الرقمي",
    bio: "ساعدت أكثر من ٥٠ علامة تجارية في النمو.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    expertise: ["SEO", "تسويق محتوى"],
    rating: 4.9
  },
  {
    name: "يوسف عمر",
    role: "مطور تطبيقات موبايل",
    bio: "متخصص في Flutter و React Native.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    expertise: ["Flutter", "iOS"],
    rating: 4.7
  },
  {
    name: "نورا أحمد",
    role: "مصممة جرافيك",
    bio: "مبدعة في تصميم الهويات البصرية.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    expertise: ["هويات بصرية", "موشن"],
    rating: 5.0
  }
];

// إحصائيات
const stats = [
  { label: "سنوات الخبرة", value: "٨+", icon: Calendar, color: "from-blue-500 to-cyan-500" },
  { label: "مشاريع ناجحة", value: "٤٥+", icon: Briefcase, color: "from-purple-500 to-pink-500" },
  { label: "عملاء سعداء", value: "٣٢+", icon: Heart, color: "from-red-500 to-orange-500" },
  { label: "خبراء", value: "١٢+", icon: Users, color: "from-green-500 to-emerald-500" },
];

// قيم الشركة
const values = [
  { title: "تميز بلا حدود", desc: "لا نقدم أقل من الأفضل", icon: Award, color: "from-blue-500 to-cyan-500" },
  { title: "شفافية كاملة", desc: "نبقيك على اطلاع", icon: Users, color: "from-purple-500 to-pink-500" },
  { title: "التزام بالمواعيد", desc: "نسلم في الوقت المحدد", icon: Clock, color: "from-amber-500 to-orange-500" },
];

// شهادات العملاء
const testimonials = [
  {
    name: "د. منى سامي",
    role: "مديرة عيادة Prime Dental",
    content: "فريق Kodia محترف جداً. التصميم راقي والمرضى سعداء.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop"
  },
  {
    name: "أحمد عبدالله",
    role: "صاحب متجر UrbanWear",
    content: "المبيعات زادت ٨٥٪. شكراً Kodia.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
  }
];

const story = {
  title: "من شغف بسيط إلى شركة رقمية",
  paragraphs: [
    "بدأنا في ٢٠٢٢ بفكرة بسيطة: نقدم تصاميم راقية بأسعار مناسبة.",
    "اليوم، بعد ٣ سنوات، نفخر بفريق من ١٢ خبيراً في المجالات الرقمية."
  ]
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section - ثابت بدون حركة معقدة */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <Container>
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-8"
            >
              <span className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 backdrop-blur-sm rounded-full border border-violet-200/50">
                <Sparkles className="w-5 h-5 text-violet-600" />
                <span className="text-sm font-medium bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  تعرف على فريق كوديا
                </span>
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                نصنع 
              </span>
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent">
                {" "}تجارب رقمية
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              {story.paragraphs[0]}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 mt-12"
            >
              <a
                href={siteData.brand.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="px-10 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-violet-500/30 transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  تواصل مع فريق الخبراء
                </span>
              </a>

              <a
                href="/portfolio"
                className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-semibold text-lg shadow-2xl border-2 border-slate-200 hover:border-violet-600/30 transition-all duration-300"
              >
                استكشف أعمالنا
              </a>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats Section - بطريقة بسيطة */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg text-center"
                >
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} p-3 text-white`}>
                    <Icon className="w-full h-full" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="فريق العمل"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">قصتنا</span>
              <h2 className="text-4xl font-bold">{story.title}</h2>
              {story.paragraphs.map((para, idx) => (
                <p key={idx} className="text-lg text-slate-600">{para}</p>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">مبادئنا</span>
            <h2 className="text-4xl font-bold mt-3 mb-4">القيم التي تميزنا</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200"
                >
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${value.color} p-4 text-white`}>
                    <Icon className="w-full h-full" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">الخبراء</span>
            <h2 className="text-4xl font-bold mt-3 mb-4">فريق العمل</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, 3).map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-violet-600 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">آراء العملاء</span>
            <h2 className="text-4xl font-bold mt-3 mb-4">ماذا يقولون عنا</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl"
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
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-600">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-amber-600">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              دعنا نحول فكرتك إلى واقع
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              فريقنا جاهز لمناقشة مشروعك
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={siteData.brand.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  تواصل عبر واتساب
                </span>
              </a>
              <a
                href={`tel:${siteData.brand.phoneE164}`}
                className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all"
              >
                <span className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  اتصال مباشر
                </span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
