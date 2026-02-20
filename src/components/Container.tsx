import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  noPadding?: boolean;
}

export default function Container({ 
  children, 
  className = "", 
  as: Component = "div",
  size = "lg",
  noPadding = false
}: ContainerProps) {
  
  // تحديد الحجم الأقصى بناءً على الخاصية size
  const maxWidthClasses = {
    sm: "max-w-3xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  // تحديد padding بناءً على noPadding
  const paddingClasses = noPadding 
    ? "" 
    : "px-4 sm:px-6 lg:px-8";

  return (
    <Component
      className={twMerge(
        "mx-auto w-full",
        maxWidthClasses[size],
        paddingClasses,
        className
      )}
    >
      {children}
    </Component>
  );
}