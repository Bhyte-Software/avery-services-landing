import Footer from "@/sections/footer";
import Navigation from "@/sections/navigation";
import NavigationMobile from "@/sections/navigation-mobile";
import { ConsentManagerUI } from "@/components/common/consent-manager-ui";
import { consentProviderOptions } from "@/components/common/consent-theme";
import { Analytics } from "@vercel/analytics/next";
import { ConsentManagerProvider } from "@c15t/nextjs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    "Financial intelligence",
    "AI agents",
    "Bookkeeping automation",
    "Financial reconciliation",
    "Anomaly detection",
    "Foresight",
    "Finance automation",
    "AI for finance teams",
  ],
  title: {
    default: "Foresight | Financial Intelligence. Built on Your Data.",
    template: "%s | Foresight",
  },
  description:
    "Deploy AI agents directly on top of your financial stack to handle bookkeeping, real-time reconciliation, and anomaly detection.",
  openGraph: {
    title: "Foresight | Financial Intelligence. Built on Your Data.",
    siteName: "Foresight",
    description:
      "Deploy AI agents directly on top of your financial stack to handle bookkeeping, real-time reconciliation, and anomaly detection.",
    images: ["/assets/thumbnail.webp"],
    url: `${baseUrl}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Foresight | Financial Intelligence. Built on Your Data.",
    description:
      "Deploy AI agents directly on top of your financial stack to handle bookkeeping, real-time reconciliation, and anomaly detection.",
    images: ["/assets/thumbnail.webp"],
  },
  icons: {
    icon: "/assets/Foresight-Logomark.png",
    apple: "/assets/Foresight-Logomark.png",
  },
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
        <ConsentManagerProvider options={consentProviderOptions}>
          <Analytics />
          <Navigation />
          <NavigationMobile />
          <main className="min-h-[calc(100vh-96px)] md:min-h-[calc(100vh-112px)]">
            {children}
          </main>
          <Footer />
          <ConsentManagerUI />
        </ConsentManagerProvider>
      </body>
    </html>
  );
}
