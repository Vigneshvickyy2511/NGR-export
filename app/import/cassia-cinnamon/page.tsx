import type { Metadata } from "next";
import MaintenanceView from "@/src/views/maintenance";

export const metadata: Metadata = {
  title: "Cassia Cinnamon — Premium Spice Import | NGR Impex",
  description:
    "NGR Impex imports high-volatile-oil Cassia Cinnamon (split, whole quills, and broken) directly from certified origins in Vietnam and Indonesia.",
};

export default function CassiaCinnamonPage() {
  return (
    <MaintenanceView
      productName="Cassia Cinnamon"
      category="Import"
      tagline="Aromatic Whole Quills, Splits & High-Oil Cinnamon Spices"
      description="NGR Impex imports high-grade Cassia Cinnamon directly from trusted growers across Vietnam and Indonesia. Meticulously graded for rich cinnamaldehyde volatile oil, sweet pungent flavor, and low moisture for spice grinders, food processors, and oleoresin distillers."
      bgImage="https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1800&q=85"
      highlights={[
        {
          icon: "🍂",
          title: "High Volatile Oil (VO ≥ 3.5%–5%)",
          desc: "Naturally rich in cinnamaldehyde, giving intense warmth and aroma essential for gourmet baking, spice blends, and pharmaceutical extraction.",
        },
        {
          icon: "🥢",
          title: "Multiple Commercial Grades",
          desc: "Cigarette tube quills (8cm–10cm), round-cut split cassia, and well-scraped broken cuts tailored to client processing specifications.",
        },
        {
          icon: "✓",
          title: "ASTA Clean & Steam Sterilized",
          desc: "Double-cleaned, metal detected, and certified free of extraneous matter, mold, and pesticide residues with complete phytosanitary clearance.",
        },
      ]}
      relatedProducts={[
        { title: "Star Anise", href: "/import/star-anise", icon: "⭐", category: "Import" },
        { title: "Dried Red Chilli", href: "/export/red-chilli", icon: "🌶️", category: "Export" },
        { title: "Sesame Seeds", href: "/export/sesame-seed", icon: "🌱", category: "Export" },
        { title: "Cosmetic Chemicals", href: "/import/cosmetic-chemical", icon: "🧴", category: "Import" },
      ]}
    />
  );
}
