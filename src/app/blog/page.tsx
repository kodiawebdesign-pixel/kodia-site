"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/Container";
import { siteData } from "@/lib/siteData";
import {
  Calendar,
  Clock,
  Eye,
  Heart,
  MessageCircle,
  ArrowLeft,
  Tag,
  Search,
  Sparkles,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Star,
  User,
  Share2,
  Bookmark,
  Filter,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

// أرقام ثابتة للمشاهدات والإعجابات
const viewCounts = [856, 691, 945, 1102, 768, 534, 1230, 876, 654, 432];
const likesCounts = [67, 92, 78, 84, 71, 65, 93, 77, 82, 54];
const commentsCounts = [15, 31, 19, 27, 16, 12, 29, 21, 18, 23];

// توسيع بيانات المدونة مع صور وتفاصيل إضافية
const blogData = siteData.home.blog;

// صور حقيقية للمقالات من Unsplash
const blogImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1556742212-5b321f3c261b?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
];

// إضافة صور وهمية للمقالات
const blogWithImages = blogData.items.map((item, index) => ({
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
    "تعرف على أسرار تحسين التحويل في المواقع الإلكترونية وكيف تجعل زوارك يتواصلون معك بفعالية.",
    "مقارنة شاملة بين أفضل شركات الاستضافة وأهم العوامل التي تحدد اختيارك الأمثل.",
    "١٠ خطوات أساسية لتحسين ظهور موقعك في نتائج البحث وجذب زوار مجانيين بكثافة.",
    "احذر هذه الأخطاء الشائعة في تصميم التطبيقات التي تجعل المستخدمين يحذفون تطبيقك.",
    "٥ أسباب تجعل المتجر الإلكتروني ضرورة حتمية لأي نشاط تجاري اليوم.",
    "أحدث اتجاهات تصميم المواقع في ٢٠٢٤ وكيف تطبقها في مشروعك.",
  ][index % 6],
  featured: index === 0,
}));

// ألوان متدرجة للتصنيفات
const categoryColors: Record<string, string> = {
  "تصميم مواقع": "from-violet-600 to-fuchsia-600",
  "استضافة": "from-blue-600 to-cyan-600",
  "SEO": "from-emerald-600 to-teal-600",
  "تطبيقات": "from-amber-600 to-orange-600",
  "تجارة إلكترونية": "from-purple-600 to-pink-600",
  "تصميم": "from-indigo-600 to-violet-600",
};

// قائمة التصنيفات للفلترة
const categories = [
  { id: "all", label: "الكل", count: blogWithImages.length },
  { id: "تصميم مواقع", label: "تصميم مواقع", count: 3 },
  { id: "استضافة", label: "استضافة", count: 2 },
  { id: "SEO", label: "SEO", count: 2 },
  { id: "تطبيقات", label: "تطبيقات", count: 2 },
  { id: "تجارة إلكترونية", label: "تجارة إلكترونية", count: 3 },
];

// مقالات مقترحة
const suggestedTopics = [
  "تحسين محركات البحث",
  "تصميم واجهات المستخدم",
  "تسويق إلكتروني",
  "تحليل البيانات",
  "أمن المعلومات",
  "تجربة المستخدم",
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);
  const postsPerPage = 6;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortBy]);

  const q = searchQuery.trim().toLowerCase();

  // تصفية المقالات
  const filteredPosts = useMemo(() => {
    let filtered = blogWithImages.filter((post) => {
      const title = (post.title ?? "").toLowerCase();
      const summary = (post.summary ?? "").toLowerCase();
      const category = (post.category ?? "").toLowerCase();

      const matchesSearch =
        q === "" || title.includes(q) || summary.includes(q) || category.includes(q);

      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    // ترتيب المقالات
    if (sortBy === "newest") {
      filtered = filtered.sort((a, b) => (a.date > b.date ? -1 : 1));
    } else if (sortBy === "popular") {
      filtered = filtered.sort((a, b) => (b.views || 0) - (a.views || 0));
    } else if (sortBy === "mostLiked") {
      filtered = filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
    }

    return filtered;
  }, [q, selectedCategory, sortBy]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const featuredPosts = blogWithImages.filter((post) => post.featured);
  const featuredPost = featuredPosts[0];
  const regularPosts = currentPosts.filter((post) => !post.featured);

  // متغيرات الحركة
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  };

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-violet-50/10 to-white dark:from-gray-950 dark:via-violet-950/10 dark:to-gray-950">
      {/* قسم الهيرو */}
      <section className="relative py-24 overflow-hidden">
        {/* خلفية متحركة */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-fuchsia-200/30 dark:from-violet-800/20 dark:to-fuchsia-800/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              x: [0, -10, 0],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-violet-200/20 dark:from-amber-800/10 dark:to-violet-800/10 rounded-full blur-3xl"
          />
        </div>

        <Container>
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="text-center max-w-4xl mx-auto"
          >
            {/* شارة الصفحة */}
            <motion.div variants={fadeInUp} className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 dark:from-violet-600/20 dark:to-fuchsia-600/20 rounded-full border border-violet-200/50 dark:border-violet-700/50 backdrop-blur-sm">
                <BookOpen className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">المدونة</span>
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              مدونة
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent mx-2">
                Kodia
              </span>
            </motion.h1>

            {/* الوصف */}
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              نصائح وحلول وأفكار مبتكرة لتطوير أعمالك الرقمية والوصول إلى النجاح
            </motion.p>

            {/* إحصائيات سريعة */}
            <motion.div variants={fadeInUp} className="flex justify-center gap-6 mt-8">
              {[
                { icon: BookOpen, label: "مقالة", value: blogWithImages.length },
                { icon: Eye, label: "مشاهدة", value: "١.٢ك" },
                { icon: User, label: "كاتب", value: "٥" },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <stat.icon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  <span className="text-gray-600 dark:text-gray-400">{stat.value} {stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* شريط البحث والتصنيفات */}
      <section className="py-8">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto space-y-6"
          >
            {/* شريط البحث والفلترة */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* مربع البحث */}
              <div className="relative flex-1">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-12 pl-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent transition-all shadow-sm dark:text-white"
                />
              </div>

              {/* زر الفلترة والترتيب */}
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                >
                  <Filter className="w-5 h-5" />
                  <span className="hidden sm:inline">فلترة</span>
                </motion.button>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                >
                  <option value="newest">الأحدث</option>
                  <option value="popular">الأكثر مشاهدة</option>
                  <option value="mostLiked">الأكثر إعجاباً</option>
                </select>
              </div>
            </div>

            {/* لوحة الفلترة (تظهر عند الضغط) */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg"
              >
                <h3 className="font-bold mb-4 text-gray-900 dark:text-white">تصفية حسب:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {categories.map((cat) => (
                    <motion.button
                      key={`cat-${cat.id}`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setShowFilters(false);
                      }}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        selectedCategory === cat.id
                          ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                    >
                      {cat.label}
                      <span
                        className={`mr-2 text-xs ${
                          selectedCategory === cat.id ? "text-white/80" : "text-gray-400"
                        }`}
                      >
                        {cat.count}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* عدد النتائج وموضوعات مقترحة */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-bold text-violet-600 dark:text-violet-400">{filteredPosts.length}</span> مقالة
              </p>
              
              <div className="flex flex-wrap gap-2">
                {suggestedTopics.slice(0, 4).map((topic, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSearchQuery(topic)}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-violet-100 dark:hover:bg-violet-900/30 text-xs text-gray-600 dark:text-gray-400 rounded-full transition-colors"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* المقال المميز */}
      {featuredPost && selectedCategory === "all" && searchQuery === "" && (
        <section className="py-8">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              <Link href={featuredPost.href ?? "/blog"}>
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
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          مقال مميز
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                          <Tag className="w-3 h-3" />
                          {featuredPost.category ?? "عام"}
                        </span>
                      </div>

                      {/* العنوان */}
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {featuredPost.title}
                      </h2>

                      {/* الملخص */}
                      <p className="text-white/90 mb-6 text-lg leading-relaxed">
                        {featuredPost.summary ?? ""}
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
          </Container>
        </section>
      )}

      {/* شبكة المقالات */}
      <section className="py-12">
        <Container>
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <BookOpen className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">لا توجد مقالات</h3>
              <p className="text-gray-500 dark:text-gray-400">لم نجد مقالات تطابق بحثك. جرب كلمات بحث مختلفة.</p>
            </motion.div>
          ) : (
            <>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                }}
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {regularPosts.map((post, idx) => {
                  const gradient =
                    categoryColors[post.category ?? ""] || "from-violet-600 to-fuchsia-600";
                  const href = post.href ?? "/blog";

                  return (
                    <motion.div
                      key={`post-${post.href}-${idx}`}
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ y: -8 }}
                      className="group relative cursor-pointer"
                    >
                      <Link href={href}>
                        <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                          {/* خلفية متدرجة متحركة */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
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
                              <span
                                className={`inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r ${gradient} text-white text-xs font-bold rounded-full shadow-lg`}
                              >
                                <Tag className="w-3 h-3" />
                                {post.category ?? "عام"}
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
                          <div className="p-6">
                            {/* العنوان */}
                            <h3 className="text-lg font-bold mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors line-clamp-2 text-gray-900 dark:text-white">
                              {post.title}
                            </h3>

                            {/* الملخص */}
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                              {post.summary ?? ""}
                            </p>

                            {/* معلومات المقال */}
                            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {post.date}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Eye className="w-3 h-3" />
                                  {post.views}
                                </div>
                              </div>
                            </div>

                            {/* تفاعلات المقال */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                              <div className="flex items-center gap-3">
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-500 transition-colors"
                                >
                                  <Heart className="w-3 h-3" />
                                  {post.likes}
                                </motion.button>
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                  <MessageCircle className="w-3 h-3" />
                                  {post.comments}
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="p-1.5 text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                                >
                                  <Bookmark className="w-3 h-3" />
                                </motion.button>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="p-1.5 text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                                >
                                  <Share2 className="w-3 h-3" />
                                </motion.button>
                              </div>
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

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex justify-center gap-2 mt-16"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>

                  {[...Array(totalPages)].map((_, idx) => (
                    <motion.button
                      key={`page-${idx + 1}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentPage(idx + 1)}
                      className={`w-12 h-12 rounded-xl font-medium transition-all ${
                        currentPage === idx + 1
                          ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg"
                          : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`}
                    >
                      {idx + 1}
                    </motion.button>
                  ))}

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              )}
            </>
          )}
        </Container>
      </section>

      {/* إحصائيات المدونة */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: BookOpen, label: "مقالات", value: blogWithImages.length, color: "from-violet-600 to-fuchsia-600" },
              { icon: Eye, label: "مشاهدة شهرية", value: "١.٢ك+", color: "from-blue-600 to-cyan-600" },
              { icon: Heart, label: "تفاعل", value: "٤٠٠+", color: "from-amber-600 to-orange-600" },
              { icon: TrendingUp, label: "نمو", value: "+٥٠٪", color: "from-green-600 to-emerald-600" },
            ].map((stat, idx) => (
              <motion.div
                key={`stat-${idx}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -4 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${stat.color} p-3 text-white`}>
                  <stat.icon className="w-full h-full" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* دعوة للاشتراك */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          >
            {/* خلفية متحركة */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">اشترك في نشرتنا البريدية</h2>

              <p className="text-white/90 mb-8 text-lg">
                احصل على أحدث المقالات والنصائح والحلول مباشرة في بريدك الإلكتروني كل أسبوع
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-5 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/95 backdrop-blur-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-violet-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  اشتراك
                </motion.button>
              </div>

              <p className="text-xs text-white/70 mt-6">
                * لن نرسل لك بريداً مزعجاً. يمكنك إلغاء الاشتراك في أي وقت. 
                <span className="block mt-1">نحن نقرأ كل رسالة نرسلها 🙂</span>
              </p>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
