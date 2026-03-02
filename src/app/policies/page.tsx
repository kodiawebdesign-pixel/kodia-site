// هذا ملف خادم - لا يوجد "use client" هنا
import PoliciesClient from "./PoliciesClient";

export const metadata = {
  title: "السياسات والضمانات | Kodia Web Design",
  description: "سياسة التسليم والتعديلات والدفع بشكل مبسط واحترافي. نوضح التزاماتنا تجاه عملائنا لضمان تجربة شفافة وموثوقة.",
};

export default function PoliciesPage() {
  return <PoliciesClient />;
}