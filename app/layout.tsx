import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// initialize montserrat font instance
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "UI/UX Fundamentals and Best Practices",
  description: "A presentation by Ciaran McGovern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
