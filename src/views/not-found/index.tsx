"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@mui/material";

export default function NotFoundView() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 40 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y });
  };

  const exportLinks = [
    { title: "Alphonso & Totapuri Mango Pulp", href: "/export/mango-pulp", icon: "🥭", tag: "Export Grade" },
    { title: "Premium Quality Rice", href: "/export/quality-rice", icon: "🌾", tag: "Basmati & Non-Basmati" },
    { title: "Dried Red Chilli", href: "/export/red-chilli", icon: "🌶️", tag: "Teja S17 & Sannam" },
    { title: "Silage Making Solutions", href: "/export/silage-making", icon: "🌽", tag: "Animal Feed Nutrition" },
    { title: "Natural Sesame Seeds", href: "/export/sesame-seed", icon: "🌱", tag: "Hulled & Natural" },
  ];

  const importLinks = [
    { title: "Ferrous & Non-Ferrous Metal Scrap", href: "/import/metal-scrap", icon: "⚙️", tag: "Industrial Melt" },
    { title: "Industrial Acids & Reagents", href: "/import/acids", icon: "🧪", tag: "Chemical Processing" },
    { title: "Cosmetic Chemicals & Actives", href: "/import/cosmetic-chemical", icon: "🧴", tag: "Personal Care" },
  ];

  return (
    <div className="w-full overflow-hidden bg-white text-[#173e2a]">
      {/* 1. HERO SECTION */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-[520px] sm:min-h-[580px] flex items-center justify-center text-center text-white overflow-hidden py-16 sm:py-24"
      >
        {/* Animated Background */}
        <div
          className="absolute -inset-4 z-0 bg-cover bg-center animate-hero-drift pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 48, 28, 0.95) 0%, rgba(0, 71, 41, 0.88) 50%, rgba(0, 41, 26, 0.96) 100%), url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1800&q=88')`,
          }}
        />

        {/* Dynamic Spotlight Glow */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255, 208, 0, 0.22) 0%, transparent 40%), linear-gradient(180deg, transparent 60%, rgba(0, 41, 26, 0.7) 100%)`,
          }}
        />

        {/* Subtle Decorative Grid Pattern */}
        <div
          className="absolute inset-0 z-[1] opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 animate-hero-enter">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-[#ffd000] tracking-widest uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#ffd000] animate-ping" />
            404 Error — Route Not Found
          </div>

          {/* 404 Number Graphic */}
          <div className="select-none mb-2">
            <span
              className="text-7xl sm:text-9xl font-black tracking-tight leading-none text-transparent bg-clip-text drop-shadow-lg"
              style={{
                backgroundImage: "linear-gradient(180deg, #ffffff 30%, #ffd000 100%)",
              }}
            >
              404
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
            Lost in Transit? Page Not Found
          </h1>

          <div className="w-16 h-1 bg-[#ffd000] rounded-full mx-auto mb-5 animate-pulse-dash" />

          <p className="text-sm sm:text-base lg:text-lg text-emerald-50/90 font-medium max-w-xl mx-auto mb-8 leading-relaxed">
            The link you followed may be broken, or the commodity page might have been relocated.
            Navigate back to our homepage or explore our global trade divisions below.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Button
              component={Link}
              href="/"
              variant="contained"
              className="btn-shine"
              sx={{
                bgcolor: "#ffd000",
                color: "#143c28",
                fontWeight: 800,
                fontSize: "0.85rem",
                px: 3.5,
                py: 1.3,
                borderRadius: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                boxShadow: "0 6px 20px rgba(255, 208, 0, 0.4)",
                "&:hover": {
                  bgcolor: "#e6bc00",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 25px rgba(0, 59, 35, 0.3)",
                },
                transition: "all 0.2s ease-in-out",
              }}
            >
              ← Back to Homepage
            </Button>

            <Button
              component={Link}
              href="/#products"
              variant="outlined"
              sx={{
                borderColor: "#ffffff",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.85rem",
                px: 3.5,
                py: 1.3,
                borderRadius: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                backdropFilter: "blur(6px)",
                "&:hover": {
                  borderColor: "#ffd000",
                  color: "#ffd000",
                  bgcolor: "rgba(255, 255, 255, 0.08)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.2s ease-in-out",
              }}
            >
              Explore Products
            </Button>

            <Button
              component={Link}
              href="/#contact"
              variant="text"
              sx={{
                color: "#ffd000",
                fontWeight: 700,
                fontSize: "0.85rem",
                px: 2.5,
                py: 1.3,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                "&:hover": {
                  color: "#ffffff",
                  bgcolor: "rgba(255, 255, 255, 0.06)",
                },
                transition: "all 0.2s ease-in-out",
              }}
            >
              Contact Support →
            </Button>
          </div>
        </div>
      </section>

      {/* 2. QUICK DESTINATIONS DIRECTORY */}
      <section className="py-16 sm:py-20 bg-[#f7faf7] border-y border-[#d9e4dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#005b32] mb-1">
              Popular Destinations
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#173e2a]">
              Discover Our Trade Portfolios
            </h2>
            <div className="w-14 h-1 bg-[#ffd000] rounded-full mx-auto mt-3 animate-pulse-dash" />
            <p className="text-xs sm:text-sm text-[#5f6d65] mt-2 max-w-lg mx-auto">
              Looking for a particular product? Click any of the categories below to jump directly to our catalog.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Export Division Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#d9e4dc] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#edf2ee]">
                <div className="w-10 h-10 rounded-lg bg-[#005b32] text-white flex items-center justify-center text-xl font-bold shadow-sm">
                  ↗
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#173e2a]">Export Division</h3>
                  <p className="text-xs text-[#5f6d65]">Agricultural commodities, grains, purees &amp; forage</p>
                </div>
              </div>

              <div className="space-y-3">
                {exportLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between p-3 rounded-xl border border-[#e5ece7] hover:border-[#005b32] hover:bg-[#f3f8f4] transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <span className="block text-sm font-bold text-[#173e2a] group-hover:text-[#005b32] transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[0.7rem] text-[#5f6d65]">{item.tag}</span>
                      </div>
                    </div>
                    <span className="text-sm font-extrabold text-[#005b32] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Import Division Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#d9e4dc] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#edf2ee]">
                  <div className="w-10 h-10 rounded-lg bg-[#8ea900] text-white flex items-center justify-center text-xl font-bold shadow-sm">
                    ↙
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#173e2a]">Import Division</h3>
                    <p className="text-xs text-[#5f6d65]">Industrial raw materials, metals &amp; chemicals</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {importLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center justify-between p-3 rounded-xl border border-[#e5ece7] hover:border-[#8ea900] hover:bg-[#fbfdf2] transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <span className="block text-sm font-bold text-[#173e2a] group-hover:text-[#6f8500] transition-colors">
                            {item.title}
                          </span>
                          <span className="text-[0.7rem] text-[#5f6d65]">{item.tag}</span>
                        </div>
                      </div>
                      <span className="text-sm font-extrabold text-[#8ea900] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Corporate Pages Mini Card */}
              <div className="mt-6 pt-5 border-t border-[#edf2ee] bg-[#f8fbf8] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-center sm:text-left">
                  <span className="text-xs font-bold text-[#173e2a] block">Looking for Corporate Info?</span>
                  <span className="text-[0.72rem] text-[#5f6d65]">Learn about our company legacy, mission &amp; values.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    component={Link}
                    href="/about"
                    size="small"
                    variant="outlined"
                    sx={{
                      borderColor: "#005b32",
                      color: "#005b32",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "none",
                      "&:hover": { borderColor: "#003e22", bgcolor: "#005b32/10" },
                    }}
                  >
                    About Us
                  </Button>
                  <Button
                    component={Link}
                    href="/#contact"
                    size="small"
                    variant="contained"
                    sx={{
                      bgcolor: "#005b32",
                      color: "#ffffff",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "none",
                      "&:hover": { bgcolor: "#003e22" },
                    }}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ASSISTANCE BAR */}
      <section className="py-8 bg-white border-b border-[#d9e4dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h4 className="text-sm font-bold text-[#173e2a]">Need Immediate Assistance with an Order or Inquiry?</h4>
            <p className="text-xs text-[#5f6d65] mt-0.5">Our global desk operates Monday through Saturday to assist procurement managers.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold">
            <a
              href="tel:+916382584350"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#d9e4dc] hover:border-[#005b32] hover:text-[#005b32] transition-colors"
            >
              <span>☎</span> +91 63825 84350
            </a>
            <a
              href="mailto:exim@ngrimpex.in"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#d9e4dc] hover:border-[#005b32] hover:text-[#005b32] transition-colors"
            >
              <span>✉</span> exim@ngrimpex.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
