// Copy sourced from the live azeventsgroup.com site + approved brand docs.
// Items marked [PLACEHOLDER] are new copy drafted for this redesign — flag
// for Jake to review/edit, not verbatim from the old site.

export const stats = [
  { value: "40+", label: "Years of Events" },
  { value: "250+", label: "Live Events Produced" },
  { value: "6", label: "Signature Festivals & Shows" },
] as const;

export const trustLogos = [
  "Krispy Kreme",
  "Cox",
  "Ford",
  "Agua Caliente Casinos",
  "Desert Financial",
  "Goodyear Ballpark",
  "Portillo's",
  "K-LOVE",
  "Spencer's",
  "Karsten's Ace",
] as const;

export const pillars = [
  {
    title: "Experience, Tested",
    body: "35+ years and 250+ live events — from large sporting events to one-of-a-kind productions.",
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
};

export const events: PortfolioEvent[] = [
  {
    name: "Arizona Balloon Classic",
    location: "Goodyear, AZ",
    description:
      "Arizona's premier hot air balloon festival — as seen on ABC's Good Morning America.",
    href: "https://abcfest.com",
    gradient: "from-[#02224A] via-[#CE7134] to-[#F8A543]",
  },
  {
    name: "Rock n' Roll Car Show",
    location: "Scottsdale, AZ",
    description:
      "The longest-running weekly car show in the world, at the Pavilions at Talking Stick.",
    href: "https://rocknrollcarshow.com",
    gradient: "from-[#02224A] via-[#02224A] to-[#9D101F]",
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
