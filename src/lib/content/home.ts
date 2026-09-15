// Copy sourced from the live azeventsgroup.com site + approved brand docs.
// Items marked [PLACEHOLDER] are new copy drafted for this redesign — flag
// for Jake to review/edit, not verbatim from the old site.

export const stats = [
  { value: "40+", label: "Years of Events" },
  { value: "250+", label: "Live Events Produced" },
  { value: "6", label: "Signature Festivals & Shows" },
] as const;

export type SponsorLogo = {
  name: string;
  src: string;
  // Logos vary a lot in native aspect ratio (wide wordmarks vs square
  // marks) — width sets a consistent render width so the row doesn't look
  // uneven; height stays auto via next/image.
  width: number;
};

export const trustLogos: SponsorLogo[] = [
  {
    name: "Krispy Kreme",
    src: "/images/sponsors/krispy-kreme.png",
    width: 110,
  },
  { name: "Cox Mobile", src: "/images/sponsors/cox-mobile.png", width: 110 },
  { name: "Rusty Ford", src: "/images/sponsors/rusty-ford.png", width: 130 },
  {
    name: "Agua Caliente Casinos",
    src: "/images/sponsors/agua-caliente-casinos.png",
    width: 150,
  },
  {
    name: "Desert Financial",
    src: "/images/sponsors/desert-financial.png",
    width: 130,
  },
  {
    name: "Goodyear Ballpark",
    src: "/images/sponsors/goodyear-ballpark.png",
    width: 90,
  },
  { name: "Portillo's", src: "/images/sponsors/portillos.png", width: 110 },
  { name: "K-LOVE", src: "/images/sponsors/k-love.webp", width: 100 },
  { name: "Spencer's", src: "/images/sponsors/spencers.jpg", width: 130 },
  {
    name: "Karsten's Ace",
    src: "/images/sponsors/karstens-ace.png",
    width: 130,
  },
  { name: "ZenBusiness", src: "/images/sponsors/zenbusiness.webp", width: 130 },
  { name: "CoreCivic", src: "/images/sponsors/corecivic.png", width: 130 },
  {
    name: "Navy Federal Credit Union",
    src: "/images/sponsors/navy-federal.png",
    width: 90,
  },
  {
    name: "Arizona Rattlers",
    src: "/images/sponsors/arizona-rattlers.png",
    width: 150,
  },
  { name: "Brannon EJ", src: "/images/sponsors/brannon-ej.png", width: 130 },
  { name: "RAC", src: "/images/sponsors/rac.png", width: 110 },
  {
    name: "La Mesa RV",
    src: "/images/sponsors/la-mesa-recreation.png",
    width: 130,
  },
  {
    name: "Arizona Small Business Association",
    src: "/images/sponsors/asba.jpg",
    width: 90,
  },
];

export const pillars = [
  {
    title: "Experience, Tested",
    body: "40+ years and 250+ live events — from large sporting events to one-of-a-kind productions.",
  },
  {
    title: "Ownership Mentality",
    body: "We create and run our own signature festivals, not just other people's events.",
  },
  {
    title: "Family-Run",
    body: "40 years building real relationships and a network across the Valley.",
  },
  {
    title: "Range Without Losing Quality",
    body: "Corporate galas, weekly recurring shows, large festivals, private events — same production discipline.",
  },
] as const;

export type PortfolioEvent = {
  name: string;
  location: string;
  description: string;
  href?: string;
  gradient: string;
  image?: string;
  // object-position override for the card photo — most photos crop fine
  // centered, but a couple have the interesting part (signage, subject)
  // off-center.
  imagePosition?: string;
  // Set when the photo is generic stock standing in for the event, not
  // confirmed AEG event photography — shown as a small on-card disclosure.
  imageIsStock?: boolean;
};

export const events: PortfolioEvent[] = [
  {
    name: "Arizona Balloon Classic",
    location: "Goodyear, AZ",
    description:
      "Arizona's premier hot air balloon festival — as seen on ABC's Good Morning America.",
    href: "https://abcfest.com",
    gradient: "from-[#02224A] via-[#CE7134] to-[#F8A543]",
    image: "/images/events/arizona-balloon-classic.jpg",
    imagePosition: "center 85%",
  },
  {
    name: "Rock n' Roll Car Show",
    location: "Scottsdale, AZ",
    description:
      "The longest-running weekly car show in the world, at the Pavilions at Talking Stick.",
    href: "https://rocknrollcarshow.com",
    gradient: "from-[#02224A] via-[#02224A] to-[#9D101F]",
    image: "/images/events/rock-n-roll-car-show.jpg",
  },
  {
    name: "ASBA Gala",
    location: "Paradise Valley, AZ",
    description: "Arizona Small Business Association's BIG Awards Gala.",
    gradient: "from-[#9D101F] via-[#CE7134] to-[#02224A]",
  },
  {
    name: "Cars & Cigars",
    location: "Scottsdale, AZ",
    description:
      "Luxury cars, a cigar lounge, live music, fine dining, and a fundraising auction.",
    gradient: "from-[#02224A] via-[#9D101F] to-[#CE7134]",
  },
  {
    name: "The Next Ride",
    location: "Tucson, AZ",
    description: "A 3-day cycling race drawing 300+ riders.",
    gradient: "from-[#CE7134] via-[#02224A] to-[#02224A]",
    image: "/images/events/the-next-ride.jpg",
    imageIsStock: true,
  },
  {
    name: "CCU Glow",
    location: "Lakewood, CO",
    description: "Illuminated hot air balloons lighting up homecoming.",
    gradient: "from-[#02224A] via-[#F8A543] to-[#CE7134]",
  },
];

export const testimonial = {
  quote:
    "AEG has done an outstanding job, and we truly appreciate their expertise, professionalism, and dedication managing and operating the Rock 'n' Roll Car Show at the Pavilions at Talking Stick — the longest-running weekly car show in the world.",
  name: "Nereyda Lopez",
  title: "Marketing Director, De Rito Partners",
};
