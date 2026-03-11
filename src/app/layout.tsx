import Footer from "@/sections/footer";
import Navigation from "@/sections/navigation";
import NavigationMobile from "@/sections/navigation-mobile";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ConvexClientProvider } from "./ConvexClientProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  maximumScale: 1,
};

const baseUrl = "https://culio.co";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}`),
  keywords: [
    "Restaurant AI",
    "Restaurant engagement",
    "Automated ordering",
    "Restaurant intelligence",
    "Diner engagement",
    "Restaurant technology",
    "Host stand software",
    "Culio",
    "AI for restaurants",
  ],
  title: "Culio - AI-Driven Restaurant Engagement",
  description:
    "Culio gives your restaurant AI-driven engagement, automated ordering, and the strategic intelligence needed to turn every diner into a lifelong regular.",
  openGraph: {
    title: "Culio - AI-Driven Restaurant Engagement",
    siteName: "Culio",
    description:
      "Culio gives your restaurant AI-driven engagement, automated ordering, and the strategic intelligence needed to turn every diner into a lifelong regular.",
    images: ["/assets/thumbnail.webp"],
    url: `${baseUrl}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Culio - AI-Driven Restaurant Engagement",
    description:
      "Culio gives your restaurant AI-driven engagement, automated ordering, and the strategic intelligence needed to turn every diner into a lifelong regular.",
    images: ["/assets/thumbnail.webp"],
  },
  icons: "/favicon.ico",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans select-none overflow-x-hidden`}
      >
        <Analytics />
        <Navigation />
        <NavigationMobile />
        <main className="min-h-[calc(100vh-96px)] md:min-h-[calc(100vh-112px)]">
          <ConvexClientProvider>
            {children}
          </ConvexClientProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
