import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { ThemeProvider } from "@/components/theme-provider";
import { FloatingButtons } from "@/components/floating-buttons";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const locale = await getLocale();
  const messages = await getMessages();
  
  const siteData = messages.site as { title: string; description: string };
  const heroData = messages.hero as { description: string };
  
  const metadata = {
    metadataBase: new URL("https://barberbus.pl"),
    title: siteData.title,
    description: heroData.description,
    keywords: locale === 'pl' 
      ? "barber Wrocław, mobilny barber Wrocław, barber z dojazdem do klienta Wrocław, barber z dojazdem do biura Wrocław, fryzjer męski Wrocław, strzyżenie z dojazdem, barber na telefon, mobilny salon fryzjerski, barber w domu, barber w biurze"
      : "mobile barber Wrocław, barber home service Wrocław, barber office visit Wrocław, mobile hairdresser Wrocław, barber at home, barber at office, mobile barbershop Wrocław",
    authors: [{ name: "Słoń Beniamin BarberBUS" }],
    creator: "Słoń Beniamin BarberBUS",
    publisher: "Słoń Beniamin BarberBUS",
    robots: "index, follow",
    openGraph: {
      title: siteData.title,
      description: heroData.description,
      url: "https://barberbus.pl",
      siteName: "BarberBUS",
      locale: locale === 'pl' ? 'pl_PL' : 'en_US',
      type: "website",
      images: [
        {
          url: "/premium.png",
          alt: locale === 'pl' ? "Mobilny Barber Shop Wrocław" : "Mobile Barber Shop Wrocław",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteData.title,
      description: heroData.description,
      images: ["/premium.png"],
    },
    alternates: {
      canonical: "https://barberbus.pl",
      languages: {
        'pl': 'https://barberbus.pl',
        'en': 'https://barberbus.pl?lang=en',
      },
    },
  };

  return metadata;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://barberbus.pl/#business",
    "name": "Słoń Beniamin BarberBUS",
    "alternateName": "BarberBUS",
    "description": locale === 'pl' 
      ? "Pierwszy mobilny barber shop we Wrocławiu. Profesjonalne usługi barberskie z dojazdem do klienta w domu lub biurze. Także 2 stałe lokalizacje."
      : "First mobile barber shop in Wrocław. Professional barber services at your home or office. Also 2 permanent locations.",
    "url": "https://barberbus.pl",
    "telephone": "+48660739882",
    "image": "https://barberbus.pl/premium.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wrocław",
      "addressRegion": "Dolnośląskie",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.1079,
      "longitude": 17.0385
    },
    "openingHours": [
      "Mo-Fr 10:00-20:00",
      "Sa 10:00-16:00"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 51.1079,
        "longitude": 17.0385
      },
      "geoRadius": "30000"
    },
    "priceRange": "$$",
    "category": "Barber Shop",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": locale === 'pl' ? "Usługi Barberskie" : "Barber Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'pl' ? "Klasyczne Cięcie" : "Classic Cut",
            "description": locale === 'pl' 
              ? "Tradycyjne strzyżenie łączące pracę nożyczkami i maszynką z płynnymi przejściami skin fade."
              : "Traditional haircut combining scissors and machine work with smooth skin fade transitions.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Słoń Beniamin BarberBUS"
            }
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'pl' ? "Stylizacja Brody" : "Beard Styling",
            "description": locale === 'pl'
              ? "Profesjonalne przycinanie i stylizacja brody, dopasowane do kształtu Twojej twarzy."
              : "Professional beard trimming and styling, tailored to the shape of your face.",
            "provider": {
              "@type": "LocalBusiness", 
              "name": "Słoń Beniamin BarberBUS"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'pl' ? "Mobilne Usługi Barberskie" : "Mobile Barber Services",
            "description": locale === 'pl'
              ? "Profesjonalne usługi barberskie z dojazdem do domu, biura lub wybranej lokalizacji we Wrocławiu."
              : "Professional barber services at your home, office or chosen location in Wrocław.",
            "areaServed": {
              "@type": "City",
              "name": "Wrocław"
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "Słoń Beniamin BarberBUS"
            }
          }
        }
      ]
    }
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Wallpoet&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <FloatingButtons />
            <Analytics />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
