import React from 'react';
import { motion } from 'motion/react';

export const Slide12FourQuestions = () => {
  const questions = [
    { num: "01", text: "What is the assignment actually trying to make visible?" },
    { num: "02", text: "What kind of AI participation is it vulnerable to?" },
    { num: "03", text: "Where does the verification paradox appear?" },
    { num: "04", text: "What new evidence would restore stronger inference?" }
  ];

  return (
    <div className="flex flex-col justify-center max-w-6xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full mb-12"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-widest text-xs font-semibold mb-4 block">
          The Framework
        </span>
        <h2 className="text-5xl font-light text-[var(--color-text-primary)] tracking-tight">
          Four red-team questions
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 w-full">
        {questions.map((q, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
            className="bg-[var(--color-surface-elevated)] p-10 rounded-2xl border border-[var(--color-border)] flex flex-col gap-6 relative overflow-hidden group hover:border-[var(--color-accent-muted)] transition-colors duration-300"
          >
            <div className="absolute -right-4 -top-4 text-[var(--color-accent)] opacity-[0.05] text-[120px] font-bold leading-none select-none group-hover:opacity-10 transition-opacity duration-300">
              {q.num}
            </div>
            
            <span className="text-[var(--color-accent)] font-mono text-sm uppercase tracking-widest relative z-10">
              Question {q.num}
            </span>
            <p className="text-2xl text-[var(--color-text-primary)] font-light leading-snug relative z-10">
              {q.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
