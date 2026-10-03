"use client";

import React, { useState, useEffect, useRef } from "react";
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
import {
  Sparkles,
  ShieldCheck,
  Award,
  FlaskConical,
  BadgeCheck,
  Wheat,
  Sprout,
  Leaf,
  Ship,
  SlidersHorizontal,
  CheckCircle2,
  Download,
  ArrowRight,
  X,
  BookOpen,
} from "lucide-react";
import SilageBrochureViewer from "./SilageBrochureViewer";

interface SilageCrop {
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  dryMatter: string;
  targetPh: string;
  proteinContent: string;
  shelfLife: string;
  packaging: string;
  description: string;
  benefits: string[];
}

export default function SilageMakingView() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y });
  };

  // Modal state for product / crop specifications
  const [selectedCrop, setSelectedCrop] = useState<SilageCrop | null>(null);

  // Toast feedback state
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState<"success" | "info">("success");

  // Scroll reveal with exact staggered delay ((i % 5) * 65ms) from original code
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

  const handleCatalogueDownload = () => {
    setToastSeverity("info");
    setToastMessage("Downloading Silage Making & Animal Nutrition Catalogue...");
    setToastOpen(true);
  };

  const strengths = [
    {
      icon: ShieldCheck,
      title: "Unmatched Standards",
      desc: "Rigorous testing and global best practices.",
    },
    {
      icon: Award,
      title: "Committed to Excellence",
      desc: "Innovation, reliability and customer success.",
    },
    {
      icon: FlaskConical,
      title: "Advanced Silage Solutions",
      desc: "Modern microbial technology for fermentation.",
    },
    {
      icon: BadgeCheck,
      title: "Consistent Quality",
      desc: "Uniform moisture, texture and nutrition.",
    },
    {
      icon: Wheat,
      title: "Nutrient Rich Feed",
      desc: "Highly digestible feed for livestock growth.",
    },
  ];

  const silageCrops: SilageCrop[] = [
    {
      name: "Corn Silage (Maize)",
      category: "High Energy Cereal Forage",
      icon: Wheat,
      dryMatter: "32% – 36%",
      targetPh: "3.7 – 4.0",
      proteinContent: "7.5% – 9.0% CP",
      shelfLife: "18 – 24 Months (Hermetic Seal)",
      packaging: "50kg vacuum bags / 500kg baled rolls",
      description:
        "The king of dairy forages with high starch content from whole-plant cracked maize kernels. Promotes peak milk yield and daily butterfat percentages in dairy cattle.",
      benefits: [
        "High grain-to-forage ratio with high ruminal starch digestibility",
        "Fast lactic fermentation preventing dry-matter loss",
        "Packed in UV-stabilized 7-layer oxygen barrier stretch film",
        "Ready-to-feed uniform chop length (12mm – 19mm)",
      ],
    },
    {
      name: "Kem LAC® HD Inoculant",
      category: "Multi-Strain Microbial Bio-Inoculant",
      icon: FlaskConical,
      dryMatter: "Applicable for 28% – 45% DM crops",
      targetPh: "Drops pH to < 4.0 in 72 hours",
      proteinContent: "Protects true protein breakdown (Proteolysis inhibition)",
      shelfLife: "24 Months (Cool dry storage)",
      packaging: "Water-soluble powder sachets (Treats 50 to 250 MT)",
      description:
        "Advanced formulation containing three specialized lactic acid-producing bacteria (LAB) strains. Drives accelerated lactic acid synthesis and suppresses wild yeast and mould proliferation.",
      benefits: [
        "Rapid acidification prevents clostridial butyric acid fermentation",
        "Reduces dry matter losses during bunker packing and ensiling",
        "Significantly lowers aerobic heating at silo feed-out face",
        "Improves total digestible nutrients (TDN) and animal intake",
      ],
    },
    {
      name: "Alfalfa (Lucerne) Silage",
      category: "High Protein Legume Forage",
      icon: Sprout,
      dryMatter: "35% – 42% (Wilted)",
      targetPh: "4.3 – 4.5",
      proteinContent: "18.0% – 22.0% CP",
      shelfLife: "18 Months",
      packaging: "High-density wrapped round bales / bulk ag-bags",
      description:
        "Premium protein forage for dairy cows and sheep. Wilted carefully to retain leafy nitrogen and treated with LAB inoculants to overcome high buffering capacity.",
      benefits: [
        "Superior natural bypass protein and essential amino acids",
        "Rich in bioavailable calcium, carotene, and magnesium",
        "Enhances reproduction rates and herd lactation persistence",
        "Eliminates reliance on costly commercial synthetic protein concentrates",
      ],
    },
    {
      name: "Sorghum & Sudan Grass Silage",
      category: "Drought-Tolerant High-Fiber Forage",
      icon: Leaf,
      dryMatter: "30% – 34%",
      targetPh: "3.8 – 4.2",
      proteinContent: "8.5% – 10.5% CP",
      shelfLife: "18 – 24 Months",
      packaging: "Baled & stretch wrapped / silage bunker bags",
      description:
        "Resilient, eco-friendly forage that thrives in arid climates with minimal water. Excellent fiber digestibility (NDFD) and palatable sweet succulent stalks.",
      benefits: [
        "High water-use efficiency ideal for sustainable animal farming",
        "Fine-stem varieties ensile evenly with sweet pleasant bouquet",
        "Ideal basal forage for beef feedlots and sheep ranches",
        "Cost-effective bulk green fodder security year-round",
      ],
    },
  ];

  const whyChooseCards = [
    {
      icon: Award,
      title: "Premium Quality",
      desc: "Carefully selected and processed products.",
    },
    {
      icon: Ship,
      title: "Global Supply Chain",
      desc: "Reliable logistics and timely delivery.",
    },
    {
      icon: SlidersHorizontal,
      title: "Custom Solutions",
      desc: "Tailored packaging and product options.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      desc: "Ethical, eco-friendly farming and sourcing.",
    },
  ];

  return (
    <div className="w-full overflow-hidden text-[#143d29] bg-white">
      {/* 1. HERO SECTION */}
      <section
        id="silage-hero"
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-[500px] sm:min-h-[540px] flex items-center justify-start text-white overflow-hidden py-16"
      >
        {/* Animated Background Image with Drift */}
        <div
          className="absolute -inset-4 z-0 bg-cover bg-center animate-hero-drift pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 67, 39, 0.98) 0%, rgba(0, 67, 39, 0.88) 44%, rgba(0, 67, 39, 0.5) 60%, transparent 100%), url('https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1800&q=90')`,
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
          <div className="max-w-xl pl-6 border-l-4 border-[#ffca08] hero-copy reveal left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-[#ffca08] tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#ffca08]" />
              Microbial-Inoculated Dairy &amp; Livestock Forage
            </div>
            <p className="text-[#ffca08] text-sm sm:text-base font-bold tracking-wider mb-1">
              — &nbsp; The Best Quality
            </p>
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[0.92] my-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Silage <span className="text-[#ffca08]">Making</span>
            </h1>
            <h2
              className="text-xl sm:text-2xl text-emerald-100 font-normal mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Advanced Feed Solutions
            </h2>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-6">
              At NGR Impex, we offer high-quality silage-making products designed to optimize the
              preservation and nutritional value of your livestock feed. Our solutions ensure that
              your silage maintains its quality, supporting animal health and productivity.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="contained"
                className="btn-shine"
                onClick={() => {
                  const el = document.getElementById("crops-spec");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                endIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                sx={{
                  bgcolor: "#ffca08",
                  color: "#17351f",
                  fontWeight: 900,
                  fontSize: "0.78rem",
                  px: 4,
                  py: 1.4,
                  borderRadius: "999px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  boxShadow: "0 8px 24px rgba(255, 202, 8, 0.35)",
                  "&:hover": {
                    bgcolor: "#ebb500",
                    transform: "translateY(-3px)",
                    boxShadow: "0 14px 30px rgba(0, 55, 31, 0.3)",
                  },
                  transition: "all 0.35s ease",
                }}
              >
                Explore Silage Crops
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STRENGTHS SECTION */}
      <section className="py-16 sm:py-20 bg-white" id="strengths">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.1em] text-[#00613a] mb-1">
                — &nbsp; Our Strengths
              </p>
              <h2 className="text-2xl sm:text-4xl font-black text-[#143d29] leading-tight">
                Unmatched Standards
                <br />
                Committed to Excellence
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5b6c62] max-w-md leading-relaxed">
              We uphold the highest quality standards in every product, ensuring consistency,
              reliability and superior performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {strengths.map((item) => {
              const StrengthIcon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group border border-[#d8e5dc] rounded-xl p-5 bg-white silage-card reveal flex flex-col justify-between hover:border-[#00613a] hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 bg-gradient-to-br from-[#16864a] to-[#00552f] shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <StrengthIcon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <h3 className="text-sm font-bold text-[#143d29] mb-2 leading-snug group-hover:text-[#00613a] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5b6c62] leading-relaxed">{item.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SOLUTIONS SECTION */}
      <section className="py-16 bg-[#f8fbf9] border-y border-[#d8e5dc]" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Panel 1: Our Technology */}
            <article className="lg:col-span-7 p-7 sm:p-9 border border-[#d8e5dc] rounded-xl bg-gradient-to-br from-[#f1faef] to-white flex flex-col justify-between shadow-sm reveal left">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.1em] text-[#00613a] mb-1">
                  — Our Technology
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-[#143d29] mb-3">
                  Advanced Silage Solutions
                </h2>
                <p className="text-xs sm:text-sm text-[#5b6c62] leading-relaxed mb-6">
                  Our silage products incorporate advanced microbial technology to improve
                  fermentation, preservation and nutrient retention.
                </p>

                <div className="p-4 rounded-lg bg-white border border-[#d8e5dc] mb-6 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#00613a]/10 text-[#00613a] flex items-center justify-center shrink-0 mt-0.5">
                    <FlaskConical className="w-5 h-5 text-[#00613a]" />
                  </div>
                  <div>
                    <span className="text-sm font-extrabold text-[#00613a] block mb-1">
                      Kem LAC® HD
                    </span>
                    <p className="text-xs text-[#5b6c62]">
                      Three lactic acid-producing bacteria strains engineered for fast pH drops,
                      suppressing mold, and retaining energy density.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-56 w-full rounded-lg overflow-hidden border border-[#d8e5dc]">
                <Image
                  src="https://images.unsplash.com/photo-1621955964441-c173e01c135b?auto=format&fit=crop&w=800&q=86"
                  alt="High quality fermented silage feed for cattle"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </article>

            {/* Panel 2: Custom Solutions for Your Farm */}
            <article className="lg:col-span-5 p-7 sm:p-9 border border-[#d8e5dc] rounded-xl bg-gradient-to-br from-[#f1faef] to-white flex flex-col justify-between shadow-sm reveal right">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.1em] text-[#00613a] mb-1">
                  — Custom Solutions
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-[#143d29] mb-3">
                  Custom Solutions for Your Farm
                </h2>
                <p className="text-xs sm:text-sm text-[#5b6c62] leading-relaxed mb-6">
                  Whether you work with corn or other forage crops, our solutions can be customized
                  to fit your farming needs.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Corn Silage (High-Starch Dairy Grade)",
                    "Grass Silage (Ryegrass & Timothy)",
                    "Sorghum Silage (Drought-Resistant)",
                    "Alfalfa Silage (High Protein Lucerne)",
                    "Other Forage Crops & Mixed Bales",
                  ].map((crop) => (
                    <li
                      key={crop}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#143d29]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00613a] shrink-0" />
                      <span>{crop}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant="contained"
                className="btn-shine"
                onClick={() => {
                  const el = document.getElementById("crops-spec");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                endIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                sx={{
                  bgcolor: "#00613a",
                  color: "#fff",
                  fontWeight: 900,
                  fontSize: "0.78rem",
                  py: 1.4,
                  borderRadius: "6px",
                  textTransform: "none",
                  boxShadow: "0 8px 20px rgba(0, 97, 58, 0.2)",
                  "&:hover": { bgcolor: "#004027", transform: "translateY(-2px)" },
                  transition: "all 0.35s ease",
                }}
              >
                Explore Our Solutions
              </Button>
            </article>
          </div>
        </div>
      </section>

      {/* 4. SILAGE CROPS & MICROBIAL INOCULANTS SPECIFICATION GRID */}
      <section id="crops-spec" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-xs font-black uppercase tracking-[0.1em] text-[#00613a] mb-1">
              Forage Specifications
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#143d29]">
              Export Silage Grades &amp; Biologicals
            </h2>
            <div className="w-14 h-1 bg-[#ffca08] rounded-full mx-auto my-3" />
            <p className="text-xs sm:text-sm text-[#5b6c62] max-w-xl mx-auto">
              Hermetically packed in 7-layer oxygen barrier films and treated with certified
              lactic cultures to ensure maximum nutrient preservation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {silageCrops.map((crop) => {
              const CropIcon = crop.icon;
              return (
                <article
                  key={crop.name}
                  className="group bg-[#f1f8f2] rounded-xl border border-[#d8e5dc] p-6 shadow-sm hover:shadow-xl hover:border-[#00613a] hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between reveal"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#00613a] bg-[#00613a]/10 px-2.5 py-0.5 rounded-full inline-block">
                        {crop.category}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-[#00613a]/10 text-[#00613a] flex items-center justify-center shrink-0 group-hover:bg-[#00613a] group-hover:text-white transition-colors duration-300">
                        <CropIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#143d29] mb-2 group-hover:text-[#00613a] transition-colors">
                      {crop.name}
                    </h3>
                    <div className="w-8 h-0.5 bg-[#ffca08] mb-3" />

                    <div className="space-y-1.5 text-xs text-[#5b6c62] mb-4">
                      <p>
                        <strong className="text-[#143d29]">Dry Matter (DM):</strong> {crop.dryMatter}
                      </p>
                      <p>
                        <strong className="text-[#143d29]">Target pH:</strong> {crop.targetPh}
                      </p>
                      <p>
                        <strong className="text-[#143d29]">Protein / Efficacy:</strong>{" "}
                        {crop.proteinContent}
                      </p>
                      <p>
                        <strong className="text-[#143d29]">Shelf Life:</strong> {crop.shelfLife}
                      </p>
                    </div>

                    <p className="text-xs text-[#5b6c62] leading-relaxed">{crop.description}</p>
                  </div>

                  <div className="pt-5 border-t border-[#d8e5dc] mt-5">
                    <Button
                      fullWidth
                      variant="outlined"
                      className="btn-shine"
                      onClick={() => setSelectedCrop(crop)}
                      endIcon={<ArrowRight className="w-3.5 h-3.5" />}
                      sx={{
                        borderColor: "#00613a",
                        color: "#00613a",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        py: 0.8,
                        borderRadius: "6px",
                        textTransform: "none",
                        "&:hover": {
                          borderColor: "#004027",
                          bgcolor: "#fff",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      View Technical Data
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section className="py-16 sm:py-20 bg-[#f1f8f2] border-y border-[#d8e5dc]" id="why">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 reveal">
            <p className="text-xs font-black uppercase tracking-[0.1em] text-[#00613a] mb-1">
              — Why Choose Us
            </p>
            <h2 className="text-2xl sm:text-4xl font-black text-[#143d29]">
              Why Choose NGR Impex
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#cfded3] rounded-xl bg-white overflow-hidden shadow-sm">
            {whyChooseCards.map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <article
                  key={card.title}
                  className={`group p-6 sm:p-8 flex flex-col justify-start reveal hover:bg-[#fafdfb] transition-colors duration-300 ${
                    idx < 3 ? "lg:border-r border-[#cfded3]" : ""
                  } ${idx % 2 === 0 ? "sm:border-r border-[#cfded3]" : ""}`}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 bg-gradient-to-br from-[#16864a] to-[#00552f] shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <CardIcon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-base font-bold text-[#143d29] mb-2 group-hover:text-[#00613a] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#5b6c62] leading-relaxed">{card.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. QUALITY & ACCREDITATIONS SECTION */}
      <section className="py-16 sm:py-24 bg-white" id="quality">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Certifications Panel */}
            <article className="lg:col-span-5 p-8 sm:p-10 rounded-xl border border-[#d8e5dc] bg-[#f8fbf9] flex flex-col justify-between shadow-sm reveal right">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.1em] text-[#00613a] mb-1">
                  — Certifications &amp; Quality
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-[#143d29] mb-3">
                  Our Accreditations
                </h2>
                <p className="text-xs sm:text-sm text-[#5b6c62] leading-relaxed mb-6">
                  We follow international quality standards to ensure safe, effective and reliable
                  products.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                {["ISO", "HACCP", "GMP", "FSSAI"].map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 bg-white border border-[#24508d]/30 text-[#24508d] text-sm font-black rounded-lg shadow-sm tracking-wider"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE PRODUCT DETAILS PDF / BROCHURE VIEWER */}
      <SilageBrochureViewer onDownloadPdf={handleCatalogueDownload} />

      {/* 7. BLOG / NEWS SECTION */}
      <section className="py-14 sm:py-20 bg-[#f1f8f2] border-t border-[#d8e5dc]" id="blog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.1em] text-[#00613a] mb-1">
            Latest News
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#143d29] mb-6">
            From Our Blog
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-white p-6 sm:p-8 rounded-xl border border-[#d8e5dc] shadow-sm blog-row reveal">
            <div className="relative md:col-span-4 h-40 w-full rounded-lg overflow-hidden border border-[#d8e5dc]">
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=85"
                alt="Agricultural farm fields"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="md:col-span-8">
              <small className="text-xs text-gray-500 font-bold block mb-1">
                July 29, 2026 &nbsp; | &nbsp; Blog
              </small>
              <h3 className="text-lg sm:text-xl font-bold text-[#143d29] mb-2">
                Why NGR Impex is Your Trusted Partner for High-Quality Food Products
              </h3>
              <p className="text-xs sm:text-sm text-[#5b6c62] leading-relaxed mb-4">
                Introduction to NGR Impex and our reliable global products and supply chain
                standards for commercial animal nutrition and export commodities...
              </p>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-black text-[#00613a] hover:text-[#ffca08] transition-colors cursor-pointer group"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL DATA SHEET MODAL */}
      <Dialog
        open={Boolean(selectedCrop)}
        onClose={() => setSelectedCrop(null)}
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
        {selectedCrop && (
          <>
            <DialogTitle
              sx={{
                pb: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <span className="text-xs font-black uppercase text-[#00613a] tracking-wider block">
                  Feed Chemistry &amp; Packaging Specs
                </span>
                <span className="text-2xl font-black text-[#143d29]">{selectedCrop.name}</span>
              </div>
              <IconButton onClick={() => setSelectedCrop(null)} size="small" aria-label="Close dialog">
                <X className="w-5 h-5 text-[#143d29]" />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ py: 2 }}>
              <div className="space-y-4 text-xs sm:text-sm text-[#5b6c62]">
                <div className="grid grid-cols-2 gap-3 p-3 bg-[#f1f8f2] rounded-xl border border-[#d8e5dc]">
                  <div>
                    <span className="font-bold text-[#143d29] block">Dry Matter (DM):</span>
                    <span>{selectedCrop.dryMatter}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#143d29] block">Target Fermentation pH:</span>
                    <span>{selectedCrop.targetPh}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#143d29] block">Protein Profile:</span>
                    <span>{selectedCrop.proteinContent}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#143d29] block">Shelf Stability:</span>
                    <span>{selectedCrop.shelfLife}</span>
                  </div>
                </div>

                <div>
                  <span className="font-bold text-[#143d29] block mb-1">Standard Packaging:</span>
                  <p className="leading-relaxed">{selectedCrop.packaging}</p>
                </div>

                <div>
                  <span className="font-bold text-[#143d29] block mb-1">Crop Description:</span>
                  <p className="leading-relaxed">{selectedCrop.description}</p>
                </div>

                <div>
                  <span className="font-bold text-[#143d29] block mb-2">Nutritional Advantages:</span>
                  <ul className="space-y-1 list-disc pl-5">
                    {selectedCrop.benefits.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
            <DialogActions sx={{ p: 2, justifyContent: "space-between" }}>
              <Button
                onClick={() => {
                  setSelectedCrop(null);
                  handleCatalogueDownload();
                }}
                startIcon={<Download className="w-4 h-4" />}
                className="btn-shine"
                sx={{ color: "#00613a", fontWeight: 700, fontSize: "0.75rem" }}
              >
                Download Tech Sheet
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  setSelectedCrop(null);
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                endIcon={<ArrowRight className="w-4 h-4" />}
                sx={{
                  bgcolor: "#ffca08",
                  color: "#183723",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  "&:hover": { bgcolor: "#ebb500" },
                }}
              >
                Inquire For This Feed
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* SNACKBAR NOTIFICATIONS */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={4000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setToastOpen(false)}
          severity={toastSeverity}
          sx={{ bgcolor: "#004027", color: "#fff" }}
        >
          {toastMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
