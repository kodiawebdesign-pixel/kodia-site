import type { MetadataRoute } from "next";
import { siteData } from "@/lib/siteData";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteData.brand.name,
    short_name: "Kodia",
    description: "تصميم وتطوير مواقع وتطبيقات احترافية - شريكك الرقمي الموثوق",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#8b5cf6", // بنفسجي بدل الأزرق
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-maskable-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      // إضافة أيقونة للـ Apple Touch
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    // إضافة خصائص إضافية لتحسين تجربة PWA
    categories: ["business", "design", "technology"],
    dir: "rtl",
    lang: "ar",
    orientation: "portrait",
    prefer_related_applications: false,
    scope: "/",
  };
}
