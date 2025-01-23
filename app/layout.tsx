import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar").then(mod => mod.Navbar));
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Encounter Church",
  description: "This is home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-10 min-h-screen-with-footer text-black">
          {children}
        </div>
      <Footer />
      </body>
    </html>
  );
}
