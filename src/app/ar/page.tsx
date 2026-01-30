import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { portfolio } from "@/content/portfolio";

const WHATSAPP_NUMBER = "201207005495"; // 01207005495 بصيغة دولية
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
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-black/10 via-transparent to-transparent" />

      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <Container>
          <div className="py-4 flex items-center justify-between">
            <div className="font-extrabold tracking-tight">Kodia Web Design</div>

            <nav className="hidden md:flex gap-5 text-sm">
              <a href="#services" className="hover:underline">الخدمات</a>
              <a href="#portfolio" className="hover:underline">أعمالنا</a>
              <a href="#about" className="hover:underline">من نحن</a>
              <a href="#contact" className="hover:underline">تواصل</a>
            </nav>

            <div className="flex gap-2 text-sm">
              <Link className="px-3 py-1 rounded-lg border bg-black text-white" href="/ar">AR</Link>
              <Link className="px-3 py-1 rounded-lg border" href="/en">EN</Link>
            </div>
          </div>
        </Container>
      </header>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                نصمم ونبرمج مواقع <span className="opacity-70">تدي ثقة وتجيب عملاء</span>
              </h1>
              <p className="mt-5 text-base md:text-lg opacity-80 max-w-xl">
                تصميم UI/UX + تطوير Full-code + سرعة وSEO. نطلع موقع شكلُه احترافي ويشتغل صح على الموبايل.
              </p>

              <div className="mt-7 flex gap-3">
                <Button href={waLink} targetBlank>اطلب عرض سعر</Button>
                <Button href="#portfolio" variant="secondary">شوف أعمالنا</Button>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border bg-white/70 p-4 shadow-sm">
                  <div className="text-xl font-bold">+90</div>
                  <div className="text-xs opacity-70">Performance هدفنا</div>
                </div>
                <div className="rounded-2xl border bg-white/70 p-4 shadow-sm">
                  <div className="text-xl font-bold">72h</div>
                  <div className="text-xs opacity-70">نسخة أولى</div>
                </div>
                <div className="rounded-2xl border bg-white/70 p-4 shadow-sm">
                  <div className="text-xl font-bold">SEO</div>
                  <div className="text-xs opacity-70">أساسيات</div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border bg-white/70 p-6 shadow-sm">
              <div className="text-sm opacity-70">Preview</div>
              <div className="mt-3 h-64 rounded-2xl bg-black/5" />
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="h-10 rounded-xl bg-black/5" />
                <div className="h-10 rounded-xl bg-black/5" />
                <div className="h-10 rounded-xl bg-black/5" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <Section
          id="services"
          title="الخدمات"
          subtitle="باقات مرنة تناسب البيزنس: من Landing سريعة لموقع شركة كامل."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "مواقع شركات", desc: "موقع تعريفي احترافي + صفحات خدمات + سرعة وSEO." },
              { title: "Landing Pages", desc: "صفحة بيع وتحويل + واتساب + CTA واضح." },
              { title: "تطوير مخصص", desc: "حسب احتياجك: صفحات إضافية، نماذج، إدارة محتوى." },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border bg-white/70 p-6 shadow-sm">
                <div className="font-bold">{s.title}</div>
                <p className="mt-2 text-sm opacity-80">{s.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="portfolio"
          title="نماذج أعمال"
          subtitle="نماذج توضيحية (Mock Projects) بنفس جودة شغل العميل الحقيقي."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {portfolio.map((p, idx) => (
              <div key={idx} className="rounded-2xl border bg-white/70 p-6 shadow-sm">
                <div className="h-36 rounded-2xl bg-black/5" />
                <div className="mt-4 font-bold">{p.titleAr}</div>
                <p className="mt-2 text-sm opacity-80">{p.descAr}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border px-3 py-1 text-xs opacity-80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="about" title="من نحن" subtitle="شركة صغيرة = مرونة وسرعة وتسليم بجودة عالية.">
          <div className="rounded-2xl border bg-white/70 p-6 shadow-sm">
            <p className="text-sm opacity-85">
              Kodia Web Design — تصميم UI/UX + تطوير مواقع Full-code. هدفنا نطلع موقع سريع، مرتب، ويحقق هدف البيزنس.
            </p>
          </div>
        </Section>

        <Section id="contact" title="تواصل معنا" subtitle="ابعت تفاصيل مشروعك وهنرد عليك بسرعة.">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border bg-white/70 p-6 shadow-sm">
              <div className="text-sm opacity-70">البريد</div>
              <div className="mt-1 font-semibold">{EMAIL}</div>
            </div>
            <div className="rounded-2xl border bg-white/70 p-6 shadow-sm">
              <div className="text-sm opacity-70">واتساب</div>
              <a className="mt-1 inline-block font-semibold underline" href={waLink} target="_blank" rel="noreferrer">
                01207005495
              </a>
            </div>
          </div>
        </Section>

        <footer className="border-t py-8 text-sm opacity-70">
          © {new Date().getFullYear()} Kodia Web Design
        </footer>
      </Container>

      <WhatsAppFloat phoneInternational={WHATSAPP_NUMBER} message="مرحبًا، محتاج موقع لشغلي. ممكن تفاصيل؟" />
    </main>
  );
}
