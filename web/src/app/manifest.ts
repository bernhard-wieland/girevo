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
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/icon.png", type: "image/png", sizes: "180x180" },
    ],
  };
}
