"use client";

import React, { useState, useRef, useEffect } from "react";
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
  Globe2,
  PackageCheck,
  Truck,
  BadgeCheck,
  HeartPulse,
  Sprout,
  Award,
  Ship,
  SlidersHorizontal,
  Leaf,
  Download,
  ArrowRight,
  X,
  Wheat,
  Sun,
  Flame,
  CircleDot,
} from "lucide-react";

interface SesameVariety {
  name: string;
  grade: string;
  icon: React.ComponentType<{ className?: string }>;
  purity: string;
  oilContent: string;
  moisture: string;
  ffa: string;
  description: string;
  applications: string[];
}

export default function SesameSeedView() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 72, y: 42 });

  // Dialog state for variety specifications
  const [selectedVariety, setSelectedVariety] = useState<SesameVariety | null>(null);

  // Toast notification state
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState<"success" | "info">("success");

  // Scroll reveal IntersectionObserver animation with exact staggered delay
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
    setToastMessage("Sesame Seeds Product Brochure & Technical Specification Sheet downloaded.");
    setToastOpen(true);
  };

  const varieties: SesameVariety[] = [
    {
      name: "Hulled White Sesame Seeds",
      grade: "Premium Bakery Grade (Auto-Sortex)",
      icon: Wheat,
      purity: "99.95% / 99.99% Min",
      oilContent: "48% – 51% Min",
      moisture: "5.0% Max",
      ffa: "1.5% Max",
      description: "Mechanically hulled and optical sortex-cleaned. Uniform pearly-white seeds with delicate nutty crunch, ideal for burger buns, bagels, confectioneries, and tahini paste.",
      applications: [
        "Industrial hamburger buns & artisan breads",
        "Creamy Mediterranean tahini paste",
        "Halva confectionery & sweet treats",
        "Gourmet salad toppings & seasoning blends",
      ],
    },
    {
      name: "Natural White Sesame Seeds",
      grade: "Export Machine Cleaned & Sortex",
      icon: Sun,
      purity: "99/1 & 99.5% Min",
      oilContent: "48% – 52% Min",
      moisture: "6.0% Max",
      ffa: "2.0% Max",
      description: "Whole unhulled natural seeds retaining full fiber and mineral nutrients. Sourced directly from prime Gujarat and Rajasthan agricultural belts for high oil yield.",
      applications: [
        "Cold-pressed sesame cooking oil extraction",
        "Traditional Asian & Indian spice mixtures",
        "Cereal bars, granolas & health mixes",
        "Nutritious animal feed & meal supplements",
      ],
    },
    {
      name: "Natural Black Sesame Seeds",
      grade: "Deep Jet Black Sortex Cleaned",
      icon: CircleDot,
      purity: "99.0% / 99.5% Min",
      oilContent: "45% – 48% Min",
      moisture: "5.5% Max",
      ffa: "2.0% Max",
      description: "Highly aromatic, dark, rich seeds brimming with natural antioxidants, calcium, and iron. Highly celebrated in Japanese, Chinese, and Ayurvedic gastronomy.",
      applications: [
        "Japanese sushi garnishes & ramen broths",
        "Traditional black sesame desserts & ice cream",
        "Ayurvedic and nutraceutical wellness oils",
        "Artisanal multi-seed sourdough crackers",
      ],
    },
    {
      name: "Roasted / Toasted Sesame Seeds",
      grade: "Evenly Toasted Golden Aroma",
      icon: Flame,
      purity: "99.90% Min",
      oilContent: "48% Min",
      moisture: "2.5% Max",
      ffa: "1.5% Max",
      description: "Gently roasted under calibrated thermal controls to release intense nutty aromatics and a crispy golden texture with low residual moisture.",
      applications: [
        "Asian stir-fries, noodle bowls & marinades",
        "Furikake seasonings & sushi rolls",
        "Flavored toasted sesame oils",
        "Snack food coatings & crackers",
      ],
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      desc: "Stringent quality control at every stage to ensure purity, low moisture, and consistent microbiological safety.",
    },
    {
      icon: Globe2,
      title: "Global Reach",
      desc: "Supplying premium sesame seeds to leading food processors, bakeries, and oil millers across 30+ countries worldwide.",
    },
    {
      icon: Sparkles,
      title: "Varieties and Uses",
      desc: "Wide range of sesame varieties covering Natural White, Hulled 99.95%, Black, and Roasted for diverse culinary applications.",
    },
    {
      icon: PackageCheck,
      title: "Packaging & Customization",
      desc: "Flexible packaging solutions tailored to your requirements, including 25kg multi-wall paper bags, PP bags, and 1 MT bulk jumbo bags.",
    },
  ];

  const qualityItems = [
    { icon: Truck, title: "Fast delivery", desc: "Reliable port container dispatch" },
    { icon: BadgeCheck, title: "Certified products", desc: "FSSAI, APEDA, ISO 22000, Halal" },
    { icon: HeartPulse, title: "Only healthy", desc: "Zero chemical adulteration" },
    { icon: Sprout, title: "Organic making", desc: "Ethical sustainable crop sourcing" },
  ];

  const chooseCards = [
    {
      icon: Award,
      title: "Premium Quality",
      desc: "Carefully sourced from certified farms and laser-sortex processed for consistent purity, seed size, and nutty taste.",
    },
    {
      icon: Ship,
      title: "Global Supply Chain",
      desc: "Reliable freight logistics, moisture-barrier container lining, and timely delivery to worldwide destination ports.",
    },
    {
      icon: SlidersHorizontal,
      title: "Custom Solutions",
      desc: "Flexible options in varieties, specific oil content, custom roasting levels, private labeling, and bulk jumbo bags.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      desc: "Responsible crop sourcing and environmentally sound post-harvest processing for a greener, healthier tomorrow.",
    },
  ];

  return (
    <div className="w-full overflow-hidden text-[#183427] bg-white">
      {/* 1. HERO SECTION */}
      <section
        id="sesame-hero"
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-[500px] sm:min-h-[540px] flex items-center justify-start text-white overflow-hidden py-16"
      >
        {/* Animated Background Image with Drift */}
        <div
          className="absolute -inset-4 z-0 bg-cover bg-center animate-hero-drift pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 67, 39, 0.98) 0%, rgba(0, 67, 39, 0.88) 44%, rgba(0, 67, 39, 0.5) 60%, transparent 100%), url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1800&q=90')`,
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
          <div className="max-w-xl pl-6 border-l-4 border-[#e7b600] hero-copy reveal left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-[#e7b600] tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#e7b600]" />
              Export-Grade 99.95% Auto-Sortex Sesame
            </div>
            <p className="text-[#e7b600] text-sm sm:text-base font-bold tracking-wider mb-1">
              — &nbsp; The Best Quality
            </p>
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[0.92] my-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Sesame <span className="text-[#e7b600]">Seeds</span>
            </h1>
            <h2
              className="text-xl sm:text-2xl text-emerald-100 font-normal mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              A Versatile Ingredient
            </h2>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-6">
              Our premium farm-sourced sesame seeds offer rich flavor, a nutty aroma and excellent nutritional profile, making them a valuable ingredient for a wide range of culinary uses around the world.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="contained"
                className="btn-shine"
                onClick={() => {
                  const el = document.getElementById("varieties");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                endIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                sx={{
                  bgcolor: "#e7b600",
                  color: "#17351f",
                  fontWeight: 900,
                  fontSize: "0.78rem",
                  px: 4,
                  py: 1.4,
                  borderRadius: "999px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  boxShadow: "0 8px 24px rgba(231, 182, 0, 0.35)",
                  "&:hover": {
                    bgcolor: "#d6a700",
                    transform: "translateY(-3px)",
                    boxShadow: "0 14px 30px rgba(0, 55, 31, 0.3)",
                  },
                  transition: "all 0.35s ease",
                }}
              >
                Explore Sesame Seeds
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SUPERIOR QUALITY SECTION */}
      <section className="py-16 sm:py-24 bg-white" id="quality">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 head reveal">
            <p className="eyebrow text-xs font-black uppercase tracking-[0.28em] text-[#075b31] mb-1">
              Superior Quality
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-[#075b31] tracking-tight">
              Finest Sesame Seeds
            </h2>
            <div className="w-14 h-1 bg-[#e7b600] rounded-full mx-auto my-4 animate-pulse-dash" />
            <p className="text-sm sm:text-base text-[#606a64] max-w-2xl mx-auto leading-relaxed">
              Sourced from trusted farms and processed with care, our sesame seeds meet international quality standards and are valued by customers worldwide for their purity, taste and consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 features">
            {features.map((f, idx) => {
              const FeatureIcon = f.icon;
              return (
                <article
                  key={f.title}
                  className={`group p-6 text-center feature reveal ${
                    idx < features.length - 1 ? "lg:border-r lg:border-[#dddcd3]" : ""
                  }`}
                >
                  <span className="w-14 h-14 rounded-2xl bg-[#fbf8ef] text-[#075b31] flex items-center justify-center mx-auto mb-4 border border-[#dddcd3] shadow-xs group-hover:bg-[#075b31] group-hover:text-[#e7b600] transition-colors duration-300">
                    <FeatureIcon className="w-7 h-7 stroke-[1.8]" />
                  </span>
                  <h3 className="text-lg font-bold text-[#183427] mb-2 group-hover:text-[#075b31] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-xs text-[#606a64] leading-relaxed">
                    {f.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. STORY SECTION */}
      <section
        className="relative min-h-[380px] sm:min-h-[420px] flex items-center overflow-hidden py-14"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(255, 253, 249, 0.98) 0%, rgba(255, 253, 249, 0.94) 46%, rgba(255, 253, 249, 0.4) 68%, transparent 100%), url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1700&q=88')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-lg story-copy reveal left">
            <p className="eyebrow text-xs font-black uppercase tracking-[0.25em] text-[#075b31] mb-1">
              Pure • Natural • Wholesome
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-[#075b31] tracking-tight leading-[0.95] my-2">
              Small Seeds. <br />
              Big Possibilities.
            </h2>
            <p className="text-sm sm:text-base text-[#606a64] leading-relaxed mt-3">
              From everyday meals to global cuisines, sesame seeds add natural taste, nutrition and versatility to a wide range of products.
            </p>
            <div className="w-14 h-1 bg-[#e7b600] rounded-full my-4" />
            <p className="eyebrow text-xs font-black uppercase tracking-[0.2em] text-[#075b31]">
              A natural ingredient <br />
              for a healthy world
            </p>
          </div>
        </div>
      </section>

      {/* 4. QUALITY ROW BANNER */}
      <section className="py-12 bg-[#fbf8ef] border-y border-[#dddcd3] quality">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-xs font-black uppercase tracking-[0.28em] text-[#075b31] text-center mb-8">
            We Prefer Quality
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 quality-row">
            {qualityItems.map((item, idx) => {
              const QualityIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-4 text-center qitem reveal ${
                    idx < qualityItems.length - 1 ? "md:border-r md:border-[#d9d2bf]" : ""
                  }`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-[#dddcd3] text-[#075b31] flex items-center justify-center mx-auto mb-3 shadow-xs">
                    <QualityIcon className="w-7 h-7 stroke-[1.8]" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#183427]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#606a64] mt-0.5">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. MAJOR EXPORT VARIETIES & SPECIFICATIONS */}
      <section id="varieties" className="py-16 sm:py-24 bg-white border-b border-[#dddcd3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 head reveal">
            <p className="eyebrow text-xs font-black uppercase tracking-[0.28em] text-[#075b31] mb-1">
              Export Grades
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-[#075b31] tracking-tight">
              Sesame Seed Varieties
            </h2>
            <div className="w-14 h-1 bg-[#e7b600] rounded-full mx-auto my-4 animate-pulse-dash" />
            <p className="text-xs sm:text-sm text-[#606a64] max-w-xl mx-auto">
              Precision sorted with high oil recovery, uniform seed count, and low FFA for industrial bakeries, confectioneries, and oil millers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {varieties.map((v) => {
              const VarietyIcon = v.icon;
              return (
                <article
                  key={v.name}
                  className="group bg-[#fbf8ef] rounded-xl border border-[#dddcd3] p-6 shadow-sm hover:shadow-xl hover:border-[#e7b600] hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between reveal"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#075b31] bg-[#075b31]/10 px-2.5 py-0.5 rounded-full inline-block">
                        {v.grade}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-[#e7b600]/20 text-[#075b31] flex items-center justify-center shrink-0 group-hover:bg-[#075b31] group-hover:text-[#e7b600] transition-colors duration-300">
                        <VarietyIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#183427] mb-2 group-hover:text-[#075b31] transition-colors">
                      {v.name}
                    </h3>
                    <div className="w-8 h-0.5 bg-[#e7b600] mb-3" />

                    <div className="space-y-1.5 text-xs text-[#606a64] mb-4">
                      <p>
                        <strong className="text-[#183427]">Purity:</strong> {v.purity}
                      </p>
                      <p>
                        <strong className="text-[#183427]">Oil Content:</strong> {v.oilContent}
                      </p>
                      <p>
                        <strong className="text-[#183427]">Moisture:</strong> {v.moisture}
                      </p>
                      <p>
                        <strong className="text-[#183427]">Free Fatty Acids:</strong> {v.ffa}
                      </p>
                    </div>

                    <p className="text-xs text-[#606a64] leading-relaxed">
                      {v.description}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-[#dddcd3]/60 mt-5">
                    <Button
                      fullWidth
                      variant="outlined"
                      className="btn-shine"
                      onClick={() => setSelectedVariety(v)}
                      endIcon={<ArrowRight className="w-3.5 h-3.5" />}
                      sx={{
                        borderColor: "#075b31",
                        color: "#075b31",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        py: 0.8,
                        borderRadius: "999px",
                        "&:hover": {
                          borderColor: "#003b23",
                          bgcolor: "#fff",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      View Technical Specs
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-16 sm:py-24 bg-white" id="choose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow text-xs font-black uppercase tracking-[0.28em] text-[#075b31] mb-1">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-[#075b31] tracking-tight reveal">
              Your Trusted Sesame Partner
            </h2>
            <div className="w-14 h-1 bg-[#e7b600] rounded-full mx-auto my-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-8 choose-row">
            {chooseCards.map((card, idx) => {
              const ChooseIcon = card.icon;
              return (
                <article
                  key={card.title}
                  className={`group p-6 text-center choose-card reveal hover:-translate-y-2 transition-transform duration-400 ${
                    idx < chooseCards.length - 1 ? "lg:border-r lg:border-[#dddcd3]" : ""
                  }`}
                >
                  <span className="w-14 h-14 rounded-2xl bg-[#fbf8ef] text-[#075b31] flex items-center justify-center mx-auto mb-4 border border-[#dddcd3] shadow-xs group-hover:bg-[#075b31] group-hover:text-[#e7b600] transition-colors duration-300">
                    <ChooseIcon className="w-7 h-7 stroke-[1.8]" />
                  </span>
                  <h3 className="text-lg font-bold text-[#183427] mb-2 group-hover:text-[#075b31] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#606a64] leading-relaxed">
                    {card.desc}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Download Product Brochure Bar */}
          <div className="text-center pt-8 brochure">
            <Button
              variant="contained"
              className="btn-shine"
              onClick={handleDownloadSpecs}
              startIcon={<Download className="w-4 h-4" />}
              sx={{
                bgcolor: "#075b31",
                color: "#ffffff",
                fontWeight: 900,
                fontSize: "0.78rem",
                px: 4,
                py: 1.4,
                borderRadius: "999px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                boxShadow: "0 8px 24px rgba(7, 91, 49, 0.3)",
                "&:hover": {
                  bgcolor: "#003b23",
                  transform: "translateY(-3px)",
                  boxShadow: "0 14px 30px rgba(7, 91, 49, 0.45)",
                },
                transition: "all 0.35s ease",
              }}
            >
              Download Product Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* 7. FROM OUR BLOG SECTION */}
      <section className="py-14 bg-[#fbf8ef] border-t border-[#dddcd3]" id="blog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 blog-row reveal">
            <div>
              <p className="eyebrow text-xs font-black uppercase tracking-[0.25em] text-[#075b31] mb-1">
                Latest News
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#075b31] tracking-tight">
                From Our Blog
              </h2>
              <div className="w-14 h-1 bg-[#e7b600] rounded-full my-3" />
              <p className="text-xs sm:text-sm text-[#606a64]">
                Insights, updates and stories from the world of sesame seeds and international grain trading.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-shine inline-flex items-center gap-2 text-xs font-bold text-[#075b31] hover:text-[#e7b600] transition-colors cursor-pointer group"
            >
              <span>Connect With Trade Desk</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
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
                <span className="text-xs font-black uppercase text-[#075b31] tracking-wider block">
                  Export Grade Specifications
                </span>
                <span className="text-2xl font-black text-[#183427]">
                  {selectedVariety.name}
                </span>
              </div>
              <IconButton onClick={() => setSelectedVariety(null)} size="small" aria-label="Close dialog">
                <X className="w-5 h-5 text-[#183427]" />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ py: 2 }}>
              <div className="space-y-4 text-xs sm:text-sm text-[#606a64]">
                <div className="grid grid-cols-2 gap-3 p-3 bg-[#fbf8ef] rounded-xl border border-[#dddcd3]">
                  <div>
                    <span className="font-bold text-[#183427] block">Sortex Purity:</span>
                    <span>{selectedVariety.purity}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#183427] block">Oil Content:</span>
                    <span>{selectedVariety.oilContent}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#183427] block">Moisture Limit:</span>
                    <span>{selectedVariety.moisture}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#183427] block">Free Fatty Acids (FFA):</span>
                    <span>{selectedVariety.ffa}</span>
                  </div>
                </div>

                <div>
                  <span className="font-bold text-[#183427] block mb-1">Standard Export Grade:</span>
                  <p className="leading-relaxed">{selectedVariety.grade}</p>
                </div>

                <div>
                  <span className="font-bold text-[#183427] block mb-1">Seed Characteristics:</span>
                  <p className="leading-relaxed">{selectedVariety.description}</p>
                </div>

                <div>
                  <span className="font-bold text-[#183427] block mb-2">Recommended Applications:</span>
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
                startIcon={<Download className="w-4 h-4" />}
                className="btn-shine"
                sx={{ color: "#075b31", fontWeight: 700, fontSize: "0.75rem" }}
              >
                Download Data Sheet
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  setSelectedVariety(null);
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                endIcon={<ArrowRight className="w-4 h-4" />}
                sx={{
                  bgcolor: "#e7b600",
                  color: "#183427",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  "&:hover": { bgcolor: "#d6a700" },
                }}
              >
                Inquire For This Variety
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
        <Alert onClose={() => setToastOpen(false)} severity={toastSeverity} sx={{ bgcolor: "#003b23", color: "#fff" }}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
