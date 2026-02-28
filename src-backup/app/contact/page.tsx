"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Container from "@/components/Container";
import { siteData } from "@/lib/siteData";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  User,
  FileText,
  HelpCircle,
  Award,
  Headphones,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Briefcase,
  Star,
  Zap,
  Shield,
  Users,
  Calendar
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const { phoneDisplay, phoneE164, email, whatsappLink, sameAs } = siteData.brand;
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      // محاكاة إرسال النموذج
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // هنا يمكنك إضافة منطق إرسال النموذج الحقيقي
      console.log("Form submitted:", formData);
      
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: ""
      });
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      setFormStatus("error");
    }
  };

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
                <MessageCircle className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">تواصل معنا</span>
                <Sparkles className="w-3 h-3 text-amber-500" />
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              دعنا نناقش 
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent mx-2">
                مشروعك
              </span>
            </motion.h1>

            {/* الوصف */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
            >
              تواصل معنا الآن وسنقوم بالرد عليك في أقرب وقت ممكن. فريقنا مستعد للإجابة على جميع استفساراتك ومناقشة أفكارك.
            </motion.p>

            {/* إحصائيات سريعة */}
            <motion.div variants={fadeInUp} className="flex justify-center gap-6 mt-8">
              {[
                { icon: Users, label: "عملاء", value: "٢٠+" },
                { icon: Briefcase, label: "مشاريع", value: "٢٥+" },
                { icon: Clock, label: "دعم", value: "٢٤/٧" },
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

      {/* بطاقات الاتصال السريع */}
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* بطاقة الهاتف */}
            <motion.a
              href={`tel:${phoneE164}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg hover:shadow-xl transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-5 transition-opacity" />
                <div className={`w-12 h-12 mb-3 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 p-2.5 text-white`}>
                  <Phone className="w-full h-full" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">اتصل بنا</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {phoneDisplay}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">متاحون ٩ ص - ٦ م</p>
              </div>
            </motion.a>

            {/* بطاقة البريد */}
            <motion.a
              href={`mailto:${email}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg hover:shadow-xl transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity" />
                <div className={`w-12 h-12 mb-3 rounded-lg bg-gradient-to-br from-fuchsia-600 to-pink-600 p-2.5 text-white`}>
                  <Mail className="w-full h-full" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">راسلنا</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">
                  {email}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">نرد خلال ٢٤ ساعة</p>
              </div>
            </motion.a>

            {/* بطاقة واتساب */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg hover:shadow-xl transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity" />
                <div className={`w-12 h-12 mb-3 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 p-2.5 text-white`}>
                  <MessageCircle className="w-full h-full" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">واتساب</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {phoneDisplay}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">رد فوري خلال ساعات العمل</p>
              </div>
            </motion.a>
          </motion.div>
        </Container>
      </section>

      {/* النموذج ومعلومات الاتصال */}
      <section className="py-12">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* النموذج */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
                    <h2 className="text-2xl font-bold mb-2">أرسل لنا رسالة</h2>
                    <p className="text-white/90 text-sm max-w-xl">
                      املأ النموذج وسنقوم بالرد عليك في أقرب وقت ممكن
                    </p>
                  </div>
                </div>

                {/* النموذج */}
                <form onSubmit={handleSubmit} className="p-6 md:p-8">
                  <div className="space-y-4">
                    {/* الاسم */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        الاسم بالكامل *
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="أدخل اسمك الكامل"
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                      />
                    </div>

                    {/* البريد الإلكتروني */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        البريد الإلكتروني *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@domain.com"
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                      />
                    </div>

                    {/* رقم الهاتف */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        رقم الهاتف *
                      </label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="٠١٢٣٤٥٦٧٨٩٠"
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                      />
                    </div>

                    {/* نوع الخدمة */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        نوع الخدمة
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                      >
                        <option value="">اختر الخدمة</option>
                        <option value="web-design">تصميم موقع شركة</option>
                        <option value="ecommerce">متجر إلكتروني</option>
                        <option value="mobile-app">تطبيق موبايل</option>
                        <option value="ui-ux">تصميم UI/UX</option>
                        <option value="seo">تحسين محركات البحث SEO</option>
                        <option value="maintenance">دعم فني وصيانة</option>
                        <option value="other">أخرى</option>
                      </select>
                    </div>

                    {/* الميزانية التقريبية */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        الميزانية التقريبية
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                      >
                        <option value="">اختر الميزانية</option>
                        <option value="less-than-5000">أقل من ٥٠٠٠ جنيه</option>
                        <option value="5000-10000">٥٠٠٠ - ١٠٠٠٠ جنيه</option>
                        <option value="10000-20000">١٠٠٠٠ - ٢٠٠٠٠ جنيه</option>
                        <option value="more-than-20000">أكثر من ٢٠٠٠٠ جنيه</option>
                      </select>
                    </div>

                    {/* الرسالة */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        تفاصيل المشروع *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="اكتب تفاصيل مشروعك هنا..."
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                      />
                    </div>

                    {/* حالة النموذج */}
                    {formStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 flex items-center gap-2 text-green-700 dark:text-green-400"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="text-sm">تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.</span>
                      </motion.div>
                    )}

                    {formStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 flex items-center gap-2 text-red-700 dark:text-red-400"
                      >
                        <HelpCircle className="w-5 h-5" />
                        <span className="text-sm">حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.</span>
                      </motion.div>
                    )}

                    {/* زر الإرسال */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={formStatus === "loading"}
                      className="w-full py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
                    >
                      {formStatus === "loading" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          جاري الإرسال...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          إرسال الرسالة
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* معلومات الاتصال */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* ساعات العمل */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-2.5 text-white">
                    <Clock className="w-full h-full" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">ساعات العمل</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">الأحد - الخميس</span>
                    <span className="font-medium text-gray-900 dark:text-white">٩:٠٠ ص - ٦:٠٠ م</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">الجمعة</span>
                    <span className="font-medium text-gray-900 dark:text-white">مغلق</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">السبت</span>
                    <span className="font-medium text-gray-900 dark:text-white">١٠:٠٠ ص - ٤:٠٠ م</span>
                  </div>
                </div>
              </div>

              {/* الموقع */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 p-2.5 text-white">
                    <MapPin className="w-full h-full" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">موقعنا</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  القاهرة، مصر - نعمل مع عملاء في جميع أنحاء مصر والوطن العربي عبر الإنترنت
                </p>
                <a
                  href="https://maps.google.com/?q=Cairo,Egypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 transition-colors flex items-center gap-1 group"
                >
                  <Globe className="w-4 h-4" />
                  عرض على الخريطة
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                </a>
              </div>

              {/* روابط سريعة */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-2.5 text-white">
                    <Headphones className="w-full h-full" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">روابط سريعة</h3>
                </div>
                <div className="space-y-2">
                  <Link href="/quote" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                    طلب عرض سعر
                  </Link>
                  <Link href="/brief" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                    نموذج Brief
                  </Link>
                  <Link href="/estimate" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                    حاسبة السعر
                  </Link>
                  <Link href="/policies" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                    السياسات والضمانات
                  </Link>
                </div>
              </div>

              {/* وسائل التواصل الاجتماعي */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">تابعنا على</h3>
                <div className="flex flex-wrap gap-3">
                  {sameAs?.map((url, idx) => {
                    let Icon: any = Globe;
                    if (url.includes('facebook')) Icon = Facebook;
                    else if (url.includes('instagram')) Icon = Instagram;
                    else if (url.includes('linkedin')) Icon = Linkedin;
                    else if (url.includes('x.com') || url.includes('twitter')) Icon = Twitter;
                    else if (url.includes('youtube')) Icon = Youtube;
                    
                    return (
                      <motion.a
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 transition-all"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* خريطة تفاعلية */}
      <section className="py-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* خريطة جوجل (يمكن استبدالها برابط حقيقي) */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.015418234553!2d31.23571171511578!3d30.04441958188452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Egypt!5e0!3m2!1sen!2sus!4v1644567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </Container>
      </section>

      {/* دعوة للتواصل */}
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
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">جاهز للبدء في مشروعك؟</h2>
            <p className="text-white/90 mb-8 text-lg">
              تواصل معنا الآن ودعنا نحول فكرتك إلى واقع. فريقنا مستعد للإجابة على جميع استفساراتك.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                واتساب
              </a>
              <a
                href={`tel:${phoneE164}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                اتصال
              </a>
            </div>
            
            <p className="text-xs text-white/70 mt-6">
              * فريقنا متواجد للرد على استفساراتكم خلال ساعات العمل الرسمية
            </p>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

// إضافة أيقونة ArrowLeft لأنها مش مستوردة
const ArrowLeft = (props: any) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);
