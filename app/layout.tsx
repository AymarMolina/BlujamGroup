import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Michroma,
  Rajdhani,
  Scheherazade_New,
} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import WhatsAppChat from "@/components/ui/WhatsAppChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
});
const rajdhani = Rajdhani({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
});
const Scheherazade = Scheherazade_New({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-Scheherazade",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blujamgroup.com"),

  title: {
    default: "Blujam Group | Tecnología e Innovación Empresarial",
    template: "%s | Blujam Group",
  },

  description:
    "Impulsamos a empresas a prosperar en un mercado en constante cambio, ofreciendo valor excepcional mediante visión estratégica, tecnología e innovación.",

  keywords: [
    "consultoría tecnológica",
    "infraestructura TI",
    "seguridad informática",
    "desarrollo de software",
    "automatización empresarial",
    "Blujam Group",
    "Lima",
    "Perú",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://blujamgroup.com",
    siteName: "Blujam Group",
    title: "Blujam Group | Tecnología e Innovación Empresarial",
    description:
      "Impulsamos a empresas a prosperar en un mercado en constante cambio, ofreciendo valor excepcional mediante visión estratégica, tecnología e innovación.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blujam Group — Tecnología e Innovación Empresarial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blujam Group | Tecnología e Innovación Empresarial",
    description:
      "Impulsamos a empresas a prosperar en un mercado en constante cambio, ofreciendo valor excepcional mediante visión estratégica, tecnología e innovación.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://blujamgroup.com/#organization",
        "name": "Blujam Group",
        "legalName": "Blujam Group Tech Global Solutions S.A.C.",
        "url": "https://blujamgroup.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://blujamgroup.com/logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+51-970-478-503",
          "contactType": "customer service",
          "availableLanguage": "Spanish"
        },
        "sameAs": [
          "https://www.facebook.com/blujamgroup",
          "https://www.instagram.com/blujamgroup",
          "https://www.linkedin.com/company/blujamgroup"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://blujamgroup.com/#localbusiness",
        "name": "Blujam Group",
        "image": "https://blujamgroup.com/logo.png",
        "url": "https://blujamgroup.com",
        "telephone": "+51-970-478-503",
        "email": "conecta@blujamgroup.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jr. Don Bosco 361",
          "addressLocality": "Breña",
          "addressRegion": "Lima",
          "postalCode": "15083",
          "addressCountry": "PE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -12.0567,
          "longitude": -77.0437
        },
        "priceRange": "$$",
        "areaServed": {
          "@type": "Country",
          "name": "Peru"
        }
      }
    ]
  };

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${michroma.variable} ${rajdhani.variable} ${Scheherazade.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <WhatsAppChat />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}