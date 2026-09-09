// Site navigation. `ready: false` = planned page that doesn't exist yet.
// `header: false` = reachable page that stays out of the top nav (still in the
// footer and cross-links). The homepage "Wohin als Nächstes" section renders its
// own list and shows a "bald" marker for not-yet-ready entries.

export type NavEntry = {
  label: string;
  href: string;
  ready: boolean;
  header: boolean;
};

export const NAV: NavEntry[] = [
  { label: "Gewichtsfinder", href: "/kettlebell-startgewicht", ready: true, header: true },
  { label: "Kaufberatung", href: "/kettlebell-kaufen", ready: true, header: true },
  { label: "Ratgeber", href: "/ratgeber", ready: true, header: true },
  { label: "Übungen", href: "/uebungen", ready: true, header: false },
];

export const headerNav = () => NAV.filter((n) => n.ready && n.header);
export const footerNav = () => NAV.filter((n) => n.ready);
