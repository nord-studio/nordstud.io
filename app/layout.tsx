import "./globals.css";

import type { Metadata } from "next";
import { JetBrains_Mono, Literata, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const literata = Literata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-literata",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Nord Studio",
  description: "A boutique studio building secure, speedy, and stylish applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${literata.variable} ${jetbrainsMono.variable} dark antialiased min-h-screen font-manrope bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
