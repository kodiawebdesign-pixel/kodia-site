import Link from 'next/link';
import { Frown, Home, ArrowLeft, Search, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-violet-50/30 to-white dark:from-gray-950 dark:via-violet-950/20 dark:to-gray-950 flex items-center justify-center p-4">
      {/* خلفية متحركة خفيفة */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-violet-200/30 dark:bg-violet-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-fuchsia-200/30 dark:bg-fuchsia-800/10 rounded-full blur-3xl" />
      </div>

      <div className="text-center max-w-md relative">
        {/* أيقونة متحركة */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-28 h-28 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl flex items-center justify-center text-white shadow-xl relative overflow-hidden">
              <Frown className="w-14 h-14 relative z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
            </div>
            {/* نقاط زخرفية */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full animate-pulse" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-violet-400 rounded-full animate-pulse delay-150" />
          </div>
        </div>

        {/* رقم الخطأ */}
        <div className="flex justify-center gap-1 text-8xl font-bold mb-4">
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">4</span>
          <span className="bg-gradient-to-r from-fuchsia-600 to-amber-600 bg-clip-text text-transparent">0</span>
          <span className="bg-gradient-to-r from-amber-600 to-violet-600 bg-clip-text text-transparent">4</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">الصفحة غير موجودة</h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يمكنك العودة للرئيسية أو استكشاف موقعنا.
        </p>

        {/* روابط مساعدة */}
        <div className="space-y-3 mb-8">
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            العودة للرئيسية
          </Link>

          <div className="flex gap-3">
            <Link 
              href="/portfolio"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
            >
              <Search className="w-4 h-4" />
              استكشف أعمالنا
            </Link>
            <Link 
              href="/contact"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              تواصل معنا
            </Link>
          </div>
        </div>

        {/* رابط الإبلاغ عن مشكلة */}
        <p className="text-xs text-gray-400 dark:text-gray-500">
          هل تعتقد أن هناك خطأ؟{' '}
          <Link href="/contact" className="text-violet-600 dark:text-violet-400 hover:underline">
            أبلغنا عن المشكلة
          </Link>
        </p>

        {/* شارة صغيرة */}
        <div className="mt-6 inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
          <Sparkles className="w-3 h-3 text-amber-500" />
          <span className="text-xs text-gray-600 dark:text-gray-400">Kodia Web Design</span>
        </div>
      </div>
    </div>
  );
}
