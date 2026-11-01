import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "GMT Klussen — Schilderwerk, Vloeren & Klussen in huis",
    template: "%s — GMT Klussen",
  },
  description:
    "GMT Klussen is uw vakman voor schilderwerk, vloeren leggen, stucwerk, behang, timmerwerk en allerlei klussen in en om het huis. Netjes, op tijd en voor een eerlijke prijs.",
  applicationName: "GMT Klussen",
  keywords: [
    "GMT Klussen",
    "klusbedrijf",
    "klusjesman",
    "schilder",
    "schilderwerk",
    "binnenschilderwerk",
    "buitenschilderwerk",
    "vloer leggen",
    "laminaat leggen",
    "PVC vloer",
    "parket",
    "stucwerk",
    "behangen",
    "timmerwerk",
    "renovatie",
  ],
  authors: [{ name: "GMT Klussen" }],
  creator: "GMT Klussen",
  publisher: "GMT Klussen",
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: site.url,
    siteName: "GMT Klussen",
    title: "GMT Klussen — Schilderwerk, Vloeren & Klussen in huis",
    description:
      "Schilderwerk, vloeren en klussen in en om het huis. Vakwerk, netjes opgeleverd, voor een eerlijke prijs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMT Klussen — Schilderwerk, Vloeren & Klussen",
    description:
      "Schilderwerk, vloeren en klussen in en om het huis. Vakwerk, netjes opgeleverd.",
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%231f2a24'/%3E%3Ctext x='50' y='68' font-size='54' font-family='Georgia' font-weight='bold' text-anchor='middle' fill='%23e0a33a'%3EG%3C/text%3E%3C/svg%3E",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "GMT Klussen",
  description:
    "Klusbedrijf voor schilderwerk, vloeren, stucwerk, behang, timmerwerk en kleine reparaties.",
  url: site.url,
  email: site.email,
  areaServed: { "@type": "Country", name: "Nederland" },
  address: { "@type": "PostalAddress", addressCountry: "NL" },
  makesOffer: [
    "Schilderwerk",
    "Vloeren leggen",
    "Stucwerk & wanden",
    "Behangen",
    "Timmerwerk",
    "Kleine klussen & reparaties",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
