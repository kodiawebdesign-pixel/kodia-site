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
} from "lucide-react";
import { useEffect, useState } from "react";

// أرقام ثابتة للمشاهدات والإعجابات
const viewCounts = [856, 691, 945, 1102, 768, 534, 1230, 876, 654, 432];
const likesCounts = [67, 92, 78, 84, 71, 65, 93, 77, 82, 54];
const commentsCounts = [15, 31, 19, 27, 16, 12, 29, 21, 18, 23];

// توسيع بيانات المدونة مع صور وتفاصيل إضافية - بأرقام ثابتة
const blogData = siteData.home.blog;

// إضافة صور وهمية للمقالات
const blogWithImages = blogData.items.map((item, index) => ({
  ...item,
  image: `/images/blog/blog-${index + 1}.jpg`,
  date: ["١٥ مارس ٢٠٢٤", "١٠ مارس ٢٠٢٤", "٥ مارس ٢٠٢٤", "١ مارس ٢٠٢٤", "٢٥ فبراير ٢٠٢٤"][index % 5],
  readTime: ["٥ دقائق", "٧ دقائق", "٤ دقائق", "٦ دقائق", "٨ دقائق"][index % 5],
  views: viewCounts[index % viewCounts.length],
  likes: likesCounts[index % likesCounts.length],
  comments: commentsCounts[index % commentsCounts.length],
  author: "فريق Kodia",
  authorAvatar: "/images/avatars/author.jpg",
  summary: [
    "تعرف على أسرار تحسين التحويل في المواقع الإلكترونية وكيف تجعل زوارك يتواصلون معك.",
    "مقارنة بين أفضل شركات الاستضافة وأهم العوامل التي تحدد اختيارك.",
    "١٠ خطوات أساسية لتحسين ظهور موقعك في نتائج البحث وجذب زوار مجانيين.",
    "احذر هذه الأخطاء الشائعة في تصميم التطبيقات التي تجعل المستخدمون يحذفون تطبيقك.",
    "٥ أسباب تجعل المتجر الإلكتروني ضرورة لأي نشاط تجاري اليوم.",
  ][index % 5],
  featured: index === 0,
}));

// ألوان متدرجة للتصنيفات
const categoryColors: Record<string, string> = {
  "تصميم مواقع": "from-blue-500 to-cyan-500",
  "استضافة": "from-purple-500 to-pink-500",
  SEO: "from-emerald-500 to-teal-500",
  "تطبيقات": "from-orange-500 to-amber-500",
  "تجارة إلكترونية": "from-indigo-500 to-blue-500",
};

// قائمة التصنيفات للفلترة
const categories = [
  { id: "all", label: "الكل", count: blogWithImages.length },
  { id: "تصميم مواقع", label: "تصميم مواقع", count: 2 },
  { id: "استضافة", label: "استضافة", count: 1 },
  { id: "SEO", label: "SEO", count: 1 },
  { id: "تطبيقات", label: "تطبيقات", count: 1 },
  { id: "تجارة إلكترونية", label: "تجارة إلكترونية", count: 1 },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // لو المستخدم بيبحث أو غير التصنيف، رجّع للصفحة الأولى تلقائياً
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const q = searchQuery.trim().toLowerCase();

  // تصفية المقالات حسب البحث والتصنيف - ✅ إصلاح TypeScript نهائي
  const filteredPosts = blogWithImages.filter((post) => {
    const title = (post.title ?? "").toLowerCase();
    const summary = (post.summary ?? "").toLowerCase();
    const category = (post.category ?? "").toLowerCase();

    const matchesSearch =
      q === "" ||
      title.includes(q) ||
      summary.includes(q) ||
      category.includes(q);

    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // حساب المقالات للصفحة الحالية
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // المقالات المميزة
  const featuredPosts = blogWithImages.filter((post) => post.featured);
  const regularPosts = currentPosts.filter((post) => !post.featured);

  // متغيرات الحركة
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
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
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* قسم الهيرو */}
      <section className="relative py-20 overflow-hidden">
        {/* خلفية متحركة */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div
            className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
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
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full border border-blue-200/50">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">المدونة</span>
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              مدونة
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mx-2">
                Kodia
              </span>
            </motion.h1>

            {/* الوصف */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 leading-relaxed"
            >
              نصائح وأفكار وحلول لتطوير أعمالك الرقمية والوصول إلى النجاح
            </motion.p>
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
            className="max-w-4xl mx-auto space-y-6"
          >
            {/* مربع البحث */}
            <div className="relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 pl-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
              />
            </div>

            {/* تصنيفات */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={`cat-${cat.id}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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

            {/* عدد النتائج */}
            <p className="text-center text-sm text-gray-500">{filteredPosts.length} مقالة</p>
          </motion.div>
        </Container>
      </section>

      {/* المقال المميز (أول مقال) */}
      {featuredPosts.length > 0 && selectedCategory === "all" && searchQuery === "" && (
        <section className="py-8">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              <Link href={featuredPosts[0].href}>
                <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
                  {/* خلفية متحركة */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />

                  <div className="relative p-8 md:p-12 text-white">
                    <div className="max-w-2xl">
                      {/* شارة مميز */}
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-4">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        مقال مميز
                      </span>

                      {/* التصنيف */}
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-4 mr-2">
                        <Tag className="w-3 h-3" />
                        {featuredPosts[0].category}
                      </span>

                      {/* العنوان */}
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuredPosts[0].title}</h2>

                      {/* الملخص */}
                      <p className="text-white/90 mb-6 text-lg">{featuredPosts[0].summary}</p>

                      {/* معلومات المقال */}
                      <div className="flex items-center gap-4 text-sm text-white/80 mb-6">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredPosts[0].date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPosts[0].readTime}
                        </span>
                      </div>

                      {/* زر القراءة */}
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                      >
                        <span>اقرأ المقال</span>
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
            {regularPosts.map((post, idx) => {
              const gradient = categoryColors[post.category] || "from-gray-500 to-gray-600";

              return (
                <motion.div
                  key={`post-${post.slug || idx}`}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative cursor-pointer"
                >
                  <Link href={post.href}>
                    <div className="relative bg-white rounded-2xl border border-gray-200/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                      {/* خلفية متدرجة متحركة */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />

                      {/* صورة المقال */}
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />

                        {/* أيقونة المقالة كخلفية مؤقتة */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          {/* ملاحظة: الكلاس الديناميكي قد لا يتم توليده من Tailwind، لكنه لا يكسر البناء */}
                          <BookOpen className="w-16 h-16 opacity-20 text-gray-400" />
                        </div>

                        {/* شارة التصنيف */}
                        <div className="absolute top-3 right-3">
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${gradient} text-white text-xs font-bold rounded-full shadow-lg`}
                          >
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
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{post.summary || ""}</p>

                        {/* معلومات المقال */}
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {post.views}
                          </div>
                        </div>

                        {/* تفاعلات المقال */}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Heart className="w-3 h-3" />
                              {post.likes}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <MessageCircle className="w-3 h-3" />
                              {post.comments}
                            </div>
                          </div>

                          <div className="flex items-center gap-1 text-xs text-blue-600">
                            <span>اقرأ المزيد</span>
                            <ArrowLeft className="w-3 h-3" />
                          </div>
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

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center gap-2 mt-12"
            >
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={`page-${idx + 1}`}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`w-10 h-10 rounded-xl font-medium transition-all ${
                    currentPage === idx + 1
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </Container>
      </section>

      {/* إحصائيات المدونة */}
      <section className="py-12 bg-gray-50">
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
              { icon: BookOpen, label: "مقالات", value: blogWithImages.length },
              { icon: Eye, label: "مشاهدة شهرية", value: "٥٠٠+" },
              { icon: Heart, label: "تفاعل", value: "٢٠٠+" },
              { icon: TrendingUp, label: "نمو", value: "+٤٠٪" },
            ].map((stat, idx) => (
              <motion.div
                key={`stat-${idx}`}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ y: -4 }}
                className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg"
              >
                <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
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
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          >
            {/* خلفية متحركة */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-yellow-300" />

              <h2 className="text-3xl font-bold mb-4">اشترك في نشرتنا البريدية</h2>

              <p className="text-white/90 mb-8">
                احصل على أحدث المقالات والنصائح والحلول مباشرة في بريدك الإلكتروني
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                  اشتراك
                </button>
              </div>

              <p className="text-xs text-white/70 mt-4">
                لن نرسل لك بريداً مزعجاً. يمكنك إلغاء الاشتراك في أي وقت.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
