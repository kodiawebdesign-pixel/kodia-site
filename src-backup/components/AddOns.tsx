"use client";

import { motion } from "framer-motion";
import { 
  Globe,
  Server,
  Mail,
  Shield,
  BarChart3,
  Instagram,
  FileText,
  Zap,
  ShoppingCart,
  Users,
  CreditCard,
  Headphones,
  Sparkles,
  CheckCircle2,
  Star,
  Clock,
  Gift,
  Rocket,
  Award,
  Heart,
  Target,
  Settings,
  Wifi,
  Lock,
  TrendingUp,
  Camera
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";
import Link from "next/link";

// توسيع بيانات الخدمات الإضافية مع أيقونات وتفاصيل
const addonsData = siteData.home.addons;

// خريطة الأيقونات لكل خدمة إضافية - محدثة
const iconMap: Record<string, any> = {
  "تسجيل دومين .com .eg": Globe,
  "استضافة سريعة وآمنة": Server,
  "بريد احترافي باسم الدومين": Mail,
  "شهادة SSL مجانية": Shield,
  "Google Analytics": BarChart3,
  "صفحات سوشيال ميديا": Instagram,
  "لاندينج بيج للحملات": FileText,
  "تحسين سرعة متقدم": Zap,
  "حجز دومين + إعداد استضافة": Globe,
  "إعداد بريد رسمي باسم الدومين": Mail,
  "ربط Google Analytics + Search Console": BarChart3,
  "إعداد صفحات سوشيال أساسية (اختياري)": Instagram,
  "Landing Page للحملات الإعلانية": FileText,
  "تحسين سرعة + ضغط الصور": Zap,
  "خدمات تحسين محركات بحث": TrendingUp,
  "تصوير منتجات احترافي": Camera,
  "إعداد شبكات التواصل": Users,
  "حماية إضافية": Lock,
  "دعم فني مميز": Headphones,
};

// ألوان متدرجة لكل خدمة - محدثة بالبنفسجي
const gradientColors = [
  "from-violet-600 to-fuchsia-600",
  "from-fuchsia-600 to-pink-600",
  "from-blue-600 to-cyan-600",
  "from-emerald-600 to-teal-600",
  "from-amber-600 to-orange-600",
  "from-purple-600 to-pink-600",
  "from-indigo-600 to-violet-600",
  "from-green-600 to-emerald-600",
  "from-rose-600 to-red-600",
  "from-sky-600 to-indigo-600",
  "from-violet-600 to-purple-600",
  "from-fuchsia-600 to-rose-600",
  "from-amber-600 to-yellow-600",
  "from-lime-600 to-green-600",
];

// الأسعار التقديرية للخدمات الإضافية - محدثة
const priceEstimates = [
  "٣٠٠-٥٠٠ جنيه",
  "٨٠٠-١٥٠٠ جنيه/سنة",
  "٥٠٠-٨٠٠ جنيه",
  "مجاناً",
  "مجاناً",
  "١٠٠٠-٢٠٠٠ جنيه",
  "١٥٠٠-٢٥٠٠ جنيه",
  "١٠٠٠-١٥٠٠ جنيه",
  "٤٠٠-٦٠٠ جنيه",
  "٥٠٠-٨٠٠ جنيه",
  "مجاناً",
  "١٠٠٠-١٥٠٠ جنيه",
  "١٥٠٠-٢٥٠٠ جنيه",
  "٨٠٠-١٢٠٠ جنيه",
  "٢٠٠٠-٣٠٠٠ جنيه",
  "١٠٠٠-١٥٠٠ جنيه",
  "٨٠٠-١٢٠٠ جنيه",
  "٥٠٠-٨٠٠ جنيه",
  "١٠٠٠-٢٠٠٠ جنيه",
];

// مدة التنفيذ لكل خدمة - محدثة
const deliveryTime = [
  "نفس اليوم",
  "٢٤ ساعة",
  "٢٤ ساعة",
  "فوري",
  "ساعة واحدة",
  "٣-٥ أيام",
  "٢-٣ أيام",
  "يوم واحد",
  "نفس اليوم",
  "٢٤ ساعة",
  "فوري",
  "٣-٥ أيام",
  "٢-٣ أيام",
  "يوم واحد",
  "٣-٧ أيام",
  "٢-٣ أيام",
  "٢-٤ أيام",
  "٢٤ ساعة",
  "٢٤ ساعة",
];

// مميزات كل خدمة - محدثة
const addonFeatures: Record<string, string[]> = {
  "تسجيل دومين .com .eg": ["لمدة عام", "تحكم كامل", "تجديد تلقائي", "إدارة DNS"],
  "استضافة سريعة وآمنة": ["مساحة ١٠ جيجا", "نطاق ترددي غير محدود", "نسخ احتياطي", "دعم فني"],
  "بريد احترافي باسم الدومين": ["5 حسابات", "مساحة ٢ جيجا لكل حساب", "حماية من السبام", "Webmail"],
  "شهادة SSL مجانية": ["تأمين البيانات", "تحسين SEO", "ثقة العملاء", "قفل في المتصفح"],
  "Google Analytics": ["تقارير متقدمة", "تتبع السلوك", "تحليل الجمهور", "أهداف وتحويلات"],
  "صفحات سوشيال ميديا": ["تصميم احترافي", "صورة غلاف", "صورة شخصية", "قصة مميزة"],
  "لاندينج بيج للحملات": ["تصميم جذاب", "نموذج تواصل", "زر دعوة", "تحسين تحويل"],
  "تحسين سرعة متقدم": ["ضغط الصور", "تصغير الكود", "تحسين الأداء", "ذاكرة تخزين"],
  "خدمات تحسين محركات بحث": ["تحليل كلمات مفتاحية", "تحسين محتوى", "بناء روابط", "تقارير شهرية"],
  "تصوير منتجات احترافي": ["صور عالية الجودة", "خلفيات متعددة", "تعديل الصور", "تسليم سريع"],
  "إعداد شبكات التواصل": ["إنشاء حسابات", "تصميم محتوى", "جدولة منشورات", "تقارير تفاعل"],
  "حماية إضافية": ["جدار ناري", "حماية من هجمات", "مراقبة ٢٤/٧", "نسخ احتياطي"],
  "دعم فني مميز": ["رد فوري", "حل مشاكل", "تحديثات دورية", "استشارات"],
};

export default function AddOns() {
  const a = siteData.home.addons;

  return (
    <Section 
      title={a.title} 
      subtitle={a.subtitle}
      badge="خدمات إضافية"
      className="bg-gradient-to-b from-white to-violet-50/30 dark:from-gray-950 dark:to-violet-950/20"
    >
      {/* شبكة الخدمات الإضافية */}
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
            },
          },
        }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {a.items.map((service, idx) => {
          // التأكد من أن service هو نص
          const serviceText = typeof service === 'string' 
            ? service 
            : (service as any).title || (service as any).name || JSON.stringify(service);
          
          const IconComponent = iconMap[serviceText] || Gift;
          const gradient = gradientColors[idx % gradientColors.length];
          const price = priceEstimates[idx % priceEstimates.length];
          const delivery = deliveryTime[idx % deliveryTime.length];
          const features = addonFeatures[serviceText] || ["سهل الإعداد", "دعم فني", "ضمان الجودة", "نتائج مضمونة"];

          return (
            <motion.div
              key={`addon-${idx}-${serviceText.substring(0, 20)}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                },
              }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* خلفية متدرجة متحركة */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* شارة السعر */}
                <div className="absolute top-3 right-3 z-10">
                  <span className={`inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r ${gradient} text-white text-xs font-bold rounded-full shadow-lg`}>
                    <CreditCard className="w-3 h-3" />
                    {price}
                  </span>
                </div>

                {/* شارة وقت التنفيذ */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full">
                    <Clock className="w-3 h-3" />
                    {delivery}
                  </span>
                </div>

                {/* محتوى البطاقة */}
                <div className="p-6">
                  {/* أيقونة الخدمة مع تأثيرات */}
                  <div className={`relative w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${gradient} p-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent className="w-full h-full" />
                    
                    {/* تأثير نبض */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} -z-10 blur-md`}
                    />
                  </div>

                  {/* عنوان الخدمة */}
                  <h3 className="text-base font-bold mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors text-gray-900 dark:text-white">
                    {serviceText}
                  </h3>

                  {/* مميزات الخدمة */}
                  <div className="space-y-2 mb-4">
                    {features.slice(0, 3).map((feature, fidx) => (
                      <div key={`feature-${idx}-${fidx}`} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* زر طلب الخدمة */}
                  <Link href="/quote">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-2.5 mt-2 bg-gradient-to-r ${gradient} text-white text-sm font-medium rounded-xl hover:shadow-lg transition-all duration-300 opacity-90 hover:opacity-100`}
                    >
                      طلب الخدمة
                    </motion.button>
                  </Link>
                </div>

                {/* خط سفلي متدرج */}
                <motion.div 
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: "right" }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* باقات الخدمات الإضافية */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          {
            title: "باقة البداية",
            price: "١٥٠٠ جنيه",
            features: ["دومين .com لمدة عام", "استضافة أساسية ١٠ جيجا", "بريد إلكتروني واحد", "شهادة SSL مجانية", "دعم فني أساسي"],
            gradient: "from-violet-600 to-fuchsia-600",
            icon: Rocket,
          },
          {
            title: "باقة النمو",
            price: "٣٠٠٠ جنيه",
            features: ["دومين .com", "استضافة متقدمة ٢٠ جيجا", "بريد ٣ حسابات", "Google Analytics", "تحسين سرعة", "دعم فني مميز"],
            gradient: "from-fuchsia-600 to-pink-600",
            popular: true,
            icon: Award,
          },
          {
            title: "باقة الاحترافية",
            price: "٥٠٠٠ جنيه",
            features: ["دومين .com", "استضافة احترافية ٥٠ جيجا", "بريد ٥ حسابات", "لاندينج بيج", "صفحات سوشيال", "دعم VIP"],
            gradient: "from-amber-600 to-orange-600",
            icon: Crown,
          },
        ].map((pkg, idx) => {
          const Icon = pkg.icon;
          return (
            <motion.div
              key={`package-${idx}`}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {pkg.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                >
                  <span className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg whitespace-nowrap">
                    <Star className="w-4 h-4 fill-white" />
                    الأكثر طلباً
                  </span>
                </motion.div>
              )}

              <div className={`relative bg-gradient-to-br ${pkg.gradient} rounded-2xl p-8 text-white shadow-xl overflow-hidden h-full`}>
                {/* خلفية متحركة */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute inset-0 bg-white/10"
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm p-2.5">
                      <Icon className="w-full h-full" />
                    </div>
                    <h3 className="text-xl font-bold">{pkg.title}</h3>
                  </div>

                  <div className="text-3xl font-bold mb-4">{pkg.price}</div>

                  <div className="space-y-2 mb-6">
                    {pkg.features.map((feature, fidx) => (
                      <div key={`package-feature-${idx}-${fidx}`} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/quote">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
                    >
                      اختر الباقة
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
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
            }
          }
        }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { icon: Gift, label: "خدمة إضافية", value: a.items.length, color: "from-violet-600 to-fuchsia-600" },
          { icon: Clock, label: "تنفيذ سريع", value: "٢٤ ساعة", color: "from-blue-600 to-cyan-600" },
          { icon: Star, label: "رضا العملاء", value: "٩٧٪", color: "from-amber-600 to-orange-600" },
          { icon: Shield, label: "ضمان", value: "٣٠ يوم", color: "from-green-600 to-emerald-600" },
        ].map((stat, idx) => (
          <motion.div
            key={`stat-${idx}`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -4 }}
            className="text-center p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
          >
            <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${stat.color} p-2 text-white`}>
              <stat.icon className="w-full h-full" />
            </div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* شعار التميز */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">أضف هذه الخدمات لمشروع متكامل ١٠٠٪</span>
          <Gift className="w-5 h-5 text-violet-600 dark:text-violet-400" />
        </div>
      </motion.div>

      {/* زر طلب استشارة */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="text-center mt-12"
      >
        <Link href="/quote">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Headphones className="w-5 h-5" />
            <span>استشرنا لاختيار الخدمات المناسبة</span>
          </motion.button>
        </Link>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
          * استشارة مجانية • رد خلال ٢٤ ساعة • بدون التزام
        </p>
      </motion.div>
    </Section>
  );
}

// أيقونة التاج (Crown) للباقة الاحترافية
const Crown = (props: any) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 4l3 12h14l3-12-6 2-4-4-4 4-6-2z" />
    <path d="M5 20h14" />
  </svg>
);
