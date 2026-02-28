import type { MetadataRoute } from "next";
import { siteData } from "@/lib/siteData";

export default function robots(): MetadataRoute.Robots {
  const base = siteData.brand.url;

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/services",
          "/portfolio",
          "/portfolio/gallery",
          "/testimonials",
          "/blog",
          "/contact",
          "/quote",
          "/estimate",
          "/brief",
          "/resources",
          "/images/",
        ],
        disallow: [
          "/api/",
          "/_next/",
          "/private/",
          "/admin/",
          "/dashboard/",
          "/draft/",
          "/temp/",
          "/test/",
          "/*.json$",
          "/*.xml$",
          "/*.txt$",
          "/*.md$",
          "/*.log$",
          "/profile",          // صفحة داخلية غير مخصصة للفهرسة
          "/join",              // صفحة توظيف داخلية
          "/policies",          // سياسات داخلية
          "/404",               // صفحة الخطأ
          "/*?print=*",         // صفحات الطباعة
          "/*?preview=*",       // صفحات المعاينة
          "/*?callback=*",       // صفحات回调
          "/_error",            // صفحات الخطأ
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/private/", "/admin/", "/dashboard/", "/profile", "/join"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: [
          "/images/",
          "/public/images/",
          "/_next/image?*",      // السماح لصور Next.js المحسنة
        ],
        disallow: [
          "/api/",
          "/private/",
          "/admin/",
        ],
      },
      {
        userAgent: "Googlebot-News",
        allow: ["/blog/"],       // السماح لبوت الأخبار بفهرسة المدونة فقط
      },
      {
        userAgent: "Googlebot-Video",
        allow: ["/videos/", "/assets/videos/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/private/", "/admin/", "/dashboard/", "/profile", "/join"],
      },
      {
        userAgent: "BingPreview",
        disallow: "/",            // منع Bing من معاينة الصفحات (لتوفير الباندويث)
      },
      {
        userAgent: "Twitterbot",
        allow: [
          "/",
          "/images/",
          "/_next/image?*",
        ],
      },
      {
        userAgent: "facebookexternalhit",
        allow: [
          "/",
          "/images/",
          "/_next/image?*",
        ],
      },
      {
        userAgent: "Slackbot",
        allow: [
          "/",
          "/images/",
        ],
      },
      {
        userAgent: "WhatsApp",
        allow: [
          "/",
          "/images/",
        ],
      },
      {
        userAgent: "TelegramBot",
        allow: [
          "/",
          "/images/",
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
