import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gaurangsuki.dev"),
  title: "Gaurang Suki | Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer based in Fremont, CA. Building scalable web applications at the intersection of beautiful UIs and robust backends.",
  keywords: [
    "Gaurang Suki",
    "Full Stack Engineer",
    "React",
    "Node.js",
    "Software Engineer",
    "Fremont CA",
  ],
  authors: [{ name: "Gaurang Suki" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gaurangsuki.dev",
    title: "Gaurang Suki | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specializing in React, Node.js, and cloud architecture.",
    siteName: "Gaurang Suki Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurang Suki | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specializing in React, Node.js, and cloud architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
