import React from 'react';
import { motion } from 'motion/react';
import { AnimatedText } from './AnimatedText';
import { TextShimmer } from './TextShimmer';
import slideImage from '@/presentation_image_assets/pres1.webp';

export const Slide11BeyondTextPivot = () => {
  return (
    <div className="presentation-safe flex flex-col items-center justify-center max-w-6xl mx-auto h-full px-8 relative z-10 text-center">
      {/* Teal atmospheric blob — signals tonal shift to constructive half */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: [0.06, 0.16, 0.06],
          scale: [0.9, 1.12, 0.9],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(110,231,183,0.20) 0%, rgba(110,231,183,0.04) 50%, transparent 100%)' }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full relative z-10"
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
            <span className="text-gradient-accent font-light text-5xl md:text-6xl lg:text-7xl mt-4 inline-block leading-[1.1] tracking-[-0.03em]">from single artifact to evidence architecture</span>
          </TextShimmer>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full flex justify-center mb-8 relative z-10"
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
        className="max-w-3xl relative z-10"
      >
        <p className="text-2xl md:text-3xl text-[var(--color-text-primary)] font-light leading-snug tracking-[-0.01em] opacity-95">
          When one artifact is no longer enough,<br/>
          <span className="text-gradient-accent font-light mt-3 inline-block">the task becomes a designed evidence system.</span>
        </p>
      </motion.div>
    </div>
  );
};
