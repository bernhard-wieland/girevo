import type { MetadataRoute } from "next";
import { RATGEBER_UPDATED } from "@/content/de/ratgeber";
import { KETTLEBELL_TRAINING_UPDATED } from "@/content/de/kettlebellTraining";
import { KETTLEBELL_WORKOUT_UPDATED } from "@/content/de/kettlebellWorkout";
import { KETTLEBELL_UEBEN_UPDATED } from "@/content/de/kettlebellUebenOhneKettlebell";

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
    {
      url: `${BASE}/kettlebell-zuhause-training`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/kettlebell-training`,
      lastModified: KETTLEBELL_TRAINING_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/kettlebell-workout-zuhause`,
      lastModified: KETTLEBELL_WORKOUT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/kettlebell-technik-ohne-kettlebell`,
      lastModified: KETTLEBELL_UEBEN_UPDATED,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
