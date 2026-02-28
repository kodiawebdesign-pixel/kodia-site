"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  BookOpen,
  TrendingUp,
  Award,
  Zap
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";

// بيانات ثابتة للمشاهدات والإعجابات والتعليقات
const viewCounts = [1231, 856, 691, 945, 1102, 768, 534, 1230, 876, 654];
const likesCounts = [89, 67, 92, 78, 84, 71, 65, 93, 77, 82];
const commentsCounts = [23, 15, 31, 19, 27, 16, 12, 29, 21, 18];

// صور حقيقية من Unsplash للمقالات
const blogImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1556742212-5b321f3c261b?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
];

// إضافة صور حقيقية للمقالات
const blogWithImages = siteData.home.blog.items.map((item, index) => ({
  ...item,
  image: blogImages[index % blogImages.length],
  date: ["١٥ مارس ٢٠٢٤", "١٠ مارس ٢٠٢٤", "٥ مارس ٢٠٢٤", "١ مارس ٢٠٢٤", "٢٥ فبراير ٢٠٢٤"][index % 5],
  readTime: ["٥ دقائق", "٧ دقائق", "٤ دقائق", "٦ دقائق", "٨ دقائق"][index % 5],
  views: viewCounts[index % viewCounts.length],
  likes: likesCounts[index % likesCounts.length],
  comments: commentsCounts[index % commentsCounts.length],
  author: "فريق Kodia",
  authorAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
  summary: [
    "تعرف على أسرار تحسين التحويل في المواقع الإلكترونية وكيف تجعل زوارك يتواصلون معك.",
    "مقارنة بين أفضل شركات الاستضافة وأهم العوامل التي تحدد اختيارك.",
    "١٠ خطوات أساسية لتحسين ظهور موقعك في نتائج البحث وجذب زوار مجانيين.",
    "احذر هذه الأخطاء الشائعة في تصميم التطبيقات التي تجعل المستخدمين يحذفون تطبيقك.",
    "٥ أسباب تجعل المتجر الإلكتروني ضرورة لأي نشاط تجاري اليوم.",
  ][index % 5],
  featured: index === 0,
}));

// ألوان متدرجة للتصنيفات - محدثة بالبنفسجي
const categoryColors: Record<string, string> = {
  "تصميم مواقع": "from-violet-600 to-fuchsia-600",
  "استضافة": "from-blue-600 to-cyan-600",
  "SEO": "from-emerald-600 to-teal-600",
  "تطبيقات": "from-amber-600 to-orange-600",
  "تجارة إلكترونية": "from-purple-600 to-pink-600",
  "تصميم": "from-indigo-600 to-violet-600",
};

// إحصائيات المدونة
const blogStats = [
  { icon: BookOpen, label: "مقال", value: blogWithImages.length, color: "from-violet-600 to-fuchsia-600" },
  { icon: Eye, label: "مشاهدة شهرية", value: "١.٢ك+", color: "from-blue-600 to-cyan-600" },
  { icon: Heart, label: "تفاعل", value: "٤٠٠+", color: "from-amber-600 to-orange-600" },
  { icon: TrendingUp, label: "نمو", value: "+٥٠٪", color: "from-green-600 to-emerald-600" },
];

export default function BlogPreview() {
  const b = siteData.home.blog;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // المقال المميز (الأول)
  const featuredPost = blogWithImages[0];
  const regularPosts = blogWithImages.slice(1, 4); // 3 مقالات بعد المميز

  return (
    <Section 
      title={b.title}
      subtitle="نصائح وأفكار لتطوير أعمالك الرقمية"
      badge="المدونة"
      className="bg-gradient-to-b from-white to-violet-50/30 dark:from-gray-950 dark:to-violet-950/20"
    >
      {/* المقال المميز */}
      {featuredPost && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 group"
        >
          <Link href={featuredPost.href}>
            <div className="relative bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl overflow-hidden shadow-2xl">
              {/* خلفية متحركة */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"
              />

              <div className="relative p-8 md:p-12 text-white">
                <div className="max-w-2xl">
                  {/* شارة مميز */}
                  <div className="flex gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                      <Award className="w-4 h-4 text-yellow-300" />
                      مقال مميز
                    </span>
                    <span className={`inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r ${
                      categoryColors[featuredPost.category] || "from-violet-600 to-fuchsia-600"
                    } text-white text-sm rounded-full shadow-lg`}>
                      <Tag className="w-3 h-3" />
                      {featuredPost.category}
                    </span>
                  </div>

                  {/* العنوان */}
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>

                  {/* الملخص */}
                  <p className="text-white/90 mb-6 text-lg leading-relaxed">
                    {featuredPost.summary}
                  </p>

                  {/* معلومات المقال */}
                  <div className="flex items-center gap-4 text-sm text-white/80 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {featuredPost.views}
                    </span>
                  </div>

                  {/* الكاتب */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
                      <Image
                        src={featuredPost.authorAvatar}
                        alt={featuredPost.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{featuredPost.author}</div>
                      <div className="text-xs text-white/70">خبير تقني</div>
                    </div>
                  </div>

                  {/* زر القراءة */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-violet-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    <span>اقرأ المقال كاملاً</span>
                    <ArrowLeft className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      )}

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
        {regularPosts.map((post, idx) => {
          const gradient = categoryColors[post.category] || "from-violet-600 to-fuchsia-600";

          return (
            <motion.div
              key={`post-${idx}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <Link href={post.href}>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  {/* خلفية متدرجة متحركة */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* صورة المقال */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* شارة التصنيف */}
                    <div className="absolute top-3 right-3">
                      <span className={`inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r ${gradient} text-white text-xs font-bold rounded-full shadow-lg`}>
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>

                    {/* شارة وقت القراءة */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* محتوى المقال */}
                  <div className="p-5">
                    {/* العنوان */}
                    <h3 className="text-lg font-bold mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors line-clamp-2 text-gray-900 dark:text-white">
                      {post.title}
                    </h3>

                    {/* الملخص */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                      {post.summary}
                    </p>

                    {/* معلومات المقال */}
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
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
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <Heart className="w-3 h-3" />
                          {mounted ? post.likes : post.likes}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <MessageCircle className="w-3 h-3" />
                          {mounted ? post.comments : post.comments}
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-violet-600 dark:text-violet-400 group-hover:gap-2 transition-all">
                        <span>اقرأ المزيد</span>
                        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* الكاتب */}
                    <div className="mt-3 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white">
                        <User className="w-3 h-3" />
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">{post.author}</span>
                    </div>
                  </div>

                  {/* خط سفلي متدرج */}
                  <motion.div 
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: "right" }}
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
        className="mt-16 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 rounded-2xl p-6 border border-violet-100 dark:border-violet-800"
      >
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
          <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
          المقالات الأكثر قراءة
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          {blogWithImages.slice(0, 3).map((post, idx) => (
            <Link key={`popular-${idx}`} href={post.href}>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-lg flex items-center justify-center text-white">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-1 line-clamp-1 text-gray-900 dark:text-white">{post.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            }
          }
        }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {blogStats.map((stat, idx) => (
          <motion.div
            key={`stat-${idx}`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -4 }}
            className="text-center p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
          >
            <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${stat.color} p-2 text-white`}>
              <stat.icon className="w-full h-full" />
            </div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* زر عرض كل المقالات */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center mt-12"
      >
        <Link href="/blog">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            <span>جميع المقالات</span>
            <ArrowLeft className="w-4 h-4" />
          </motion.button>
        </Link>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
          * مقالات أسبوعية • نصائح حصرية • محتوى قيم
        </p>
      </motion.div>
    </Section>
  );
}
