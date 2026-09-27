import MangoPulpView from "@/src/views/mango-pulp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Mango Pulp Exports — NGR Impex | Alphonso, Totapuri, Kesar & Raspuri Purees",
  description:
    "We export premium Indian mango pulp and purees processed under strict aseptic conditions. Alphonso, Totapuri, Kesar, and Raspuri in 215kg aseptic drums and 3.1kg OTS cans for beverage, dairy, and bakery industries worldwide.",
};

export default function ExportMangoPulpPage() {
  return <MangoPulpView />;
}
