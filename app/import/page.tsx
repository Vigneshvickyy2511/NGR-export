import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Import Solutions — NGR Impex | Raw Materials & Polymers",
  description:
    "Explore NGR Impex import solutions including metal scrap, industrial acids, and polymer solutions sourced globally.",
};

export default function ImportPage() {
  const importItems = [
    {
      title: "Metal Scrap",
      category: "Ferrous & Non-Ferrous",
      desc: "High-grade industrial metals, copper cathode, aluminum alloy, and heavy melting scrap meeting ISRI guidelines.",
      image: "https://images.unsplash.com/photo-1611288875785-24b9062e2bcb?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Acids & Industrial Chemicals",
      category: "Technical & Commercial Grade",
      desc: "Bulk acids, base reagents, and solvents supplied for chemical synthesis, textiles, and water purification.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Plastic & Polymer Solutions",
      category: "Engineering Resins",
      desc: "Virgin granules, prime LDPE, HDPE, PP, and specialty compounds tailored for injection and extrusion molding.",
      image: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="w-full">
      <section
        className="relative py-20 bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 71, 41, 0.9), rgba(0, 96, 60, 0.85)), url('https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&w=1500&q=80')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffd000] mb-2">
            Import Division
          </p>
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Importing Essentials for Modern Industry
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto">
            Procuring high-grade industrial raw materials, metals, and chemical compounds from leading global producers.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#f6faf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {importItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-[#d9e4dc] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[0.7rem] uppercase tracking-wider font-extrabold text-[#8ea900]">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#173e2a] mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5f6d65] leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center text-xs font-bold text-[#005b32] hover:text-[#ffd000] transition-colors"
                  >
                    Request Import Quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
