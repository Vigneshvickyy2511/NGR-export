"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

interface SilageCrop {
  name: string;
  category: string;
  dryMatter: string;
  targetPh: string;
  proteinContent: string;
  shelfLife: string;
  packaging: string;
  description: string;
  benefits: string[];
}

export default function SilageMakingView() {
  // Modal state for product / crop specifications
  const [selectedCrop, setSelectedCrop] = useState<SilageCrop | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    telephone: "",
    subject: "Silage products",
    comments: "",
    captcha: "",
  });

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

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      setToastSeverity("info");
      setToastMessage("Please enter your name and email address.");
      setToastOpen(true);
      return;
    }

    setToastSeverity("success");
    setToastMessage("Thank you! Your silage inquiry has been submitted to the NGR Impex Agri Desk.");
    setToastOpen(true);
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      telephone: "",
      subject: "Silage products",
      comments: "",
      captcha: "",
    });
  };

  const handleCatalogueDownload = () => {
    setToastSeverity("info");
    setToastMessage("Downloading Silage Making & Animal Nutrition Catalogue...");
    setToastOpen(true);
  };

  const strengths = [
    {
      icon: "♢",
      title: "Unmatched Standards",
      desc: "Rigorous testing and global best practices.",
    },
    {
      icon: "✓",
      title: "Committed to Excellence",
      desc: "Innovation, reliability and customer success.",
    },
    {
      icon: "⚗",
      title: "Advanced Silage Solutions",
      desc: "Modern microbial technology for fermentation.",
    },
    {
      icon: "●",
      title: "Consistent Quality",
      desc: "Uniform moisture, texture and nutrition.",
    },
    {
      icon: "♧",
      title: "Nutrient Rich Feed",
      desc: "Highly digestible feed for livestock growth.",
    },
  ];

  const silageCrops: SilageCrop[] = [
    {
      name: "Corn Silage (Maize)",
      category: "High Energy Cereal Forage",
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
      icon: "◇",
      title: "Premium Quality",
      desc: "Carefully selected and processed products.",
    },
    {
      icon: "◎",
      title: "Global Supply Chain",
      desc: "Reliable logistics and timely delivery.",
    },
    {
      icon: "⬡",
      title: "Custom Solutions",
      desc: "Tailored packaging and product options.",
    },
    {
      icon: "♧",
      title: "Sustainability",
      desc: "Ethical, eco-friendly farming and sourcing.",
    },
  ];

  return (
    <div className="w-full overflow-hidden text-[#143d29] bg-white">
      {/* 1. HERO SECTION */}
      <section
        id="home"
        className="relative py-14 sm:py-20 bg-gradient-to-r from-[#f0f8f1] to-white overflow-hidden border-b border-[#d8e5dc]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 reveal left">
              <p className="text-xs sm:text-sm font-black uppercase tracking-[0.1em] text-[#00613a] mb-2">
                Silage Making
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.96] tracking-tight mb-3"
                style={{
                  background: "linear-gradient(90deg, #00613a, #43a63b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                The Best Quality
                <br />
                Silage Making
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-[#00613a] mb-4">
                Advanced Feed Solutions
              </h2>
              <p className="text-sm sm:text-base text-[#5b6c62] leading-relaxed max-w-xl mb-6">
                At NGR Impex, we offer high-quality silage-making products designed to optimize the
                preservation and nutritional value of your livestock feed. Our solutions ensure that
                your silage maintains its quality, supporting animal health and productivity.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant="contained"
                  className="btn-shine"
                  onClick={handleCatalogueDownload}
                  sx={{
                    bgcolor: "#00613a",
                    color: "#fff",
                    fontWeight: 900,
                    fontSize: "0.78rem",
                    px: 3.5,
                    py: 1.4,
                    borderRadius: "6px",
                    textTransform: "none",
                    boxShadow: "0 10px 24px rgba(0, 97, 58, 0.25)",
                    "&:hover": {
                      bgcolor: "#004027",
                      transform: "translateY(-3px)",
                    },
                    transition: "all 0.35s ease",
                  }}
                >
                  ⇩ &nbsp; Download Catalogue
                </Button>

                <Button
                  variant="outlined"
                  className="btn-shine"
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  sx={{
                    borderColor: "#00613a",
                    color: "#00613a",
                    fontWeight: 900,
                    fontSize: "0.78rem",
                    px: 3.5,
                    py: 1.4,
                    borderRadius: "6px",
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "rgba(0, 97, 58, 0.05)",
                      borderColor: "#004027",
                      transform: "translateY(-3px)",
                    },
                    transition: "all 0.35s ease",
                  }}
                >
                  Talk to Our Team &nbsp; →
                </Button>
              </div>

              {/* Breadcrumb Links */}
              <nav className="text-xs text-gray-500 font-medium flex items-center gap-2 mt-6">
                <Link href="/" className="hover:text-[#00613a] transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link href="/#products" className="hover:text-[#00613a] transition-colors">
                  Export
                </Link>
                <span>/</span>
                <span className="text-[#00613a] font-bold">Silage Making</span>
              </nav>
            </div>

            {/* Right Hero Photo with Solid Offset Shadow & Scale Lift */}
            <div className="lg:col-span-6 reveal right">
              <div className="relative mx-auto max-w-lg h-[320px] sm:h-[380px] rounded-[10px] overflow-hidden hero-photo">
                <Image
                  src="https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1100&q=88"
                  alt="Silage production and harvest on an agricultural farm"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover rounded-[10px]"
                />
              </div>
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
            {strengths.map((item) => (
              <article
                key={item.title}
                className="border border-[#d8e5dc] rounded-lg p-5 bg-white silage-card reveal flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white mb-4 bg-gradient-to-br from-[#16864a] to-[#00552f] shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-[#143d29] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5b6c62] leading-relaxed">{item.desc}</p>
                </div>
              </article>
            ))}
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

                <div className="p-4 rounded-lg bg-white border border-[#d8e5dc] mb-6">
                  <span className="text-sm font-extrabold text-[#00613a] block mb-1">
                    Kem LAC® HD
                  </span>
                  <p className="text-xs text-[#5b6c62]">
                    Three lactic acid-producing bacteria strains engineered for fast pH drops,
                    suppressing mold, and retaining energy density.
                  </p>
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
                      className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#143d29]"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#00613a] text-white flex items-center justify-center text-[0.65rem] shrink-0 font-black">
                        ✓
                      </span>
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
                Explore Our Solutions &nbsp; →
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
            {silageCrops.map((crop) => (
              <article
                key={crop.name}
                className="bg-[#f1f8f2] rounded-xl border border-[#d8e5dc] p-6 shadow-sm hover:shadow-xl hover:border-[#00613a] hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between reveal"
              >
                <div>
                  <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#00613a] bg-[#00613a]/10 px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {crop.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#143d29] mb-2">{crop.name}</h3>
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
                    View Technical Data →
                  </Button>
                </div>
              </article>
            ))}
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
            {whyChooseCards.map((card, idx) => (
              <article
                key={card.title}
                className={`p-6 sm:p-8 flex flex-col justify-start reveal ${
                  idx < 3 ? "lg:border-r border-[#cfded3]" : ""
                } ${idx % 2 === 0 ? "sm:border-r border-[#cfded3]" : ""}`}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white mb-4 bg-gradient-to-br from-[#16864a] to-[#00552f]">
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-[#143d29] mb-2">{card.title}</h3>
                <p className="text-xs text-[#5b6c62] leading-relaxed">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. QUALITY & ACCREDITATIONS SECTION */}
      <section className="py-16 sm:py-24 bg-white" id="quality">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Download Product Catalogue Panel */}
            <article className="lg:col-span-7 p-8 sm:p-10 rounded-xl bg-gradient-to-br from-[#005a35] to-[#003d25] text-white flex flex-col justify-between shadow-lg reveal left">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black mb-3">
                  Download Product Catalogue
                </h2>
                <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed mb-6">
                  Get detailed insights into our products. Download the brochure to explore our
                  offerings and quality standards.
                </p>
              </div>

              <div>
                <Button
                  variant="contained"
                  className="btn-shine"
                  onClick={handleCatalogueDownload}
                  sx={{
                    bgcolor: "#ffca08",
                    color: "#183723",
                    fontWeight: 900,
                    fontSize: "0.8rem",
                    px: 3.5,
                    py: 1.3,
                    borderRadius: "6px",
                    textTransform: "none",
                    boxShadow: "0 8px 24px rgba(255, 202, 8, 0.35)",
                    "&:hover": { bgcolor: "#ebb500", transform: "translateY(-3px)" },
                    transition: "all 0.35s ease",
                  }}
                >
                  ⇩ &nbsp; Download Now
                </Button>
              </div>
            </article>

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
                className="text-xs font-black text-[#00613a] hover:text-[#ffca08] transition-colors cursor-pointer"
              >
                Read More &nbsp; →
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
              <IconButton onClick={() => setSelectedCrop(null)} size="small">
                ✕
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
                className="btn-shine"
                sx={{ color: "#00613a", fontWeight: 700, fontSize: "0.75rem" }}
              >
                Download Tech Sheet
              </Button>
              <Button
                variant="contained"
                className="btn-shine"
                onClick={() => {
                  const targetName = selectedCrop.name;
                  setSelectedCrop(null);
                  setFormData((prev) => ({
                    ...prev,
                    subject: targetName.includes("Kem") ? "Kem LAC® HD Inoculant" : "Silage products",
                    comments: `Requesting quote and export specifications for ${targetName}.`,
                  }));
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                sx={{
                  bgcolor: "#00613a",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  borderRadius: "6px",
                  "&:hover": { bgcolor: "#004027" },
                }}
              >
                Inquire For This Grade →
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
