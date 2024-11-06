import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const druk = localFont({
  src: "./fonts/DrukXCond-Super.woff",
  variable: "--font-druk",
  weight: "100 900",
});

const roboto = localFont({
  src: "./fonts/roboto.woff",
  variable: "--font-roboto",
  weight: "400",
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
        className={`${druk.variable} ${roboto.variable} antialiased bg-gray10 text-gray100`}
      >
        {children}
      </body>
    </html>
  );
}
