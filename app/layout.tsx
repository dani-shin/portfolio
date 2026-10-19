import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.danishin.net"),
  title: "Dani Shin | Product Designer",
  description:
    "I turn complex business rules into products people actually enjoy using.",
  alternates: {
    canonical: "https://www.danishin.net/",
  },
  openGraph: {
    type: "website",
    url: "https://www.danishin.net/",
    siteName: "Dani Shin Portfolio",
    title: "Dani Shin, Designer",
    description:
      "Design Systems & Complex Product Workflows",
    images: [
      {
        url: "https://www.danishin.net/og_image.png",
        width: 2400,
        height: 1260,
        type: "image/png",
        alt: "Dani Shin, Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dani Shin, Designer",
    description:
      "Design Systems & Complex Product Workflows",
    images: [
      {
        url: "https://www.danishin.net/og_image.png",
        alt: "Dani Shin, Product Designer",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        </body>
    </html>
  );
}
