// هذا ملف خادم - لا يوجد "use client" هنا
import { siteData } from "@/lib/siteData";
import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "خدماتنا | Kodia Web Design",
  description: "نقدم مجموعة متكاملة من خدمات تصميم وتطوير المواقع والتطبيقات. تصفح خدماتنا واختر ما يناسب مشروعك.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}