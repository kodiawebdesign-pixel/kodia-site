import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  noPadding?: boolean;
  centered?: boolean;
  id?: string;
}

export default function Container({
  children,
  className = "",
  as: Component = "div",
  size = "lg",
  noPadding = false,
  centered = true,
  id,
}: ContainerProps) {
  // تحديد الحجم الأقصى بناءً على الخاصية size
  const maxWidthClasses: Record<NonNullable<ContainerProps["size"]>, string> = {
    sm: "max-w-3xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full",
  };

  // تحديد padding بناءً على noPadding
  const paddingClasses = noPadding ? "" : "px-4 sm:px-6 lg:px-8";

  // تحديد التمركز
  const marginClasses = centered ? "mx-auto" : "";

  return (
    <Component
      id={id}
      className={twMerge(
        "w-full",
        maxWidthClasses[size],
        paddingClasses,
        marginClasses,
        className
      )}
    >
      {children}
    </Component>
  );
}
