"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Button,
  TextField,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";

interface RiceVariety {
  name: string;
  category: string;
  agl: string; // Average Grain Length
  moisture: string;
  broken: string;
  purity: string;
  description: string;
  applications: string[];
}

export default function QualityRiceView() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 72, y: 42 });

  // Dialog state for variety specifications
  const [selectedVariety, setSelectedVariety] = useState<RiceVariety | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    telephone: "",
    variety: "1121 XXL Basmati Rice (Steam)",
    packaging: "25 Kg BOPP Multi-Color Bags",
    quantity: "",
    comments: "",
  });

  // Toast notification state
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState<"success" | "info">("success");

  // Scroll reveal IntersectionObserver animation with exact staggered delay
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    items.forEach((x, i) => {
      (x as HTMLElement).style.transitionDelay = `${(i % 5) * 70}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px" }
    );

    items.forEach((x) => io.observe(x));

    return () => io.disconnect();
  }, []);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      setToastSeverity("info");
      setToastMessage("Please enter your name and email address.");
      setToastOpen(true);
      return;
    }

    setToastSeverity("success");
    setToastMessage("Thank you! Your quality rice export inquiry has been submitted to NGR Impex.");
    setToastOpen(true);
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      telephone: "",
      variety: "1121 XXL Basmati Rice (Steam)",
      packaging: "25 Kg BOPP Multi-Color Bags",
      quantity: "",
      comments: "",
    });
  };

  const handleDownloadSpecs = () => {
    setToastSeverity("info");
    setToastMessage("Quality Rice Product Brochure & Grain Specifications downloaded.");
    setToastOpen(true);
  };

  const varieties: RiceVariety[] = [
    {
      name: "1121 XXL Basmati Rice",
      category: "Extra Long Grain · Steam / Sella",
      agl: "8.35 mm – 8.40 mm Min",
      moisture: "12.5% Max",
      broken: "1.0% Max",
      purity: "95% Min",
      description: "Globally acclaimed for having the world's longest grain length before and after cooking. Elongates up to 2.5x times with pristine pearly sheen, feather-light non-sticky texture, and royal aroma.",
      applications: [
        "Royal Hyderabadi & Awadhi biryanis",
        "Middle Eastern Mandi & Kabsa dishes",
        "Fine-dining Persian pilafs & platters",
        "Gourmet international hotel catering",
      ],
    },
    {
      name: "Sugandha & Pusa Basmati",
      category: "Aromatic Basmati Hybrid · Steam / Raw",
      agl: "7.85 mm – 7.95 mm Min",
      moisture: "12.5% Max",
      broken: "1.5% Max",
      purity: "95% Min",
      description: "Naturally sweet and highly aromatic long-grain rice offering unmatched value. Highly favored in commercial gastronomy and catering for its dependable fluffy grains and delicate natural scent.",
      applications: [
        "Commercial restaurant rice courses",
        "Curry house side rice & fried rice",
        "Pulao and flavored spiced rice dishes",
        "Institutional food service buffets",
      ],
    },
    {
      name: "Sona Masoori Rice",
      category: "Medium Grain · Lightweight & Aromatic",
      agl: "5.10 mm – 5.25 mm Min",
      moisture: "13.0% Max",
      broken: "2.0% Max",
      purity: "98% Min",
      description: "Cultivated in the fertile river plains of Andhra Pradesh and Karnataka. Low in starch and calories, easy to digest, and celebrated as the staple everyday rice across South India and Southeast Asia.",
      applications: [
        "Daily nutritious family home cooking",
        "South Indian Sambar rice & Rasam rice",
        "Pongal & festive dessert porridge",
        "Diabetic-conscious diet formulations",
      ],
    },
    {
      name: "PR 11 / IR 64 Non-Basmati",
      category: "Long & Medium Grain · Raw / Parboiled",
      agl: "6.40 mm – 6.80 mm Min",
      moisture: "13.5% Max",
      broken: "5.0% / 25% Options",
      purity: "98% Min",
      description: "The workhorse of global food security and commodity distribution. Double-polished, optical laser sortex-cleaned, and delivered in massive containerized volumes to Africa, Asia, and the Middle East.",
      applications: [
        "West African Jollof rice dishes",
        "Commercial canteen bulk dining",
        "Food aid and national food reserves",
        "Industrial puffed rice & rice flour snacks",
      ],
    },
  ];

  const features = [
    {
      icon: "♨",
      title: "Superior Quality",
      desc: "Carefully selected from the best harvests, processed and double-polished through Bühler sortex lines to ensure pristine grain clarity.",
    },
    {
      icon: "◎",
      title: "Global Reach",
      desc: "Our rice reaches trusted importers, supermarkets, and restaurant chains across Asia, the Middle East, Europe, and North America.",
    },
    {
      icon: "♨",
      title: "Varieties and Uses",
      desc: "Comprehensive portfolio covering extra-long grain 1121 Basmati, aromatic Sugandha, lightweight Sona Masoori, and high-yield Non-Basmati.",
    },
    {
      icon: "⬡",
      title: "Packaging & Customization",
      desc: "Retail and bulk packaging with customizable options in 1kg/5kg/10kg/20kg/25kg/50kg BOPP bags, non-woven fabric bags, and master cartons.",
    },
  ];

  const qualityItems = [
    { icon: "🚚", title: "Fast delivery", desc: "Express container dispatch from Indian ports" },
    { icon: "◉", title: "Certified products", desc: "APEDA, FSSAI, ISO 22000, SGS inspected" },
    { icon: "♧", title: "Only healthy", desc: "Pesticide & aflatoxin tested pure grains" },
    { icon: "🌱", title: "Organic making", desc: "Grown with sustainable farm water stewardship" },
  ];

  const chooseCards = [
    {
      icon: "◇",
      title: "Premium Quality",
      desc: "Sourced from fertile Indo-Gangetic and Godavari river basins, aged naturally for maximum culinary elongation and fluffiness.",
    },
    {
      icon: "◎",
      title: "Global Supply Chain",
      desc: "Reliable logistics and strong vessel charter partnerships ensuring seamless port arrivals with moisture-barrier container lining.",
    },
    {
      icon: "⚙",
      title: "Custom Solutions",
      desc: "Customizable broken percentages (1% to 25%), customized polishing grades, steam/sella/raw options, and complete OEM private labeling.",
    },
    {
      icon: "♧",
      title: "Sustainability",
      desc: "Direct contract farmer procurement promoting fair agricultural wages, water conservation, and environmentally sound hull disposal.",
    },
  ];

  return (
    <div className="w-full overflow-hidden text-[#183327] bg-white">
      {/* 1. HERO SECTION */}
      <section
        id="rice-hero"
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-[500px] sm:min-h-[540px] flex items-center justify-start text-white overflow-hidden py-16"
      >
        {/* Animated Background Image with Drift */}
        <div
          className="absolute -inset-4 z-0 bg-cover bg-center animate-hero-drift pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 67, 39, 0.98) 0%, rgba(0, 67, 39, 0.88) 44%, rgba(0, 67, 39, 0.5) 60%, transparent 100%), url('https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=1800&q=90')`,
          }}
        />

        {/* Dynamic Spotlight Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(247, 204, 52, 0.24) 0%, transparent 28%)`,
          }}
        />

        {/* Hero Content with Left Gold Border */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl pl-6 border-l-4 border-[#e7b622] hero-copy reveal left">
            <p className="text-[#e7b622] text-sm sm:text-base font-bold tracking-wider mb-1">
              — &nbsp; The Best Quality
            </p>
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[0.92] my-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Quality <span className="text-[#e7b622]">Rice</span>
            </h1>
            <h2
              className="text-xl sm:text-2xl text-emerald-100 font-normal mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              The Essence of Every Meal
            </h2>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-6">
              We export the finest rice from fertile regions, with superior grain quality, aromatic fragrance and rich taste for households and restaurants worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="contained"
                className="btn-shine"
                onClick={() => {
                  const el = document.getElementById("varieties");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                sx={{
                  bgcolor: "#e7b622",
                  color: "#17351f",
                  fontWeight: 900,
                  fontSize: "0.78rem",
                  px: 4,
                  py: 1.4,
                  borderRadius: "999px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  boxShadow: "0 8px 24px rgba(231, 182, 34, 0.35)",
                  "&:hover": {
                    bgcolor: "#d4a415",
                    transform: "translateY(-3px)",
                    boxShadow: "0 14px 30px rgba(0, 55, 31, 0.3)",
                  },
                  transition: "all 0.35s ease",
                }}
              >
                Explore Rice Grades →
              </Button>

              <nav className="text-xs text-gray-300 font-medium flex items-center gap-2 pl-2">
                <Link href="/" className="hover:text-[#e7b622] transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link href="/#products" className="hover:text-[#e7b622] transition-colors">
                  Export
                </Link>
                <span>/</span>
                <span className="text-[#e7b622] font-bold">Quality Rice</span>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES GRID (WITH VERTICAL TIMELINE CONNECTOR LINE) */}
      <section className="py-16 sm:py-24 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Feature List with Vertical Gold Connector */}
            <div className="lg:col-span-7 relative pl-2 feature-list">
              {/* Vertical connector line */}
              <div className="absolute left-[26px] top-6 bottom-6 w-0.5 bg-[#e7b622] hidden sm:block pointer-events-none" />

              <div className="space-y-8">
                {features.map((f) => (
                  <article key={f.title} className="relative flex items-start gap-5 feature reveal left">
                    <span className="w-14 h-14 rounded-full bg-[#fbf7eb] text-[#e7b622] flex items-center justify-center text-2xl font-bold shrink-0 z-10 border border-[#e1dfd5] shadow-sm">
                      {f.icon}
                    </span>
                    <div>
                      <h3
                        className="text-xl sm:text-2xl font-bold text-[#183327] mb-1.5"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        {f.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5b655f] leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right Packaging Image with Hover Lift & Scale */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-[0_20px_48px_rgba(0,55,31,0.18)] border border-[#e1dfd5] group">
                <img
                  src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=850&q=88"
                  alt="Premium packaged rice grain bags"
                  className="w-full h-[420px] sm:h-[485px] object-cover transition-transform duration-700 group-hover:scale-105 package reveal right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUALITY SECTION (CREAM BACKGROUND WITH ROTATING ICON HOVER) */}
      <section className="py-16 bg-[#fbf7eb] border-y border-[#e1dfd5] quality" id="quality">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 head reveal">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#183327]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              We Prefer Quality
            </h2>
            <div className="w-14 h-1 bg-[#e7b622] rounded-full mx-auto my-3" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 quality-row">
            {qualityItems.map((item) => (
              <div key={item.title} className="text-center p-4 qitem reveal group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fff8dd] text-[#00532f] flex items-center justify-center text-3xl mx-auto mb-3 shadow-sm border border-[#e7b622]/40 transition-all duration-400 group-hover:-translate-y-2 group-hover:rotate-6 group-hover:shadow-md icon">
                  {item.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#183327]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5b655f] mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MAJOR RICE EXPORT VARIETIES & SPECIFICATIONS */}
      <section id="varieties" className="py-16 sm:py-24 bg-white border-b border-[#e1dfd5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 head reveal">
            <h2
              className="text-3xl sm:text-5xl font-black text-[#183327]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Export Rice Varieties &amp; Grades
            </h2>
            <div className="w-14 h-1 bg-[#e7b622] rounded-full mx-auto my-4 animate-pulse-dash" />
            <p className="text-xs sm:text-sm text-[#5b655f] max-w-xl mx-auto">
              Aged to culinary perfection with calibrated average grain length, high elongation ratio, and sorted through computerized optical channels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {varieties.map((v) => (
              <article
                key={v.name}
                className="bg-[#fbf7eb] rounded-xl border border-[#e1dfd5] p-6 shadow-sm hover:shadow-xl hover:border-[#e7b622] hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between reveal"
              >
                <div>
                  <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#00532f] bg-[#00532f]/10 px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {v.category}
                  </span>
                  <h3
                    className="text-xl font-bold text-[#183327] mb-2"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {v.name}
                  </h3>
                  <div className="w-8 h-0.5 bg-[#e7b622] mb-3" />

                  <div className="space-y-1.5 text-xs text-[#5b655f] mb-4">
                    <p>
                      <strong className="text-[#183327]">Grain Length (AGL):</strong> {v.agl}
                    </p>
                    <p>
                      <strong className="text-[#183327]">Moisture:</strong> {v.moisture}
                    </p>
                    <p>
                      <strong className="text-[#183327]">Broken Ratio:</strong> {v.broken}
                    </p>
                    <p>
                      <strong className="text-[#183327]">Purity:</strong> {v.purity}
                    </p>
                  </div>

                  <p className="text-xs text-[#5b655f] leading-relaxed">
                    {v.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#e1dfd5]/60 mt-5">
                  <Button
                    fullWidth
                    variant="outlined"
                    className="btn-shine"
                    onClick={() => setSelectedVariety(v)}
                    sx={{
                      borderColor: "#00532f",
                      color: "#00532f",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      py: 0.8,
                      borderRadius: "999px",
                      "&:hover": {
                        borderColor: "#00371f",
                        bgcolor: "#fff",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    View Grain Specs →
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (2-COLUMN GRID WITH 4 CHOOSE CARDS) */}
      <section className="py-16 sm:py-24 bg-white" id="choose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 head reveal">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#183327]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Why Choose Us
            </h2>
            <div className="w-14 h-1 bg-[#e7b622] rounded-full mx-auto my-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-14 choose-row">
            {chooseCards.map((card) => (
              <article
                key={card.title}
                className="flex items-start gap-5 py-5 border-b border-[#e1dfd5] choose reveal"
              >
                <div className="w-14 h-14 rounded-full bg-[#fbf7eb] text-[#00532f] flex items-center justify-center text-2xl font-bold shrink-0 border border-[#e1dfd5] icon">
                  {card.icon}
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-[#183327] mb-1.5"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5b655f] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BROCHURE SECTION */}
      <section
        className="py-12 relative overflow-hidden bg-cover bg-right"
        style={{
          backgroundImage: `linear-gradient(90deg, #ffffff 0%, #ffffff 45%, transparent 100%), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl bg-gradient-to-r from-[#00562f] to-[#003a22] text-white p-7 sm:p-8 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl brochure-box reveal left">
            <div>
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{ fontFamily: "Georgia, serif" }}
              >
                ▱ &nbsp; Download Product Brochure
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100 mt-1.5">
                Explore our rice varieties, milling specifications, and packaging options.
              </p>
            </div>
            <Button
              variant="contained"
              className="btn-shine"
              onClick={handleDownloadSpecs}
              sx={{
                bgcolor: "#e7b622",
                color: "#17351f",
                fontWeight: 900,
                fontSize: "1.1rem",
                width: 48,
                height: 48,
                minWidth: 48,
                borderRadius: "50%",
                boxShadow: "0 8px 24px rgba(231, 182, 34, 0.4)",
                "&:hover": { bgcolor: "#d4a415", transform: "scale(1.08)" },
              }}
              aria-label="Download Rice Brochure"
            >
              →
            </Button>
          </div>
        </div>
      </section>

      {/* 7. LATEST NEWS */}
      <section className="py-14 sm:py-20 bg-white border-t border-[#e1dfd5]" id="news">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#183327]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Latest News
          </h2>
          <div className="w-14 h-1 bg-[#e7b622] rounded-full my-3" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#fbf7eb] p-6 sm:p-8 rounded-2xl border border-[#e1dfd5] news reveal">
            <div className="md:col-span-4">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=85"
                alt="Fertile paddy rice fields"
                className="w-full h-44 object-cover rounded-xl border border-[#e1dfd5]"
              />
            </div>
            <div className="md:col-span-8">
              <h3
                className="text-lg sm:text-xl font-bold text-[#183327] mb-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Why NGR Impex is Your Trusted Partner for High-Quality Food Products
              </h3>
              <p className="text-xs sm:text-sm text-[#5b655f] leading-relaxed mb-4">
                Discover how our commitment to quality, reliable supply chain, and customer-centric approach makes us a preferred partner in global grain trade.
              </p>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-xs font-bold text-[#00532f] hover:text-[#e7b622] transition-colors cursor-pointer"
              >
                Contact Grain Export Desk &nbsp; →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INQUIRY / PROCUREMENT SECTION */}
      <section id="contact" className="py-16 sm:py-24 bg-[#f8fbf8] border-t border-[#e1dfd5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Contact Details */}
            <div className="lg:col-span-5 space-y-5 reveal left">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#00532f] mb-1">
                  Grain Trade Desk
                </p>
                <h2
                  className="text-2xl sm:text-4xl font-bold text-[#183327]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Get In Touch
                </h2>
                <div className="w-12 h-1 bg-[#e7b622] rounded-full mt-3" />
              </div>

              <blockquote className="p-5 rounded-xl bg-white border-l-4 border-[#00532f] shadow-sm text-sm text-[#5b655f] italic leading-relaxed">
                “We supply global supermarket distributors, hypermarkets, and government grain importers with premium certified Indian Rice.”
              </blockquote>

              <div className="space-y-3 pt-2 text-xs text-[#5b655f]">
                <p className="flex items-center gap-2.5">
                  <span className="text-base text-[#00532f]">📍</span>
                  <span>7/66 Krishnagiri Main Road, Kandili Post, Tirupathur, Tamil Nadu, India</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <span className="text-base text-[#00532f]">☎</span>
                  <a href="tel:+916382584350" className="hover:text-[#00532f] font-semibold">
                    +91 63825 84350
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <span className="text-base text-[#00532f]">✉</span>
                  <a href="mailto:exim@ngrimpex.in" className="hover:text-[#00532f] font-semibold">
                    exim@ngrimpex.in
                  </a>
                </p>
              </div>
            </div>

            {/* Right Inquiry Form */}
            <div className="lg:col-span-7 reveal right">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-6 sm:p-8 rounded-xl border border-[#e1dfd5] shadow-[0_7px_25px_rgba(0,55,31,0.08)] space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextField
                    fullWidth
                    label="Full Name *"
                    variant="outlined"
                    size="small"
                    value={formData.fullName}
                    onChange={(e) => handleFormChange("fullName", e.target.value)}
                    required
                  />

                  <TextField
                    fullWidth
                    label="Company Name"
                    variant="outlined"
                    size="small"
                    value={formData.companyName}
                    onChange={(e) => handleFormChange("companyName", e.target.value)}
                  />

                  <TextField
                    fullWidth
                    label="Email Address *"
                    type="email"
                    variant="outlined"
                    size="small"
                    value={formData.email}
                    onChange={(e) => handleFormChange("email", e.target.value)}
                    required
                  />

                  <TextField
                    fullWidth
                    label="Telephone / WhatsApp"
                    type="tel"
                    variant="outlined"
                    size="small"
                    value={formData.telephone}
                    onChange={(e) => handleFormChange("telephone", e.target.value)}
                  />

                  <TextField
                    fullWidth
                    label="Target Rice Variety"
                    variant="outlined"
                    size="small"
                    value={formData.variety}
                    onChange={(e) => handleFormChange("variety", e.target.value)}
                  />

                  <TextField
                    fullWidth
                    label="Packaging Preference"
                    variant="outlined"
                    size="small"
                    value={formData.packaging}
                    onChange={(e) => handleFormChange("packaging", e.target.value)}
                  />
                </div>

                <TextField
                  fullWidth
                  label="Inquiry Details & Required Metric Tonnes (MT)"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={formData.comments}
                  onChange={(e) => handleFormChange("comments", e.target.value)}
                  placeholder="Specify destination sea port, FCL volume (e.g. 1x20ft FCL = 26 MT), broken grain tolerance, or customized bag design requirements..."
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="btn-shine"
                  sx={{
                    bgcolor: "#e7b622",
                    color: "#17351f",
                    fontWeight: 900,
                    fontSize: "0.85rem",
                    py: 1.4,
                    borderRadius: "999px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    boxShadow: "0 4px 14px rgba(231, 182, 34, 0.4)",
                    "&:hover": {
                      bgcolor: "#d4a415",
                      transform: "translateY(-3px)",
                      boxShadow: "0 8px 20px rgba(0, 55, 31, 0.25)",
                    },
                    transition: "all 0.35s ease",
                  }}
                >
                  Submit Rice Export Inquiry &nbsp; →
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Dialog Modal */}
      <Dialog
        open={Boolean(selectedVariety)}
        onClose={() => setSelectedVariety(null)}
        maxWidth="sm"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: "16px",
              p: 1,
            },
          },
        }}
      >
        {selectedVariety && (
          <>
            <DialogTitle sx={{ pb: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <span className="text-xs font-black uppercase text-[#00532f] tracking-wider block">
                  Export Milling Specifications
                </span>
                <span
                  className="text-2xl font-black text-[#183327]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {selectedVariety.name}
                </span>
              </div>
              <IconButton onClick={() => setSelectedVariety(null)} size="small">
                ✕
              </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ py: 2 }}>
              <div className="space-y-4 text-xs sm:text-sm text-[#5b655f]">
                <div className="grid grid-cols-2 gap-3 p-3 bg-[#fbf7eb] rounded-xl border border-[#e1dfd5]">
                  <div>
                    <span className="font-bold text-[#183327] block">Average Grain Length:</span>
                    <span>{selectedVariety.agl}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#183327] block">Max Moisture:</span>
                    <span>{selectedVariety.moisture}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#183327] block">Broken Ratio:</span>
                    <span>{selectedVariety.broken}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#183327] block">Purity Assay:</span>
                    <span>{selectedVariety.purity}</span>
                  </div>
                </div>

                <div>
                  <span className="font-bold text-[#183327] block mb-1">Milling &amp; Grain Profile:</span>
                  <p className="leading-relaxed">{selectedVariety.description}</p>
                </div>

                <div>
                  <span className="font-bold text-[#183327] block mb-2">Culinary Applications:</span>
                  <ul className="space-y-1 list-disc pl-5">
                    {selectedVariety.applications.map((app) => (
                      <li key={app}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
            <DialogActions sx={{ p: 2, justifyContent: "space-between" }}>
              <Button
                onClick={() => {
                  setSelectedVariety(null);
                  handleDownloadSpecs();
                }}
                className="btn-shine"
                sx={{ color: "#00532f", fontWeight: 700, fontSize: "0.75rem" }}
              >
                Download Data Sheet
              </Button>
              <Button
                variant="contained"
                className="btn-shine"
                onClick={() => {
                  const targetName = selectedVariety.name;
                  setSelectedVariety(null);
                  setFormData((prev) => ({ ...prev, variety: targetName }));
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                sx={{
                  bgcolor: "#e7b622",
                  color: "#17351f",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  borderRadius: "999px",
                  "&:hover": { bgcolor: "#d4a415" },
                }}
              >
                Inquire For This Grade →
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Snackbar Feedback */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={4000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={() => setToastOpen(false)} severity={toastSeverity} sx={{ bgcolor: "#00371f", color: "#fff" }}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
