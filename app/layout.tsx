import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Karthik | AI Product Leadership Portfolio",
    template: "%s | Karthik",
  },
  description:
    "AI Product Leader specializing in enterprise AI platforms, decision intelligence systems, IoT, and enterprise platform strategy.",

  keywords: [
    "AI Product Manager",
    "Senior Product Manager",
    "Enterprise AI",
    "AI Product Leader",
    "Product Strategy",
    "Decision Intelligence",
    "GenAI",
    "IoT",
    "Platform Product Management",
  ],

  authors: [{ name: "Karthik" }],

  openGraph: {
    title: "Karthik | AI Product Leadership Portfolio",
    description:
      "Enterprise AI, IoT, Decision Intelligence, Product Strategy, and Platform Leadership.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
