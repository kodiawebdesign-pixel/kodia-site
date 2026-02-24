"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Star,
  Quote,
  MessageCircle,
  ThumbsUp,
  Award,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import Section from "./Section";
import { siteData } from "@/lib/siteData";
import Image from "next/image";
import Link from "next/link";

// بيانات الشهادات
const testimonialsData = siteData.home.testimonials;

// صور حقيقية
const avatarImages = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
];

// تحسين البيانات مع التحقق من وجودها
const enhancedTestimonials = testimonialsData?.items?.map((item: any, index: number) => ({
  name: item.name || "عميل كوديا",
  role: item.role || "عميل",
  quote: item.quote || "تجربة رائعة مع فريق كوديا",
  rating: 5,
  date: ["منذ يومين", "منذ أسبوع", "منذ ٣ أيام"][index % 3],
  avatar: avatarImages[index % avatarImages.length],
  project: ["موقع شركة", "متجر إلكتروني", "تطبيق موبايل"][index % 3],
})) || [];

export default function TestimonialsNew() {
  const [expandedQuote, setExpandedQuote] = useState<number | null>(null);

  // التحقق من وجود بيانات
  if (!enhancedTestimonials.length) {
    return <div>لا توجد شهادات حالياً</div>;
  }

  return (
    <Section
      title={testimonialsData?.title || "آراء العملاء"}
      subtitle={testimonialsData?.subtitle || "ماذا يقولون عنا"}
      badge="آراء حقيقية"
    >
      {/* شبكة الشهادات - نسخة مبسطة وآمنة */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {enhancedTestimonials.slice(0, 3).map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all"
          >
            {/* صورة العميل */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>

            {/* التقييم */}
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                />
              ))}
            </div>

            {/* الشهادة */}
            <p className="text-gray-700">“{testimonial.quote}”</p>
          </div>
        ))}
      </div>

      {/* زر إضافة تقييم */}
      <div className="text-center mt-12">
        <Link href="/testimonials/new">
          <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
            <span className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              أضف تقييمك
            </span>
          </button>
        </Link>
      </div>
    </Section>
  );
}
