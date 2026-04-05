import React from 'react';
import { motion } from 'motion/react';
import { Hammer } from 'lucide-react';

export const Slide16ParticipantActivity = () => {
  const activityPrompts = [
    "What is it really trying to reveal?",
    "How could AI participate in producing it?",
    "Where is verification weakest?",
    "What one redesign move would improve the evidence?"
  ];

  return (
    <div className="flex flex-col items-center justify-center max-w-5xl mx-auto h-full px-8 relative z-10 w-full text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full mb-16"
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center">
            <Hammer className="w-6 h-6 text-[var(--color-accent)]" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-light text-[var(--color-text-primary)] tracking-tight">
          Try it: red-team one of your own assignments
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-3xl bg-[var(--color-surface-elevated)] p-12 rounded-2xl border border-[var(--color-border)] shadow-sm"
      >
        <ul className="space-y-8 text-left">
          {activityPrompts.map((prompt, idx) => (
            <motion.li 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + idx * 0.15 }}
              className="flex items-center gap-6"
            >
              <span className="text-[var(--color-accent)] font-mono font-semibold text-lg">0{idx + 1}</span>
              <span className="text-[22px] text-[var(--color-text-primary)] font-light">{prompt}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
