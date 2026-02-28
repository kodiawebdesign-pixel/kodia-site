// هذا ملف خادم - لا يوجد "use client" هنا
import ServicesClient from "./ServicesClient";
import { Metadata } from "next";
import { siteData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "خدماتنا | Kodia Web Design",
  description: "نقدم مجموعة متكاملة من خدمات تصميم وتطوير المواقع والتطبيقات. تصفح خدماتنا واختر ما يناسب مشروعك.",
  openGraph: {
    title: "خدماتنا المتكاملة | Kodia Web Design",
    description: "تصميم مواقع شركات، متاجر إلكترونية، تطبيقات موبايل، UI/UX، وتحسين محركات البحث",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "خدمات Kodia Web Design",
      },
    ],
  },
  alternates: {
    canonical: `${siteData.brand.url}/services`,
  },
  keywords: ["تصميم مواقع", "متاجر إلكترونية", "تطبيقات موبايل", "UI/UX", "تحسين SEO", "خدمات برمجة"],
};

export default function ServicesPage() {
  return <ServicesClient />;
}
