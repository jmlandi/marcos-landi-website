import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Marcos Landi | Full-Stack & Data Engineer",
  description:
    "Contact page for Marcos Landi.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="w-full max-w-screen min-h-screen">
        {children}
      </body>
    </html>
  );
}