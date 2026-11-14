import type { NextConfig } from "next";

// A static site: `next build` writes plain files to out/, so any host works.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
};

export default nextConfig;
