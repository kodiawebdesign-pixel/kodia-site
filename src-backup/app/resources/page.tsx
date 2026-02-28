// هذا ملف خادم - لا يوجد "use client" هنا
import ResourcesClient from "./ResourcesClient";
import { Metadata } from "next";
import { siteData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "الموارد المجانية | Kodia Web Design",
  description: "موارد مجانية تساعدك تجهّز المشروع وتختصر وقت التنفيذ. قوائم جاهزة، حاسبات، ونماذج مساعدة لتخطيط مشروعك الرقمي.",
  openGraph: {
    title: "موارد مجانية لتجهيز مشروعك | Kodia Web Design",
    description: "Checklist الموقع، حاسبة السعر، Company Profile، وأدوات مجانية أخرى",
    images: [
      {
        url: "/og-resources.jpg",
        width: 1200,
        height: 630,
        alt: "الموارد المجانية - Kodia Web Design",
      },
    ],
  },
  alternates: {
    canonical: `${siteData.brand.url}/resources`,
  },
  keywords: ["موارد مجانية", "checklist موقع", "حاسبة سعر", "company profile", "أدوات تصميم", "نماذج مشاريع"],
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
