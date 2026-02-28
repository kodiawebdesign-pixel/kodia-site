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
  rotate?: boolean;
  rotateAmount?: number;
  bounce?: boolean;
  customEase?: [number, number, number, number];
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
  rotate = false,
  rotateAmount = 5,
  bounce = false,
  customEase = [0.25, 0.1, 0.25, 1],
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

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
    ...(rotate && { rotate: rotateAmount }),
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    ...(blur && { filter: "blur(0px)" }),
    ...(scale && { scale: 1 }),
    ...(bounce && {
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{
        duration: bounce ? undefined : duration,
        delay,
        ease: bounce ? undefined : customEase,
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

export const RevealRotate = (props: Omit<RevealProps, "rotate">) => (
  <Reveal rotate {...props} />
);

export const RevealBounce = (props: Omit<RevealProps, "bounce">) => (
  <Reveal bounce {...props} />
);

// مكون للظهور المتسلسل (Stagger)
export const RevealStagger = ({
  children,
  staggerDelay = 0.1,
  direction = "up",
  distance = 20,
  duration = 0.5,
  ...props
}: RevealProps & { staggerDelay?: number }) => {
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
      default:
        return { y: distance };
    }
  };

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
      className={props.className}
    >
      {Array.isArray(children) ? children.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { 
              opacity: 0, 
              ...getInitialPosition(),
              ...(props.blur && { filter: "blur(10px)" }),
              ...(props.scale && { scale: 0.95 }),
            },
            visible: { 
              opacity: 1, 
              x: 0, 
              y: 0,
              ...(props.blur && { filter: "blur(0px)" }),
              ...(props.scale && { scale: 1 }),
            },
          }}
          transition={{ duration }}
        >
          {child}
        </motion.div>
      )) : children}
    </motion.div>
  );
};