"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import { siteData } from "@/lib/siteData";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Heart,
  Sparkles,
  ArrowLeft,
  ChevronUp,
  FileText,
  Calculator,
  Shield,
  Star,
  Award,
  Zap,
  Globe,
  Users,
  Briefcase,
  Code,
  Palette,
  ShoppingCart,
  Smartphone,
  TrendingUp,
  PenTool,
  Rocket,
  Target,
  CheckCircle,
} from "lucide-react";

type SimpleLink = { href: string; label: string };

export default function Footer() {
  const { footer } = siteData.home || {};
  const { phoneDisplay, phoneE164, email, whatsappLink, name, serviceArea } = siteData.brand || {};

  // بيانات افتراضية للروابط في حالة عدم وجودها
  const defaultLinks: SimpleLink[] = [
    { href: "/", label: "الرئيسية" },
    { href: "/services", label: "الخدمات" },
    { href: "/portfolio", label: "أعمالنا" },
    { href: "/about", label: "من نحن" },
    { href: "/contact", label: "اتصل بنا" },
    { href: "/quote", label: "عرض سعر" },
  ];

  const footerLinks: SimpleLink[] =
    footer?.quickLinks?.length ? footer.quickLinks : defaultLinks;

  // روابط سريعة إضافية مع أيقونات
  const quickLinks = [
    { href: "/quote", label: "طلب عرض سعر", icon: FileText, color: "from-violet-600 to-fuchsia-600" },
    { href: "/estimate", label: "حاسبة السعر", icon: Calculator, color: "from-blue-600 to-cyan-600" },
    { href: "/policies", label: "السياسات والضمانات", icon: Shield, color: "from-amber-600 to-orange-600" },
    { href: "/profile", label: "Company Profile", icon: Award, color: "from-purple-600 to-pink-600" },
  ];

  // خدمات مميزة
  const featuredServices = [
    { icon: Code, label: "تصميم مواقع", href: "/services/web-design", color: "from-violet-600 to-fuchsia-600" },
    { icon: ShoppingCart, label: "متاجر إلكترونية", href: "/services/ecommerce", color: "from-blue-600 to-cyan-600" },
    { icon: Smartphone, label: "تطبيقات موبايل", href: "/services/mobile-apps", color: "from-emerald-600 to-teal-600" },
    { icon: Palette, label: "UI/UX Design", href: "/services/ui-ux", color: "from-purple-600 to-pink-600" },
    { icon: TrendingUp, label: "تحسين SEO", href: "/services/seo", color: "from-amber-600 to-orange-600" },
    { icon: Zap, label: "دعم فني", href: "/services/support", color: "from-indigo-600 to-blue-600" },
  ];

  // إحصائيات سريعة
  const stats = [
    { icon: Users, value: "٣٢+", label: "عميل سعيد", color: "from-violet-600 to-fuchsia-600" },
    { icon: Briefcase, value: "٤٥+", label: "مشروع منجز", color: "from-blue-600 to-cyan-600" },
    { icon: Star, value: "٤.٩", label: "تقييم العملاء", color: "from-amber-600 to-orange-600" },
    { icon: Clock, value: "٢٤/٧", label: "دعم فني", color: "from-green-600 to-emerald-600" },
  ];

  // متغيرات الحركة
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  };

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white border-t border-violet-100/50 overflow-hidden">
      {/* خلفية متحركة فاخرة */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-fuchsia-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            x: [0, -10, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-violet-200/20 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
      </div>

      <Container>
        {/* إحصائيات سريعة */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-b border-violet-100/50"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInScale}
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-violet-100/50 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} p-2 text-white flex-shrink-0`}>
                  <Icon className="w-full h-full" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* القسم الرئيسي */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid gap-8 py-16 sm:grid-cols-2 lg:grid-cols-12"
        >
          {/* القسم الأول: معلومات الشركة */}
          <motion.div variants={fadeInUp} className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-bold text-xl shadow-lg"
              >
                {name?.charAt(0) || "K"}
              </motion.div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  {name || "Kodia"}
                </h3>
                <p className="text-xs text-gray-500">شريكك الرقمي الموثوق</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {footer?.about ||
                "نقدم حلولاً رقمية متكاملة تجمع بين الإبداع التقني والفهم العميق لاحتياجات السوق، نساعدك على بناء حضور قوي وتحقيق نتائج ملموسة."}
            </p>

            {/* معلومات إضافية */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600 group hover:text-violet-600 transition-colors">
                <MapPin className="w-4 h-4 text-violet-600 group-hover:scale-110 transition-transform" />
                <span>{serviceArea || "مصر - السعودية - الإمارات"}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 group hover:text-violet-600 transition-colors">
                <Clock className="w-4 h-4 text-violet-600 group-hover:scale-110 transition-transform" />
                <span>{siteData?.home?.marketing?.responseLine || "الرد خلال ٢٤ ساعة"}</span>
              </div>
            </div>

            {/* وسائل التواصل الاجتماعي */}
            <div>
              <h4 className="text-sm font-bold mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-600" />
                تابعنا على
              </h4>

              <div className="inline-flex items-center gap-2 rounded-xl border border-violet-100 bg-white/80 px-3 py-2 shadow-sm">
                <SocialLinks items={siteData?.topNav?.socials || []} variant="footer" />
              </div>

              <p className="text-xs text-gray-400 mt-2">
                تابع جديدنا وتواصل معنا على المنصات الاجتماعية
              </p>
            </div>
          </motion.div>

          {/* القسم الثاني: روابط سريعة */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-4 relative inline-block">
              روابط سريعة
              <span className="absolute -bottom-2 right-0 w-12 h-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full" />
            </h4>

            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((l, idx) => (
                <Link
                  key={l?.href || `link-${idx}`}
                  href={l?.href || "#"}
                  className="group flex items-center gap-1 text-sm text-gray-600 hover:text-violet-600 transition-colors"
                >
                  <ArrowLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  {l?.label || "رابط"}
                </Link>
              ))}
            </div>

            {/* روابط إضافية */}
            <div className="mt-6">
              <h4 className="text-sm font-bold mb-3 text-gray-700">روابط مهمة</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-sm text-gray-600 hover:text-violet-600 transition-colors">
                  من نحن
                </Link>
                <Link href="/contact" className="block text-sm text-gray-600 hover:text-violet-600 transition-colors">
                  اتصل بنا
                </Link>
                <Link href="/blog" className="block text-sm text-gray-600 hover:text-violet-600 transition-colors">
                  المدونة
                </Link>
                <Link href="/faq" className="block text-sm text-gray-600 hover:text-violet-600 transition-colors">
                  الأسئلة الشائعة
                </Link>
              </div>
            </div>
          </motion.div>

          {/* القسم الثالث: خدمات مميزة */}
          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-4 relative inline-block">
              خدمات مميزة
              <span className="absolute -bottom-2 right-0 w-12 h-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full" />
            </h4>

            <div className="grid grid-cols-2 gap-3">
              {featuredServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={idx}
                    href={service.href}
                    className="group flex items-center gap-2 p-2 rounded-lg hover:bg-violet-50 transition-all"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} p-1.5 text-white`}>
                      <Icon className="w-full h-full" />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-violet-600 transition-colors">
                      {service.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* شهادة سريعة */}
            <div className="mt-6 p-4 bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-xl border border-violet-100">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-white">
                    <Star className="w-5 h-5 fill-white" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-700 italic">
                    "فريق محترف ومتفهم، ساعدونا في تطوير موقعنا بشكل رائع"
                  </p>
                  <p className="text-xs text-gray-500 mt-1">- أحمد عبدالله، صاحب متجر UrbanWear</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* القسم الرابع: تواصل معنا */}
          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-4 relative inline-block">
              تواصل معنا
              <span className="absolute -bottom-2 right-0 w-12 h-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full" />
            </h4>

            <div className="space-y-4">
              {/* الهاتف */}
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                href={`tel:${phoneE164 || ""}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-violet-100 hover:border-violet-300 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">اتصل بنا</div>
                  <div className="text-base font-bold text-gray-800 group-hover:text-violet-600 transition-colors" dir="ltr">
                    {phoneDisplay || "٠١٢٣٤٥٦٧٨٩"}
                  </div>
                </div>
              </motion.a>

              {/* البريد الإلكتروني */}
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                href={`mailto:${email || ""}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-violet-100 hover:border-fuchsia-300 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-fuchsia-600 to-pink-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">راسلنا</div>
                  <div className="text-base font-bold text-gray-800 group-hover:text-fuchsia-600 transition-colors" dir="ltr">
                    {email || "info@kodia.com"}
                  </div>
                </div>
              </motion.a>

              {/* روابط سريعة إضافية */}
              <div className="flex flex-wrap gap-2 mt-4">
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-violet-100 rounded-lg text-xs text-gray-700 hover:border-violet-300 hover:text-violet-600 hover:shadow-md transition-all group"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* شريط الإجراءات السريعة */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 border-t border-violet-100/50"
        >
          {/* واتساب */}
          <motion.a
            whileHover={{ scale: 1.02, y: -4 }}
            href={whatsappLink || "#"}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden flex items-center justify-between p-5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white hover:shadow-2xl transition-all"
          >
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />
              <div>
                <div className="text-base font-bold">تواصل عبر واتساب</div>
                <div className="text-xs opacity-90">رد فوري خلال ساعات العمل</div>
              </div>
            </div>
            <ArrowLeft className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </motion.a>

          {/* اتصال */}
          <motion.a
            whileHover={{ scale: 1.02, y: -4 }}
            href={`tel:${phoneE164 || ""}`}
            className="group relative overflow-hidden flex items-center justify-between p-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl text-white hover:shadow-2xl transition-all"
          >
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              <div>
                <div className="text-base font-bold">اتصل بنا مباشرة</div>
                <div className="text-xs opacity-90">{phoneDisplay || "اتصل الآن"}</div>
              </div>
            </div>
            <ArrowLeft className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </motion.a>

          {/* طلب عرض سعر */}
          <Link href="/quote">
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative overflow-hidden flex items-center justify-between p-5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl text-white hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6" />
                <div>
                  <div className="text-base font-bold">طلب عرض سعر</div>
                  <div className="text-xs opacity-90">احصل على عرض دقيق لمشروعك</div>
                </div>
              </div>
              <ArrowLeft className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </motion.div>
          </Link>
        </motion.div>

        {/* التذييل السفلي */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative py-6 border-t border-violet-100/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              جميع الحقوق محفوظة © {new Date().getFullYear()} {name || "Kodia"}.
            </p>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <Link href="/policies" className="hover:text-violet-600 transition-colors">
                سياسة الخصوصية
              </Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-violet-600 transition-colors">
                شروط الاستخدام
              </Link>
              <span>|</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={scrollToTop}
                className="flex items-center gap-1 hover:text-violet-600 transition-colors"
              >
                <ChevronUp className="w-3 h-3" />
                العودة للأعلى
              </motion.button>
            </div>

            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Heart className="w-3 h-3 text-red-500 animate-pulse" />
              <span>صنع بكل</span>
              <span className="font-bold text-violet-600">❤️</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
