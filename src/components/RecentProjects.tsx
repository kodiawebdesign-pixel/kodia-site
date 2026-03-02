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
} from "lucide-react";
import React, { useMemo, useState } from "react";
import { siteData } from "@/lib/siteData";
import Section from "./Section";

// لو عندك tags أو deliverables ممكن تجي objects بالشكل ده
type TextOrObj =
  | string
  | {
      icon?: any; // ممكن يكون React component أو string
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

  // نضيفهم لأنك بتضيفهم runtime داخل allProjects
  category?: string; // tab.label
  categoryKey?: string; // tab.key
}

interface PortfolioTab {
  label: string;
  key: string;
  items: PortfolioItem[];
}

// ألوان للتصنيفات
const categoryColors: Record<string, string> = {
  "شركات": "from-blue-500 to-cyan-500",
  "متاجر": "from-emerald-500 to-teal-500",
  "سياحة": "from-orange-500 to-amber-500",
  "تعليم": "from-purple-500 to-pink-500",
  "تطبيقات": "from-indigo-500 to-blue-500",
  "مقاولات": "from-amber-500 to-yellow-500",
  "عيادة": "from-rose-500 to-red-500",
  "شحن": "from-violet-500 to-purple-500",
  "ملابس": "from-gray-500 to-gray-600",
  "إلكترونيات": "from-sky-500 to-indigo-500",
};

function isObj(v: unknown): v is Record<string, any> {
  return typeof v === "object" && v !== null;
}

/**
 * يحول أي tag/deliverable (string أو object) إلى نص آمن للعرض
 */
function getText(value: TextOrObj): string {
  if (typeof value === "string") return value;
  if (!isObj(value)) return "";

  return (
    value.title ??
    value.name ??
    value.label ??
    value.value ??
    value.desc ??
    "[غير معروف]"
  );
}

/**
 * مفتاح آمن وفريد للـ map حتى لو العنصر object
 */
function getStableKey(prefix: string, value: TextOrObj, idx: number) {
  const text = getText(value);
  // لو text فاضي أو مكرر، نعزز بـ idx
  return `${prefix}-${text || "item"}-${idx}`;
}

/**
 * لو icon موجود و هو component نعرضه، لو string نعرضه كنص
 */
function renderMaybeIcon(icon: any) {
  if (!icon) return null;
  if (typeof icon === "string") return <span>{icon}</span>;
  // لو React component
  const IconComp = icon;
  try {
    return <IconComp className="w-4 h-4" />;
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

  // الفئات المتاحة
  const categories = [
    { key: "all", label: "الكل" },
    { key: "company", label: "شركات" },
    { key: "ecommerce", label: "متاجر" },
    { key: "tourism", label: "سياحة" },
    { key: "education", label: "تعليم" },
    { key: "apps", label: "تطبيقات" },
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

  // إذا لا توجد مشاريع، لا تعرض شيئاً
  if (!allProjects.length) return null;

  return (
    <Section
      title="أحدث النماذج"
      subtitle="نماذج حقيقية تعكس أسلوبنا في التصميم والتنفيذ باحترافية عالية"
      badge="معرض الأعمال"
    >
      {/* أزرار التصفية */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {categories.map((cat) => (
          <motion.button
            key={cat.key}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(cat.key)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === cat.key
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat.label}
          </motion.button>
        ))}
      </motion.div>

      {/* شبكة المشاريع */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => {
            // tags قد تكون strings أو objects
            const rawTags = Array.isArray(project.tags) ? project.tags : [];
            const tagsText = rawTags.map(getText).filter(Boolean);

            const mainTag =
              tagsText[0] || project.category || "مشروع";

            const colorClass =
              categoryColors[mainTag] || "from-gray-500 to-gray-600";

            const imageSrc = project.image || `/images/placeholder.jpg`;

            return (
              <motion.div
                key={project.slug ? `project-${project.slug}` : `project-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative bg-white rounded-2xl border border-gray-200/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* صورة المشروع */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={imageSrc}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = "/images/placeholder.jpg";
                      }}
                    />

                    {/* طبقة داكنة مع أيقونة المعاينة */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-blue-600">
                        <Eye className="w-6 h-6" />
                      </div>
                    </div>

                    {/* شارة التصنيف */}
                    <div className="absolute top-3 right-3">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${colorClass} text-white text-xs font-bold rounded-full shadow-lg`}
                      >
                        <Tag className="w-3 h-3" />
                        {mainTag}
                      </span>
                    </div>

                    {/* شارة السنة */}
                    {project.year && (
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                          <Calendar className="w-3 h-3" />
                          {project.year}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* محتوى البطاقة */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
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
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full inline-flex items-center gap-1"
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
                      <div className="border-t border-gray-100 pt-3">
                        <div className="flex flex-wrap gap-1">
                          {project.deliverables.slice(0, 3).map((d, idx) => {
                            const text = getText(d);
                            if (!text) return null;

                            return (
                              <span
                                key={getStableKey(`${project.slug}-del`, d, idx)}
                                className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full inline-flex items-center gap-1"
                              >
                                {isObj(d) ? renderMaybeIcon(d.icon) : null}
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
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          لا توجد مشاريع في هذا التصنيف
        </div>
      )}

      {/* زر عرض كل المشاريع */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link href="/portfolio">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span>استعرض جميع المشاريع</span>
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
        </Link>
      </motion.div>

      {/* نافذة عرض المشروع المكبرة */}
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* رأس النافذة */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-white text-xl font-bold">
                    {selectedProject.title}
                  </h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* محتوى النافذة */}
              <div className="grid md:grid-cols-2 h-full">
                {/* الجانب الأيمن - معرض الصور */}
                <div className="relative bg-gray-100 h-64 md:h-auto">
                  <img
                    src={
                      selectedProject.images?.[currentImageIndex] ||
                      selectedProject.image ||
                      "/images/placeholder.jpg"
                    }
                    alt={selectedProject.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "/images/placeholder.jpg";
                    }}
                  />

                  {/* أزرار التنقل بين الصور */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>

                      {/* مؤشر الصور */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        {selectedProject.images.map((_, idx) => (
                          <button
                            key={`thumb-${selectedProject.slug}-${idx}`}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === currentImageIndex
                                ? "w-4 bg-white"
                                : "bg-white/50 hover:bg-white/80"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* الجانب الأيسر - تفاصيل المشروع */}
                <div className="p-6 overflow-y-auto">
                  <div className="space-y-4">
                    {/* التصنيفات */}
                    {Array.isArray(selectedProject.tags) && selectedProject.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, idx) => {
                          const text = getText(tag);
                          if (!text) return null;

                          return (
                            <span
                              key={getStableKey(`modal-tag-${selectedProject.slug}`, tag, idx)}
                              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full inline-flex items-center gap-1"
                            >
                              {isObj(tag) ? renderMaybeIcon(tag.icon) : null}
                              {text}
                            </span>
                          );
                        })}
                      </div>
                    )}

                    {/* الوصف */}
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProject.summary}
                    </p>

                    {/* المميزات */}
                    {Array.isArray(selectedProject.deliverables) &&
                      selectedProject.deliverables.length > 0 && (
                        <div>
                          <h3 className="font-bold mb-2">المميزات:</h3>
                          <ul className="space-y-1">
                            {selectedProject.deliverables.map((d, idx) => {
                              const text = getText(d);
                              if (!text) return null;

                              return (
                                <li
                                  key={getStableKey(`modal-del-${selectedProject.slug}`, d, idx)}
                                  className="flex items-center gap-2 text-sm text-gray-600"
                                >
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                  {isObj(d) ? (
                                    <span className="inline-flex items-center gap-1">
                                      {renderMaybeIcon(d.icon)}
                                      {text}
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
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      {selectedProject.year && (
                        <div>
                          <span className="text-xs text-gray-500">السنة</span>
                          <p className="font-semibold">{selectedProject.year}</p>
                        </div>
                      )}
                      {selectedProject.client && (
                        <div>
                          <span className="text-xs text-gray-500">العميل</span>
                          <p className="font-semibold">{selectedProject.client}</p>
                        </div>
                      )}
                    </div>

                    {/* زر مشاهدة المشروع */}
                    <Link href={`/portfolio/${selectedProject.slug}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full mt-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
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