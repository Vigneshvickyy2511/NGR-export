import SilageMakingView from "@/src/views/export/silage-making";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Silage Making & Animal Feed Solutions — NGR Impex | Corn, Alfalfa & Microbial Inoculants",
  description:
    "NGR Impex offers advanced silage making solutions, microbial bio-inoculants (Kem LAC® HD), high-energy corn silage, and preserved forage bales for livestock and dairy farms worldwide.",
};

export default function SilageMakingPage() {
  return <SilageMakingView />;
}
