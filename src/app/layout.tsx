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

export const metadata: Metadata = {
  metadataBase: new URL("https://bellscript.studio"),
  title: "BellScript Studios | Custom Websites & Digital Solutions",
  description:
    "BellScript Studios builds modern, custom websites and digital solutions.",
  openGraph: {
    title: "BellScript Studios",
    description:
      "Custom websites and digital solutions built with clean, modern code.",
    url: "https://bellscript.studio",
    siteName: "BellScript Studios",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BellScript Studios – Custom Websites & Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BellScript Studios",
    description:
      "Custom websites and digital solutions built with clean, modern code.",
    images: ["/og-image.jpg"],
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
