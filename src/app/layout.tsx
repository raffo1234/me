import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const druk = localFont({
  src: "./fonts/DrukXCond-Super.woff",
  variable: "--font-druk",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rafael Meza",
  description: "Senior Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${druk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
