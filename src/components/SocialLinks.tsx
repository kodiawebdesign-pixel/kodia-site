"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

type Social = { name: string; href: string };

// ألوان العلامات التجارية
const brandColors: Record<string, string> = {
  facebook: "#1877f2",
  instagram: "#e4405f",
  linkedin: "#0a66c2",
  youtube: "#ff0000",
  telegram: "#26a5e4",
  tiktok: "#000000",
  snapchat: "#fffc00",
  threads: "#000000",
  x: "#000000",
  whatsapp: "#25d366",
};

function Icon({ name, isHovered }: { name: string; isHovered: boolean }) {
  const cls = "h-4 w-4 transition-colors";
  const color = isHovered ? brandColors[name.toLowerCase()] : "currentColor";

  switch (name.toLowerCase()) {
    case "facebook":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill={color}>
          <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12H16l-.4 3h-2.4v7A10 10 0 0 0 22 12z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill={color}>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5zM18 6.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill={color}>
          <path d="M6.9 6.5a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM4.8 21V8.2H9V21H4.8zM20.5 21h-4.1v-6.3c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H7.8V8.2h3.9v1.7h.1c.5-1 1.9-2.1 3.9-2.1 4.2 0 4.9 2.7 4.9 6.3V21z" />
        </svg>
      );
    case "youtube":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill={color}>
          <path d="M21.8 8.2a3 3 0 0 0-2.1-2.1C17.8 5.6 12 5.6 12 5.6s-5.8 0-7.7.5A3 3 0 0 0 2.2 8.2 31 31 0 0 0 2 12a31 31 0 0 0 .2 3.8 3 3 0 0 0 2.1 2.1c1.9.5 7.7.5 7.7.5s5.8 0 7.7-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.2-3.8zM10 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      );
    case "telegram":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill={color}>
          <path d="M22 3.6 2.8 11.3c-1.3.5-1.3 1.3-.2 1.7l4.9 1.5 11.3-7.1c.5-.3 1-.1.6.2l-9.2 8.4-.3 4.6c.4 0 .6-.2.9-.5l2.4-2.3 5 3.7c.9.5 1.6.3 1.8-.8L23 5c.3-1.4-.5-2-1-1.4z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill={color}>
          <path d="M16 3c.6 2.7 2.6 4.7 5 5v3.2c-1.8 0-3.4-.6-5-1.6v6.7c0 3.6-2.9 6.5-6.5 6.5S3 19.9 3 16.3 5.9 9.8 9.5 9.8c.4 0 .9 0 1.3.1v3.5c-.4-.1-.8-.2-1.3-.2-1.7 0-3 1.4-3 3.1 0 1.7 1.4 3.1 3.1 3.1S13 18 13 16.3V3h3z" />
        </svg>
      );
    case "snapchat":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill={color}>
          <path d="M12 2c3 0 5 2.2 5 5.2v3.2c0 .5.3.9.8 1.1l1 .4c.6.2.7 1 .2 1.4-.6.5-1.5 1-2.4 1.3-.3.1-.5.4-.5.7 0 1.8-1.5 3.2-3.1 3.2h-1.9c-1.6 0-3.1-1.4-3.1-3.2 0-.3-.2-.6-.5-.7-.9-.3-1.8-.8-2.4-1.3-.5-.4-.4-1.2.2-1.4l1-.4c.5-.2.8-.6.8-1.1V7.2C7 4.2 9 2 12 2z" />
        </svg>
      );
    case "threads":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill={color}>
          <path d="M12 2c5 0 9 4 9 9 0 5.6-4 11-9 11S3 16.6 3 11c0-5 4-9 9-9zm0 3.2c-3.2 0-5.8 2.6-5.8 5.8 0 3.6 2.6 7.8 5.8 7.8s5.8-4.2 5.8-7.8c0-3.2-2.6-5.8-5.8-5.8zm0 3.5c2.2 0 3.6 1.2 3.6 3.2 0 2.2-1.6 3.6-3.9 3.6-2.4 0-3.9-1.5-3.9-3.7h2c0 1.1.6 1.7 1.9 1.7 1.1 0 1.8-.6 1.8-1.6 0-1-.7-1.5-1.6-1.5-.7 0-1.1.2-1.5.6l-1.6-1.1c.7-1 1.8-1.2 3.2-1.2z" />
        </svg>
      );
    case "x":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill={color}>
          <path d="M18.9 2H22l-6.8 7.8L23 22h-6.5l-5.1-6.6L5.7 22H2.6l7.3-8.4L1 2h6.6l4.6 6 6.7-6z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill={color}>
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.6-5.3c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-1.5-.6-2.5-1.4-3.5-2.8-.2-.2 0-.4.1-.5l.6-.7c.2-.2.2-.4.1-.6-.1-.2-.6-1.3-.7-1.4-.2-.4-.4-.3-.6-.3h-.5c-.2 0-.5.1-.7.3-.2.2-.9.8-.9 2 0 1.2.9 2.4 1 2.5.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.1.1 1.5.1.5-.1 1.2-.5 1.4-1 .2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3z" />
        </svg>
      );
    case "github":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill={color}>
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.88-.01-1.72-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02.8-.22 1.66-.33 2.51-.33.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.41.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.48C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
        </svg>
      );
    default:
      return <span className="text-xs font-bold">{name.slice(0, 1)}</span>;
  }
}

export default function SocialLinks({
  items,
  variant = "top",
  showLabels = true,
  size = "md",
}: {
  items: Social[];
  variant?: "top" | "footer" | "minimal";
  showLabels?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // تحديد الأحجام
  const sizeClasses = {
    sm: {
      container: "gap-1",
      button: "px-2 py-1.5 text-xs",
      icon: "h-3 w-3",
    },
    md: {
      container: "gap-2",
      button: "px-3 py-2 text-xs",
      icon: "h-4 w-4",
    },
    lg: {
      container: "gap-3",
      button: "px-4 py-2.5 text-sm",
      icon: "h-5 w-5",
    },
  };

  // تحديد تصميم الأزرار حسب النوع
  const getButtonClass = (index: number) => {
    const isHovered = hoveredIndex === index;
    const baseClasses = `inline-flex items-center gap-2 rounded-full border transition-all duration-300 ${
      sizeClasses[size].button
    }`;

    switch (variant) {
      case "top":
        return `${baseClasses} bg-white text-gray-700 border-gray-200 hover:border-transparent hover:text-white`;
      case "footer":
        return `${baseClasses} bg-white/5 backdrop-blur-sm text-white border-white/10 hover:border-transparent hover:text-white`;
      case "minimal":
        return `inline-flex items-center justify-center rounded-full transition-all duration-300 ${
          size === "sm" ? "w-8 h-8" : size === "md" ? "w-10 h-10" : "w-12 h-12"
        } bg-gray-100 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 hover:text-white`;
      default:
        return baseClasses;
    }
  };

  // الحصول على لون الخلفية عند التمرير
  const getHoverStyle = (name: string) => {
    const color = brandColors[name.toLowerCase()];
    return color ? { backgroundColor: color } : {};
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-wrap items-center ${sizeClasses[size].container}`}
    >
      {items.map((s, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <Link
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className={getButtonClass(index)}
              style={isHovered && variant !== "minimal" ? getHoverStyle(s.name) : {}}
              aria-label={s.name}
              title={s.name}
            >
              <Icon name={s.name} isHovered={isHovered} />
              {showLabels && variant !== "minimal" && (
                <span className={size === "lg" ? "inline" : "hidden sm:inline"}>
                  {s.name}
                </span>
              )}
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}