// Site navigation. `ready: false` = planned page that doesn't exist yet.
// `header: false` = reachable page kept out of the top nav (still in the footer
// and cross-links). `legal: true` = footer legal group, rendered separately.
// The homepage "Wohin als Nächstes" section renders its own list.

export type NavEntry = {
  label: string;
  href: string;
  ready: boolean;
  header: boolean;
  legal?: boolean;
};

export const NAV: NavEntry[] = [
  { label: "Gewichtsfinder", href: "/kettlebell-startgewicht", ready: true, header: true },
  { label: "Kaufberatung", href: "/kettlebell-kaufen", ready: true, header: true },
  { label: "Ratgeber", href: "/ratgeber", ready: true, header: true },
  { label: "Übungen", href: "/uebungen", ready: true, header: true },
  { label: "Zu Hause trainieren", href: "/kettlebell-zuhause-training", ready: true, header: false },
  { label: "Kettlebell-Training", href: "/kettlebell-training", ready: true, header: false },
  { label: "Workout zu Hause", href: "/kettlebell-workout-zuhause", ready: true, header: false },
  { label: "Impressum", href: "/impressum", ready: true, header: false, legal: true },
  { label: "Datenschutz", href: "/datenschutz", ready: true, header: false, legal: true },
];

export const headerNav = () => NAV.filter((n) => n.ready && n.header);
export const footerNav = () => NAV.filter((n) => n.ready && !n.legal);
export const legalNav = () => NAV.filter((n) => n.ready && n.legal);
