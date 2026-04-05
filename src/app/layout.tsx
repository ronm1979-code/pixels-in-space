import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import "./globals.css";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-gaming" });

export const metadata: Metadata = {
  title: {
    default: "Pixels in Space - Gaming News, Reviews & Coverage",
    template: "%s | Pixels in Space",
  },
  description:
    "Breaking gaming news, expert reviews, and in-depth coverage of the biggest games. Your daily source for everything gaming.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Pixels in Space",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-bg-body text-text-primary antialiased ${orbitron.variable}`}>
        <ScrollProgress />
        {children}
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
