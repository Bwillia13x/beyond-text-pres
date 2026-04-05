import React from 'react';
import { motion } from 'motion/react';
import { UserCog, Sparkles, MessageSquare, GraduationCap } from 'lucide-react';

export const Slide15StudentSelfRedTeaming = () => {
  const prompts = [
    "What assumption is weakest?",
    "What would be hardest to defend orally?",
    "What claim is under-evidenced?",
    "What breaks in a new case?"
  ];

  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full text-center mb-16"
      >
        <span className="text-[var(--color-text-tertiary)] uppercase tracking-[0.2em] text-sm font-semibold mb-6 block">
          A Second Move
        </span>
        <h2 className="text-4xl md:text-5xl font-light text-[var(--color-text-primary)] tracking-tight">
          Teach students to red-team <span className="text-[var(--color-accent)] font-normal">themselves</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 w-full max-w-5xl items-center">
        {/* Core Message */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <p className="text-2xl text-[var(--color-text-primary)] font-light leading-relaxed">
            A mature AI-era assessment strategy should not only red-team assignments against AI.
          </p>
          <div className="flex items-start gap-4 p-6 bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-2xl">
            <GraduationCap className="w-8 h-8 text-[var(--color-accent)] shrink-0 mt-1" />
            <p className="text-xl text-[var(--color-text-secondary)] font-light leading-relaxed">
              It should also teach students to <strong className="font-medium text-[var(--color-text-primary)]">use AI to red-team their own assumptions</strong>, evidence, and reasoning under human judgment.
            </p>
          </div>
        </motion.div>

        {/* AI Persona/Prompts */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[var(--color-accent-subtle)] border border-[var(--color-accent-muted)] p-8 rounded-3xl relative shadow-[0_0_20px_var(--color-accent-subtle)]"
        >
          <div className="absolute top-0 right-8 -translate-y-1/2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full px-4 py-1.5 flex items-center gap-2">
            <UserCog className="w-4 h-4 text-[var(--color-text-tertiary)]" />
            <span className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">Student Prompts</span>
          </div>

          <div className="space-y-4 mt-6">
            {prompts.map((prompt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + idx * 0.15 }}
                className="flex items-center gap-4 bg-[var(--color-surface)] px-5 py-4 rounded-2xl border border-[var(--color-border)]"
              >
                <MessageSquare className="w-5 h-5 text-[var(--color-accent)] opacity-70" />
                <span className="text-[var(--color-text-primary)] text-lg font-light">"{prompt}"</span>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center text-[var(--color-text-tertiary)] text-xs uppercase tracking-widest font-semibold flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Developmental, not punitive
          </div>
        </motion.div>
      </div>
    </div>
  );
};
