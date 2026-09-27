import CosmeticChemicalView from "@/src/views/import/cosmetic-chemical";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cosmetic Chemicals — NGR Impex | Raw Materials for Personal Care Formulations",
  description:
    "We import high-purity cosmetic chemicals, humectants, surfactants, thickeners, and active ingredients including Glycerin Liquid, Stearic Acid, Guar Gum, and Ascorbic Acid for global personal care and beauty manufacturers.",
};

export default function ImportCosmeticChemicalPage() {
  return <CosmeticChemicalView />;
}
