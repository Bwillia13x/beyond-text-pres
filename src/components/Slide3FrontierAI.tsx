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
    <div className="flex flex-col justify-center max-w-7xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full mb-12"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-widest text-xs font-semibold mb-4 block">
          The Capability Landscape
        </span>
        <h2 className="text-4xl md:text-5xl font-light text-[var(--color-text-primary)] tracking-tight">
          Frontier AI today: models, environments, workflows
        </h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-3 gap-6 lg:gap-10 w-full"
      >
        <motion.div variants={itemVariants} className="bg-[var(--color-surface-elevated)] p-8 rounded-2xl border border-[var(--color-border)]">
          <div className="mb-6 flex items-center gap-3 text-[var(--color-text-tertiary)]">
            <Cpu className="w-5 h-5" />
            <h3 className="uppercase tracking-widest text-xs font-semibold">Frontier Models</h3>
          </div>
          <div className="space-y-4 mb-8">
            <div className="p-3 bg-[var(--color-surface)] rounded-lg text-sm text-[var(--color-text-primary)] border border-transparent hover:border-[var(--color-border)] transition-colors">GPT-5.2 / Codex</div>
            <div className="p-3 bg-[var(--color-surface)] rounded-lg text-sm text-[var(--color-text-primary)] border border-transparent hover:border-[var(--color-border)] transition-colors">Claude Opus 4.6 / Claude Code</div>
            <div className="p-3 bg-[var(--color-surface)] rounded-lg text-sm text-[var(--color-text-primary)] border border-transparent hover:border-[var(--color-border)] transition-colors">Gemini 3.1 Pro / NotebookLM</div>
          </div>
          <p className="text-[var(--color-text-tertiary)] text-sm font-light leading-relaxed">
            State-of-the-art systems converging on stronger reasoning, multimodality, and tool use.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-[var(--color-accent-subtle)] p-8 rounded-2xl border border-[var(--color-accent-muted)] shadow-[0_0_20px_var(--color-accent-subtle)] relative">
          <div className="hidden md:block absolute -left-5 top-14 text-[var(--color-accent)] z-10 w-10 h-10 bg-[var(--color-surface-elevated)] rounded-full flex items-center justify-center border border-[var(--color-border)]">
            <ArrowRight className="w-5 h-5 mx-auto" style={{translate: "0 20%"}}/>
          </div>
          <div className="mb-6 flex items-center gap-3 text-[var(--color-accent)]">
            <LayoutTemplate className="w-5 h-5" />
            <h3 className="uppercase tracking-widest text-xs font-semibold">Environment Shift</h3>
          </div>
          <ul className="space-y-4 text-[var(--color-text-primary)] text-sm font-light mb-8">
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
          <p className="text-[var(--color-text-secondary)] text-sm font-light leading-relaxed">
            The transition from single-prompt chat to persistent, multi-turn working environments.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-[var(--color-surface-elevated)] p-8 rounded-2xl border border-[var(--color-border)] relative">
          <div className="hidden md:block absolute -left-5 top-14 text-[var(--color-text-tertiary)] z-10 w-10 h-10 bg-[var(--color-surface-elevated)] rounded-full flex items-center justify-center border border-[var(--color-border)]">
            <ArrowRight className="w-5 h-5 mx-auto" style={{translate: "0 20%"}}/>
          </div>
          <div className="mb-6 flex items-center gap-3 text-[var(--color-text-tertiary)]">
            <Boxes className="w-5 h-5" />
            <h3 className="uppercase tracking-widest text-xs font-semibold">Ecosystem Expansion</h3>
          </div>
          <ul className="space-y-4 text-[var(--color-text-secondary)] text-sm font-light mb-8">
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
              Subagents & automations
            </li>
          </ul>
          <p className="text-[var(--color-text-tertiary)] text-sm font-light leading-relaxed">
            Tools increasingly orchestrating other tools to complete complex, multi-step objective chains.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
