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
        <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-[11px] font-medium mb-5 block opacity-80">
          Two Complementary Strategies
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]">
          Two uses of multimodality
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-5xl mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card-glass p-10 rounded-2xl flex flex-col shadow-premium border-t-2 border-t-[var(--color-secondary)]"
        >
          <div className="mb-6 flex items-center gap-3 text-[var(--color-secondary)]">
            <ShieldCheck className="w-5 h-5" />
            <span className="uppercase tracking-[0.15em] text-[10px] font-semibold">Evidence Recovery</span>
          </div>
          <h3 className="text-[22px] md:text-2xl font-medium text-[var(--color-text-primary)] mb-4 leading-snug">
            Multimodality as evidence recovery
          </h3>
          <p className="text-[var(--color-text-secondary)] font-light leading-relaxed mb-6 flex-1">
            Add oral, visual, reflective, or process evidence to recover what text alone no longer reveals.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Oral defence", "Process trace", "Reflection layer", "Visual annotation"].map((tag, idx) => (
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
          className="card-glass p-10 rounded-2xl flex flex-col shadow-premium border-t-2 border-t-[var(--color-accent)]"
        >
          <div className="mb-6 flex items-center gap-3 text-[var(--color-accent)]">
            <Compass className="w-5 h-5" />
            <span className="uppercase tracking-[0.15em] text-[10px] font-semibold">Assignment Architecture</span>
          </div>
          <h3 className="text-[22px] md:text-2xl font-medium text-[var(--color-text-primary)] mb-4 leading-snug">
            Multimodality as assignment architecture
          </h3>
          <p className="text-[var(--color-text-secondary)] font-light leading-relaxed mb-6 flex-1">
            Design the task so the assessable artifact is a structured bundle of outputs, rather than a single text submission.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Output bundle", "Built-in diversity", "Structured stack", "Cross-format"].map((tag, idx) => (
              <span key={idx} className="bg-[var(--color-surface)] px-3 py-1.5 rounded-md border border-[var(--color-border)] text-xs text-[var(--color-text-tertiary)]">
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
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] font-light leading-relaxed tracking-wide">
          Multimodality can work in two ways: as a way to recover evidence of learning, and as a way to <span className="text-[var(--color-text-primary)] font-medium">build richer evidence into the task from the start.</span>
        </p>
      </motion.div>
    </div>
  );
};
