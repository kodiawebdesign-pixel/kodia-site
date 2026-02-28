"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  ArrowLeft,
  Calendar,
  Tag,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Star,
  Clock,
  Users,
  Award,
  Sparkles,
  Heart
} from "lucide-react";
import React, { useMemo, useState } from "react";
import { siteData } from "@/lib/siteData";
import Section from "./Section";
import Image from "next/image";

// صور افتراضية من Unsplash كبديل للصور المفقودة
const fallbackImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop", // مباني
  "https://images.unsplash.com/photo-1556742212-5b321f3c261b?w=600&h=400&fit=crop", // متجر
  "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop", // تقني
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop", // تعليم
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", // تطبيق
];

type TextOrObj =
  | string
  | {
      icon?: any;
      title?: string;
      desc?: string;
      name?: string;
      label?: string;
      value?: string;
    };

interface PortfolioItem {
  slug: string;
  title: string;
  summary: string;
  image?: string;
  images?: string[];
  tags?: TextOrObj[];
  deliverables?: TextOrObj[];
  year?: string;
  client?: string;
  category?: string;
  categoryKey?: string;
}

interface PortfolioTab {
  label: string;
  key: string;
  items: PortfolioItem[];
}

// ألوان للتصنيفات - محدثة بالبنفسجي
const categoryColors: Record<string, string> = {
  "شركات": "from-violet-600 to-fuchsia-600",
  "متاجر": "from-blue-600 to-cyan-600",
  "سياحة": "from-amber-600 to-orange-600",
  "تعليم": "from-emerald-600 to-teal-600",
  "تطبيقات": "from-purple-600 to-pink-600",
  "مقاولات": "from-indigo-600 to-violet-600",
  "عيادة": "from-rose-600 to-red-600",
  "شحن": "from-sky-600 to-indigo-600",
  "ملابس": "from-gray-700 to-gray-900",
  "إلكترونيات": "from-cyan-600 to-blue-600",
};

function isObj(v: unknown): v is Record<string, any> {
  return typeof v === "object" && v !== null;
}

function getText(value: TextOrObj): string {
  if (typeof value === "string") return value;
  if (!isObj(value)) return "";
  return (
    value.title ??
    value.name ??
    value.label ??
    value.value ??
    value.desc ??
    ""
  );
}

function getStableKey(prefix: string, value: TextOrObj, idx: number) {
  const text = getText(value);
  return `${prefix}-${text || "item"}-${idx}`;
}

function renderMaybeIcon(icon: any) {
  if (!icon) return null;
  if (typeof icon === "string") return <span>{icon}</span>;
  const IconComp = icon;
  try {
    return <IconComp className="w-3 h-3" />;
  } catch {
    return null;
  }
}

export default function RecentProjects() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState<string>("all");

  // جمع المشاريع
  const allProjects = useMemo<PortfolioItem[]>(() => {
    if (!siteData?.home?.portfolioTabs) return [];

    const tabs = siteData.home.portfolioTabs as PortfolioTab[];
    return tabs
      .flatMap((tab) =>
        (tab.items || []).map((item) => ({
          ...item,
          category: tab.label,
          categoryKey: tab.key,
        }))
      )
      .slice(0, 9);
  }, []);

  // تصفية المشاريع
  const filteredProjects = useMemo(() => {
    if (filter === "all") return allProjects;
    return allProjects.filter((p) => p.categoryKey === filter);
  }, [filter, allProjects]);

  // الفئات المتاحة - محدثة
  const categories = [
    { key: "all", label: "الكل", color: "from-violet-600 to-fuchsia-600" },
    { key: "company", label: "شركات", color: "from-violet-600 to-fuchsia-600" },
    { key: "ecommerce", label: "متاجر", color: "from-blue-600 to-cyan-600" },
    { key: "tourism", label: "سياحة", color: "from-amber-600 to-orange-600" },
    { key: "education", label: "تعليم", color: "from-emerald-600 to-teal-600" },
    { key: "apps", label: "تطبيقات", color: "from-purple-600 to-pink-600" },
  ];

  const handleProjectClick = (project: PortfolioItem) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedProject?.images?.length) {
      setCurrentImageIndex((prev) =>
        prev < selectedProject.images!.length - 1 ? prev + 1 : 0
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject?.images?.length) {
      setCurrentImageIndex((prev) =>
        prev > 0 ? prev - 1 : selectedProject.images!.length - 1
      );
    }
  };

  if (!allProjects.length) return null;

  return (
    <Section
      title="أحدث النماذج"
      subtitle="نماذج حقيقية تعكس أسلوبنا في التصميم والتنفيذ باحترافية عالية"
      badge="معرض الأعمال"
      className="bg-gradient-to-b from-white to-violet-50/30 dark:from-gray-950 dark:to-violet-950/20"
    >
      {/* أزرار التصفية - تصميم محسن */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((cat) => {
          const isActive = filter === cat.key;
          return (
            <motion.button
              key={cat.key}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat.key)}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                isActive
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-lg shadow-violet-600/20`
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg"
              }`}
            >
              {cat.label}
            </motion.button>
          );
        })}
      </motion.div>

      {/* شبكة المشاريع */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const rawTags = Array.isArray(project.tags) ? project.tags : [];
            const tagsText = rawTags.map(getText).filter(Boolean);
            const mainTag = tagsText[0] || project.category || "مشروع";
            const colorClass = categoryColors[mainTag] || "from-violet-600 to-fuchsia-600";
            
            // استخدام صورة حقيقية أو صورة افتراضية
            const projectImage = project.image || fallbackImages[index % fallbackImages.length];

            return (
              <motion.div
                key={project.slug || `project-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* صورة المشروع */}
                  <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <Image
                      src={projectImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* طبقة داكنة مع أيقونة المعاينة */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-center justify-center"
                    >
                      <motion.div 
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                        className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-violet-600 shadow-xl"
                      >
                        <Eye className="w-6 h-6" />
                      </motion.div>
                    </motion.div>

                    {/* شارة التصنيف */}
                    <div className="absolute top-3 right-3">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r ${colorClass} text-white text-xs font-bold rounded-full shadow-lg`}
                      >
                        <Tag className="w-3 h-3" />
                        {mainTag}
                      </span>
                    </div>

                    {/* شارة السنة */}
                    {project.year && (
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                          <Calendar className="w-3 h-3" />
                          {project.year}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* محتوى البطاقة */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>٤.٩</span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* التاجات */}
                    {rawTags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {rawTags.slice(0, 3).map((tag, idx) => {
                          const text = getText(tag);
                          if (!text) return null;

                          return (
                            <span
                              key={getStableKey(`${project.slug}-tag`, tag, idx)}
                              className="px-2.5 py-1 bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs rounded-full inline-flex items-center gap-1 font-medium"
                            >
                              {isObj(tag) ? renderMaybeIcon(tag.icon) : null}
                              {text}
                            </span>
                          );
                        })}
                      </div>
                    )}

                    {/* مميزات المشروع */}
                    {Array.isArray(project.deliverables) && project.deliverables.length > 0 && (
                      <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                        <div className="flex flex-wrap gap-2">
                          {project.deliverables.slice(0, 3).map((d, idx) => {
                            const text = getText(d);
                            if (!text) return null;

                            return (
                              <span
                                key={getStableKey(`${project.slug}-del`, d, idx)}
                                className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 px-2.5 py-1 rounded-full inline-flex items-center gap-1 border border-gray-100 dark:border-gray-600"
                              >
                                {isObj(d) ? renderMaybeIcon(d.icon) : <Sparkles className="w-3 h-3 text-amber-400" />}
                                {text}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* خط سفلي متدرج */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClass}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: "right" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700"
        >
          لا توجد مشاريع في هذا التصنيف
        </motion.div>
      )}

      {/* زر عرض كل المشاريع */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-16"
      >
        <Link href="/portfolio">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span>استعرض جميع المشاريع</span>
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
        </Link>
      </motion.div>

      {/* نافذة عرض المشروع المكبرة - محسنة */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* رأس النافذة */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/70 to-transparent p-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-white text-2xl font-bold">
                    {selectedProject.title}
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* محتوى النافذة */}
              <div className="grid md:grid-cols-2 h-full">
                {/* الجانب الأيمن - معرض الصور */}
                <div className="relative bg-gray-100 dark:bg-gray-900 h-64 md:h-auto">
                  <Image
                    src={
                      selectedProject.images?.[currentImageIndex] ||
                      selectedProject.image ||
                      fallbackImages[0]
                    }
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                  />

                  {/* أزرار التنقل بين الصور */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handlePrevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </motion.button>

                      {/* مؤشر الصور */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((_, idx) => (
                          <motion.button
                            key={`thumb-${selectedProject.slug}-${idx}`}
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`h-2 rounded-full transition-all ${
                              idx === currentImageIndex
                                ? "w-6 bg-white"
                                : "w-2 bg-white/50 hover:bg-white/80"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* الجانب الأيسر - تفاصيل المشروع */}
                <div className="p-8 overflow-y-auto">
                  <div className="space-y-6">
                    {/* التصنيفات */}
                    {Array.isArray(selectedProject.tags) && selectedProject.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, idx) => {
                          const text = getText(tag);
                          if (!text) return null;

                          return (
                            <span
                              key={getStableKey(`modal-tag-${selectedProject.slug}`, tag, idx)}
                              className="px-3 py-1.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm rounded-full inline-flex items-center gap-1 font-medium"
                            >
                              {isObj(tag) ? renderMaybeIcon(tag.icon) : <Sparkles className="w-3 h-3" />}
                              {text}
                            </span>
                          );
                        })}
                      </div>
                    )}

                    {/* الوصف */}
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      {selectedProject.summary}
                    </p>

                    {/* المميزات */}
                    {Array.isArray(selectedProject.deliverables) &&
                      selectedProject.deliverables.length > 0 && (
                        <div>
                          <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">المميزات:</h3>
                          <ul className="space-y-2">
                            {selectedProject.deliverables.map((d, idx) => {
                              const text = getText(d);
                              if (!text) return null;

                              return (
                                <li
                                  key={getStableKey(`modal-del-${selectedProject.slug}`, d, idx)}
                                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                                >
                                  <span className="w-2 h-2 bg-violet-500 rounded-full" />
                                  {isObj(d) ? (
                                    <span className="inline-flex items-center gap-2">
                                      {renderMaybeIcon(d.icon)}
                                      <span className="font-medium">{text}</span>
                                    </span>
                                  ) : (
                                    text
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}

                    {/* معلومات إضافية */}
                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                      {selectedProject.year && (
                        <div>
                          <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">السنة</span>
                          <p className="font-bold text-lg text-gray-900 dark:text-white">{selectedProject.year}</p>
                        </div>
                      )}
                      {selectedProject.client && (
                        <div>
                          <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">العميل</span>
                          <p className="font-bold text-lg text-gray-900 dark:text-white">{selectedProject.client}</p>
                        </div>
                      )}
                    </div>

                    {/* زر مشاهدة المشروع */}
                    <Link href={`/portfolio/${selectedProject.slug}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full mt-6 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <span>صفحة المشروع كاملة</span>
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
