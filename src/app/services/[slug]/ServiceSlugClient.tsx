"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/Container";
import { siteData } from "@/lib/siteData";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  Users,
  MessageCircle,
  Phone,
  Sparkles,
  Shield,
  Rocket,
  CheckCircle2,
  Code2,
  Palette,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  Settings,
  Award
} from "lucide-react";

export default function ServiceSlugClient({ slug }: { slug: string }) {
  console.log('📢 Rendering ServiceSlugClient for slug:', slug);
  
  const services = siteData.home.services || [];
  
  // البحث عن الخدمة المطلوبة
  const service = services.find((s: any) => {
    const serviceSlug = s.title
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
    return serviceSlug === slug;
  });
  
  console.log('  🔍 Found service:', service?.title);
  
  if (!service) return notFound();

  // إحصائيات عامة
  const stats = [
    { icon: Clock, label: "مدة التنفيذ", value: "٧-٢١ يوم", color: "from-violet-600 to-fuchsia-600" },
    { icon: Users, label: "عملاء سعداء", value: "٢٠+", color: "from-blue-600 to-cyan-600" },
    { icon: Star, label: "تقييم الخدمة", value: "٤.٩/٥", color: "from-amber-600 to-orange-600" },
    { icon: Shield, label: "ضمان", value: "استعادة الحقوق", color: "from-green-600 to-emerald-600" },
  ];

  // تحديد الأيقونة حسب الخدمة
  const getIcon = () => {
    if (slug.includes("web")) return Code2;
    if (slug.includes("ecom")) return ShoppingCart;
    if (slug.includes("mobile")) return Smartphone;
    if (slug.includes("ui")) return Palette;
    if (slug.includes("seo")) return TrendingUp;
    if (slug.includes("support")) return Settings;
    return Sparkles;
  };

  const Icon = getIcon();

  // تحديد التدرج اللوني حسب الخدمة
  const getGradient = () => {
    if (slug.includes("web")) return "from-violet-600 to-fuchsia-600";
    if (slug.includes("ecom")) return "from-fuchsia-600 to-pink-600";
    if (slug.includes("mobile")) return "from-blue-600 to-cyan-600";
    if (slug.includes("ui")) return "from-purple-600 to-pink-600";
    if (slug.includes("seo")) return "from-emerald-600 to-teal-600";
    if (slug.includes("support")) return "from-indigo-600 to-violet-600";
    return "from-violet-600 to-fuchsia-600";
  };

  const gradient = getGradient();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-violet-50/10 to-white dark:from-gray-950 dark:via-violet-950/10 dark:to-gray-950">
      {/* قسم الهيرو */}
      <section className={`relative py-24 overflow-hidden bg-gradient-to-br ${gradient}`}>
        <div className="absolute inset-0">
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -10, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <Container>
          <div className="relative z-10 text-white">
            {/* رابط الرجوع */}
            <Link href="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm">الرجوع إلى جميع الخدمات</span>
            </Link>

            <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm p-4 text-white mb-4">
              <Icon className="w-full h-full" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {service.title}
            </h1>

            <p className="text-xl text-white/90 mb-6 max-w-2xl">
              {service.desc}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> تسليم سريع</span>
              <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> ضمان الجودة</span>
              <span className="flex items-center gap-1"><Rocket className="w-4 h-4" /> دعم فني 24/7</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4" /> فريق متخصص</span>
            </div>
          </div>
        </Container>
      </section>

      {/* المحتوى الرئيسي */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* تفاصيل الخدمة */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 shadow-xl mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">تفاصيل الخدمة</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-4 text-violet-600">المميزات</h3>
                  <ul className="space-y-3">
                    {["تنفيذ احترافي", "تصميم متجاوب", "دعم فني 24/7", "ضمان الجودة", "تسليم سريع"].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold mb-4 text-violet-600">معلومات إضافية</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <Clock className="w-5 h-5 text-violet-600" />
                      <span>مدة التنفيذ: 7-21 يوم</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <Users className="w-5 h-5 text-violet-600" />
                      <span>عملاء سعداء: 20+</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span>تقييم: 4.9/5</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* إحصائيات */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 text-center">
                  <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${stat.color} p-2 text-white`}>
                    <stat.icon className="w-full h-full" />
                  </div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* شهادة عميل */}
            <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 rounded-2xl p-6 border border-violet-100 dark:border-violet-800 mb-8">
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                "خدمة احترافية وسريعة. الفريق فهم متطلباتي بدقة ونفذها بشكل رائع."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600" />
                <div>
                  <p className="font-bold text-sm">أحمد عبدالله</p>
                  <p className="text-xs text-gray-500">عميل سابق</p>
                </div>
              </div>
            </div>

            {/* أزرار التواصل */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={siteData.brand?.whatsappLink || "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                واتساب
              </a>
              <a
                href={`tel:${siteData.brand?.phoneE164 || "+201207005495"}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white rounded-xl font-semibold hover:bg-violet-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                اتصال
              </a>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-colors"
              >
                طلب عرض سعر
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* شعار الجودة */}
      <section className="pb-16">
        <Container>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
              <Award className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">خدمة موثوقة من أكثر من ٢٠ عميل سعيد</span>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}