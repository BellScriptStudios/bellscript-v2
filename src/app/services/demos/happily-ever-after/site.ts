export const BASE = "/services/demos/happily-ever-after";

export const SITE = {
    couple: "Alex & Lauren Knight",
    date: "September 14, 2026",
    location: "Las Vegas, Nevada",
    tagline: "What happens in Vegas becomes forever.",
    rsvpDeadline: "August 1st",
};

export const NAV = [
    { href: `${BASE}`, label: "Home" },
    { href: `${BASE}/our-story`, label: "Our Story" },
    { href: `${BASE}/the-weekend`, label: "The Weekend" },
    { href: `${BASE}/travel-stay`, label: "Travel & Stay" },
    { href: `${BASE}/rsvp`, label: "RSVP", cta: true },
] as const;