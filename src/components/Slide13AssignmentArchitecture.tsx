import React from 'react';
import { motion } from 'motion/react';
import { Search, Wrench, MessageSquare, ArrowRightLeft } from 'lucide-react';

export const Slide13AssignmentArchitecture = () => {
  const categories = [
    {
      icon: Search,
      label: "Analysis",
      description: "Reasoning, interpretation, critique, data-driven argument",
    },
    {
      icon: Wrench,
      label: "Implementation",
      description: "Building, coding, prototyping, operationalizing",
    },
    {
      icon: MessageSquare,
      label: "Communication / defense",
      description: "Explaining, presenting, defending under questioning",
    },
    {
      icon: ArrowRightLeft,
      label: "Cross-representation",
      description: "Carrying the same idea across text, diagram, oral explanation, and implementation",
    },
  ];

  return (
    <div className="presentation-safe flex flex-col justify-center max-w-6xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-6"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-[11px] font-medium mb-5 block opacity-80">
          Assignment Architecture
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]">
          Design the task, not just the check
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-center text-xl md:text-2xl text-[var(--color-text-secondary)] font-light tracking-[-0.01em] mb-14 opacity-95 max-w-3xl mx-auto leading-relaxed"
      >
        Cross-representation is a new transfer test.<br/>
        <span className="text-[var(--color-text-primary)] font-normal">Does understanding survive translation across forms?</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-6 w-full max-w-5xl mx-auto mb-14"
      >
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 150, damping: 20, delay: 0.35 + idx * 0.12 }}
            className="card-glass rounded-2xl p-6 flex flex-col items-center text-center shadow-premium"
          >
            <div className="w-12 h-12 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center mb-5">
              <cat.icon className="w-6 h-6 text-[var(--color-accent)] opacity-85" />
            </div>
            <h3 className="text-xl font-medium text-[var(--color-text-primary)] mb-3">{cat.label}</h3>
            <p className="text-base text-[var(--color-text-secondary)] font-light leading-relaxed opacity-88">{cat.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-2xl md:text-3xl text-[var(--color-text-primary)] font-light leading-snug tracking-[-0.01em] opacity-95">
          When understanding must survive in a new form,<br/>
          <span className="text-gradient-accent font-light mt-3 inline-block">the assessment reaches deeper than any single artifact can.</span>
        </p>
      </motion.div>
    </div>
  );
};
