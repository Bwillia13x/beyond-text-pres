import React from 'react';
import { motion } from 'motion/react';
import { Pencil } from 'lucide-react';

export const Slide19ParticipantActivity = () => {
  const prompts = [
    { number: "01", question: "What is this task really trying to reveal?" },
    { number: "02", question: "What does the current artifact fail to show?" },
    { number: "03", question: "What 2–3 output-types would reveal that better?" },
    { number: "04", question: "What is the lightest viable stack?" },
    { number: "05", question: "What would the rubric actually reward?" },
  ];

  return (
    <div className="flex flex-col justify-center max-w-5xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-12"
      >
        <div className="inline-flex items-center gap-3 card-glass-accent rounded-full px-5 py-2 mb-8 glow-accent">
          <Pencil className="w-4 h-4 text-[var(--color-accent)]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] font-semibold">Workshop Activity</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]">
          Try it: redesign one assignment<br/>as an artifact stack
        </h2>
      </motion.div>

      <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
        {prompts.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + idx * 0.12 }}
            className="flex items-start gap-6 card-glass rounded-xl p-6 hover:border-[var(--color-accent-muted)] transition-all duration-500 shadow-premium hover:shadow-deep"
          >
            <span className="text-sm font-mono text-[var(--color-accent)] opacity-60 mt-0.5 shrink-0">{p.number}</span>
            <p className="text-lg text-[var(--color-text-primary)] font-light leading-relaxed">{p.question}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
