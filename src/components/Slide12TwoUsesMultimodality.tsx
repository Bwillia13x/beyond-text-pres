import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Compass } from 'lucide-react';

export const Slide12TwoUsesMultimodality = () => {
  return (
    <div className="presentation-safe flex flex-col justify-center max-w-6xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-14"
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
            <span className="uppercase tracking-[0.15em] text-[11px] font-semibold">After-the-Fact Recovery</span>
          </div>
          <h3 className="text-2xl md:text-[28px] font-medium text-[var(--color-text-primary)] mb-5 leading-snug">
            Multimodality as evidence recovery
          </h3>
          <p className="text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
            Add oral, visual, reflective, or process evidence to <span className="text-[var(--color-text-primary)] font-normal">recover what text alone no longer reveals.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="card-glass p-10 rounded-2xl flex flex-col shadow-premium border-t-2 border-t-[var(--color-accent)]"
        >
          <div className="mb-6 flex items-center gap-3 text-[var(--color-accent)]">
            <Compass className="w-5 h-5" />
            <span className="uppercase tracking-[0.15em] text-[11px] font-semibold">Built-In Task Design</span>
          </div>
          <h3 className="text-2xl md:text-[28px] font-medium text-[var(--color-text-primary)] mb-5 leading-snug">
            Multimodality as assignment architecture
          </h3>
          <p className="text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
            Design the task itself as a <span className="text-[var(--color-text-primary)] font-normal">structured bundle of outputs</span> rather than a single artifact.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-light leading-relaxed tracking-wide opacity-95">
          One recovers evidence after the fact.<br/>The other <span className="text-[var(--color-text-primary)] font-medium">builds richer evidence into the task from the start.</span>
        </p>
      </motion.div>
    </div>
  );
};
