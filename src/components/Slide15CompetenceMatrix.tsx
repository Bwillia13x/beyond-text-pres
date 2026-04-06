import React from 'react';
import { motion } from 'motion/react';
import slideImage from '@/presentation_image_assets/pres3.webp';

export const Slide15CompetenceMatrix = () => {
  return (
    <div className="presentation-safe flex flex-col justify-center max-w-[1420px] mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-10"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-[11px] font-medium mb-5 block opacity-80">
          Purposeful Selection
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]">
          Choose outputs by competence, not novelty
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97, filter: 'blur(6px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full flex justify-center mb-10"
      >
        <img
          src={slideImage}
          alt="Competence to output pairing matrix"
          width={1536}
          height={1024}
          decoding="async"
          className="w-full h-auto max-h-[52vh] object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-2xl md:text-3xl text-[var(--color-text-primary)] font-extralight leading-snug tracking-[-0.01em]">
          The question is not what looks modern,<br/>
          <span className="text-gradient-accent font-light mt-3 inline-block">but what best surfaces the target competence.</span>
        </p>
      </motion.div>
    </div>
  );
};
