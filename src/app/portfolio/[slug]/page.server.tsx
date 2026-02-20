import { siteData } from "@/lib/siteData";

type Item = {
  title: string;
  slug: string;
  tags: string[];
  summary: string;
  deliverables: string[];
  images?: string[];
  year?: string;
  client?: string;
};

function getAllItems(): Item[] {
  return siteData.home.portfolioTabs.flatMap((t: any) => t.items) as Item[];
}

// هذه الدالة تعمل فقط في مكونات الخادم
export function generateStaticParams() {
  return getAllItems().map((x) => ({ slug: x.slug }));
}

// استيراد المكون من العميل
export { default } from './page.client';