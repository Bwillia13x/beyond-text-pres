import React from 'react';
import { motion } from 'motion/react';
import { FileBadge, Brain, Unlink, CheckCircle2, UserCog, Layers } from 'lucide-react';

export const Slide9OldInferenceBreaking = () => {
  return (
    <div className="flex flex-col justify-center max-w-6xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-16"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-widest text-xs font-semibold mb-4 block">
          The Assessment Crisis
        </span>
        <h2 className="text-4xl md:text-5xl font-light text-[var(--color-text-primary)] tracking-tight">
          The old inference is breaking
        </h2>
      </motion.div>

      {/* Inference Diagram */}
      <div className="flex items-center justify-center gap-4 md:gap-12 w-full max-w-4xl mx-auto mb-20 relative">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-4 z-10"
        >
          <div className="w-20 h-20 rounded-2xl bg-[var(--color-surface-elevated)] border border-[var(--color-border)] flex items-center justify-center shadow-lg">
            <FileBadge className="w-8 h-8 text-[var(--color-text-primary)]" />
          </div>
          <span className="text-lg font-medium text-[var(--color-text-primary)]">Polished Artifact</span>
        </motion.div>

        {/* Broken Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex-1 flex justify-center items-center relative z-0 h-0.5 bg-[var(--color-border)] md:mx-4"
        >
          <motion.div 
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1.5 }}
            className="absolute bg-[var(--color-surface)] p-2 rounded-full border border-[var(--color-accent-muted)] shadow-[0_0_15px_var(--color-accent-subtle)]"
          >
            <Unlink className="w-6 h-6 text-[var(--color-accent)]" />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-4 z-10"
        >
          <div className="w-20 h-20 rounded-2xl bg-[var(--color-surface-elevated)] border border-[var(--color-border)] flex items-center justify-center shadow-lg opacity-50">
            <Brain className="w-8 h-8 text-[var(--color-text-secondary)]" />
          </div>
          <span className="text-lg font-medium text-[var(--color-text-secondary)] line-through decoration-[var(--color-border)]">Guaranteed Understanding</span>
        </motion.div>
      </div>

      {/* What it means now */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="max-w-3xl mx-auto w-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-2xl p-8"
      >
        <p className="text-sm uppercase tracking-widest text-[var(--color-text-tertiary)] font-semibold mb-6 text-center">
          A polished artifact may now reflect:
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-border)]">
            <CheckCircle2 className="w-5 h-5 text-[var(--color-text-secondary)] shrink-0 mt-0.5" />
            <span className="text-[var(--color-text-primary)] font-light">Deep understanding</span>
          </div>
          <div className="flex items-start gap-3 bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-border)]">
            <Layers className="w-5 h-5 text-[var(--color-text-secondary)] shrink-0 mt-0.5" />
            <span className="text-[var(--color-text-primary)] font-light">Shallow acceptance of AI work</span>
          </div>
          <div className="flex items-start gap-3 bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-border)]">
            <UserCog className="w-5 h-5 text-[var(--color-text-secondary)] shrink-0 mt-0.5" />
            <span className="text-[var(--color-text-primary)] font-light">Careful orchestration</span>
          </div>
          <div className="flex items-start gap-3 bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-border)] opacity-60">
            <span className="w-5 h-5 flex items-center justify-center font-bold shrink-0 mt-0.5 text-[var(--color-text-tertiary)]">+</span>
            <span className="text-[var(--color-text-secondary)] font-light italic">Some combination of the above</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
