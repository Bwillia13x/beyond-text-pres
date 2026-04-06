import React from 'react';
import { motion } from 'motion/react';
import { AnimatedText } from './AnimatedText';
import { TextShimmer } from './TextShimmer';
import slideImage from '@/presentation_image_assets/pres1.webp';

export const Slide11BeyondTextPivot = () => {
  return (
    <div className="presentation-safe flex flex-col items-center justify-center max-w-6xl mx-auto h-full px-8 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full"
      >
        <span className="text-[var(--color-secondary)] uppercase tracking-[0.3em] text-[11px] font-medium mb-6 block opacity-80">
          The Pivot
        </span>

        <AnimatedText
          text="Beyond text:"
          as="h2"
          className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[var(--color-text-primary)] leading-[1.1] tracking-[-0.03em]"
          delay={0.2}
          staggerDelay={0.06}
        />
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <TextShimmer delay={1} duration={2}>
            <span className="text-gradient-accent font-light text-5xl md:text-6xl lg:text-7xl mt-4 inline-block leading-[1.1] tracking-[-0.03em]">why one artifact is no longer enough</span>
          </TextShimmer>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full flex justify-center mb-8"
      >
        <img
          src={slideImage}
          alt="From single artifact to evidence stack"
          width={1671}
          height={940}
          decoding="async"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="max-w-3xl"
      >
        <p className="text-2xl md:text-3xl text-[var(--color-text-primary)] font-light leading-snug tracking-[-0.01em] opacity-95">
          When one polished artifact is no longer enough,<br/>
          <span className="text-gradient-accent font-light mt-3 inline-block">we need better evidence design.</span>
        </p>
      </motion.div>
    </div>
  );
};
