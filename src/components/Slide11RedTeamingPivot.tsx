import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export const Slide11RedTeamingPivot = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl mx-auto h-full px-8 relative z-10 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full"
      >
        <span className="text-[var(--color-text-tertiary)] uppercase tracking-[0.2em] text-sm font-semibold mb-12 block">
          Given these dynamics...
        </span>
        
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-[var(--color-text-primary)] leading-[1.1] mb-12 tracking-tight">
          So what can we do? <br />
          <span className="text-[var(--color-accent)] font-normal mt-4 inline-block">Red-team the assignment.</span>
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex justify-center mb-10 overflow-hidden"
      >
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-3 rounded-full flex items-center justify-center">
          <ArrowDown className="w-5 h-5 text-[var(--color-text-tertiary)]" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="max-w-2xl bg-[var(--color-surface-elevated)] p-8 rounded-2xl border border-[var(--color-border)]"
      >
        <p className="text-xl text-[var(--color-text-secondary)] font-light leading-relaxed">
          <strong className="font-medium text-[var(--color-text-primary)]">Red-teaming</strong> means stress-testing assignments against current AI workflow conditions to see whether they still produce valid evidence of learning.
        </p>
      </motion.div>
    </div>
  );
};
