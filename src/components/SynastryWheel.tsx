"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
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
const SLOT_DEGREES = 15;

/* ------------------------------------------------------------------ */
/*  Pure helpers                                                       */
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

/**
 * SVG coordinates for a slot on the 180° half-circle arc.
 *
 *    slot 0  →  leftmost   (-180°)
 *    slot 6  →  top        ( -90°)
 *    slot 12 →  rightmost  (   0°)
 */
function slotToXY(slot: number, cx: number, cy: number, r: number) {
  const angle = -Math.PI + (slot / 12) * Math.PI;
  return {
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle),
  };
}

const HALF_CIRCLE_PATH = `M 60,350 A 240,240 0 0,1 540,350`;

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

/** Draws a single-degree tick mark at the given slot position. */
function TickMark({
  slot,
  cx,
  cy,
  r,
}: {
  slot: number;
  cx: number;
  cy: number;
  r: number;
}) {
  const outer = slotToXY(slot, cx, cy, r);
  const inner = slotToXY(slot, cx, cy, r - 8);
  return (
    <line
      x1={outer.x}
      y1={outer.y}
      x2={inner.x}
      y2={inner.y}
      stroke="#D0D0D0"
      strokeWidth={slot % 3 === 0 ? 1.2 : 0.5}
    />
  );
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
  const CX = 300;
  const CY = 350;
  const R = 240;

  // Stable random planet order for this page view
  const placements = useMemo(() => shuffle(PLANETS), []);

  // Track whether the planets have popped in yet
  const [planetsVisible, setPlanetsVisible] = useState(false);

  // ── Animation loop (interval-driven, ref for counter) ───────────
  const countRef = useRef(0);
  const [line, setLine] = useState<AspectLine | null>(null);

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
    // Small delay so the initial "empty wheel" is visible before planets pop
    const showTimer = setTimeout(() => setPlanetsVisible(true), 200);

    const tick = () => {
      let idx = countRef.current;
      if (idx >= iterations * 2) {
        // Loop back to start
        idx = 0;
        countRef.current = 0;
      }
      const next = generateLine(idx);
      setLine(next);
      countRef.current = idx + 1;
    };

    tick(); // first line immediately after planets appear
    const interval = setInterval(tick, lineDuration);

    return () => {
      clearTimeout(showTimer);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Render helpers ──────────────────────────────────────────────

  const p1Pos = line ? slotToXY(line.p1, CX, CY, R) : null;
  const p2Pos = line ? slotToXY(line.p2, CX, CY, R) : null;

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 600 400"
        className="h-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Gradients (recreated per line for correct colour) ── */}
        <defs>
          {line && (
            <radialGradient id={`glow-${line.id}`}>
              <stop offset="0%" stopColor={line.color} stopOpacity={0.22} />
              <stop offset="40%" stopColor={line.color} stopOpacity={0.08} />
              <stop offset="100%" stopColor={line.color} stopOpacity={0} />
            </radialGradient>
          )}
        </defs>

        {/* ── Half-circle arc ──────────────────────────────────── */}
        <path
          d={HALF_CIRCLE_PATH}
          fill="none"
          stroke="#E0E0E0"
          strokeWidth="1.5"
        />

        {/* Degree tick marks */}
        {Array.from({ length: SLOTS }, (_, i) => (
          <TickMark key={`tick-${i}`} slot={i} cx={CX} cy={CY} r={R} />
        ))}

        {/* ── Center glow ──────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {line && (
            <motion.circle
              key={`glow-${line.id}`}
              cx={CX}
              cy={CY}
              r={160}
              fill={`url(#glow-${line.id})`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 0],
              }}
              transition={{
                duration: lineDuration / 1000,
                times: [0, 0.15, 0.55, 1],
                ease: "easeInOut",
              }}
            />
          )}
        </AnimatePresence>

        {/* ── Aspect line (path for pathLength support) ────────── */}
        <AnimatePresence mode="wait">
          {line && p1Pos && p2Pos && (
            <motion.path
              key={`line-${line.id}`}
              d={`M ${p1Pos.x},${p1Pos.y} L ${p2Pos.x},${p2Pos.y}`}
              fill="none"
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

        {/* ── Center label ─────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {line && (
            <motion.g
              key={`label-${line.id}`}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {/* Subtle pill background behind the label */}
              <rect
                x={CX - 58}
                y={CY - 30}
                width={116}
                height={50}
                rx={12}
                fill="white"
                fillOpacity={0.85}
              />
              <text
                x={CX}
                y={CY - 6}
                textAnchor="middle"
                fontFamily="Inter, system-ui, sans-serif"
                fontWeight={600}
                fontSize={22}
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
                fontSize={13}
                fill={line.color}
                fillOpacity={0.8}
              >
                {line.label}
              </text>
            </motion.g>
          )}
        </AnimatePresence>

        {/* ── Planet symbols ───────────────────────────────────── */}
        {placements.map((planet, i) => {
          const pos = slotToXY(i, CX, CY, R);
          return (
            <g key={planet.key}>
              {/* Subtle circle behind each planet symbol */}
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r={16}
                fill="white"
                stroke="#E8E8E8"
                strokeWidth="1"
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  planetsVisible
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0, opacity: 0 }
                }
                transition={{
                  delay: i * 0.04,
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
              />
              <motion.text
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="system-ui, sans-serif"
                fontSize={18}
                fill="#1A1A1A"
                style={{ userSelect: "none" }}
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  planetsVisible
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0, opacity: 0 }
                }
                transition={{
                  delay: i * 0.04 + 0.05,
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
              >
                {planet.symbol}
              </motion.text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}