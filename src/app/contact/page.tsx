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
  Youtube
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const { phoneDisplay, phoneE164, email, whatsappLink, sameAs } = siteData.brand;
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
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
      // هنا يمكنك إضافة منطق إرسال النموذج
      // مثال باستخدام Formspree
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
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
                <MessageCircle className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">تواصل معنا</span>
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              دعنا نناقش 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mx-2">
                مشروعك
              </span>
            </motion.h1>

            {/* الوصف */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            >
              تواصل معنا الآن وسنقوم بالرد عليك في أقرب وقت ممكن. فريقنا مستعد للإجابة على جميع استفساراتك.
            </motion.p>
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
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity" />
                <Phone className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold mb-1">اتصل بنا</h3>
                <p className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  {phoneDisplay}
                </p>
                <p className="text-xs text-gray-400 mt-2">متاحون ٩ ص - ٦ م</p>
              </div>
            </motion.a>

            {/* بطاقة البريد */}
            <motion.a
              href={`mailto:${email}`}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity" />
                <Mail className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-bold mb-1">راسلنا</h3>
                <p className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  {email}
                </p>
                <p className="text-xs text-gray-400 mt-2">نرد خلال ٢٤ ساعة</p>
              </div>
            </motion.a>

            {/* بطاقة واتساب */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity" />
                <MessageCircle className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold mb-1">واتساب</h3>
                <p className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                  +٢٠١٢٠٧٠٠٥٤٩٥
                </p>
                <p className="text-xs text-gray-400 mt-2">رد فوري</p>
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
              <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
                {/* رأس النموذج */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">أرسل لنا رسالة</h2>
                  <p className="text-white/90 text-sm">
                    املأ النموذج وسنقوم بالرد عليك في أقرب وقت
                  </p>
                </div>

                {/* النموذج */}
                <form onSubmit={handleSubmit} className="p-6 md:p-8">
                  <div className="space-y-4">
                    {/* الاسم */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        الاسم بالكامل *
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="أدخل اسمك الكامل"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                      />
                    </div>

                    {/* البريد الإلكتروني */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        البريد الإلكتروني *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@domain.com"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                      />
                    </div>

                    {/* رقم الهاتف */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        رقم الهاتف *
                      </label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="٠١٢٣٤٥٦٧٨٩٠"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                      />
                    </div>

                    {/* نوع الخدمة */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        نوع الخدمة
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                      >
                        <option value="">اختر الخدمة</option>
                        <option value="web-design">تصميم موقع</option>
                        <option value="ecommerce">متجر إلكتروني</option>
                        <option value="mobile-app">تطبيق موبايل</option>
                        <option value="ui-ux">UI/UX</option>
                        <option value="seo">SEO</option>
                        <option value="other">أخرى</option>
                      </select>
                    </div>

                    {/* الرسالة */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        تفاصيل المشروع *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="اكتب تفاصيل مشروعك هنا..."
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                      />
                    </div>

                    {/* حالة النموذج */}
                    {formStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-2 text-green-700"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="text-sm">تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.</span>
                      </motion.div>
                    )}

                    {formStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-2 text-red-700"
                      >
                        <HelpCircle className="w-5 h-5" />
                        <span className="text-sm">حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.</span>
                      </motion.div>
                    )}

                    {/* زر الإرسال */}
                    <button
                      type="submit"
                      disabled={formStatus === "loading"}
                      className="w-full btn-primary hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                    </button>

                    {/* ملاحظة Formspree */}
                    <p className="text-xs text-gray-400 text-center">
                      * بدل YOUR_FORMSPREE_ID بعد ما تعمل فورم مجاني على Formspree
                    </p>
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
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-2 text-white">
                    <Clock className="w-full h-full" />
                  </div>
                  <h3 className="text-lg font-bold">ساعات العمل</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">الأحد - الخميس</span>
                    <span className="font-medium">٩:٠٠ ص - ٦:٠٠ م</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">الجمعة</span>
                    <span className="font-medium">مغلق</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">السبت</span>
                    <span className="font-medium">١٠:٠٠ ص - ٤:٠٠ م</span>
                  </div>
                </div>
              </div>

              {/* الموقع */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-2 text-white">
                    <MapPin className="w-full h-full" />
                  </div>
                  <h3 className="text-lg font-bold">موقعنا</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  القاهرة، مصر - نعمل مع عملاء في جميع أنحاء مصر والوطن العربي
                </p>
                <a
                  href="https://maps.google.com/?q=Cairo,Egypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1"
                >
                  <Globe className="w-4 h-4" />
                  عرض على الخريطة
                </a>
              </div>

              {/* روابط سريعة */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 p-2 text-white">
                    <Headphones className="w-full h-full" />
                  </div>
                  <h3 className="text-lg font-bold">روابط سريعة</h3>
                </div>
                <div className="space-y-2">
                  <Link href="/quote" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    طلب عرض سعر
                  </Link>
                  <Link href="/brief" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    نموذج Brief
                  </Link>
                  <Link href="/estimate" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    حاسبة السعر
                  </Link>
                  <Link href="/policies" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    السياسات والضمانات
                  </Link>
                </div>
              </div>

              {/* وسائل التواصل الاجتماعي */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <h3 className="text-lg font-bold mb-4">تابعنا على</h3>
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
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all"
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

      {/* خريطة (محاكاة) */}
      <section className="py-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl h-96 relative overflow-hidden"
          >
            {/* خريطة محاكاة */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59,130,246,0.2) 1px, transparent 0)',
              backgroundSize: '30px 30px',
            }} />
            
            {/* نقاط تمثل موقعنا */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-400 rounded-full opacity-30"
            />
            <motion.div
              animate={{
                scale: [1, 2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-300 rounded-full opacity-20"
            />
          </motion.div>
        </Container>
      </section>

      {/* دعوة للتواصل */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-4">جاهز للبدء في مشروعك؟</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              تواصل معنا الآن ودعنا نحول فكرتك إلى واقع. فريقنا مستعد للإجابة على جميع استفساراتك.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                واتساب
              </a>
              <a
                href={`tel:${phoneE164}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition-all"
              >
                <Phone className="w-5 h-5" />
                اتصال
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}