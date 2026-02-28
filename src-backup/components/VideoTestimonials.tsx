"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  X,
  Star,
  ThumbsUp,
  MessageCircle,
  Share2,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Clock,
  User,
  Award,
  Eye,
  Sparkles,
  Heart,
  CheckCircle,
  Zap,
  Film
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// بيانات وهمية للفيديوهات مع صور حقيقية من Unsplash
const items = [
  {
    name: "أحمد عبدالله",
    role: "صاحب متجر UrbanWear",
    quote:
      "الشغل منظم جدًا والتصميم فخم وسهل الاستخدام. المبيعات زادت 85% في أول 3 شهور.",
    rating: 5,
    views: "1.2k",
    date: "منذ ٣ أيام",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
    videoThumb: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/placeholder1",
    likes: 45,
    comments: 12,
    verified: true,
  },
  {
    name: "د. منى سامي",
    role: "مديرة عيادة Prime Dental",
    quote:
      "الواجهة رفعت الثقة… وتجربة الشراء واضحة. المرضى بيحجزوا أونلاين دلوقتي.",
    rating: 5,
    views: "856",
    date: "منذ أسبوع",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    videoThumb: "https://images.unsplash.com/photo-1556742212-5b321f3c261b?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/placeholder2",
    likes: 32,
    comments: 8,
    verified: true,
  },
  {
    name: "محمد الجمل",
    role: "مؤسس Learnify Academy",
    quote:
      "UI/UX ممتاز والنتيجة احترافية. الطلاب مدحوا في سهولة الاستخدام والتصميم الجذاب.",
    rating: 5,
    views: "2.1k",
    date: "منذ ٣ أسابيع",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    videoThumb: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/placeholder3",
    likes: 67,
    comments: 23,
    verified: true,
  },
  {
    name: "سارة عادل",
    role: "مديرة تسويق - تكافل للتأمين",
    quote:
      "موقع الشركة الجديد ساهم في زيادة طلبات الاتصال بنسبة 140%. الفريق متفهم ومتعاون.",
    rating: 5,
    views: "1.5k",
    date: "منذ شهر",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    videoThumb: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/placeholder4",
    likes: 54,
    comments: 16,
    verified: true,
  },
  {
    name: "خالد السيد",
    role: "صاحب FitTrack App",
    quote:
      "تصميم التطبيق كان تحفة. المستخدمين مدحوا في الواجهة والسهولة. التطبيق حصل على تقييم 4.8.",
    rating: 5,
    views: "3.2k",
    date: "منذ شهرين",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    videoThumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/placeholder5",
    likes: 89,
    comments: 31,
    verified: true,
  },
  {
    name: "نورا أحمد",
    role: "مؤسسة BeautyBox",
    quote:
      "فريق Kodia فاهم جداً في تجربة المستخدم. المتجر سلس وسهل والطلبات زادت بشكل كبير.",
    rating: 5,
    views: "987",
    date: "منذ ٣ أسابيع",
    avatar: "https://images.unsplash.com/photo-1494790108777-8f9c9f12b1b6?w=200&h=200&fit=crop",
    videoThumb: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/placeholder6",
    likes: 41,
    comments: 14,
    verified: true,
  },
];

export default function VideoTestimonials() {
  const [open, setOpen] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [likedVideos, setLikedVideos] = useState<number[]>([]);

  const handleLike = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedVideos((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleShare = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(window.location.href);
    alert("تم نسخ الرابط!");
  };

  return (
    <div className="space-y-8">
      {/* رأس القسم */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 rounded-full border border-violet-200/50 dark:border-violet-800/50 mb-4">
          <Film className="w-4 h-4 text-violet-600 dark:text-violet-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">شهادات حقيقية</span>
          <Sparkles className="w-3 h-3 text-amber-500" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
          آراء العملاء{" "}
          <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent">
            (فيديو)
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          شاهد ماذا يقول عملاؤنا عن تجربتهم معنا - قصص نجاح حقيقية من شركائنا
        </p>
      </motion.div>

      {/* شبكة الفيديوهات */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((item, idx) => {
          const isLiked = likedVideos.includes(idx);

          return (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              whileHover={{ y: -8 }}
              className="group relative cursor-pointer"
              onClick={() => setOpen(idx)}
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* صورة الفيديو المصغرة */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                  <Image
                    src={item.videoThumb}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* طبقة داكنة */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* أيقونة اللعب الكبيرة */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-violet-600 rounded-full blur-xl opacity-50" />
                      <div className="relative w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-violet-600 shadow-2xl">
                        <Play className="w-8 h-8 ml-1" />
                      </div>
                    </div>
                  </motion.div>

                  {/* معلومات الفيديو */}
                  <div className="absolute top-3 right-3 flex gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                      <Clock className="w-3 h-3" />
                      2:34
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                      <Eye className="w-3 h-3" />
                      {item.views}
                    </span>
                  </div>

                  {/* شارة التقييم */}
                  <div className="absolute bottom-3 left-3">
                    <div className="flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < item.rating
                              ? "text-amber-400 fill-amber-400"
                              : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* محتوى البطاقة */}
                <div className="p-5">
                  {/* صورة العميل واسمه */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 p-0.5">
                        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden relative">
                          <Image
                            src={item.avatar}
                            alt={item.name}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      {item.verified && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                          <CheckCircle className="w-2 h-2 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-sm text-gray-900 dark:text-white">{item.name}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{item.role}</p>
                    </div>

                    <span className="text-xs text-gray-400 dark:text-gray-500">{item.date}</span>
                  </div>

                  {/* الاقتباس */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    "{item.quote}"
                  </p>

                  {/* أزرار التفاعل */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => handleLike(idx, e)}
                      className={`flex items-center gap-1 text-xs transition-colors ${
                        isLiked
                          ? "text-violet-600"
                          : "text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400"
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${isLiked ? "fill-violet-600 text-violet-600" : ""}`}
                      />
                      <span>{item.likes + (isLiked ? 1 : 0)}</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{item.comments}</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => handleShare(idx, e)}
                      className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>مشاركة</span>
                    </motion.button>
                  </div>
                </div>

                {/* خط سفلي متدرج */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-600"
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

      {/* مشغل الفيديو المنبثق */}
      <AnimatePresence>
        {open !== null && (() => {
          const active = items[open];
          if (!active) return null;

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={() => setOpen(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden ${
                  isFullscreen ? "w-full h-full" : "max-w-4xl w-full"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* رأس النافذة */}
                <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center relative overflow-hidden">
                        <Image
                          src={active.avatar}
                          alt={active.name}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-white text-sm font-bold">{active.name}</h3>
                        <p className="text-white/70 text-xs">{active.role}</p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setOpen(null)}
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* مشغل الفيديو */}
                <div className="relative bg-black aspect-video">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                        <Play className="w-10 h-10 text-white/50" />
                      </div>
                      <p className="text-white/50 text-sm">معاينة الفيديو (Demo)</p>
                    </div>
                  </div>

                  {/* أزرار التحكم */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMuted(!isMuted)}
                        className="w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4" />
                        ) : (
                          <Volume2 className="w-4 h-4" />
                        )}
                      </motion.button>
                      <div className="text-white text-xs">2:34 / 5:12</div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      className="w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      {isFullscreen ? (
                        <Minimize2 className="w-4 h-4" />
                      ) : (
                        <Maximize2 className="w-4 h-4" />
                      )}
                    </motion.button>
                  </div>
                </div>

                {/* تفاصيل الفيديو */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < active.rating
                                ? "text-amber-400 fill-amber-400"
                                : "text-gray-300 dark:text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{active.views} مشاهدة</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{active.date}</span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">"{active.quote}"</p>

                  <p className="text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                    هذا نموذج شكلي (Demo). عند توفر فيديوهات حقيقية، سيتم استبدالها
                    بسهولة مع الحفاظ على نفس التصميم الاحترافي.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* إحصائيات سريعة */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { icon: Film, label: "شهادة فيديو", value: items.length },
          { icon: Eye, label: "إجمالي المشاهدات", value: "٨.٥k+" },
          { icon: Heart, label: "إعجاب", value: "٣٢٨+" },
          { icon: Zap, label: "تقييم", value: "٤.٩/٥" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <stat.icon className="w-5 h-5 text-violet-600 dark:text-violet-400 mx-auto mb-2" />
            <div className="text-sm font-bold text-gray-900 dark:text-white">{stat.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
