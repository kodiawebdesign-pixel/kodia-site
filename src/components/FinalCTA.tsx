import Section from "./Section";
import { siteData } from "@/lib/siteData";

export default function FinalCTA() {
  const c = siteData.home.finalCta;
  const { phoneE164, whatsappLink, email } = siteData.brand;

  const resolveHref = (href: string) => {
    if (href === "WHATSAPP") return whatsappLink;
    if (href === "CALL") return `tel:${phoneE164}`;
    if (href === "EMAIL") return `mailto:${email}`;
    return href;
    };

  return (
    <Section title={c.title} subtitle={c.subtitle}>
      <div className="card flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-gray-700">
          رد سريع — واتساب / اتصال / بريد
        </div>

        <div className="flex flex-wrap gap-2">
          {c.buttons.map((b) => (
            <a
              key={b.label}
              href={resolveHref(b.href)}
              className={b.href === "WHATSAPP" ? "btn-primary hover:opacity-90" : "btn-outline hover:bg-gray-50"}
              target={b.href === "WHATSAPP" ? "_blank" : undefined}
              rel={b.href === "WHATSAPP" ? "noreferrer" : undefined}
            >
              {b.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
