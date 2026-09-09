import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://girevo.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${BASE}/kettlebell-startgewicht`,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
