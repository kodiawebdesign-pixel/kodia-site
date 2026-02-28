// هذا ملف خادم - لا يوجد "use client" هنا
import BriefClient from "./BriefClient";
import { Metadata } from "next";
import { siteData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "نموذج Brief | Kodia Web Design",
  description: "املأ brief مختصر وسيتم إرساله مرتبًا إلى واتساب. نساعدك في توضيح فكرة مشروعك بسرعة ووضوح للحصول على عرض سعر دقيق.",
  openGraph: {
    title: "نموذج Brief المشروع | Kodia Web Design",
    description: "املأ النموذج وسنقوم بتحليل مشروعك والتواصل معك في أسرع وقت",
    images: [
      {
        url: "/og-brief.jpg",
        width: 1200,
        height: 630,
        alt: "نموذج Brief - Kodia Web Design",
      },
    ],
  },
  alternates: {
    canonical: `${siteData.brand.url}/brief`,
  },
};

export default function BriefPage() {
  return <BriefClient />;
}
