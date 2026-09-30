"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@mui/material";

export interface MaintenanceHighlight {
  icon: string;
  title: string;
  desc: string;
}

export interface MaintenanceProps {
  productName: string;
  category: "Export" | "Import";
  tagline: string;
  description: string;
  bgImage: string;
  highlights: MaintenanceHighlight[];
  relatedProducts: { title: string; href: string; icon: string; category: string }[];
}

export default function MaintenanceView({
  productName,
  category,
  tagline,
  description,
  bgImage,
  highlights,
  relatedProducts,
}: MaintenanceProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 35 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y });
  };

  return (
    <div className="w-full overflow-hidden bg-white text-[#173e2a]">
      {/* 1. HERO SECTION */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-[560px] sm:min-h-[620px] flex items-center justify-center text-center text-white overflow-hidden py-16 sm:py-24"
      >
        {/* Animated Background with Image Drift */}
        <div
          className="absolute -inset-4 z-0 bg-cover bg-center animate-hero-drift pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 48, 28, 0.94) 0%, rgba(0, 71, 41, 0.88) 50%, rgba(0, 41, 26, 0.95) 100%), url('${bgImage}')`,
          }}
        />

        {/* Dynamic Spotlight Glow */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255, 208, 0, 0.2) 0%, transparent 40%), linear-gradient(180deg, transparent 65%, rgba(0, 41, 26, 0.75) 100%)`,
          }}
        />

        {/* Decorative Grid Pattern */}
        <div
          className="absolute inset-0 z-[1] opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-[#ffd000] tracking-widest uppercase shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffd000] animate-ping" />
            <span>{category} Portfolio · Under Scheduled Maintenance</span>
          </div>

          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#ffd000] mb-2">
            NGR Impex — {category} Division
          </p>

          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-3 leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {productName}
          </h1>

          <h2
            className="text-lg sm:text-2xl text-emerald-100 font-normal mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {tagline}
          </h2>

          <div className="w-16 h-1 bg-[#ffd000] rounded-full mx-auto mb-6 animate-pulse-dash" />

          <p className="text-sm sm:text-base text-gray-200 font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
            {description}
          </p>

          {/* Maintenance Notice Box */}
          <div className="max-w-xl mx-auto p-4 sm:p-5 rounded-2xl bg-black/25 backdrop-blur-md border border-white/15 text-left mb-8 text-xs sm:text-sm text-gray-200 shadow-xl">
            <div className="flex items-start gap-3">
              <span className="text-xl leading-none text-[#ffd000] mt-0.5">⚙</span>
              <div>
                <span className="font-bold text-white block text-sm mb-1">
                  Catalogue Specifications Update in Progress
                </span>
                <p className="text-gray-300 leading-relaxed text-xs">
                  We are updating certificate of analysis (COA) data, packaging specifications, and current spot FOB/CIF pricing for this portfolio. Commercial trade inquiries and container bookings remain active through our global trading desk.
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Button
              component={Link}
              href="/#contact"
              variant="contained"
              sx={{
                bgcolor: "#ffd000",
                color: "#003a24",
                fontWeight: 900,
                fontSize: "0.82rem",
                px: 3.5,
                py: 1.3,
                borderRadius: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                boxShadow: "0 8px 24px rgba(255, 208, 0, 0.35)",
                "&:hover": {
                  bgcolor: "#e6bc00",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 28px rgba(255, 208, 0, 0.45)",
                },
                transition: "all 0.25s ease-in-out",
              }}
            >
              Inquire via Trade Desk →
            </Button>

            <Button
              component={Link}
              href="/"
              variant="outlined"
              sx={{
                borderColor: "rgba(255, 255, 255, 0.4)",
                color: "#ffffff",
                fontWeight: 800,
                fontSize: "0.82rem",
                px: 3.5,
                py: 1.3,
                borderRadius: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                "&:hover": {
                  borderColor: "#ffd000",
                  color: "#ffd000",
                  bgcolor: "rgba(255, 208, 0, 0.08)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.25s ease-in-out",
              }}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION HIGHLIGHTS PREVIEW */}
      <section className="py-16 sm:py-20 bg-[#f7fbf8] border-b border-[#d8e5dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#005a35] mb-1">
              Portfolio Overview
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#143d29]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              What We Trade in {productName}
            </h2>
            <div className="w-12 h-1 bg-[#ffd000] rounded-full mx-auto mt-3" />
            <p className="text-xs sm:text-sm text-[#5b6c62] mt-3">
              Standard commercial specifications available for immediate global export and import contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="bg-white p-7 rounded-2xl border border-[#d8e5dc] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#004b2c] text-[#ffd000] flex items-center justify-center text-xl font-bold mb-4 shadow-sm">
                  {h.icon}
                </div>
                <h3 className="text-base font-bold text-[#143d29] mb-2">{h.title}</h3>
                <p className="text-xs sm:text-sm text-[#5b6c62] leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DIRECT CONTACT CALLOUT */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#003a24] to-[#005d36] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-extrabold uppercase text-[#ffd000] tracking-wider block">
                Urgent Container or Bulk Vessel Quotes
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Connect with our {productName} Specialist
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100 max-w-xl leading-relaxed">
                Contact our trade directors directly for technical data sheets, sample requests, and CIF/FOB port-of-destination pricing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="tel:+916382584350"
                className="w-full sm:w-auto px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-2"
              >
                <span>☎</span>
                <span>+91 63825 84350</span>
              </a>

              <a
                href="mailto:exim@ngrimpex.in"
                className="w-full sm:w-auto px-5 py-3 rounded-lg bg-[#ffd000] hover:bg-[#e6bc00] text-[#003a24] text-xs font-extrabold uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 shadow-md"
              >
                <span>✉</span>
                <span>exim@ngrimpex.in</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACTIVE PORTFOLIOS */}
      <section className="py-14 sm:py-18 bg-[#f7fbf8] border-t border-[#d8e5dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#005a35] mb-1">
                Active Catalogues
              </p>
              <h2
                className="text-xl sm:text-2xl font-bold text-[#143d29]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Explore Other Active Commodities
              </h2>
            </div>
            <Link
              href="/#products"
              className="text-xs font-bold text-[#005a35] hover:text-[#ffd000] flex items-center gap-1.5 transition-colors"
            >
              <span>View Full Commodity Directory</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedProducts.map((p, idx) => (
              <Link
                key={idx}
                href={p.href}
                className="group p-5 rounded-xl bg-white border border-[#d8e5dc] hover:border-[#005a35] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{p.icon}</span>
                    <span className="text-[0.62rem] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-[#004b2c]/10 text-[#004b2c]">
                      {p.category}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#143d29] group-hover:text-[#005a35] transition-colors mb-1">
                    {p.title}
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#005a35] flex items-center gap-1 mt-4 group-hover:translate-x-1 transition-transform">
                  <span>Explore Product</span>
                  <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
