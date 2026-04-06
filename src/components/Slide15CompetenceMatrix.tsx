import React from 'react';
import { motion } from 'motion/react';

export const Slide15CompetenceMatrix = () => {
  const rows = [
    { goal: "Analysis", output: "Memo / explanation", reveals: "Reasoning quality" },
    { goal: "Implementation", output: "Prototype / code / model", reveals: "Execution capability" },
    { goal: "Communication", output: "Infographic / video / slide", reveals: "Audience translation" },
    { goal: "Structure", output: "Diagram / data visualization", reveals: "Organizational thinking" },
    { goal: "Judgment", output: "Oral defense / critique", reveals: "Defensibility under questioning" },
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
          Purposeful Selection
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]">
          Choose outputs by competence, not novelty
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-5xl mx-auto mb-12"
      >
        <div className="card-glass rounded-2xl overflow-hidden shadow-deep">
          {/* Header */}
          <div className="grid grid-cols-3 gap-px bg-[var(--color-border)]">
            <div className="bg-[var(--color-surface-overlay)] p-4">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)] font-semibold">Learning Goal</span>
            </div>
            <div className="bg-[var(--color-surface-overlay)] p-4">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)] font-semibold">Output-Type</span>
            </div>
            <div className="bg-[var(--color-surface-overlay)] p-4">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)] font-semibold">What It Reveals</span>
            </div>
          </div>
          
          {/* Rows */}
          {rows.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              className="grid grid-cols-3 gap-px bg-[var(--color-border)]"
            >
              <div className="bg-[var(--color-surface-elevated)] p-5">
                <span className="text-sm font-medium text-[var(--color-text-primary)]">{row.goal}</span>
              </div>
              <div className="bg-[var(--color-surface-elevated)] p-5">
                <span className="text-sm font-light text-[var(--color-text-secondary)]">{row.output}</span>
              </div>
              <div className="bg-[var(--color-surface-elevated)] p-5">
                <span className="text-sm font-light text-[var(--color-text-tertiary)]">{row.reveals}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-2xl md:text-3xl text-[var(--color-text-primary)] font-extralight leading-snug tracking-[-0.01em]">
          Choose outputs by competence,<br/>
          <span className="text-gradient-accent font-light mt-3 inline-block">not by what feels modern.</span>
        </p>
      </motion.div>
    </div>
  );
};
