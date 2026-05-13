import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dentavip.com'),
  title: "Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | près de chez vous",
  description: "Votre meilleur dentiste à Ariana. Le Cabinet Dr Ferjani Amir vous propose des soins dentaires personnalisés et modernes. Prenez rendez-vous dès aujourd'hui.",
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
  openGraph: {
    title: "Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | près de chez vous",
    description: "Votre meilleur dentiste à Ariana. Le Cabinet Dr Ferjani Amir vous propose des soins dentaires personnalisés et modernes. Prenez rendez-vous dès aujourd'hui.",
    url: "https://www.dentavip.com",
    siteName: "Cabinet Dentaire Dr Ferjani Amir",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Cabinet Dentaire Dr Ferjani Amir Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | près de chez vous",
    description: "Votre meilleur dentiste à Ariana. Le Cabinet Dr Ferjani Amir vous propose des soins dentaires personnalisés et modernes. Prenez rendez-vous dès aujourd'hui.",
    images: ["/logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={outfit.variable} suppressHydrationWarning>
      <body style={{ fontFamily: "var(--font-outfit), sans-serif" }} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Cabinet dentaire Dr Ferjani Amir",
              "image": "https://www.dentavip.com/logo.webp",
              "@id": "https://www.dentavip.com",
              "url": "https://www.dentavip.com",
              "telephone": "+21626790175",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "14 hamza ibn abdelmotaleb",
                "addressLocality": "Ariana Essoghra",
                "postalCode": "2083",
                "addressCountry": "TN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 36.89935,
                "longitude": 10.18378
              },
              "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "08:30", "closes": "18:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "08:30", "closes": "18:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "08:30", "closes": "18:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "08:30", "closes": "18:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "08:30", "closes": "18:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "13:00" }
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
