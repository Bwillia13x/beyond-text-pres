import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const Slide20Debrief = () => {
  const themes = [
    { gap: "Invisible process", opportunity: "Add a process trace or defense layer" },
    { gap: "Weak transfer evidence", opportunity: "Introduce cross-representation across modes" },
    { gap: "Limited oral defensibility", opportunity: "Build in rehearsal, viva, or briefing logic" },
    { gap: "No implementation layer", opportunity: "Require prototype, applied demonstration, or field interpretation" },
    { gap: "Over-reliance on polished prose", opportunity: "Design for richer construct visibility" },
  ];

  return (
    <div className="presentation-safe flex flex-col justify-center max-w-5xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-14"
      >
        <div className="inline-flex items-center gap-3 card-glass rounded-full px-5 py-2 mb-8 shadow-premium">
          <MessageCircle className="w-4 h-4 text-[var(--color-text-secondary)] opacity-76" />
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)] font-medium opacity-78">Discussion</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]">
          From gaps to design opportunities
        </h2>
      </motion.div>

      <div className="flex flex-col gap-3 w-full max-w-4xl mx-auto mb-14">
        {themes.map((theme, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 150, damping: 20, delay: 0.3 + idx * 0.12 }}
            className="card-glass rounded-xl p-5 flex items-center gap-4 shadow-premium cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] opacity-40 shrink-0" />
            <span className="text-base text-[var(--color-text-secondary)] font-light leading-relaxed opacity-94">{theme.gap}</span>
            <span className="text-[var(--color-text-secondary)] opacity-40 shrink-0">→</span>
            <span className="text-base text-[var(--color-text-primary)] font-normal leading-relaxed">{theme.opportunity}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-xl text-[var(--color-text-secondary)] font-light italic opacity-82">
          Every gap is a design opportunity. Where does your stack begin?
        </p>
      </motion.div>
    </div>
  );
};
