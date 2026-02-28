"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { siteData } from "@/lib/siteData";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronDown, 
  MessageCircle,
  Sparkles,
  Home,
  Info,
  Briefcase,
  Users,
  FileText,
  Phone,
  PenTool,
  ShoppingCart,
  Smartphone,
  TrendingUp,
  ChevronLeft,
  Code,
  Palette,
  Award,
  Star,
  Rocket,
  Shield,
  Zap,
  Heart,
  Globe,
  Mail,
  Calendar,
  Download,
  Headphones,
  Target,
  CheckCircle
} from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

// خريطة الأيقونات للروابط - محدثة
const iconMap: Record<string, any> = {
  "الرئيسية": Home,
  "من نحن": Info,
  "خدماتنا": PenTool,
  "أعمالنا": Briefcase,
  "آراء العملاء": Users,
  "المدونة": FileText,
  "اتصل بنا": Phone,
  "طلب عرض سعر": MessageCircle,
  "حاسبة السعر": TrendingUp,
  "نموذج Brief": FileText,
  "Company Profile": Briefcase,
  "السياسات والضمانات": Shield,
  "Resources": Sparkles,
  "معرض الأعمال": Briefcase,
  "تصميم مواقع": Code,
  "تصميم متاجر": ShoppingCart,
  "تطبيقات موبايل": Smartphone,
  "UI/UX": Palette,
  "SEO": TrendingUp,
  "الدعم الفني": Headphones,
  "استضافة": Globe,
  "كتابة محتوى": FileText,
  "Profile الشركة": Award,
  "الأسئلة الشائعة": Star,
  "الضمانات": Shield,
  "عملاء": Heart,
  "تواصل": Phone,
  "انضم إلينا": Users,
  "الموارد": Download,
  "عرض سعر": Rocket,
  "تسليم": CheckCircle,
  "جودة": Award,
};

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

  // اقفل القائمة لو ضغطت بره
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`group text-sm font-medium inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all duration-300 ${
          isActive 
            ? 'bg-gradient-to-r from-violet-50 to-fuchsia-50 text-violet-700 dark:from-violet-900/30 dark:to-fuchsia-900/30 dark:text-violet-300' 
            : 'hover:bg-violet-50/50 dark:hover:bg-violet-900/20 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400'
        }`}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span>{item.label}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-80 rounded-2xl border border-violet-100 dark:border-violet-800 bg-white dark:bg-gray-800 shadow-2xl overflow-hidden"
          >
            {/* رأس القائمة */}
            <div className="p-3 bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-900/30 dark:to-fuchsia-900/30 border-b border-violet-100 dark:border-violet-800">
              <h3 className="font-bold text-violet-700 dark:text-violet-300">{item.label}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">اختر الخدمة المناسبة</p>
            </div>

            {/* عناصر القائمة */}
            <div className="p-3 max-h-[400px] overflow-y-auto">
              {item.children!.map((c, idx) => {
                const Icon = iconMap[c.label] || ChevronLeft;
                const isChildActive = pathname === c.href;
                
                return (
                  <Link
                    key={c.href}
                    href={c.href}
                    className={`flex items-start gap-3 rounded-xl px-3 py-3 text-sm transition-all duration-300 group ${
                      isChildActive
                        ? 'bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-900/30 dark:to-fuchsia-900/30'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <div className={`w-8 h-8 rounded-lg flex-shrink-0 ${
                      isChildActive 
                        ? 'bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/30 group-hover:text-violet-600 dark:group-hover:text-violet-400'
                    } flex items-center justify-center transition-colors duration-300`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className={`font-medium ${
                        isChildActive ? 'text-violet-700 dark:text-violet-300' : 'text-gray-800 dark:text-gray-200'
                      }`}>
                        {c.label}
                      </div>
                      {c.description && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{c.description}</p>
                      )}
                    </div>
                    <ChevronLeft className={`w-4 h-4 ${
                      isChildActive ? 'text-violet-600 dark:text-violet-400' : 'text-gray-400 dark:text-gray-500'
                    } group-hover:translate-x-1 transition-transform duration-300`} />
                  </Link>
                );
              })}
            </div>

            {/* تذييل القائمة */}
            <div className="p-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-100 dark:border-gray-600">
              <Link
                href={item.href}
                className="flex items-center justify-between text-sm text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                onClick={() => setOpen(false)}
              >
                <span>عرض الكل</span>
                <ChevronLeft className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileAccordion({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between px-4 py-4 text-sm font-medium transition-all duration-300 ${
          isActive ? 'text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-900/30' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg ${
            isActive 
              ? 'bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
          } flex items-center justify-center`}>
            {<PenTool className="w-4 h-4" />}
          </div>
          <span className="font-medium">{item.label}</span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-gray-100 dark:border-gray-700"
          >
            <div className="p-3 space-y-2 bg-gray-50 dark:bg-gray-700/50">
              {item.children!.map((c) => {
                const Icon = iconMap[c.label] || ChevronLeft;
                const isChildActive = pathname === c.href;
                
                return (
                  <Link
                    key={c.href}
                    href={c.href}
                    className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-all duration-300 ${
                      isChildActive
                        ? 'bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 text-violet-700 dark:text-violet-300'
                        : 'bg-white dark:bg-gray-800 hover:bg-violet-50 dark:hover:bg-violet-900/30 text-gray-700 dark:text-gray-300'
                    }`}
                    onClick={onNavigate}
                  >
                    <div className={`w-8 h-8 rounded-lg flex-shrink-0 ${
                      isChildActive
                        ? 'bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                    } flex items-center justify-center`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{c.label}</div>
                      {c.description && (
                        <p className="text-xs text-gray-500 dark:text-gray-400">{c.description}</p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const nav = siteData.nav as NavItem[];
  const pathname = usePathname();

  // تتبع التمرير لتغيير شكل الشريط
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // قفل التمرير عند فتح القائمة على الموبايل
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <>
      <div className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg dark:bg-gray-900/95' 
          : 'bg-white/90 backdrop-blur-sm border-b border-violet-100/50 dark:bg-gray-900/90 dark:border-violet-800/50'
      }`}>
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* الشعار */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-xl transition-all"
              >
                K
              </motion.div>
              <span className="text-lg font-bold bg-gradient-to-r from-violet-700 to-fuchsia-700 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
                {siteData.brand.name}
              </span>
            </Link>

            {/* القائمة الرئيسية - سطح المكتب */}
            <div className="hidden md:flex items-center gap-1">
              {nav.map((item) => {
                if (item.children?.length) {
                  return <DesktopDropdown key={item.href} item={item} />;
                }
                
                const Icon = iconMap[item.label] || ChevronLeft;
                const isActive = pathname === item.href;
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group ${
                      isActive
                        ? 'bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-900/30 dark:to-fuchsia-900/30 text-violet-700 dark:text-violet-300'
                        : 'hover:bg-violet-50/50 dark:hover:bg-violet-900/20 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400'
                    }`}
                  >
                    <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
                      isActive ? 'text-violet-600 dark:text-violet-400' : 'text-gray-500 dark:text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400'
                    }`} />
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* الأزرار على اليسار */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={siteData.brand.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>طلب عرض سعر</span>
              </motion.a>

              {/* زر القائمة للموبايل */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-900/30 flex items-center justify-center hover:bg-violet-100 dark:hover:bg-violet-800/30 transition-colors"
                aria-label="فتح القائمة"
              >
                {mobileOpen ? 
                  <X className="w-5 h-5 text-violet-600 dark:text-violet-400" /> : 
                  <Menu className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                }
              </motion.button>
            </div>
          </div>
        </Container>
      </div>

      {/* القائمة الجانبية للموبايل */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* طبقة خلفية داكنة */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />

            {/* القائمة الجانبية */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-md bg-white dark:bg-gray-800 z-50 md:hidden overflow-y-auto"
            >
              <div className="p-5">
                {/* رأس القائمة */}
                <div className="flex items-center justify-between mb-6">
                  <Link 
                    href="/" 
                    className="flex items-center gap-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-bold">
                      K
                    </div>
                    <span className="font-bold text-gray-800 dark:text-white">{siteData.brand.name}</span>
                  </Link>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMobileOpen(false)}
                    className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* روابط القائمة */}
                <div className="space-y-3">
                  {nav.map((item) => {
                    if (item.children?.length) {
                      return (
                        <MobileAccordion
                          key={item.href}
                          item={item}
                          onNavigate={() => setMobileOpen(false)}
                        />
                      );
                    }
                    
                    const Icon = iconMap[item.label] || ChevronLeft;
                    const isActive = pathname === item.href;
                    
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 text-violet-700 dark:text-violet-300'
                            : 'hover:bg-violet-50 dark:hover:bg-violet-900/30 text-gray-700 dark:text-gray-300'
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        <div className={`w-9 h-9 rounded-lg flex-shrink-0 ${
                          isActive 
                            ? 'bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                        } flex items-center justify-center`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 font-medium">{item.label}</div>
                        <ChevronLeft className={`w-4 h-4 ${
                          isActive ? 'text-violet-600 dark:text-violet-400' : 'text-gray-400 dark:text-gray-500'
                        }`} />
                      </Link>
                    );
                  })}
                </div>

                {/* زر واتساب للموبايل */}
                <div className="mt-6">
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href={siteData.brand.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg"
                    onClick={() => setMobileOpen(false)}
                  >
                    <MessageCircle className="w-5 h-5" />
                    طلب عرض سعر
                  </motion.a>
                </div>

                {/* معلومات سريعة */}
                <div className="mt-6 p-5 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/30 dark:to-fuchsia-900/30 rounded-xl">
                  <p className="text-xs text-violet-600 dark:text-violet-400 mb-3 font-medium">تواصل معنا</p>
                  <a href={`tel:${siteData.brand.phoneE164}`} className="text-base font-bold text-gray-800 dark:text-white block mb-2 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                    {siteData.brand.phoneDisplay}
                  </a>
                  <a href={`mailto:${siteData.brand.email}`} className="text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {siteData.brand.email}
                  </a>
                </div>

                {/* أيقونات التواصل الاجتماعي */}
                <div className="mt-4 flex justify-center gap-2">
                  {siteData.brand.sameAs?.slice(0, 4).map((url, idx) => (
                    <motion.a
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 transition-all"
                    >
                      <Globe className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
