// هذا ملف خادم - لا يوجد "use client" هنا
import EstimateClient from "./EstimateClient";

export const metadata = {
  title: "حاسبة سعر | Kodia Web Design",
  description: "احسب تقدير تقريبي للسعر وأرسله مباشرة على واتساب. اختر مواصفات مشروعك وسيظهر لك Range تقريبي.",
};

export default function EstimatePage() {
  return <EstimateClient />;
}