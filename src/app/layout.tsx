import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Marcos Landi | Full‑Stack Engineer",
  description:
    "Portfolio and contact page for Marcos Landi — Java, Node, React, Next.js, Python, Data & AI.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-moving-gradient antialiased text-white selection:bg-indigo-600/70">
        {children}
      </body>
    </html>
  );
}