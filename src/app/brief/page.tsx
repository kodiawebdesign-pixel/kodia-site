// هذا ملف خادم - لا يوجد "use client" هنا
import BriefClient from "./BriefClient";

export const metadata = {
  title: "نموذج Brief | Kodia Web Design",
  description: "املأ brief مختصر وسيتم إرساله مرتبًا إلى واتساب. نساعدك في توضيح فكرة مشروعك بسرعة ووضوح.",
};

export default function BriefPage() {
  return <BriefClient />;
}