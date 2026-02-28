// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// قائمة بالصور المفقودة واستبدالها بصورة افتراضية
const missingImages = [
  '/images/video-poster.jpg',
  '/images/icon.svg',
  '/images/logo.png',
  '/images/hero-illustration.svg',
  '/images/consultation.jpg',
  '/images/showreel-poster.jpg',
  '/images/map-placeholder.jpg',
  '/images/cta-bg.mp4',
  '/images/avatars/avatar-1.jpg',
  '/images/avatars/avatar-2.jpg',
  '/images/avatars/avatar-3.jpg',
  '/images/avatars/avatar-4.jpg',
  '/images/avatars/avatar-5.jpg',
  '/images/avatars/avatar-6.jpg',
  '/images/avatars/author.jpg',
  '/images/blog/blog-1.jpg',
  '/images/blog/blog-2.jpg',
  '/images/blog/blog-3.jpg',
  '/images/blog/blog-4.jpg',
  '/images/blog/blog-5.jpg',
  '/images/blog/blog-6.jpg',
  '/images/team/ahmed.jpg',
  '/images/team/team.jpg',
  '/images/clients/healthcare.svg',
  '/images/clients/construction.svg',
  '/images/clients/education.svg',
  '/images/clients/restaurant.svg',
  '/images/clients/fashion.svg',
  '/images/clients/insurance.svg',
  '/images/clients/legal.svg',
  '/images/clients/hotel.svg',
  '/images/clients/charity.svg',
  '/images/clients/expo.svg',
  '/images/demos/nexa-construction-1.svg',
  '/images/demos/nexa-construction-2.svg',
  '/images/demos/nexa-construction-3.svg',
  '/images/demos/prime-dental-clinic-1.svg',
  '/images/demos/prime-dental-clinic-2.svg',
  '/images/demos/prime-dental-clinic-3.svg',
  '/images/demos/skyline-logistics-1.svg',
  '/images/demos/skyline-logistics-2.svg',
  '/images/demos/skyline-logistics-3.svg',
  '/images/demos/elite-law-firm-1.svg',
  '/images/demos/elite-law-firm-2.svg',
  '/images/demos/harmony-interiors-1.svg',
  '/images/demos/harmony-interiors-2.svg',
  '/images/demos/harmony-interiors-3.svg',
  '/images/demos/techsolutions-it-1.svg',
  '/images/demos/techsolutions-it-2.svg',
  '/images/demos/urbanwear-store-1.svg',
  '/images/demos/urbanwear-store-2.svg',
  '/images/demos/urbanwear-store-3.svg',
  '/images/demos/gadgethub-1.svg',
  '/images/demos/gadgethub-2.svg',
  '/images/demos/gadgethub-3.svg',
  '/images/demos/beautybox-1.svg',
  '/images/demos/beautybox-2.svg',
  '/images/demos/beautybox-3.svg',
  '/images/demos/freshmart-1.svg',
  '/images/demos/freshmart-2.svg',
  '/images/demos/booknest-1.svg',
  '/images/demos/booknest-2.svg',
  '/images/demos/booknest-3.svg',
  '/images/demos/furnicasa-1.svg',
  '/images/demos/furnicasa-2.svg',
  '/images/demos/niletrip-tours-1.svg',
  '/images/demos/niletrip-tours-2.svg',
  '/images/demos/niletrip-tours-3.svg',
  '/images/demos/sinai-camp-1.svg',
  '/images/demos/sinai-camp-2.svg',
  '/images/demos/sinai-camp-3.svg',
  '/images/demos/cairo-heritage-1.svg',
  '/images/demos/cairo-heritage-2.svg',
  '/images/demos/cairo-heritage-3.svg',
  '/images/demos/luxorstay-1.svg',
  '/images/demos/luxorstay-2.svg',
  '/images/demos/learnify-academy-1.svg',
  '/images/demos/learnify-academy-2.svg',
  '/images/demos/learnify-academy-3.svg',
  '/images/demos/quranic-path-1.svg',
  '/images/demos/quranic-path-2.svg',
  '/images/demos/quranic-path-3.svg',
  '/images/demos/codestart-kids-1.svg',
  '/images/demos/codestart-kids-2.svg',
  '/images/demos/codestart-kids-3.svg',
  '/images/demos/langmaster-1.svg',
  '/images/demos/langmaster-2.svg',
  '/images/demos/fittrack-app-1.svg',
  '/images/demos/fittrack-app-2.svg',
  '/images/demos/fittrack-app-3.svg',
  '/images/demos/foodie-delivery-1.svg',
  '/images/demos/foodie-delivery-2.svg',
  '/images/demos/foodie-delivery-3.svg',
  '/images/demos/clinic-booking-1.svg',
  '/images/demos/clinic-booking-2.svg',
  '/images/demos/clinic-booking-3.svg',
  '/images/demos/taskflow-1.svg',
  '/images/demos/taskflow-2.svg',
  '/images/demos/socialapp-1.svg',
  '/images/demos/socialapp-2.svg',
  '/images/demos/socialapp-3.svg',
];

// صور بديلة من Unsplash كـ fallback
const fallbackImages = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop', // مباني
  'https://images.unsplash.com/photo-1556742212-5b321f3c261b?w=600&h=400&fit=crop', // متجر
  'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop', // تقني
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop', // تعليم
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', // تطبيق
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop', // فريق
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop', // شخص 1
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop', // شخص 2
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop', // شخص 3
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop', // شخص 4
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop', // شخص 5
  'https://images.unsplash.com/photo-1494790108777-8f9c9f12b1b6?w=200&h=200&fit=crop', // شخص 6
];

// دالة لتحديد الصورة البديلة المناسبة
function getFallbackImage(path: string): string {
  // للصور الشخصية (avatars)
  if (path.includes('/avatars/')) {
    const index = parseInt(path.split('-')[1]?.split('.')[0] || '0') % 6;
    return fallbackImages[6 + index];
  }
  
  // لصور المدونة
  if (path.includes('/blog/')) {
    return fallbackImages[2]; // صورة تقنية
  }
  
  // لصور المشاريع (demos)
  if (path.includes('/demos/')) {
    const categories = ['مباني', 'متجر', 'تقني', 'تعليم', 'تطبيق', 'فريق'];
    const hash = path.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = hash % 6;
    return fallbackImages[index];
  }
  
  // للصورة الافتراضية
  return 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop';
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  
  // التحقق مما إذا كان الملف المطلوب في قائمة الصور المفقودة
  if (missingImages.includes(url)) {
    // الحصول على الصورة البديلة المناسبة
    const fallbackUrl = getFallbackImage(url);
    
    // إعادة توجيه إلى الصورة البديلة
    return NextResponse.rewrite(new URL(fallbackUrl));
  }
  
  // التحقق من امتدادات الصور العامة
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.avif'];
  const hasImageExtension = imageExtensions.some(ext => url.endsWith(ext));
  
  if (hasImageExtension && url.startsWith('/images/')) {
    // يمكن إضافة منطق إضافي هنا إذا لزم الأمر
    // مثلاً: تسجيل الصور المطلوبة للتحليل
    console.log(`📸 طلب صورة: ${url}`);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/images/:path*'],
};
