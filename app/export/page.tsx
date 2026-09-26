import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Export Commodities — NGR Impex | Agricultural Excellence",
  description:
    "Explore NGR Impex export commodities including Indian Red Chilli, Mango Pulp, Sesame Seeds, and agricultural products.",
};

export default function ExportPage() {
  const exportItems = [
    {
      title: "Indian Red Chilli",
      category: "Spices & Condiments",
      desc: "Teja, Sanam, and Byadgi varieties sourced directly from Guntur and Warangal farming belts, lab-certified for ASTA color and SHU heat values.",
      image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Alphonso & Totapuri Mango Pulp",
      category: "Processed Agro",
      desc: "Aseptic and canned fruit purees extracted from hand-picked orchard mangoes under stringent HACCP and ISO certified facilities.",
      image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Natural & Hulled Sesame Seeds",
      category: "Oilseeds & Grains",
      desc: "Sortex cleaned white and black sesame seeds with 99.95% purity for confectionery, tahini, and cold-pressed oil extraction.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="w-full">
      <section
        className="relative py-20 bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 91, 50, 0.9), rgba(0, 63, 38, 0.88)), url('https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=1500&q=80')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffd000] mb-2">
            Export Division
          </p>
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Exporting Excellence from India to the World
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto">
            Delivering farm-fresh agricultural produce and value-added food ingredients to worldwide commercial buyers.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#f6faf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exportItems.map((item) => (
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
                  <span className="text-[0.7rem] uppercase tracking-wider font-extrabold text-[#005b32]">
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
                    Request Export Specs &amp; FOB Quote →
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
