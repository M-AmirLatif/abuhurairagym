import type { Metadata } from "next";
import { Bebas_Neue, Inter, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoNastaliq = Noto_Nastaliq_Urdu({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-nastaliq",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abu Huraira World Gym Fitness Center | Best Gym in Kasur",
  description:
    "Kasur's premier strength training institution in Kot Murad Khan. Equipped with international Technogym & Matrix machinery, open-air training grounds, and guidance by Ex Mr. Kasur Ustaad Abu Huraira. Open daily until 12 AM.",
  keywords: [
    "best gym in Kasur",
    "fitness center Kot Murad Khan",
    "Abu Huraira World Gym",
    "World Gym Kasur",
    "gym in Kasur",
    "bodybuilding gym Kasur",
    "Technogym Kasur",
    "Matrix treadmills Kasur",
    "Ustaad Abu Huraira"
  ],
  authors: [{ name: "Abu Huraira World Gym Fitness Center" }],
  creator: "Abu Huraira World Gym",
  publisher: "Abu Huraira World Gym",
  metadataBase: new URL("https://abuhurairagym.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abu Huraira World Gym Fitness Center | Forge Your Body",
    description:
      "Kasur's premier strength and fitness facility. Real guidance under Ex Mr. Kasur Ustaad Abu Huraira. Open daily until 12 AM.",
    url: "https://abuhurairagym.com",
    siteName: "Abu Huraira World Gym",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abu Huraira World Gym Fitness Center Kasur",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Huraira World Gym Fitness Center | Kasur",
    description:
      "Kasur's most trusted fitness institution. Real guidance, international machinery, open daily until 12 AM.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "name": "Abu Huraira World Gym Fitness Center",
  "alternateName": "World Gym Kasur",
  "image": "https://abuhurairagym.com/og-image.jpg",
  "telephone": "+923214670428",
  "url": "https://abuhurairagym.com",
  "priceRange": "$$",
  "paymentAccepted": "Cash only",
  "currenciesAccepted": "PKR",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nizam Pura Rd, near Jamal Market, near City Hospital, Kot Murad Khan",
    "addressLocality": "Kasur",
    "addressRegion": "Punjab",
    "postalCode": "55050",
    "addressCountry": "PK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "description": "Located in Kot Murad Khan, Kasur near Jamal Market (Plus Code: 4C8R+5XC)"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "155",
    "bestRating": "5",
    "worstRating": "1"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "06:00",
      "closes": "23:59"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/p/WORLD-GYM-KASUR-100063909152676/",
    "https://www.facebook.com/p/WORLD-GYM-fitness-center-Kasur-61561379619501/"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${bebasNeue.variable} ${inter.variable} ${notoNastaliq.variable}`}
    >
      <head>
        <meta name="theme-color" content="#09090b" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="preload"
          as="image"
          href="/images/optimized/hero-mobile.webp"
          type="image/webp"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/optimized/hero-main.webp"
          type="image/webp"
          media="(min-width: 768px)"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-gym-dark text-zinc-100 antialiased selection:bg-gym-gold selection:text-black">
        {children}
      </body>
    </html>
  );
}
