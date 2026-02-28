// هذا ملف خادم - لا يوجد "use client" هنا
import { redirect } from "next/navigation";

// إعادة توجيه أي صفحة ديناميكية إلى صفحة الخدمات الرئيسية
export default function ServiceSlugPage() {
  redirect("/services");
}

// هذا سيمنع 404 ويحول المستخدم تلقائياً