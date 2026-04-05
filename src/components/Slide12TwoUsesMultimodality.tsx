import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Compass } from 'lucide-react';

export const Slide12TwoUsesMultimodality = () => {
  return (
    <div className="flex flex-col justify-center max-w-6xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-16"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-widest text-xs font-semibold mb-4 block">
          Two Distinct Strategies
        </span>
        <h2 className="text-4xl md:text-5xl font-light text-[var(--color-text-primary)] tracking-tight">
          Two uses of multimodality
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-5xl mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[var(--color-surface-elevated)] p-10 rounded-2xl border border-[var(--color-border)] flex flex-col"
        >
          <div className="mb-6 flex items-center gap-3 text-[var(--color-secondary)]">
            <ShieldCheck className="w-5 h-5" />
            <span className="uppercase tracking-widest text-xs font-semibold">Evidence Recovery</span>
          </div>
          <h3 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">
            Multimodality as evidence recovery
          </h3>
          <p className="text-[var(--color-text-secondary)] font-light leading-relaxed mb-6 flex-1">
            Add oral, visual, reflective, or process layers to recover what text no longer shows clearly.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Oral defense", "Process trace", "Reflection layer", "Visual annotation"].map((tag, idx) => (
              <span key={idx} className="bg-[var(--color-surface)] px-3 py-1.5 rounded-md border border-[var(--color-border)] text-xs text-[var(--color-text-tertiary)]">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[var(--color-accent-subtle)] p-10 rounded-2xl border border-[var(--color-accent-muted)] shadow-[0_0_30px_var(--color-accent-subtle)] flex flex-col"
        >
          <div className="mb-6 flex items-center gap-3 text-[var(--color-accent)]">
            <Compass className="w-5 h-5" />
            <span className="uppercase tracking-widest text-xs font-semibold">Assignment Architecture</span>
          </div>
          <h3 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">
            Multimodality as assignment architecture
          </h3>
          <p className="text-[var(--color-text-primary)] font-light leading-relaxed mb-6 flex-1">
            Design the task itself so the target artifact is a bundle of outputs rather than a single text submission.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Output bundle", "Built-in diversity", "Structured stack", "Cross-format"].map((tag, idx) => (
              <span key={idx} className="bg-[var(--color-surface)] px-3 py-1.5 rounded-md border border-[var(--color-accent-muted)] text-xs text-[var(--color-text-secondary)]">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-light leading-relaxed">
          Multimodality is not only an add-on after the fact — <span className="text-[var(--color-text-primary)] font-medium">it can be built into the design of the task itself.</span>
        </p>
      </motion.div>
    </div>
  );
};
