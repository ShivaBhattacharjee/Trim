import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trim-Shorten Your Links",
  description: "Shorten your links with ease using Trim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative overflow-hidden bg-black text-white min-h-screen max-w-[1200px] m-auto`}
      >
        <Toaster />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
