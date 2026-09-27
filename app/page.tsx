import HomeView from "@/src/views/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NGR Impex — Global Trade | Quality Products, Trusted Global Source",
  description:
    "NGR Impex is a dynamic import-export company engaged in global trade of agricultural commodities, industrial raw materials, chemicals, and polymer solutions.",
};

export default function HomePage() {
  return <HomeView />;
}
