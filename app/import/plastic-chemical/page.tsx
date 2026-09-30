import type { Metadata } from "next";
import MaintenanceView from "@/src/views/maintenance";

export const metadata: Metadata = {
  title: "Plastic Chemicals & Polymers — Import Division | NGR Impex",
  description:
    "NGR Impex imports virgin polymers, resins, masterbatches, and plasticizers from verified petrochemical producers worldwide for industrial manufacturing.",
};

export default function PlasticChemicalPage() {
  return (
    <MaintenanceView
      productName="Plastic Chemical"
      category="Import"
      tagline="Polymers, Resins & Industrial Additive Formulations"
      description="NGR Impex imports high-performance virgin resins, engineering polymers, plasticizers, and specialty additives from premier international producers for injection moulding, extrusion, film packaging, and technical compounding."
      bgImage="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1800&q=85"
      highlights={[
        {
          icon: "🧪",
          title: "Virgin Polymers & Resins",
          desc: "Importing prime HDPE, LDPE, LLDPE, Polypropylene (PP), and PVC suspension resins from accredited international petrochemical plants.",
        },
        {
          icon: "⚙",
          title: "Specialty Plasticizers & Additives",
          desc: "DOTP, DOP, DINP, titanium dioxide masterbatches, antioxidants, and UV stabilizers for durable, compliant plastic formulations.",
        },
        {
          icon: "📋",
          title: "Batch COA & Regulatory Compliance",
          desc: "Strict verification of Melt Flow Index (MFI), density assays, tensile strength, and full REACH, RoHS, and ISO documentation.",
        },
      ]}
      relatedProducts={[
        { title: "Industrial Acids", href: "/import/acids", icon: "🧪", category: "Import" },
        { title: "Cosmetic Chemicals", href: "/import/cosmetic-chemical", icon: "🧴", category: "Import" },
        { title: "Metal Scrap", href: "/import/metal-scrap", icon: "⚙️", category: "Import" },
        { title: "Quality Rice", href: "/export/quality-rice", icon: "🌾", category: "Export" },
      ]}
    />
  );
}
