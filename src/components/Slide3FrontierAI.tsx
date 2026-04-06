import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Boxes, LayoutTemplate, ArrowRight } from 'lucide-react';

export const Slide3FrontierAI = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="presentation-safe flex flex-col justify-center max-w-7xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full mb-12"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-[11px] font-medium mb-5 block opacity-80">
          The Capability Landscape
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]">
          Frontier AI today: models, environments, workflows
        </h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-3 gap-6 lg:gap-10 w-full"
      >
        <motion.div variants={itemVariants} className="card-glass p-8 rounded-2xl shadow-premium">
          <div className="mb-6 flex items-center gap-3 text-[var(--color-text-secondary)]">
            <Cpu className="w-5 h-5" />
            <h3 className="uppercase tracking-[0.15em] text-xs font-medium">Reasoning Models</h3>
          </div>
          <ul className="space-y-4 text-[var(--color-text-primary)] text-base font-light mb-8">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1">▹</span>
              Stronger reasoning and planning
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1">▹</span>
              Native multimodality
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1">▹</span>
              Integrated tool use
            </li>
          </ul>
          <p className="text-[var(--color-text-secondary)] text-base font-light leading-relaxed opacity-90">
            Multiple frontier systems now converging on these capabilities simultaneously.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="card-glass-accent p-8 rounded-2xl glow-accent relative">
          <div className="hidden md:flex absolute -left-8 top-1/2 -translate-y-1/2 text-[var(--color-accent)] z-10 w-10 h-10 bg-[var(--color-surface-elevated)] rounded-full items-center justify-center border border-[var(--color-border)] shadow-deep">
            <ArrowRight className="w-5 h-5" />
          </div>
          <div className="mb-6 flex items-center gap-3 text-[var(--color-accent)]">
            <LayoutTemplate className="w-5 h-5" />
            <h3 className="uppercase tracking-[0.15em] text-xs font-semibold">Persistent Work Environments</h3>
          </div>
          <ul className="space-y-4 text-[var(--color-text-primary)] text-base font-light mb-8">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-accent)] mt-1 opacity-70">▹</span>
              Persistent context windows
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-accent)] mt-1 opacity-70">▹</span>
              Longer task horizons
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-accent)] mt-1 opacity-70">▹</span>
              Project-based workspaces
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-accent)] mt-1 opacity-70">▹</span>
              Agentic workflow systems
            </li>
          </ul>
          <p className="text-[var(--color-text-secondary)] text-base font-light leading-relaxed">
            No longer single-prompt chat — persistent, multi-session working environments.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="card-glass p-8 rounded-2xl shadow-premium relative">
          <div className="hidden md:flex absolute -left-8 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)] z-10 w-10 h-10 bg-[var(--color-surface-elevated)] rounded-full items-center justify-center border border-[var(--color-border)] shadow-deep opacity-85">
            <ArrowRight className="w-5 h-5" />
          </div>
          <div className="mb-6 flex items-center gap-3 text-[var(--color-text-secondary)]">
            <Boxes className="w-5 h-5" />
            <h3 className="uppercase tracking-[0.15em] text-xs font-medium">Tool Ecosystem Expansion</h3>
          </div>
          <ul className="space-y-4 text-[var(--color-text-secondary)] text-base font-light mb-8">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-border)] mt-1">▹</span>
              Spreadsheet-native AI
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-border)] mt-1">▹</span>
              Browser-integrated agents
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-border)] mt-1">▹</span>
              Project memory
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-border)] mt-1">▹</span>
              Subagents and orchestration
            </li>
          </ul>
          <p className="text-[var(--color-text-secondary)] text-base font-light leading-relaxed">
            Tools orchestrating other tools to complete multi-step tasks autonomously.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
