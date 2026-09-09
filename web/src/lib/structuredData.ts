// JSON-LD builders. Keep every field backed by content that is actually on the
// page — Google penalises structured data that describes things a visitor can't see.

const SITE_URL = "https://girevo.de";
const SITE_NAME = "girevo";

export const organizationLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "girevo ist ein Werkzeug für den Einstieg mit der Kettlebell — Startgewicht per Selbsttest und eine erste Struktur, ohne Trainingsprogramm.",
});

export const websiteLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "de-DE",
});

export const articleLd = (args: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: args.headline,
  description: args.description,
  inLanguage: "de-DE",
  datePublished: args.datePublished,
  dateModified: args.dateModified,
  mainEntityOfPage: `${SITE_URL}${args.path}`,
  author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
});

/** Renders one or more JSON-LD objects as a script tag props object. */
export const jsonLd = (data: object | object[]) => ({
  type: "application/ld+json",
  dangerouslySetInnerHTML: {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  },
});
