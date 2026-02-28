// هذا ملف خادم - لا يوجد "use client" هنا
import PoliciesClient from "./PoliciesClient";
import { Metadata } from "next";
import { siteData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "السياسات والضمانات | Kodia Web Design",
  description: "سياسة التسليم والتعديلات والدفع بشكل مبسط واحترافي. نوضح التزاماتنا تجاه عملائنا لضمان تجربة شفافة وموثوقة.",
  openGraph: {
    title: "السياسات والضمانات | Kodia Web Design",
    description: "نضمن لك تجربة شفافة وموثوقة مع سياسات واضحة وضمانات حقيقية",
    images: [
      {
        url: "/og-policies.jpg",
        width: 1200,
        height: 630,
        alt: "السياسات والضمانات - Kodia Web Design",
      },
    ],
  },
  alternates: {
    canonical: `${siteData.brand.url}/policies`,
  },
  keywords: ["سياسات الشركة", "ضمانات", "سياسة التسليم", "سياسة الدفع", "شروط العمل", "استعادة الحقوق"],
};

export default function PoliciesPage() {
  return <PoliciesClient />;
}
