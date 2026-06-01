// @ts-nocheck — framer-motion variants typing
'use client';

import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Celestial Zodiac Sphere — Three.js                                 */
/* ------------------------------------------------------------------ */

function CelestialZodiacSphere() {
  const groupRef = useRef<THREE.Group>(null);

  // ---- Golden-sphere distribution: 3 000 points ----
  const sphereCount = 3000;
  const pos = new Float32Array(sphereCount * 3);
  const col = new Float32Array(sphereCount * 3);
  const gold = new THREE.Color('#D4A574');
  const red = new THREE.Color('#E53935');

  for (let i = 0; i < sphereCount; i++) {
    const y = 1 - (i / (sphereCount - 1)) * 2; // −1 → 1
    const rAtY = Math.sqrt(1 - y * y);
    const theta = Math.PI * (3 - Math.sqrt(5)) * i;

    pos[i * 3] = Math.cos(theta) * rAtY;
    pos[i * 3 + 1] = y;
    pos[i * 3 + 2] = Math.sin(theta) * rAtY;

    const t = (Math.sin(theta * 2) + Math.cos(y * 3)) * 0.25 + 0.5;
    const blended = gold.clone().lerp(red, Math.max(0, Math.min(1, t)));
    col[i * 3]     = blended.r;
    col[i * 3 + 1] = blended.g;
    col[i * 3 + 2] = blended.b;
  }

  // ---- Zodiac ring: 500 ring particles ----
  const ringCount = 500;
  const ringPos = new Float32Array(ringCount * 3);
  const ringCol = new Float32Array(ringCount * 3);

  for (let i = 0; i < ringCount; i++) {
    const angle = (i / ringCount) * Math.PI * 2;
    const r = 1.35 + Math.sin(angle * 12) * 0.03;
    const yOff = Math.cos(angle * 12) * 0.02;

    ringPos[i * 3]     = r * Math.cos(angle);
    ringPos[i * 3 + 1] = yOff;
    ringPos[i * 3 + 2] = r * Math.sin(angle);

    const c = gold.clone();
    ringCol[i * 3]     = c.r;
    ringCol[i * 3 + 1] = c.g;
    ringCol[i * 3 + 2] = c.b;
  }

  // ---- Constellation markers: 12 sparse, bright clusters ----
  const markerCount = 120;
  const markerPos = new Float32Array(markerCount * 3);
  const markerCol = new Float32Array(markerCount * 3);

  for (let i = 0; i < markerCount; i++) {
    const zAngle = ((i % 12) / 12) * Math.PI * 2 + Math.random() * 0.3;
    const r = 1.35 + (Math.random() - 0.5) * 0.12;
    const yOff = (Math.random() - 0.5) * 0.06;

    markerPos[i * 3]     = r * Math.cos(zAngle);
    markerPos[i * 3 + 1] = yOff;
    markerPos[i * 3 + 2] = r * Math.sin(zAngle);

    const isRed = i % 6 === 0;
    const c = isRed ? red.clone() : gold.clone().multiplyScalar(1.4);
    markerCol[i * 3]     = c.r;
    markerCol[i * 3 + 1] = c.g;
    markerCol[i * 3 + 2] = c.b;
  }

  // ---- Merge all into a single geometry ----
  const total = sphereCount + ringCount + markerCount;
  const allPos = new Float32Array(total * 3);
  const allCol = new Float32Array(total * 3);

  let o = 0;
  allPos.set(pos, o); allCol.set(col, o);   o += sphereCount;
  allPos.set(ringPos, o); allCol.set(ringCol, o); o += ringCount;
  allPos.set(markerPos, o); allCol.set(markerCol, o);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(allPos, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(allCol, 3));

  const pointsMat = new THREE.PointsMaterial({
    size: 0.022,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const points = new THREE.Points(geometry, pointsMat);

  // Decorative torus rings
  const ringA = new THREE.Mesh(
    new THREE.TorusGeometry(1.35, 0.008, 8, 128),
    new THREE.MeshBasicMaterial({
      color: new THREE.Color('#D4A574'), transparent: true, opacity: 0.15,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }),
  );
  ringA.rotation.x = Math.PI * 0.5;

  const ringB = new THREE.Mesh(
    new THREE.TorusGeometry(1.42, 0.005, 8, 128),
    new THREE.MeshBasicMaterial({
      color: new THREE.Color('#D4A574'), transparent: true, opacity: 0.08,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }),
  );
  ringB.rotation.x = Math.PI * 0.48;

  // Inner glow sphere
  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(0.98, 32, 32),
    new THREE.MeshBasicMaterial({
      color: new THREE.Color('#D4A574'), transparent: true, opacity: 0.03,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }),
  );

  // Gentle auto-rotation
  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.08;
  });

  return (
    <group ref={groupRef}>
      <primitive object={points} />
      <primitive object={ringA} />
      <primitive object={ringB} />
      <primitive object={glow} />
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Component                                                     */
/* ------------------------------------------------------------------ */

export default function Hero() {
  const [sphereReady, setSphereReady] = useState(false);

  return (
    <section
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 overflow-hidden"
      style={{ background: '#FAFAF8' }}
    >
      {/* Subtle radial glows */}
      <div
        className="pointer-events-none absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(212,165,116,0.25) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(229,57,53,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        {/* ── LEFT: Content (60 %) ───────────────────────────────── */}
        <div className="w-full lg:w-[60%] flex flex-col" style={{ maxWidth: '60%' }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-medium"
              style={{ background: 'rgba(229,57,53,0.1)', color: '#E53935' }}
            >
              ✦ Synastry Analysis
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-1.5px] mt-6"
            style={{ color: '#1A1A1A' }}
          >
            Your Relationship,
            <br />
            Written in the Stars
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.24 }}
            className="text-lg leading-relaxed mt-6 max-w-xl"
            style={{ color: '#666666' }}
          >
            Unlimited synastry analysis powered Swiss Ephemeris.{' '}
            <strong style={{ color: '#1A1A1A', fontWeight: 600 }}>
              Discover your archetype
            </strong>{' '}
            across 24 unique relationship dynamics — deeper than a professional
            session, for less than the cost of one.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.36 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            {/* Primary */}
            <button
              className="px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-200 hover:shadow-lg active:scale-[0.97]"
              style={{ background: '#E53935', color: '#FFFFFF' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(229,57,53,0.35)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = '';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '';
              }}
            >
              Get Started Free
            </button>

            {/* Secondary */}
            <button
              className="px-8 py-3.5 rounded-full font-medium text-base transition-all duration-200 border hover:shadow-sm active:scale-[0.97]"
              style={{
                color: '#666666',
                borderColor: 'rgba(102,102,102,0.2)',
                background: 'transparent',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.color = '#1A1A1A';
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(26,26,26,0.3)';
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(26,26,26,0.03)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.color = '#666666';
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(102,102,102,0.2)';
                (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
              }}
            >
              Explore Archetypes
            </button>
          </motion.div>
        </div>

        {/* ── RIGHT: Three.js Celestial Sphere (40 %) ────────────── */}
        <div className="w-full lg:w-[40%] flex items-center justify-center" style={{ maxWidth: '40%' }}>
          <div className="relative w-full" style={{ height: '500px' }}>

            {!sphereReady && (
              <div
                className="absolute inset-0 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(212,165,116,0.06)' }}
              >
                <span className="text-sm font-medium" style={{ color: '#D4A574' }}>
                  ✦ Loading Celestial Sphere...
                </span>
              </div>
            )}

            <Suspense
              fallback={
                <div
                  className="absolute inset-0 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(212,165,116,0.06)' }}
                >
                  <span className="text-sm font-medium" style={{ color: '#D4A574' }}>
                    ✦ Loading Celestial Sphere...
                  </span>
                </div>
              }
            >
              <Canvas
                transparent
                camera={{ position: [0, 0, 3], fov: 50 }}
                onCreated={() => setSphereReady(true)}
                style={{ borderRadius: 16 }}
              >
                <ambientLight intensity={0.5} />
                <pointLight position={[5, 5, 5]} intensity={0.8} color="#D4A574" />
                <pointLight position={[-5, -3, -5]} intensity={0.4} color="#E53935" />

                {/* Subtle background stars */}
                <Stars radius={40} depth={20} count={600} factor={4} saturation={0} fade speed={0.8} />

                {/* The zodiac sphere itself */}
                <CelestialZodiacSphere />
              </Canvas>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
