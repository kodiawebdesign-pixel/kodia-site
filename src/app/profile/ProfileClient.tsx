"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import { siteData } from "@/lib/siteData";
import { 
  Printer, 
  Download, 
  Share2,
  CheckCircle2,
  Star,
  Award,
  Users,
  Briefcase,
  Calendar,
  Heart,
  Zap,
  Target,
  Rocket,
  Globe,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Code2,
  Palette,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  Settings,
  FileText,
  Shield
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function ProfileClient() {
  const profileRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  // إحصائيات إضافية
  const stats = [
    { icon: Calendar, label: "سنوات الخبرة", value: "٢+" },
    { icon: Briefcase, label: "مشاريع منجزة", value: "١٥+" },
    { icon: Users, label: "عملاء سعداء", value: "١٠+" },
    { icon: Star, label: "تقييم", value: "٤.٩/٥" },
  ];

  // مميزات إضافية
  const features = [
    { icon: Zap, title: "سرعة تنفيذ", desc: "نسلم المشاريع في الوقت المحدد" },
    { icon: Heart, title: "رضا العملاء", desc: "نسبة رضا ٩٨٪ من عملائنا" },
    { icon: Target, title: "دقة وجودة", desc: "نلتزم بأعلى معايير الجودة" },
    { icon: Rocket, title: "تقنيات حديثة", desc: "نستخدم أحدث التقنيات" },
  ];

  // خريطة الأيقونات للخدمات
  const serviceIcons: Record<string, any> = {
    "تصميم مواقع الشركات": Code2,
    "تصميم المتاجر الإلكترونية": ShoppingCart,
    "برمجة تطبيقات الهاتف": Smartphone,
    "UI/UX Design": Palette,
    "تحسين محركات البحث (SEO)": TrendingUp,
    "الدعم الفني والصيانة": Settings,
    "كتابة المحتوى": FileText,
    "استضافة ودومين": Shield,
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `Company Profile - ${siteData.brand.name}`,
        text: "تعرف على خدمات Kodia Web Design",
        url: window.location.href,
      });
    } catch (error) {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
    <div className="profile-page">
      {/* قسم الهيرو */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <Container>
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            {/* شارة الصفحة */}
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full border border-blue-200/50">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Company Profile</span>
              </span>
            </motion.div>

            {/* العنوان والأزرار */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {siteData.brand.name}
                </span>
              </h1>
              
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all print:hidden"
                >
                  <Printer className="w-4 h-4" />
                  <span className="hidden sm:inline">PDF / طباعة</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all print:hidden"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">{copied ? "تم النسخ!" : "مشاركة"}</span>
                </motion.button>
              </div>
            </motion.div>

            {/* الوصف */}
            <motion.p 
              variants={fadeInUp}
              className="mt-4 text-lg text-gray-600 max-w-3xl"
            >
              شريكك الرقمي الموثوق لبناء حضور قوي على الإنترنت
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* المحتوى الرئيسي - قابل للطباعة */}
      <section className="py-8" ref={profileRef}>
        <Container>
          <div className="space-y-6">
            {/* بطاقة الشركة */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-gray-200 p-8 shadow-xl"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* الشعار */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  K
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3">{siteData.brand.name}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    تصميم وتطوير مواقع وتطبيقات — مواقع شركات، متاجر إلكترونية، UI/UX، وتحسين محركات البحث.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <a href={`tel:${siteData.brand.phoneE164}`} className="hover:text-blue-600 transition-colors">
                        {siteData.brand.phoneDisplay}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <a href={`mailto:${siteData.brand.email}`} className="hover:text-blue-600 transition-colors">
                        {siteData.brand.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Globe className="w-4 h-4 text-blue-600" />
                      <span>{siteData.brand.serviceArea}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>القاهرة، مصر</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* الإحصائيات */}
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
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={`stat-${idx}`}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-md"
                  >
                    <Icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* الخدمات وطريقة العمل */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* الخدمات */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  خدماتنا
                </h3>
                <div className="space-y-3">
                  {siteData.home.services.slice(0, 8).map((service, idx) => {
                    const Icon = serviceIcons[service.title] || CheckCircle2;
                    return (
                      <div key={`service-${idx}`} className="flex items-start gap-3">
                        <div className="w-5 h-5 mt-0.5">
                          <Icon className="w-5 h-5 text-green-500" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{service.title}</div>
                          <div className="text-xs text-gray-500">{service.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* طريقة العمل */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  طريقة العمل
                </h3>
                <div className="space-y-4">
                  {siteData.home.howWeWork.steps.map((step, idx) => (
                    <div key={`step-${idx}`} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{step.title}</div>
                        <div className="text-xs text-gray-500">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* مميزات إضافية */}
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
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={`feature-${idx}`}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    className="bg-white rounded-xl border border-gray-200 p-4 shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-1.5 text-white">
                        <Icon className="w-full h-full" />
                      </div>
                      <h4 className="font-bold text-sm">{feature.title}</h4>
                    </div>
                    <p className="text-xs text-gray-600">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* الضمانات */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100"
            >
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                ضماناتنا
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {siteData.home.guarantees.items.map((guarantee, idx) => {
                  const guaranteeText = typeof guarantee === 'string' 
                    ? guarantee 
                    : (guarantee as any).text || JSON.stringify(guarantee);
                  
                  return (
                    <div key={`guarantee-${idx}`} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{guaranteeText}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* روابط التواصل الاجتماعي */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg"
            >
              <h3 className="font-bold mb-4">تابعنا على</h3>
              <div className="flex flex-wrap gap-3">
                {siteData.brand.sameAs?.map((url, idx) => {
                  let Icon: any = Globe;
                  if (url.includes('facebook')) Icon = Facebook;
                  else if (url.includes('instagram')) Icon = Instagram;
                  else if (url.includes('linkedin')) Icon = Linkedin;
                  else if (url.includes('x.com') || url.includes('twitter')) Icon = Twitter;
                  else if (url.includes('youtube')) Icon = Youtube;
                  
                  return (
                    <motion.a
                      key={`social-${idx}`}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* ملاحظة الطباعة */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs text-gray-400 text-center print:hidden"
            >
              * تقدر تحفظ الصفحة PDF من زر “PDF / طباعة” أعلى الصفحة
            </motion.p>
          </div>
        </Container>
      </section>

      {/* تذييل للطباعة */}
      <div className="hidden print:block text-center text-xs text-gray-400 mt-8">
        <p>© {new Date().getFullYear()} {siteData.brand.name}. جميع الحقوق محفوظة.</p>
        <p>تم إنشاء هذا الملف بواسطة {siteData.brand.name}</p>
      </div>
    </div>
  );
}

// أيقونات التواصل الاجتماعي
const Facebook = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="3" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Linkedin = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.6 9 5-.5-2.5.5-5 3-6 1.5-1 3-1 4 0 1.5 0 3-1 3-1z" />
  </svg>
);

const Youtube = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="3" ry="3" />
    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
  </svg>
);