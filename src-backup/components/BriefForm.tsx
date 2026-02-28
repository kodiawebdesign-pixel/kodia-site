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
  Rocket,
  Zap,
  Shield,
  Award,
  Clock,
  Star,
  Heart,
  Code2,
  Smartphone,
  ShoppingCart,
  TrendingUp
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
  const [service, setService] = useState("");
  const [showPreview, setShowPreview] = useState(true);
  const [copied, setCopied] = useState(false);
  const [formProgress, setFormProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  // حساب تقدم النموذج
  useEffect(() => {
    const fields = [goal, audience, pages, colors, examples, notes, name, phone, email, service];
    const filledFields = fields.filter(f => f.trim() !== "").length;
    const progress = (filledFields / fields.length) * 100;
    setFormProgress(progress);

    // تحديث الخطوة الحالية
    if (name && phone && email) setCurrentStep(2);
    if (goal && audience && service) setCurrentStep(3);
    if (pages && colors) setCurrentStep(3);
  }, [goal, audience, pages, colors, examples, notes, name, phone, email, service]);

  const msg = useMemo(() => {
    const lines = [
      "🚀 *طلب Brief جديد من Kodia*",
      "",
      "👋 *معلومات أساسية:*",
      name ? `👤 الاسم: ${name}` : "",
      phone ? `📞 الهاتف: ${phone}` : "",
      email ? `✉️ البريد: ${email}` : "",
      service ? `🛠️ الخدمة المطلوبة: ${service}` : "",
      budget ? `💰 الميزانية: ${budget}` : "",
      timeline ? `⏱️ المدة المتوقعة: ${timeline}` : "",
      "",
      "🎯 *تفاصيل المشروع:*",
      goal ? `• الهدف من المشروع: ${goal}` : "",
      audience ? `• الجمهور المستهدف: ${audience}` : "",
      pages ? `• الصفحات المطلوبة: ${pages}` : "",
      colors ? `• الألوان/الستايل المفضل: ${colors}` : "",
      examples ? `• أمثلة/مراجع: ${examples}` : "",
      notes ? `• ملاحظات إضافية: ${notes}` : "",
      "",
      "✨ تم إرسال هذا الـ Brief عبر موقع Kodia Web Design",
      "📱 للتواصل السريع: واتساب"
    ].filter(Boolean);
    return lines.join("\n");
  }, [goal, audience, pages, colors, examples, notes, name, phone, email, budget, timeline, service]);

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
      setService("");
    }
  };

  // متغيرات الحركة
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
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
              <h2 className="text-2xl font-bold mb-2">نموذج Brief المشروع</h2>
              <p className="text-white/90 text-sm max-w-xl">
                املأ المعلومات وسيتم إرسالها مباشرة إلى فريق العمل للمراجعة والتقييم
              </p>
            </div>
            <Sparkles className="w-10 h-10 text-yellow-300" />
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
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="grid gap-6 lg:grid-cols-2"
        >
          {/* معلومات أساسية */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
              <Rocket className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              المعلومات الأساسية
            </h3>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <Users className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              الاسم بالكامل <span className="text-red-500">*</span>
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="أدخل اسمك الكامل"
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <MessageCircle className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              رقم الهاتف <span className="text-red-500">*</span>
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="٠١٢٣٤٥٦٧٨٩٠"
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <FileText className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              البريد الإلكتروني <span className="text-red-500">*</span>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@domain.com"
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <Code2 className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              نوع الخدمة المطلوبة
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
            >
              <option value="">اختر الخدمة</option>
              <option value="تصميم موقع شركة">تصميم موقع شركة</option>
              <option value="متجر إلكتروني">متجر إلكتروني</option>
              <option value="تطبيق موبايل">تطبيق موبايل</option>
              <option value="تصميم UI/UX">تصميم UI/UX</option>
              <option value="تحسين SEO">تحسين محركات البحث SEO</option>
              <option value="دعم فني">دعم فني وصيانة</option>
            </select>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <Target className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              الميزانية التقريبية
            </label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
            >
              <option value="">اختر الميزانية</option>
              <option value="أقل من ٥٠٠٠ جنيه">أقل من ٥٠٠٠ جنيه</option>
              <option value="٥٠٠٠ - ١٠٠٠٠ جنيه">٥٠٠٠ - ١٠٠٠٠ جنيه</option>
              <option value="١٠٠٠٠ - ٢٠٠٠٠ جنيه">١٠٠٠٠ - ٢٠٠٠٠ جنيه</option>
              <option value="٢٠٠٠٠ - ٣٠٠٠٠ جنيه">٢٠٠٠٠ - ٣٠٠٠٠ جنيه</option>
              <option value="أكثر من ٣٠٠٠٠ جنيه">أكثر من ٣٠٠٠٠ جنيه</option>
            </select>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <Clock className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              المدة المتوقعة
            </label>
            <select
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
            >
              <option value="">اختر المدة</option>
              <option value="أقل من أسبوع">أقل من أسبوع</option>
              <option value="١ - ٢ أسبوع">١ - ٢ أسبوع</option>
              <option value="٢ - ٤ أسابيع">٢ - ٤ أسابيع</option>
              <option value="شهر - شهرين">شهر - شهرين</option>
              <option value="أكثر من شهرين">أكثر من شهرين</option>
            </select>
          </motion.div>

          {/* تفاصيل المشروع */}
          <motion.div variants={fadeInUp} className="lg:col-span-2 mt-4">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
              <Target className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              تفاصيل المشروع
            </h3>
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <Target className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              ما هو الهدف الرئيسي من المشروع؟
            </label>
            <input
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="مثال: زيادة المبيعات، جذب عملاء جدد، تحسين الوعي بالعلامة التجارية"
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <Users className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              من هو الجمهور المستهدف؟
            </label>
            <input
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              placeholder="مثال: شركات ناشئة، أفراد من ٢٥-٤٠ سنة، شركات عقارية"
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <FileText className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              الصفحات المطلوبة (افصل بينها بفواصل)
            </label>
            <input
              value={pages}
              onChange={(e) => setPages(e.target.value)}
              placeholder="الرئيسية, خدماتنا, أعمالنا, اتصل بنا"
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <Palette className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              الألوان والستايل المفضل
            </label>
            <input
              value={colors}
              onChange={(e) => setColors(e.target.value)}
              placeholder="مثال: ألوان داكنة، تصميم عصري، ألوان شركتك"
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <Link2 className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              أمثلة لمواقع أو تطبيقات تعجبك
            </label>
            <input
              value={examples}
              onChange={(e) => setExamples(e.target.value)}
              placeholder="روابط مواقع أو تطبيقات (اختياري)"
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <MessageCircle className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              ملاحظات إضافية (اختياري)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              placeholder="أي تفاصيل مهمة عن المشروع تود إضافتها..."
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
            />
          </motion.div>
        </motion.div>

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
            إرسال الـ Brief على واتساب
          </motion.button>

          <Link href="/quote" className="flex-1">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              طلب عرض سعر سريع
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

        {/* ملاحظات إضافية */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400"
        >
          <HelpCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-violet-600 dark:text-violet-400" />
          <span>
            سيتم إرسال هذه البيانات عبر واتساب. تأكد من صحة المعلومات قبل الإرسال. يمكنك أيضاً نسخ النص واستخدامه في أي وقت.
          </span>
        </motion.div>

        {/* شارة الأمان */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500"
        >
          <Shield className="w-3 h-3" />
          <span>بياناتك آمنة ومشفرة • لن نشاركها مع أي طرف ثالث</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
