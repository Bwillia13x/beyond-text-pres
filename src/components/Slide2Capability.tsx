import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, AlertCircle, Eye } from 'lucide-react';

export const Slide2Capability = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto h-full px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-16"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-widest text-xs font-semibold mb-4 block">
          The Starting Point
        </span>
        <h2 className="text-4xl md:text-5xl font-light text-[var(--color-text-primary)] tracking-tight">
          Why begin with capability?
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-24 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[var(--color-surface-elevated)] p-10 rounded-2xl border border-[var(--color-border)] relative flex flex-col justify-center"
        >
          <div className="mb-6 flex items-center gap-3 text-[var(--color-text-tertiary)]">
            <AlertCircle className="w-5 h-5" />
            <span className="uppercase tracking-widest text-xs">The Old Conversation</span>
          </div>
          <ul className="space-y-6 text-xl text-[var(--color-text-secondary)] font-light">
            <li className="flex gap-4">
              <span className="text-[var(--color-border)] mt-1">•</span>
              Focus on policy and integrity
            </li>
            <li className="flex gap-4">
              <span className="text-[var(--color-border)] mt-1">•</span>
              Catching AI-generated text
            </li>
            <li className="flex gap-4">
              <span className="text-[var(--color-border)] mt-1">•</span>
              Understating the capability frontier
            </li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[var(--color-accent-subtle)] p-10 rounded-2xl border border-[var(--color-accent-muted)] relative flex flex-col justify-center shadow-[0_0_30px_var(--color-accent-subtle)]"
        >
          <div className="absolute -left-6 lg:-left-12 top-1/2 -translate-y-1/2 bg-[var(--color-surface)] p-2 rounded-full border border-[var(--color-border)] hidden md:block">
            <ArrowRight className="w-6 h-6 text-[var(--color-accent)]" />
          </div>
          
          <div className="mb-6 flex items-center gap-3 text-[var(--color-accent)]">
            <Eye className="w-5 h-5" />
            <span className="uppercase tracking-widest text-xs font-semibold">Required Starting Point</span>
          </div>
          <ul className="space-y-6 text-xl text-[var(--color-text-primary)] font-light">
            <li className="flex gap-4">
              <span className="text-[var(--color-accent)] mt-1 opacity-70">•</span>
              Assessment assumptions depend on what systems can now do
            </li>
            <li className="flex gap-4">
              <span className="text-[var(--color-accent)] mt-1 opacity-70">•</span>
              If we understate capability, we understate the redesign challenge
            </li>
            <li className="flex gap-4">
              <span className="text-[var(--color-accent)] mt-1 opacity-70">•</span>
              The issue is no longer just AI-generated text
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
