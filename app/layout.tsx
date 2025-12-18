import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/features/shared/layouts/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "თეატრის, კონცერტების, რკინიგზის, ავტობუსის და სპორტის ონლაინ ბილეთები",
  description:
    "თეატრის, კონცერტების, რკინიგზის, ავტობუსის და სპორტის ონლაინ ბილეთები",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title:
      "თეატრის, კონცერტების, რკინიგზის, ავტობუსის და სპორტის ონლაინ ბილეთები",
    description:
      "თეატრის, კონცერტების, რკინიგზის, ავტობუსის და სპორტის ონლაინ ბილეთები",
    siteName: "Biletebi.ge",
    images: [
      {
        url: "/biletebi-main.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "თეატრის, კონცერტების, რკინიგზის, ავტობუსის და სპორტის ონლაინ ბილეთები",
    description:
      "თეატრის, კონცერტების, რკინიგზის, ავტობუსის და სპორტის ონლაინ ბილეთები",
    images: ["/biletebi-main.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Navbar />

        {/* ყველა გვერდი აქ ჩაიტვირთება */}
        <main className="min-h-[calc(100vh-64px)]">{children}</main>
      </body>
    </html>
  );
}
