"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert,
  Chip,
} from "@mui/material";

export default function Home() {
  // Hero mouse spotlight coordinates
  const heroRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

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

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setToastSeverity("info");
      setToastMessage("Please fill in all required fields.");
      setToastOpen(true);
      return;
    }

    setToastSeverity("success");
    setToastMessage("Thank you! Your inquiry has been successfully sent to NGR Impex.");
    setToastOpen(true);
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      inquiryType: "",
      message: "",
    });
  };

  return (
    <div className="w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section
        id="home"
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-[460px] sm:min-h-[540px] lg:min-h-[620px] flex items-center justify-center text-center text-white overflow-hidden"
      >
        {/* Animated Background Image */}
        <div
          className="absolute -inset-4 z-0 bg-cover bg-center animate-hero-drift pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 61, 42, 0.78), rgba(0, 41, 29, 0.6), rgba(0, 49, 32, 0.8)), url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1800&q=88')`,
          }}
        />

        {/* Dynamic Spotlight Glow */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255, 208, 0, 0.16) 0%, transparent 40%), linear-gradient(180deg, transparent 60%, rgba(0, 45, 29, 0.65) 100%)`,
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 animate-hero-enter">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#ffd000] tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#ffd000] animate-ping" />
            Leading International Exim Enterprise
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 sm:mb-6 text-balance drop-shadow-md">
            Global Trade. <br className="hidden sm:inline" />
            <span className="text-[#ffd000]">Trusted Quality.</span>
          </h1>

          <p className="text-base sm:text-xl lg:text-2xl text-emerald-50/90 font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
            Importing Essentials. Exporting Excellence.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Button
              variant="contained"
              onClick={() => {
                const el = document.getElementById("products");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
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
              Explore Products →
            </Button>

            <Button
              variant="outlined"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
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
              Partner With Us
            </Button>
          </div>

          {/* Floating Scroll Indicator */}
          <div>
            <a
              href="#about"
              className="inline-flex w-12 h-12 rounded-full border-2 border-white/80 items-center justify-center text-xl text-white hover:bg-white hover:text-[#005b32] animate-float transition-colors shadow-lg"
              aria-label="Scroll to About section"
            >
              ⌄
            </a>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Copy */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#005b32] mb-1">
                  About NGR Impex
                </p>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#173e2a] leading-tight">
                  Quality Products, <br />
                  <span className="text-[#005b32]">Trusted Global Source</span>
                </h2>
                <div className="w-12 h-1 bg-[#ffd000] rounded-full mt-3 animate-pulse-dash origin-left" />
              </div>

              <p className="text-sm sm:text-base text-[#5f6d65] leading-relaxed">
                NGR Impex is a dynamic import-export company engaged in global trade of agricultural commodities, industrial raw materials, chemicals, and polymer solutions. We bridge reliable international suppliers with growing markets, ensuring quality, consistency, and long-term partnerships.
              </p>

              <p className="text-sm sm:text-base text-[#5f6d65] leading-relaxed">
                With a customer-centric approach and a steadfast commitment to integrity, NGR Impex delivers sustainable trade solutions that create enduring value across diverse industries and geographies.
              </p>

              <div className="pt-2">
                <Button
                  variant="contained"
                  onClick={() => {
                    const el = document.getElementById("products");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  sx={{
                    bgcolor: "#ffd000",
                    color: "#143c28",
                    fontWeight: 800,
                    fontSize: "0.78rem",
                    px: 3,
                    py: 1.2,
                    borderRadius: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    "&:hover": {
                      bgcolor: "#e6bc00",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 18px rgba(0, 59, 35, 0.2)",
                    },
                    transition: "all 0.2s",
                  }}
                >
                  View More →
                </Button>
              </div>
            </div>

            {/* Right Column: Visual Card */}
            <div className="relative group">
              <div className="relative min-h-[340px] sm:min-h-[400px] rounded-xl overflow-hidden shadow-[0_15px_35px_rgba(0,60,36,0.18)] border border-[#d9e4dc] shine-box">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1100&q=86"
                  alt="Global Sourcing Cargo Hub"
                  className="w-full h-full object-cover min-h-[340px] sm:min-h-[400px] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003a24]/90 via-[#003a24]/30 to-transparent" />

                <div className="absolute right-6 bottom-6 text-right text-white select-none">
                  <p className="text-lg sm:text-xl font-black leading-tight tracking-wide drop-shadow-md">
                    GLOBAL<br />
                    SOURCING<br />
                    FOR A BRIGHTER<br />
                    TOMORROW
                  </p>
                  <div className="w-10 h-1 bg-[#ffd000] ml-auto mt-2.5 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS SECTION */}
      <section id="products" className="py-16 sm:py-24 bg-[#f6faf7] border-y border-[#d9e4dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-black uppercase tracking-[0.15em] text-[#005b32] mb-1">
              Our Products
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#173e2a]">
              Global Products for a Better Tomorrow
            </h2>
            <div className="w-12 h-1 bg-[#ffd000] rounded-full mx-auto mt-3 animate-pulse-dash" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Export Products Group */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#d9e4dc] shadow-sm lg:border-r lg:border-dashed lg:border-emerald-300">
              <div className="inline-block px-6 py-2 bg-[#005b32] text-white text-xs font-extrabold tracking-wider uppercase rounded-md shadow-sm mb-6 text-center w-full sm:w-auto">
                Export Products
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Red Chilli */}
                <article className="group bg-white rounded-lg border border-[#d9e4dc] overflow-hidden shadow-sm hover:shadow-md hover:border-[#a5c7b2] hover:-translate-y-1.5 transition-all duration-300">
                  <div className="h-36 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=500&q=80"
                      alt="Red chilli"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <b className="block text-xs sm:text-sm font-bold text-[#173e2a] truncate">
                      Red Chilli
                    </b>
                    <span className="text-[0.68rem] text-[#5f6d65] font-medium">Export Grade</span>
                  </div>
                </article>

                {/* Mango Pulp */}
                <article className="group bg-white rounded-lg border border-[#d9e4dc] overflow-hidden shadow-sm hover:shadow-md hover:border-[#a5c7b2] hover:-translate-y-1.5 transition-all duration-300">
                  <div className="h-36 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=500&q=80"
                      alt="Mangoes & Pulp"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <b className="block text-xs sm:text-sm font-bold text-[#173e2a] truncate">
                      Mango Pulp
                    </b>
                    <span className="text-[0.68rem] text-[#5f6d65] font-medium">Totapuri &amp; Alphonso</span>
                  </div>
                </article>

                {/* Sesame Seeds */}
                <article className="group bg-white rounded-lg border border-[#d9e4dc] overflow-hidden shadow-sm hover:shadow-md hover:border-[#a5c7b2] hover:-translate-y-1.5 transition-all duration-300">
                  <div className="h-36 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80"
                      alt="Sesame seeds"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <b className="block text-xs sm:text-sm font-bold text-[#173e2a] truncate">
                      Sesame Seeds
                    </b>
                    <span className="text-[0.68rem] text-[#5f6d65] font-medium">Natural &amp; Hulled</span>
                  </div>
                </article>
              </div>
            </div>

            {/* Import Products Group */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#d9e4dc] shadow-sm">
              <div className="inline-block px-6 py-2 bg-[#8ea900] text-white text-xs font-extrabold tracking-wider uppercase rounded-md shadow-sm mb-6 text-center w-full sm:w-auto">
                Import Products
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Metal Scrap */}
                <article className="group bg-white rounded-lg border border-[#d9e4dc] overflow-hidden shadow-sm hover:shadow-md hover:border-[#a5c7b2] hover:-translate-y-1.5 transition-all duration-300">
                  <div className="h-36 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1611288875785-24b9062e2bcb?auto=format&fit=crop&w=500&q=80"
                      alt="Metal scrap"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <b className="block text-xs sm:text-sm font-bold text-[#173e2a] truncate">
                      Metal Scrap
                    </b>
                    <span className="text-[0.68rem] text-[#5f6d65] font-medium">Ferrous &amp; Non-Ferrous</span>
                  </div>
                </article>

                {/* Acids */}
                <article className="group bg-white rounded-lg border border-[#d9e4dc] overflow-hidden shadow-sm hover:shadow-md hover:border-[#a5c7b2] hover:-translate-y-1.5 transition-all duration-300">
                  <div className="h-36 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500&q=80"
                      alt="Laboratory acids"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <b className="block text-xs sm:text-sm font-bold text-[#173e2a] truncate">
                      Acids
                    </b>
                    <span className="text-[0.68rem] text-[#5f6d65] font-medium">Industrial &amp; Tech Grade</span>
                  </div>
                </article>

                {/* Plastic Solutions */}
                <article className="group bg-white rounded-lg border border-[#d9e4dc] overflow-hidden shadow-sm hover:shadow-md hover:border-[#a5c7b2] hover:-translate-y-1.5 transition-all duration-300">
                  <div className="h-36 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&w=500&q=80"
                      alt="Plastic granules"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <b className="block text-xs sm:text-sm font-bold text-[#173e2a] truncate">
                      Plastic Solutions
                    </b>
                    <span className="text-[0.68rem] text-[#5f6d65] font-medium">Polymers &amp; Resins</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES WE SERVE */}
      <section
        id="industries"
        className="py-16 sm:py-24 text-white relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 71, 41, 0.94), rgba(0, 96, 60, 0.93)), url('https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1700&q=70')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-xs font-black uppercase tracking-[0.15em] text-[#ffd000] mb-1">
              Industries We Serve
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Sectors Served
            </h2>
            <div className="w-12 h-1 bg-[#ffd000] rounded-full mx-auto mt-3 animate-pulse-dash" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
            {[
              { icon: "⚗", name: "Chloro Alkali & Chemical Synthesis" },
              { icon: "♧", name: "Food & Beverages" },
              { icon: "◇", name: "Pharmaceuticals" },
              { icon: "⚛", name: "Polymers" },
              { icon: "▥", name: "Textiles" },
              { icon: "♙", name: "Cosmetics & Personal Care" },
              { icon: "▣", name: "Flexible Packaging" },
              { icon: "◌", name: "Soap & Detergent" },
              { icon: "♢", name: "Water Treatment" },
              { icon: "⚙", name: "Heavy Engineering" },
            ].map((sector) => (
              <div
                key={sector.name}
                className="group relative p-4 sm:p-5 rounded-lg border border-white/25 bg-white/5 backdrop-blur-sm text-center flex flex-col items-center justify-center min-h-[125px] hover:bg-white/15 hover:border-white/50 hover:-translate-y-1.5 transition-all duration-300 cursor-default overflow-hidden"
              >
                <span className="text-2xl sm:text-3xl text-[#ffd000] group-hover:scale-115 transition-transform duration-300 mb-2">
                  {sector.icon}
                </span>
                <b className="text-xs font-bold text-white leading-tight">
                  {sector.name}
                </b>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR ADVANTAGE (WHY CHOOSE NGR IMPEX) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-black uppercase tracking-[0.15em] text-[#005b32] mb-1">
              Our Advantage
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#173e2a]">
              Why Choose NGR Impex
            </h2>
            <div className="w-12 h-1 bg-[#ffd000] rounded-full mx-auto mt-3 animate-pulse-dash" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "♦",
                title: "Premium Quality",
                desc: "Sourced and supplied with rigorous international quality standards and lab verifications.",
              },
              {
                icon: "◇",
                title: "Reliable & Consistent Supply",
                desc: "Dependable multi-modal logistics network ensuring prompt, scheduled deliveries.",
              },
              {
                icon: "▤",
                title: "Competitive Pricing",
                desc: "Transparent commercial structures maximizing bottom-line value for enduring client partnerships.",
              },
              {
                icon: "♟",
                title: "Industry Expertise",
                desc: "Deep trade intelligence, customs proficiency, and expansive cross-border supplier networks.",
              },
            ].map((adv) => (
              <div
                key={adv.title}
                className="p-6 rounded-xl bg-[#f6f9f6] border border-[#d9e4dc] text-center hover:bg-white hover:shadow-lg hover:border-[#a5c7b2] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center text-xl text-[#005b32] font-black">
                  {adv.icon}
                </div>
                <b className="block text-base font-extrabold text-[#173e2a] mb-2">
                  {adv.title}
                </b>
                <p className="text-xs sm:text-sm text-[#5f6d65] leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOCUS AREAS */}
      <section id="focus" className="py-16 sm:py-24 bg-[#f6faf7] border-y border-[#d9e4dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-black uppercase tracking-[0.15em] text-[#005b32] mb-1">
              Focus Areas
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#173e2a]">
              We Prefer Quality
            </h2>
            <div className="w-12 h-1 bg-[#ffd000] rounded-full mx-auto mt-3 animate-pulse-dash" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <article className="group bg-white rounded-xl border border-[#d9e4dc] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#a5c7b2] hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80"
                  alt="Construction and coating"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <b className="block text-base font-bold text-[#173e2a] mb-1">
                  Coating &amp; Construction
                </b>
                <p className="text-xs text-[#5f6d65]">
                  Premium pigments, industrial binders, and specialty raw materials for architectural finishes and structural works.
                </p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="group bg-white rounded-xl border border-[#d9e4dc] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#a5c7b2] hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&w=700&q=80"
                  alt="Plastic and rubber manufacturing"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <b className="block text-base font-bold text-[#173e2a] mb-1">
                  Plastic &amp; Rubber
                </b>
                <p className="text-xs text-[#5f6d65]">
                  High-grade polymers, synthetic elastomeric compounds, and masterbatches tailored for manufacturing precision.
                </p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="group bg-white rounded-xl border border-[#d9e4dc] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#a5c7b2] hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=700&q=80"
                  alt="Industrial plant facility"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <b className="block text-base font-bold text-[#173e2a] mb-1">
                  Industrial
                </b>
                <p className="text-xs text-[#5f6d65]">
                  Heavy chemical inputs, specialty mineral reagents, and industrial grade compounds that empower core manufacturing lines.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 7. OUR PROCESS / TIMELINE */}
      <section
        id="process"
        className="py-16 sm:py-24 text-white relative"
        style={{
          background: "linear-gradient(110deg, #004b2c 0%, #00693a 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-black uppercase tracking-[0.15em] text-[#ffd000] mb-1">
              Our Process
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white max-w-2xl mx-auto">
              We make this possible through business processes that include
            </h2>
            <div className="w-12 h-1 bg-[#ffd000] rounded-full mx-auto mt-3 animate-pulse-dash" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="group relative bg-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-14 h-14 rounded-full bg-white text-[#005b32] font-black text-xl flex items-center justify-center border-4 border-emerald-200/50 mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                01
              </div>
              <b className="block text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                Adherence to high quality systems
              </b>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Stringent inspection and batch validation benchmarks at source points to guarantee international grade compliance.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group relative bg-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-14 h-14 rounded-full bg-[#ffd000] text-[#143c28] font-black text-xl flex items-center justify-center border-4 border-yellow-200/50 mb-5 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-md">
                02
              </div>
              <b className="block text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                Well-functioning distribution networks &amp; contract sites
              </b>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Streamlined multi-hub transit and processing alliances across key port terminals ensuring rapid cargo turnarounds.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group relative bg-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-14 h-14 rounded-full bg-white text-[#005b32] font-black text-xl flex items-center justify-center border-4 border-emerald-200/50 mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                03
              </div>
              <b className="block text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                Strategic relationships with raw material producers
              </b>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Long-standing direct producer agreements that safeguard competitive volume pricing and unbroken year-round supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section
        className="py-14 sm:py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, #ffd317 0%, rgba(255, 211, 23, 0.88) 60%, rgba(255, 211, 23, 0.45) 100%), url('https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=1500&q=86')`,
          backgroundPosition: "right center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-[#143c28] leading-tight">
              Build Your Global Supply Partnership
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#1f4a33] leading-relaxed">
              Let’s create sustainable growth together. Partner with NGR Impex for reliable products, competitive pricing, and long-term value.
            </p>
            <div className="pt-2">
              <Button
                variant="contained"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                sx={{
                  bgcolor: "#005b32",
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  px: 3.5,
                  py: 1.3,
                  borderRadius: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  boxShadow: "0 6px 18px rgba(0, 91, 50, 0.3)",
                  "&:hover": {
                    bgcolor: "#004023",
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 22px rgba(0, 63, 38, 0.35)",
                  },
                  transition: "all 0.2s",
                }}
              >
                Contact Us →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CONTACT SECTION */}
      <section id="contact" className="py-16 sm:py-24 bg-[#fbfcfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Details (Left) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#005b32] mb-1">
                  Get in Touch
                </p>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#173e2a]">
                  Let’s Grow Together
                </h2>
                <div className="w-12 h-1 bg-[#ffd000] rounded-full mt-3 animate-pulse-dash" />
              </div>

              <p className="text-sm sm:text-base text-[#5f6d65] leading-relaxed">
                We are here to answer your trade queries and explore new supply opportunities. Reach out to us for product quotes, custom sourcing, or strategic partnerships.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white border border-[#d9e4dc] shadow-sm">
                  <span className="text-xl text-[#005b32]">📍</span>
                  <div>
                    <b className="block text-xs font-bold text-[#173e2a] uppercase tracking-wide">
                      Head Office
                    </b>
                    <span className="text-xs text-[#5f6d65]">
                      No. 12, Exporters’ Avenue, Chennai, Tamil Nadu, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white border border-[#d9e4dc] shadow-sm">
                  <span className="text-xl text-[#005b32]">☎</span>
                  <div>
                    <b className="block text-xs font-bold text-[#173e2a] uppercase tracking-wide">
                      Direct Phone
                    </b>
                    <a
                      href="tel:+916382584350"
                      className="text-xs text-[#5f6d65] hover:text-[#005b32] font-semibold"
                    >
                      +91 63825 84350
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white border border-[#d9e4dc] shadow-sm">
                  <span className="text-xl text-[#005b32]">✉</span>
                  <div>
                    <b className="block text-xs font-bold text-[#173e2a] uppercase tracking-wide">
                      Official Email
                    </b>
                    <a
                      href="mailto:exim@ngrimpex.in"
                      className="text-xs text-[#5f6d65] hover:text-[#005b32] font-semibold"
                    >
                      exim@ngrimpex.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white border border-[#d9e4dc] shadow-sm">
                  <span className="text-xl text-[#005b32]">⏱</span>
                  <div>
                    <b className="block text-xs font-bold text-[#173e2a] uppercase tracking-wide">
                      Business Hours
                    </b>
                    <span className="text-xs text-[#5f6d65]">
                      Monday – Saturday: 9:00 AM – 6:00 PM (IST)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form (Right) */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmitInquiry}
                className="bg-white p-6 sm:p-8 rounded-xl border border-[#d9e4dc] shadow-[0_7px_25px_rgba(0,58,33,0.08)] space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextField
                    fullWidth
                    label="Your Name *"
                    variant="outlined"
                    size="small"
                    value={formData.name}
                    onChange={(e) => handleFormChange("name", e.target.value)}
                    required
                  />

                  <TextField
                    fullWidth
                    label="Your Email *"
                    type="email"
                    variant="outlined"
                    size="small"
                    value={formData.email}
                    onChange={(e) => handleFormChange("email", e.target.value)}
                    required
                  />

                  <TextField
                    fullWidth
                    label="Company Name"
                    variant="outlined"
                    size="small"
                    value={formData.company}
                    onChange={(e) => handleFormChange("company", e.target.value)}
                  />

                  <TextField
                    fullWidth
                    label="Phone Number"
                    type="tel"
                    variant="outlined"
                    size="small"
                    value={formData.phone}
                    onChange={(e) => handleFormChange("phone", e.target.value)}
                  />
                </div>

                <FormControl fullWidth size="small">
                  <InputLabel id="inquiry-type-label">Select Inquiry Type *</InputLabel>
                  <Select
                    labelId="inquiry-type-label"
                    value={formData.inquiryType}
                    label="Select Inquiry Type *"
                    onChange={(e) => handleFormChange("inquiryType", e.target.value)}
                  >
                    <MenuItem value="Export products">Export Products</MenuItem>
                    <MenuItem value="Import products">Import Products</MenuItem>
                    <MenuItem value="Partnership">Partnership &amp; Distribution</MenuItem>
                    <MenuItem value="General Inquiry">General Trade Inquiry</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  fullWidth
                  label="Your Message *"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={formData.message}
                  onChange={(e) => handleFormChange("message", e.target.value)}
                  required
                  placeholder="Tell us about the products, quantities, destination port, or requirements..."
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    bgcolor: "#ffd000",
                    color: "#143c28",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    py: 1.4,
                    borderRadius: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    boxShadow: "0 4px 14px rgba(255, 208, 0, 0.4)",
                    "&:hover": {
                      bgcolor: "#e6bc00",
                      transform: "translateY(-1px)",
                      boxShadow: "0 8px 20px rgba(0, 59, 35, 0.2)",
                    },
                    transition: "all 0.2s",
                  }}
                >
                  Send Inquiry →
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Form Submission Toast Notification */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={5000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setToastOpen(false)}
          severity={toastSeverity}
          sx={{
            width: "100%",
            bgcolor: toastSeverity === "success" ? "#063f28" : "#173e2a",
            color: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          {toastMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
