// middleware.js أو middleware.ts
import { NextResponse } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl.pathname
  
  // قائمة بالصور المفقودة واستبدالها بصورة افتراضية
  const missingImages = [
    '/images/video-poster.jpg',
    '/images/icon.svg',
    '/images/avatars/avatar-1.jpg',
    '/images/avatars/avatar-2.jpg',
    '/images/avatars/avatar-3.jpg',
    '/images/avatars/avatar-4.jpg',
    '/images/avatars/avatar-5.jpg',
    '/images/avatars/avatar-6.jpg',
  ]
  
  if (missingImages.includes(url)) {
    // إعادة توجيه إلى صورة افتراضية
    return NextResponse.rewrite(new URL('/images/demo-placeholder.svg', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/images/:path*'],
}