import SesameSeedView from "@/src/views/sesame-seed";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Sesame Seeds Exports — NGR Impex | Hulled, Natural White & Black Sesame Seeds",
  description:
    "We export premium quality Indian sesame seeds including Hulled White (99.95% / 99.99% Auto-Sortex), Natural White, and Black Sesame Seeds for bakery, tahini, confectionery, and edible oil extraction worldwide.",
};

export default function ExportSesameSeedPage() {
  return <SesameSeedView />;
}
