import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { SiteJsonLd } from "./components/site-json-ld";
import { getSiteUrl } from "./lib/site-url";

const siteUrl = getSiteUrl();
const defaultTitle = "6in1 Group";
const defaultDescription =
  "6in1 Group is a talent, image, and brand development company across entertainment and publishing.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | 6in1 Group",
  },
  description: defaultDescription,
  applicationName: defaultTitle,
  keywords: [
    "6in1 Group",
    "entertainment",
    "publishing",
    "talent development",
    "music",
    "sports",
    "licensing",
    "brand development",
  ],
  authors: [{ name: "6in1 Group", url: siteUrl }],
  creator: "6in1 Group",
  publisher: "6in1 Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/iconG.png", type: "image/png" }],
    shortcut: "/iconG.png",
    apple: "/iconG.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: defaultTitle,
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: "/logoGroup.png", alt: "6in1 Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/logoGroup.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-site-bg text-site-text font-body">
        <SiteJsonLd />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 pt-20">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
