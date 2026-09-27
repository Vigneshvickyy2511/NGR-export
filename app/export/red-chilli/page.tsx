import RedChilliView from "@/src/views/red-chilli";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dried Red Chilli Exports — NGR Impex | Teja S17, S4 Sannam, Byadgi & Kashmiri Chillies",
  description:
    "We export premium quality Indian dried red chillies sourced directly from Guntur and Warangal farms. Teja S17, S4 Sannam, Byadgi, and Kashmiri chillies with certified ASTA color and calibrated heat.",
};

export default function ExportRedChilliPage() {
  return <RedChilliView />;
}
