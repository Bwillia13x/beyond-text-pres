import React from 'react';
import { motion } from 'motion/react';

export type TransitionMode = 'slide' | 'fade' | 'rise';

interface SlideWrapperProps {
  children: React.ReactNode;
  direction: number;
  key?: React.Key;
  transitionMode?: TransitionMode;
}

const transitionVariants = {
  slide: {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      filter: "blur(8px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      filter: "blur(8px)",
    }),
  },
  fade: {
    enter: () => ({
      x: 0,
      y: 0,
      opacity: 0,
      scale: 0.92,
      filter: "blur(12px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: () => ({
      zIndex: 0,
      x: 0,
      y: 0,
      opacity: 0,
      scale: 1.06,
      filter: "blur(12px)",
    }),
  },
  rise: {
    enter: (direction: number) => ({
      x: 0,
      y: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
      filter: "blur(6px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: 0,
      y: direction > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.96,
      filter: "blur(6px)",
    }),
  },
};

const transitionConfigs: Record<TransitionMode, Record<string, unknown>> = {
  slide: {
    x: { type: "spring", stiffness: 180, damping: 24, mass: 1.2 },
    opacity: { duration: 0.5, ease: "easeInOut" },
    scale: { duration: 0.5, ease: "easeInOut" },
    filter: { duration: 0.5, ease: "easeInOut" },
  },
  fade: {
    opacity: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    scale: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    filter: { duration: 0.6, ease: "easeInOut" },
  },
  rise: {
    y: { type: "spring", stiffness: 150, damping: 22, mass: 1 },
    opacity: { duration: 0.45, ease: "easeOut" },
    scale: { duration: 0.5, ease: "easeOut" },
    filter: { duration: 0.45, ease: "easeOut" },
  },
};

export const SlideWrapper = ({ children, direction, transitionMode = 'slide' }: SlideWrapperProps) => {
  const variants = transitionVariants[transitionMode];

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={transitionConfigs[transitionMode]}
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 md:p-20"
    >
      {children}
    </motion.div>
  );
};
