import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Starfield from "./Starfield";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxsan",
  description: "Driven by faith"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans bg-bg text-fg antialiased">
        {/* Starfield Canvas Background */}
        <Starfield />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
