'use client';

import { motion } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Pricing Component                                                  */
/* ------------------------------------------------------------------ */

const coreFeatures = [
  'Synastry grid (5 inner planets)',
  'Relationship Archetype Card',
  'Aspect Story Cards',
  '3 of 6 Life Areas',
  'Strengths & Shadows',
  'Daily Insight',
  '1 saved partner',
];

const premiumFeatures = [
  'Everything in Core',
  'Full synastry grid (13 planets)',
  'All 6 Life Area Breakdowns',
  'Unlimited saved partners',
  'Private Journal / Notes',
  'Shareable Premium Card',
  'Astro Chat AI',
];

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.15 },
  }),
};

export default function Pricing() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        {/* ── Section Label ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span
            className="text-xs tracking-[2px] uppercase font-semibold"
            style={{ color: '#E53935' }}
          >
            ✦ Simple Pricing
          </span>
        </motion.div>

        {/* ── Title ──────────────────────────────────────────────── */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mt-4 text-center"
          style={{ color: '#1A1A1A' }}
        >
          Start with a 3-Day Free Trial
        </motion.h2>

        {/* ── Subtitle ───────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.16 }}
          className="text-base mt-3"
          style={{ color: '#666666' }}
        >
          No credit card required. Upgrade anytime.
        </motion.p>

        {/* ── Cards Row ──────────────────────────────────────────── */}
        <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ═══════════════════════ CORE ══════════════════════════ */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#FAFAFA] rounded-2xl p-8 border border-[#F0F0F0] flex flex-col"
          >
            {/* Plan name */}
            <h3
              className="text-lg font-semibold mb-1"
              style={{ color: '#1A1A1A' }}
            >
              Core
            </h3>

            {/* Price */}
            <div className="flex items-baseline mt-2">
              <span
                className="text-4xl font-bold tracking-tight"
                style={{ color: '#1A1A1A' }}
              >
                $9.99
              </span>
              <span className="text-base ml-1" style={{ color: '#999999' }}>
                /month
              </span>
            </div>

            {/* Divider */}
            <div
              className="my-6 border-t border-[#F0F0F0]"
              style={{ borderImage: 'linear-gradient(to right, #E53935 0%, #F0F0F0 30%) 1' }}
            />

            {/* Features */}
            <ul className="flex flex-col gap-3 flex-1">
              {coreFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-sm flex-shrink-0" style={{ color: '#E53935' }}>
                    ✓
                  </span>
                  <span className="text-sm" style={{ color: '#555555' }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 w-full border-2 border-[#E53935] text-[#E53935] rounded-full px-8 py-3 font-semibold text-sm transition-all duration-200 hover:bg-[#E53935] hover:text-white"
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#E53935';
                (e.currentTarget as HTMLButtonElement).style.color = '#FFFFFF';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLButtonElement).style.color = '#E53935';
              }}
            >
              Start Free Trial
            </motion.button>
          </motion.div>

          {/* ═══════════════════════ PREMIUM ══════════════════════ */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-2xl p-8 border-2 ring-2 ring-[#E53935] flex flex-col"
            style={{
              background: 'linear-gradient(180deg, rgba(229,57,53,0.04) 0%, #FFFFFF 30%)',
            }}
          >
            {/* Most Popular badge */}
            <span
              className="absolute top-4 right-4 text-[10px] tracking-[1px] uppercase font-semibold px-3 py-1 rounded-full"
              style={{ background: '#E53935', color: '#FFFFFF' }}
            >
              Most Popular
            </span>

            {/* Plan name */}
            <h3
              className="text-lg font-semibold"
              style={{ color: '#1A1A1A' }}
            >
              Premium
            </h3>

            {/* Price */}
            <div className="flex items-baseline mt-2">
              <span
                className="text-4xl font-bold tracking-tight"
                style={{ color: '#1A1A1A' }}
              >
                $19.99
              </span>
              <span className="text-base ml-1" style={{ color: '#999999' }}>
                /month
              </span>
            </div>

            {/* Divider */}
            <div
              className="my-6 border-t border-[#F0F0F0]"
              style={{ borderImage: 'linear-gradient(to right, #E53935 0%, #F0F0F0 30%) 1' }}
            />

            {/* Features */}
            <ul className="flex flex-col gap-3 flex-1">
              {premiumFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-sm flex-shrink-0" style={{ color: '#E53935' }}>
                    ✓
                  </span>
                  <span className="text-sm" style={{ color: '#555555' }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 w-full bg-[#E53935] text-white rounded-full px-8 py-3 font-semibold text-sm transition-all duration-200 hover:shadow-lg active:scale-[0.97]"
              style={{ boxShadow: '0 4px 16px rgba(229,57,53,0.25)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(229,57,53,0.35)';
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 16px rgba(229,57,53,0.25)';
                (e.currentTarget as HTMLButtonElement).style.transform = '';
              }}
            >
              Start Free Trial
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
