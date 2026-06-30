/** @type {import('next').NextConfig} */

// Inert for normal `localhost:3000` dev. When serving behind code-server's
// path-preserving proxy, set NEXT_PUBLIC_BASE_PATH=/absproxy/3000 so routes
// and /_next assets resolve under that prefix. Use the /absproxy/<port>/ URL,
// not /proxy/<port>/ (which strips the prefix and breaks basePath).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig = {
  // Static export -> `out/`. Deployed to GitHub Pages (apex danbovey.uk) by
  // the Pages workflow on every push to main.
  output: 'export',
  // No image optimizer at runtime for a static export.
  images: { unoptimized: true },
  // Emit /work/ -> /work/index.html so Pages serves clean directory URLs.
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {})
};

module.exports = nextConfig;
