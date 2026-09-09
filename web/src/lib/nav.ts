// Site navigation. `ready: false` entries are planned pages that don't exist yet —
// the header and footer render only ready entries; the homepage "Wohin als Nächstes"
// section shows the rest with a "bald" marker. Flip `ready` when a page ships.

export type NavEntry = { label: string; href: string; ready: boolean };

export const NAV: NavEntry[] = [
  { label: "Gewichtsfinder", href: "/kettlebell-startgewicht", ready: true },
  { label: "Kaufberatung", href: "/kettlebell-kaufen", ready: true },
  { label: "Ratgeber", href: "/ratgeber", ready: false },
];

export const readyNav = () => NAV.filter((n) => n.ready);
