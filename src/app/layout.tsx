import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import Script from "next/script";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-coding-tools.com"),
  title: "AI Coding Tools Compared: Pricing, Features &amp; Reviews",
  description:
    "Compare AI coding assistants with source-backed pricing, scenario fit, and honest trade-offs.",
  openGraph: {
    title: "AI Coding Tools Compared: Pricing, Features &amp; Reviews",
    description: "Compare AI coding assistants with source-backed pricing, scenario fit, and honest trade-offs.",
    url: "https://ai-coding-tools.com/",
    siteName: "AI Coding Tools",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Coding Tools Compared: Pricing, Features &amp; Reviews",
    description: "Compare AI coding assistants with source-backed pricing, scenario fit, and honest trade-offs.",
  },
  other: {
    "google-site-verification": "N21K5VoxWUyIIwGf5NZjvhvU2Ty_JC2EoVhMWPL-iro",
  },
};

/**
 * Renders the root document shell for the application.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}<Analytics mode="production" /></body>
        <Script src={"https://www.googletagmanager.com/gtag/js?id=G-D56K2PD0D8"} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "G-D56K2PD0D8");
          `}
        </Script>
    </html>
  );
}
