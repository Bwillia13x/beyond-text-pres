import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, ChevronRight } from 'lucide-react';

export const Slide13ExampleEssay = () => {
  const vulnerabilities = [
    "Broad and generic topic",
    "Highly text-compressible",
    "Weak on situatedness or local context",
    "Easy to produce plausible output without deep understanding"
  ];

  return (
    <div className="flex flex-col justify-center max-w-6xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full mb-12"
      >
        <span className="text-[var(--color-text-tertiary)] uppercase tracking-widest text-xs font-semibold mb-4 block">
          Before Red-Teaming
        </span>
        <h2 className="text-4xl md:text-5xl font-light text-[var(--color-text-primary)] tracking-tight">
          Example: the generic essay
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 w-full mt-4">
        {/* The Prompt */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 bg-[var(--color-surface)] p-10 rounded-2xl border border-[var(--color-border)] relative"
        >
          <div className="absolute top-0 left-8 px-4 py-1 bg-[var(--color-surface-elevated)] border-x border-b border-[var(--color-border)] rounded-b-lg top-0">
            <span className="text-xs uppercase tracking-widest text-[var(--color-text-tertiary)] font-semibold">Standard Prompt</span>
          </div>
          <div className="mt-8">
            <p className="text-2xl text-[var(--color-text-primary)] font-light leading-relaxed italic">
              "Write a 1,500-word essay on the impact of AI on higher education."
            </p>
          </div>
        </motion.div>

        {/* Vulnerabilities */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 bg-[var(--color-accent-subtle)] p-10 rounded-2xl border border-[var(--color-accent-muted)] relative filter drop-shadow-[0_0_15px_var(--color-accent-subtle)]"
        >
          <div className="mb-8 flex items-center gap-3 text-[var(--color-accent)]">
            <AlertTriangle className="w-6 h-6" />
            <h3 className="uppercase tracking-widest text-sm font-semibold">Vulnerabilities</h3>
          </div>
          
          <ul className="space-y-5">
            {vulnerabilities.map((vuln, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                className="flex items-start gap-4 text-[var(--color-text-primary)]"
              >
                <ChevronRight className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span className="text-lg font-light">{vuln}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
