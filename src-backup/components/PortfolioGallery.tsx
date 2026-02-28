"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Download,
  Heart,
  Share2,
  ZoomIn,
  ZoomOut,
  Info,
  Grid,
  Sparkles,
  Star,
  Award,
  Clock
} from "lucide-react";
import { siteData } from "@/lib/siteData";
import Link from "next/link";

type GalleryImage = {
  src: string;
  title: string;
  category: string;
  slug?: string;
  tags?: string[];
  year?: string;
};

export default function PortfolioGallery() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showInfo, setShowInfo] = useState(false);
  const [likedImages, setLikedImages] = useState<number[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  // جمع كل الصور من جميع المشاريع
  const allImages: GalleryImage[] = useMemo(() => {
    return (siteData.home.portfolioTabs ?? []).flatMap((tab) =>
      (tab.items ?? []).flatMap((item) =>
        (item.images ?? []).map((img) => ({
          src: img,
          title: item.title,
          category: tab.label,
          slug: item.slug,
          tags: item.tags ?? [],
          year: item.year,
        }))
      )
    );
  }, []);

  // تصفية الصور حسب التصنيف
  const filteredImages: GalleryImage[] = useMemo(() => {
    return filter === "all" ? allImages : allImages.filter((img) => img.category === filter);
  }, [allImages, filter]);

  // الحصول على التصنيفات الفريدة
  const categories = useMemo(() => {
    return ["all", ...Array.from(new Set(allImages.map((img) => img.category)))];
  }, [allImages]);

  // إحصائيات سريعة
  const stats = [
    { label: "صورة", value: allImages.length, color: "from-violet-600 to-fuchsia-600" },
    { label: "مشروع", value: siteData.home.portfolioTabs.flatMap(t => t.items).length, color: "from-blue-600 to-cyan-600" },
    { label: "تصنيف", value: categories.length - 1, color: "from-amber-600 to-orange-600" },
    { label: "سنوات", value: "٢٠٢٣-٢٠٢٤", color: "from-green-600 to-emerald-600" },
  ];

  // ✅ clamp currentIndex لما الفلتر/القائمة تتغير
  useEffect(() => {
    if (filteredImages.length === 0) {
      setCurrentIndex(0);
      setSelectedImage(null);
      return;
    }
    setCurrentIndex((prev) => Math.min(prev, filteredImages.length - 1));
  }, [filteredImages.length]);

  const currentImage = filteredImages[currentIndex]; // قد تكون undefined لو القائمة فاضية

  const getGlobalIndexBySrc = (src: string) => allImages.findIndex((img) => img.src === src);

  const handlePrevious = () => {
    const len = filteredImages.length;
    if (!len) return;
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : len - 1));
    setZoomLevel(1);
    setShowInfo(false);
  };

  const handleNext = () => {
    const len = filteredImages.length;
    if (!len) return;
    setCurrentIndex((prev) => (prev < len - 1 ? prev + 1 : 0));
    setZoomLevel(1);
    setShowInfo(false);
  };

  const handleLike = (index: number) => {
    if (index < 0) return;
    setLikedImages((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  const handleDownload = async (src: string, title: string) => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${title}-${Date.now()}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("فشل التحميل:", error);
    }
  };

  const handleShare = async () => {
    if (!currentImage) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: currentImage.title ?? "",
          text: `شاهد هذا المشروع من ${siteData.brand.name}`,
          url: window.location.href,
        });
      } catch {
        // تم إلغاء المشاركة
      }
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert("تم نسخ الرابط!");
    }
  };

  // تأثيرات لوحة المفاتيح
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "+" || e.key === "=") setZoomLevel((prev) => Math.min(prev + 0.25, 3));
      if (e.key === "-") setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
      if (e.key === "f") setIsFullscreen((prev) => !prev);
      if (e.key === "i") setShowInfo((prev) => !prev);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex, filteredImages.length]);

  // قفل التمرير عند فتح المودال
  useEffect(() => {
    if (selectedImage) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <div className="space-y-8">
      {/* إحصائيات سريعة */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={`stat-${idx}`}
            whileHover={{ y: -4 }}
            className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <div className={`w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-br ${stat.color} p-1.5 text-white`}>
              <Star className="w-full h-full" />
            </div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* شريط الفلترة */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        {/* زر الفلترة للموبايل */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-between text-gray-700 dark:text-gray-300"
        >
          <span>تصفية حسب التصنيف</span>
          <Grid className="w-5 h-5" />
        </button>

        {/* أزرار التصنيفات */}
        <div className={`flex flex-wrap justify-center gap-2 ${showFilters ? 'block' : 'hidden md:flex'}`}>
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {cat === "all" ? "الكل" : cat}
              <span
                className={`mr-2 text-xs ${
                  filter === cat ? "text-white/80" : "text-gray-400 dark:text-gray-500"
                }`}
              >
                ({cat === "all" ? allImages.length : allImages.filter((img) => img.category === cat).length})
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* شبكة الصور */}
      {filteredImages.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.slice(0, 12).map((image, idx) => {
              const globalIndex = getGlobalIndexBySrc(image.src);
              const isLiked = globalIndex >= 0 ? likedImages.includes(globalIndex) : false;

              return (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => {
                    setSelectedImage({ src: image.src, title: image.title });
                    const idx = filteredImages.findIndex((img) => img.src === image.src);
                    setCurrentIndex(idx >= 0 ? idx : 0);
                    setZoomLevel(1);
                    setShowInfo(false);
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* طبقة داكنة مع معلومات */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 right-3 left-3">
                      <span className="text-white text-sm font-medium block truncate">{image.title}</span>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-white/70 text-xs">{image.category}</span>
                        <div className="flex items-center gap-2">
                          {image.year && (
                            <span className="text-white/50 text-xs">{image.year}</span>
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLike(globalIndex);
                            }}
                            className="text-white hover:text-red-500 transition-colors"
                            aria-label="إعجاب"
                          >
                            <Heart className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* شارة التصنيف */}
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                      {image.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
        >
          <Grid className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">لا توجد صور</h3>
          <p className="text-gray-500 dark:text-gray-400">لا توجد صور في هذا التصنيف</p>
          <button
            onClick={() => setFilter("all")}
            className="mt-4 text-violet-600 hover:text-violet-700 dark:text-violet-400 font-medium"
          >
            عرض جميع الصور
          </button>
        </motion.div>
      )}

      {/* زر عرض المزيد */}
      {filteredImages.length > 12 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Grid size={20} />
            عرض المزيد
          </motion.button>
        </motion.div>
      )}

      {/* Modal لعرض الصورة المكبرة */}
      <AnimatePresence>
        {selectedImage && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative flex flex-col ${
                isFullscreen ? "w-screen h-screen p-0" : "max-w-6xl w-full max-h-[90vh]"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* شريط التحكم العلوي */}
              <div
                className={`absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent p-4 ${
                  isFullscreen ? "px-8" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedImage(null)}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                      aria-label="إغلاق"
                    >
                      <X size={20} />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsFullscreen((v) => !v)}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                      aria-label="ملء الشاشة"
                    >
                      {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                    </motion.button>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-white text-sm">
                      {currentIndex + 1} / {filteredImages.length}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setZoomLevel((prev) => Math.min(prev + 0.25, 3))}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                      aria-label="تكبير"
                    >
                      <ZoomIn size={20} />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setZoomLevel((prev) => Math.max(prev - 0.25, 0.5))}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                      aria-label="تصغير"
                    >
                      <ZoomOut size={20} />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowInfo((v) => !v)}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                      aria-label="معلومات"
                    >
                      <Info size={20} />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* الصورة */}
              <div className="flex-1 flex items-center justify-center overflow-hidden">
                <motion.img
                  key={currentIndex}
                  src={currentImage.src}
                  alt={currentImage.title}
                  className="transition-transform duration-300"
                  style={{
                    transform: `scale(${zoomLevel})`,
                    maxWidth: isFullscreen ? "100vw" : "100%",
                    maxHeight: isFullscreen ? "100vh" : "80vh",
                    objectFit: zoomLevel === 1 ? "contain" : "cover",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* معلومات الصورة */}
              <AnimatePresence>
                {showInfo && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 ${
                      isFullscreen ? "px-8" : ""
                    }`}
                  >
                    <h3 className="text-white text-xl font-bold mb-2">{currentImage.title}</h3>
                    <p className="text-white/70 mb-3">{currentImage.category}</p>
                    {currentImage.year && (
                      <p className="text-white/50 text-sm mb-2">السنة: {currentImage.year}</p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {(currentImage.tags ?? []).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* أزرار التنقل */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="السابق"
              >
                <ChevronLeft size={24} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="التالي"
              >
                <ChevronRight size={24} />
              </motion.button>

              {/* أزرار التحكم السفلية */}
              <div
                className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 ${
                  isFullscreen ? "px-8" : ""
                }`}
              >
                {(() => {
                  const gIdx = getGlobalIndexBySrc(currentImage.src);
                  const liked = gIdx >= 0 ? likedImages.includes(gIdx) : false;

                  return (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleLike(gIdx)}
                        className={`px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2 transition-all ${
                          liked ? "bg-red-500 text-white" : "bg-white/10 text-white hover:bg-white/20"
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${liked ? "fill-white" : ""}`} />
                        <span>إعجاب</span>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDownload(currentImage.src, currentImage.title)}
                        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all flex items-center gap-2"
                      >
                        <Download size={16} />
                        <span>تحميل</span>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleShare}
                        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all flex items-center gap-2"
                      >
                        <Share2 size={16} />
                        <span>مشاركة</span>
                      </motion.button>
                    </>
                  );
                })()}
              </div>

              {/* رابط المشروع */}
              {currentImage.slug && (
                <Link
                  href={`/portfolio/${currentImage.slug}`}
                  className="absolute top-20 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all text-sm flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  عرض تفاصيل المشروع
                </Link>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
