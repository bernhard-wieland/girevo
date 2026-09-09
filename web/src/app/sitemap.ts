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
    {
      url: `${BASE}/kettlebell-kaufen`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${BASE}/ratgeber`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/uebungen`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
