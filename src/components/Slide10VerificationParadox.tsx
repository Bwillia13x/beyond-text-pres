import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';

export const Slide10VerificationParadox = () => {
  const progress = useMotionValue(0);
  const [showPulse, setShowPulse] = useState(false);

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 3.2,
      delay: 0.7,
      ease: [0.22, 0.68, 0.36, 1],
      onComplete: () => setShowPulse(true),
    });
    return () => controls.stop();
  }, [progress]);

  // Chart dimensions
  const W = 580;
  const H = 310;
  const PAD_L = 50;
  const PAD_R = 28;
  const PAD_T = 28;
  const PAD_B = 48;
  const chartW = W - PAD_L - PAD_R;
  const chartH = H - PAD_T - PAD_B;

  // Generate SVG path d-strings for smooth curves
  const capPathD = Array.from({ length: 120 }, (_, i) => {
    const t = i / 119;
    const x = PAD_L + t * chartW;
    const y = PAD_T + chartH - Math.pow(t, 1.8) * chartH;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(' ');

  const audPathD = Array.from({ length: 120 }, (_, i) => {
    const t = i / 119;
    const x = PAD_L + t * chartW;
    const y = PAD_T + Math.pow(t, 0.55) * chartH;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(' ');

  // Fill area paths (closed shapes)
  const capFillD = `M${PAD_L},${PAD_T + chartH} ` +
    Array.from({ length: 120 }, (_, i) => {
      const t = i / 119;
      return `L${(PAD_L + t * chartW).toFixed(2)},${(PAD_T + chartH - Math.pow(t, 1.8) * chartH).toFixed(2)}`;
    }).join(' ') + ` L${PAD_L + chartW},${PAD_T + chartH} Z`;

  const audFillD = `M${PAD_L},${PAD_T} ` +
    Array.from({ length: 120 }, (_, i) => {
      const t = i / 119;
      return `L${(PAD_L + t * chartW).toFixed(2)},${(PAD_T + Math.pow(t, 0.55) * chartH).toFixed(2)}`;
    }).join(' ') + ` L${PAD_L + chartW},${PAD_T} Z`;

  // Correct intersection: t^1.8 + t^0.55 = 1 → t ≈ 0.52
  const crossT = 0.52;
  const crossX = PAD_L + crossT * chartW;
  const crossY = PAD_T + Math.pow(crossT, 0.55) * chartH;

  // Animated motion transforms
  const capPathLen = useTransform(progress, [0, 0.65], [0, 1]);
  const audPathLen = useTransform(progress, [0.06, 0.70], [0, 1]);
  const fillOpacity = useTransform(progress, [0.35, 0.75], [0, 1]);
  const crossReveal = useTransform(progress, [0.50, 0.62], [0, 1]);
  const labelReveal = useTransform(progress, [0.68, 0.82], [0, 1]);

  return (
    <div className="presentation-safe flex flex-col items-center justify-center max-w-6xl mx-auto h-full px-8 relative z-10 text-center w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full mb-8"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-[11px] font-medium mb-5 block opacity-80">
          The Core Tension
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]">
          The verification paradox
        </h2>
        <p className="mt-4 text-xl text-[var(--color-text-secondary)] font-light">
          As capability rises, artifact-based verification becomes less reliable
        </p>
      </motion.div>

      {/* Animated Diverging Line Chart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full max-w-[640px] mx-auto mb-8 relative"
      >
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="s10capFill" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity="0" />
              <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="s10audFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.2" />
            </linearGradient>
            <filter id="s10glowCap" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="s10glowAud" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="s10crossGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Subtle grid */}
          {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
            <line
              key={`grid-${i}`}
              x1={PAD_L} y1={PAD_T + t * chartH}
              x2={PAD_L + chartW} y2={PAD_T + t * chartH}
              stroke="var(--color-border)" strokeWidth="0.5" opacity="0.3"
            />
          ))}

          {/* Y-axis labels */}
          <text x={PAD_L - 12} y={PAD_T + 4} textAnchor="end" fill="var(--color-text-secondary)" fontSize="13" fontFamily="var(--font-sans)" fontWeight="400" opacity="0.9">High</text>
          <text x={PAD_L - 12} y={PAD_T + chartH + 4} textAnchor="end" fill="var(--color-text-secondary)" fontSize="13" fontFamily="var(--font-sans)" fontWeight="400" opacity="0.9">Low</text>

          {/* X-axis */}
          <line x1={PAD_L} y1={PAD_T + chartH} x2={PAD_L + chartW} y2={PAD_T + chartH} stroke="var(--color-border)" strokeWidth="0.8" opacity="0.5" />
          <text x={PAD_L + chartW / 2} y={H - 6} textAnchor="middle" fill="var(--color-text-secondary)" fontSize="13" fontFamily="var(--font-sans)" fontWeight="400" opacity="0.9">
            AI system capability →
          </text>

          {/* Fill areas — opacity-animated */}
          <motion.path d={capFillD} fill="url(#s10capFill)" style={{ opacity: fillOpacity }} />
          <motion.path d={audFillD} fill="url(#s10audFill)" style={{ opacity: fillOpacity }} />

          {/* Capability line (rising) — drawn via pathLength */}
          <motion.path
            d={capPathD}
            fill="none"
            stroke="var(--color-secondary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ pathLength: capPathLen }}
            filter="url(#s10glowCap)"
          />

          {/* Auditability line (falling) — drawn via pathLength */}
          <motion.path
            d={audPathD}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ pathLength: audPathLen }}
            filter="url(#s10glowAud)"
          />

          {/* Dashed drop-line from intersection to x-axis */}
          <motion.line
            x1={crossX} y1={crossY} x2={crossX} y2={PAD_T + chartH}
            stroke="var(--color-text-tertiary)"
            strokeWidth="0.8"
            strokeDasharray="3 3"
            style={{ opacity: crossReveal }}
          />

          {/* Intersection marker */}
          <motion.g style={{ opacity: crossReveal }}>
            {/* Outer halo */}
            <circle cx={crossX} cy={crossY} r="18" fill="none" stroke="var(--color-text-tertiary)" strokeWidth="0.5" opacity="0.4" />
            {/* Core dot */}
            <circle cx={crossX} cy={crossY} r="5" fill="var(--color-text-primary)" filter="url(#s10crossGlow)" />
            {/* Expanding pulse rings */}
            {showPulse && (
              <>
                <motion.circle
                  cx={crossX} cy={crossY} r="5"
                  fill="none" stroke="var(--color-text-primary)" strokeWidth="1.5"
                  initial={{ r: 5, opacity: 0.7 }}
                  animate={{ r: 32, opacity: 0 }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.circle
                  cx={crossX} cy={crossY} r="5"
                  fill="none" stroke="var(--color-text-primary)" strokeWidth="1"
                  initial={{ r: 5, opacity: 0.4 }}
                  animate={{ r: 32, opacity: 0 }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
                />
              </>
            )}
          </motion.g>

          {/* Curve labels — appear after lines finish */}
          <motion.g style={{ opacity: labelReveal }}>
            <text x={PAD_L + chartW * 0.78} y={PAD_T + 24} fill="var(--color-secondary)" fontSize="14" fontFamily="var(--font-sans)" fontWeight="600" opacity="0.95">
              AI Capability ↑
            </text>
            <text x={PAD_L + chartW * 0.72} y={PAD_T + chartH - 10} fill="var(--color-accent)" fontSize="14" fontFamily="var(--font-sans)" fontWeight="600" opacity="0.95">
              Auditability ↓
            </text>
          </motion.g>
        </svg>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-3xl md:text-4xl text-[var(--color-text-primary)] font-extralight leading-snug tracking-[-0.02em]">
          Capability expands fastest <br/>
          <span className="text-gradient-accent font-light mt-3 inline-block">where auditability is weakest.</span>
        </p>
      </motion.div>
    </div>
  );
};
