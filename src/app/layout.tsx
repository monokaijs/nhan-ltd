import type {Metadata} from "next";
import {Manrope} from "next/font/google";
import "./globals.css";
import {cn} from "../lib/utils";
import {PropsWithChildren} from "react";

const appFont = Manrope({subsets: ["latin"]});

export const metadata: Metadata = {
  title: {
    template: '%s% :: MonokaiJs',
    default: 'Home :: MonokaiJs'
  },
  description: "IT enthusiast",
  openGraph: {
    title: "MonokaiJs",
    description: "IT enthusiast",
    url: "https://nhan.ltd",
  },
  alternates: {
    canonical: "https://nhan.ltd",
  },
};

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="en">

    <body className={cn(appFont.className, "bg")}>
      {children}
    </body>
    </html>
  );
}
