"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { siteData } from "@/lib/siteData";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Eye,
  Calendar,
  Tag,
  Award,
  Zap,
  MessageCircle,
  Phone,
  Download,
  Share2,
  Heart,
  Star,
  CheckCircle2,
  Sparkles,
  Users,
  Clock,
  Target
} from "lucide-react";

type Item = {
  title: string;
  slug: string;
  tags: string[];
  summary: string;
  deliverables: string[];
  images?: string[];
  year?: string;
  client?: string;
};

function getAllItems(): Item[] {
  return siteData.home.portfolioTabs.flatMap((t: any) => t.items) as Item[];
}

export default function PortfolioItemClient({ params }: { params: { slug: string } }) {
  const all = getAllItems();
  const item = all.find((x) => x.slug === params.slug);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);

  if (!item) return notFound();

  // تجهيز قائمة الصور - استخدام صور حقيقية من Unsplash
  const images = item.images || [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1556742212-5b321f3c261b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop",
  ];

  const imageLabels = ["الصفحة الرئيسية", "صفحة الخدمات", "صفحة الاتصال"];

  // مشاريع مشابهة
  const similarProjects = all
    .filter((p) => p.slug !== item.slug)
    .slice(0, 3);

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
      {/* رأس الصفحة مع خلفية متدرجة - ألوان بنفسجي */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-violet-600 to-fuchsia-600">
        {/* خلفية متحركة */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        </div>

        <Container>
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="relative z-10 text-white"
          >
            {/* رابط الرجوع - يودي على 404 مؤقتاً */}
            <motion.div variants={fadeInUp}>
              <Link 
                href="/404" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm">الرجوع إلى جميع الأعمال</span>
              </Link>
            </motion.div>

            {/* التاجات */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white border border-white/30"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* العنوان */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              {item.title}
            </motion.h1>

            {/* معلومات إضافية */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 text-white/80 text-sm">
              {item.year && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {item.year}
                </span>
              )}
              {item.client && (
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {item.client}
                </span>
              )}
            </motion.div>

            {/* الوصف */}
            <motion.p 
              variants={fadeInUp}
              className="mt-6 max-w-2xl text-white/90 leading-relaxed"
            >
              {item.summary}
            </motion.p>

            {/* زرين رئيسيين */}
            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteData.brand.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-violet-600 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                اطلب نسخة مشابهة
              </a>
              <a
                href={`tel:${siteData.brand.phoneE164}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition-all"
              >
                <Phone className="w-5 h-5" />
                اتصال
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* معرض الصور */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-8">معرض الصور</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <motion.div
                key={`image-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(idx)}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200 shadow-lg group-hover:shadow-xl transition-all">
                  <img
                    src={img}
                    alt={`${item.title} - ${imageLabels[idx] || `صورة ${idx + 1}`}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* طبقة داكنة مع أيقونة المعاينة */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-3 left-3 text-white text-sm flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      معاينة
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  {imageLabels[idx] || `لقطة ${idx + 1}`}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ملاحظة عن الصور */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-4 text-xs text-gray-400 text-center"
          >
            * هذه نماذج توضيحية لعرض أسلوب التصميم والتنفيذ.
          </motion.p>
        </Container>
      </section>

      {/* تفاصيل المشروع */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* مخرجات المشروع */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-gray-200 p-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 p-2 text-white">
                  <Award className="w-full h-full" />
                </div>
                <h2 className="text-2xl font-bold">مخرجات المشروع</h2>
              </div>

              <ul className="space-y-3">
                {item.deliverables.map((deliverable, idx) => (
                  <motion.li
                    key={`deliverable-${idx}`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{deliverable}</span>
                  </motion.li>
                ))}
              </ul>

              {/* إحصائيات سريعة للمشروع */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, label: "مدة التنفيذ", value: "٣-٤ أسابيع" },
                  { icon: Zap, label: "التقنيات", value: "Next.js, Tailwind" },
                  { icon: Users, label: "فريق العمل", value: "٣ خبراء" },
                  { icon: Star, label: "تقييم العميل", value: "٥/٥" },
                ].map((stat, idx) => (
                  <div key={`stat-${idx}`} className="text-center p-3 bg-gray-50 rounded-xl">
                    <stat.icon className="w-4 h-4 text-violet-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-500">{stat.label}</div>
                    <div className="text-sm font-bold">{stat.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* معلومات إضافية */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* بطاقة طلب مشروع مشابه */}
              <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl p-8 text-white shadow-xl">
                <Sparkles className="w-10 h-10 mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-2">يعجبك هذا المشروع؟</h3>
                <p className="text-white/90 mb-6 text-sm">
                  يمكننا تنفيذ مشروع مشابه حسب احتياجاتك الخاصة. تواصل معنا الآن لمناقشة التفاصيل.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={siteData.brand.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-violet-600 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    واتساب
                  </a>
                  <a
                    href={`tel:${siteData.brand.phoneE164}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold text-sm border border-white/30 hover:bg-white/30 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    اتصال
                  </a>
                </div>
              </div>

              {/* أزرار إضافية */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <h3 className="font-bold mb-4">شارك هذا المشروع</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLiked(!liked)}
                    className="flex-1 py-2 bg-gray-100 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-1"
                  >
                    <Heart className={`w-4 h-4 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
                    {liked ? 'تم الإعجاب' : 'إعجاب'}
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText(window.location.href);
                      alert("تم نسخ الرابط!");
                    }}
                    className="flex-1 py-2 bg-gray-100 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-1"
                  >
                    <Share2 className="w-4 h-4" />
                    مشاركة
                  </button>
                  <button className="flex-1 py-2 bg-gray-100 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-1">
                    <Download className="w-4 h-4" />
                    تحميل
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* مشاريع مشابهة */}
      {similarProjects.length > 0 && (
        <section className="py-16">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-bold mb-2">مشاريع مشابهة</h2>
              <p className="text-gray-600">قد تهمك أيضاً</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProjects.map((project, idx) => (
                <motion.div
                  key={`similar-${project.slug}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Link href="/404">
                    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={`/images/demos/${project.slug}-1.svg`}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold mb-2">{project.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{project.summary}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Modal لعرض الصور المكبرة */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* زر الإغلاق */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>

              {/* أزرار التنقل */}
              <button
                onClick={() => setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/30 hover:bg-black/50 rounded-full p-2"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={() => setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0))}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/30 hover:bg-black/50 rounded-full p-2"
              >
                <ChevronRight size={32} />
              </button>

              {/* الصورة */}
              <img
                src={images[selectedImage]}
                alt={`${item.title} - ${selectedImage + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              {/* معلومات الصورة */}
              <div className="mt-4 text-white text-center">
                <p className="text-sm opacity-70">
                  {imageLabels[selectedImage] || `لقطة ${selectedImage + 1}`}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
