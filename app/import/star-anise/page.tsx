import type { Metadata } from "next";
import MaintenanceView from "@/src/views/maintenance";

export const metadata: Metadata = {
  title: "Star Anise — Premium Whole Spice Import | NGR Impex",
  description:
    "NGR Impex imports sun-dried Autumn Star Anise with high anethole essential oil content, intact star pods, and zero chemical sulfur fumigation.",
};

export default function StarAnisePage() {
  return (
    <MaintenanceView
      productName="Star Anise"
      category="Import"
      tagline="Whole Sun-Dried Autumn Stars & Aromatic Anethole Spices"
      description="NGR Impex imports export-grade Star Anise (Illicium verum) directly from origin farms. Handpicked during prime autumn harvests for vibrant star shapes, high trans-anethole essential oil, and distinctive sweet licorice aroma for food seasoning, tea blends, and pharmaceutical extraction."
      bgImage="https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=1800&q=85"
      highlights={[
        {
          icon: "⭐",
          title: "Autumn Star Whole (≥ 80%–85%)",
          desc: "Large, well-formed 8-pointed star pods with glossy seeds, minimal broken carpels, and attractive natural reddish-brown color.",
        },
        {
          icon: "🌿",
          title: "Potent Anethole Oil (VO ≥ 8%–10%)",
          desc: "Concentrated trans-anethole essential oils providing intense sweetness, used globally in seasoning powders, liqueurs, and herbal medicine.",
        },
        {
          icon: "☀️",
          title: "Zero Sulfur & Naturally Sun-Dried",
          desc: "100% natural sun-curing with zero chemical sulfur dioxide bleaching, meeting strict US FDA, EU, and FSSAI pesticide residue norms.",
        },
      ]}
      relatedProducts={[
        { title: "Cassia Cinnamon", href: "/import/cassia-cinnamon", icon: "🍂", category: "Import" },
        { title: "Dried Red Chilli", href: "/export/red-chilli", icon: "🌶️", category: "Export" },
        { title: "Sesame Seeds", href: "/export/sesame-seed", icon: "🌱", category: "Export" },
        { title: "Metal Scrap", href: "/import/metal-scrap", icon: "⚙️", category: "Import" },
      ]}
    />
  );
}
