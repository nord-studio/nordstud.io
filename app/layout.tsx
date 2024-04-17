import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/contexts/theme";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    inter.className,
                    "min-h-screen w-full bg-neutral-50 dark:bg-neutral-950 text-black dark:text-white"
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
