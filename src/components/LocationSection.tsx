"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  Globe, 
  Navigation,
  Building,
  Users,
  Award,
  Sparkles,
  CheckCircle2,
  ChevronLeft
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";

export default function LocationSection() {
  const l = siteData.home.location;
  const brand = siteData.brand;

  // ساعات العمل
  const workingHours = [
    { day: "الأحد - الخميس", hours: "٩:٠٠ ص - ٦:٠٠ م", status: "مفتوح" },
    { day: "الجمعة", hours: "مغلق", status: "مغلق" },
    { day: "السبت", hours: "١٠:٠٠ ص - ٤:٠٠ م", status: "مفتوح" },
  ];

  return (
    <Section 
      title={l.title} 
      subtitle={l.subtitle}
      badge="مكاننا"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {/* الجانب الأيمن - معلومات الموقع */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* بطاقة الموقع الرئيسية */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            
            <div className="relative bg-white rounded-3xl border border-gray-200/50 overflow-hidden shadow-xl p-6">
              {/* خلفية متحركة */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{ duration: 12, repeat: Infinity }}
                className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-30"
              />

              <div className="relative z-10">
                {/* العنوان مع أيقونة */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">موقعنا</h3>
                    <p className="text-gray-600 flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                      <span>{l.cityLine}</span>
                    </p>
                  </div>
                </div>

                {/* خريطة تفاعلية (محاكاة) */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden mb-6">
                  {/* شبكة الخريطة */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(45deg, #ccc 1px, transparent 1px), linear-gradient(-45deg, #ccc 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    opacity: 0.2
                  }} />
                  
                  {/* نقاط متحركة تمثل مواقع العملاء */}
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity,
                      }}
                      className="absolute w-3 h-3 bg-blue-500 rounded-full"
                      style={{
                        top: `${20 + i * 15}%`,
                        left: `${15 + i * 18}%`,
                      }}
                    />
                  ))}

                  {/* موقعنا الرئيسي */}
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50" />
                      <div className="relative w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                        <Building className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </motion.div>

                  {/* زر التوجيه */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://maps.google.com/?q=${encodeURIComponent(l.cityLine)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 shadow-lg flex items-center gap-1 hover:bg-white transition-colors"
                  >
                    <Navigation className="w-3 h-3" />
                    فتح في الخريطة
                  </motion.a>
                </div>

                {/* ساعات العمل */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    ساعات العمل
                  </h4>
                  <div className="space-y-2">
                    {workingHours.map((wh, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{wh.day}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-800">{wh.hours}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            wh.status === 'مفتوح' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {wh.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* إحصائيات سريعة */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                  {[
                    { icon: Users, label: "عملاء", value: "١٠+" },
                    { icon: Globe, label: "دول", value: "٥" },
                    { icon: Award, label: "خبرة", value: "٢+" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <stat.icon className="w-4 h-4 text-blue-500 mx-auto mb-1" />
                      <div className="text-xs font-bold">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* الجانب الأيسر - طرق التواصل */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* بطاقة التواصل */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
            {/* خلفية متحركة */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 15, repeat: Infinity }}
              className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -10, 10, 0],
              }}
              transition={{ duration: 18, repeat: Infinity }}
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl"
            />

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4">تواصل معنا مباشرة</h3>
              
              <div className="space-y-4 mb-6">
                {/* واتساب */}
                <motion.a
                  whileHover={{ scale: 1.02, x: 5 }}
                  href={brand.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs opacity-80">واتساب</div>
                    <div className="font-bold">+٢٠١٢٠٧٠٠٥٤٩٥</div>
                  </div>
                </motion.a>

                {/* اتصال */}
                <motion.a
                  whileHover={{ scale: 1.02, x: 5 }}
                  href={`tel:${brand.phoneE164}`}
                  className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs opacity-80">اتصال</div>
                    <div className="font-bold">{brand.phoneDisplay}</div>
                  </div>
                </motion.a>

                {/* بريد إلكتروني */}
                <motion.a
                  whileHover={{ scale: 1.02, x: 5 }}
                  href={`mailto:${brand.email}`}
                  className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs opacity-80">بريد إلكتروني</div>
                    <div className="font-bold">{brand.email}</div>
                  </div>
                </motion.a>
              </div>

              {/* مميزات التواصل */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Clock, text: "رد خلال ساعة" },
                  { icon: CheckCircle2, text: "دعم فوري" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <item.icon className="w-4 h-4" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* بطاقة الدعم الفني */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              دعم فني متكامل
            </h4>

            <div className="space-y-3">
              {[
                "رد خلال ٢٤ ساعة كحد أقصى",
                "دعم فني عبر واتساب وتليجرام",
                "متابعة بعد الإطلاق",
                "تحديثات دورية",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  {feature}
                </div>
              ))}
            </div>

            {/* زر طلب الدعم */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = "/contact"}
              className="w-full mt-4 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>طلب دعم فني</span>
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
          </div>

          {/* شعار الثقة */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center p-4 bg-amber-50 rounded-xl border border-amber-200"
          >
            <div className="flex items-center justify-center gap-2 text-amber-800">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">نخدم عملاء في جميع أنحاء مصر والوطن العربي</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}