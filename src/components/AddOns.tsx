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
  Gift
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";

// توسيع بيانات الخدمات الإضافية مع أيقونات وتفاصيل
const addonsData = siteData.home.addons;

// خريطة الأيقونات لكل خدمة إضافية
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
};

// ألوان متدرجة لكل خدمة
const gradientColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-amber-500",
  "from-indigo-500 to-blue-500",
  "from-rose-500 to-red-500",
  "from-violet-500 to-purple-500",
  "from-amber-500 to-yellow-500",
];

// الأسعار التقديرية للخدمات الإضافية
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
];

// مدة التنفيذ لكل خدمة
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
];

// مميزات كل خدمة
const addonFeatures: Record<string, string[]> = {
  "تسجيل دومين .com .eg": ["لمدة عام", "تحكم كامل", "تجديد تلقائي"],
  "استضافة سريعة وآمنة": ["مساحة ١٠ جيجا", "نطاق ترددي غير محدود", "نسخ احتياطي"],
  "بريد احترافي باسم الدومين": ["5 حسابات", "مساحة ٢ جيجا لكل حساب", "حماية من السبام"],
  "شهادة SSL مجانية": ["تأمين البيانات", "تحسين SEO", "ثقة العملاء"],
  "Google Analytics": ["تقارير متقدمة", "تتبع السلوك", "تحليل الجمهور"],
  "صفحات سوشيال ميديا": ["تصميم احترافي", "صورة غلاف", "صورة شخصية"],
  "لاندينج بيج للحملات": ["تصميم جذاب", "نموذج تواصل", "زر دعوة"],
  "تحسين سرعة متقدم": ["ضغط الصور", "تصغير الكود", "تحسين الأداء"],
};

export default function AddOns() {
  const a = siteData.home.addons;

  return (
    <Section 
      title={a.title} 
      subtitle={a.subtitle}
      badge="خدمات إضافية"
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
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
          const features = addonFeatures[serviceText] || ["سهل الإعداد", "دعم فني", "ضمان الجودة"];

          return (
            <motion.div
              key={`addon-${idx}-${serviceText.substring(0, 20)}`}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }
                },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl border border-gray-200/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* خلفية متدرجة متحركة */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* شارة السعر */}
                <div className="absolute top-3 right-3">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${gradient} text-white text-xs font-bold rounded-full shadow-lg`}>
                    <CreditCard className="w-3 h-3" />
                    {price}
                  </span>
                </div>

                {/* شارة وقت التنفيذ */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    <Clock className="w-3 h-3" />
                    {delivery}
                  </span>
                </div>

                {/* محتوى البطاقة */}
                <div className="p-6">
                  {/* أيقونة الخدمة مع تأثيرات */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`relative w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${gradient} p-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <IconComponent className="w-full h-full" />
                    
                    {/* تأثير نبض */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} -z-10 blur-md`}
                    />
                  </motion.div>

                  {/* عنوان الخدمة */}
                  <h3 className="text-base font-bold mb-3 group-hover:text-gray-900 transition-colors">
                    {serviceText}
                  </h3>

                  {/* مميزات الخدمة */}
                  <div className="space-y-2 mb-4">
                    {features.map((feature, fidx) => (
                      <div key={`feature-${idx}-${fidx}`} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle2 className={`w-3 h-3 text-${gradient.split(' ')[0].replace('from-', '')}`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* زر طلب الخدمة - يظهر عند الهوفر */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <button
                      onClick={() => window.location.href = "/quote"}
                      className={`w-full py-2 mt-2 bg-gradient-to-r ${gradient} text-white text-sm font-medium rounded-xl hover:shadow-lg transition-all duration-300`}
                    >
                      طلب الخدمة
                    </button>
                  </motion.div>
                </div>

                {/* خط سفلي متدرج */}
                <motion.div 
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
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
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          {
            title: "باقة البداية",
            price: "١٥٠٠ جنيه",
            features: ["دومين .com", "استضافة أساسية", "بريد إلكتروني ١", "SSL مجاني"],
            gradient: "from-blue-500 to-cyan-500",
          },
          {
            title: "باقة النمو",
            price: "٣٠٠٠ جنيه",
            features: ["دومين + استضافة متقدمة", "بريد ٣ حسابات", "Google Analytics", "تحسين سرعة"],
            gradient: "from-purple-500 to-pink-500",
            popular: true,
          },
          {
            title: "باقة الاحترافية",
            price: "٥٠٠٠ جنيه",
            features: ["كل الخدمات السابقة", "لاندينج بيج", "صفحات سوشيال", "دعم مميز"],
            gradient: "from-amber-500 to-orange-500",
          },
        ].map((pkg, idx) => (
          <motion.div
            key={`package-${idx}`}
            whileHover={{ y: -8 }}
            className="relative group"
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-sm font-bold rounded-full shadow-lg">
                  <Star className="w-4 h-4 fill-white" />
                  الأكثر طلباً
                </span>
              </div>
            )}

            <div className={`relative bg-gradient-to-br ${pkg.gradient} rounded-2xl p-6 text-white shadow-xl overflow-hidden`}>
              {/* خلفية متحركة */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-0 bg-white/10"
              />

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                <div className="text-3xl font-bold mb-4">{pkg.price}</div>
                <div className="space-y-2 mb-6">
                  {pkg.features.map((feature, fidx) => (
                    <div key={`package-feature-${idx}-${fidx}`} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => window.location.href = "/quote"}
                  className="w-full py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  اختر الباقة
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* إحصائيات سريعة */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { icon: Gift, label: "خدمة إضافية", value: a.items.length },
          { icon: Clock, label: "تنفيذ سريع", value: "٢٤ ساعة" },
          { icon: Star, label: "رضا العملاء", value: "٩٧٪" },
          { icon: Shield, label: "ضمان", value: "٣٠ يوم" },
        ].map((stat, idx) => (
          <motion.div
            key={`stat-${idx}`}
            whileHover={{ y: -4 }}
            className="text-center p-4 bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-100"
          >
            <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-gray-900">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
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
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm">
          <Sparkles className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium">أضف هذه الخدمات لمشروع متكامل ١٠٠٪</span>
          <Gift className="w-5 h-5 text-purple-600" />
        </div>
      </motion.div>

      {/* زر طلب استشارة */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="text-center mt-8"
      >
        <button
          onClick={() => window.location.href = "/quote"}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Headphones className="w-5 h-5" />
          <span>استشرنا لاختيار الخدمات المناسبة</span>
        </button>
      </motion.div>
    </Section>
  );
}