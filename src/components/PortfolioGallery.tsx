"use client";

import { useState, useEffect } from "react";
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
  Sparkles
} from "lucide-react";
import { siteData } from "@/lib/siteData";

export default function PortfolioGallery() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showInfo, setShowInfo] = useState(false);
  const [likedImages, setLikedImages] = useState<number[]>([]);
  const [filter, setFilter] = useState<string>("all");

  // جمع كل الصور من جميع المشاريع
  const allImages = siteData.home.portfolioTabs.flatMap(tab =>
    tab.items.flatMap(item =>
      (item.images || []).map(img => ({
        src: img,
        title: item.title,
        category: tab.label,
        slug: item.slug,
        tags: item.tags || [],
      }))
    )
  );

  // تصفية الصور حسب التصنيف
  const filteredImages = filter === "all" 
    ? allImages 
    : allImages.filter(img => img.category === filter);

  // الحصول على التصنيفات الفريدة
  const categories = ["all", ...new Set(allImages.map(img => img.category))];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
    setZoomLevel(1);
    setShowInfo(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
    setZoomLevel(1);
    setShowInfo(false);
  };

  const handleLike = (index: number) => {
    setLikedImages(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const handleDownload = async (src: string, title: string) => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title}-${Date.now()}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('فشل التحميل:', error);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: filteredImages[currentIndex].title,
          text: `شاهد هذا المشروع من ${siteData.brand.name}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('تم إلغاء المشاركة');
      }
    } else {
      // نسخ الرابط
      navigator.clipboard?.writeText(window.location.href);
      alert("تم نسخ الرابط!");
    }
  };

  // تأثيرات لوحة المفاتيح
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === '+' || e.key === '=') setZoomLevel(prev => Math.min(prev + 0.25, 3));
      if (e.key === '-') setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
      if (e.key === 'f') setIsFullscreen(prev => !prev);
      if (e.key === 'i') setShowInfo(prev => !prev);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  // قفل التمرير عند فتح المودال
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className="space-y-6">
      {/* فلتر التصنيفات */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap justify-center gap-2 mb-8"
      >
        {categories.map((cat, idx) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat === "all" ? "الكل" : cat}
            <span className={`mr-2 text-xs ${
              filter === cat ? "text-white/80" : "text-gray-400"
            }`}>
              ({cat === "all" ? allImages.length : allImages.filter(img => img.category === cat).length})
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* شبكة الصور */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredImages.slice(0, 12).map((image, index) => {
            const isLiked = likedImages.includes(allImages.findIndex(img => img.src === image.src));
            
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
                  setSelectedImage(image);
                  setCurrentIndex(filteredImages.findIndex(img => img.src === image.src));
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
                    <span className="text-white text-sm font-medium block truncate">
                      {image.title}
                    </span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-white/70 text-xs">{image.category}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(allImages.findIndex(img => img.src === image.src));
                        }}
                        className="text-white hover:text-red-500 transition-colors"
                      >
                        <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                      </button>
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
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Grid size={20} />
            عرض المزيد
          </motion.button>
        </motion.div>
      )}

      {/* Modal لعرض الصورة المكبرة */}
      <AnimatePresence>
        {selectedImage && (
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
                isFullscreen ? 'w-screen h-screen p-0' : 'max-w-6xl w-full max-h-[90vh]'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* شريط التحكم العلوي */}
              <div className={`absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent p-4 ${
                isFullscreen ? 'px-8' : ''
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <X size={20} />
                    </button>
                    
                    <button
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-white text-sm">
                      {currentIndex + 1} / {filteredImages.length}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 3))}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <ZoomIn size={20} />
                    </button>
                    
                    <button
                      onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.5))}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <ZoomOut size={20} />
                    </button>
                    
                    <button
                      onClick={() => setShowInfo(!showInfo)}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <Info size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* الصورة */}
              <div className="flex-1 flex items-center justify-center overflow-hidden">
                <motion.img
                  key={currentIndex}
                  src={filteredImages[currentIndex].src}
                  alt={filteredImages[currentIndex].title}
                  className="transition-transform duration-300"
                  style={{
                    transform: `scale(${zoomLevel})`,
                    maxWidth: isFullscreen ? '100vw' : '100%',
                    maxHeight: isFullscreen ? '100vh' : '80vh',
                    objectFit: zoomLevel === 1 ? 'contain' : 'cover',
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
                      isFullscreen ? 'px-8' : ''
                    }`}
                  >
                    <h3 className="text-white text-xl font-bold mb-2">
                      {filteredImages[currentIndex].title}
                    </h3>
                    <p className="text-white/70 mb-3">
                      {filteredImages[currentIndex].category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {filteredImages[currentIndex].tags?.map((tag, idx) => (
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
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              {/* أزرار التحكم السفلية */}
              <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 ${
                isFullscreen ? 'px-8' : ''
              }`}>
                <button
                  onClick={() => handleLike(allImages.findIndex(img => img.src === filteredImages[currentIndex].src))}
                  className={`px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2 transition-all ${
                    likedImages.includes(allImages.findIndex(img => img.src === filteredImages[currentIndex].src))
                      ? 'bg-red-500 text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${
                    likedImages.includes(allImages.findIndex(img => img.src === filteredImages[currentIndex].src))
                      ? 'fill-white'
                      : ''
                  }`} />
                  <span>إعجاب</span>
                </button>

                <button
                  onClick={() => handleDownload(filteredImages[currentIndex].src, filteredImages[currentIndex].title)}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all flex items-center gap-2"
                >
                  <Download size={16} />
                  <span>تحميل</span>
                </button>

                <button
                  onClick={handleShare}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all flex items-center gap-2"
                >
                  <Share2 size={16} />
                  <span>مشاركة</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}