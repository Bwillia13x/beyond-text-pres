import React from 'react';
import { motion } from 'motion/react';
import { AnimatedText } from './AnimatedText';
import { TextShimmer } from './TextShimmer';

export const Slide1Title = () => {
  return (
    <div className="presentation-safe flex flex-col items-center justify-center text-center max-w-5xl mx-auto relative h-full">
      <motion.div 
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ 
          opacity: [0.15, 0.3, 0.15], 
          scale: [0.85, 1.15, 0.85],
        }}
        transition={{ 
          duration: 16, 
          ease: "easeInOut",
          repeat: Infinity
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,160,138,0.20) 0%, rgba(245,160,138,0.05) 50%, transparent 100%)' }}
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.05, 0.12, 0.05], 
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 20, 
          ease: "easeInOut",
          repeat: Infinity,
          delay: 3
        }}
        className="absolute top-[30%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.15) 0%, transparent 70%)' }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10"
      >
        <AnimatedText
          text="Beyond Text"
          as="h1"
          className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[-0.05em] text-[var(--color-text-primary)] leading-[1.05]"
          delay={0.1}
          staggerDelay={0.08}
        />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="w-24 h-px mx-auto mt-5 mb-7"
          style={{ background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <TextShimmer delay={1.2} duration={2}>
            <p className="text-gradient-accent font-light text-2xl md:text-4xl lg:text-[2.75rem] leading-[1.3] max-w-4xl mx-auto tracking-[-0.02em]">
              Human-Guided Multimodal Assessment<br className="hidden md:block" /> for AI-Mediated Learning
            </p>
          </TextShimmer>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 mt-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 1.2, ease: "easeOut" }}
      >
        <div
          className="w-16 h-px mx-auto mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)' }}
        />
        <p className="text-2xl md:text-3xl text-[var(--color-text-primary)] font-light max-w-3xl leading-relaxed tracking-[-0.01em] opacity-90">
          When one artifact is no longer enough
        </p>
      </motion.div>
    </div>
  );
};
