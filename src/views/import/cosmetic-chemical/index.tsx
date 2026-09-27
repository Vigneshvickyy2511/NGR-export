"use client";

import React, { useState, useRef } from "react";
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

interface CosmeticProduct {
  id: string;
  name: string;
  category: string;
  purity: string;
  grade: string;
  description: string;
  applications: string[];
}

export default function CosmeticChemicalView() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 70, y: 42 });

  // Dialog state for product details
  const [selectedProduct, setSelectedProduct] = useState<CosmeticProduct | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    telephone: "",
    productInterest: "Cosmetic Chemicals",
    captcha: "",
    comments: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      setToastSeverity("info");
      setToastMessage("Please enter your name and email address.");
      setToastOpen(true);
      return;
    }

    setToastSeverity("success");
    setToastMessage("Thank you! Your cosmetic chemical inquiry has been submitted to NGR Impex.");
    setToastOpen(true);
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      telephone: "",
      productInterest: "Cosmetic Chemicals",
      captcha: "",
      comments: "",
    });
  };

  const handleDownloadSpecs = () => {
    setToastSeverity("info");
    setToastMessage("Cosmetic Chemical Specifications Sheet & Regulatory Dossier downloaded.");
    setToastOpen(true);
  };

  const productsList = [
    { num: "01", name: "Glycerin Liquid", category: "Humectant & Emollient", grade: "USP / EP Grade 99.7%", purity: "99.7% min", desc: "Pure vegetable glycerin acting as a deeply hydrating humectant, moisture retainer, and carrier for premium creams and lotions.", apps: ["Skincare moisturizing creams", "Hair conditioners & serums", "Oral care pastes", "Body washes & soaps"] },
    { num: "02", name: "PVC Polyvinyle Chloride", category: "Polymer Base", grade: "Cosmetic Packaging Grade", purity: "Strict compliance", desc: "Specialty resin tailored for high-barrier cosmetic bottles, tubes, and sterile cosmetic packaging.", apps: ["Cosmetic tube containers", "High-clarity bottles", "Dispenser caps & pumps", "Protective seals"] },
    { num: "03", name: "Sodium Nitrate", category: "Inorganic Compound", grade: "Technical & Purified", purity: "99.0% min", desc: "High-grade salt utilized as an antimicrobial synergist and stabilizer in specific topical chemical processes.", apps: ["Preservative formulations", "Antimicrobial buffers", "Industrial formulation baths", "Specialized skin treatments"] },
    { num: "04", name: "Refined Phosphoric Acid", category: "Acidulant & pH Buffer", grade: "Cosmetic / Food Grade 85%", purity: "85.0% min", desc: "Ultra-pure buffering agent used to precisely calibrate pH levels in hair dyes, facial toners, and conditioning rinses.", apps: ["Hair lightening & dyes", "pH balance buffering", "Facial toners & peels", "Oral hygiene mouthwashes"] },
    { num: "05", name: "Sodium Citrate", category: "Buffering Agent", grade: "USP / FCC Grade", purity: "99.5% min", desc: "Sodium salt of citric acid used to buffer cosmetic formulations, stabilize viscosity, and chelate metal ions.", apps: ["Anti-aging serums", "Foaming cleansers", "Bath bombs & fizzers", "Makeup foundations"] },
    { num: "06", name: "Stearic Acid", category: "Emulsifier & Thickener", grade: "Triple Pressed Vegetable", purity: "99% Fatty Acid Assay", desc: "Naturally derived fatty acid providing velvety opacifying texture, stability, and binding in creams and solid deodorants.", apps: ["Emulsion stabilization", "Lipsticks & balms", "Shaving creams & foams", "Solid bar soaps"] },
    { num: "07", name: "Glycerin", category: "Moisturizer & Solvent", grade: "Pharmaceutical / CP Grade", purity: "99.5% min", desc: "High-density moisture-locking agent improving dermal hydration and skin barrier restorative functions.", apps: ["Facial sheet masks", "Hydrating gel lotions", "Anti-chapping balms", "Sunscreen emulsions"] },
    { num: "08", name: "Guar Gum", category: "Natural Thickener", grade: "Cosmetic Grade Powder", purity: "High Viscosity Mesh 200", desc: "Cold-water soluble natural polysaccharide providing luxurious slip, rheology control, and stabilization for shampoos.", apps: ["Sulfate-free shampoos", "Leave-in hair masks", "Body wash foaming gels", "Eco-friendly cosmetics"] },
    { num: "09", name: "Citric Acid", category: "AHA & Chelator", grade: "Anhydrous / Monohydrate USP", purity: "99.8% min", desc: "Alpha-hydroxy acid (AHA) providing gentle exfoliation, clarifying pores, and acting as a natural preservative synergist.", apps: ["Chemical peel solutions", "Bath salts & bombs", "Clarifying shampoos", "Antioxidant preservation"] },
    { num: "10", name: "Ethyl Acetate", category: "Organic Solvent", grade: "High Purity Ester", purity: "99.5% min", desc: "Rapid-evaporating solvent commonly preferred for cruelty-free nail lacquers, nail polish removers, and fragrances.", apps: ["Nail polish formulations", "Lacquer removers", "Perfume & scent carriers", "Botanical extract solvent"] },
    { num: "11", name: "Acetate Acid", category: "Acidifying Agent", grade: "Glacial Cosmetic Grade", purity: "99.5% min", desc: "Carefully controlled acidifier for hair clarifying rinses, cuticle smoothing treatments, and anti-static conditioners.", apps: ["Hair cuticle conditioners", "Scalp clarifying rinses", "pH calibration buffers", "Antiseptic facial washes"] },
    { num: "12", name: "Acetone", category: "Cosmetic Solvent", grade: "Pure Technical / Pharma Grade", purity: "99.5% min", desc: "Fast-acting cosmetic solvent essential for salon-grade nail polish removers and chemical peel skin degreasing.", apps: ["Nail art & enamel remover", "Pre-peel skin degreaser", "Laboratory glass wash", "Special effects makeup"] },
    { num: "13", name: "Ascorbic Acid", category: "Vitamin C Active", grade: "L-Ascorbic Acid Ultra-Fine", purity: "99.7% min", desc: "Potent topical antioxidant stimulating collagen biosynthesis, brightening hyperpigmentation, and neutralizing free radicals.", apps: ["Brightening vitamin C serums", "Anti-aging daytime creams", "Collagen boost treatments", "Dark spot correctors"] },
  ];

  const featuredCards = [
    {
      title: "Glycerin Liquid (USP 99.7%)",
      tag: "Deep Humectant",
      desc: "Vegetable-derived solvent & humectant locking deep dermal moisture in skincare creams, serums, and body washes.",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=85",
      product: productsList[0],
    },
    {
      title: "Stearic Acid (Triple Pressed)",
      tag: "Emulsifier & Texture",
      desc: "Plant-derived structural builder providing velvety body, creamy lather, and long-lasting stability in lotions and soaps.",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=85",
      product: productsList[5],
    },
    {
      title: "Guar Gum (High Viscosity)",
      tag: "Natural Rheology",
      desc: "Cold-soluble botanical polymer providing silky slip, conditioning lather, and suspension stability for haircare.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=85",
      product: productsList[7],
    },
    {
      title: "Ascorbic Acid (Pure Vitamin C)",
      tag: "Bioactive Antioxidant",
      desc: "Pharmaceutical-grade L-Ascorbic Acid for high-efficacy brightening serums, collagen boosters, and anti-aging treatments.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=85",
      product: productsList[12],
    },
  ];

  return (
    <div className="w-full overflow-hidden text-[#102b1e]">
      {/* 1. HERO SECTION */}
      <section
        id="cosmetic-hero"
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-[460px] sm:min-h-[520px] flex items-center justify-start text-white overflow-hidden"
      >
        {/* Animated Background Image */}
        <div
          className="absolute -inset-4 z-0 bg-cover bg-center animate-hero-drift pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 59, 41, 0.94) 0%, rgba(0, 59, 41, 0.75) 55%, rgba(0, 59, 41, 0.3) 100%), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=90')`,
          }}
        />

        {/* Dynamic Spotlight Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255, 214, 42, 0.18) 0%, transparent 32%)`,
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 animate-hero-enter">
          <div className="w-16 h-1 bg-[#f8c400] rounded-full mb-3" />
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-[0.95] drop-shadow-md"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Cosmetic <br />
            <span className="text-[#f8c400]">Chemical</span>
          </h1>
          <nav className="text-xs sm:text-sm text-emerald-100 font-medium flex items-center gap-2">
            <Link href="/" className="hover:text-[#f8c400] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#products" className="hover:text-[#f8c400] transition-colors">
              Import
            </Link>
            <span>/</span>
            <span className="text-[#f8c400] font-bold">Cosmetic Chemical</span>
          </nav>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-16 sm:py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#004d2d] mb-1">
            High-Quality Cosmetic Chemicals
          </p>
          <div className="w-14 h-1 bg-[#f8c400] rounded-full mx-auto my-3" />
          <h2
            className="text-3xl sm:text-5xl font-bold text-[#102b1e] leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Premium Global <br />
            Cosmetic Chemical Sourcing
          </h2>
          <h3 className="text-lg sm:text-xl font-bold text-[#004d2d] mt-3">
            Quality Ingredients for Beauty Formulations
          </h3>

          <p className="text-sm sm:text-base text-[#5d6661] mt-5 leading-relaxed">
            Empower your formulations with our world-class range of cosmetic chemicals, meticulously sourced from leading global manufacturers. From high-performance surfactants and specialty emulsifiers to potent active ingredients, we provide the essential building blocks for innovative skincare, haircare, and personal care products. We prioritize rigorous quality control, full regulatory compliance, and consistent supply chains to help your brand achieve excellence.
          </p>

          <div className="pt-6">
            <Button
              variant="contained"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              sx={{
                bgcolor: "#f8c400",
                color: "#17351f",
                fontWeight: 900,
                fontSize: "0.78rem",
                px: 4,
                py: 1.4,
                borderRadius: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                boxShadow: "0 8px 22px rgba(248, 196, 0, 0.35)",
                "&:hover": {
                  bgcolor: "#e0b000",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 28px rgba(0, 53, 31, 0.25)",
                },
                transition: "all 0.2s ease-in-out",
              }}
            >
              Contact Us &nbsp; →
            </Button>
          </div>
        </div>
      </section>

      {/* 3. INGREDIENTS VISUAL SHOWCASE BANNER */}
      <section
        className="relative h-72 sm:h-96 w-full bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1700&q=88')`,
        }}
        role="img"
        aria-label="Botanical cosmetic ingredients in laboratory glassware"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <div className="absolute inset-0 bg-[#004d2d]/25" />
        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center px-4">
          <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-black uppercase tracking-widest text-[#004d2d] shadow-sm mb-2 border border-[#dce7df]">
            Laboratory Certified Purity
          </span>
          <h3
            className="text-2xl sm:text-4xl font-bold text-[#102b1e] drop-shadow-sm"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Formulating with Global Precision &amp; Safety
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-[#102b1e]/85 max-w-xl mt-2 drop-shadow-sm">
            Compliant with international cosmetic safety dossiers, USP/EP standards, and verified CAS documentation.
          </p>
        </div>
      </section>

      {/* 4. FEATURED COSMETIC INGREDIENTS CARDS */}
      <section className="py-16 sm:py-20 bg-[#f7faf8] border-b border-[#dce7df]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#004d2d] mb-1">
              Featured Ingredients
            </p>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#102b1e]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Essential Actives &amp; Functional Bases
            </h2>
            <div className="w-14 h-1 bg-[#f8c400] rounded-full mx-auto mt-3 animate-pulse-dash" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCards.map((card) => (
              <article
                key={card.title}
                className="bg-white rounded-xl overflow-hidden border border-[#dce7df] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-[#004d2d] text-white text-[0.68rem] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                    {card.tag}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-extrabold text-[#102b1e] mb-1.5">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#5d6661] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#f0f4f1] mt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedProduct({
                          id: card.product.num,
                          name: card.product.name,
                          category: card.product.category,
                          purity: card.product.purity,
                          grade: card.product.grade,
                          description: card.product.desc,
                          applications: card.product.apps,
                        })
                      }
                      className="text-xs font-bold text-[#004d2d] hover:text-[#00351f] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Specifications</span>
                      <span>→</span>
                    </button>
                    <span className="text-[0.7rem] font-mono font-bold text-[#f8c400] bg-[#f8c400]/15 px-2 py-0.5 rounded">
                      {card.product.num}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRODUCTS LIST (SIGNATURE GOLD-BORDERED BOX) */}
      <section id="products" className="py-16 sm:py-24 bg-gradient-to-br from-[#003e25] via-[#004d2d] to-[#006039]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fffefa] border-2 border-[#f8c400] rounded-2xl p-6 sm:p-12 shadow-[0_20px_50px_rgba(0,53,31,0.3)]">
            <div className="text-center mb-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#004d2d] mb-1">
                Our Products
              </p>
              <div className="w-14 h-1 bg-[#f8c400] rounded-full mx-auto my-3" />
              <h2
                className="text-3xl sm:text-5xl font-bold text-[#102b1e]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Products List
              </h2>
              <p className="text-xs sm:text-sm text-[#5d6661] mt-2 max-w-xl mx-auto">
                Comprehensive catalog of cosmetic-grade chemical compounds, surfactants, organic solvents, and acidulants.
              </p>
            </div>

            {/* 3-Column List with 01, 02 Numbers and Hover States */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-10">
              {productsList.map((item) => (
                <div
                  key={item.num}
                  onClick={() =>
                    setSelectedProduct({
                      id: item.num,
                      name: item.name,
                      category: item.category,
                      purity: item.purity,
                      grade: item.grade,
                      description: item.desc,
                      applications: item.apps,
                    })
                  }
                  className="group flex items-center justify-between py-3.5 px-3 border-b border-[#dce7df] hover:border-[#f8c400] hover:bg-[#f4f8f2] hover:pl-5 rounded transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-black font-mono text-[#f8c400] group-hover:text-[#004d2d] transition-colors">
                      {item.num}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#102b1e] group-hover:text-[#004d2d] transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#004d2d] opacity-0 group-hover:opacity-100 transition-opacity">
                    Specs →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. DOWNLOAD TECHNICAL SPECIFICATIONS BAR */}
      <div className="bg-[#edf5ef] border-y border-[#dce7df] py-5 text-center">
        <button
          type="button"
          onClick={handleDownloadSpecs}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-[#004d2d] hover:text-[#f8c400] transition-colors cursor-pointer"
        >
          <span className="text-base text-[#f8c400]">▣</span>
          <span>Download Cosmetic Chemicals Full Technical Dossier &amp; COA</span>
        </button>
      </div>

      {/* Specifications Detail Modal Dialog */}
      <Dialog
        open={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        maxWidth="sm"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: "12px",
              p: 1,
            },
          },
        }}
      >
        {selectedProduct && (
          <>
            <DialogTitle sx={{ pb: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <span className="text-xs font-black uppercase text-[#004d2d] tracking-wider block">
                  Product #{selectedProduct.id} — {selectedProduct.category}
                </span>
                <span className="text-2xl font-black text-[#102b1e]">
                  {selectedProduct.name}
                </span>
              </div>
              <IconButton onClick={() => setSelectedProduct(null)} size="small">
                ✕
              </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ py: 2 }}>
              <div className="space-y-4 text-xs sm:text-sm text-[#5d6661]">
                <div className="grid grid-cols-2 gap-3 p-3 bg-[#eff7f2] rounded-lg">
                  <div>
                    <span className="font-bold text-[#102b1e] block">Quality Grade:</span>
                    <span>{selectedProduct.grade}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#102b1e] block">Assay / Purity:</span>
                    <span>{selectedProduct.purity}</span>
                  </div>
                </div>

                <div>
                  <span className="font-bold text-[#102b1e] block mb-1">Description &amp; Action:</span>
                  <p className="leading-relaxed">{selectedProduct.description}</p>
                </div>

                <div>
                  <span className="font-bold text-[#102b1e] block mb-2">Formulation Applications:</span>
                  <ul className="space-y-1 list-disc pl-5">
                    {selectedProduct.applications.map((app) => (
                      <li key={app}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
            <DialogActions sx={{ p: 2, justifyContent: "space-between" }}>
              <Button
                onClick={() => {
                  setSelectedProduct(null);
                  handleDownloadSpecs();
                }}
                sx={{ color: "#004d2d", fontWeight: 700, fontSize: "0.75rem" }}
              >
                Download COA
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  const targetName = selectedProduct.name;
                  setSelectedProduct(null);
                  setFormData((prev) => ({ ...prev, productInterest: targetName }));
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                sx={{
                  bgcolor: "#f8c400",
                  color: "#17351f",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  "&:hover": { bgcolor: "#e0b000" },
                }}
              >
                Inquire For This Product →
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
        <Alert onClose={() => setToastOpen(false)} severity={toastSeverity} sx={{ bgcolor: "#00351f", color: "#fff" }}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
