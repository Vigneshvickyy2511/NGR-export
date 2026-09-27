"use client";

import React, { useState, useRef } from "react";
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
} from "@mui/material";

interface ChilliVariety {
  name: string;
  type: string;
  shu: string;
  asta: string;
  form: string;
  description: string;
  applications: string[];
}

export default function RedChilliView() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 70, y: 40 });

  // Dialog state for variety specifications
  const [selectedVariety, setSelectedVariety] = useState<ChilliVariety | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    telephone: "",
    variety: "Teja S17 Dried Red Chilli",
    quantity: "",
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
    setToastMessage("Thank you! Your dried red chilli export inquiry has been submitted to NGR Impex.");
    setToastOpen(true);
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      telephone: "",
      variety: "Teja S17 Dried Red Chilli",
      quantity: "",
      comments: "",
    });
  };

  const handleDownloadSpecs = () => {
    setToastSeverity("info");
    setToastMessage("Dried Red Chilli Technical Datasheet & Quality Certificate downloaded.");
    setToastOpen(true);
  };

  const varieties: ChilliVariety[] = [
    {
      name: "Teja Chilli (S17)",
      type: "High Pungency / Fiery Heat",
      shu: "75,000 – 100,000 SHU",
      asta: "50 – 70 ASTA",
      form: "With Stem / Stemless",
      description: "Renowned globally as one of India's hottest export varieties. Intense fiery pungent profile with thin skin, ideal for oleoresin extraction and spicy food seasonings.",
      applications: ["Oleoresin extraction", "Hot sauce manufacturing", "Chilli flakes & powders", "Meat marinades & snacks"],
    },
    {
      name: "Sannam Chilli (S4 / 334)",
      type: "Medium Pungency / Balanced Flavor",
      shu: "25,000 – 40,000 SHU",
      asta: "40 – 60 ASTA",
      form: "With Stem / Stemless",
      description: "India's highest volume export chilli. Delivers a dependable, well-balanced heat and robust aroma widely demanded in commercial food processing.",
      applications: ["Everyday curry powders", "Spice blends & seasonings", "Canned foods & soups", "Food service bulk supply"],
    },
    {
      name: "Byadgi Chilli (Syngenta 5531)",
      type: "Deep Red Color / Mild Pungency",
      shu: "8,000 – 15,000 SHU",
      asta: "130 – 160 ASTA",
      form: "Wrinkled Pods With Stem / Stemless",
      description: "Distinguished by its crinkled skin and extraordinary high natural red pigmentation with mild soothing warmth. The benchmark for natural food color extraction.",
      applications: ["Natural color extraction", "Tandoori masalas & pastes", "Premium mild curry powders", "Western snacks & chips"],
    },
    {
      name: "Kashmiri Chilli",
      type: "Rich Crimson / Mild Sweet Heat",
      shu: "1,500 – 3,000 SHU",
      asta: "140 – 180 ASTA",
      form: "Whole Dried / Powdered",
      description: "Imparts a glowing crimson hue to culinary dishes without overwhelming piquancy. Highly sought-after for gourmet gastronomy and retail spice brands.",
      applications: ["Gourmet sauces & stews", "Butter chicken & gravies", "Retail bottled spice mixes", "Artisan seasonings"],
    },
  ];

  const commitmentCards = [
    {
      icon: "♧",
      title: "Finest Red Chillies",
      desc: "Handpicked and sun-dried for vibrant deep red color, optimum moisture, and robust natural flavor.",
    },
    {
      icon: "♢",
      title: "Quality Assurance",
      desc: "Strict quality control ensures consistent purity, pod size, ASTA color value, and calibrated heat levels.",
    },
    {
      icon: "♨",
      title: "Varieties and Uses",
      desc: "Ideal for industrial sauces, curry blends, oleoresin extraction, crushed flakes, and fine spice powders.",
    },
    {
      icon: "◎",
      title: "Global Reach",
      desc: "Trusted by importers and food processors across Asia, the Middle East, Europe, and North America.",
    },
    {
      icon: "⬡",
      title: "Packaging & Customization",
      desc: "Available in consumer bags, 5kg/10kg/25kg jute & PP bags, and custom containerized bulk packaging.",
    },
  ];

  const qualityItems = [
    { icon: "🚚", title: "Fast delivery", subtitle: "Streamlined port logistics" },
    { icon: "♢", title: "Certified products", subtitle: "Spices Board & Phytosanitary" },
    { icon: "♧", title: "Only healthy", subtitle: "Aflatoxin & pesticide tested" },
    { icon: "🌿", title: "Organic making", subtitle: "Ethically farmed crops" },
  ];

  const chooseCards = [
    {
      icon: "◇",
      title: "Premium Quality",
      desc: "We source only the best red chillies directly from Guntur and Warangal farm belts, ensuring superior taste, color, and heat.",
    },
    {
      icon: "◎",
      title: "Global Supply Chain",
      desc: "Reliable and efficient distribution with dedicated freight partnerships to meet international delivery schedules.",
    },
    {
      icon: "⚙",
      title: "Custom Solutions",
      desc: "Flexible packaging, customized moisture control, stemless sorting, and bulk supply options per your exact specifications.",
    },
    {
      icon: "♧",
      title: "Sustainability",
      desc: "Responsible agricultural practices supporting fair farmer livelihoods and eco-conscious drying methods for a better tomorrow.",
    },
  ];

  return (
    <div className="w-full overflow-hidden text-[#14261b]">
      {/* 1. HERO SECTION */}
      <section
        id="red-chilli-hero"
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-[460px] sm:min-h-[500px] flex items-end justify-start overflow-hidden pb-0"
      >
        {/* Animated Background Image */}
        <div
          className="absolute -inset-4 z-0 bg-cover bg-center animate-hero-drift pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.15) 60%, transparent 100%), url('https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=1800&q=90')`,
          }}
        />

        {/* Dynamic Spotlight Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255, 216, 74, 0.22) 0%, transparent 28%)`,
          }}
        />

        {/* Signature Angled Hero Card */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8 sm:mb-12">
          <div
            className="bg-[#fffdf7ee] backdrop-blur-md rounded-lg shadow-2xl p-7 sm:p-10 max-w-xl animate-hero-enter border-l-4 border-[#b71d16]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 92% 100%, 0 100%)",
            }}
          >
            <div className="w-14 h-1 bg-[#ffc400] mb-3" />
            <em
              className="text-lg sm:text-xl font-bold text-[#00552e] block not-italic"
              style={{ fontFamily: "Georgia, serif" }}
            >
              The Best Quality
            </em>
            <h1
              className="text-3xl sm:text-5xl font-black text-[#14261b] my-2 leading-[0.95]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Dried Red <span className="text-[#b71d16]">Chilli</span>
            </h1>
            <p className="text-base sm:text-lg font-bold text-[#00552e] mb-4">
              A Spice with Global Appeal
            </p>

            <nav className="text-xs text-[#536159] font-medium flex items-center gap-2 pt-2 border-t border-[#dce6dd]">
              <Link href="/" className="hover:text-[#00552e] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/#products" className="hover:text-[#00552e] transition-colors">
                Export
              </Link>
              <span>/</span>
              <span className="text-[#b71d16] font-bold">Dried Red Chilli</span>
            </nav>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-5">
              <div className="w-14 h-1 bg-[#ffc400]" />
              <h2
                className="text-3xl sm:text-5xl font-black text-[#14261b] leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Dried Red Chilli
              </h2>
              <h3
                className="text-lg sm:text-xl font-bold text-[#00552e]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                A Spice with Global Appeal
              </h3>

              <p className="text-sm sm:text-base text-[#536159] leading-relaxed">
                At NGR Impex, we specialize in exporting the finest quality dried red chillies, sourced directly from certified farms across India&apos;s prime spice-growing regions. Our dried red chillies are celebrated internationally for their vibrant red hue, robust aroma, and intense heat, making them an indispensable ingredient in global cuisines, seasoning blends, and extraction facilities.
              </p>

              <p className="text-sm sm:text-base text-[#536159] leading-relaxed">
                Whether you require high-pungency Teja S17 for spicy snacks and hot sauces or color-rich Byadgi pods for natural oleoresin extraction, our stringent quality assurance guarantees consistent moisture levels (&lt;11%), nil aflatoxin risk, and export-grade purity.
              </p>

              <div className="pt-2">
                <Button
                  variant="contained"
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  sx={{
                    bgcolor: "#ffc400",
                    color: "#17351f",
                    fontWeight: 900,
                    fontSize: "0.78rem",
                    px: 3.8,
                    py: 1.3,
                    borderRadius: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    boxShadow: "0 8px 22px rgba(255, 196, 0, 0.35)",
                    "&:hover": {
                      bgcolor: "#e5b000",
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 28px rgba(0, 58, 32, 0.25)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  Contact Us &nbsp; →
                </Button>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-6">
              <div className="relative h-[360px] sm:h-[430px] rounded-xl overflow-hidden shadow-[0_18px_48px_rgba(0,58,32,0.18)] border border-[#dce6dd] group">
                <Image
                  src="https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=1000&q=88"
                  alt="Dried red chillies harvest"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR COMMITMENT SECTION */}
      <section id="commit" className="py-16 sm:py-24 bg-[#fffdf9] border-y border-[#dce6dd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Tall Image */}
            <div className="lg:col-span-5">
              <div className="relative h-[400px] sm:h-[540px] rounded-xl overflow-hidden shadow-[0_16px_40px_rgba(0,58,32,0.16)] border border-[#dce6dd] group">
                <Image
                  src="https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=90"
                  alt="Premium red chillies sorting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Commit Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="w-14 h-1 bg-[#ffc400] mb-2" />
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#00552e]">
                  Our Commitment
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-black text-[#14261b] mt-1"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Premium Quality <br />
                  Dried Red Chilli
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {commitmentCards.map((card, idx) => (
                  <article
                    key={card.title}
                    className={`bg-white p-5 rounded-xl border border-[#dce6dd] shadow-sm hover:shadow-md hover:border-[#9cc0a8] hover:-translate-y-1 transition-all duration-200 flex items-start gap-4 ${
                      idx === commitmentCards.length - 1 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <span className="w-10 h-10 rounded-full bg-[#f3f8f4] text-[#00552e] flex items-center justify-center text-xl font-bold shrink-0 border border-[#dce6dd]">
                      {card.icon}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[#14261b] mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs text-[#536159] leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPORT VARIETIES SPECIFICATIONS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="w-14 h-1 bg-[#ffc400] mx-auto mb-2" />
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#00552e]">
              Major Export Grades
            </p>
            <h2
              className="text-2xl sm:text-4xl font-extrabold text-[#14261b]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Popular Indian Red Chilli Varieties
            </h2>
            <p className="text-xs sm:text-sm text-[#536159] mt-2 max-w-xl mx-auto">
              Sourced from premier agricultural belts with verified ASTA color units and certified Scoville heat ratings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {varieties.map((v) => (
              <article
                key={v.name}
                className="bg-[#fffdf9] rounded-xl border border-[#dce6dd] p-6 shadow-sm hover:shadow-xl hover:border-[#b71d16] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#b71d16] bg-[#b71d16]/10 px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {v.type}
                  </span>
                  <h3
                    className="text-xl font-bold text-[#14261b] mb-2"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {v.name}
                  </h3>
                  <div className="w-8 h-0.5 bg-[#ffc400] mb-3" />

                  <div className="space-y-1.5 text-xs text-[#536159] mb-4">
                    <p>
                      <strong className="text-[#14261b]">Heat (SHU):</strong> {v.shu}
                    </p>
                    <p>
                      <strong className="text-[#14261b]">Color (ASTA):</strong> {v.asta}
                    </p>
                    <p>
                      <strong className="text-[#14261b]">Form:</strong> {v.form}
                    </p>
                  </div>

                  <p className="text-xs text-[#536159] leading-relaxed">
                    {v.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#f0f4f1] mt-5">
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => setSelectedVariety(v)}
                    sx={{
                      borderColor: "#00552e",
                      color: "#00552e",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      py: 0.8,
                      "&:hover": {
                        borderColor: "#003a20",
                        bgcolor: "#f3f8f4",
                      },
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

      {/* 5. QUALITY ATTRIBUTES ROW */}
      <section className="py-12 bg-gradient-to-r from-[#e7f1e9] via-[#f3f8f4] to-white border-y border-[#dce6dd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-2xl sm:text-3xl font-black text-[#14261b] mb-10"
            style={{ fontFamily: "Georgia, serif" }}
          >
            We Prefer Quality
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {qualityItems.map((item, idx) => (
              <div
                key={item.title}
                className={`p-4 ${
                  idx < qualityItems.length - 1 ? "md:border-r md:border-[#ffc400]" : ""
                }`}
              >
                <div className="text-3xl sm:text-4xl mb-2">{item.icon}</div>
                <h3 className="text-base font-extrabold text-[#14261b]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#536159] mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-16 sm:py-24 bg-[#eef7f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-14 h-1 bg-[#ffc400] mx-auto mb-2" />
            <h2
              className="text-2xl sm:text-4xl font-extrabold text-[#14261b]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Why Choose Us
            </h2>
            <p className="text-xs sm:text-sm text-[#536159] mt-2">
              Uncompromising standards from farm harvest to ocean container delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {chooseCards.map((c) => (
              <article
                key={c.title}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#dce6dd]"
              >
                <div className="w-12 h-12 rounded-full bg-[#f3f8f4] text-[#00552e] flex items-center justify-center text-xl font-bold mx-auto mb-4 border border-[#dce6dd]">
                  {c.icon}
                </div>
                <h3
                  className="text-base font-bold text-[#14261b] mb-2"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {c.title}
                </h3>
                <p className="text-xs text-[#536159] leading-relaxed">
                  {c.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM DOWNLOAD & NEWS SECTION */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Download Card */}
            <div className="md:col-span-6 bg-gradient-to-br from-[#005c34] to-[#003b22] text-white p-8 rounded-2xl flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-3xl mb-2 block">▱</span>
                <h2
                  className="text-2xl sm:text-3xl font-extrabold"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Download <br />
                  Product Specifications
                </h2>
                <p className="text-xs sm:text-sm text-emerald-100 mt-2 max-w-md">
                  Get complete analytical data sheets, grading criteria, moisture parameters, and packing configurations.
                </p>
              </div>

              <div className="pt-6">
                <Button
                  variant="contained"
                  onClick={handleDownloadSpecs}
                  sx={{
                    bgcolor: "#ffc400",
                    color: "#17351f",
                    fontWeight: 900,
                    fontSize: "0.75rem",
                    px: 3.5,
                    py: 1.2,
                    borderRadius: "6px",
                    textTransform: "uppercase",
                    "&:hover": { bgcolor: "#e0ad00" },
                  }}
                >
                  Download PDF Sheet &nbsp; →
                </Button>
              </div>
            </div>

            {/* News Card */}
            <div className="md:col-span-6 bg-[#fbfcfb] border border-[#dce6dd] rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="w-10 h-1 bg-[#ffc400] mb-2" />
                <h2
                  className="text-xl sm:text-2xl font-bold text-[#14261b] mb-4"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  From Our Trade Blog
                </h2>
                <div className="flex flex-col sm:flex-row gap-5 items-center">
                  <div className="relative w-full sm:w-44 h-32 shrink-0 rounded-xl overflow-hidden border border-[#dce6dd]">
                    <Image
                      src="https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=500&q=85"
                      alt="Red chilli news"
                      fill
                      sizes="(max-width: 640px) 100vw, 176px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#14261b]">
                      Global Demand for Indian Dried Red Chilli Continues to Rise
                    </h3>
                    <p className="text-xs text-[#536159] mt-1.5 leading-relaxed">
                      How modern cold storage facilities and direct contract farming in Andhra Pradesh ensure round-the-year quality supply.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#dce6dd] mt-4 flex items-center justify-between">
                <span className="text-xs font-bold text-[#b71d16]">Market Insights · Export Trends</span>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-xs font-bold text-[#00552e] hover:text-[#b71d16] transition-colors cursor-pointer"
                >
                  Contact Trade Desk &nbsp; →
                </button>
              </div>
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
              borderRadius: "12px",
              p: 1,
            },
          },
        }}
      >
        {selectedVariety && (
          <>
            <DialogTitle sx={{ pb: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <span className="text-xs font-black uppercase text-[#b71d16] tracking-wider block">
                  Export Grade Specifications
                </span>
                <span className="text-2xl font-black text-[#14261b]">
                  {selectedVariety.name}
                </span>
              </div>
              <IconButton onClick={() => setSelectedVariety(null)} size="small">
                ✕
              </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ py: 2 }}>
              <div className="space-y-4 text-xs sm:text-sm text-[#536159]">
                <div className="grid grid-cols-2 gap-3 p-3 bg-[#f3f8f4] rounded-lg">
                  <div>
                    <span className="font-bold text-[#14261b] block">Heat Range:</span>
                    <span>{selectedVariety.shu}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#14261b] block">Color Value:</span>
                    <span>{selectedVariety.asta}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#14261b] block">Available Form:</span>
                    <span>{selectedVariety.form}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#14261b] block">Moisture Limit:</span>
                    <span>&lt; 11% Max</span>
                  </div>
                </div>

                <div>
                  <span className="font-bold text-[#14261b] block mb-1">Description:</span>
                  <p className="leading-relaxed">{selectedVariety.description}</p>
                </div>

                <div>
                  <span className="font-bold text-[#14261b] block mb-2">Recommended Culinary &amp; Processing Uses:</span>
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
                sx={{ color: "#00552e", fontWeight: 700, fontSize: "0.75rem" }}
              >
                Download Quality Specs
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  const targetName = selectedVariety.name;
                  setSelectedVariety(null);
                  setFormData((prev) => ({ ...prev, variety: targetName }));
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                sx={{
                  bgcolor: "#ffc400",
                  color: "#17351f",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  "&:hover": { bgcolor: "#e0ad00" },
                }}
              >
                Inquire For This Variety →
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
        <Alert onClose={() => setToastOpen(false)} severity={toastSeverity} sx={{ bgcolor: "#003a20", color: "#fff" }}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
