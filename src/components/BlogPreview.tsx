"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  Eye, 
  Heart, 
  MessageCircle,
  ArrowLeft,
  Tag,
  User,
  Star,
  Sparkles,
  BookOpen
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";

// بيانات ثابتة للمشاهدات والإعجابات والتعليقات
const viewCounts = [1231, 856, 691, 945, 1102, 768, 534, 1230, 876, 654];
const likesCounts = [89, 67, 92, 78, 84, 71, 65, 93, 77, 82];
const commentsCounts = [23, 15, 31, 19, 27, 16, 12, 29, 21, 18];

// إضافة صور وهمية للمقالات - بأرقام ثابتة
const blogWithImages = siteData.home.blog.items.map((item, index) => ({
  ...item,
  image: `/images/blog/blog-${index + 1}.jpg`,
  date: ["١٥ مارس ٢٠٢٤", "١٠ مارس ٢٠٢٤", "٥ مارس ٢٠٢٤", "١ مارس ٢٠٢٤", "٢٥ فبراير ٢٠٢٤"][index % 5],
  readTime: ["٥ دقائق", "٧ دقائق", "٤ دقائق", "٦ دقائق", "٨ دقائق"][index % 5],
  views: viewCounts[index % viewCounts.length],
  likes: likesCounts[index % likesCounts.length],
  comments: commentsCounts[index % commentsCounts.length],
  author: "فريق Kodia",
  summary: [
    "تعرف على أسرار تحسين التحويل في المواقع الإلكترونية وكيف تجعل زوارك يتواصلون معك.",
    "مقارنة بين أفضل شركات الاستضافة وأهم العوامل التي تحدد اختيارك.",
    "١٠ خطوات أساسية لتحسين ظهور موقعك في نتائج البحث وجذب زوار مجانيين.",
    "احذر هذه الأخطاء الشائعة في تصميم التطبيقات التي تجعل المستخدمين يحذفون تطبيقك.",
    "٥ أسباب تجعل المتجر الإلكتروني ضرورة لأي نشاط تجاري اليوم.",
  ][index % 5],
}));

// ألوان متدرجة للتصنيفات
const categoryColors: Record<string, string> = {
  "تصميم مواقع": "from-blue-500 to-cyan-500",
  "استضافة": "from-purple-500 to-pink-500",
  "SEO": "from-emerald-500 to-teal-500",
  "تطبيقات": "from-orange-500 to-amber-500",
  "تجارة إلكترونية": "from-indigo-500 to-blue-500",
};

export default function BlogPreview() {
  const b = siteData.home.blog;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section 
      title={b.title}
      subtitle="نصائح وأفكار لتطوير أعمالك الرقمية"
      badge="المدونة"
    >
      {/* شبكة المقالات */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {blogWithImages.map((post, idx) => {
          const gradient = categoryColors[post.category] || "from-gray-500 to-gray-600";

          return (
            <motion.div
              key={`post-${idx}`}
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
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <Link href={post.href}>
                <div className="relative bg-white rounded-2xl border border-gray-200/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  {/* خلفية متدرجة متحركة */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* صورة المقال */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    {/* مكان الصورة - يمكن استبدالها بصور حقيقية */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
                    
                    {/* أيقونة المقالة كخلفية مؤقتة */}
                    <div className="absolute inset-0 flex items-center justify-center">
<BookOpen className="w-16 h-16 text-blue-600 opacity-20" />                    </div>

                    {/* شارة التصنيف */}
                    <div className="absolute top-3 right-3">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${gradient} text-white text-xs font-bold rounded-full shadow-lg`}>
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>

                    {/* شارة وقت القراءة */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* محتوى المقال */}
                  <div className="p-5">
                    {/* العنوان */}
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* الملخص */}
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {post.summary}
                    </p>

                    {/* معلومات المقال */}
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {mounted ? post.views : post.views}
                      </div>
                    </div>

                    {/* تفاعلات المقال */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Heart className="w-3 h-3" />
                          {mounted ? post.likes : post.likes}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <MessageCircle className="w-3 h-3" />
                          {mounted ? post.comments : post.comments}
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-blue-600">
                        <span>اقرأ المزيد</span>
                        <ArrowLeft className="w-3 h-3" />
                      </div>
                    </div>

                    {/* الكاتب */}
                    <div className="mt-3 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
                        <User className="w-3 h-3" />
                      </div>
                      <span className="text-xs text-gray-600">{post.author}</span>
                    </div>
                  </div>

                  {/* خط سفلي متدرج */}
                  <motion.div 
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {/* المقالات الأكثر قراءة */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100"
      >
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          المقالات الأكثر قراءة
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          {blogWithImages.slice(0, 3).map((post, idx) => (
            <Link key={`popular-${idx}`} href={post.href}>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-1 line-clamp-1">{post.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Eye className="w-3 h-3" />
                    {mounted ? post.views : post.views} مشاهدة
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* إحصائيات المدونة */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { icon: BookOpen, label: "مقال", value: blogWithImages.length },
          { icon: Eye, label: "مشاهدة شهرية", value: "٥٠٠+" },
          { icon: Heart, label: "تفاعل", value: "٢٠٠+" },
          { icon: User, label: "كاتب", value: "٣" },
        ].map((stat, idx) => (
          <motion.div
            key={`stat-${idx}`}
            whileHover={{ y: -4 }}
            className="text-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
          >
            <stat.icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-gray-900">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* زر عرض كل المقالات */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center mt-8"
      >
        <Link href="/blog">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            <span>جميع المقالات</span>
            <ArrowLeft className="w-4 h-4" />
          </motion.button>
        </Link>
      </motion.div>
    </Section>
  );
}