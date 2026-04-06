import React from 'react';
import { motion } from 'motion/react';
import { Network, Laptop, FileText, Database, Presentation, PenTool, LayoutDashboard } from 'lucide-react';

export const Slide4WhyItMatters = () => {
  return (
    <div className="flex flex-col justify-center max-w-6xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]">
          Why this matters to postsecondary education
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-5xl mx-auto">
        
        {/* Capability Frontier */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full card-glass p-10 rounded-2xl text-center relative shadow-premium"
        >
          <div className="mb-6 flex justify-center text-[var(--color-accent)]">
            <Network className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-medium text-[var(--color-text-primary)] mb-4">
            The Capability Frontier
          </h3>
          <p className="text-[var(--color-text-secondary)] font-light">
            Agents, tool-use, multi-modal reasoning, and persistent context environments.
          </p>
        </motion.div>

        {/* Transition Arrows */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden md:flex flex-col items-center justify-center gap-2 relative w-16"
        >
          <motion.div 
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-[var(--color-accent)] relative"
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-45 w-2 h-2 border-t border-r border-[var(--color-accent)]"></div>
          </motion.div>
        </motion.div>

        {/* Artifact Classes */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 w-full relative"
        >
          <div className="card-glass-accent p-8 rounded-2xl glow-accent">
            <h3 className="text-sm uppercase tracking-[0.15em] text-[var(--color-accent)] font-semibold mb-6 text-center">
              Computer-Mediated Artifact Production
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FileText, label: "Essays & Memos" },
                { icon: PenTool, label: "Lit Syntheses" },
                { icon: LayoutDashboard, label: "Spreadsheets" },
                { icon: Presentation, label: "Presentations" },
                { icon: Laptop, label: "Coding Tasks" },
                { icon: Database, label: "Data Analysis" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-[var(--color-surface)] p-3 rounded-lg border border-[var(--color-border)]">
                  <item.icon className="w-4 h-4 text-[var(--color-text-tertiary)]" />
                  <span className="text-sm font-light text-[var(--color-text-secondary)]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-20 text-center"
      >
        <p className="text-2xl md:text-3xl text-[var(--color-text-primary)] font-extralight leading-relaxed max-w-3xl mx-auto tracking-[-0.01em]">
          The real challenge is not just AI-generated text.<br/>
          <span className="text-gradient-accent font-light mt-2 inline-block">It is AI-mediated workflow.</span>
        </p>
      </motion.div>
    </div>
  );
};
