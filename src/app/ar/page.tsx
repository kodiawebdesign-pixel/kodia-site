import Link from "next/link";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const WHATSAPP_NUMBER = "201207005495"; // رقمك بصيغة دولية
const EMAIL = "kodia.web.design@gmail.com";
export const metadata = {
  title: "Kodia Web Design | تصميم وبرمجة مواقع",
  description: "تصميم UI/UX وتطوير مواقع Full-code سريعة واحترافية تساعد مشروعك يجذب عملاء.",
};


export default function ArabicPage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "مرحبًا، محتاج موقع لشغلي. ممكن تفاصيل؟"
  )}`;

  return (
    <main dir="rtl" className="min-h-screen">
      <header className="border-b">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <div className="font-bold">Kodia Web Design</div>

          <nav className="flex gap-4 text-sm">
            <a href="#services" className="hover:underline">الخدمات</a>
            <a href="#portfolio" className="hover:underline">أعمالنا</a>
            <a href="#about" className="hover:underline">من نحن</a>
            <a href="#contact" className="hover:underline">تواصل</a>
          </nav>

          <div className="flex gap-2 text-sm">
            <Link className="px-3 py-1 rounded border bg-black text-white" href="/ar">AR</Link>
            <Link className="px-3 py-1 rounded border" href="/en">EN</Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-bold leading-tight">نصمم ونبرمج مواقع سريعة واحترافية</h1>
        <p className="mt-4 text-base opacity-80">مواقع Full-code تساعد مشروعك يظهر أفضل ويجيب عملاء.</p>

        <div className="mt-6 flex gap-3">
          <a href={waLink} target="_blank" className="rounded bg-black px-5 py-3 text-white">
            اطلب عرض سعر
          </a>
          <a href="#portfolio" className="rounded border px-5 py-3">
            شوف أعمالنا
          </a>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold">الخدمات</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { title: "مواقع شركات", desc: "مواقع تعريفية احترافية مع SEO وسرعة عالية." },
            { title: "Landing Pages", desc: "صفحات بيع وتحويل بواتساب وفورم تواصل." },
            { title: "متاجر إلكترونية", desc: "واجهة قوية وتجربة شراء سهلة (حسب احتياجك)." },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border p-5">
              <div className="font-semibold">{s.title}</div>
              <p className="mt-2 text-sm opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold">نماذج أعمال</h2>
        <p className="mt-3 text-sm opacity-80">هنا هنضيف 3 نماذج خلال الأسبوعين الجايين.</p>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold">من نحن</h2>
        <p className="mt-3 text-sm opacity-80">
          Kodia Web Design — تصميم UI/UX + تطوير مواقع Full-code.
        </p>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold">تواصل معنا</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-5">
            <div className="text-sm opacity-70">البريد</div>
            <div className="mt-1 font-semibold">{EMAIL}</div>
          </div>
          <div className="rounded-xl border p-5">
            <div className="text-sm opacity-70">واتساب</div>
            <a className="mt-1 inline-block font-semibold underline" href={waLink} target="_blank">
              01207005495
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm opacity-70">
          © {new Date().getFullYear()} Kodia Web Design
        </div>
      </footer>
      <WhatsAppFloat
  phoneInternational="201207005495"
  message="مرحبًا، محتاج موقع لشغلي. ممكن تفاصيل؟"
/>

    </main>
  );
}
