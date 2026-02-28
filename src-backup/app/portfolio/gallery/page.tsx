import { Metadata } from "next";
import Container from "@/components/Container";
import PortfolioGallery from "@/components/PortfolioGallery";
import { siteData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "معرض الأعمال | Kodia Web Design",
  description: "استعرض أحدث أعمالنا في تصميم وتطوير المواقع والتطبيقات. نماذج حقيقية تعكس أسلوبنا في التصميم والتنفيذ.",
  openGraph: {
    title: "معرض الأعمال | Kodia Web Design",
    description: "شاهد أحدث مشاريعنا في تصميم المواقع والتطبيقات",
    images: [
      {
        url: "/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "معرض الأعمال - Kodia Web Design",
      },
    ],
  },
  alternates: {
    canonical: `${siteData.brand.url}/portfolio/gallery`,
  },
};

export default function PortfolioGalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-violet-50/10 to-white dark:from-gray-950 dark:via-violet-950/10 dark:to-gray-950 py-14">
      <Container>
        {/* شارة الصفحة */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 dark:from-violet-600/20 dark:to-fuchsia-600/20 rounded-full border border-violet-200/50 dark:border-violet-700/50 backdrop-blur-sm mb-4">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">معرض الأعمال</span>
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white">
            أحدث 
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent mx-2">
              مشاريعنا
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ابحث أو فلتر المشاريع وشاهد تفاصيل كل مشروع. نماذج حقيقية تعكس أسلوبنا في التصميم والتنفيذ.
          </p>
        </div>

        {/* مكون معرض الأعمال */}
        <div className="mt-8">
          <PortfolioGallery />
        </div>

        {/* إحصائيات سريعة */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { label: "مشاريع منجزة", value: "٢٥+", color: "from-violet-600 to-fuchsia-600" },
            { label: "مجالات متنوعة", value: "١٠+", color: "from-blue-600 to-cyan-600" },
            { label: "عملاء سعداء", value: "٢٠+", color: "from-amber-600 to-orange-600" },
            { label: "سنوات خبرة", value: "٢+", color: "from-green-600 to-emerald-600" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <div className={`w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-br ${stat.color}`} />
              <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
