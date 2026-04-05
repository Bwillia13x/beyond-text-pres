import React from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowRight, Layers } from 'lucide-react';

export const Slide11BeyondTextPivot = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl mx-auto h-full px-8 relative z-10 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full"
      >
        <span className="text-[var(--color-secondary)] uppercase tracking-[0.2em] text-sm font-semibold mb-12 block">
          The Pivot
        </span>
        
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-[var(--color-text-primary)] leading-[1.1] mb-16 tracking-tight">
          Beyond text:<br />
          <span className="text-[var(--color-accent)] font-normal mt-4 inline-block">why one artifact is no longer enough</span>
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-4xl mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 bg-[var(--color-surface-elevated)] p-8 rounded-2xl border border-[var(--color-border)] text-center"
        >
          <FileText className="w-8 h-8 text-[var(--color-text-tertiary)] mx-auto mb-4" />
          <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-2">Text-Only Artifact</h3>
          <p className="text-sm text-[var(--color-text-tertiary)] font-light">Single polished submission</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="shrink-0"
        >
          <ArrowRight className="w-8 h-8 text-[var(--color-accent)] rotate-90 md:rotate-0" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1 bg-[var(--color-accent-subtle)] p-8 rounded-2xl border border-[var(--color-accent-muted)] shadow-[0_0_30px_var(--color-accent-subtle)] text-center"
        >
          <Layers className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-4" />
          <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-2">Richer Evidence Architecture</h3>
          <p className="text-sm text-[var(--color-text-secondary)] font-light">Multiple forms of demonstrated understanding</p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="max-w-3xl"
      >
        <p className="text-2xl md:text-3xl text-[var(--color-text-primary)] font-light leading-snug">
          When one polished artifact is no longer enough,<br/>
          <span className="text-[var(--color-accent)] font-normal mt-3 inline-block">we need better evidence design.</span>
        </p>
      </motion.div>
    </div>
  );
};
