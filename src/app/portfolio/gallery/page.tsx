export const metadata = {
  title: "معرض الأعمال",
  description: "معرض أعمال متقدم مع بحث وفلاتر + صفحات تفاصيل لكل مشروع.",
};

import Container from "@/components/Container";
import PortfolioGallery from "@/components/PortfolioGallery";

export default function PortfolioGalleryPage() {
  return (
    <div className="py-14">
      <Container>
        <h1 className="text-3xl font-extrabold">معرض الأعمال</h1>
        <p className="mt-3 text-sm leading-7 text-gray-600">
          ابحث أو فلتر المشاريع وشاهد تفاصيل كل Case Study.
        </p>
        <div className="mt-8">
          <PortfolioGallery />
        </div>
      </Container>
    </div>
  );
}