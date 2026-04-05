import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Caroloom — AI Software Holding Company · Copenhagen",
  description:
    "Copenhagen-based holding company that acquires, builds, and operates AI-powered software businesses across the Nordics.",
  metadataBase: new URL("https://www.caroloom.com"),
  openGraph: {
    title: "Caroloom — AI Software Holding Company",
    description:
      "We acquire, build, and operate AI-powered software businesses across the Nordics.",
    url: "https://www.caroloom.com",
    siteName: "Caroloom",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Caroloom — AI Software Holding Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caroloom — AI Software Holding Company",
    description:
      "We acquire, build, and operate AI-powered software businesses across the Nordics.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Caroloom",
              url: "https://www.caroloom.com",
              description:
                "Copenhagen-based holding company that acquires, builds, and operates AI-powered software businesses across the Nordics.",
              foundingDate: "2024",
              foundingLocation: {
                "@type": "Place",
                name: "Copenhagen, Denmark",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@caroloom.com",
                contactType: "general",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
