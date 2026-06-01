// @ts-nocheck — framer-motion variants typing
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Archetypes Data                                                    */
/* ------------------------------------------------------------------ */

type Archetype = {
  group: string;
  name: string;
  polarity: 'harmonious' | 'intense' | 'tense';
  tagline: string;
  description: string;
};

const archetypes: Archetype[] = [
  {
    group: 'The Inner Foundation',
    name: 'Soul Resonance',
    polarity: 'harmonious',
    tagline: 'Two selves that speak without words',
    description:
      'Your deepest selves recognize each other with rare clarity. This is the bond that feels fated.',
  },
  {
    group: 'The Chemistry Axis',
    name: 'Magnetic Spark',
    polarity: 'harmonious',
    tagline: 'The kind of chemistry that changes rooms',
    description:
      'An irresistible pull between what you love and what they desire.',
  },
  {
    group: 'The Mindscape',
    name: 'Infinite Dialogue',
    polarity: 'harmonious',
    tagline: 'Conversations that never feel finished',
    description: "Your minds light up in each other's presence.",
  },
  {
    group: 'The Karmic Glue',
    name: 'Eternal Yoke',
    polarity: 'intense',
    tagline: 'A bond that feels older than this lifetime',
    description:
      'A connection with the weight of the ancient and unbreakable.',
  },
  {
    group: 'The Transcendent Intensity',
    name: 'Phoenix Union',
    polarity: 'intense',
    tagline: 'Nothing is left unchanged',
    description:
      'A transformative encounter that burns away what no longer serves.',
  },
  {
    group: 'The Wound Axis',
    name: "Healer's Sanctuary",
    polarity: 'harmonious',
    tagline: 'You hold each other\'s tender places carefully',
    description:
      'Your vulnerabilities meet with genuine compassion.',
  },
];

/* ------------------------------------------------------------------ */
/*  Polarity Badge                                                     */
/* ------------------------------------------------------------------ */

const polarityColors: Record<Archetype['polarity'], { dot: string; label: string }> = {
  harmonious: { dot: '#22C55E', label: 'Harmonious' },
  intense:    { dot: '#7C3AED', label: 'Intense' },
  tense:      { dot: '#F59E0B', label: 'Tense' },
};

/* ------------------------------------------------------------------ */
/*  Single Card                                                        */
/* ------------------------------------------------------------------ */

function ArchetypeCard({ card, index }: { card: Archetype; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const pol = polarityColors[card.polarity];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.08 }}
      className="cursor-default"
    >
      <div
        className="flex flex-col rounded-2xl px-6 py-6 bg-white border border-[#F0F0F0] shadow-sm transition-shadow duration-300 hover:shadow-md"
      >
        {/* Top: Group + Polarity */}
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs tracking-wide" style={{ color: '#999999' }}>
            {card.group}
          </span>
          <span className="flex items-center gap-1.5 text-[10px] font-medium tracking-wide" style={{ color: pol.dot }}>
            <span
              className="inline-block rounded-full"
              style={{ width: 8, height: 8, backgroundColor: pol.dot }}
            />
            {pol.label}
          </span>
        </div>

        {/* Middle: Name + Tagline */}
        <h3
          className="text-xl font-bold tracking-tight"
          style={{ color: '#1A1A1A' }}
        >
          {card.name}
        </h3>
        <p
          className="mt-1 text-sm italic"
          style={{ color: '#666666' }}
        >
          {card.tagline}
        </p>

        {/* Bottom: Description */}
        <p
          className="mt-3 text-sm leading-relaxed"
          style={{ color: '#666666' }}
        >
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Archetypes Section                                                 */
/* ------------------------------------------------------------------ */

export default function Archetypes() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#FAFAFA] py-24 px-6 md:px-12 lg:px-24">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(212,165,116,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="mx-auto flex max-w-[1200px] flex-col items-center">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <span className="text-xs tracking-[2px] uppercase font-semibold" style={{ color: '#E53935' }}>
            ✦ Discover Your Dynamic
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-center"
          style={{ color: '#1A1A1A' }}
        >
          24 Relationship Archetypes
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-3 text-center"
          style={{ color: '#666666' }}
        >
          Every connection tells a unique story. Here are six you might discover.
        </motion.p>

        {/* Card Grid */}
        <div className="mt-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {archetypes.map((card, i) => (
              <ArchetypeCard key={card.name} card={card} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.a
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          href="#features"
          className="mt-12 text-base font-semibold transition-opacity duration-200 hover:opacity-80"
          style={{ color: '#E53935' }}
        >
          Discover All 24 Archetypes in the App →
        </motion.a>
      </div>
    </section>
  );
}
