export const site = {
  ar: {
    dir: "rtl",
    lang: "ar",
    brand: "Kodia Web Design",
    nav: { home: "الرئيسية", services: "الخدمات", portfolio: "أعمالنا", about: "من نحن", contact: "تواصل" },
    hero: {
      title: "نصمم ونبرمج مواقع سريعة واحترافية",
      subtitle: "مواقع Full-code تساعد مشروعك يظهر أفضل ويجيب عملاء.",
      ctaPrimary: "اطلب عرض سعر",
      ctaSecondary: "شوف أعمالنا",
    },
    services: {
      title: "الخدمات",
      items: [
        { title: "مواقع شركات", desc: "مواقع تعريفية احترافية مع SEO وسرعة عالية." },
        { title: "Landing Pages", desc: "صفحات بيع وتحويل بواتساب وفورم تواصل." },
        { title: "متاجر إلكترونية", desc: "واجهة قوية وتجربة شراء سهلة (حسب احتياجك)." },
      ],
    },
    portfolio: { title: "نماذج أعمال", note: "هنا هنضيف 3 نماذج خلال الأسبوعين الجايين." },
    about: { title: "من نحن", desc: "Kodia Web Design — تصميم UI/UX + تطوير مواقع Full-code." },
    contact: { title: "تواصل معنا", emailLabel: "البريد", whatsappLabel: "واتساب" },
  },

  en: {
    dir: "ltr",
    lang: "en",
    brand: "Kodia Web Design",
    nav: { home: "Home", services: "Services", portfolio: "Portfolio", about: "About", contact: "Contact" },
    hero: {
      title: "We design & build fast, modern websites",
      subtitle: "Full-code websites that help your business look better and get clients.",
      ctaPrimary: "Get a Quote",
      ctaSecondary: "View Work",
    },
    services: {
      title: "Services",
      items: [
        { title: "Business Websites", desc: "Professional company sites with SEO and performance." },
        { title: "Landing Pages", desc: "Conversion-focused pages with WhatsApp and forms." },
        { title: "E-commerce", desc: "Smooth shopping experiences tailored to your needs." },
      ],
    },
    portfolio: { title: "Work Samples", note: "We’ll add 3 samples over the next two weeks." },
    about: { title: "About", desc: "Kodia Web Design — UI/UX + Full-code Web Development." },
    contact: { title: "Contact", emailLabel: "Email", whatsappLabel: "WhatsApp" },
  },
} as const;

export type Locale = keyof typeof site;
