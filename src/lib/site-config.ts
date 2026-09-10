type NavLink = { label: string; href: string; external?: boolean };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Shop",
    href: "https://hotairballoongiftshop.com",
    external: true,
  },
  { label: "Contact", href: "/contact" },
];

export const contactInfo = {
  email: "info@azeventsgroup.com",
  address: "1334 E Chandler Blvd #5-D17, Phoenix, AZ 85048",
};

// TODO: replace with AEG's real social profile URLs before launch.
export const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
] as const;
