"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/siteData";
import { 
  Send, 
  Calculator, 
  DollarSign, 
  Globe, 
  Layers, 
  Settings,
  MessageCircle,
  Info,
  ChevronDown,
  ChevronUp,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  Award,
  Heart,
  Target
} from "lucide-react";

type ProjectType = "موقع" | "متجر" | "تطبيق";

// خيارات إضافية - محدثة
const features = [
  { id: "seo", label: "تحسين محركات البحث (SEO)", price: { min: 800, max: 1500 }, icon: TrendingUp, color: "from-violet-600 to-fuchsia-600" },
  { id: "analytics", label: "Google Analytics", price: { min: 500, max: 1000 }, icon: Target, color: "from-blue-600 to-cyan-600" },
  { id: "cms", label: "نظام إدارة محتوى متقدم", price: { min: 2000, max: 4000 }, icon: Settings, color: "from-emerald-600 to-teal-600" },
  { id: "payment", label: "ربط بوابات دفع", price: { min: 1500, max: 3000 }, icon: DollarSign, color: "from-amber-600 to-orange-600" },
  { id: "chat", label: "نظام محادثة مباشرة", price: { min: 1000, max: 2000 }, icon: MessageCircle, color: "from-purple-600 to-pink-600" },
  { id: "multilingual", label: "دعم لغات متعددة", price: { min: 1500, max: 2500 }, icon: Globe, color: "from-indigo-600 to-violet-600" },
];

// إحصائيات المدة حسب نوع المشروع
const durationMap = {
  "موقع": "٧-١٤ يوم",
  "متجر": "١٤-٢١ يوم",
  "تطبيق": "٢١-٣٠ يوم",
};

export default function PriceEstimator() {
  const [type, setType] = useState<ProjectType>("موقع");
  const [pages, setPages] = useState(5);
  const [lang, setLang] = useState("عربي");
  const [hasAdmin, setHasAdmin] = useState(false);
  const [notes, setNotes] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  const [animateValue, setAnimateValue] = useState({ min: 0, max: 0 });

  // حساب السعر
  const calc = useMemo(() => {
    // القواعد الأساسية
    let baseMin = type === "موقع" ? 2500 : type === "متجر" ? 4500 : 7000;
    let baseMax = type === "موقع" ? 6000 : type === "متجر" ? 12000 : 20000;

    // صفحات إضافية
    const extraPages = Math.max(0, pages - 5);
    baseMin += extraPages * 250;
    baseMax += extraPages * 450;

    // اللغات
    if (lang === "عربي + إنجليزي") {
      baseMin += 800;
      baseMax += 1500;
    }

    // لوحة تحكم
    if (hasAdmin) {
      baseMin += 1500;
      baseMax += 3500;
    }

    // المميزات الإضافية
    selectedFeatures.forEach(featureId => {
      const feature = features.find(f => f.id === featureId);
      if (feature) {
        baseMin += feature.price.min;
        baseMax += feature.price.max;
      }
    });

    return { min: baseMin, max: baseMax };
  }, [type, pages, lang, hasAdmin, selectedFeatures]);

  // تأثير العداد المتحرك
  useEffect(() => {
    setAnimateValue(calc);
  }, [calc]);

  const msg = useMemo(() => {
    return [
      "🚀 *طلب تقدير سعر من Kodia*",
      "",
      "📋 *تفاصيل المشروع:*",
      `• النوع: ${type}`,
      `• عدد الصفحات/الشاشات: ${pages}`,
      `• اللغة: ${lang}`,
      `• لوحة تحكم/إدارة: ${hasAdmin ? "نعم" : "لا"}`,
      selectedFeatures.length > 0 ? `• مميزات إضافية: ${selectedFeatures.length}` : "",
      "",
      "💰 *التقدير المبدئي:*",
      `• من ${calc.min.toLocaleString()} إلى ${calc.max.toLocaleString()} جنيه`,
      "",
      notes ? `📝 *ملاحظات:*\n${notes}` : "",
      "",
      "👤 *معلومات التواصل:*",
      "الاسم: …",
      "رقم الهاتف: …",
      "البريد الإلكتروني: …",
    ]
      .filter(Boolean)
      .join("\n");
  }, [type, pages, lang, hasAdmin, selectedFeatures, calc, notes]);

  const waUrl = `${siteData.brand.whatsappLink}?text=${encodeURIComponent(msg)}`;

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev =>
      prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  // نسبة التقدم
  const progressPercentage = useMemo(() => {
    const totalFeatures = 6;
    const baseProgress = 20; // النوع + الصفحات + اللغة + لوحة التحكم
    const featuresProgress = (selectedFeatures.length / totalFeatures) * 40;
    return Math.min(baseProgress + featuresProgress + (notes ? 10 : 0), 100);
  }, [type, pages, lang, hasAdmin, selectedFeatures, notes]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden"
    >
      {/* رأس الحاسبة */}
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
              <h2 className="text-2xl font-bold mb-2">حاسبة السعر التقديرية</h2>
              <p className="text-white/90 text-sm">
                حرك المؤشرات واختر الخيارات المناسبة لمشروعك
              </p>
            </div>
            <Calculator className="w-10 h-10 text-yellow-300" />
          </div>

          {/* شريط التقدم */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>اكتمال التقدير</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-white rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* محتوى الحاسبة */}
      <div className="p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* العمود الأيمن - الخيارات الأساسية */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2 text-gray-900 dark:text-white">
              <Settings className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              الخيارات الأساسية
            </h3>

            {/* نوع المشروع */}
            <div className="space-y-2">
              <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                <Globe className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                نوع المشروع
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["موقع", "متجر", "تطبيق"].map((option) => (
                  <motion.button
                    key={option}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setType(option as ProjectType)}
                    className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all ${
                      type === option
                        ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* عدد الصفحات */}
            <div className="space-y-2">
              <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                <Layers className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                عدد الصفحات/الشاشات
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={pages}
                  onChange={(e) => setPages(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-violet-600"
                />
                <span className="w-12 text-center font-bold text-violet-600 dark:text-violet-400">{pages}</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>١</span>
                <span>٥</span>
                <span>١٠</span>
                <span>١٥</span>
                <span>٢٠</span>
              </div>
            </div>

            {/* اللغة */}
            <div className="space-y-2">
              <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                <Globe className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                اللغة
              </label>
              <select
                className="w-full px-4 py-2.5 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-gray-900 dark:text-white"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
              >
                <option>عربي</option>
                <option>عربي + إنجليزي</option>
              </select>
            </div>

            {/* لوحة تحكم */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <input
                id="admin"
                type="checkbox"
                checked={hasAdmin}
                onChange={(e) => setHasAdmin(e.target.checked)}
                className="w-4 h-4 text-violet-600 bg-white border-gray-300 rounded focus:ring-violet-500"
              />
              <label htmlFor="admin" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                هل يوجد لوحة تحكم/إدارة؟
              </label>
            </div>
          </div>

          {/* العمود الأيسر - المميزات الإضافية */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2 text-gray-900 dark:text-white">
              <Sparkles className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              مميزات إضافية
            </h3>

            <div className="space-y-2">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  whileHover={{ x: 2 }}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer"
                  onClick={() => toggleFeature(feature.id)}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                      selectedFeatures.includes(feature.id)
                        ? "bg-violet-600 border-violet-600"
                        : "border-gray-300 dark:border-gray-500"
                    }`}>
                      {selectedFeatures.includes(feature.id) && (
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <feature.icon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature.label}</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    +{feature.price.min.toLocaleString()} - {feature.price.max.toLocaleString()} ج.م
                  </span>
                </motion.div>
              ))}
            </div>

            {/* ملاحظات إضافية */}
            <div className="space-y-2">
              <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                <MessageCircle className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                ملاحظات إضافية
              </label>
              <textarea
                className="w-full min-h-[100px] px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-gray-900 dark:text-white"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="مثال: عندي خدمات كذا.. محتاج صفحة كذا.."
              />
            </div>
          </div>
        </div>

        {/* عرض السعر */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 p-6 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 rounded-2xl border border-violet-100 dark:border-violet-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">التقدير المبدئي</p>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                {calc.min.toLocaleString()} - {calc.max.toLocaleString()} ج.م
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                * هذا تقدير مبدئي، قد يختلف السعر النهائي حسب المتطلبات
              </p>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <Send className="w-5 h-5" />
              إرسال التقدير على واتساب
            </a>
          </div>
        </motion.div>

        {/* إحصائيات سريعة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: TrendingUp, label: "نوع المشروع", value: type, color: "from-violet-600 to-fuchsia-600" },
            { icon: Layers, label: "عدد الصفحات", value: pages, color: "from-blue-600 to-cyan-600" },
            { icon: Sparkles, label: "مميزات إضافية", value: selectedFeatures.length, color: "from-amber-600 to-orange-600" },
            { icon: Clock, label: "مدة التنفيذ", value: durationMap[type], color: "from-green-600 to-emerald-600" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
            >
              <div className={`w-8 h-8 mx-auto mb-1 rounded-lg bg-gradient-to-br ${stat.color} p-1.5 text-white`}>
                <stat.icon className="w-full h-full" />
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              <div className="text-sm font-bold text-gray-900 dark:text-white">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* زر عرض التفاصيل */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors mx-auto"
        >
          <span>{showDetails ? "إخفاء التفاصيل" : "عرض التفاصيل"}</span>
          {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {/* تفاصيل الحساب */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <pre className="mt-4 whitespace-pre-wrap rounded-2xl bg-gray-50 dark:bg-gray-700 p-4 text-xs text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 font-sans leading-relaxed">
                {msg}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ضمان الدقة */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400"
        >
          <Shield className="w-4 h-4 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
          <span>
            هذا التقدير للمساعدة فقط. للحصول على عرض سعر دقيق، يرجى التواصل معنا مباشرة أو إرسال نموذج Brief.
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
