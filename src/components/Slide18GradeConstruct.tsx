import React from 'react';
import { motion } from 'motion/react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export const Slide18GradeConstruct = () => {
  const rubricDimensions = [
    "Disciplinary understanding",
    "Reasoning / analysis",
    "Evidence use",
    "Design rationale",
    "Technical coherence",
    "Audience fit",
    "Explanation / defense",
    "Decision justification",
  ];

  return (
    <div className="flex flex-col justify-center max-w-6xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-12"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-[11px] font-medium mb-5 block opacity-80">
          Assessment Logic
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]">
          Grade the construct, not the glamour
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-5xl mx-auto mb-12">
        {/* Bad rubric habit */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card-glass p-8 rounded-2xl shadow-premium"
        >
          <div className="flex items-center gap-3 mb-6">
            <XCircle className="w-5 h-5 text-[var(--color-text-tertiary)]" />
            <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-tertiary)] font-medium">Common Rubric Habit</span>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1">—</span>
              <span className="text-[var(--color-text-secondary)] font-light">Overweight polish of the medium</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1">—</span>
              <span className="text-[var(--color-text-secondary)] font-light">Let aesthetics influence judgment of substance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1">—</span>
              <span className="text-[var(--color-text-secondary)] font-light">Use format compliance as a proxy for quality</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1">—</span>
              <span className="text-[var(--color-text-secondary)] font-light">Apply print-centric criteria to multimodal work</span>
            </li>
          </ul>
        </motion.div>

        {/* Better rubric logic */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="card-glass-accent p-8 rounded-2xl glow-accent"
        >
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" />
            <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)] font-semibold">Better Rubric Logic</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {rubricDimensions.map((dim, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + idx * 0.08 }}
                className="bg-[var(--color-surface)] px-4 py-2.5 rounded-lg border border-[var(--color-border)] text-sm font-light text-[var(--color-text-primary)]"
              >
                {dim}
              </motion.span>
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
        <p className="text-sm text-[var(--color-text-tertiary)] font-light tracking-wide mb-4 italic">
          Rubric criteria should map to intended outcomes, not medium-specific polish.
        </p>
        <p className="text-2xl md:text-3xl text-[var(--color-text-primary)] font-extralight leading-snug tracking-[-0.01em]">
          Assess the underlying competence,<br/>
          <span className="text-gradient-accent font-light mt-3 inline-block">not the polish of the medium.</span>
        </p>
      </motion.div>
    </div>
  );
};
