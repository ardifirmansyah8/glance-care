import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import MainLayout from "@/components/MainLayout";

import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oscar Dashboard",
  description: "A visualize dashboard to show Oscar's movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto flex justify-center`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
