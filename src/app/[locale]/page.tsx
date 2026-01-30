import Link from "next/link";
import { site, type Locale } from "@/content/site";

const WHATSAPP_NUMBER = "201207005495"; // 01207005495 => دولي (مصر)
const EMAIL = "kodia.web.design@gmail.com";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = site[locale];

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    locale === "ar"
      ? "مرحبًا، محتاج موقع لشغلي. ممكن تفاصيل؟"
      : "Hi, I need a website for my business. Can you share details?"
  )}`;

  return (
    <main className="min-h-screen">
      <header className="border-b">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <div className="font-bold">{t.brand}</div>

          <nav className="flex gap-4 text-sm">
            <a href="#services" className="hover:underline">{t.nav.services}</a>
            <a href="#portfolio" className="hover:underline">{t.nav.portfolio}</a>
            <a href="#about" className="hover:underline">{t.nav.about}</a>
            <a href="#contact" className="hover:underline">{t.nav.contact}</a>
          </nav>

          <div className="flex gap-2 text-sm">
            <Link className={`px-3 py-1 rounded border ${locale === "ar" ? "bg-black text-white" : ""}`} href="/ar">AR</Link>
            <Link className={`px-3 py-1 rounded border ${locale === "en" ? "bg-black text-white" : ""}`} href="/en">EN</Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-bold leading-tight">{t.hero.title}</h1>
        <p className="mt-4 text-base opacity-80">{t.hero.subtitle}</p>

        <div className="mt-6 flex gap-3">
          <a href={waLink} target="_blank" className="rounded bg-black px-5 py-3 text-white">
            {t.hero.ctaPrimary}
          </a>
          <a href="#portfolio" className="rounded border px-5 py-3">
            {t.hero.ctaSecondary}
          </a>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold">{t.services.title}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {t.services.items.map((s, i) => (
            <div key={i} className="rounded-xl border p-5">
              <div className="font-semibold">{s.title}</div>
              <p className="mt-2 text-sm opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold">{t.portfolio.title}</h2>
        <p className="mt-3 text-sm opacity-80">{t.portfolio.note}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[1,2,3].map((n) => (
            <div key={n} className="rounded-xl border p-5">
              <div className="font-semibold">Project {n}</div>
              <div className="mt-2 h-28 rounded bg-black/5" />
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold">{t.about.title}</h2>
        <p className="mt-3 text-sm opacity-80">{t.about.desc}</p>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold">{t.contact.title}</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-5">
            <div className="text-sm opacity-70">{t.contact.emailLabel}</div>
            <div className="mt-1 font-semibold">{EMAIL}</div>
          </div>

          <div className="rounded-xl border p-5">
            <div className="text-sm opacity-70">{t.contact.whatsappLabel}</div>
            <a className="mt-1 inline-block font-semibold underline" href={waLink} target="_blank">
              01207005495
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm opacity-70">
          © {new Date().getFullYear()} {t.brand}
        </div>
      </footer>
    </main>
  );
}
