import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static HTML export
  images: {
    unoptimized: true, // Required for static export when using <Image>
  },
  basePath: "/wearwise-website", // Must match your repo name
  trailingSlash: true, // Optional: prevents broken links on GitHub Pages
};

export default nextConfig;
