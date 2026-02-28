// هذا ملف خادم - لا يوجد "use client" هنا
import EstimateClient from "./EstimateClient";
import { Metadata } from "next";
import { siteData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "حاسبة سعر المشروع | Kodia Web Design",
  description: "احسب تقدير تقريبي لتكلفة مشروعك وأرسله مباشرة على واتساب. اختر مواصفات مشروعك وسيظهر لك نطاق سعري تقريبي.",
  openGraph: {
    title: "حاسبة سعر المشروع | Kodia Web Design",
    description: "احسب تكلفة مشروعك التقريبية في دقيقة واحدة",
    images: [
      {
        url: "/og-estimate.jpg",
        width: 1200,
        height: 630,
        alt: "حاسبة السعر - Kodia Web Design",
      },
    ],
  },
  alternates: {
    canonical: `${siteData.brand.url}/estimate`,
  },
  keywords: ["حاسبة السعر", "تكلفة تصميم موقع", "سعر متجر إلكتروني", "تقدير تكلفة مشروع"],
};

export default function EstimatePage() {
  return <EstimateClient />;
}
