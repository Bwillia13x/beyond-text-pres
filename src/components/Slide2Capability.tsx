import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, AlertCircle, Eye } from 'lucide-react';

export const Slide2Capability = () => {
  return (
    <div className="presentation-safe flex flex-col items-center justify-center max-w-6xl mx-auto h-full px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center w-full mb-14"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-[11px] font-medium mb-5 block opacity-80">
          The Starting Point
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]">
          Why begin with capability?
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 w-full max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card-glass p-10 rounded-2xl relative flex flex-col justify-center shadow-premium"
        >
          <div className="mb-8 flex items-center gap-3 text-[var(--color-text-secondary)]">
            <AlertCircle className="w-5 h-5 opacity-60" />
            <span className="uppercase tracking-[0.15em] text-xs font-medium">The Old Conversation</span>
          </div>
          <ul className="space-y-6 text-xl text-[var(--color-text-secondary)] font-light leading-relaxed">
            <li className="flex gap-4 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-border)] mt-3 shrink-0" />
              Focus on policy and integrity
            </li>
            <li className="flex gap-4 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-border)] mt-3 shrink-0" />
              Catching AI-generated text
            </li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="card-glass-accent p-10 rounded-2xl relative flex flex-col justify-center glow-accent"
        >
          <div className="absolute -left-8 lg:-left-12 top-1/2 -translate-y-1/2 bg-[var(--color-surface-elevated)] w-10 h-10 rounded-full border border-[var(--color-border-muted)] hidden md:flex items-center justify-center shadow-deep">
            <ArrowRight className="w-5 h-5 text-[var(--color-accent)]" />
          </div>
          
          <div className="mb-8 flex items-center gap-3 text-[var(--color-accent)]">
            <Eye className="w-5 h-5" />
            <span className="uppercase tracking-[0.15em] text-xs font-semibold">Required Starting Point</span>
          </div>
          <ul className="space-y-6 text-xl text-[var(--color-text-primary)] font-light">
            <li className="flex gap-4 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-3 shrink-0 opacity-60" />
              Assessment assumptions depend on current capability
            </li>
            <li className="flex gap-4 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-3 shrink-0 opacity-60" />
              If we understate capability, we understate the redesign challenge
            </li>
            <li className="flex gap-4 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-3 shrink-0 opacity-60" />
              The issue is no longer just AI-generated text
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
