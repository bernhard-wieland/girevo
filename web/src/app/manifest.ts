import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "girevo — der Kettlebell-Einstieg",
    short_name: "girevo",
    description:
      "Startgewicht per Selbsttest und die ersten Wochen mit der Kettlebell. Kein Programm, kein Konto.",
    lang: "de",
    start_url: "/",
    display: "standalone",
    background_color: "#faf6f0",
    theme_color: "#faf6f0",
    icons: [
      // Installed-app / home-screen icon: full-bleed coral, off-white kettlebell,
      // wide margin so it survives circular + rounded-square masking.
      { src: "/icon-app-512.png", type: "image/png", sizes: "512x512", purpose: "any" },
      { src: "/icon-app-512.png", type: "image/png", sizes: "512x512", purpose: "maskable" },
      { src: "/icon-app-192.png", type: "image/png", sizes: "192x192", purpose: "maskable" },
      // Small favicon-style mark (dark ground) for everything else.
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
  };
}
