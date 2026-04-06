import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { ShieldCheck, Target } from 'lucide-react';
import { AnimatedText } from './AnimatedText';
import { TiltCard } from './TiltCard';

export const Slide5Threshold = () => {
  const fillProgress = useMotionValue(0);
  const [crossed, setCrossed] = useState(false);

  useEffect(() => {
    const controls = animate(fillProgress, 1, {
      duration: 3,
      delay: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (v) => {
        if (v >= 0.7 && !crossed) setCrossed(true);
      },
    });
    return () => controls.stop();
  }, [fillProgress, crossed]);

  // Gauge dimensions — larger for visual impact
  const gaugeW = 140;
  const gaugeH = 280;
  const barX = 35;
  const barW = 70;
  const barH = 230;
  const barY = 24;
  const thresholdY = barY + barH * 0.3; // 70% mark (top = high)

  const fillHeight = useTransform(fillProgress, [0, 1], [0, barH]);
  const fillY = useTransform(fillHeight, (h: number) => barY + barH - h);

  return (
    <div className="flex flex-col items-center justify-center max-w-5xl mx-auto h-full px-8 relative z-10 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-[0.25em] text-[11px] font-medium mb-10 block opacity-80">
          A Threshold Has Been Crossed
        </span>
        
        <AnimatedText
          text="Frontier AI can now produce or substantially mediate much of the artifact work that higher education has traditionally used as evidence of learning."
          as="h2"
          className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[var(--color-text-primary)] leading-[1.2] tracking-[-0.03em]"
          delay={0.15}
          staggerDelay={0.025}
        />
      </motion.div>

      {/* Threshold Gauge + Cards row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 w-full max-w-4xl mt-12"
      >
        {/* Animated Gauge */}
        <div className="shrink-0 relative">
          <svg viewBox={`0 0 ${gaugeW} ${gaugeH + 24}`} className="w-[120px] md:w-[140px] h-auto" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="s5gaugeFill" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity="0.2" />
                <stop offset="40%" stopColor="var(--color-secondary)" stopOpacity="0.5" />
                <stop offset="70%" stopColor="var(--color-accent)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="1" />
              </linearGradient>
              <clipPath id="s5barClip">
                <rect x={barX} y={barY} width={barW} height={barH} rx="8" />
              </clipPath>
              <filter id="s5gaugeGlow" x="-40%" y="-10%" width="180%" height="120%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="s5fillGlow" x="-20%" y="-5%" width="140%" height="110%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Bar background */}
            <rect
              x={barX} y={barY} width={barW} height={barH} rx="8"
              fill="var(--color-surface-elevated)"
              stroke="var(--color-border)"
              strokeWidth="1"
            />

            {/* Tick marks with labels */}
            {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
              <g key={i}>
                <line
                  x1={barX - 8} y1={barY + barH * (1 - t)}
                  x2={barX} y2={barY + barH * (1 - t)}
                  stroke="var(--color-border)" strokeWidth="1" opacity="0.6"
                />
                {(t === 0 || t === 0.5 || t === 1) && (
                  <text
                    x={barX - 12} y={barY + barH * (1 - t) + 3}
                    textAnchor="end"
                    fill="var(--color-text-tertiary)"
                    fontSize="8"
                    fontFamily="var(--font-sans)"
                    fontWeight="300"
                    opacity="0.6"
                  >
                    {Math.round(t * 100)}
                  </text>
                )}
              </g>
            ))}

            {/* Rising fill with glow */}
            <g clipPath="url(#s5barClip)">
              <motion.rect
                x={barX} width={barW} height={barH}
                fill="url(#s5gaugeFill)"
                style={{ y: fillY, height: fillHeight }}
                rx="0"
                filter="url(#s5fillGlow)"
              />
            </g>

            {/* Threshold line */}
            <motion.line
              x1={barX - 14} y1={thresholdY}
              x2={barX + barW + 14} y2={thresholdY}
              stroke={crossed ? 'var(--color-accent)' : 'var(--color-text-tertiary)'}
              strokeWidth={crossed ? 2.5 : 1}
              strokeDasharray={crossed ? 'none' : '4 3'}
              filter={crossed ? 'url(#s5gaugeGlow)' : undefined}
            />

            {/* Threshold label */}
            <text
              x={barX + barW + 18} y={thresholdY + 4}
              fill={crossed ? 'var(--color-accent)' : 'var(--color-text-tertiary)'}
              fontSize="9"
              fontFamily="var(--font-sans)"
              fontWeight={crossed ? '600' : '300'}
            >
              threshold
            </text>

            {/* Dual pulse rings at threshold when crossed */}
            {crossed && (
              <>
                <motion.circle
                  cx={barX + barW / 2} cy={thresholdY}
                  r="5"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="1.5"
                  initial={{ r: 5, opacity: 0.8 }}
                  animate={{ r: 35, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.circle
                  cx={barX + barW / 2} cy={thresholdY}
                  r="5"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="1"
                  initial={{ r: 5, opacity: 0.5 }}
                  animate={{ r: 35, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
                />
              </>
            )}

            {/* Flash burst at threshold crossing */}
            {crossed && (
              <motion.rect
                x={barX - 4} y={thresholdY - 3} width={barW + 8} height={6} rx={3}
                fill="var(--color-accent)"
                initial={{ opacity: 0.9, scaleX: 1 }}
                animate={{ opacity: 0, scaleX: 1.8 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                filter="url(#s5gaugeGlow)"
              />
            )}

            {/* Bottom label */}
            <text
              x={barX + barW / 2} y={barY + barH + 20}
              textAnchor="middle"
              fill="var(--color-text-tertiary)"
              fontSize="8"
              fontFamily="var(--font-sans)"
              fontWeight="400"
              letterSpacing="0.12em"
            >
              AI CAPABILITY
            </text>
          </svg>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 flex-1">
          <TiltCard className="flex flex-col items-center gap-4 card-glass rounded-2xl p-6 shadow-premium" tiltStrength={5}>
            <ShieldCheck className="w-5 h-5 text-[var(--color-text-tertiary)] opacity-60" />
            <p className="text-sm text-[var(--color-text-secondary)] font-light max-w-[250px] leading-relaxed">
              This is <span className="text-[var(--color-text-primary)] font-medium">not a prevalence claim</span> about every student or every course taking this shortcut today.
            </p>
          </TiltCard>
          
          <TiltCard className="flex flex-col items-center gap-4 card-glass-accent rounded-2xl p-6 glow-accent" tiltStrength={5}>
            <Target className="w-5 h-5 text-[var(--color-accent)]" />
            <p className="text-sm text-[var(--color-text-secondary)] font-light max-w-[250px] leading-relaxed">
              It is a <span className="text-[var(--color-accent)] font-medium">threshold claim</span> about what is now practically possible right now.
            </p>
          </TiltCard>
        </div>
      </motion.div>
    </div>
  );
};
