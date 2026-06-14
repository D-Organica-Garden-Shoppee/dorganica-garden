/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ─── GitHub Pages Static Export ───
  output: "export",
  trailingSlash: true,
  basePath: process.env.GITHUB_PAGES ? "/dorganica-garden" : "",

  // ─── Image Optimization (disabled for static export) ───
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
