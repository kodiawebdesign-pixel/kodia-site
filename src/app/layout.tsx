import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
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

const cairo = Cairo({ 
  subsets: ["arabic"], 
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

// Viewport settings
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
    { media: "(prefers-color-scheme: dark)", color: "#1e3a8a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteData.brand.url),
  title: {
    default: `${siteData.brand.name} | تصميم وتطوير مواقع وتطبيقات احترافية`,
    template: `%s | ${siteData.brand.name}`,
  },
  description: siteData.home.hero.subtitle || "تصميم وتطوير مواقع وتطبيقات باحتراف: مواقع شركات، متاجر إلكترونية، UI/UX، وتحسين محركات البحث.",
  
  // إضافات SEO محسنة
  keywords: [
    "تصميم مواقع",
    "تطوير تطبيقات",
    "متاجر إلكترونية",
    "UI/UX",
    "تحسين محركات البحث",
    "SEO",
    "شركة برمجة",
    "مصر",
    "السعودية",
    "الوطن العربي",
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
    description: siteData.home.hero.subtitle || "تصميم وتطوير مواقع وتطبيقات باحتراف في مصر والوطن العربي",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteData.brand.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteData.brand.name} | تصميم وتطوير مواقع وتطبيقات`,
    description: siteData.home.hero.subtitle || "تصميم وتطوير مواقع وتطبيقات باحتراف",
    images: ["/twitter-image.jpg"],
    creator: "@kodia_web_design",
    site: "@kodia_web_design",
  },

  alternates: {
    canonical: siteData.brand.url,
    languages: {
      "ar-EG": siteData.brand.url,
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
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#3b82f6",
      },
    ],
  },

  manifest: "/manifest.webmanifest",
  
  appleWebApp: {
    capable: true,
    title: siteData.brand.name,
    statusBarStyle: "default",
  },

  verification: {
    google: "google-site-verification-code", // ضع كود التحقق هنا
    yandex: "yandex-verification-code", // اختياري
    yahoo: "yahoo-verification-code", // اختياري
  },

  category: "technology",
};

// بيانات JSON-LD المحسنة
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
  ],
  sameAs: siteData.brand.sameAs,
  knowsAbout: [
    "Web Design",
    "E-commerce Development",
    "Mobile App Development",
    "UI/UX Design",
    "SEO Optimization",
  ],
  founder: {
    "@type": "Person",
    name: "Kodia Team",
  },
  foundingDate: "2023",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 5,
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
}));

// بيانات JSON-LD للمراجعات
const reviewsJsonLd = siteData.home.testimonials.items.map((review, index) => ({
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/images/hero-illustration.svg" as="image" />
        
        {/* Favicon for all platforms */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={siteData.brand.name} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#3b82f6" />
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

        {/* Google Analytics - اختراري */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
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
        />

        {/* Vercel Analytics */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}