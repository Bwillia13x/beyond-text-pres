import React from 'react';
import { motion } from 'motion/react';
import { LayoutGrid } from 'lucide-react';

export const Slide17Debrief = () => {
  const patterns = [
    "Generic prompts",
    "Invisible process",
    "Over-rewarding polish",
    "Weak contextualization",
    "Poor transfer",
    "Weak oral defensibility"
  ];

  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto h-full px-8 relative z-10 w-full text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full mb-16"
      >
        <span className="text-[var(--color-text-tertiary)] uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
          Activity Debrief
        </span>
        <h2 className="text-4xl md:text-5xl font-light text-[var(--color-text-primary)] tracking-tight">
          What patterns emerge?
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-4xl"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8">
          {patterns.map((pattern, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
              className="bg-[var(--color-surface-elevated)] border border-[var(--color-border)] px-6 py-4 rounded-xl flex items-center gap-3 shadow-sm hover:border-[var(--color-accent-muted)] transition-colors"
            >
              <LayoutGrid className="w-4 h-4 text-[var(--color-text-tertiary)]" />
              <span className="text-lg text-[var(--color-text-secondary)] font-light">{pattern}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
