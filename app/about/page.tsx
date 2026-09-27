import AboutView from "@/src/views/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — NGR Impex | Quality Food Products, Trusted Global Source",
  description:
    "Learn about NGR Impex, our mission, global trade operations in agricultural commodities, industrial chemicals, and sustainable supply partnerships.",
};

export default function AboutPage() {
  return <AboutView />;
}
