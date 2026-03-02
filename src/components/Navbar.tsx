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
  ChevronLeft
} from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

// خريطة الأيقونات للروابط
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
  "السياسات والضمانات": FileText,
  "Resources": Sparkles,
  "معرض الأعمال": Briefcase,
};

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const isActive = pathname === item.href;

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
        className={`text-sm font-medium inline-flex items-center gap-1 px-3 py-2 rounded-xl transition-all ${
          isActive 
            ? 'bg-blue-50 text-blue-600' 
            : 'hover:bg-gray-100 text-gray-700'
        }`}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {item.label}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-64 rounded-2xl border bg-white shadow-xl overflow-hidden"
          >
            <div className="p-2">
              {item.children!.map((c, idx) => {
                const Icon = iconMap[c.label] || ChevronLeft;
                const isChildActive = pathname === c.href;
                
                return (
                  <Link
                    key={c.href}
                    href={c.href}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
                      isChildActive
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <div className={`w-6 h-6 rounded-lg ${
                      isChildActive 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                        : 'bg-gray-100 text-gray-500'
                    } flex items-center justify-center`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="flex-1">{c.label}</span>
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

function MobileAccordion({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <div className="rounded-xl border bg-white overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between px-4 py-3 text-sm font-medium transition-all ${
          isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
        }`}
      >
        <span>{item.label}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
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
            transition={{ duration: 0.2 }}
            className="border-t"
          >
            <div className="p-2 space-y-1">
              <Link
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
                onClick={onNavigate}
              >
                <div className={`w-6 h-6 rounded-lg ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-500'
                } flex items-center justify-center`}>
                  <Home className="w-3.5 h-3.5" />
                </div>
                <span className="flex-1">عرض الكل</span>
              </Link>

              {item.children!.map((c) => {
                const Icon = iconMap[c.label] || ChevronLeft;
                const isChildActive = pathname === c.href;
                
                return (
                  <Link
                    key={c.href}
                    href={c.href}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
                      isChildActive
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                    onClick={onNavigate}
                  >
                    <div className={`w-6 h-6 rounded-lg ${
                      isChildActive
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-gray-100 text-gray-500'
                    } flex items-center justify-center`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="flex-1">{c.label}</span>
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
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-white/90 backdrop-blur-sm border-b'
      }`}>
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* الشعار */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-xl transition-all">
                K
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
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
                    className={`flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* الأزرار على اليسار */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              
              <a
                href={siteData.brand.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>طلب عرض سعر</span>
              </a>

              {/* زر القائمة للموبايل */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="فتح القائمة"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
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
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-md bg-white z-50 md:hidden overflow-y-auto"
            >
              <div className="p-4">
                {/* رأس القائمة */}
                <div className="flex items-center justify-between mb-6">
                  <Link 
                    href="/" 
                    className="flex items-center gap-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                      K
                    </div>
                    <span className="font-bold">{siteData.brand.name}</span>
                  </Link>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* روابط القائمة */}
                <div className="space-y-2">
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
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        <div className={`w-8 h-8 rounded-lg ${
                          isActive 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                            : 'bg-gray-100 text-gray-500'
                        } flex items-center justify-center`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="flex-1">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>

                {/* زر واتساب للموبايل */}
                <div className="mt-6">
                  <a
                    href={siteData.brand.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg"
                    onClick={() => setMobileOpen(false)}
                  >
                    <MessageCircle className="w-5 h-5" />
                    طلب عرض سعر
                  </a>
                </div>

                {/* معلومات سريعة */}
                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <p className="text-xs text-gray-500 mb-2">تواصل معنا</p>
                  <a href={`tel:${siteData.brand.phoneE164}`} className="text-sm font-bold text-gray-800 block mb-1">
                    {siteData.brand.phoneDisplay}
                  </a>
                  <a href={`mailto:${siteData.brand.email}`} className="text-sm text-gray-600">
                    {siteData.brand.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}