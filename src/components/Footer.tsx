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

  // ✅ Fix: مصدر الروابط من siteData هو quickLinks وليس links
  const footerLinks: SimpleLink[] =
    footer?.quickLinks?.length ? footer.quickLinks : defaultLinks;

  // روابط سريعة إضافية (كروت صغيرة)
  const quickLinks = [
    { href: "/quote", label: "طلب عرض سعر", icon: FileText },
    { href: "/estimate", label: "حاسبة السعر", icon: Calculator },
    { href: "/policies", label: "السياسات والضمانات", icon: Shield },
  ];

  // متغيرات الحركة
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
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
    <footer className="relative bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 overflow-hidden">
      {/* خلفية متحركة */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      <Container>
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
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {name?.charAt(0) || "K"}
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {name || "Kodia"}
                </h3>
                <p className="text-xs text-gray-500">شريكك الرقمي الموثوق</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {footer?.about ||
                "نقدم حلولاً رقمية متكاملة تساعدك على تنمية أعمالك وبناء حضور قوي على الإنترنت."}
            </p>

            {/* معلومات إضافية */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>{serviceArea || "السعودية - مصر - الإمارات"}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>{siteData?.home?.marketing?.responseLine || "الرد خلال نفس اليوم"}</span>
              </div>
            </div>

            {/* وسائل التواصل الاجتماعي */}
            <div>
              <h4 className="text-sm font-bold mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                تابعنا على
              </h4>

              {/* ✅ Fix: إجبار ألوان الأيقونات لتظهر على خلفية بيضاء */}
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-xl border border-gray-200 bg-white/80
                  px-3 py-2 shadow-sm
                  text-gray-700
                  [&_a]:inline-flex [&_a]:items-center [&_a]:justify-center
                  [&_a]:w-9 [&_a]:h-9 [&_a]:rounded-lg
                  [&_a]:border [&_a]:border-gray-200
                  [&_a]:bg-white
                  hover:[&_a]:shadow-sm
                  [&_a]:text-gray-700
                  hover:[&_a]:text-blue-600
                  [&_svg]:w-5 [&_svg]:h-5
                  [&_svg]:text-current
                "
              >
                <SocialLinks items={siteData?.topNav?.socials || []} variant="footer" />
              </div>

              {/* ملاحظة صغيرة لو حابب */}
              <p className="text-xs text-gray-400 mt-2">
                تابع جديدنا وتواصل معنا على المنصات الاجتماعية
              </p>
            </div>
          </motion.div>

          {/* القسم الثاني: روابط سريعة */}
          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-4 relative inline-block">
              روابط سريعة
              <span className="absolute -bottom-2 right-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
            </h4>

            <div className="grid grid-cols-2 gap-3">
              {footerLinks.map((l, idx) => (
                <Link
                  key={l?.href || `link-${idx}`}
                  href={l?.href || "#"}
                  className="group flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <ArrowLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  {l?.label || "رابط"}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* القسم الثالث: خدمات */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-4 relative inline-block">
              خدماتنا
              <span className="absolute -bottom-2 right-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
            </h4>

            <div className="space-y-3">
              {(siteData?.home?.services?.slice(0, 5) || []).map((service, idx) => (
                <Link
                  key={service?.title || `service-${idx}`}
                  href={`/services/${service?.title
                    ?.replace(/[^\w\s]/gi, "")
                    .replace(/\s+/g, "-")
                    .toLowerCase() || ""}`}
                  className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {service?.title || "خدمة"}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* القسم الرابع: تواصل معنا */}
          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-4 relative inline-block">
              تواصل معنا
              <span className="absolute -bottom-2 right-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
            </h4>

            <div className="space-y-4">
              {/* الهاتف */}
              <a
                href={`tel:${phoneE164 || ""}`}
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">اتصل بنا</div>
                  <div className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors" dir="ltr">
                    {phoneDisplay || "٠١٢٣٤٥٦٧٨٩"}
                  </div>
                </div>
              </a>

              {/* البريد الإلكتروني */}
              <a
                href={`mailto:${email || ""}`}
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">راسلنا</div>
                  <div className="text-sm font-bold text-gray-800 group-hover:text-purple-600 transition-colors" dir="ltr">
                    {email || "info@kodia.com"}
                  </div>
                </div>
              </a>

              {/* روابط سريعة إضافية */}
              <div className="flex flex-wrap gap-2 mt-4">
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 hover:border-blue-200 hover:text-blue-600 hover:shadow-md transition-all"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 border-t border-gray-200"
        >
          {/* واتساب */}
          <a
            href={whatsappLink || "#"}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />
              <div>
                <div className="text-sm font-bold">تواصل عبر واتساب</div>
                <div className="text-xs opacity-90">رد فوري خلال ساعات العمل</div>
              </div>
            </div>
            <ArrowLeft className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>

          {/* اتصال */}
          <a
            href={`tel:${phoneE164 || ""}`}
            className="group flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              <div>
                <div className="text-sm font-bold">اتصل بنا مباشرة</div>
                <div className="text-xs opacity-90">{phoneDisplay || "اتصل الآن"}</div>
              </div>
            </div>
            <ArrowLeft className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>

          {/* طلب عرض سعر */}
          <Link
            href="/quote"
            className="group flex items-center justify-between p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6" />
              <div>
                <div className="text-sm font-bold">طلب عرض سعر</div>
                <div className="text-xs opacity-90">احصل على عرض دقيق لمشروعك</div>
              </div>
            </div>
            <ArrowLeft className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
        </motion.div>

        {/* التذييل السفلي */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative py-6 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              جميع الحقوق محفوظة © {new Date().getFullYear()} {name || "Kodia"}
            </p>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <Link href="/policies" className="hover:text-blue-600 transition-colors">
                سياسة الخصوصية
              </Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-blue-600 transition-colors">
                شروط الاستخدام
              </Link>
              <span>|</span>
              <button onClick={scrollToTop} className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                <ChevronUp className="w-3 h-3" />
                العودة للأعلى
              </button>
            </div>

            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Heart className="w-3 h-3 text-red-500" />
              <span>صنع بكل</span>
              <span className="font-bold text-gray-600">❤️</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}