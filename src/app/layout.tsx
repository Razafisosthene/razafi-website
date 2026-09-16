import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const homeTitle = "RAZAFI | Zone WiFi & paiement mobile à Madagascar";
const homeDescription =
  "RAZAFI automatise la vente d’accès WiFi à Madagascar avec paiement mobile via MVola et Airtel Money, activation instantanée, gestion à distance et MikroTik.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.razafistore.com"),
  title: homeTitle,
  description: homeDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "/",
    siteName: "RAZAFI",
    locale: "fr_MG",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: homeTitle,
    description: homeDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
