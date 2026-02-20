import type { MetadataRoute } from "next";
import { siteData } from "@/lib/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteData.brand.url;
  const currentDate = new Date();
  
  // دالة لحساب التاريخ بناءً على آخر تعديل (محاكاة)
  const getLastModified = (path: string, daysAgo: number = 0) => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date;
  };

  // الصفحات الثابتة مع تواريخ محاكاة للتعديل
  const staticPages = [
    { path: "", priority: 1.0, changeFreq: "daily", daysAgo: 1 },
    { path: "/about", priority: 0.8, changeFreq: "monthly", daysAgo: 15 },
    { path: "/services", priority: 0.9, changeFreq: "weekly", daysAgo: 5 },
    { path: "/portfolio", priority: 0.9, changeFreq: "weekly", daysAgo: 3 },
    { path: "/testimonials", priority: 0.7, changeFreq: "monthly", daysAgo: 20 },
    { path: "/blog", priority: 0.8, changeFreq: "weekly", daysAgo: 2 },
    { path: "/join", priority: 0.6, changeFreq: "monthly", daysAgo: 25 },
    { path: "/contact", priority: 0.8, changeFreq: "monthly", daysAgo: 10 },
    { path: "/quote", priority: 0.7, changeFreq: "monthly", daysAgo: 12 },
    { path: "/estimate", priority: 0.6, changeFreq: "monthly", daysAgo: 18 },
    { path: "/brief", priority: 0.6, changeFreq: "monthly", daysAgo: 22 },
    { path: "/profile", priority: 0.5, changeFreq: "yearly", daysAgo: 30 },
    { path: "/policies", priority: 0.4, changeFreq: "yearly", daysAgo: 45 },
    { path: "/resources", priority: 0.5, changeFreq: "monthly", daysAgo: 14 },
    { path: "/portfolio/gallery", priority: 0.8, changeFreq: "weekly", daysAgo: 4 },
  ].map(({ path, priority, changeFreq, daysAgo }) => ({
    url: `${base}${path}`,
    lastModified: getLastModified(path, daysAgo),
    changeFrequency: changeFreq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority,
  }));

  // صفحات تفاصيل المشاريع (portfolio items)
  const projectPages = siteData.home.portfolioTabs.flatMap((tab: any) => 
    tab.items.map((item: any, index: number) => ({
      url: `${base}/portfolio/${item.slug}`,
      lastModified: getLastModified(`/portfolio/${item.slug}`, Math.floor(Math.random() * 30) + 5),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  // صفحات الخدمات الفردية
  const servicePages = siteData.home.serviceLandings?.map((service: any, index: number) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: getLastModified(`/services/${service.slug}`, Math.floor(Math.random() * 20) + 3),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })) || [];

  // صفحات المدونة
  const blogPages = siteData.home.blog.items.map((post: any, index: number) => ({
    url: `${base}${post.href}`,
    lastModified: getLastModified(post.href, Math.floor(Math.random() * 10) + 1),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // إضافة صفحات إضافية للـ slugs المختلفة (إذا كانت موجودة)
  const additionalPages = [
    { path: "/services/web-design", priority: 0.8, changeFreq: "monthly" as const, daysAgo: 7 },
    { path: "/services/ecommerce", priority: 0.8, changeFreq: "monthly" as const, daysAgo: 8 },
    { path: "/services/mobile-apps", priority: 0.8, changeFreq: "monthly" as const, daysAgo: 9 },
    { path: "/services/ui-ux", priority: 0.7, changeFreq: "monthly" as const, daysAgo: 12 },
    { path: "/services/seo", priority: 0.7, changeFreq: "monthly" as const, daysAgo: 11 },
    { path: "/services/maintenance", priority: 0.6, changeFreq: "monthly" as const, daysAgo: 14 },
    { path: "/services/content", priority: 0.6, changeFreq: "monthly" as const, daysAgo: 16 },
    { path: "/services/hosting", priority: 0.6, changeFreq: "monthly" as const, daysAgo: 18 },
  ].map(({ path, priority, changeFreq, daysAgo }) => ({
    url: `${base}${path}`,
    lastModified: getLastModified(path, daysAgo),
    changeFrequency: changeFreq,
    priority,
  }));

  // دمج جميع الصفحات وترتيبها حسب الأولوية
  const allPages = [
    ...staticPages,
    ...projectPages,
    ...servicePages,
    ...blogPages,
    ...additionalPages,
  ];

  // إزالة التكرارات بناءً على URL
  const uniquePages = Array.from(
    new Map(allPages.map(page => [page.url, page])).values()
  );

  // ترتيب حسب الأولوية (تنازلياً)
  return uniquePages.sort((a, b) => b.priority - a.priority);
}