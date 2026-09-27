import MetalScrapView from "@/src/views/metal-scrap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Metal Scrap — NGR Impex | Ferrous & Non-Ferrous Recycling",
  description:
    "We import high-quality ferrous and non-ferrous metal scrap including Steel, Aluminium Talk, Copper, Brass, Zurik, and Zorba scrap for global industries.",
};

export default function ImportMetalScrapPage() {
  return <MetalScrapView />;
}
