import QualityRiceView from "@/src/views/export/quality-rice";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Rice Exports — NGR Impex | 1121 Basmati, Sugandha, Sona Masoori & Non-Basmati",
  description:
    "We export the finest Indian rice from fertile regions, offering 1121 XXL Basmati, Sugandha, Sona Masoori, and PR 11 Non-Basmati rice with superior grain length, aroma, and custom packaging for global buyers.",
};

export default function QualityRicePage() {
  return <QualityRiceView />;
}
