import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // تفعيل الوضع الصارم لـ React
  reactStrictMode: true,
  
  // إعدادات الصور
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // يسمح بجميع النطاقات HTTPS
      },
      {
        protocol: 'http',
        hostname: 'localhost', // للتطوير المحلي
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // صور Unsplash
      },
      {
        protocol: 'https',
        hostname: '*.unsplash.com', // جميع نطاقات Unsplash
      },
      {
        protocol: 'https',
        hostname: '**.cloudfront.net', // Amazon CloudFront
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com', // GitHub content
      },
    ],
    formats: ['image/avif', 'image/webp'], // تنسيقات الصور المحسنة
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // أحجام الأجهزة
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // أحجام الصور
    minimumCacheTTL: 60, // الحد الأدنى لوقت التخزين المؤقت (بالثواني)
    dangerouslyAllowSVG: true, // السماح بصور SVG
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // سياسة أمان للمحتوى
  },

  // تجربة تحسين الأداء
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // إزالة console.log في الإنتاج
    styledComponents: true, // دعم styled-components
  },

  // إعدادات التوجيه
  trailingSlash: false, // لا لإضافة شرطة مائلة في نهاية الروابط
  skipTrailingSlashRedirect: true, // تخطي إعادة التوجيه للشرطة المائلة

  // إعدادات الضغط
  compress: true, // تفعيل ضغط gzip

  // إعدادات الإنتاج
  productionBrowserSourceMaps: false, // تعطيل source maps في الإنتاج

  // إعدادات التصدير (إذا كنت تستخدم static export)
  // output: 'export', // يمكن تفعيلها إذا كنت تريد تصدير ثابت

  // إعدادات إعادة التوجيه
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true, // إعادة توجيه دائمة
      },
      {
        source: '/old-blog/:path*',
        destination: '/blog/:path*',
        permanent: true,
      },
    ];
  },

  // إعدادات إعادة الكتابة (للوكل)
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*', // إعادة كتابة API
      },
    ];
  },

  // إعدادات الرؤوس
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // تخزين مؤقت طويل للصور
          },
        ],
      },
    ];
  },

  // إعدادات Webpack المخصصة
  webpack: (config, { isServer }) => {
    // إضافة دعم لملفات SVG كمكونات React
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // إعدادات إضافية حسب البيئة
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // تجاهل fs في المتصفح
      };
    }

    return config;
  },

  // إعدادات الترجمة
  transpilePackages: [], // حزم إضافية للترجمة

  // إعدادات إضافية
  poweredByHeader: false, // إزالة رأس X-Powered-By
  generateEtags: true, // توليد ETags
  httpAgentOptions: {
    keepAlive: true, // الحفاظ على اتصالات HTTP
  },
};

export default nextConfig;
