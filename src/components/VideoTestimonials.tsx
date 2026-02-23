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
} from "lucide-react";

// بيانات وهمية للفيديوهات (يمكن استبدالها ببيانات حقيقية لاحقاً)
const items = [
  {
    name: "أحمد عبدالله",
    role: "صاحب متجر UrbanWear",
    quote:
      "الشغل منظم جدًا والتصميم فخم وسهل الاستخدام. المبيعات زادت 85% في أول 3 شهور.",
    rating: 5,
    views: "1.2k",
    date: "منذ ٣ أيام",
    avatar: "/images/avatars/avatar-1.jpg",
    videoThumb: "/images/video-thumb-1.jpg",
    videoUrl: "https://www.youtube.com/embed/placeholder1",
    likes: 45,
    comments: 12,
  },
  {
    name: "د. منى سامي",
    role: "مديرة عيادة Prime Dental",
    quote:
      "الواجهة رفعت الثقة… وتجربة الشراء واضحة. المرضى بيحجزوا أونلاين دلوقتي.",
    rating: 5,
    views: "856",
    date: "منذ أسبوع",
    avatar: "/images/avatars/avatar-2.jpg",
    videoThumb: "/images/video-thumb-2.jpg",
    videoUrl: "https://www.youtube.com/embed/placeholder2",
    likes: 32,
    comments: 8,
  },
  {
    name: "محمد الجمل",
    role: "مؤسس Learnify Academy",
    quote:
      "UI/UX ممتاز والنتيجة احترافية. الطلاب مدحوا في سهولة الاستخدام والتصميم الجذاب.",
    rating: 5,
    views: "2.1k",
    date: "منذ ٣ أسابيع",
    avatar: "/images/avatars/avatar-3.jpg",
    videoThumb: "/images/video-thumb-3.jpg",
    videoUrl: "https://www.youtube.com/embed/placeholder3",
    likes: 67,
    comments: 23,
  },
  {
    name: "سارة عادل",
    role: "مديرة تسويق - تكافل للتأمين",
    quote:
      "موقع الشركة الجديد ساهم في زيادة طلبات الاتصال بنسبة 140%. الفريق متفهم ومتعاون.",
    rating: 5,
    views: "1.5k",
    date: "منذ شهر",
    avatar: "/images/avatars/avatar-4.jpg",
    videoThumb: "/images/video-thumb-4.jpg",
    videoUrl: "https://www.youtube.com/embed/placeholder4",
    likes: 54,
    comments: 16,
  },
  {
    name: "خالد السيد",
    role: "صاحب FitTrack App",
    quote:
      "تصميم التطبيق كان تحفة. المستخدمين مدحوا في الواجهة والسهولة. التطبيق حصل على تقييم 4.8.",
    rating: 5,
    views: "3.2k",
    date: "منذ شهرين",
    avatar: "/images/avatars/avatar-5.jpg",
    videoThumb: "/images/video-thumb-5.jpg",
    videoUrl: "https://www.youtube.com/embed/placeholder5",
    likes: 89,
    comments: 31,
  },
  {
    name: "نورا أحمد",
    role: "مؤسسة BeautyBox",
    quote:
      "فريق Kodia فاهم جداً في تجربة المستخدم. المتجر سلس وسهل والطلبات زادت بشكل كبير.",
    rating: 5,
    views: "987",
    date: "منذ ٣ أسابيع",
    avatar: "/images/avatars/avatar-6.jpg",
    videoThumb: "/images/video-thumb-6.jpg",
    videoUrl: "https://www.youtube.com/embed/placeholder6",
    likes: 41,
    comments: 14,
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
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full border border-blue-200/50 mb-4">
          <Play className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-gray-700">شهادات حقيقية</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          آراء العملاء{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            (فيديو)
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
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
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring" as const,
                    stiffness: 100,
                    damping: 15,
                  },
                },
              }}
              whileHover={{ y: -8 }}
              className="group relative cursor-pointer"
              onClick={() => setOpen(idx)}
            >
              <div className="relative bg-white rounded-2xl border border-gray-200/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* صورة الفيديو المصغرة */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />

                  {/* أيقونة اللعب الكبيرة */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50" />
                      <div className="relative w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-blue-600 shadow-2xl">
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
                              ? "text-yellow-400 fill-yellow-400"
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
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-0.5">
                        <div className="w-full h-full rounded-full bg-white overflow-hidden">
                          {item.avatar ? (
                            <img
                              src={item.avatar}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <User className="w-full h-full p-2 text-gray-400" />
                          )}
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                        <Award className="w-2 h-2 text-white" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-sm">{item.name}</h3>
                      <p className="text-xs text-gray-500">{item.role}</p>
                    </div>

                    <span className="text-xs text-gray-400 mr-auto">{item.date}</span>
                  </div>

                  {/* الاقتباس */}
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    "{item.quote}"
                  </p>

                  {/* أزرار التفاعل */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <button
                      onClick={(e) => handleLike(idx, e)}
                      className={`flex items-center gap-1 text-xs transition-colors ${
                        isLiked
                          ? "text-blue-600"
                          : "text-gray-500 hover:text-blue-600"
                      }`}
                    >
                      <ThumbsUp
                        className={`w-4 h-4 ${isLiked ? "fill-blue-600" : ""}`}
                      />
                      <span>{item.likes + (isLiked ? 1 : 0)}</span>
                    </button>

                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{item.comments}</span>
                    </button>

                    <button
                      onClick={(e) => handleShare(idx, e)}
                      className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>مشاركة</span>
                    </button>
                  </div>
                </div>
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
                className={`relative bg-white rounded-2xl overflow-hidden ${
                  isFullscreen ? "w-full h-full" : "max-w-4xl w-full"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* رأس النافذة */}
                <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white text-sm font-bold">{active.name}</h3>
                        <p className="text-white/70 text-xs">{active.role}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setOpen(null)}
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* مشغل الفيديو */}
                <div className="relative bg-black aspect-video">
                  {/* هنا يمكن إضافة iframe الفيديو الحقيقي */}
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
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4" />
                        ) : (
                          <Volume2 className="w-4 h-4" />
                        )}
                      </button>
                      <div className="text-white text-xs">2:34 / 5:12</div>
                    </div>
                    <button
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      className="w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      {isFullscreen ? (
                        <Minimize2 className="w-4 h-4" />
                      ) : (
                        <Maximize2 className="w-4 h-4" />
                      )}
                    </button>
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
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{active.views} مشاهدة</span>
                    </div>
                    <span className="text-sm text-gray-500">{active.date}</span>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">"{active.quote}"</p>

                  <p className="text-sm text-gray-500 bg-gray-50 p-4 rounded-xl">
                    هذا نموذج شكلي (Demo). عند توفر فيديوهات حقيقية، سيتم استبدالها
                    بسهولة مع الحفاظ على نفس التصميم الاحترافي.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}