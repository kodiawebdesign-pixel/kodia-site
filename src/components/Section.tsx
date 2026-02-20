"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Reveal from "./Reveal";

type SectionProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  badge?: string;
  badgeColor?: "blue" | "purple" | "green" | "orange" | "red";
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg" | "xl";
  noPadding?: boolean;
  id?: string;
  withReveal?: boolean;
  revealDelay?: number;
  background?: "white" | "gray" | "gradient" | "none";
};

export default function Section({
  title,
  subtitle,
  children,
  className = "",
  containerClassName = "",
  titleClassName = "",
  subtitleClassName = "",
  badge,
  badgeColor = "blue",
  align = "right",
  size = "md",
  noPadding = false,
  id,
  withReveal = true,
  revealDelay = 0,
  background = "none",
}: SectionProps) {
  // تحديد أحجام البادينج
  const paddingSizes = {
    sm: "py-8 sm:py-12",
    md: "py-12 sm:py-16",
    lg: "py-16 sm:py-20",
    xl: "py-20 sm:py-24",
  };

  // تحديد ألوان الشارة
  const badgeColors = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
    green: "bg-green-100 text-green-700 border-green-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200",
    red: "bg-red-100 text-red-700 border-red-200",
  };

  // تحديد محاذاة النص
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  // تحديد لون الخلفية
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-b from-gray-50 to-white",
    none: "",
  };

  const content = (
    <>
      {(badge || title || subtitle) && (
        <div className={`mb-8 ${alignClasses[align]}`}>
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block mb-3"
            >
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium border ${badgeColors[badgeColor]}`}>
                {badge}
              </span>
            </motion.div>
          )}
          
          {title && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: badge ? 0.2 : 0.1 }}
              className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight ${titleClassName}`}
            >
              {title}
            </motion.h2>
          )}
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: title ? 0.3 : 0.2 }}
              className={`mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-gray-600 ${alignClasses[align]} ${subtitleClassName}`}
              style={{ marginInline: align === "center" ? "auto" : undefined }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}

      {withReveal ? (
        <Reveal delay={revealDelay}>
          {children}
        </Reveal>
      ) : (
        children
      )}
    </>
  );

  return (
    <section
      id={id}
      className={`
        ${backgroundClasses[background]}
        ${!noPadding ? paddingSizes[size] : ""}
        ${className}
      `}
    >
      <Container className={containerClassName}>
        {content}
      </Container>
    </section>
  );
}

// إصدارات مسبقة الإعداد للاستخدام السريع
export const HeroSection = (props: Omit<SectionProps, "size" | "align">) => (
  <Section size="xl" align="center" {...props} />
);

export const ServicesSection = (props: Omit<SectionProps, "size">) => (
  <Section size="lg" {...props} />
);

export const PortfolioSection = (props: Omit<SectionProps, "size">) => (
  <Section size="lg" background="gray" {...props} />
);

export const CTASection = (props: Omit<SectionProps, "size" | "align">) => (
  <Section size="lg" align="center" background="gradient" {...props} />
);