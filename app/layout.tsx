import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "BrokerBird — The AI-Native Decision Engine for Benefits Brokers",
  description:
    "BrokerBird turns your 40-hour renewal grind into a 30-minute workflow with 97% extraction accuracy and inline citations on every field. Built exclusively for multi-carrier benefits brokers.",
  openGraph: {
    title: "BrokerBird — Stop Wasting Days Reading Policies",
    description:
      "AI-native data exchange and decision engine for benefits brokers. 30-minute renewals. 97% accuracy. Every field cited.",
    type: "website",
    siteName: "BrokerBird",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrokerBird",
    description: "The AI-native decision engine for benefits brokers.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
