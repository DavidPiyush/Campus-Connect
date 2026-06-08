import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Semestro — Academic OS for Bihar Engineering Students",
  description:
    "Track attendance, predict pass chances, plan your CGPA, and prepare for placements. Built for Bihar engineering students.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
