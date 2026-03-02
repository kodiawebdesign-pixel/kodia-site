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
          "/testimonials",
          "/blog",
          "/contact",
          "/quote",
          "/estimate",
          "/brief",
          "/resources",
        ],
        disallow: [
          "/api/",
          "/_next/",
          "/private/",
          "/admin/",
          "/*.json$",
          "/*.xml$",
          "/*.txt$",
          "/profile",
          "/join",
          "/policies",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/private/", "/admin/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/images/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/private/", "/admin/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}