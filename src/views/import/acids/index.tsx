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

interface AcidDetail {
  title: string;
  formula: string;
  purity: string;
  casNo: string;
  desc: string;
  applications: string[];
  image: string;
}

export default function AcidsView() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 72, y: 40 });

  // Dialog state for viewing acid specifications
  const [selectedAcid, setSelectedAcid] = useState<AcidDetail | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    telephone: "",
    productInterest: "Industrial Acids",
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
    setToastMessage("Thank you! Your acid procurement inquiry has been submitted to NGR Impex.");
    setToastOpen(true);
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      telephone: "",
      productInterest: "Industrial Acids",
      captcha: "",
      comments: "",
    });
  };

  const handleDownloadSpecs = () => {
    setToastSeverity("info");
    setToastMessage("Industrial Acids Technical Datasheet & Certificate of Analysis (COA) downloaded.");
    setToastOpen(true);
  };

  const featuredAcids: AcidDetail[] = [
    {
      title: "Sulfuric Acid",
      formula: "H₂SO₄",
      purity: "98% Technical & Commercial Grade",
      casNo: "7664-93-9",
      desc: "A highly versatile mineral acid indispensable in fertilizer synthesis, battery manufacturing, ore extraction, and organic chemical processing.",
      applications: [
        "Phosphate fertilizer manufacturing",
        "Lead-acid storage battery electrolyte",
        "Titanium dioxide pigment production",
        "Petroleum refining & alkylation catalysts",
      ],
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=86",
    },
    {
      title: "Hydrochloric Acid",
      formula: "HCl",
      purity: "33% - 37% Concentrated Aqueous",
      casNo: "7647-01-0",
      desc: "Essential strong inorganic acid for steel pickling, industrial chemical synthesis, water treatment neutralization, and food additive processing.",
      applications: [
        "Steel pickling & scale removal",
        "PVC and polyurethane precursors",
        "Industrial water demineralization & pH balancing",
        "Gelatin and food additive production",
      ],
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=800&q=86",
    },
    {
      title: "Nitric Acid",
      formula: "HNO₃",
      purity: "68% Commercial & Analytical Grade",
      casNo: "7697-37-2",
      desc: "A powerful oxidizing acid extensively imported for ammonium nitrate fertilizers, precision metallography, polymer intermediates, and pharmaceuticals.",
      applications: [
        "Ammonium nitrate and NPK fertilizers",
        "Explosives and defense propellants",
        "Nylon intermediates & adipic acid synthesis",
        "Semiconductor surface cleaning & etching",
      ],
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=86",
    },
    {
      title: "Phosphoric Acid",
      formula: "H₃PO₄",
      purity: "85% Food & Industrial Grade",
      casNo: "7664-38-2",
      desc: "Key triprotic acid utilized in food-grade acidulants, agriculture phosphate buffers, metal passivation, and specialized detergent formulations.",
      applications: [
        "Food & beverage acidity regulation",
        "DAP / MAP phosphate fertilizer production",
        "Metal rust conversion and anti-corrosive primer",
        "Dental cements and pharmaceutical synthesis",
      ],
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=86",
    },
  ];

  const productGroups = [
    {
      title: "Carbonates",
      symbol: "⚛",
      items: [
        "Ammonium Bicarbonate",
        "Calcium Carbonate",
        "Magnesium Carbonate",
        "Potassium Carbonate",
        "Sodium Bicarbonate",
      ],
    },
    {
      title: "Buffering Agents",
      symbol: "⚗",
      items: [
        "Calcium Citrate",
        "Potassium Citrate",
        "Sodium Citrate",
      ],
    },
    {
      title: "Acidulants",
      symbol: "♙",
      items: [
        "Acetic Acid",
        "Ascorbic Acid",
        "Benzoic Acid",
        "Citric Acid",
        "Formic Acid",
        "Fumaric Acid",
        "Lactic Acid",
        "Malic Acid",
        "Phosphoric Acid",
        "Propionic Acid",
        "Sorbic Acid",
        "Tartaric Acid",
      ],
    },
  ];

  return (
    <div className="w-full overflow-hidden text-[#153726]">
      {/* 1. HERO SECTION */}
      <section
        id="acids-hero"
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-[420px] sm:min-h-[460px] flex items-center justify-start text-white overflow-hidden"
      >
        {/* Animated Background Image */}
        <div
          className="absolute -inset-4 z-0 bg-cover bg-center animate-hero-drift pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 69, 44, 0.96) 0%, rgba(0, 69, 44, 0.74) 48%, rgba(0, 69, 44, 0.35) 100%), url('https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1800&q=88')`,
          }}
        />

        {/* Dynamic Spotlight Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255, 202, 5, 0.18) 0%, transparent 35%)`,
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 animate-hero-enter">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-white/90 mb-1 leading-snug">
            Chemical Solutions <br />
            for a Better Tomorrow
          </p>
          <div className="w-14 h-1 bg-[#ffca05] rounded-full my-3" />
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-3 leading-none drop-shadow-md">
            Industrial <span className="text-[#ffca05]">Acids</span>
          </h1>
          <nav className="text-xs sm:text-sm text-emerald-100 font-medium flex items-center gap-2">
            <Link href="/" className="hover:text-[#ffca05] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#products" className="hover:text-[#ffca05] transition-colors">
              Import
            </Link>
            <span>/</span>
            <span className="text-[#ffca05] font-bold">Acids</span>
          </nav>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#00562f] mb-1">
                  High-Quality Industrial Acids
                </p>
                <h2 className="text-3xl sm:text-5xl font-black text-[#153726] leading-tight">
                  Premium Acid Imports <br />
                  for Industries
                </h2>
                <h3 className="text-lg sm:text-xl font-bold text-[#00562f] mt-2">
                  Reliable Chemical Solutions for Various Applications
                </h3>
                <div className="w-14 h-1 bg-[#ffca05] rounded-full mt-3.5" />
              </div>

              <p className="text-sm sm:text-base text-[#5c665f] leading-relaxed">
                We import high-grade chemical products and mineral acids from trusted global manufacturers, ensuring consistent purity assay, strict batch-to-batch repeatability, and reliable delivery for chemical processing, water treatment, agriculture, and manufacturing plants.
              </p>

              <p className="text-sm sm:text-base text-[#5c665f] leading-relaxed">
                All acid shipments are handled strictly in certified ISO-tanks, IBC totes, and dedicated drums with complete SDS documentation, UN hazardous materials compliance, and customs clearance support.
              </p>

              <div className="pt-2">
                <Button
                  variant="contained"
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  sx={{
                    bgcolor: "#ffca05",
                    color: "#16381f",
                    fontWeight: 900,
                    fontSize: "0.78rem",
                    px: 3.5,
                    py: 1.3,
                    borderRadius: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    boxShadow: "0 8px 22px rgba(255, 202, 5, 0.35)",
                    "&:hover": {
                      bgcolor: "#e5b500",
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 28px rgba(0, 59, 34, 0.25)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  Contact Us →
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden shadow-[0_18px_45px_rgba(0,59,34,0.18)] border border-[#dae6de] group">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1100&q=88"
                  alt="Industrial chemical storage containers"
                  className="w-full h-[350px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED ACIDS SECTION */}
      <section id="acids" className="py-16 sm:py-24 bg-[#eff7f2] border-y border-[#dae6de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#00562f] mb-1">
              High-Quality Industrial Acids
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#153726]">
              High-Quality Industrial Acids for Various Applications
            </h2>
            <div className="w-14 h-1 bg-[#ffca05] rounded-full mx-auto mt-3 animate-pulse-dash" />
            <p className="text-xs sm:text-sm text-[#5c665f] mt-3 max-w-2xl mx-auto">
              Consistent quality and reliable supply for various industries, supporting sustainability and responsible industrial operations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {featuredAcids.map((acid) => (
              <article
                key={acid.title}
                className="group relative bg-white rounded-xl overflow-hidden border border-[#dae6de] shadow-sm hover:shadow-xl hover:border-[#9ec4ad] hover:-translate-y-1.5 transition-all duration-300 grid grid-cols-1 sm:grid-cols-12"
              >
                {/* Left/Top Content */}
                <div className="sm:col-span-7 p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[0.7rem] font-black uppercase tracking-wider text-[#00562f] bg-[#eff7f2] px-2.5 py-0.5 rounded-full border border-[#dae6de]">
                        {acid.formula}
                      </span>
                      <span className="text-[0.68rem] font-bold text-[#5c665f]">
                        CAS: {acid.casNo}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#153726] group-hover:text-[#00562f] transition-colors">
                      {acid.title}
                    </h3>
                    <div className="w-10 h-0.5 bg-[#ffca05] my-2" />

                    <p className="text-xs sm:text-sm text-[#5c665f] leading-relaxed mt-2">
                      {acid.desc}
                    </p>
                  </div>

                  <div className="pt-5 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedAcid(acid)}
                      className="text-xs font-bold text-[#00562f] hover:text-[#003b22] flex items-center gap-1.5 transition-colors cursor-pointer group/btn"
                    >
                      <span>View Specifications</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>

                    <IconButton
                      onClick={() => setSelectedAcid(acid)}
                      sx={{
                        width: 38,
                        height: 38,
                        bgcolor: "#00562f",
                        color: "#fff",
                        "&:hover": { bgcolor: "#003b22" },
                      }}
                      size="small"
                      aria-label={`View ${acid.title} details`}
                    >
                      <span className="text-sm">→</span>
                    </IconButton>
                  </div>
                </div>

                {/* Right/Bottom Image */}
                <div className="sm:col-span-5 h-52 sm:h-auto overflow-hidden relative">
                  <img
                    src={acid.image}
                    alt={acid.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCT GROUPS (CARBONATES, BUFFERING AGENTS, ACIDULANTS) */}
      <section id="products" className="py-16 sm:py-24 bg-gradient-to-br from-white via-[#f7fbf8] to-[#eff7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#00562f] mb-1">
              Our Products
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#153726]">
              Products List &amp; Chemical Compounds
            </h2>
            <div className="w-14 h-1 bg-[#ffca05] rounded-full mx-auto mt-3 animate-pulse-dash" />
            <p className="text-xs sm:text-sm text-[#5c665f] mt-3">
              Full portfolio of imported industrial carbonates, pH buffering chemicals, and high-purity acidulants.
            </p>
          </div>

          <div className="space-y-6">
            {productGroups.map((group) => (
              <article
                key={group.title}
                className="bg-white rounded-xl overflow-hidden border border-[#dae6de] shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 md:grid-cols-12"
              >
                {/* Group Title Badge */}
                <div className="md:col-span-3 bg-gradient-to-br from-[#00713d] to-[#004a2b] text-white p-6 sm:p-8 flex flex-col items-center justify-center text-center">
                  <span className="text-3xl mb-1">{group.symbol}</span>
                  <h3 className="text-xl font-extrabold tracking-tight">
                    {group.title}
                  </h3>
                  <span className="text-[0.7rem] uppercase tracking-widest text-[#ffca05] mt-1 font-semibold">
                    {group.items.length} Products
                  </span>
                </div>

                {/* Group Item List */}
                <div className="md:col-span-9 p-6 sm:p-8 flex items-center">
                  <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6 list-none m-0 p-0 text-sm">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-[#153726] font-semibold hover:text-[#00562f] transition-colors"
                      >
                        <span className="text-[#ffca05] text-base leading-none">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DOWNLOAD SPECIFICATIONS BAR */}
      <div className="bg-[#edf5ef] border-y border-[#dae6de] py-5 text-center">
        <button
          type="button"
          onClick={handleDownloadSpecs}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-[#00562f] hover:text-[#003b22] transition-colors cursor-pointer"
        >
          <span className="text-base text-[#ffca05]">▣</span>
          <span>Download Acid Specifications Sheet &amp; Handling Guidelines</span>
        </button>
      </div>

      {/* 6. CALLOUT BANNER */}
      <section
        className="py-12 sm:py-16 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(239, 247, 242, 0.95) 0%, rgba(239, 247, 242, 0.85) 60%, rgba(239, 247, 242, 0.6) 100%), url('https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1500&q=85')`,
          backgroundPosition: "right center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153726]">
              NGR Impex — Industrial Chemical Division
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-[#5c665f] mt-1">
              ☎ +91 63825 84350 &nbsp; · &nbsp; ✉ exim@ngrimpex.in &nbsp; · &nbsp; Mon–Sat: 9 AM–6 PM
            </p>
          </div>
          <Button
            variant="contained"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            sx={{
              bgcolor: "#00562f",
              color: "#ffffff",
              fontWeight: 800,
              fontSize: "0.8rem",
              px: 3.5,
              py: 1.2,
              borderRadius: "6px",
              textTransform: "uppercase",
              "&:hover": { bgcolor: "#003b22" },
            }}
          >
            Inquire Now →
          </Button>
        </div>
      </section>

      {/* Specification Detail Modal Dialog */}
      <Dialog
        open={Boolean(selectedAcid)}
        onClose={() => setSelectedAcid(null)}
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
        {selectedAcid && (
          <>
            <DialogTitle sx={{ pb: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <span className="text-xs font-black uppercase text-[#00562f] tracking-wider block">
                  Technical Specifications
                </span>
                <span className="text-2xl font-black text-[#153726]">
                  {selectedAcid.title} ({selectedAcid.formula})
                </span>
              </div>
              <IconButton onClick={() => setSelectedAcid(null)} size="small">
                ✕
              </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ py: 2 }}>
              <div className="space-y-4 text-xs sm:text-sm text-[#5c665f]">
                <div className="grid grid-cols-2 gap-3 p-3 bg-[#eff7f2] rounded-lg">
                  <div>
                    <span className="font-bold text-[#153726] block">Standard Purity:</span>
                    <span>{selectedAcid.purity}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#153726] block">CAS Number:</span>
                    <span>{selectedAcid.casNo}</span>
                  </div>
                </div>

                <div>
                  <span className="font-bold text-[#153726] block mb-1">Product Description:</span>
                  <p className="leading-relaxed">{selectedAcid.desc}</p>
                </div>

                <div>
                  <span className="font-bold text-[#153726] block mb-2">Key Industrial Applications:</span>
                  <ul className="space-y-1 list-disc pl-5">
                    {selectedAcid.applications.map((app) => (
                      <li key={app}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
            <DialogActions sx={{ p: 2, justifyContent: "space-between" }}>
              <Button
                onClick={() => {
                  setSelectedAcid(null);
                  handleDownloadSpecs();
                }}
                sx={{ color: "#00562f", fontWeight: 700, fontSize: "0.75rem" }}
              >
                Download COA
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  setSelectedAcid(null);
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                sx={{
                  bgcolor: "#ffca05",
                  color: "#16381f",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  "&:hover": { bgcolor: "#e5b500" },
                }}
              >
                Inquire For This Acid →
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
        <Alert onClose={() => setToastOpen(false)} severity={toastSeverity} sx={{ bgcolor: "#003b22", color: "#fff" }}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
