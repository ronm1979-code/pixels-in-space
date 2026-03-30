import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GamePulse - Gaming News, Reviews & Coverage",
    template: "%s | GamePulse",
  },
  description:
    "Breaking gaming news, expert reviews, and in-depth coverage of the biggest games. Your daily source for everything gaming.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "GamePulse",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg-dark text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
