import React from 'react';
import { motion } from 'motion/react';
import { AnimatedText } from './AnimatedText';
import { TextShimmer } from './TextShimmer';

export const Slide21FinalTakeaway = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl mx-auto h-full px-8 relative z-10 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ 
          opacity: [0.12, 0.28, 0.12], 
          scale: [0.85, 1.15, 0.85],
        }}
        transition={{ 
          duration: 18, 
          ease: "easeInOut",
          repeat: Infinity
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,160,138,0.22) 0%, rgba(245,160,138,0.04) 50%, transparent 100%)' }}
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.04, 0.10, 0.04], 
          scale: [1, 1.08, 1],
        }}
        transition={{ 
          duration: 22, 
          ease: "easeInOut",
          repeat: Infinity,
          delay: 4
        }}
        className="absolute top-[35%] left-[65%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(110,231,183,0.12) 0%, transparent 70%)' }}
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full relative z-10"
      >
        <span className="text-[var(--color-text-tertiary)] uppercase tracking-[0.35em] text-[11px] font-medium mb-12 block opacity-60">
          Final Takeaway
        </span>
        
        <AnimatedText
          text="The goal is not more media."
          as="h2"
          className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[var(--color-text-primary)] leading-[1.15] tracking-[-0.03em]"
          delay={0.2}
          staggerDelay={0.06}
        />
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12 mt-4"
        >
          <TextShimmer delay={1.5} duration={2.2}>
            <span className="text-gradient-accent font-light text-5xl md:text-6xl lg:text-7xl inline-block leading-[1.15] tracking-[-0.03em]">The goal is better evidence of learning.</span>
          </TextShimmer>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="w-20 h-px relative z-10 mb-10"
        style={{ background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)' }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="max-w-2xl relative z-10"
      >
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] font-light leading-relaxed tracking-wide">
          In the AI era, multimodality is not only a way to check text after the fact. It is a way to <strong className="font-medium text-[var(--color-text-primary)]">redesign assignments</strong> so students must build, visualize, communicate, and defend knowledge across multiple forms.
        </p>
      </motion.div>
    </div>
  );
};
