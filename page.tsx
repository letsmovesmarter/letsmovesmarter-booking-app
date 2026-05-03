import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Let's Move Smarter Booking",
  description: "Book weekly moving tote rentals in Joplin, Missouri."
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
