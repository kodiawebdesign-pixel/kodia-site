"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/siteData";
import { 
  Send, 
  FileText, 
  DollarSign, 
  Clock, 
  Link2, 
  MessageCircle,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Users,
  Target,
  Rocket,
  Shield,
  Eye,
  EyeOff,
  Copy,
  HelpCircle,
  Zap,
  Award,
  Heart,
  Globe,
  Smartphone,
  ShoppingCart,
  Code2,
  Palette
} from "lucide-react";
import Link from "next/link";

export default function QuoteForm() {
  const [service, setService] = useState("موقع تعريفي");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("خلال أسبوعين");
  const [reference, setReference] = useState("");
  const [notes, setNotes] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [showPreview, setShowPreview] = useState(true);
  const [copied, setCopied] = useState(false);
  const [formProgress, setFormProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  // حساب تقدم النموذج
  useEffect(() => {
    const fields = [service, budget, timeline, notes, name, phone];
    const filledFields = fields.filter(f => f && f.trim() !== "").length;
    const progress = (filledFields / fields.length) * 100;
    setFormProgress(progress);

    // تحديث الخطوة الحالية
    if (service && budget && timeline) setCurrentStep(2);
    if (name && phone) setCurrentStep(3);
    if (notes) setCurrentStep(3);
  }, [service, budget, timeline, notes, name, phone]);

  const msg = useMemo(() => {
    const lines = [
      "🚀 *طلب عرض سعر جديد من Kodia*",
      "",
      "📋 *تفاصيل المشروع:*",
      `• نوع المشروع: ${service}`,
      budget ? `• الميزانية التقريبية: ${budget}` : "",
      `• المدة المتوقعة: ${timeline}`,
      reference ? `• رابط مثال/منافس: ${reference}` : "",
      notes ? `• تفاصيل إضافية:\n${notes}` : "",
      "",
      "👤 *معلومات التواصل:*",
      `• الاسم: ${name || "..."}`,
      `• رقم الهاتف: ${phone || "..."}`,
      email ? `• البريد الإلكتروني: ${email}` : "",
      company ? `• الشركة: ${company}` : "",
      "",
      "✨ تم إرسال هذا الطلب عبر موقع Kodia Web Design",
    ].filter(Boolean);

    return lines.join("\n");
  }, [service, budget, timeline, reference, notes, name, phone, email, company]);

  function sendWhatsApp() {
    const url = `${siteData.brand.whatsappLink}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetForm = () => {
    if (confirm("هل أنت متأكد من مسح جميع البيانات؟")) {
      setService("موقع تعريفي");
      setBudget("");
      setTimeline("خلال أسبوعين");
      setReference("");
      setNotes("");
      setName("");
      setPhone("");
      setEmail("");
      setCompany("");
    }
  };

  // خيارات الخدمات مع أيقونات
  const serviceOptions = [
    { value: "موقع تعريفي", icon: "🌐", desc: "موقع بسيط للتعريف بالشركة", color: "from-violet-600 to-fuchsia-600" },
    { value: "موقع شركة متقدم", icon: "🏢", desc: "موقع متكامل مع صفحات متعددة", color: "from-blue-600 to-cyan-600" },
    { value: "متجر إلكتروني", icon: "🛒", desc: "متجر لبيع المنتجات أونلاين", color: "from-emerald-600 to-teal-600" },
    { value: "تطبيق موبايل", icon: "📱", desc: "تطبيق للهواتف الذكية", color: "from-amber-600 to-orange-600" },
    { value: "UI/UX فقط", icon: "🎨", desc: "تصميم واجهات وتجربة مستخدم", color: "from-purple-600 to-pink-600" },
    { value: "تحسين SEO", icon: "🚀", desc: "تحسين محركات البحث", color: "from-indigo-600 to-violet-600" },
  ];

  // خيارات المدة
  const timelineOptions = [
    { value: "خلال أسبوع", icon: "⚡", desc: "مشروع سريع", color: "from-violet-600 to-fuchsia-600" },
    { value: "خلال أسبوعين", icon: "📅", desc: "مشروع متوسط", color: "from-blue-600 to-cyan-600" },
    { value: "خلال شهر", icon: "📆", desc: "مشروع كبير", color: "from-amber-600 to-orange-600" },
    { value: "حسب الاتفاق", icon: "🤝", desc: "مشروع مخصص", color: "from-emerald-600 to-teal-600" },
  ];

  // إحصائيات سريعة
  const stats = [
    { icon: Sparkles, label: "خدمات", value: serviceOptions.length, color: "from-violet-600 to-fuchsia-600" },
    { icon: Clock, label: "وقت الرد", value: "٢٤ ساعة", color: "from-blue-600 to-cyan-600" },
    { icon: Users, label: "عروض شهرية", value: "٣٠+", color: "from-amber-600 to-orange-600" },
    { icon: Shield, label: "ضمان", value: "استعادة الحقوق", color: "from-green-600 to-emerald-600" },
  ];

  // متغيرات الحركة
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden"
    >
      {/* رأس النموذج مع شريط التقدم */}
      <div className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 p-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
        />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">طلب عرض سعر</h2>
              <p className="text-white/90 text-sm max-w-xl">
                املأ المعلومات وسيتم إرسالها مباشرة إلى فريق العمل للمراجعة
              </p>
            </div>
            <FileText className="w-10 h-10 text-yellow-300" />
          </div>

          {/* خطوات التقدم */}
          <div className="flex items-center gap-2 mb-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step === currentStep 
                    ? 'bg-white text-violet-600 shadow-lg' 
                    : step < currentStep 
                      ? 'bg-white/30 text-white' 
                      : 'bg-white/20 text-white/70'
                }`}>
                  {step < currentStep ? <CheckCircle2 className="w-4 h-4" /> : step}
                </div>
                {step < 3 && (
                  <div className={`w-12 h-1 mx-1 rounded-full transition-all ${
                    step < currentStep ? 'bg-white' : 'bg-white/20'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* شريط التقدم */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>اكتمال النموذج</span>
              <span>{Math.round(formProgress)}%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${formProgress}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-white rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* النموذج */}
      <div className="p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* معلومات المشروع */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
              <Rocket className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              تفاصيل المشروع
            </h3>
          </div>

          {/* نوع المشروع */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <Target className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              نوع المشروع
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-gray-900 dark:text-white"
            >
              {serviceOptions.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.icon} {opt.value}
                </option>
              ))}
            </select>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {serviceOptions.find(opt => opt.value === service)?.desc}
            </p>
          </motion.div>

          {/* الميزانية */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <DollarSign className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              الميزانية التقريبية
            </label>
            <input
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="مثال: ٥٠٠٠ - ١٠٠٠٠ جنيه"
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-gray-900 dark:text-white"
            />
          </motion.div>

          {/* المدة المتوقعة */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <Clock className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              المدة المتوقعة
            </label>
            <div className="grid grid-cols-2 gap-2">
              {timelineOptions.map(opt => (
                <motion.button
                  key={opt.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setTimeline(opt.value)}
                  className={`p-3 rounded-xl text-xs font-medium transition-all ${
                    timeline === opt.value
                      ? `bg-gradient-to-r ${opt.color} text-white shadow-lg`
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  <div className="text-lg">{opt.icon}</div>
                  <div>{opt.value}</div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* رابط مثال */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <Link2 className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              رابط مثال/منافس (اختياري)
            </label>
            <input
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              placeholder="https://example.com"
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-gray-900 dark:text-white"
            />
          </motion.div>

          {/* معلومات التواصل */}
          <div className="lg:col-span-2 mt-4">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
              <Users className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              معلومات التواصل
            </h3>
          </div>

          {/* الاسم */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <Users className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              الاسم بالكامل
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="أدخل اسمك"
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-gray-900 dark:text-white"
            />
          </motion.div>

          {/* رقم الهاتف */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <MessageCircle className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              رقم الهاتف
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="٠١٢٣٤٥٦٧٨٩٠"
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-gray-900 dark:text-white"
            />
          </motion.div>

          {/* البريد الإلكتروني */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <TrendingUp className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              البريد الإلكتروني (اختياري)
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@domain.com"
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-gray-900 dark:text-white"
            />
          </motion.div>

          {/* الشركة */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <Users className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              اسم الشركة (اختياري)
            </label>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="اسم شركتك"
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-gray-900 dark:text-white"
            />
          </motion.div>

          {/* تفاصيل إضافية */}
          <div className="lg:col-span-2 space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <MessageCircle className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              تفاصيل إضافية
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              placeholder="اكتب الفكرة والصفحات المطلوبة والميزات التي تريدها..."
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* معاينة الرسالة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showPreview ? "إخفاء المعاينة" : "عرض المعاينة"}
            </button>
            <div className="flex gap-2">
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <Copy className="w-3 h-3" />
                {copied ? "تم النسخ!" : "نسخ"}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {showPreview && (
              <motion.pre
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="whitespace-pre-wrap rounded-2xl bg-gray-50 dark:bg-gray-900 p-4 text-xs text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 font-sans leading-relaxed"
              >
                {msg}
              </motion.pre>
            )}
          </AnimatePresence>
        </motion.div>

        {/* أزرار الإجراءات */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex flex-wrap gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={sendWhatsApp}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Send className="w-5 h-5" />
            إرسال على واتساب
          </motion.button>

          <Link href="/brief" className="flex-1">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
            >
              <FileText className="w-5 h-5" />
              فتح نموذج Brief
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={resetForm}
            className="px-6 py-4 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
          >
            مسح
          </motion.button>
        </motion.div>

        {/* إحصائيات سريعة */}
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
                delayChildren: 0.5,
              },
            },
          }}
          className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all"
            >
              <div className={`w-8 h-8 mx-auto mb-1 rounded-lg bg-gradient-to-br ${stat.color} p-1.5 text-white`}>
                <stat.icon className="w-full h-full" />
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              <div className="text-sm font-bold text-gray-900 dark:text-white">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ملاحظات إضافية */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400"
        >
          <HelpCircle className="w-4 h-4 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
          <span>
            سيتم إرسال هذه البيانات عبر واتساب. تأكد من صحة المعلومات قبل الإرسال. يمكنك أيضاً نسخ النص واستخدامه في أي وقت.
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
