import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

import { ThemeProvider } from "@/components/theme-provider";
import { FloatingButtons } from "@/components/floating-buttons";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Słoń Beniamin barberBUS - Mobile Barber Shop",
  description: "Premium mobile barber services coming to your location",
  generator: "v0.dev",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Wallpoet&display=swap"
          rel="stylesheet"
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
