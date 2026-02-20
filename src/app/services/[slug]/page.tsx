// هذا ملف خادم - لا يوجد "use client" هنا
import { siteData } from "@/lib/siteData";
import ServiceSlugClient from "./ServiceSlugClient";

export function generateStaticParams() {
  return siteData.home.serviceLandings.map((s: any) => ({ slug: s.slug }));
}

export default function ServiceSlugPage({ params }: { params: { slug: string } }) {
  return <ServiceSlugClient slug={params.slug} />;
}