import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const Slide20Debrief = () => {
  const themes = [
    "Too much reliance on polished prose",
    "Invisible process",
    "Weak transfer evidence",
    "No oral defensibility",
    "No implementation requirement",
    "Multimodal possibilities were available but unused",
  ];

  return (
    <div className="flex flex-col justify-center max-w-5xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-12"
      >
        <div className="inline-flex items-center gap-3 card-glass rounded-full px-5 py-2 mb-8 shadow-premium">
          <MessageCircle className="w-4 h-4 text-[var(--color-text-tertiary)]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-tertiary)] font-medium">Discussion</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]">
          What patterns emerge?
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl mx-auto mb-12">
        {themes.map((theme, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
            className="card-glass rounded-xl p-5 flex items-start gap-3 hover:border-[var(--color-accent-muted)] transition-all duration-500 shadow-premium hover:shadow-deep"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] opacity-50 shrink-0 mt-2" />
            <span className="text-sm text-[var(--color-text-secondary)] font-light leading-relaxed">{theme}</span>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-lg text-[var(--color-text-tertiary)] font-light italic">
          What recurring gaps did you find in your own assignments?
        </p>
      </motion.div>
    </div>
  );
};
