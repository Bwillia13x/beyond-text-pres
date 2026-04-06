import React from 'react';
import { motion } from 'motion/react';
import { AnimatedText } from './AnimatedText';
import slideImage from '@/presentation_image_assets/pres6.webp';

export const Slide16BeforeAfter = () => {
  return (
    <div className="presentation-safe flex flex-col justify-center max-w-[1420px] mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-8"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-[11px] font-medium mb-5 block opacity-80">
          Redesign in Practice
        </span>
        <AnimatedText
          text="From text-only to artifact stack"
          as="h2"
          className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]"
          delay={0.1}
          staggerDelay={0.05}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full relative mb-8"
      >
        {/* Minimal BEFORE / AFTER labels */}
        <div className="flex justify-between px-[8%] mb-3">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)] font-medium opacity-70"
          >
            Before
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-semibold"
          >
            After
          </motion.span>
        </div>
        <img
          src={slideImage}
          alt="Before and after assignment redesign comparison"
          width={1536}
          height={1024}
          decoding="async"
          className="w-full h-auto max-h-[52vh] object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-light leading-relaxed opacity-95">
          The redesign makes <span className="text-[var(--color-text-primary)] font-medium">analysis, communication, judgment, and defense</span> more visible than a text-only submission can.
        </p>
      </motion.div>
    </div>
  );
};
