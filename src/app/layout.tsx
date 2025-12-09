import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Sora, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space_grotesk",
  weight: ["400", "500", "600"],
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bellscript.studio";

export const metadata: Metadata = {
  title: {
    default: "BellScript Studios — We build in a week",
    template: "%s — BellScript Studios",
  },
  description:
    "Custom websites and digital experiences, built fast and crafted for real-world ideas.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: "BellScript Studios",
    images: [
      {
        url:"https://bellscript.studio/og-image.jpg",
        width: 1200,
        height: 630,

      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${sora.variable}
          ${inter.variable}
          ${spaceGrotesk.variable}
          antialiased`
        }
      >
        {children}
      </body>
    </html>
  );
}
