import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target } from 'lucide-react';

export const Slide5Threshold = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl mx-auto h-full px-8 relative z-10 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-widest text-sm font-semibold mb-8 block">
          A Threshold Has Been Crossed
        </span>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--color-text-primary)] leading-[1.2] mb-16 tracking-tight">
          Frontier AI can now produce or substantially mediate much of the artifact work that higher education has traditionally used as evidence of learning.
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid md:grid-cols-2 gap-6 w-full max-w-3xl border-t border-[var(--color-border)] pt-12"
      >
        <div className="flex flex-col items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-[var(--color-text-tertiary)]" />
          <p className="text-sm text-[var(--color-text-secondary)] font-light max-w-[250px]">
            This is <span className="text-[var(--color-text-primary)] font-medium">not a prevalence claim</span> about every student or every course taking this shortcut today.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-3">
          <Target className="w-6 h-6 text-[var(--color-accent)]" />
          <p className="text-sm text-[var(--color-text-secondary)] font-light max-w-[250px]">
            It is a <span className="text-[var(--color-accent)] font-medium">threshold claim</span> about what is now practically possible right now.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
