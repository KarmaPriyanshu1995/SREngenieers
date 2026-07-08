import type { Metadata } from "next";
import { Saira_Condensed, Barlow } from "next/font/google";
import { MotionConfig } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, businessJsonLd } from "@/lib/data";
import "./globals.css";

const sairaCondensed = Saira_Condensed({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const TITLE = "SR Engineering Works | Hydraulic Scissor Lift Manufacturer, Jaipur";
const DESCRIPTION =
  "SR Engineering Works manufactures hydraulic scissor lifts, goods lifts and material handling equipment in Jaipur. 500 kg to 5000 kg capacity, 1 year warranty, pan-India delivery.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "SR Engineering Works",
    images: ["/og.jpg"],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sairaCondensed.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd()) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-hydraulic focus:px-4 focus:py-2 focus:font-body focus:text-sm focus:font-semibold focus:uppercase focus:text-steel-950"
        >
          Skip to content
        </a>
        <MotionConfig reducedMotion="user">
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
