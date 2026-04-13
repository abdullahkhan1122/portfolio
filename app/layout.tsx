import type { Metadata } from "next";
import { Geist_Mono, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Abdullah | Software Engineer",
  description:
    "Portfolio of Muhammad Abdullah, an AI-powered software engineer building scalable web products, automation, and intelligent experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${grotesk.variable} ${geistMono.variable} h-full antialiased bg-white text-slate-900`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
