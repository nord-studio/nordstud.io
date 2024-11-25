import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Literata, Sora } from "next/font/google";

import { ThemeProvider } from "@/contexts/theme";

import Navbar from "@/components/navbar/index";
import { TooltipProvider } from "@/components/ui/tooltip";

import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const sora = Sora({
    subsets: ["latin"],
    display: "auto",
    variable: "--font-sora",
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
    description:
        "A boutique studio building secure, speedy, and stylish applications.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={cn(
                inter.variable,
                sora.variable,
                literata.variable,
                jetbrainsMono.variable
            )}
            suppressHydrationWarning
        >
            <head />
            <body
                className={
                    "min-h-screen font-inter w-full bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white"
                }
            >
                <TooltipProvider delayDuration={150} skipDelayDuration={0}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <main className="flex flex-col items-center w-full">
                            <div className="flex flex-col max-w-[1200px] w-full">
                                <Navbar />
                                {children}
                            </div>
                        </main>
                    </ThemeProvider>
                </TooltipProvider>
            </body>
        </html>
    );
}
