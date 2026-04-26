import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

export const metadata: Metadata = {
  title: "6in1 Group",
  description:
    "6in1 Group is a talent, image, and brand development company across entertainment and publishing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-site-bg text-site-text font-body">
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          <main className="flex-1 pt-20">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
