import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { Network, Laptop, FileText, Database, Presentation, PenTool, LayoutDashboard } from 'lucide-react';

export const Slide4WhyItMatters = () => {
  // Generate stable particles for the SVG stream
  const particles = useMemo(() =>
    Array.from({ length: 14 }, (_, i) => ({
      id: i,
      delay: i * 0.45 + Math.random() * 0.35,
      duration: 1.4 + Math.random() * 0.5,
      yOff: (Math.random() - 0.5) * 18,
      size: 1.2 + Math.random() * 1.8,
    })),
  []);

  const artifacts = [
    { icon: FileText, label: "Essays & Memos" },
    { icon: PenTool, label: "Literature Syntheses" },
    { icon: LayoutDashboard, label: "Spreadsheets & Models" },
    { icon: Presentation, label: "Presentations" },
    { icon: Laptop, label: "Coding Tasks & Prototypes" },
    { icon: Database, label: "Data Analysis" },
  ];

  return (
    <div className="presentation-safe flex flex-col justify-center max-w-6xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full text-center mb-14"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-[11px] font-medium mb-5 block opacity-80">
          The Stakes
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]">
          Why this matters to postsecondary education
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-0 w-full max-w-5xl mx-auto">
        
        {/* Capability Frontier */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full card-glass p-8 rounded-2xl text-center relative shadow-premium z-10"
        >
          <div className="mb-5 flex justify-center text-[var(--color-accent)]">
            <Network className="w-9 h-9" />
          </div>
          <h3 className="text-xl font-medium text-[var(--color-text-primary)] mb-3">
            The Capability Frontier
          </h3>
          <p className="text-base text-[var(--color-text-secondary)] font-light leading-relaxed">
            Agents, tool-use, multimodal reasoning, and persistent context environments.
          </p>

          {/* Pulsing emission indicator */}
          <motion.div
            className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[var(--color-accent)] z-20"
            animate={{ scale: [1, 1.6, 1], opacity: [0.9, 0.3, 0.9] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Particle Stream Channel — SVG-based for reliable animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden md:flex items-center relative w-28 lg:w-36 shrink-0"
        >
          <svg viewBox="0 0 120 40" className="w-full h-10" style={{ overflow: 'visible' }}>
            <defs>
              <filter id="s4streamGlow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Track line */}
            <line x1="0" y1="20" x2="120" y2="20" stroke="var(--color-accent)" strokeWidth="0.4" opacity="0.25" />
            {/* Animated particles flowing left→right */}
            {particles.map(p => (
              <motion.circle
                key={p.id}
                cy={20 + p.yOff}
                r={p.size}
                fill="var(--color-accent)"
                filter="url(#s4streamGlow)"
                initial={{ cx: 0, opacity: 0 }}
                animate={{ cx: 120, opacity: [0, 0.85, 0.85, 0] }}
                transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear', repeatDelay: p.duration * 0.3 }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Artifact Classes */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 w-full relative z-10"
        >
          <div className="card-glass-accent p-6 rounded-2xl glow-accent">
            <h3 className="text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] font-semibold mb-5 text-center">
              Artifact Production Now Easily AI-Mediated
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {artifacts.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + idx * 0.12 }}
                  className="flex items-center gap-2.5 bg-[var(--color-surface)] p-3 rounded-lg border border-[var(--color-border)] relative overflow-hidden"
                >
                  <item.icon className="w-4 h-4 text-[var(--color-text-secondary)] opacity-80" />
                  <span className="text-sm font-light text-[var(--color-text-secondary)]">{item.label}</span>
                  {/* Incoming particle flash per artifact */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]"
                    animate={{ opacity: [0, 0.6, 0] }}
                    transition={{ duration: 2, delay: 1.5 + idx * 0.4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-14 text-center"
      >
        <p className="text-3xl md:text-4xl text-[var(--color-text-primary)] font-extralight leading-snug max-w-3xl mx-auto tracking-[-0.02em]">
          The real challenge is not just AI-generated text.<br/>
          <span className="text-gradient-accent font-light mt-2 inline-block">It is AI-mediated workflow.</span>
        </p>
      </motion.div>
    </div>
  );
};
