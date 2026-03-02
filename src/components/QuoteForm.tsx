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
  HelpCircle
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

  // حساب تقدم النموذج
  useEffect(() => {
    const fields = [service, budget, timeline, notes, name, phone];
    const filledFields = fields.filter(f => f && f.trim() !== "").length;
    const progress = (filledFields / fields.length) * 100;
    setFormProgress(progress);
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
      "✨ تم إرسال هذا الطلب عبر موقع Kodia",
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
    { value: "موقع تعريفي", icon: "🌐", desc: "موقع بسيط للتعريف بالشركة" },
    { value: "موقع شركة متقدم", icon: "🏢", desc: "موقع متكامل مع صفحات متعددة" },
    { value: "متجر إلكتروني", icon: "🛒", desc: "متجر لبيع المنتجات أونلاين" },
    { value: "تطبيق موبايل", icon: "📱", desc: "تطبيق للهواتف الذكية" },
    { value: "UI/UX فقط", icon: "🎨", desc: "تصميم واجهات وتجربة مستخدم" },
    { value: "SEO", icon: "🚀", desc: "تحسين محركات البحث" },
  ];

  // خيارات المدة
  const timelineOptions = [
    { value: "خلال أسبوع", icon: "⚡", desc: "مشروع سريع" },
    { value: "خلال أسبوعين", icon: "📅", desc: "مشروع متوسط" },
    { value: "خلال شهر", icon: "📆", desc: "مشروع كبير" },
    { value: "حسب الاتفاق", icon: "🤝", desc: "مشروع مخصص" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden"
    >
      {/* رأس النموذج مع شريط التقدم */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">طلب عرض سعر</h2>
            <p className="text-white/90 text-sm">
              املأ المعلومات وسيتم إرسالها مباشرة إلى فريق العمل
            </p>
          </div>
          <FileText className="w-8 h-8 text-yellow-300" />
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

      {/* النموذج */}
      <div className="p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* معلومات المشروع */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-blue-600" />
              تفاصيل المشروع
            </h3>
          </div>

          {/* نوع المشروع */}
          <div className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <Target className="w-4 h-4" />
              نوع المشروع
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              {serviceOptions.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.icon} {opt.value}
                </option>
              ))}
            </select>
            <p className="text-xs text-gray-500">
              {serviceOptions.find(opt => opt.value === service)?.desc}
            </p>
          </div>

          {/* الميزانية */}
          <div className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <DollarSign className="w-4 h-4" />
              الميزانية التقريبية
            </label>
            <input
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="مثال: 5000 - 10000 جنيه"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            />
          </div>

          {/* المدة المتوقعة */}
          <div className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <Clock className="w-4 h-4" />
              المدة المتوقعة
            </label>
            <div className="grid grid-cols-2 gap-2">
              {timelineOptions.map(opt => (
                <motion.button
                  key={opt.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setTimeline(opt.value)}
                  className={`p-2 rounded-xl text-xs font-medium transition-all ${
                    timeline === opt.value
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <div>{opt.icon}</div>
                  <div>{opt.value}</div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* رابط مثال */}
          <div className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <Link2 className="w-4 h-4" />
              رابط مثال/منافس (اختياري)
            </label>
            <input
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              placeholder="https://example.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            />
          </div>

          {/* معلومات التواصل */}
          <div className="lg:col-span-2 mt-4">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              معلومات التواصل
            </h3>
          </div>

          {/* الاسم */}
          <div className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <Users className="w-4 h-4" />
              الاسم بالكامل
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="أدخل اسمك"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            />
          </div>

          {/* رقم الهاتف */}
          <div className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <MessageCircle className="w-4 h-4" />
              رقم الهاتف
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="٠١٢٣٤٥٦٧٨٩٠"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            />
          </div>

          {/* البريد الإلكتروني */}
          <div className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <TrendingUp className="w-4 h-4" />
              البريد الإلكتروني (اختياري)
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@domain.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            />
          </div>

          {/* الشركة */}
          <div className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <Users className="w-4 h-4" />
              اسم الشركة (اختياري)
            </label>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="اسم شركتك"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            />
          </div>

          {/* تفاصيل إضافية */}
          <div className="lg:col-span-2 space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <MessageCircle className="w-4 h-4" />
              تفاصيل إضافية
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              placeholder="اكتب الفكرة والصفحات المطلوبة والميزات التي تريدها..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
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
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showPreview ? "إخفاء المعاينة" : "عرض المعاينة"}
            </button>
            <div className="flex gap-2">
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-lg text-xs text-gray-600 hover:bg-gray-200 transition-colors"
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
                className="whitespace-pre-wrap rounded-2xl bg-gray-50 p-4 text-xs text-gray-700 border border-gray-200 font-sans leading-relaxed"
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
          <button
            onClick={sendWhatsApp}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <Send className="w-5 h-5" />
            إرسال على واتساب
          </button>

          <Link
            href="/brief"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
          >
            <FileText className="w-5 h-5" />
            فتح نموذج Brief
          </Link>

          <button
            onClick={resetForm}
            className="px-6 py-4 border border-gray-200 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-all"
          >
            مسح
          </button>
        </motion.div>

        {/* إحصائيات سريعة */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {[
            { icon: Sparkles, label: "خدمات", value: serviceOptions.length },
            { icon: Clock, label: "وقت الرد", value: "٢٤ ساعة" },
            { icon: Users, label: "عروض شهرية", value: "٣٠+" },
            { icon: Shield, label: "ضمان", value: "استعادة الحقوق" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
              <stat.icon className="w-4 h-4 text-blue-600 mx-auto mb-1" />
              <div className="text-xs text-gray-500">{stat.label}</div>
              <div className="text-sm font-bold text-gray-900">{stat.value}</div>
            </div>
          ))}
        </motion.div>

        {/* ملاحظات إضافية */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 flex items-start gap-2 text-xs text-gray-500"
        >
          <HelpCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <span>
            سيتم إرسال هذه البيانات عبر واتساب. تأكد من صحة المعلومات قبل الإرسال. يمكنك أيضاً نسخ النص واستخدامه في أي وقت.
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}