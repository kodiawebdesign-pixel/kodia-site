import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // ❌ تم إزالة swcMinify لأنه غير مدعوم في Next.js 16
  // ✅ تم استبدال domains بـ remotePatterns
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // ❗ i18n غير مدعوم في App Router - سنقوم بإزالته
  // i18n: {
  //   locales: ['ar'],
  //   defaultLocale: 'ar',
  //   localeDetection: false,
  // },
  // تجربة تحسين الأداء
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;