import type { Metadata, Viewport } from "next";
import { Inter, Arapey, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const arapey = Arapey({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-arapey",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FDFBF7",
};

export const metadata: Metadata = {
  title: "Aurel Coffee Roasters — Luxury Specialty Coffee Sanctuary in NYC",
  description:
    "Aurel Coffee Roasters is Midtown Manhattan's premier artisanal coffee sanctuary at 535 Madison Avenue. Single-origin micro-roasts, pour-overs, specialty espresso, cold brews, and fresh French pastries.",
  keywords: [
    "aurel coffee",
    "specialty coffee nyc",
    "coffee roasters new york",
    "single origin coffee",
    "latte art nyc",
    "pour over coffee madison ave",
    "artisan bakery cafe",
  ],
  authors: [{ name: "Aurel Coffee Roasters" }],
  openGraph: {
    title: "Aurel Coffee Roasters — Luxury Specialty Coffee & Roastery",
    description:
      "Midtown Manhattan's premier artisanal coffee sanctuary. Single-origin micro-roasts, specialty lattes, cold brews, and fresh pastries at 535 Madison Avenue.",
    url: "https://aurel-coffee.com",
    siteName: "Aurel Coffee Roasters",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurel Coffee Roasters — Premium Coffee Sanctuary NYC",
    description: "Single-origin micro-roasts and artisanal coffee at 535 Madison Avenue.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${arapey.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Restaurant", "CafeOrCoffeeShop", "LocalBusiness"],
              "name": "Aurel Coffee Roasters",
              "url": "https://aurel-coffee.com",
              "description":
                "Midtown Manhattan's premier artisanal coffee sanctuary serving single-origin micro-roasts, specialty espresso, cold brews, and fresh pastries.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Christie's Sculpture Garden at 535 Madison Avenue",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10022",
                "addressCountry": "US",
              },
              "openingHours": "Mo-Su 07:00-19:00",
              "priceRange": "$$",
            }),
          }}
        />
      </head>
      <body className="bg-[#FDFBF7] text-[#1F1512] antialiased selection:bg-[#C88A58] selection:text-white">
        {children}
      </body>
    </html>
  );
}
