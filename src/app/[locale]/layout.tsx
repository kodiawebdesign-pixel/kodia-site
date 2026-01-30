import type { Locale } from "@/content/site";
import { site } from "@/content/site";
import "../globals.css";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = site[locale];

  return (
    <html lang={t.lang} dir={t.dir}>
      <body>{children}</body>
    </html>
  );
}

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}
