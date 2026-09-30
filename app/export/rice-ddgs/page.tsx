import type { Metadata } from "next";
import MaintenanceView from "@/src/views/maintenance";

export const metadata: Metadata = {
  title: "Rice DDGS — High-Protein Feed Export | NGR Impex",
  description:
    "NGR Impex exports premium Rice DDGS (Distillers Dried Grains with Solubles) for commercial poultry, dairy cattle, and aquaculture feed manufacturers worldwide.",
};

export default function RiceDDGSPage() {
  return (
    <MaintenanceView
      productName="Rice DDGS"
      category="Export"
      tagline="High-Protein Animal Nutrition & Aquafeed Commodity"
      description="NGR Impex exports premium-grade Rice DDGS (Distillers Dried Grains with Solubles) with consistent crude protein content (≥45%), optimal digestible energy, and low moisture, engineered for poultry, dairy, swine, and aquaculture feeds."
      bgImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85"
      highlights={[
        {
          icon: "🌾",
          title: "High Crude Protein (≥ 45%)",
          desc: "Superior bypass protein and rich energy density ensuring enhanced feed conversion ratios (FCR) for commercial livestock.",
        },
        {
          icon: "⚗",
          title: "Amino Acid & Mineral Rich",
          desc: "Concentrated natural yeast metabolites, bioavailable phosphorus, and balanced methionine profiles with zero aflatoxin contamination.",
        },
        {
          icon: "🚢",
          title: "Container Liner & Bulk Shipping",
          desc: "Available in 50kg export HDPE bags and 1000kg jumbo tote bags with desiccants and moisture-barrier container lining.",
        },
      ]}
      relatedProducts={[
        { title: "Quality Rice", href: "/export/quality-rice", icon: "🌾", category: "Export" },
        { title: "Silage Making", href: "/export/silage-making", icon: "🌽", category: "Export" },
        { title: "Sesame Seeds", href: "/export/sesame-seed", icon: "🌱", category: "Export" },
        { title: "Dried Red Chilli", href: "/export/red-chilli", icon: "🌶️", category: "Export" },
      ]}
    />
  );
}
