import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pixels in Space - Gaming News, Reviews & Coverage",
    template: "%s | Pixels in Space",
  },
  description:
    "Breaking gaming news, expert reviews, and in-depth coverage of the biggest games. Your daily source for everything gaming.",
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
      <body className="min-h-screen bg-bg-body text-text-primary antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
