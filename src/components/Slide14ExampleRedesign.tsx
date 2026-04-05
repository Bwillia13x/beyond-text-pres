import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Network, Scale, XCircle, Search } from 'lucide-react';

export const Slide14ExampleRedesign = () => {
  const improvements = [
    { icon: Network, text: "More situatedness" },
    { icon: Scale, text: "Stakeholder tradeoffs" },
    { icon: XCircle, text: "One rejected alternative" },
    { icon: Search, text: "Uncertainty awareness" }
  ];

  return (
    <div className="flex flex-col justify-center max-w-7xl mx-auto h-full px-4 lg:px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full text-center mb-10"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-widest text-xs font-semibold mb-4 block">
          After Red-Teaming
        </span>
        <h2 className="text-4xl md:text-5xl font-light text-[var(--color-text-primary)] tracking-tight">
          Minimum-viable redesign
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-stretch gap-6 w-full mt-4">
        
        {/* Before */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] relative flex flex-col justify-center opacity-70 saturate-50"
        >
          <div className="absolute top-6 left-6 text-[var(--color-text-tertiary)] uppercase tracking-widest text-xs font-semibold">
            Before
          </div>
          <div className="mt-8 text-center text-xl text-[var(--color-text-secondary)] font-light italic">
            "Write a 1,500-word essay on the impact of AI on higher education."
          </div>
        </motion.div>

        {/* Transition */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center shrink-0"
        >
          <ArrowRight className="w-10 h-10 text-[var(--color-accent)] rotate-90 md:rotate-0" />
        </motion.div>

        {/* After */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-[1.5] bg-[var(--color-surface-elevated)] p-8 rounded-2xl border border-[var(--color-accent-muted)] shadow-[0_0_20px_var(--color-accent-subtle)] relative flex flex-col justify-center"
        >
          <div className="absolute top-6 left-6 text-[var(--color-accent)] flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span className="uppercase tracking-widest text-xs font-semibold">After (Durability Improved)</span>
          </div>
          <div className="mt-8 mb-8 text-xl lg:text-2xl text-[var(--color-text-primary)] font-light leading-relaxed">
            "Using three course concepts and two stakeholder perspectives, propose a policy for AI use in first-year assessment at this institution. Include one rejected alternative, justify your tradeoffs, and explain where your confidence is lowest."
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-4 pt-6 border-t border-[var(--color-border)]">
            {improvements.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 + idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="p-1.5 rounded-md bg-[var(--color-accent-subtle)] border border-[var(--color-accent-muted)]">
                  <item.icon className="w-4 h-4 text-[var(--color-accent)]" />
                </div>
                <span className="text-sm font-light text-[var(--color-text-secondary)]">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};
