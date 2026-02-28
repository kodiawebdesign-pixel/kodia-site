// هذا ملف خادم - لا يوجد "use client" هنا
import QuoteClient from "./QuoteClient";
import { Metadata } from "next";
import { siteData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "طلب عرض سعر | Kodia Web Design",
  description: "املأ بيانات بسيطة وسيتم إرسالها مباشرة إلى واتساب. احصل على عرض سعر دقيق لمشروعك خلال 24 ساعة.",
  openGraph: {
    title: "طلب عرض سعر لمشروعك | Kodia Web Design",
    description: "احصل على عرض سعر دقيق ومفصل لمشروعك في أقل من 24 ساعة",
    images: [
      {
        url: "/og-quote.jpg",
        width: 1200,
        height: 630,
        alt: "طلب عرض سعر - Kodia Web Design",
      },
    ],
  },
  alternates: {
    canonical: `${siteData.brand.url}/quote`,
  },
  keywords: ["طلب عرض سعر", "عرض سعر تصميم موقع", "تكلفة مشروع", "تسعير خدمات برمجية", "عرض سعر متجر إلكتروني"],
};

export default function QuotePage() {
  return <QuoteClient />;
}
