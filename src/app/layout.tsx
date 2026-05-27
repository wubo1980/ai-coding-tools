import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-coding-tools-psi.vercel.app"),
  title: "AI Coding Tools",
  description:
    "Compare AI coding assistants with source-backed pricing, scenario fit, and honest trade-offs.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
