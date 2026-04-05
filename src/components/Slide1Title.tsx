import React from 'react';
import { motion } from 'motion/react';

export const Slide1Title = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto relative h-full">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.2, 0.4, 0.2], 
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{ 
          duration: 12, 
          ease: "easeInOut",
          repeat: Infinity
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--color-accent-subtle)] rounded-full blur-[180px] pointer-events-none"
      />

      <motion.h1 
        className="text-5xl md:text-7xl font-light tracking-[-0.04em] text-[var(--color-text-primary)] mb-8 leading-[1.1] relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Beyond Text:<br />
        <span className="text-gradient-accent font-normal text-4xl md:text-6xl mt-4 inline-block">
          Human-Guided Multimodal Assessment for AI-Mediated Learning
        </span>
      </motion.h1>

      <motion.p 
        className="text-xl md:text-2xl text-[var(--color-text-tertiary)] font-light max-w-3xl leading-relaxed relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        When one artifact is no longer enough
      </motion.p>
    </div>
  );
};
