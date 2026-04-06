import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Compass } from 'lucide-react';
import { TiltCard } from './TiltCard';

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
        <TiltCard tiltStrength={5} className="card-glass p-10 rounded-2xl flex flex-col shadow-premium border-t-2 border-t-[var(--color-secondary)]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 150, damping: 20, delay: 0.2 }}
            className="flex flex-col h-full"
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
        </TiltCard>

        <TiltCard tiltStrength={5} className="card-glass p-10 rounded-2xl flex flex-col shadow-premium border-t-2 border-t-[var(--color-accent)]">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 150, damping: 20, delay: 0.4 }}
            className="flex flex-col h-full"
          >
            <div className="mb-6 flex items-center gap-3 text-[var(--color-accent)]">
              <Compass className="w-5 h-5" />
              <span className="uppercase tracking-[0.15em] text-[11px] font-semibold">Structured Evidence Design</span>
            </div>
            <h3 className="text-2xl md:text-[28px] font-medium text-[var(--color-text-primary)] mb-5 leading-snug">
              Multimodality as evidence architecture
            </h3>
            <p className="text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
              Design the task as a <span className="text-[var(--color-text-primary)] font-normal">structured system of evidence</span> — not more media, but better designed visibility of learning.
            </p>
          </motion.div>
        </TiltCard>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-light leading-relaxed tracking-wide opacity-95">
          One recovers evidence after the fact.<br/>The other <span className="text-[var(--color-text-primary)] font-medium">architects richer evidence into the task from the start.</span>
        </p>
      </motion.div>
    </div>
  );
};
