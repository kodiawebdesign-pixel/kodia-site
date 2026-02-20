/**
 * دوال مساعدة للمشروع - Kodia Web Design
 */

/**
 * إنشاء رابط واتساب مع رسالة مخصصة
 * @param base رقم الهاتف الأساسي (مثال: +201207005495)
 * @param message نص الرسالة
 * @returns رابط واتساب كامل
 */
export function waLink(base: string, message: string): string {
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * تنظيف النص من المسافات الزائدة
 * @param v النص المراد تنظيفه
 * @returns نص نظيف أو سلسلة فارغة
 */
export function safeText(v?: string): string {
  return (v ?? "").trim();
}

/**
 * تنسيق الأرقام إلى عملة محلية
 * @param value الرقم المراد تنسيقه
 * @param currency العملة (EGP, USD, SAR, إلخ)
 * @returns نص منسق مع العملة
 */
export function formatCurrency(value: number, currency: string = "EGP"): string {
  return new Intl.NumberFormat("ar-EG", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * تقطيع النص الطويل مع إضافة ثلاث نقاط
 * @param text النص الأصلي
 * @param maxLength الحد الأقصى للطول
 * @returns نص مقصوص
 */
export function truncateText(text: string, maxLength: number = 100): string {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}

/**
 * تحويل التاريخ إلى صيغة عربية
 * @param date التاريخ (string أو Date)
 * @returns نص التاريخ بالعربية
 */
export function formatArabicDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * حساب الوقت المنقضي (منذ ...)
 * @param date التاريخ
 * @returns نص مثل "منذ ٣ أيام"
 */
export function timeAgo(date: string | Date): string {
  const now = new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  const intervals = {
    سنة: 31536000,
    شهر: 2592000,
    أسبوع: 604800,
    يوم: 86400,
    ساعة: 3600,
    دقيقة: 60,
  };

  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds);
    if (interval >= 1) {
      return `منذ ${interval} ${unit}${interval > 1 ? "" : ""}`;
    }
  }
  return "منذ لحظات";
}

/**
 * إنشاء رابط مشاركة لوسائل التواصل
 * @param platform المنصة (facebook, twitter, linkedin, etc)
 * @param url الرابط المراد مشاركته
 * @param title العنوان (اختياري)
 * @returns رابط المشاركة
 */
export function shareLink(platform: string, url: string, title?: string): string {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title || "");

  const platforms: Record<string, string> = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
  };

  return platforms[platform] || url;
}

/**
 * إنشاء نص SEO للمسار
 * @param title عنوان الصفحة
 * @param separator الفاصل
 * @returns نص كامل للـ title
 */
export function seoTitle(title: string, separator: string = "|"): string {
  return `${title} ${separator} Kodia Web Design`;
}

/**
 * إنشاء وصف SEO
 * @param desc الوصف
 * @param maxLength الحد الأقصى
 * @returns وصف مناسب لـ SEO
 */
export function seoDescription(desc: string, maxLength: number = 160): string {
  return truncateText(desc, maxLength);
}

/**
 * التحقق من صحة البريد الإلكتروني
 * @param email البريد الإلكتروني
 * @returns boolean
 */
export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * التحقق من صحة رقم الهاتف المصري
 * @param phone رقم الهاتف
 * @returns boolean
 */
export function isValidEgyptianPhone(phone: string): boolean {
  const regex = /^(01[0-9]{9})$/;
  return regex.test(phone.replace(/\D/g, ""));
}

/**
 * إخفاء جزء من النص (للبريد أو الهاتف)
 * @param text النص الأصلي
 * @param visible عدد الأحرف الظاهرة
 * @returns نص مخفي جزئياً
 */
export function maskText(text: string, visible: number = 4): string {
  if (!text) return "";
  if (text.length <= visible) return text;
  const masked = "*".repeat(text.length - visible);
  return text.substring(0, visible) + masked;
}

/**
 * إنشاء أرقام عشوائية للإحصائيات (للديمو)
 * @param min الحد الأدنى
 * @param max الحد الأقصى
 * @returns رقم عشوائي
 */
export function randomStat(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * إنشاء رابط واتساب سريع لخدمة معينة
 * @param phone رقم الهاتف
 * @param service اسم الخدمة
 * @returns رابط واتساب جاهز
 */
export function waServiceLink(phone: string, service: string): string {
  const message = `السلام عليكم، أود الاستفسار عن خدمة ${service}`;
  return waLink(phone, message);
}

/**
 * تحويل الرقم إلى نص عربي
 * @param num الرقم
 * @returns نص عربي
 */
export function toArabicNumber(num: number): string {
  const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return num
    .toString()
    .split("")
    .map((d) => arabicNumbers[parseInt(d)] || d)
    .join("");
}

/**
 * إضافة بادئة لرقم الهاتف
 * @param phone رقم الهاتف
 * @param defaultPrefix البادئة الافتراضية
 * @returns رقم هاتف كامل
 */
export function formatPhoneNumber(phone: string, defaultPrefix: string = "+20"): string {
  const clean = phone.replace(/\D/g, "");
  if (clean.startsWith("2")) return `+${clean}`;
  if (clean.startsWith("0")) return `${defaultPrefix}${clean.substring(1)}`;
  return `${defaultPrefix}${clean}`;
}

/**
 * حساب نسبة التقدم
 * @param current القيمة الحالية
 * @param total القيمة الكلية
 * @returns النسبة المئوية
 */
export function calculateProgress(current: number, total: number): number {
  if (total === 0) return 0;
  return Math.min(100, Math.round((current / total) * 100));
}

/**
 * إنشاء معرف فريد
 * @returns معرف عشوائي
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

/**
 * تأخير التنفيذ (للتست)
 * @param ms وقت التأخير
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * نسخ نص إلى الحافظة
 * @param text النص المراد نسخه
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("فشل النسخ:", err);
    return false;
  }
}

/**
 * تصدير جميع الدوال في كائن واحد للاستخدام السهل
 */
export const utils = {
  waLink,
  safeText,
  formatCurrency,
  truncateText,
  formatArabicDate,
  timeAgo,
  shareLink,
  seoTitle,
  seoDescription,
  isValidEmail,
  isValidEgyptianPhone,
  maskText,
  randomStat,
  waServiceLink,
  toArabicNumber,
  formatPhoneNumber,
  calculateProgress,
  generateId,
  delay,
  copyToClipboard,
};