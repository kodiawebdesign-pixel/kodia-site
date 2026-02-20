import type { MetadataRoute } from "next";
import { siteData } from "@/lib/siteData";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteData.brand.name,
    short_name: "Kodia",
    description: "تصميم وتطوير مواقع وتطبيقات احترافية",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3b82f6",
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
    ],
  };
}