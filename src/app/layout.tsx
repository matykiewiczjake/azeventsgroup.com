import type { Metadata } from "next";
import { Anton, Inter, Yellowtail } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const yellowtail = Yellowtail({
  variable: "--font-yellowtail",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const title = "Arizona Events Group | Live Event Production, Phoenix AZ";
const description =
  "Family-run event production company with 40+ years of events and 250+ live events produced — from corporate activations and galas to owned festivals like the Arizona Balloon Classic and Rock n' Roll Car Show.";

export const metadata: Metadata = {
  metadataBase: new URL("https://azeventsgroup.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Arizona Events Group",
    images: [
      {
        url: "/images/events/hero-balloon-glow.jpg",
        width: 2000,
        height: 1334,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/events/hero-balloon-glow.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${yellowtail.variable} h-full antialiased`}
    >
      <body className="bg-background text-foreground flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
