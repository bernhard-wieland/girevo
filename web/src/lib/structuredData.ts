// JSON-LD builders. Keep every field backed by content that is actually on the
// page — Google penalises structured data that describes things a visitor can't see.

const SITE_URL = "https://girevo.de";
const SITE_NAME = "girevo";

export const organizationLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
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
  image: `${SITE_URL}/og.png`,
  inLanguage: "de-DE",
  datePublished: args.datePublished,
  dateModified: args.dateModified,
  mainEntityOfPage: `${SITE_URL}${args.path}`,
  author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
});

/** FAQPage — only valid when every Q&A pair is visible on the page. */
export const faqLd = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
});

export const breadcrumbLd = (trail: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.name,
    item: `${SITE_URL}${t.path}`,
  })),
});

/** Renders one or more JSON-LD objects as a script tag props object. */
export const jsonLd = (data: object | object[]) => ({
  type: "application/ld+json",
  dangerouslySetInnerHTML: {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  },
});
