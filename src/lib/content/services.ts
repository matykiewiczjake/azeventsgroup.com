// Copy sourced from the live azeventsgroup.com /admission/ (Services) page,
// lightly tightened per the brand voice doc (drops "seamless").

export const eventTypes = [
  "Promotional Events",
  "Corporate Events & Fundraisers",
  "Private Parties",
  "Food Festivals",
  "Sports Banquets",
  "Hot Air Balloon Glows",
] as const;

export type ServiceCategory = {
  name: string;
  body: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    name: "Administrate",
    body: "Timeline management that keeps every moving part on schedule.",
  },
  {
    name: "Activate",
    body: "Partnership activation, sponsor management, and event marketing.",
  },
  {
    name: "Create",
    body: "Budgeting and financial planning built around your goals.",
  },
  {
    name: "Co-Promote",
    body: "Social media promotion and event amplification.",
  },
  {
    name: "Coordinate",
    body: "Event staff and volunteer training, coordination, and management.",
  },
  {
    name: "Research",
    body: "Vendor research, negotiation, and management.",
  },
  {
    name: "Secure",
    body: "Partnership development, sponsor acquisition, and commercial vendor management.",
  },
  {
    name: "Manage & Direct",
    body: "Site planning, logistics, and operations management.",
  },
];
