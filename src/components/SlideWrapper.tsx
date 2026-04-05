import React from 'react';
import { motion } from 'motion/react';

export const SlideWrapper = ({ children, direction }: { children: React.ReactNode, direction: number, key?: React.Key }) => {
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.9,
        filter: "blur(8px)",
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.9,
        filter: "blur(8px)",
      };
    }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 180, damping: 24, mass: 1.2 },
        opacity: { duration: 0.5, ease: "easeInOut" },
        scale: { duration: 0.5, ease: "easeInOut" },
        filter: { duration: 0.5, ease: "easeInOut" }
      }}
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 md:p-20"
    >
      {children}
    </motion.div>
  );
};
