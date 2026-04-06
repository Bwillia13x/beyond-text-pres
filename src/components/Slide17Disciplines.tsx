import React from 'react';
import { motion } from 'motion/react';
import slideImage from '@/presentation_image_assets/pres7.webp';

export const Slide17Disciplines = () => {
  return (
    <div className="presentation-safe flex flex-col justify-center max-w-[1420px] mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-10"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-[11px] font-medium mb-5 block opacity-80">
          Same Evidence Logic
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]">
          Different disciplines, same design principle
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97, filter: 'blur(6px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full flex justify-center mb-8"
      >
        <img
          src={slideImage}
          alt="Discipline-specific artifact stacks across fields"
          width={1536}
          height={1024}
          decoding="async"
          className="w-full h-auto max-h-[52vh] object-contain"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center text-lg md:text-xl text-[var(--color-text-secondary)] font-light tracking-wide opacity-82"
      >
        The evidence logic is stable; the stack changes with the construct.<br/>
        <span className="text-[var(--color-text-primary)] font-normal italic">Critique, defense, and demonstration need not be confined to arts-based disciplines.</span>
      </motion.p>
    </div>
  );
};
