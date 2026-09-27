import AcidsView from "@/src/views/acids";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Acids — NGR Impex | Sulfuric, Hydrochloric, Nitric & Phosphoric Acids",
  description:
    "We import high-grade industrial acids and chemical compounds including Sulfuric Acid, Hydrochloric Acid, Nitric Acid, Phosphoric Acid, carbonates, and acidulants for global industries.",
};

export default function ImportAcidsPage() {
  return <AcidsView />;
}
