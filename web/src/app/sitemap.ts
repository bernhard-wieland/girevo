import type { MetadataRoute } from "next";
import { RATGEBER_UPDATED } from "@/content/de/ratgeber";

export const dynamic = "force-static";

const BASE = "https://girevo.de";

// Build time — every deploy carries content edits worth re-crawling.
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${BASE}/kettlebell-startgewicht`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE}/kettlebell-kaufen`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/ratgeber`,
      lastModified: RATGEBER_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/uebungen`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
