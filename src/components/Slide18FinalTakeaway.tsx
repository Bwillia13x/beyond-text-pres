import React from 'react';
import { motion } from 'motion/react';

export const Slide18FinalTakeaway = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl mx-auto h-full px-8 relative z-10 text-center">
      {/* Background Ambience */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.1, 0.3, 0.1], 
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{ 
          duration: 15, 
          ease: "easeInOut",
          repeat: Infinity
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent-subtle)] rounded-full blur-[150px] pointer-events-none"
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full relative z-10"
      >
        <span className="text-[var(--color-text-tertiary)] uppercase tracking-[0.3em] text-xs font-semibold mb-12 block">
          Final Takeaway
        </span>
        
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-[var(--color-text-primary)] leading-[1.2] mb-12 tracking-tight">
          The goal is <span className="line-through text-[var(--color-text-tertiary)] decoration-1">not AI-proofing</span>.<br />
          <span className="text-[var(--color-accent)] font-normal inline-block mt-4">The goal is stronger evidence of learning.</span>
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="max-w-2xl mt-8 relative z-10"
      >
        <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-light leading-relaxed">
          Assessment must now respond to <strong className="font-medium text-[var(--color-text-primary)]">changed workflow conditions</strong>, not just changed output quality.
        </p>
      </motion.div>
    </div>
  );
};
