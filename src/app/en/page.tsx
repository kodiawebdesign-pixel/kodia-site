import Link from "next/link";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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
      <header className="border-b">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <div className="font-bold">Kodia Web Design</div>

          <nav className="flex gap-4 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#portfolio" className="hover:underline">Portfolio</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>

          <div className="flex gap-2 text-sm">
            <Link className="px-3 py-1 rounded border" href="/ar">AR</Link>
            <Link className="px-3 py-1 rounded border bg-black text-white" href="/en">EN</Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-bold leading-tight">We design & build fast, modern websites</h1>
        <p className="mt-4 text-base opacity-80">
          Full-code websites that help your business look better and get clients.
        </p>

        <div className="mt-6 flex gap-3">
          <a href={waLink} target="_blank" className="rounded bg-black px-5 py-3 text-white">
            Get a Quote
          </a>
          <a href="#portfolio" className="rounded border px-5 py-3">
            View Work
          </a>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold">Services</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { title: "Business Websites", desc: "Professional company sites with SEO and performance." },
            { title: "Landing Pages", desc: "Conversion-focused pages with WhatsApp and forms." },
            { title: "E-commerce", desc: "Smooth shopping experiences tailored to your needs." },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border p-5">
              <div className="font-semibold">{s.title}</div>
              <p className="mt-2 text-sm opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold">Work Samples</h2>
        <p className="mt-3 text-sm opacity-80">We’ll add 3 samples over the next two weeks.</p>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold">About</h2>
        <p className="mt-3 text-sm opacity-80">
          Kodia Web Design — UI/UX + Full-code Web Development.
        </p>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold">Contact</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-5">
            <div className="text-sm opacity-70">Email</div>
            <div className="mt-1 font-semibold">{EMAIL}</div>
          </div>
          <div className="rounded-xl border p-5">
            <div className="text-sm opacity-70">WhatsApp</div>
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
  message="Hi, I need a website for my business. Can you share details?"
/>

    </main>
  );
}
