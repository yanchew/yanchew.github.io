import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Über Uns | Yanchew - Next.js & React Webentwicklung",
  description: "Erfahren Sie mehr über Yanchew, Ihre Experten für moderne Webentwicklung mit Next.js, React und TypeScript. Innovative Lösungen für Ihr digitales Wachstum.",
  keywords: "Webentwicklung, Next.js, React, TypeScript, Yanchew, Digitale Transformation, Webagentur Leverkusen",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.yanchew.com/ueber-uns",
    siteName: "Yanchew",
    title: "Über Uns | Yanchew - Next.js & React Webentwicklung",
    description: "Erfahren Sie mehr über Yanchew, Ihre Experten für moderne Webentwicklung mit Next.js, React und TypeScript. Innovative Lösungen für Ihr digitales Wachstum.",
    images: [
      {
        url: "https://www.yanchew.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yanchew - Next.js & React Webentwicklung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Über Uns | Yanchew - Next.js & React Webentwicklung",
    description: "Erfahren Sie mehr über Yanchew, Ihre Experten für moderne Webentwicklung mit Next.js, React und TypeScript.",
    images: ["https://www.yanchew.com/og-image.jpg"],
    creator: "@yanchew",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_ID",
  },
} 