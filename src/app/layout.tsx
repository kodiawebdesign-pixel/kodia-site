import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Cairo, Tajawal } from "next/font/google";
<<<<<<< HEAD
import { motion } from "framer-motion"; // ✅ أضفنا motion هنا
=======
>>>>>>> 6b0f7410fa10801cb29b683cf6e81bde0bc0b564
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { siteData } from "@/lib/siteData";
import PageTransition from "@/components/PageTransition";
import StickyCTA from "@/components/StickyCTA";
import BackToTop from "@/components/BackToTop";
import Script from "next/script";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { safeLoop } from "@/lib/safeAnimations"; // ✅ استيراد safeLoop

// تحميل الخطوط العربية الفاخرة
const cairo = Cairo({ 
  subsets: ["arabic"], 
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

// Viewport settings
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
<<<<<<< HEAD
    { media: "(prefers-color-scheme: light)", color: "#8b5cf6" },
    { media: "(prefers-color-scheme: dark)", color: "#6d28d9" },
=======
    { media: "(prefers-color-scheme: light)", color: "#8b5cf6" }, // بنفسجي
    { media: "(prefers-color-scheme: dark)", color: "#6d28d9" }, // بنفسجي داكن
>>>>>>> 6b0f7410fa10801cb29b683cf6e81bde0bc0b564
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteData.brand.url),
  title: {
    default: `${siteData.brand.name} | تصميم وتطوير مواقع وتطبيقات احترافية في مصر والوطن العربي`,
    template: `%s | ${siteData.brand.name}`,
  },
  description: siteData.home.hero.subtitle || "تصميم وتطوير مواقع وتطبيقات باحترافية عالية: مواقع شركات، متاجر إلكترونية، تطبيقات موبايل، UI/UX، وتحسين محركات البحث (SEO) في مصر والسعودية والوطن العربي.",
  
  // إضافات SEO محسنة
  keywords: [
    "تصميم مواقع",
    "تطوير تطبيقات",
    "متاجر إلكترونية",
    "UI/UX تصميم",
    "تحسين محركات البحث",
    "SEO",
    "شركة برمجة",
    "مصر",
    "القاهرة",
    "السعودية",
    "الرياض",
    "دبي",
    "الإمارات",
    "الوطن العربي",
    "تصميم ويب",
    "برمجة تطبيقات",
    "تطبيقات موبايل",
    "تصميم تجربة المستخدم",
    "كوديا",
    "Kodia",
  ],
  
  authors: [{ name: siteData.brand.name, url: siteData.brand.url }],
  creator: siteData.brand.name,
  publisher: siteData.brand.name,
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: siteData.brand.locale,
    url: siteData.brand.url,
    siteName: siteData.brand.name,
    title: `${siteData.brand.name} | تصميم وتطوير مواقع وتطبيقات احترافية`,
    description: siteData.home.hero.subtitle || "تصميم وتطوير مواقع وتطبيقات باحترافية عالية في مصر والوطن العربي",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteData.brand.name,
      },
      {
        url: "/og-image-square.jpg",
        width: 800,
        height: 800,
        alt: siteData.brand.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteData.brand.name} | تصميم وتطوير مواقع وتطبيقات`,
    description: siteData.home.hero.subtitle || "تصميم وتطوير مواقع وتطبيقات باحترافية عالية",
    images: ["/twitter-image.jpg"],
    creator: "@kodia_web_design",
    site: "@kodia_web_design",
  },

  alternates: {
    canonical: siteData.brand.url,
    languages: {
      "ar-EG": siteData.brand.url,
      "ar-SA": siteData.brand.url,
      "ar-AE": siteData.brand.url,
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#8b5cf6",
      },
    ],
  },

  manifest: "/manifest.webmanifest",
  
  appleWebApp: {
    capable: true,
    title: siteData.brand.name,
    statusBarStyle: "black-translucent",
    startupImage: [
      {
        url: "/apple-splash-2048-2732.jpg",
        media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)",
      },
    ],
  },

  verification: {
<<<<<<< HEAD
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
    bing: "bing-verification-code",
=======
    google: "google-site-verification-code", // ضع كود التحقق هنا
    yandex: "yandex-verification-code", // اختياري
    yahoo: "yahoo-verification-code", // اختياري
    bing: "bing-verification-code", // اختياري
>>>>>>> 6b0f7410fa10801cb29b683cf6e81bde0bc0b564
  },

  category: "technology",
  classification: "Web Design & Development",
  
  other: {
    "google-site-verification": "google-site-verification-code",
    "msvalidate.01": "bing-verification-code",
    "yandex-verification": "yandex-verification-code",
  },
};

// بيانات JSON-LD المحسنة للشركة
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": siteData.brand.url,
  name: siteData.brand.name,
  url: siteData.brand.url,
  logo: `${siteData.brand.url}/logo.png`,
  image: `${siteData.brand.url}/og-image.jpg`,
  description: siteData.home.hero.subtitle,
  areaServed: siteData.brand.serviceArea,
  telephone: siteData.brand.phoneDisplay,
  email: siteData.brand.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressRegion: "Cairo Governorate",
    addressCountry: "EG",
    postalCode: "11511",
    streetAddress: "القاهرة الجديدة",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.0444,
    longitude: 31.2357,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "10:00",
      closes: "14:00",
    },
  ],
  sameAs: siteData.brand.sameAs,
  knowsAbout: [
    "Web Design",
    "E-commerce Development",
    "Mobile App Development",
    "UI/UX Design",
    "SEO Optimization",
    "Digital Marketing",
    "Content Writing",
    "Website Maintenance",
  ],
  founder: {
    "@type": "Person",
    name: "Kodia Team",
  },
  foundingDate: "2023",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 12,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "خدمات التصميم والتطوير",
    itemListElement: siteData.home.services.map((service, index) => ({
      "@type": "Offer",
      "@id": `${siteData.brand.url}/services#service-${index}`,
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.desc,
      },
    })),
  },
};

// بيانات JSON-LD للخدمات
const servicesJsonLd = siteData.home.services.map((service, index) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteData.brand.url}/services#service-${index}`,
  name: service.title,
  description: service.desc,
  provider: {
    "@type": "ProfessionalService",
    name: siteData.brand.name,
    url: siteData.brand.url,
  },
  areaServed: siteData.brand.serviceArea,
  serviceType: service.title,
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "EGP",
      price: "يبدأ من 15000",
    },
  },
}));

// بيانات JSON-LD للمراجعات
const reviewsJsonLd = siteData.home.testimonials.items.slice(0, 5).map((review, index) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": `${siteData.brand.url}/reviews#review-${index}`,
  author: {
    "@type": "Person",
    name: review.name,
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: review.rating || 5,
    bestRating: 5,
    worstRating: 1,
  },
  reviewBody: review.quote,
  itemReviewed: {
    "@type": "ProfessionalService",
    name: siteData.brand.name,
  },
  datePublished: new Date().toISOString().split("T")[0],
}));

// بيانات JSON-LD للمشاريع
const projectsJsonLd = siteData.home.portfolioTabs?.flatMap((tab: any) => 
  tab.items?.slice(0, 3).map((project: any, index: number) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${siteData.brand.url}/portfolio/${project.slug}`,
    name: project.title,
    description: project.summary,
    creator: {
      "@type": "ProfessionalService",
      name: siteData.brand.name,
    },
    dateCreated: project.year || "2024",
    keywords: project.tags?.join(", "),
  }))
) || [];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable}`}>
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/images/hero-illustration.svg" as="image" />
        <link rel="preload" href="/images/logo.png" as="image" />
        
        {/* Favicon for all platforms */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        
        {/* Meta tags for mobile */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content={siteData.brand.name} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Edge compatibility */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className={`${cairo.className} bg-white text-slate-900 antialiased`}>
        {/* JSON-LD Structured Data */}
        <Script
          id="jsonld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
        
        <Script
          id="jsonld-services"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
          strategy="beforeInteractive"
        />
        
        <Script
          id="jsonld-reviews"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
          strategy="beforeInteractive"
        />
        
        <Script
          id="jsonld-projects"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
          strategy="beforeInteractive"
        />

        {/* Google Analytics - اختياري */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `}
        </Script>

        {/* المكونات الرئيسية */}
        <TopBar />
        <Navbar />
        
        <main className="min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
        
        <Footer />

        {/* المكونات المساعدة */}
        <FloatingActions />
        <BackToTop />
        <StickyCTA />

        {/* Notifications */}
        <Toaster 
          position="top-center"
          richColors
          closeButton
          theme="light"
          expand={true}
          duration={4000}
          toastOptions={{
            style: {
              fontFamily: 'Cairo, sans-serif',
              borderRadius: '12px',
            },
          }}
        />

        {/* Vercel Analytics */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
