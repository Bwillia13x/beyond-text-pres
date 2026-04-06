import React from 'react';
import { motion } from 'motion/react';
import { Bot, Clock, EyeOff, RefreshCw, GitBranch } from 'lucide-react';

export const Slide7WorkflowCompression = () => {
  const projects = [
    { name: "ECON Project", color: 'var(--color-accent)', agents: ["Draft essay", "Build slides", "Problem sets"] },
    { name: "HIST Project", color: 'var(--color-secondary)', agents: ["Research paper", "Source analysis", "Annotated bib"] },
    { name: "CS Project", color: 'var(--color-tertiary)', agents: ["Code labs", "Documentation", "Test suites"] },
    { name: "PHIL Project", color: 'var(--color-accent)', agents: ["Position paper", "Case studies", "Discussion prep"] },
    { name: "RSMT Project", color: 'var(--color-secondary)', agents: ["Survey design", "Data analysis", "Lit review"] },
  ];

  return (
    <div className="presentation-safe flex flex-col justify-center max-w-7xl mx-auto h-full px-6 lg:px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-6"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-[11px] font-medium mb-4 block opacity-80">
          The Scenario in Action
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]">
          Parallel projects <span className="text-[var(--color-accent)]">×</span> parallel agents
        </h2>
        <p className="mt-3 text-lg text-[var(--color-text-secondary)] font-light max-w-3xl mx-auto">
          Each project spawns its own agents and subagents. All five run simultaneously.
        </p>
      </motion.div>

      {/* Project lanes with nested parallel agents */}
      <div className="flex flex-col gap-2 w-full max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
            className="card-glass-accent rounded-xl p-3 flex items-center gap-3 relative overflow-hidden"
          >
            {/* Project identity */}
            <div className="flex items-center gap-2 shrink-0 w-[140px]">
              <div className="w-7 h-7 bg-[var(--color-surface)] rounded-full flex items-center justify-center border" style={{ borderColor: project.color + '40' }}>
                <GitBranch className="w-3.5 h-3.5" style={{ color: project.color }} />
              </div>
              <span className="text-sm font-semibold text-[var(--color-text-primary)]">{project.name}</span>
            </div>

            {/* Parallel agent tasks */}
            <div className="flex-1 flex flex-wrap items-center gap-2 pl-3 border-l" style={{ borderColor: project.color + '30' }}>
              {project.agents.map((agent, aIdx) => (
                <motion.div
                  key={aIdx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + (idx * 0.12) + (aIdx * 0.06) }}
                  className="flex items-center gap-1.5 bg-[var(--color-surface)] border border-[var(--color-border)] px-2.5 py-1.5 rounded-lg"
                >
                  <Bot className="w-3 h-3" style={{ color: project.color }} />
                  <span className="text-xs font-light text-[var(--color-text-primary)]">{agent}</span>
                </motion.div>
              ))}
            </div>

            {/* Continuous activity pulse */}
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-xl"
              style={{ background: `radial-gradient(ellipse at 90% 50%, ${project.color}08 0%, transparent 60%)` }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3 + idx, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom: three key implications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-6 flex flex-col md:flex-row items-stretch justify-center gap-3 max-w-4xl mx-auto w-full"
      >
        <div className="flex-1 card-glass rounded-xl p-3.5 flex items-center gap-3">
          <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
          <div>
            <span className="text-sm font-semibold text-[var(--color-text-primary)] block">1–2 hours</span>
            <span className="text-xs text-[var(--color-text-secondary)] font-light">Full semester of coursework</span>
          </div>
        </div>
        <div className="flex-1 card-glass rounded-xl p-3.5 flex items-center gap-3">
          <EyeOff className="w-5 h-5 text-[var(--color-secondary)] shrink-0" />
          <div>
            <span className="text-sm font-semibold text-[var(--color-text-primary)] block">Zero understanding</span>
            <span className="text-xs text-[var(--color-text-secondary)] font-light">No student learning required</span>
          </div>
        </div>
        <div className="flex-1 card-glass rounded-xl p-3.5 flex items-center gap-3">
          <RefreshCw className="w-5 h-5 text-[var(--color-tertiary)] shrink-0" />
          <div>
            <span className="text-sm font-semibold text-[var(--color-text-primary)] block">Automated polish</span>
            <span className="text-xs text-[var(--color-text-secondary)] font-light">Scheduled tasks iterate until adequate</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
