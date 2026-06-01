const nextConfig = {
  experimental: {
    optimizePackageImports: ["framer-motion", "@react-three/fiber", "@react-three/drei"],
  },
};

module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};