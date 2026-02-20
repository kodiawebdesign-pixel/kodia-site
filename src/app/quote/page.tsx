// هذا ملف خادم - لا يوجد "use client" هنا
import QuoteClient from "./QuoteClient";

export const metadata = {
  title: "طلب عرض سعر | Kodia Web Design",
  description: "املأ بيانات بسيطة وسيتم إرسالها مباشرة إلى واتساب. احصل على عرض سعر دقيق لمشروعك خلال 24 ساعة.",
};

export default function QuotePage() {
  return <QuoteClient />;
}