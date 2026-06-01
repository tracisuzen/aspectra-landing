"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Planet {
  key: string;
  symbol: string;
  name: string;
}

interface AspectAngle {
  angle: number;
  steps: number;
  label: string;
  color: string;
}

interface AspectLine {
  p1: number;
  p2: number;
  color: string;
  label: string;
  angle: number;
  id: number;
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const PLANETS: Planet[] = [
  { key: "sun", symbol: "☉", name: "Sun" },
  { key: "moon", symbol: "☽", name: "Moon" },
  { key: "mercury", symbol: "☿", name: "Mercury" },
  { key: "venus", symbol: "♀", name: "Venus" },
  { key: "mars", symbol: "♂", name: "Mars" },
  { key: "jupiter", symbol: "♃", name: "Jupiter" },
  { key: "saturn", symbol: "♄", name: "Saturn" },
  { key: "uranus", symbol: "⛢", name: "Uranus" },
  { key: "neptune", symbol: "♆", name: "Neptune" },
  { key: "pluto", symbol: "♇", name: "Pluto" },
  { key: "chiron", symbol: "⚷", name: "Chiron" },
  { key: "northNode", symbol: "☊", name: "North Node" },
  { key: "asc", symbol: "AC", name: "Ascendant" },
];

const HARMONIOUS: AspectAngle[] = [
  { angle: 60, steps: 4, label: "Sextile", color: "#4FC3F7" },
  { angle: 120, steps: 8, label: "Trine", color: "#4FC3F7" },
];

const TENSE: AspectAngle[] = [
  { angle: 45, steps: 3, label: "Semi-Square", color: "#E53935" },
  { angle: 90, steps: 6, label: "Square", color: "#E53935" },
  { angle: 180, steps: 12, label: "Opposition", color: "#E53935" },
];

const TOTAL_ITERATIONS = 30;
const LINE_DURATION_MS = 2800;
const SLOTS = 13;

/* ------------------------------------------------------------------ */
/*  Math helpers                                                       */
/* ------------------------------------------------------------------ */

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* ------------------------------------------------------------------ */
/*  Slot position → SVG coordinate                                     */
/* ------------------------------------------------------------------ */

function slotToXY(slot: number, cx: number, cy: number, r: number) {
  // 13 slots: 0 (left, -180°) → 12 (right, 0°)
  const angle = -Math.PI + (slot / 12) * Math.PI;
  return {
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle),
  };
}

/* ------------------------------------------------------------------ */
/*  SynastryWheel                                                      */
/* ------------------------------------------------------------------ */

interface SynastryWheelProps {
  className?: string;
  iterations?: number;
  lineDuration?: number;
}

export default function SynastryWheel({
  className = "",
  iterations = TOTAL_ITERATIONS,
  lineDuration = LINE_DURATION_MS,
}: SynastryWheelProps) {
  // ── fixed geometry ──────────────────────────────────────────────
  const CX = 300;
  const CY = 350;
  const R = 240;

  // ── random planet placement (stable per mount) ──────────────────
  const placements = useMemo(() => shuffle(PLANETS), []);

  // ── animation state ─────────────────────────────────────────────
  const [line, setLine] = useState<AspectLine | null>(null);
  const [count, setCount] = useState(0);

  const generateLine = useCallback(
    (index: number): AspectLine => {
      const isHarmonious = index % 2 === 0;
      const pool = isHarmonious ? HARMONIOUS : TENSE;
      const chosen = pickRandom(pool);
      const maxP1 = SLOTS - 1 - chosen.steps;
      const p1 = Math.floor(Math.random() * (maxP1 + 1));
      const p2 = p1 + chosen.steps;
      return { p1, p2, ...chosen, id: index };
    },
    [],
  );

  useEffect(() => {
    const run = () => {
      const next = generateLine(count);
      setLine(next);
      setCount((c) => c + 1);
    };

    run(); // first immediately
    const timer = setInterval(run, lineDuration);
    return () => clearInterval(timer);
  }, [count, generateLine, lineDuration]);

  // stop after all iterations, then restart
  useEffect(() => {
    if (count >= iterations * 2) {
      setCount(0);
    }
  }, [count, iterations]);

  // ── derived values ──────────────────────────────────────────────
  const p1Pos = line ? slotToXY(line.p1, CX, CY, R) : null;
  const p2Pos = line ? slotToXY(line.p2, CX, CY, R) : null;

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 600 400"
        className="h-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Defs — unique per line to avoid gradient flicker */}
        <defs>
          {line && (
            <radialGradient id={`glow-${line.id}`}>
              <stop offset="0%" stopColor={line.color} stopOpacity={0.22} />
              <stop offset="40%" stopColor={line.color} stopOpacity={0.08} />
              <stop offset="100%" stopColor={line.color} stopOpacity={0} />
            </radialGradient>
          )}
        </defs>

        {/* Half-circle arc */}
        <path
          d={`M ${CX - R},${CY} A ${R},${R} 0 0,1 ${CX + R},${CY}`}
          fill="none"
          stroke="#E8E8E8"
          strokeWidth="1"
          opacity={0.6}
        />

        {/* Center glow */}
        <AnimatePresence mode="wait">
          {line && (
            <motion.circle
              key={`glow-${line.id}`}
              cx={CX}
              cy={CY}
              r={160}
              fill={`url(#glow-${line.id})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.6, 0] }}
              transition={{
                duration: lineDuration / 1000,
                times: [0, 0.12, 0.65, 1],
                ease: "easeInOut",
              }}
            />
          )}
        </AnimatePresence>

        {/* Aspect line */}
        <AnimatePresence mode="wait">
          {line && p1Pos && p2Pos && (
            <motion.line
              key={`line-${line.id}`}
              x1={p1Pos.x}
              y1={p1Pos.y}
              x2={p2Pos.x}
              y2={p2Pos.y}
              stroke={line.color}
              strokeWidth={2.5}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>

        {/* Center label */}
        <AnimatePresence mode="wait">
          {line && (
            <motion.g
              key={`label-${line.id}`}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <text
                x={CX}
                y={CY - 6}
                textAnchor="middle"
                fontFamily="Inter, system-ui, sans-serif"
                fontWeight={600}
                fontSize={20}
                fill={line.color}
              >
                {line.angle}°
              </text>
              <text
                x={CX}
                y={CY + 18}
                textAnchor="middle"
                fontFamily="Inter, system-ui, sans-serif"
                fontWeight={400}
                fontSize={14}
                fill={line.color}
                opacity={0.8}
              >
                {line.label}
              </text>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Planet symbols (always visible, static positions) */}
        {placements.map((planet, i) => {
          const pos = slotToXY(i, CX, CY, R);
          return (
            <text
              key={planet.key}
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              dominantBaseline="central"
              fontFamily="system-ui, sans-serif"
              fontSize={20}
              fill="#1A1A1A"
              style={{ userSelect: "none" }}
            >
              {planet.symbol}
            </text>
          );
        })}
      </svg>
    </div>
  );
}