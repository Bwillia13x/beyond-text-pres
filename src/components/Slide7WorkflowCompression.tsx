import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { GitBranch, Sparkles, Filter, BrainCircuit } from 'lucide-react';

// SVG-based animated flowing dot for precise control
const FlowChannel: React.FC<{ dotCount?: number; color?: string; delayBase?: number }> = ({ dotCount = 3, color = 'var(--color-accent)', delayBase = 0 }) => {
  const dots = useMemo(() =>
    Array.from({ length: dotCount }, (_, i) => ({
      id: i,
      delay: delayBase + i * 1.4 + Math.random() * 0.5,
      duration: 1.6 + Math.random() * 0.6,
      yOff: (Math.random() - 0.5) * 4,
    })),
  [dotCount, delayBase]);

  return (
    <svg viewBox="0 0 40 12" className="w-full h-3 my-auto">
      {/* Track line */}
      <line x1="0" y1="6" x2="40" y2="6" stroke="var(--color-border)" strokeWidth="0.4" opacity="0.5" />
      {/* Animated dots */}
      {dots.map(d => (
        <motion.circle
          key={d.id}
          cy={6 + d.yOff}
          r="1.8"
          fill={color}
          filter="url(#s7dotGlow)"
          initial={{ cx: 0, opacity: 0 }}
          animate={{ cx: 40, opacity: [0, 0.9, 0.9, 0] }}
          transition={{ duration: d.duration, delay: d.delay, repeat: Infinity, ease: 'linear', repeatDelay: d.duration * 0.4 }}
        />
      ))}
      <defs>
        <filter id="s7dotGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
};

export const Slide7WorkflowCompression = () => {
  const courses = [
    { name: "Course 1", color: 'var(--color-accent)', subagents: ["Schedule Mapping", "Deliverable Drafting", "Revision", "Code Support"] },
    { name: "Course 2", color: 'var(--color-secondary)', subagents: ["Synthesis", "Slide Generation", "Deadline Tracking"] },
    { name: "Course 3", color: 'var(--color-tertiary)', subagents: ["Reading Summaries", "Spreadsheet Logic", "Drafting"] },
  ];

  return (
    <div className="flex flex-col justify-center max-w-7xl mx-auto h-full px-6 lg:px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-12"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-[11px] font-medium mb-5 block opacity-80">
          The Exploit in Action
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]">
          Day-one workflow compression
        </h2>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)] font-light">
          Each course gets its own persistent environment running in parallel across the semester.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 w-full max-w-6xl mx-auto">
        
        {/* Uploads Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-[180px] shrink-0 card-glass rounded-2xl p-5 flex flex-col shadow-premium relative"
        >
          <div className="flex items-center gap-2 text-[var(--color-text-tertiary)] uppercase tracking-[0.15em] text-[10px] font-medium mb-5">
            <Filter className="w-3.5 h-3.5" /> Uploads
          </div>
          <div className="flex flex-wrap gap-1.5 text-xs font-light text-[var(--color-text-secondary)]">
            {["Syllabus", "Rubric", "LMS", "Readings", "Slides", "Exemplars"].map((item, idx) => (
              <motion.span 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.08 }}
                className="bg-[var(--color-surface)] px-2 py-1 rounded border border-[var(--color-border)]"
              >
                {item}
              </motion.span>
            ))}
          </div>
          {/* Animated pulse to indicate "feeding" */}
          <motion.div
            className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--color-accent)]"
            animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Flow connector column */}
        <div className="hidden md:flex flex-col justify-around py-4 w-10 shrink-0">
          {courses.map((course, idx) => (
            <FlowChannel key={idx} dotCount={2} color={course.color} delayBase={idx * 0.5} />
          ))}
        </div>

        {/* The Machine / Projects */}
        <div className="flex-1 flex flex-col gap-3">
          {courses.map((course, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.15 }}
              className="card-glass-accent rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4 relative overflow-hidden"
            >
              {/* Course Identity */}
              <div className="flex items-center gap-3 shrink-0 sm:w-[140px]">
                <div className="w-9 h-9 bg-[var(--color-surface)] rounded-full flex items-center justify-center border" style={{ borderColor: course.color + '40' }}>
                  <BrainCircuit className="w-4 h-4" style={{ color: course.color }} />
                </div>
                <span className="font-semibold text-base text-[var(--color-text-primary)]">{course.name}</span>
              </div>

              {/* Subagents Branching with flow */}
              <div className="flex-1 w-full pl-5 sm:pl-6 border-l relative" style={{ borderColor: course.color + '40' }}>
                <GitBranch className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: course.color }} />
                <div className="flex flex-wrap gap-2">
                  {course.subagents.map((agent, aIdx) => (
                    <motion.div 
                      key={aIdx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + (idx * 0.2) + (aIdx * 0.1) }}
                      className="flex items-center gap-1.5 bg-[var(--color-surface)] border border-[var(--color-border)] px-2.5 py-1 rounded-full shadow-sm relative"
                    >
                      <Sparkles className="w-2.5 h-2.5 text-[var(--color-text-tertiary)]" />
                      <span className="text-[11px] text-[var(--color-text-primary)]">{agent}</span>
                      {/* Pulsing activity indicator per subagent */}
                      <motion.div
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: course.color }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5 + aIdx * 0.3, repeat: Infinity, ease: "easeInOut", delay: aIdx * 0.4 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Continuous activity pulse overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{ 
                  background: `radial-gradient(ellipse at 90% 50%, ${course.color}08 0%, transparent 60%)`,
                }}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3 + idx, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
