import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { portfolio } from "@/content/portfolio";

const WHATSAPP_NUMBER = "201207005495";
const EMAIL = "kodia.web.design@gmail.com";

export const metadata = {
  title: "Kodia Web Design | Websites & Web Development",
  description: "Full-code websites with modern UI/UX, performance, and SEO to help your business get clients.",
};

export default function EnglishPage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi, I need a website for my business. Can you share details?"
  )}`;

  return (
    <main dir="ltr" className="min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-black/10 via-transparent to-transparent" />

      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <Container>
          <div className="py-4 flex items-center justify-between">
            <div className="font-extrabold tracking-tight">Kodia Web Design</div>

            <nav className="hidden md:flex gap-5 text-sm">
              <a href="#services" className="hover:underline">Services</a>
              <a href="#portfolio" className="hover:underline">Portfolio</a>
              <a href="#about" className="hover:underline">About</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>

            <div className="flex gap-2 text-sm">
              <Link className="px-3 py-1 rounded-lg border" href="/ar">AR</Link>
              <Link className="px-3 py-1 rounded-lg border bg-black text-white" href="/en">EN</Link>
            </div>
          </div>
        </Container>
      </header>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                We build websites <span className="opacity-70">that look great and convert</span>
              </h1>
              <p className="mt-5 text-base md:text-lg opacity-80 max-w-xl">
                UI/UX + Full-code development + performance + SEO basics. A modern site that works perfectly on mobile.
              </p>

              <div className="mt-7 flex gap-3">
                <Button href={waLink} targetBlank>Get a Quote</Button>
                <Button href="#portfolio" variant="secondary">View Work</Button>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border bg-white/70 p-4 shadow-sm">
                  <div className="text-xl font-bold">90+</div>
                  <div className="text-xs opacity-70">Target performance</div>
                </div>
                <div className="rounded-2xl border bg-white/70 p-4 shadow-sm">
                  <div className="text-xl font-bold">72h</div>
                  <div className="text-xs opacity-70">First version</div>
                </div>
                <div className="rounded-2xl border bg-white/70 p-4 shadow-sm">
                  <div className="text-xl font-bold">SEO</div>
                  <div className="text-xs opacity-70">Essentials</div>
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
          title="Services"
          subtitle="Flexible packages: from landing pages to complete business websites."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Business Websites", desc: "Company website with services pages, SEO, and speed." },
              { title: "Landing Pages", desc: "Conversion-focused page with WhatsApp CTA." },
              { title: "Custom Development", desc: "Extra pages, forms, content, or custom features." },
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
          title="Portfolio"
          subtitle="Mock projects (same quality as real client work)."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {portfolio.map((p, idx) => (
              <div key={idx} className="rounded-2xl border bg-white/70 p-6 shadow-sm">
                <div className="h-36 rounded-2xl bg-black/5" />
                <div className="mt-4 font-bold">{p.titleEn}</div>
                <p className="mt-2 text-sm opacity-80">{p.descEn}</p>
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

        <Section id="about" title="About" subtitle="Small team = fast delivery + flexibility + quality.">
          <div className="rounded-2xl border bg-white/70 p-6 shadow-sm">
            <p className="text-sm opacity-85">
              Kodia Web Design — UI/UX + Full-code web development. Our goal is a fast, clean website that serves your business.
            </p>
          </div>
        </Section>

        <Section id="contact" title="Contact" subtitle="Send your project details and we’ll reply fast.">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border bg-white/70 p-6 shadow-sm">
              <div className="text-sm opacity-70">Email</div>
              <div className="mt-1 font-semibold">{EMAIL}</div>
            </div>
            <div className="rounded-2xl border bg-white/70 p-6 shadow-sm">
              <div className="text-sm opacity-70">WhatsApp</div>
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

      <WhatsAppFloat phoneInternational={WHATSAPP_NUMBER} message="Hi, I need a website for my business. Can you share details?" />
    </main>
  );
}
