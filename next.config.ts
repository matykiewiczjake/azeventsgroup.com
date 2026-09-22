import type { NextConfig } from "next";

// 301s from the old WordPress site's indexed URLs, per the SEO plan in the
// brand docs — preserves indexed link equity through the rebuild. Sources
// omit the trailing slash: Next strips it before redirects() runs, so a
// trailing-slash source here would never match and just adds a hop.
// /about/ and /contact/ need no rule at all — the old and new slugs are
// identical, so Next's own trailing-slash stripping already lands them on
// the right page; a rule here would just be a same-path redirect loop.
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/admission", destination: "/services", permanent: true },
      { source: "/upcoming-events", destination: "/", permanent: true },
      {
        source: "/white-mountain-balloon-festival",
        destination: "/",
        permanent: true,
      },
      {
        source: "/shop",
        destination: "https://hotairballoongiftshop.com",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
