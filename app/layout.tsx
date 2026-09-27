import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#005b32",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ngrimpex.in"),
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
  openGraph: {
    title: "NGR Impex — Global Trade | Quality Products, Trusted Global Source",
    description:
      "Connecting dependable international producers with high-growth markets across agricultural commodities, industrial chemicals, polymers, and raw materials.",
    url: "https://ngrimpex.in",
    siteName: "NGR Impex",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NGR Impex — Global Trade",
    description:
      "Importing Essentials. Exporting Excellence. Leading International Exim Enterprise.",
  },
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
