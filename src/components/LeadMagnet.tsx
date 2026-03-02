"use client";

import { motion } from "framer-motion";
import { 
  Gift, 
  Sparkles, 
  CheckCircle2, 
  ArrowLeft, 
  Phone, 
  Mail,
  MessageCircle,
  Star,
  Award,
  Zap,
  Target,
  Rocket,
  Heart,
  Clock  // <-- تم إضافة Clock هنا
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";

export default function LeadMagnet() {
  const l = siteData.home.leadMagnet;
  const brand = siteData.brand;

  return (
    <Section 
      title={l.title} 
      subtitle={l.subtitle}
      badge="عرض خاص"
    >
      {/* بطاقة الجذب الرئيسية */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative group"
      >
        {/* خلفية متدرجة متحركة */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
        
        <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
          {/* خلفية متحركة بنقاط متلألئة */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '30px 30px',
              }}
            />
          </div>

          {/* عناصر زخرفية متحركة */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl"
          />

          <div className="relative p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* الجانب الأيسر - المحتوى */}
              <div>
                {/* شارة العرض */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30 mb-6"
                >
                  <Gift className="w-4 h-4" />
                  <span className="text-sm font-medium">عرض محدود - احجز الآن</span>
                  <Sparkles className="w-4 h-4" />
                </motion.div>

                {/* العنوان */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {l.title}
                </h3>

                {/* الوصف */}
                <p className="text-white/90 mb-6">
                  {l.subtitle}
                </p>

                {/* نقاط الجذب */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.15,
                      },
                    },
                  }}
                  className="space-y-4 mb-8"
                >
                  {l.bullets.map((bullet, idx) => (
                    <motion.div
                      key={`bullet-${idx}`}  // <-- تم تعديل المفتاح
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white/90 text-sm">{bullet}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* أزرار التواصل */}
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={brand.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {l.ctaLabel}
                    <ArrowLeft className="w-4 h-4" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`tel:${brand.phoneDisplay}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    اتصل الآن
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`mailto:${brand.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    بريد
                  </motion.a>
                </div>

                {/* وقت الرد السريع */}
                <div className="mt-4 flex items-center gap-2 text-white/70 text-xs">
                  <Zap className="w-3 h-3" />
                  <span>متوسط وقت الرد: خلال ساعة</span>
                </div>
              </div>

              {/* الجانب الأيمن - العناصر البصرية */}
              <div className="relative hidden md:block">
                {/* أيقونة كبيرة متحركة */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="relative w-64 h-64 mx-auto"
                >
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl" />
                  <div className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                    <Gift className="w-full h-full text-white" />
                  </div>
                </motion.div>

                {/* إحصائيات سريعة */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-xs text-gray-500">تحليل مجاني</div>
                      <div className="text-sm font-bold">قيمة ١٠٠٠ جنيه</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="text-xs text-gray-500">عدد المستفيدين</div>
                      <div className="text-sm font-bold">٥٠+ عميل</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* شريط الثقة السفلي */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={`star-${star}`} className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                ))}
                <span className="text-white/80 text-sm">تقييم ٤.٩ من ٥٠+ عميل</span>
              </div>

              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-white" />
                <span className="text-white/80 text-xs">عرض لفترة محدودة</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* إحصائيات الثقة */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { icon: Heart, label: "عميل سعيد", value: "٥٠+" },
          { icon: Zap, label: "تحليل مجاني", value: "٥٠+" },
          { icon: Star, label: "تقييم", value: "٤.٩/٥" },
          { icon: Clock, label: "دعم فوري", value: "٢٤/٧" }, // <-- الآن Clock موجودة
        ].map((stat, idx) => (
          <motion.div
            key={`stat-${idx}`}  // <-- تم تعديل المفتاح
            whileHover={{ y: -4 }}
            className="text-center p-4 bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-100 shadow-sm"
          >
            <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-gray-900">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* رسالة تحفيزية */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Rocket className="w-5 h-5 text-amber-600" />
          <span className="text-sm font-bold text-amber-800">لا تفوت الفرصة!</span>
        </div>
        <p className="text-sm text-gray-600">
          {l.bullets[0]?.replace('✓', '') || 'احجز استشارتك المجانية الآن'} - احجز استشارتك المجانية الآن وابدأ رحلة نجاح مشروعك
        </p>
      </motion.div>

      {/* ملاحظة التطوير */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-4 text-center"
      >
        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
          💡 (لزيادة المصداقية: بعد ما تعمل ٢–٣ مشاريع حقيقية، استبدل النص بأرقام/نتائج حقيقية)
        </span>
      </motion.div>
    </Section>
  );
}