'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '🪐',
    title: 'Synastry Grid',
    desc: 'Full planet-by-planet aspect grid across 13 celestial bodies. Tap any cell for a deep, contextual interpretation.',
  },
  {
    icon: '✦',
    title: '24 Archetypes',
    desc: 'From Soul Resonance to Phoenix Union — discover your unique relationship dynamic among 24 distinct, poetically-named archetypes.',
  },
  {
    icon: '📊',
    title: 'Life Area Breakdown',
    desc: 'See how your synastry plays out across Communication, Emotional Bond, Attraction, Conflict, Growth, and Healing.',
  },
  {
    icon: '📱',
    title: 'Share as Story',
    desc: 'Generate a beautiful 9:16 story card with your archetype and top aspects. Share directly to Instagram, TikTok, or WhatsApp.',
  },
  {
    icon: '⭐',
    title: 'Swiss Ephemeris',
    desc: 'All calculations use professional-grade Swiss Ephemeris data via AstroAPI — the same source professional astrologers trust.',
  },
  {
    icon: '☁️',
    title: 'Cross-Platform',
    desc: 'Available on iOS, Android, and Web. Your data syncs seamlessly across all devices via Supabase.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 px-6 md:px-12 lg:px-24 bg-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs tracking-[2px] uppercase text-[#E53935] font-semibold">
            ✦ Why Aspectra
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            Professional-Grade Synastry, Reimagined
          </h2>
          <p className="mt-4 text-[#666666] max-w-2xl mx-auto text-sm leading-relaxed">
            Everything you need to understand your relationships through the lens of astrology.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="rounded-2xl p-8 border border-[#F0F0F0]"
              style={{ background: '#FAFAFA' }}
            >
              <span className="text-2xl">{feature.icon}</span>
              <h3 className="mt-4 text-lg font-semibold text-[#1A1A1A]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-[#666666] leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
