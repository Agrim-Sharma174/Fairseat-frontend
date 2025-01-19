import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FairSeat",
  description: "Revolutionizing Ticketing with Blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>FairSeat - Revolutionizing Ticketing with Blockchain</title>
        <meta
          name="description"
          content="FairSeat is revolutionizing India's ticketing industry with blockchain technology, ensuring transparent, secure, and fair ticket sales. Eliminate scalping, counterfeits, and hidden fees for concerts, sports, and events. Join the movement for ethical ticketing!"
        />
        <meta
          name="keywords"
          content="Blockchain ticketing platform, Fair ticket sales India, Transparent ticketing system, Anti-scalping ticketing solution, Secure event tickets blockchain, Concert ticket blockchain India, Ethical ticketing, Sports match ticketing India, FairSeat ticket platform, Stop ticket scalping, Book concerts online, Book sports tickets, Buy event tickets, Online ticket booking India, Secure ticket sales, Fair pricing for events, Blockchain ticket sales, Event ticketing platform, Concert ticket booking, Theater ticket booking India, Transparent event booking, Book tickets hassle-free"
        />
        <meta name="author" content="FairSeat Team" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
