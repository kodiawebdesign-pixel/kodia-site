"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
  amount?: number;
  className?: string;
  blur?: boolean;
  scale?: boolean;
  threshold?: number;
};

export default function Reveal({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 20,
  once = true,
  amount = 0.2,
  className = "",
  blur = false,
  scale = false,
  threshold = 0.2,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  // تحديد الحركة حسب الاتجاه
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: -distance };
      case "right":
        return { x: distance };
      case "none":
        return {};
      default:
        return { y: distance };
    }
  };

  const initial = {
    opacity: 0,
    ...getInitialPosition(),
    ...(blur && { filter: "blur(10px)" }),
    ...(scale && { scale: 0.95 }),
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    ...(blur && { filter: "blur(0px)" }),
    ...(scale && { scale: 1 }),
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier محسّن
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// نسخة مبسطة مع تأثيرات مختلفة للاستخدام السريع
export const RevealUp = (props: Omit<RevealProps, "direction">) => (
  <Reveal direction="up" {...props} />
);

export const RevealDown = (props: Omit<RevealProps, "direction">) => (
  <Reveal direction="down" {...props} />
);

export const RevealLeft = (props: Omit<RevealProps, "direction">) => (
  <Reveal direction="left" {...props} />
);

export const RevealRight = (props: Omit<RevealProps, "direction">) => (
  <Reveal direction="right" {...props} />
);

export const RevealBlur = (props: Omit<RevealProps, "blur">) => (
  <Reveal blur {...props} />
);

export const RevealScale = (props: Omit<RevealProps, "scale">) => (
  <Reveal scale {...props} />
);

export const RevealStagger = ({
  children,
  staggerDelay = 0.1,
  ...props
}: RevealProps & { staggerDelay?: number }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: props.once, amount: props.amount }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: props.delay || 0,
          },
        },
      }}
    >
      {Array.isArray(children) ? children.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: props.distance || 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: props.duration || 0.5 }}
        >
          {child}
        </motion.div>
      )) : children}
    </motion.div>
  );
};