/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Load Google Fonts via the <link> in app/layout.tsx at runtime instead of
  // inlining them at build time. Keeps `next build` free of network calls.
  optimizeFonts: false,
};

module.exports = nextConfig;
