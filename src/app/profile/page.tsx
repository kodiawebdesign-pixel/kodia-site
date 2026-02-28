import "./profile.css";
import ProfileClient from "./ProfileClient";
import { Metadata } from "next";
import { siteData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "الملف التعريفي للشركة | Kodia Web Design",
  description: "تعرف على Kodia Web Design - شريكك الرقمي الموثوق لبناء حضور قوي على الإنترنت. خدمات تصميم وتطوير مواقع وتطبيقات.",
  openGraph: {
    title: "Company Profile | Kodia Web Design",
    description: "شريكك الرقمي لتصميم وتطوير المواقع والتطبيقات",
    images: [
      {
        url: "/og-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Company Profile - Kodia Web Design",
      },
    ],
  },
  alternates: {
    canonical: `${siteData.brand.url}/profile`,
  },
  keywords: ["company profile", "ملف الشركة", "تعريف بالشركة", "خدمات رقمية", "تصميم مواقع"],
};

export default function ProfilePage() {
  return <ProfileClient />;
}
