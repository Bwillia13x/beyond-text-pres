import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SlideCounterProps {
  current: number;
  total: number;
}

const Digit = ({ value, direction }: { value: string; direction: number }) => (
  <div className="relative overflow-hidden h-[1.2em] w-[0.65em] inline-flex justify-center">
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.span
        key={value}
        initial={{ y: direction > 0 ? '100%' : '-100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: direction > 0 ? '-100%' : '100%', opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 28,
          mass: 0.6,
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {value}
      </motion.span>
    </AnimatePresence>
  </div>
);

export const SlideCounter = ({ current, total }: SlideCounterProps) => {
  const currentStr = String(current + 1).padStart(2, '0');
  const totalStr = String(total).padStart(2, '0');
  const direction = 1;

  return (
    <span className="text-[var(--color-text-tertiary)] font-mono text-[10px] tracking-[0.25em] uppercase opacity-60 inline-flex items-center gap-0">
      <Digit value={currentStr[0]} direction={direction} />
      <Digit value={currentStr[1]} direction={direction} />
      <span className="mx-1 opacity-40">/</span>
      <span>{totalStr}</span>
    </span>
  );
};
