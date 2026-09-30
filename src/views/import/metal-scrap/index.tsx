"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Button, Snackbar, Alert } from "@mui/material";
import {
  Sparkles,
  Layers,
  Recycle,
  ShieldCheck,
  Truck,
  TrendingUp,
  Download,
  Factory,
  Car,
  Building2,
  Cpu,
  Anchor,
  Globe2,
  Scale,
  Warehouse,
  Zap,
  Hammer,
  Shield,
  Boxes,
  Component,
  Wrench,
} from "lucide-react";

export default function MetalScrapView() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 70, y: 40 });

  // Toast notification state
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState<"success" | "info">(
    "success",
  );

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y });
  };

  const handleDownloadSpecs = () => {
    setToastSeverity("info");
    setToastMessage("Metal Scrap Technical Specifications sheet downloaded.");
    setToastOpen(true);
  };

  const products = [
    {
      title: "Metal Scrap",
      icon: Layers,
      desc: "Recycled steel for construction, automotive and manufacturing applications worldwide.",
      image:
        "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=500&q=82",
    },
    {
      title: "Aluminium Talk Scrap",
      icon: Recycle,
      desc: "Mixed aluminium sheets ideal for secondary smelting, recycling, and remelting mills.",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=82",
    },
    {
      title: "Copper Scrap",
      icon: Zap,
      desc: "High-grade copper cathode & wire scrap for electrical, plumbing, and industrial fabrication.",
      image:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=500&q=82",
    },
    {
      title: "Brass Scrap",
      icon: Hammer,
      desc: "Recycled yellow and red brass for precision hardware, plumbing fittings, and decorative cast.",
      image:
        "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=500&q=82",
    },
    {
      title: "Aluminium Scrap",
      icon: Shield,
      desc: "Lightweight, corrosion-resistant alloy materials ready for high-yield industrial reprocessing.",
      image:
        "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=500&q=82",
    },
    {
      title: "Non Ferros Scrap",
      icon: Boxes,
      desc: "Pure and mixed non-ferrous metals curated for foundries, smelters, and global processors.",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=82",
    },
    {
      title: "Zorba Scrap",
      icon: Component,
      desc: "Shredded, pre-sorted non-ferrous metallics predominantly aluminium for cost-effective casting.",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=82",
    },
    {
      title: "Zurik Scrap",
      icon: Wrench,
      desc: "Stainless steel scrap containing mixed non-ferrous metals recovered from shredding.",
      image:
        "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=500&q=82",
    },
  ];

  const reasons = [
    {
      icon: Layers,
      title: "Wide Variety of Metal Scrap",
      desc: "Ferrous and non-ferrous scrap sourced to meet specific international grade standards.",
    },
    {
      icon: Recycle,
      title: "Sustainability & Recycling",
      desc: "Supporting a circular economy and responsible global recycling ecosystems.",
    },
    {
      icon: ShieldCheck,
      title: "Strict Quality Control",
      desc: "Radiation checked, moisture inspected, and certified prior to port departures.",
    },
    {
      icon: Truck,
      title: "Reliable Sourcing & Logistics",
      desc: "Trusted international suppliers and streamlined freight for guaranteed on-time delivery.",
    },
    {
      icon: TrendingUp,
      title: "Cost-Effective & Efficient",
      desc: "Competitive ISRI-benchmarked pricing delivering strong value for business margins.",
    },
  ];

  const industries = [
    {
      name: "Steel Manufacturing",
      desc: "Recycled metal for raw melt production.",
      icon: Factory,
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=85",
    },
    {
      name: "Automotive Industry",
      desc: "High-grade structural metal for components.",
      icon: Car,
      image:
        "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=600&q=85",
    },
    {
      name: "Construction & Infrastructure",
      desc: "Essential rebar and alloy inputs for building.",
      icon: Building2,
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=85",
    },
    {
      name: "Electronics & Electrical",
      desc: "Refined conductive metals for components.",
      icon: Cpu,
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=85",
    },
    {
      name: "Aerospace & Marine",
      desc: "High-durability precision alloy scrap.",
      icon: Anchor,
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=85",
    },
    {
      name: "& Many More",
      desc: "Custom sourcing for global foundries.",
      icon: Globe2,
      image:
        "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=85",
    },
  ];

  return (
    <div className="w-full overflow-hidden text-[#153526]">
      {/* 1. HERO SECTION */}
      <section
        id="metal-scrap-hero"
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-[400px] sm:min-h-[460px] flex items-center justify-start text-white overflow-hidden"
      >
        {/* Animated Background Image */}
        <div
          className="absolute -inset-4 z-0 bg-cover bg-center animate-hero-drift pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 69, 45, 0.96) 0%, rgba(0, 69, 45, 0.72) 48%, rgba(0, 69, 45, 0.35) 100%), url('https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1800&q=88')`,
          }}
        />

        {/* Dynamic Spotlight Glow */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255, 200, 0, 0.18) 0%, transparent 35%)`,
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 animate-hero-enter">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-[#ffc600] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#ffc600]" />
            Quality Recycling for a Better Tomorrow
          </div>
          <div className="w-14 h-1 bg-[#ffc600] rounded-full my-3" />
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-3 leading-none drop-shadow-md">
            Metal <span className="text-[#ffc600]">Scrap</span>
          </h1>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#00572f] mb-1">
                  Top-Grade Materials
                </p>
                <h2 className="text-3xl sm:text-5xl font-black text-[#153526] leading-tight">
                  Reliable Metal Scrap
                </h2>
                <h3 className="text-lg sm:text-xl font-bold text-[#00572f] mt-1">
                  Consistent Quality and Supply
                </h3>
                <div className="w-12 h-1 bg-[#ffc600] rounded-full mt-3" />
              </div>

              <p className="text-sm sm:text-base text-[#59675f] leading-relaxed">
                We import high-quality metal scrap from trusted global
                suppliers, ensuring consistent quality and reliable supply for
                various industries. Our metal scrap is sourced responsibly,
                supporting sustainability and circular recycling efforts
                worldwide.
              </p>

              <p className="text-sm sm:text-base text-[#59675f] leading-relaxed">
                We deal in ferrous and non-ferrous metal scrap, with an
                unwavering commitment to quality, ethical sourcing, and
                adherence to ISRI international specifications.
              </p>

              {/* Quality & Assurance Badges */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f5faf6] border border-[#dce8df]">
                  <div className="w-9 h-9 rounded-lg bg-[#00572f]/10 text-[#00572f] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4.5 h-4.5 text-[#00572f]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#153526]">ISRI Grade</span>
                    <span className="block text-[11px] text-[#59675f]">Certified Spec</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f5faf6] border border-[#dce8df]">
                  <div className="w-9 h-9 rounded-lg bg-[#00572f]/10 text-[#00572f] flex items-center justify-center shrink-0">
                    <Scale className="w-4.5 h-4.5 text-[#00572f]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#153526]">Inspection</span>
                    <span className="block text-[11px] text-[#59675f]">Radiation Checked</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f5faf6] border border-[#dce8df]">
                  <div className="w-9 h-9 rounded-lg bg-[#00572f]/10 text-[#00572f] flex items-center justify-center shrink-0">
                    <Warehouse className="w-4.5 h-4.5 text-[#00572f]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#153526]">Port Stock</span>
                    <span className="block text-[11px] text-[#59675f]">Prompt Dispatch</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6">
              <div className="relative h-[340px] sm:h-[400px] rounded-xl overflow-hidden shadow-[0_18px_48px_rgba(0,60,35,0.18)] border border-[#d9e5dd] group">
                <Image
                  src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1100&q=88"
                  alt="Industrial metal recycling facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS SECTION */}
      <section
        id="products"
        className="py-16 sm:py-24 bg-[#edf6f0] border-y border-[#d9e5dd]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-black uppercase tracking-[0.15em] text-[#00572f] mb-1">
              Our Products
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#153526]">
              Premium Metal Scrap for Industrial Needs
            </h2>
            <div className="w-14 h-1 bg-[#ffc600] rounded-full mx-auto mt-3 animate-pulse-dash" />
            <p className="text-xs sm:text-sm text-[#59675f] mt-3">
              High-quality metal scrap for diverse industrial requirements
              worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {products.map((p) => {
              const ProdIcon = p.icon;
              return (
                <article
                  key={p.title}
                  className="group relative bg-white rounded-xl overflow-hidden border border-[#d9e5dd] shadow-sm hover:shadow-xl hover:border-[#a5c7b2] hover:-translate-y-1.5 transition-all duration-300 grid grid-cols-1 sm:grid-cols-12"
                >
                  <div className="relative sm:col-span-5 h-44 sm:h-auto sm:min-h-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="sm:col-span-7 p-5 flex flex-col justify-center">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-8 h-8 rounded-lg bg-[#00572f]/10 text-[#00572f] flex items-center justify-center shrink-0 group-hover:bg-[#00572f] group-hover:text-white transition-colors duration-300">
                        <ProdIcon className="w-4.5 h-4.5 stroke-[1.8]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-extrabold text-[#153526] group-hover:text-[#00572f] transition-colors">
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#59675f] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE OUR METAL SCRAP */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#eff8f1] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Photo */}
            <div className="lg:col-span-5">
              <div className="relative h-[380px] sm:h-[450px] rounded-xl overflow-hidden shadow-[0_16px_40px_rgba(0,60,35,0.16)] border border-[#d9e5dd] group">
                <Image
                  src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=900&q=86"
                  alt="Recycled metal bales"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Reasons */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#00572f] mb-1">
                  Why Choose
                </p>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#153526]">
                  Our Metal Scrap?
                </h2>
                <div className="w-12 h-1 bg-[#ffc600] rounded-full mt-3" />
              </div>

              <div className="space-y-4 pt-2">
                {reasons.map((r) => {
                  const ReasonIcon = r.icon;
                  return (
                    <div
                      key={r.title}
                      className="group flex items-start gap-4 p-3.5 rounded-xl bg-white/90 border border-[#e0ece3] hover:border-[#a5c7b2] hover:shadow-md hover:bg-white transition-all duration-300"
                    >
                      <span className="w-11 h-11 rounded-xl bg-[#00572f] text-[#ffc600] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-300">
                        <ReasonIcon className="w-5 h-5 stroke-[1.8]" />
                      </span>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-[#153526]">
                          {r.title}
                        </h3>
                        <p className="text-xs text-[#59675f] mt-0.5 leading-relaxed">
                          {r.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section id="industries" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-black uppercase tracking-[0.15em] text-[#00572f] mb-1">
              Industries We Serve
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#153526]">
              Industries We Serve
            </h2>
            <div className="w-14 h-1 bg-[#ffc600] rounded-full mx-auto mt-3 animate-pulse-dash" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const IndIcon = ind.icon;
              return (
                <article
                  key={ind.name}
                  className="group bg-[#f3f7f4] rounded-xl overflow-hidden border border-[#d9e5dd] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={ind.image}
                      alt={ind.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/95 backdrop-blur-md text-[#00572f] flex items-center justify-center shadow-xs">
                      <IndIcon className="w-4.5 h-4.5 stroke-[1.8]" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-extrabold text-[#153526] mb-1 group-hover:text-[#00572f] transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-[#59675f]">{ind.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. DOWNLOAD DETAILS BAR */}
      <div className="bg-[#edf5ef] border-y border-[#d9e5dd] py-5 text-center">
        <button
          type="button"
          onClick={handleDownloadSpecs}
          className="group inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-[#00572f] hover:text-[#ffc600] transition-colors cursor-pointer"
        >
          <Download className="w-4.5 h-4.5 text-[#00572f] group-hover:text-[#ffc600] group-hover:translate-y-0.5 transition-all" />
          <span>Download Product Specifications &amp; Chemical Assay</span>
        </button>
      </div>

      {/* Snackbar feedback */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={4000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setToastOpen(false)}
          severity={toastSeverity}
          sx={{ bgcolor: "#003c23", color: "#fff" }}
        >
          {toastMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
