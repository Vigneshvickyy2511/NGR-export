"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Button,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";

interface MangoVariety {
  name: string;
  type: string;
  brix: string;
  acidity: string;
  color: string;
  shelfLife: string;
  packing: string;
  description: string;
  applications: string[];
}

export default function MangoPulpView() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 70, y: 40 });

  // Dialog state for variety specifications
  const [selectedVariety, setSelectedVariety] = useState<MangoVariety | null>(null);

  // Toast notification state
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState<"success" | "info">("success");

  // Scroll reveal IntersectionObserver animation
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    items.forEach((x, i) => {
      (x as HTMLElement).style.transitionDelay = `${(i % 5) * 65}ms`;
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

  const handleDownloadSpecs = () => {
    setToastSeverity("info");
    setToastMessage("Mango Pulp Technical Data Sheet & Processing Certificate downloaded.");
    setToastOpen(true);
  };

  const varieties: MangoVariety[] = [
    {
      name: "Alphonso Mango Pulp",
      type: "The King of Mangoes · Ultra-Premium",
      brix: "16° – 18° Brix Min",
      acidity: "0.50% – 0.80% (as Citric Acid)",
      color: "Bright Golden Yellow to Deep Orange",
      shelfLife: "24 Months from manufacturing",
      packing: "215 Kg Aseptic Drums / 3.1 Kg OTS Cans",
      description: "Celebrated worldwide for its incomparable fragrance, velvety smooth mouthfeel, and luscious tropical sweetness. Processed from selectively harvested Ratnagiri and Devgad Alphonso fruits.",
      applications: [
        "Premium tropical fruit juices & nectars",
        "Artisanal gelato, sorbets & ice creams",
        "Gourmet bakery fillings, tarts & mousses",
        "Baby food purees & wellness smoothies",
      ],
    },
    {
      name: "Totapuri Mango Pulp",
      type: "High-Yield Processing · Tangy-Sweet",
      brix: "14° Brix Min",
      acidity: "0.40% – 0.60% (as Citric Acid)",
      color: "Warm Golden Ochre to Canary Yellow",
      shelfLife: "24 Months from manufacturing",
      packing: "215 Kg Aseptic Drums / 20 Kg Bag-in-Box",
      description: "India's prime commercial processing mango variety. Notable for its rich body, high natural pectin viscosity, and perfectly balanced sweetness, making it the most cost-effective base for beverage formulators.",
      applications: [
        "Commercial RTD juices & fruit beverages",
        "Jams, jellies, marmalades & toppings",
        "Dairy mango yogurts, milkshakes & lassi",
        "Confectionery gummies & mango bar snacks",
      ],
    },
    {
      name: "Kesar Mango Pulp",
      type: "Queen of Fragrance · Saffron Hue",
      brix: "16° – 18° Brix Min",
      acidity: "0.45% – 0.65% (as Citric Acid)",
      color: "Intense Saffron Orange (Kesar)",
      shelfLife: "24 Months from manufacturing",
      packing: "215 Kg Aseptic Drums / 3.1 Kg OTS Cans",
      description: "Famous for its captivating intense aroma and characteristic deep saffron hue. Highly coveted in the Middle East and European markets for specialty desserts, culinary purees, and beverages.",
      applications: [
        "Traditional Middle Eastern & Indian sweets",
        "Cocktail purees & culinary cordials",
        "Cheesecakes, puddings & custard layers",
        "Premium blended tropical nectar bases",
      ],
    },
    {
      name: "Raspuri Mango Pulp",
      type: "Juicy & Aromatic · Traditional Heritage",
      brix: "15° Brix Min",
      acidity: "0.40% – 0.60% (as Citric Acid)",
      color: "Rich Reddish Yellow",
      shelfLife: "24 Months from manufacturing",
      packing: "215 Kg Aseptic Drums / 850g / 3.1 Kg Cans",
      description: "A cherished southern Indian variety with distinct sweet aroma and high juice-to-pulp extraction ratio. Excellent for natural tropical blends and soft drinks.",
      applications: [
        "Multi-fruit tropical nectar blends",
        "Flavored carbonated beverages",
        "Dessert syrups & fruit toppings",
        "Fruit snack leather and fruit rolls",
      ],
    },
  ];

  const benefits = [
    {
      icon: "♧",
      title: "Quality Assurance",
      desc: "Rigorous laboratory testing and state-of-the-art aseptic thermal processing ensure consistent taste, color, Brix, and sterility.",
    },
    {
      icon: "◎",
      title: "Global Reach",
      desc: "Supplying containerized shipments of premium mango pulp to beverage brands, bakeries, and food distributors worldwide.",
    },
    {
      icon: "♢",
      title: "Varieties and Uses",
      desc: "Comprehensive selection covering Alphonso, Totapuri, Kesar, and Raspuri for diverse culinary and industrial processing applications.",
    },
    {
      icon: "⬡",
      title: "Packaging & Customization",
      desc: "Sterile 215kg Aseptic bags in heavy-gauge steel drums, 20kg Bag-in-Box, and 3.1kg OTS food cans customized to your factory requirements.",
    },
  ];

  const qualityItems = [
    { icon: "🚚", title: "Fast delivery", desc: "Global refrigerated & dry freight" },
    { icon: "♢", title: "Certified products", desc: "FSSAI, ISO 22000, HACCP, Halal" },
    { icon: "♧", title: "Only healthy", desc: "100% pure fruit, no preservatives" },
    { icon: "🌱", title: "Organic making", desc: "Ethically cultivated orchards" },
  ];

  const chooseCards = [
    {
      title: "Premium Quality",
      desc: "Made from the finest sun-ripened mangoes.",
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=500&q=85",
    },
    {
      title: "Global Supply Chain",
      desc: "Reliable supply to international markets.",
      image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=500&q=85",
    },
    {
      title: "Custom Solutions",
      desc: "Tailored packaging and specifications.",
      image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=500&q=85",
    },
    {
      title: "Sustainability",
      desc: "Committed to a healthier planet.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&q=85",
    },
  ];

  return (
    <div className="w-full overflow-hidden text-[#102d20] bg-white">
      {/* 1. HERO SECTION */}
      <section
        id="mango-pulp-hero"
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-[480px] sm:min-h-[540px] flex items-center justify-start overflow-hidden py-16"
      >
        {/* Animated Background Image with Drift */}
        <div
          className="absolute -inset-4 z-0 bg-cover bg-center animate-hero-drift pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(255, 249, 242, 0.96) 0%, rgba(255, 247, 234, 0.82) 50%, rgba(255, 247, 234, 0.3) 100%), url('https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=1800&q=90')`,
          }}
        />

        {/* Dynamic Spotlight Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255, 211, 79, 0.28) 0%, transparent 30%)`,
          }}
        />

        {/* Hero Content with Entrance Animation */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl reveal left">
            <p
              className="text-2xl sm:text-3xl text-[#004b2b] italic mb-1"
              style={{ fontFamily: "Georgia, serif" }}
            >
              The Best Quality
            </p>
            <h1
              className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#00341e] tracking-tight leading-[0.85] my-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Mango <span className="text-[#ffbd09]">Pulp</span>
            </h1>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#004b2b] mb-3"
              style={{ fontFamily: "Georgia, serif" }}
            >
              A Taste of Freshness
            </h2>

            <div className="w-16 h-1 bg-[#ffbd09] rounded-full my-3" />

            <p className="text-sm sm:text-base text-[#526059] leading-relaxed mb-6 font-sans">
              At NGR Impex, we bring you the finest orchard-sourced mango pulp, crafted from handpicked, sun-ripened mangoes to deliver rich flavor, vibrant color and smooth texture.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="contained"
                className="btn-shine"
                onClick={() => {
                  const el = document.getElementById("about");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                sx={{
                  bgcolor: "#ffbd09",
                  color: "#142e20",
                  fontWeight: 900,
                  fontSize: "0.78rem",
                  px: 4,
                  py: 1.4,
                  borderRadius: "999px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  boxShadow: "0 8px 24px rgba(201, 146, 0, 0.35)",
                  "&:hover": {
                    bgcolor: "#e5a700",
                    transform: "translateY(-3px)",
                    boxShadow: "0 14px 30px rgba(201, 146, 0, 0.46)",
                  },
                  transition: "all 0.35s ease",
                  fontFamily: "Inter, Arial, sans-serif",
                }}
              >
                Explore Our Mango Pulp →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ORCHARD BANNER (PARALLAX FIXED BACKGROUND) */}
      <section
        className="relative h-64 sm:h-72 w-full bg-cover bg-center bg-fixed overflow-hidden flex items-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 54, 28, 0.65) 0%, rgba(0, 54, 28, 0.35) 60%, rgba(0, 54, 28, 0.1) 100%), url('https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=1800&q=88')`,
        }}
        role="img"
        aria-label="Mango orchards in harvest season"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end">
          <div className="max-w-md text-white drop-shadow-md text-right reveal right">
            <h2
              className="text-3xl sm:text-4xl font-bold italic leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              From Our Orchards <br />
              to the World
            </h2>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-[#ffbd09] font-black mt-2 font-sans">
              Natural goodness, globally
            </p>
            <div className="w-14 h-1 bg-[#ffbd09] ml-auto mt-3 rounded-full" />
          </div>
        </div>
      </section>

      {/* 3. PRODUCT INTRO 3-COLUMN SPLIT */}
      <section id="about" className="py-16 sm:py-24 bg-white border-b border-[#e7ddc9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-2xl overflow-hidden border border-[#e7ddc9] shadow-sm">
            {/* Column 1: Image (reveal left) */}
            <div className="relative lg:col-span-4 min-h-[300px] h-72 sm:h-80 lg:h-auto lg:min-h-full overflow-hidden reveal left">
              <Image
                src="https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=88"
                alt="Freshly sliced mango"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Column 2: Copy (reveal) */}
            <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-center reveal">
              <em
                className="text-xl text-[#004b2b] block mb-1"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Exquisite
              </em>
              <h2
                className="text-3xl sm:text-5xl font-black text-[#00341e] mb-4 leading-[0.95]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Mango Pulp
              </h2>
              <div className="w-12 h-1 bg-[#ffbd09] rounded-full mb-4" />
              <p className="text-sm sm:text-base text-[#526059] leading-relaxed font-sans mb-4">
                Our mango pulp is made from carefully selected, fully ripened mangoes, ensuring exceptional taste, natural sweetness and a rich, smooth texture.
              </p>
              <p className="text-sm text-[#526059] leading-relaxed font-sans">
                It captures the authentic flavor and vibrant color of fresh mangoes, making it ideal for a wide range of culinary and industrial applications.
              </p>
            </div>

            {/* Column 3: Feature Highlights (reveal right) */}
            <div className="lg:col-span-3 p-7 sm:p-8 bg-[#fffaf0] border-t lg:border-t-0 lg:border-l border-[#e7ddc9] flex flex-col justify-center gap-5 reveal right">
              {[
                "Quality Assurance",
                "Global Reach",
                "Varieties and Uses",
                "Packaging & Customization",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-7 h-0.5 bg-[#ffbd09]" />
                  <span className="text-sm font-bold text-[#102d20] font-sans">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. BENEFITS SECTION (4 PILLARS) */}
      <section id="benefits" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, idx) => (
              <article
                key={b.title}
                className={`p-6 text-center reveal ${
                  idx < benefits.length - 1 ? "lg:border-r lg:border-[#ffbd09]" : ""
                }`}
              >
                <span className="w-14 h-14 rounded-full bg-[#fffaf0] text-[#004b2b] flex items-center justify-center text-2xl font-bold mx-auto mb-4 border border-[#e7ddc9]">
                  {b.icon}
                </span>
                <h3
                  className="text-lg font-bold text-[#102d20] mb-2"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {b.title}
                </h3>
                <p className="text-xs text-[#526059] leading-relaxed font-sans">
                  {b.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUALITY ROW */}
      <section className="py-10 bg-gradient-to-r from-[#00482b] to-[#00613a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 reveal">
              <h2
                className="text-2xl sm:text-3xl font-bold italic"
                style={{ fontFamily: "Georgia, serif" }}
              >
                We Prefer Quality &nbsp;—
              </h2>
            </div>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {qualityItems.slice(0, 3).map((item) => (
                <div key={item.title} className="flex items-center gap-3 pl-4 border-l border-[#ffbd09]/60 reveal">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="text-sm font-bold text-white font-sans">
                      {item.title}
                    </h3>
                    <p className="text-[0.72rem] text-emerald-100 font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MAJOR VARIETIES & SPECIFICATIONS */}
      <section id="varieties" className="py-16 sm:py-24 bg-white border-b border-[#e7ddc9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <div className="w-14 h-1 bg-[#ffbd09] mx-auto mb-2" />
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#004b2b] font-sans">
              Our Harvest Portfolio
            </p>
            <h2
              className="text-3xl sm:text-5xl font-black text-[#102d20]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Export Mango Varieties &amp; Purees
            </h2>
            <p className="text-xs sm:text-sm text-[#526059] mt-2 font-sans max-w-xl mx-auto">
              Processed under hygienic aseptic conditions meeting USFDA, European, and Middle Eastern import standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {varieties.map((v) => (
              <article
                key={v.name}
                className="bg-[#fffaf0] rounded-xl border border-[#e7ddc9] p-6 shadow-sm hover:shadow-xl hover:border-[#ffbd09] hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between reveal"
              >
                <div>
                  <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#004b2b] bg-[#004b2b]/10 px-2.5 py-0.5 rounded-full inline-block mb-3 font-sans">
                    {v.type}
                  </span>
                  <h3
                    className="text-xl font-bold text-[#102d20] mb-2"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {v.name}
                  </h3>
                  <div className="w-8 h-0.5 bg-[#ffbd09] mb-3" />

                  <div className="space-y-1.5 text-xs text-[#526059] mb-4 font-sans">
                    <p>
                      <strong className="text-[#102d20]">Soluble Solids:</strong> {v.brix}
                    </p>
                    <p>
                      <strong className="text-[#102d20]">Acidity:</strong> {v.acidity}
                    </p>
                    <p>
                      <strong className="text-[#102d20]">Color Profile:</strong> {v.color}
                    </p>
                    <p>
                      <strong className="text-[#102d20]">Packing:</strong> {v.packing}
                    </p>
                  </div>

                  <p className="text-xs text-[#526059] leading-relaxed font-sans">
                    {v.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#e7ddc9]/60 mt-5">
                  <Button
                    fullWidth
                    variant="outlined"
                    className="btn-shine"
                    onClick={() => setSelectedVariety(v)}
                    sx={{
                      borderColor: "#004b2b",
                      color: "#004b2b",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      py: 0.8,
                      borderRadius: "999px",
                      "&:hover": {
                        borderColor: "#00341e",
                        bgcolor: "#fff",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                      fontFamily: "Inter, Arial, sans-serif",
                    }}
                  >
                    View Technical Specs →
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US CARDS */}
      <section className="py-16 sm:py-24 bg-[#fffaf0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Copy (reveal left) */}
            <div className="lg:col-span-4 space-y-4 reveal left">
              <div className="w-14 h-1 bg-[#ffbd09]" />
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#102d20]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Why Choose Us
              </h2>
              <p className="text-xs sm:text-sm text-[#526059] leading-relaxed font-sans">
                Partner with NGR Impex for mango pulp that delivers uncompromising quality and exceptional value worldwide.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-xs font-black uppercase tracking-wider text-[#004b2b] hover:text-[#ffbd09] transition-colors font-sans cursor-pointer flex items-center gap-1.5"
                >
                  <span>Connect With Trade Representative</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Right 4 Photo Cards (cards reveal with zoom on hover) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {chooseCards.map((card) => (
                <article
                  key={card.title}
                  className="card reveal bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 border border-[#e7ddc9]"
                >
                  <div className="relative w-full h-32 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 hover:scale-108"
                    />
                  </div>
                  <div className="p-4">
                    <h3
                      className="text-sm font-bold text-[#102d20] mb-1"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#526059] leading-snug font-sans">
                      {card.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. RESOURCES & NEWS CARDS */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#e7ddc9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Download Resource (reveal left) */}
            <article className="md:col-span-6 bg-[#fffaf0] p-7 sm:p-8 rounded-2xl border border-[#e7ddc9] flex flex-col sm:flex-row items-center gap-6 shadow-sm reveal left">
              <div className="relative w-full sm:w-40 h-32 shrink-0 rounded-xl overflow-hidden border border-[#e7ddc9]">
                <Image
                  src="https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=500&q=85"
                  alt="Product details sheet"
                  fill
                  sizes="(max-width: 640px) 100vw, 160px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3
                  className="text-xl font-bold text-[#102d20] mb-2"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Download <br />
                  Product Details
                </h3>
                <p className="text-xs text-[#526059] font-sans mb-4">
                  Get detailed information about varieties, specifications and packaging options.
                </p>
                <Button
                  variant="contained"
                  className="btn-shine"
                  onClick={handleDownloadSpecs}
                  sx={{
                    bgcolor: "#ffbd09",
                    color: "#142e20",
                    fontWeight: 900,
                    fontSize: "0.72rem",
                    px: 3.5,
                    py: 1.1,
                    borderRadius: "999px",
                    textTransform: "uppercase",
                    boxShadow: "0 8px 24px rgba(201, 146, 0, 0.3)",
                    "&:hover": {
                      bgcolor: "#e5a700",
                      transform: "translateY(-3px)",
                      boxShadow: "0 14px 30px rgba(201, 146, 0, 0.46)",
                    },
                    transition: "all 0.35s ease",
                    fontFamily: "Inter, Arial, sans-serif",
                  }}
                >
                  ⇩ &nbsp; Download Product Details
                </Button>
              </div>
            </article>

            {/* News Resource (reveal right) */}
            {/* <article className="md:col-span-6 bg-[#fffaf0] p-7 sm:p-8 rounded-2xl border border-[#e7ddc9] flex flex-col sm:flex-row items-center gap-6 shadow-sm reveal right">
              <div className="relative w-full sm:w-40 h-32 shrink-0 rounded-xl overflow-hidden border border-[#e7ddc9]">
                <Image
                  src="https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=500&q=85"
                  alt="Mango harvest news"
                  fill
                  sizes="(max-width: 640px) 100vw, 160px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3
                  className="text-xl font-bold text-[#102d20] mb-2"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Latest News
                </h3>
                <p className="text-xs text-[#526059] font-sans mb-4">
                  Insights, updates and stories from our world of mangoes.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-shine inline-block px-4 py-2 bg-white border border-[#ffbd09] rounded-full text-xs font-bold text-[#004b2b] hover:bg-[#fff9e6] transition-all cursor-pointer font-sans"
                >
                  View All News &nbsp; →
                </button>
              </div>
            </article> */}
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
                <span className="text-xs font-black uppercase text-[#004b2b] tracking-wider block font-sans">
                  Export Processing Specifications
                </span>
                <span
                  className="text-2xl font-black text-[#102d20]"
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
              <div className="space-y-4 text-xs sm:text-sm text-[#526059] font-sans">
                <div className="grid grid-cols-2 gap-3 p-3 bg-[#fffaf0] rounded-xl border border-[#e7ddc9]">
                  <div>
                    <span className="font-bold text-[#102d20] block">Refractometric Brix:</span>
                    <span>{selectedVariety.brix}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#102d20] block">Titratable Acidity:</span>
                    <span>{selectedVariety.acidity}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#102d20] block">Visual Color:</span>
                    <span>{selectedVariety.color}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#102d20] block">Aseptic Shelf Life:</span>
                    <span>{selectedVariety.shelfLife}</span>
                  </div>
                </div>

                <div>
                  <span className="font-bold text-[#102d20] block mb-1">Standard Export Packing:</span>
                  <p className="leading-relaxed">{selectedVariety.packing}</p>
                </div>

                <div>
                  <span className="font-bold text-[#102d20] block mb-1">Profile &amp; Taste Characteristics:</span>
                  <p className="leading-relaxed">{selectedVariety.description}</p>
                </div>

                <div>
                  <span className="font-bold text-[#102d20] block mb-2">Industrial Applications:</span>
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
                sx={{ color: "#004b2b", fontWeight: 700, fontSize: "0.75rem", fontFamily: "Inter, Arial, sans-serif" }}
              >
                Download Data Sheet
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
        <Alert onClose={() => setToastOpen(false)} severity={toastSeverity} sx={{ bgcolor: "#00341e", color: "#fff" }}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
