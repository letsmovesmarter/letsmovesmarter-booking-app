import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Under Construction",
  description: "We are currently preparing this website. Please check back later."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
