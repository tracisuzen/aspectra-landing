"use client";

import { motion } from "framer-motion";
import SynastryWheel from "@/components/SynastryWheel";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-6 py-24 md:flex-row md:gap-12 md:px-12 lg:px-24">
        {/* ── Left: Text ────────────────────────────────────────── */}
        <motion.div
          className="flex flex-1 flex-col items-start gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full bg-[#E53935]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[2px] text-[#E53935]"
          >
            ✦ Synastry Analysis
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold leading-[1.05] tracking-[-1.5px] text-[#1A1A1A] md:text-6xl lg:text-7xl"
          >
            Your Relationship,
            <br />
            Written in the Stars
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-lg leading-relaxed text-[#666666]"
          >
            Unlimited synastry analysis powered by Swiss Ephemeris. Discover
            your archetype across 24 unique relationship dynamics — deeper than
            a professional session, for less than the cost of one.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4">
            <a
              href="https://app.aspectra.app"
              className="rounded-full bg-[#E53935] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#E53935]/20 transition-all hover:shadow-xl hover:shadow-[#E53935]/30"
            >
              Get Started Free
            </a>
            <a
              href="#archetypes"
              className="rounded-full px-8 py-3.5 text-sm font-medium text-[#666666] transition-colors hover:text-[#1A1A1A]"
            >
              Explore Archetypes
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: Synastry Wheel ─────────────────────────────── */}
        <motion.div
          className="flex flex-1 items-center justify-center"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <SynastryWheel className="w-full max-w-[520px]" />
        </motion.div>
      </div>
    </section>
  );
}