import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, GitBranch, Shield, Sparkles, Filter, BrainCircuit, Activity } from 'lucide-react';

export const Slide7WorkflowCompression = () => {
  const courses = [
    { name: "Course 1", subagents: ["Schedule Mapping", "Deliverable Drafting", "Revision", "Code Support"] },
    { name: "Course 2", subagents: ["Synthesis", "Slide Generation", "Deadline Tracking"] },
    { name: "Course 3", subagents: ["Reading Summaries", "Spreadsheet Logic", "Drafting"] },
  ];

  return (
    <div className="flex flex-col justify-center max-w-7xl mx-auto h-full px-4 lg:px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-10"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]">
          Day-one workflow compression
        </h2>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)] font-light">
          Each course gets its own persistent environment running in parallel across the semester.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 w-full max-w-6xl mx-auto">
        
        {/* Uploads Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 card-glass rounded-2xl p-6 flex flex-col shadow-premium"
        >
          <div className="flex items-center gap-2 text-[var(--color-text-tertiary)] uppercase tracking-[0.15em] text-[10px] font-medium mb-6">
            <Filter className="w-4 h-4" /> Student Uploads
          </div>
          <div className="flex flex-wrap gap-2 text-sm font-light text-[var(--color-text-secondary)]">
            {["Syllabus", "Rubric", "LMS Materials", "Readings", "Slides", "Exemplar Formats"].map((item, idx) => (
              <span key={idx} className="bg-[var(--color-surface)] px-3 py-1.5 rounded-md border border-[var(--color-border)]">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* The Machine / Projects */}
        <div className="flex-[2.5] flex flex-col gap-4">
          {courses.map((course, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.15 }}
              className="card-glass-accent rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-6"
            >
              {/* Course Identity */}
              <div className="flex items-center gap-3 shrink-0 sm:w-1/4">
                <div className="w-10 h-10 bg-[var(--color-surface)] rounded-full flex items-center justify-center border border-[var(--color-accent-muted)]">
                  <BrainCircuit className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <span className="font-semibold text-lg text-[var(--color-text-primary)]">{course.name}</span>
              </div>

              {/* Subagents Branching */}
              <div className="flex-1 w-full pl-6 sm:pl-8 border-l border-[var(--color-accent-muted)] relative">
                <GitBranch className="absolute left-[-11px] top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-accent)] bg-[var(--color-accent-subtle)]" />
                <div className="flex flex-wrap gap-3">
                  {course.subagents.map((agent, aIdx) => (
                    <motion.div 
                      key={aIdx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + (idx * 0.2) + (aIdx * 0.1) }}
                      className="flex items-center gap-1.5 bg-[var(--color-surface)] border border-[var(--color-border)] px-3 py-1.5 rounded-full shadow-sm"
                    >
                      <Sparkles className="w-3 h-3 text-[var(--color-text-tertiary)]" />
                      <span className="text-xs text-[var(--color-text-primary)]">{agent}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
