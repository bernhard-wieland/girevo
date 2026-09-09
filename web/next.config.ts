import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is fully static (both routes prerender). Export to plain HTML so it
  // deploys to Cloudflare Pages as a static site — no server runtime to maintain.
  // Revisit if a route ever needs SSR/ISR/route handlers before the .NET backend
  // exists (then switch to the Cloudflare Workers adapter, @opennextjs/cloudflare).
  output: "export",
};

export default nextConfig;
