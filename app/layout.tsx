import type { Metadata } from "next";
import { Saira_Condensed, Barlow } from "next/font/google";
import { MotionConfig } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

export const metadata: Metadata = {
  title: "SR Engineering Works | Hydraulic Scissor Lift Manufacturer, Jaipur",
  description:
    "SR Engineering Works manufactures hydraulic scissor lifts, goods lifts and material handling equipment in Jaipur. 500 kg to 5000 kg capacity, 1 year warranty, pan-India delivery.",
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
        <MotionConfig reducedMotion="user">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
