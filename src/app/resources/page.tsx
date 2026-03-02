// هذا ملف خادم - لا يوجد "use client" هنا
import ResourcesClient from "./ResourcesClient";

export const metadata = {
  title: "Resources & Freebies | Kodia Web Design",
  description: "موارد مجانية تساعدك تجهّز المشروع وتختصر وقت التنفيذ. قوائم جاهزة، حاسبات، ونماذج مساعدة.",
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}