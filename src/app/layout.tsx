import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Bookkeeper Alpharetta GA | Rockstar Bookkeeping",
    template: "%s | Rockstar Bookkeeping",
  },
  description:
    "Expert bookkeeping in Alpharetta, GA. Rockstar Bookkeeping handles your numbers so you can focus on growing your business. Get accurate financials today!",
  keywords: [
    "bookkeeper Alpharetta GA",
    "small business bookkeeping Atlanta",
    "QuickBooks bookkeeper near me",
    "payroll services Atlanta",
    "bookkeeping services Alpharetta",
  ],
  openGraph: {
    siteName: "Rockstar Bookkeeping",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-full">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
