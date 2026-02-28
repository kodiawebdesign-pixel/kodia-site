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
  badgeColor?: "blue" | "purple" | "green" | "orange" | "red" | "violet" | "fuchsia" | "amber";
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg" | "xl";
  noPadding?: boolean;
  id?: string;
  withReveal?: boolean;
  revealDelay?: number;
  background?: "white" | "gray" | "gradient" | "gradient-light" | "gradient-dark" | "none";
  border?: boolean;
  shadow?: boolean;
  rounded?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
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
  badgeColor = "violet",
  align = "right",
  size = "md",
  noPadding = false,
  id,
  withReveal = true,
  revealDelay = 0,
  background = "none",
  border = false,
  shadow = false,
  rounded = false,
  gradientFrom,
  gradientTo,
}: SectionProps) {
  // تحديد أحجام البادينج
  const paddingSizes = {
    sm: "py-8 sm:py-12",
    md: "py-12 sm:py-16",
    lg: "py-16 sm:py-20",
    xl: "py-20 sm:py-24",
  };

  // تحديد ألوان الشارة - محدثة بالبنفسجي
  const badgeColors = {
    blue: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
    purple: "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800",
    green: "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800",
    orange: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800",
    red: "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800",
    violet: "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-800",
    fuchsia: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200 dark:bg-fuchsia-900/30 dark:text-fuchsia-300 dark:border-fuchsia-800",
    amber: "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800",
  };

  // تحديد محاذاة النص
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  // تحديد لون الخلفية
  const backgroundClasses = {
    white: "bg-white dark:bg-gray-900",
    gray: "bg-gray-50 dark:bg-gray-800",
    gradient: "bg-gradient-to-br from-violet-50 via-fuchsia-50 to-amber-50 dark:from-violet-950/30 dark:via-fuchsia-950/30 dark:to-amber-950/30",
    "gradient-light": "bg-gradient-to-b from-violet-50/30 to-white dark:from-violet-950/20 dark:to-gray-950",
    "gradient-dark": "bg-gradient-to-b from-gray-900 to-gray-950",
    none: "",
  };

  // خلفية مخصصة إذا تم تمرير تدرجات
  const customGradient = gradientFrom && gradientTo 
    ? `bg-gradient-to-br ${gradientFrom} ${gradientTo}`
    : '';

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
              className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900 dark:text-white ${titleClassName}`}
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
              className={`mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400 ${alignClasses[align]} ${subtitleClassName}`}
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

  // إضافة كلاسات إضافية للتصميم
  const extraClasses = [
    backgroundClasses[background] || customGradient,
    border ? 'border border-gray-200 dark:border-gray-700' : '',
    shadow ? 'shadow-lg hover:shadow-xl transition-shadow duration-300' : '',
    rounded ? 'rounded-2xl' : '',
  ].filter(Boolean).join(' ');

  return (
    <section
      id={id}
      className={`
        ${extraClasses}
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