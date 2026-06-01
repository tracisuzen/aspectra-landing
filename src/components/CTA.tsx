'use client';

import { motion } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  CTA Component                                                      */
/* ------------------------------------------------------------------ */

export default function CTA() {
  return (
    <section
      className="py-24 px-6 bg-gradient-to-br from-[#E53935]/5 to-[#D4A574]/10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto max-w-2xl text-center"
      >
        {/* Title */}
        <h2
          className="text-3xl md:text-5xl font-bold tracking-tight"
          style={{ color: '#1A1A1A' }}
        >
          Your Synastry Awaits
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg mt-4 max-w-xl mx-auto"
          style={{ color: '#666666' }}
        >
          Download Aspectra and discover what the stars reveal about your
          relationships.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="bg-[#E53935] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-200"
            style={{ boxShadow: '0 6px 24px rgba(229,57,53,0.25)' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                '0 8px 32px rgba(229,57,53,0.35)';
              (e.currentTarget as HTMLButtonElement).style.transform =
                'translateY(-2px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                '0 6px 24px rgba(229,57,53,0.25)';
              (e.currentTarget as HTMLButtonElement).style.transform = '';
            }}
          >
            Open Aspectra
          </motion.button>
        </div>

        {/* Platforms text */}
        <p
          className="text-sm mt-4"
          style={{ color: '#999999' }}
        >
          Available on iOS, Android, and Web
        </p>

        {/* Store badges row */}
        <div className="flex items-center justify-center gap-2 mt-3 text-sm tracking-wide">
          <span style={{ color: '#666666' }}>App Store</span>
          <span style={{ color: '#CCCCCC' }}>&middot;</span>
          <span style={{ color: '#666666' }}>Google Play</span>
          <span style={{ color: '#CCCCCC' }}>&middot;</span>
          <span style={{ color: '#666666' }}>Web App</span>
        </div>
      </motion.div>
    </section>
  );
}
