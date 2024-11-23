"use client";
import type { Metadata } from "next";
import "./globals.css";
import{Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--pop",
});
const fonts = '${poppins.variable}';
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>You can also become doctor </title>
      </head>
      <body
        className={`${fonts}`}
      >
        {children}
      </body>
    </html>
  );
}