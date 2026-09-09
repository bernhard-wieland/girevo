import type { Metadata } from "next";

// Next.js shallow-merges `openGraph` — a page that sets it replaces the layout's
// entirely. This helper rebuilds the full object so every page keeps siteName,
// locale and the OG image.
export function og(over: {
  title?: string;
  description?: string;
  url?: string;
  type?: "website" | "article";
}): NonNullable<Metadata["openGraph"]> {
  return {
    type: over.type ?? "website",
    locale: "de_DE",
    siteName: "girevo",
    url: over.url,
    title: over.title,
    description: over.description,
    images: ["/og.png"],
  };
}
