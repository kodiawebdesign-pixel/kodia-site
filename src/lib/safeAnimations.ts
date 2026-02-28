// src/lib/safeAnimations.ts
import { Transition } from "framer-motion";

export const safeLoop = (duration: number = 2): Transition => ({
  duration,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut"
});

export const safeRotate = (duration: number = 20): Transition => ({
  duration,
  repeat: Infinity,
  repeatType: "loop",
  ease: "linear"
});

export const safePulse = (duration: number = 2): Transition => ({
  duration,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut"
});