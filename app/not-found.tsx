import type { Metadata } from "next";
import NotFoundView from "@/src/views/not-found";

export const metadata: Metadata = {
  title: "404 — Page Not Found | NGR Impex",
  description:
    "The page you are looking for does not exist or has been moved. Explore NGR Impex's global trade commodities and divisions.",
};

export default function NotFound() {
  return <NotFoundView />;
}
