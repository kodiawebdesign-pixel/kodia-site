"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/siteData";
import { 
  Send, 
  Target, 
  Users, 
  FileText, 
  Palette, 
  Link2, 
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowLeft,
  Copy,
  Download,
  Eye,
  EyeOff,
  HelpCircle,
  Rocket
} from "lucide-react";
import Link from "next/link";

export default function BriefForm() {
  const [goal, setGoal] = useState("");
  const [audience, setAudience] = useState("");
  const [pages, setPages] = useState("الرئيسية, خدماتنا, أعمالنا, اتصل بنا");
  const [colors, setColors] = useState("");
  const [examples, setExamples] = useState("");
  const [notes, setNotes] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [showPreview, setShowPreview] = useState(true);
  const [copied, setCopied] = useState(false);
  const [formProgress, setFormProgress] = useState(0);

  // حساب تقدم النموذج
  useEffect(() => {
    const fields = [goal, audience, pages, colors, examples, notes, name, phone, email];
    const filledFields = fields.filter(f => f.trim() !== "").length;
    const progress = (filledFields / fields.length) * 100;
    setFormProgress(progress);
  }, [goal, audience, pages, colors, examples, notes, name, phone, email]);

  const msg = useMemo(() => {
    const lines = [
      "🚀 *طلب Brief جديد من Kodia*",
      "",
      "👋 *معلومات أساسية:*",
      name ? `👤 الاسم: ${name}` : "",
      phone ? `📞 الهاتف: ${phone}` : "",
      email ? `✉️ البريد: ${email}` : "",
      budget ? `💰 الميزانية: ${budget}` : "",
      timeline ? `⏱️ المدة المتوقعة: ${timeline}` : "",
      "",
      "🎯 *تفاصيل المشروع:*",
      goal ? `• الهدف: ${goal}` : "",
      audience ? `• الجمهور: ${audience}` : "",
      pages ? `• الصفحات: ${pages}` : "",
      colors ? `• الألوان/الستايل: ${colors}` : "",
      examples ? `• أمثلة/مراجع: ${examples}` : "",
      notes ? `• ملاحظات إضافية: ${notes}` : "",
      "",
      "✨ تم إرسال هذا الـ Brief عبر موقع Kodia",
    ].filter(Boolean);
    return lines.join("\n");
  }, [goal, audience, pages, colors, examples, notes, name, phone, email, budget, timeline]);

  const sendWhatsApp = () => {
    const url = `${siteData.brand.whatsappLink}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetForm = () => {
    if (confirm("هل أنت متأكد من مسح جميع البيانات؟")) {
      setGoal("");
      setAudience("");
      setPages("الرئيسية, خدماتنا, أعمالنا, اتصل بنا");
      setColors("");
      setExamples("");
      setNotes("");
      setName("");
      setPhone("");
      setEmail("");
      setBudget("");
      setTimeline("");
    }
  };

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
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden"
    >
      {/* رأس النموذج مع شريط التقدم */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">نموذج Brief المشروع</h2>
            <p className="text-white/90 text-sm">
              املأ المعلومات وسيتم إرسالها مباشرة إلى فريق العمل
            </p>
          </div>
          <Sparkles className="w-8 h-8 text-yellow-300" />
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
          {/* معلومات أساسية */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-blue-600" />
              المعلومات الأساسية
            </h3>
          </div>

          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <Users className="w-4 h-4" />
              الاسم بالكامل
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="أدخل اسمك الكامل"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <MessageCircle className="w-4 h-4" />
              رقم الهاتف
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="٠١٢٣٤٥٦٧٨٩٠"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <FileText className="w-4 h-4" />
              البريد الإلكتروني
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@domain.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <Target className="w-4 h-4" />
              الميزانية التقريبية
            </label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
            >
              <option value="">اختر الميزانية</option>
              <option value="أقل من ٥٠٠٠ جنيه">أقل من ٥٠٠٠ جنيه</option>
              <option value="٥٠٠٠ - ١٠٠٠٠ جنيه">٥٠٠٠ - ١٠٠٠٠ جنيه</option>
              <option value="١٠٠٠٠ - ٢٠٠٠٠ جنيه">١٠٠٠٠ - ٢٠٠٠٠ جنيه</option>
              <option value="أكثر من ٢٠٠٠٠ جنيه">أكثر من ٢٠٠٠٠ جنيه</option>
            </select>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <AlertCircle className="w-4 h-4" />
              المدة المتوقعة
            </label>
            <select
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
            >
              <option value="">اختر المدة</option>
              <option value="أقل من أسبوع">أقل من أسبوع</option>
              <option value="١ - ٢ أسبوع">١ - ٢ أسبوع</option>
              <option value="٢ - ٤ أسابيع">٢ - ٤ أسابيع</option>
              <option value="شهر أو أكثر">شهر أو أكثر</option>
            </select>
          </motion.div>

          {/* تفاصيل المشروع */}
          <div className="lg:col-span-2 mt-4">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              تفاصيل المشروع
            </h3>
          </div>

          <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <Target className="w-4 h-4" />
              هدف المشروع
            </label>
            <input
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="مثال: جذب عملاء لخدمة تصميم المواقع"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <Users className="w-4 h-4" />
              الجمهور المستهدف
            </label>
            <input
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              placeholder="مثال: شركات ناشئة داخل مصر"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <FileText className="w-4 h-4" />
              الصفحات المطلوبة
            </label>
            <input
              value={pages}
              onChange={(e) => setPages(e.target.value)}
              placeholder="الرئيسية, خدماتنا, أعمالنا, اتصل بنا"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <Palette className="w-4 h-4" />
              الألوان/الستايل
            </label>
            <input
              value={colors}
              onChange={(e) => setColors(e.target.value)}
              placeholder="مثال: ألوان كحلي/أبيض"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <Link2 className="w-4 h-4" />
              أمثلة تعجبك
            </label>
            <input
              value={examples}
              onChange={(e) => setExamples(e.target.value)}
              placeholder="روابط مواقع أو تطبيقات"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <MessageCircle className="w-4 h-4" />
              ملاحظات إضافية
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              placeholder="أي تفاصيل مهمة عن المشروع..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
            />
          </motion.div>
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
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <Send className="w-5 h-5" />
            إرسال الـ Brief على واتساب
          </button>

          <Link
            href="/quote"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            طلب عرض سعر سريع
          </Link>

          <button
            onClick={resetForm}
            className="px-6 py-4 border border-gray-200 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-all"
          >
            مسح
          </button>
        </motion.div>

        {/* ملاحظات إضافية */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 flex items-start gap-2 text-xs text-gray-500"
        >
          <HelpCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>
            سيتم إرسال هذه البيانات عبر واتساب. تأكد من صحة المعلومات قبل الإرسال. يمكنك أيضاً نسخ النص واستخدامه في أي وقت.
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}