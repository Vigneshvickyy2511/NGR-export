"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";

export default function HomeView() {
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

  // Import products expanding accordion state
  const [hoveredImportIndex, setHoveredImportIndex] = useState<number | null>(null);

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
                  component={Link}
                  href="/about"
                  variant="contained"
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
              <div className="relative min-h-[340px] sm:min-h-[400px] h-[340px] sm:h-[400px] rounded-xl overflow-hidden shadow-[0_15px_35px_rgba(0,60,36,0.18)] border border-[#d9e4dc] shine-box">
                <Image
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1100&q=86"
                  alt="Global Sourcing Cargo Hub"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover min-h-[340px] sm:min-h-[400px] transition-transform duration-700 group-hover:scale-105"
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

      {/* 3. IMPORT PRODUCTS SECTION (INTERACTIVE EXPANDING ACCORDION) */}
      <section id="products" className="py-16 sm:py-24 bg-[#f6faf7] border-y border-[#d9e4dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-black uppercase tracking-[0.15em] text-[#005b32] mb-1">
              Import Division
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#173e2a]">
              Global Products for a Better Tomorrow
            </h2>
            <div className="w-12 h-1 bg-[#ffd000] rounded-full mx-auto mt-3 animate-pulse-dash" />
          </div>

          {/* Desktop & Tablet: Horizontal Expanding Accordion (Matching Uploaded UI) */}
          {(() => {
            const importItems = [
              {
                title: "Metal Scrap",
                heading: "METAL SCRAP",
                description:
                  "Direct importers of premium certified ferrous and non-ferrous scrap metals, including Heavy Melting Steel (HMS 1 & 2), copper cathode, aluminium talk, and brass scrap supplying steel mills, remelting plants, and foundries worldwide.",
                href: "/import/metal-scrap",
                image:
                  "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1200&q=85",
              },
              {
                title: "Acids",
                heading: "ACIDS",
                description:
                  "Supplying bulk high-purity industrial mineral acids—including Sulfuric Acid (98%), Nitric Acid (68%), Hydrochloric Acid (33%), and Phosphoric Acid (85%)—engineered for chemical synthesis, battery manufacturing, water treatment, and metallurgical pickling.",
                href: "/import/acids",
                image:
                  "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1200&q=85",
              },
              {
                title: "Cosmetic Chemical",
                heading: "COSMETIC CHEMICAL",
                description:
                  "Delivering USP 99.7% pure vegetable glycerin, triple-pressed stearic acid, cosmetic packaging polymers, and specialty buffering agents trusted by personal care formulators for advanced skincare, haircare, and beauty formulations.",
                href: "/import/cosmetic-chemical",
                image:
                  "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=85",
              },
              {
                title: "Plastic Chemical",
                heading: "PLASTIC CHEMICAL",
                description:
                  "Importing premium virgin polymer resins, PVC stabilizers, plasticizers, industrial masterbatches, and chemical additives engineered for high-durability polymer compounds, extrusion profiles, surface coatings, and elastomeric systems.",
                href: "/import/plastic-chemical",
                image:
                  "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=85",
              },
              {
                title: "Cassia Cinnamon",
                heading: "CASSIA CINNAMON",
                description:
                  "Sourcing authentic premium whole and split cassia cinnamon rich in essential aromatic oils and natural cinnamaldehyde, directly selected for commercial spice blending, oleoresin extraction, and food processing.",
                href: "/import/cassia-cinnamon",
                image:
                  "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1200&q=85",
              },
              {
                title: "Star Anise",
                heading: "STAR ANISE",
                description:
                  "Importing hand-selected, whole eight-point autumn star anise pods packed with anethole, providing intense sweet-licorice aroma and superior aesthetic grading for gourmet culinary processors, teas, and botanical extracts.",
                href: "/import/star-anise",
                image:
                  "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85",
              },
            ];

            return (
              <>
                <div
                  className="hidden md:flex h-[520px] lg:h-[580px] gap-2.5 sm:gap-3.5 w-full"
                  onMouseLeave={() => setHoveredImportIndex(null)}
                >
                  {importItems.map((item, index) => {
                    const isHovered = hoveredImportIndex === index;
                    const isAnyHovered = hoveredImportIndex !== null;

                    return (
                      <div
                        key={item.title}
                        onMouseEnter={() => setHoveredImportIndex(index)}
                        className={`relative rounded-xl overflow-hidden cursor-pointer select-none transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-md ${
                          isHovered
                            ? "flex-[3.8] shadow-2xl"
                            : isAnyHovered
                            ? "flex-[0.65] brightness-75"
                            : "flex-1 hover:brightness-105"
                        }`}
                      >
                        {/* Background Image */}
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 800px"
                          className={`object-cover transition-transform duration-700 ease-out ${
                            isHovered ? "scale-105" : "scale-100"
                          }`}
                        />

                        {/* Dark Overlays */}
                        <div
                          className={`absolute inset-0 transition-opacity duration-500 ${
                            isHovered
                              ? "bg-gradient-to-t from-black/90 via-black/45 to-black/25 opacity-100"
                              : "bg-black/40 hover:bg-black/30"
                          }`}
                        />

                        {/* Collapsed State: Vertical Text (Visible when NOT hovered) */}
                        <div
                          className={`absolute inset-0 flex items-center justify-center p-3 transition-all duration-300 ${
                            isHovered ? "opacity-0 pointer-events-none scale-95" : "opacity-100 scale-100"
                          }`}
                        >
                          <span
                            className="text-white text-sm sm:text-base lg:text-lg font-bold tracking-wider whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                            style={{
                              writingMode: "vertical-rl",
                              transform: "rotate(180deg)",
                            }}
                          >
                            {item.title}
                          </span>
                        </div>

                        {/* Expanded State: Bottom Left Content (Visible when hovered) */}
                        <div
                          className={`absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end transition-all duration-500 ${
                            isHovered
                              ? "opacity-100 translate-y-0 pointer-events-auto delay-100"
                              : "opacity-0 translate-y-4 pointer-events-none"
                          }`}
                        >
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase text-white tracking-tight leading-tight mb-2 drop-shadow-md">
                            {item.heading}
                          </h3>

                          <div className="w-14 h-1 bg-[#ff7a00] rounded-full mb-3.5" />

                          <p className="text-xs sm:text-sm text-gray-100 font-normal leading-relaxed max-w-lg mb-6 drop-shadow">
                            {item.description}
                          </p>

                          <div>
                            <Link
                              href={item.href}
                              className="inline-flex items-center gap-2 px-5 py-2.5 border border-white text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-white hover:text-[#173e2a] transition-all duration-200 shadow-sm"
                            >
                              <span>Learn More</span>
                              <span className="text-sm">→</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile Layout: Touch-Friendly Accordion */}
                <div className="flex md:hidden flex-col gap-3 w-full">
                  {importItems.map((item, index) => {
                    const isExpanded = hoveredImportIndex === index;
                    return (
                      <div
                        key={item.title}
                        onClick={() => setHoveredImportIndex(isExpanded ? null : index)}
                        className={`relative rounded-xl overflow-hidden cursor-pointer select-none transition-all duration-500 shadow-md ${
                          isExpanded ? "h-[360px]" : "h-24"
                        }`}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                        <div
                          className={`absolute inset-0 transition-opacity duration-300 ${
                            isExpanded
                              ? "bg-gradient-to-t from-black/90 via-black/50 to-black/30"
                              : "bg-black/50"
                          }`}
                        />

                        {!isExpanded && (
                          <div className="absolute inset-0 flex items-center justify-between px-5">
                            <span className="text-white text-sm font-bold tracking-wide drop-shadow">
                              {item.title}
                            </span>
                            <span className="text-white text-xs px-2.5 py-1 rounded bg-white/20 border border-white/30">
                              Tap to view ▾
                            </span>
                          </div>
                        )}

                        {isExpanded && (
                          <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end">
                            <h3 className="text-lg font-black uppercase text-white mb-1.5">
                              {item.heading}
                            </h3>
                            <div className="w-10 h-0.5 bg-[#ff7a00] rounded-full mb-2.5" />
                            <p className="text-xs text-gray-200 leading-relaxed mb-4">
                              {item.description}
                            </p>
                            <div>
                              <Link
                                href={item.href}
                                className="inline-flex items-center gap-2 px-4 py-2 border border-white text-white text-xs font-semibold hover:bg-white hover:text-black transition-all"
                              >
                                <span>Learn More</span>
                                <span>→</span>
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })()}
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
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80"
                  alt="Construction and coating"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
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
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&w=700&q=80"
                  alt="Plastic and rubber manufacturing"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
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
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=700&q=80"
                  alt="Industrial plant facility"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                      7/66 Krishnagiri Main Road, Kandili, Tirupathur, Tamil Nadu, India
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
