"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

export default function MetalScrapView() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 70, y: 40 });

  // Toast notification state
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState<"success" | "info">("success");

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
      desc: "Recycled steel for construction, automotive and manufacturing applications worldwide.",
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=500&q=82",
    },
    {
      title: "Aluminium Talk Scrap",
      desc: "Mixed aluminium sheets ideal for secondary smelting, recycling, and remelting mills.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=82",
    },
    {
      title: "Copper Scrap",
      desc: "High-grade copper cathode & wire scrap for electrical, plumbing, and industrial fabrication.",
      image: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=500&q=82",
    },
    {
      title: "Brass Scrap",
      desc: "Recycled yellow and red brass for precision hardware, plumbing fittings, and decorative cast.",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=500&q=82",
    },
    {
      title: "Aluminium Scrap",
      desc: "Lightweight, corrosion-resistant alloy materials ready for high-yield industrial reprocessing.",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=500&q=82",
    },
    {
      title: "Non Ferros Scrap",
      desc: "Pure and mixed non-ferrous metals curated for foundries, smelters, and global processors.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=82",
    },
    {
      title: "Zorba Scrap",
      desc: "Shredded, pre-sorted non-ferrous metallics predominantly aluminium for cost-effective casting.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=82",
    },
    {
      title: "Zurik Scrap",
      desc: "Stainless steel scrap containing mixed non-ferrous metals recovered from shredding.",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=500&q=82",
    },
  ];

  const reasons = [
    {
      icon: "⬡",
      title: "Wide Variety of Metal Scrap",
      desc: "Ferrous and non-ferrous scrap sourced to meet specific international grade standards.",
    },
    {
      icon: "♧",
      title: "Sustainability & Recycling",
      desc: "Supporting a circular economy and responsible global recycling ecosystems.",
    },
    {
      icon: "✓",
      title: "Strict Quality Control",
      desc: "Radiation checked, moisture inspected, and certified prior to port departures.",
    },
    {
      icon: "🚚",
      title: "Reliable Sourcing & Logistics",
      desc: "Trusted international suppliers and streamlined freight for guaranteed on-time delivery.",
    },
    {
      icon: "$",
      title: "Cost-Effective & Efficient",
      desc: "Competitive ISRI-benchmarked pricing delivering strong value for business margins.",
    },
  ];

  const industries = [
    {
      name: "Steel Manufacturing",
      desc: "Recycled metal for raw melt production.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=85",
    },
    {
      name: "Automotive Industry",
      desc: "High-grade structural metal for components.",
      image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=600&q=85",
    },
    {
      name: "Construction & Infrastructure",
      desc: "Essential rebar and alloy inputs for building.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=85",
    },
    {
      name: "Electronics & Electrical",
      desc: "Refined conductive metals for components.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=85",
    },
    {
      name: "Aerospace & Marine",
      desc: "High-durability precision alloy scrap.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=85",
    },
    {
      name: "& Many More",
      desc: "Custom sourcing for global foundries.",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=85",
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
          <p className="text-xs font-black uppercase tracking-[0.16em] text-white/90 mb-1 leading-snug">
            Quality Recycling <br />
            for a Better Tomorrow
          </p>
          <div className="w-14 h-1 bg-[#ffc600] rounded-full my-3" />
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-3 leading-none drop-shadow-md">
            Metal <span className="text-[#ffc600]">Scrap</span>
          </h1>
          <nav className="text-xs sm:text-sm text-emerald-100 font-medium flex items-center gap-2">
            <Link href="/" className="hover:text-[#ffc600] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#products" className="hover:text-[#ffc600] transition-colors">
              Import
            </Link>
            <span>/</span>
            <span className="text-[#ffc600] font-bold">Metal Scrap</span>
          </nav>
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
                We import high-quality metal scrap from trusted global suppliers, ensuring consistent quality and reliable supply for various industries. Our metal scrap is sourced responsibly, supporting sustainability and circular recycling efforts worldwide.
              </p>

              <p className="text-sm sm:text-base text-[#59675f] leading-relaxed">
                We deal in ferrous and non-ferrous metal scrap, with an unwavering commitment to quality, ethical sourcing, and adherence to ISRI international specifications.
              </p>

              <div className="pt-2">
                <Button
                  variant="contained"
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  sx={{
                    bgcolor: "#ffc600",
                    color: "#163821",
                    fontWeight: 900,
                    fontSize: "0.78rem",
                    px: 3.5,
                    py: 1.3,
                    borderRadius: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    boxShadow: "0 8px 22px rgba(255, 198, 0, 0.3)",
                    "&:hover": {
                      bgcolor: "#e6b000",
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 28px rgba(0, 59, 35, 0.25)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  Contact Us →
                </Button>
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
      <section id="products" className="py-16 sm:py-24 bg-[#edf6f0] border-y border-[#d9e5dd]">
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
              High-quality metal scrap for diverse industrial requirements worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {products.map((p) => (
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
                  <h3 className="text-base sm:text-lg font-extrabold text-[#153526] mb-1 group-hover:text-[#00572f] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#59675f] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </article>
            ))}
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
                {reasons.map((r) => (
                  <div key={r.title} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/80 transition-colors">
                    <span className="w-10 h-10 rounded-full bg-[#00572f] text-[#ffc600] flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">
                      {r.icon}
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
                ))}
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
            {industries.map((ind) => (
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
                </div>
                <div className="p-5">
                  <h3 className="text-base font-extrabold text-[#153526] mb-1">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-[#59675f]">
                    {ind.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DOWNLOAD DETAILS BAR */}
      <div className="bg-[#edf5ef] border-y border-[#d9e5dd] py-5 text-center">
        <button
          type="button"
          onClick={handleDownloadSpecs}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-[#00572f] hover:text-[#ffc600] transition-colors cursor-pointer"
        >
          <span>▣</span>
          <span>Download Product Specifications &amp; Chemical Assay</span>
        </button>
      </div>

      {/* 7. LATEST NEWS */}
      <section id="news" className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#f6faf7] p-6 sm:p-8 rounded-2xl border border-[#d9e5dd]">
            <div className="md:col-span-4">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-[#00572f] mb-1">
                From Our Blog
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153526]">
                Latest News
              </h2>
              <div className="w-12 h-1 bg-[#ffc600] rounded-full mt-2.5" />
            </div>

            <div className="md:col-span-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-full sm:w-44 h-32 shrink-0 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=80"
                  alt="Industry news"
                  fill
                  sizes="(max-width: 640px) 100vw, 176px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#153526] hover:text-[#00572f] transition-colors cursor-pointer">
                  Why NGR Impex is Your Trusted Partner for High-Quality Products
                </h3>
                <p className="text-xs text-[#59675f] mt-1.5">
                  Insights into how sustainable scrap sourcing optimizes melt cycles and protects operating margins for modern foundries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CALLOUT BANNER */}
      <section
        className="py-12 sm:py-16 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(239, 247, 241, 0.95) 0%, rgba(239, 247, 241, 0.85) 60%, rgba(239, 247, 241, 0.6) 100%), url('https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1500&q=85')`,
          backgroundPosition: "right center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153526]">
              NGR Impex — Import &amp; Export
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-[#59675f] mt-1">
              ☎ +91 63825 84350 &nbsp; · &nbsp; ✉ exim@ngrimpex.in
            </p>
          </div>
          <Button
            variant="contained"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            sx={{
              bgcolor: "#00572f",
              color: "#ffffff",
              fontWeight: 800,
              fontSize: "0.8rem",
              px: 3.5,
              py: 1.2,
              borderRadius: "6px",
              textTransform: "uppercase",
              "&:hover": { bgcolor: "#003c23" },
            }}
          >
            Inquire Now →
          </Button>
        </div>
      </section>

      {/* Snackbar feedback */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={4000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={() => setToastOpen(false)} severity={toastSeverity} sx={{ bgcolor: "#003c23", color: "#fff" }}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
