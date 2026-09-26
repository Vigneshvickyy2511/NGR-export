import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NGR Impex — Global Trade | Quality Products, Trusted Global Source",
  description:
    "NGR Impex is a dynamic import-export company engaged in global trade of agricultural commodities, industrial raw materials, chemicals, and polymer solutions.",
  keywords: [
    "NGR Impex",
    "Global Trade",
    "Import Export India",
    "Agricultural Commodities",
    "Chemicals Export",
    "Red Chilli Export",
    "Mango Pulp Export",
    "Plastic Solutions",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-[#173e2a] antialiased">
        <ThemeRegistry>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
