import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}
        style={{
          background:
            "linear-gradient(135deg, #1a1a1a 0%, #2d1b3d 25%, #3a2147 50%, #2a1a3a 75%, #1a1a1a 100%)",
        }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
