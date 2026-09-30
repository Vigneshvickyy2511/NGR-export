"use client";

import React, { useState, useRef } from "react";
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
  Flame,
  ShieldCheck,
  CookingPot,
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
  FileSpreadsheet,
  Download,
  ArrowRight,
  X,
  Zap,
  Palette,
  Sun,
} from "lucide-react";

interface ChilliVariety {
  name: string;
  type: string;
  icon: React.ComponentType<{ className?: string }>;
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

  const handleDownloadSpecs = () => {
    setToastSeverity("info");
    setToastMessage("Dried Red Chilli Technical Datasheet & Quality Certificate downloaded.");
    setToastOpen(true);
  };

  const varieties: ChilliVariety[] = [
    {
      name: "Teja Chilli (S17)",
      type: "High Pungency / Fiery Heat",
      icon: Flame,
      shu: "75,000 – 100,000 SHU",
      asta: "50 – 70 ASTA",
      form: "With Stem / Stemless",
      description: "Renowned globally as one of India's hottest export varieties. Intense fiery pungent profile with thin skin, ideal for oleoresin extraction and spicy food seasonings.",
      applications: ["Oleoresin extraction", "Hot sauce manufacturing", "Chilli flakes & powders", "Meat marinades & snacks"],
    },
    {
      name: "Sannam Chilli (S4 / 334)",
      type: "Medium Pungency / Balanced Flavor",
      icon: Zap,
      shu: "25,000 – 40,000 SHU",
      asta: "40 – 60 ASTA",
      form: "With Stem / Stemless",
      description: "India's highest volume export chilli. Delivers a dependable, well-balanced heat and robust aroma widely demanded in commercial food processing.",
      applications: ["Everyday curry powders", "Spice blends & seasonings", "Canned foods & soups", "Food service bulk supply"],
    },
    {
      name: "Byadgi Chilli (Syngenta 5531)",
      type: "Deep Red Color / Mild Pungency",
      icon: Palette,
      shu: "8,000 – 15,000 SHU",
      asta: "130 – 160 ASTA",
      form: "Wrinkled Pods With Stem / Stemless",
      description: "Distinguished by its crinkled skin and extraordinary high natural red pigmentation with mild soothing warmth. The benchmark for natural food color extraction.",
      applications: ["Natural color extraction", "Tandoori masalas & pastes", "Premium mild curry powders", "Western snacks & chips"],
    },
    {
      name: "Kashmiri Chilli",
      type: "Rich Crimson / Mild Sweet Heat",
      icon: Sun,
      shu: "1,500 – 3,000 SHU",
      asta: "140 – 180 ASTA",
      form: "Whole Dried / Powdered",
      description: "Imparts a glowing crimson hue to culinary dishes without overwhelming piquancy. Highly sought-after for gourmet gastronomy and retail spice brands.",
      applications: ["Gourmet sauces & stews", "Butter chicken & gravies", "Retail bottled spice mixes", "Artisan seasonings"],
    },
  ];

  const commitmentCards = [
    {
      icon: Flame,
      title: "Finest Red Chillies",
      desc: "Handpicked and sun-dried for vibrant deep red color, optimum moisture, and robust natural flavor.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      desc: "Strict quality control ensures consistent purity, pod size, ASTA color value, and calibrated heat levels.",
    },
    {
      icon: CookingPot,
      title: "Varieties and Uses",
      desc: "Ideal for industrial sauces, curry blends, oleoresin extraction, crushed flakes, and fine spice powders.",
    },
    {
      icon: Globe2,
      title: "Global Reach",
      desc: "Trusted by importers and food processors across Asia, the Middle East, Europe, and North America.",
    },
    {
      icon: PackageCheck,
      title: "Packaging & Customization",
      desc: "Available in consumer bags, 5kg/10kg/25kg jute & PP bags, and custom containerized bulk packaging.",
    },
  ];

  const qualityItems = [
    { icon: Truck, title: "Fast delivery", subtitle: "Streamlined port logistics" },
    { icon: BadgeCheck, title: "Certified products", subtitle: "Spices Board & Phytosanitary" },
    { icon: HeartPulse, title: "Only healthy", subtitle: "Aflatoxin & pesticide tested" },
    { icon: Sprout, title: "Organic making", subtitle: "Ethically farmed crops" },
  ];

  const chooseCards = [
    {
      icon: Award,
      title: "Premium Quality",
      desc: "We source only the best red chillies directly from Guntur and Warangal farm belts, ensuring superior taste, color, and heat.",
    },
    {
      icon: Ship,
      title: "Global Supply Chain",
      desc: "Reliable and efficient distribution with dedicated freight partnerships to meet international delivery schedules.",
    },
    {
      icon: SlidersHorizontal,
      title: "Custom Solutions",
      desc: "Flexible packaging, customized moisture control, stemless sorting, and bulk supply options per your exact specifications.",
    },
    {
      icon: Leaf,
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
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#b71d16]/10 text-[#b71d16] text-xs font-bold uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              Export-Grade Whole &amp; Stemless
            </div>
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

              {/* Quality & Assurance Badges */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f5faf6] border border-[#dce8df]">
                  <div className="w-9 h-9 rounded-lg bg-[#b71d16]/10 text-[#b71d16] flex items-center justify-center shrink-0">
                    <Flame className="w-4.5 h-4.5 text-[#b71d16]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#14261b]">Guntur Belts</span>
                    <span className="block text-[11px] text-[#536159]">Direct Farm Sourced</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f5faf6] border border-[#dce8df]">
                  <div className="w-9 h-9 rounded-lg bg-[#00552e]/10 text-[#00552e] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4.5 h-4.5 text-[#00552e]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#14261b]">&lt; 11% Moisture</span>
                    <span className="block text-[11px] text-[#536159]">Aflatoxin Tested</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f5faf6] border border-[#dce8df]">
                  <div className="w-9 h-9 rounded-lg bg-[#00552e]/10 text-[#00552e] flex items-center justify-center shrink-0">
                    <Ship className="w-4.5 h-4.5 text-[#00552e]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#14261b]">Ocean Freight</span>
                    <span className="block text-[11px] text-[#536159]">Global Port Delivery</span>
                  </div>
                </div>
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
                {commitmentCards.map((card, idx) => {
                  const CardIcon = card.icon;
                  return (
                    <article
                      key={card.title}
                      className={`group bg-white p-5 rounded-xl border border-[#dce6dd] shadow-sm hover:shadow-md hover:border-[#9cc0a8] hover:-translate-y-1 transition-all duration-200 flex items-start gap-4 ${
                        idx === commitmentCards.length - 1 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <span className="w-11 h-11 rounded-xl bg-[#f3f8f4] text-[#00552e] flex items-center justify-center shrink-0 border border-[#dce6dd] group-hover:bg-[#00552e] group-hover:text-[#ffc400] transition-colors duration-300">
                        <CardIcon className="w-5 h-5 stroke-[1.8]" />
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-[#14261b] mb-1 group-hover:text-[#00552e] transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-xs text-[#536159] leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </article>
                  );
                })}
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
            {varieties.map((v) => {
              const VarietyIcon = v.icon;
              return (
                <article
                  key={v.name}
                  className="group bg-[#fffdf9] rounded-xl border border-[#dce6dd] p-6 shadow-sm hover:shadow-xl hover:border-[#b71d16] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#b71d16] bg-[#b71d16]/10 px-2.5 py-0.5 rounded-full inline-block">
                        {v.type}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-[#b71d16]/10 text-[#b71d16] flex items-center justify-center shrink-0 group-hover:bg-[#b71d16] group-hover:text-white transition-colors duration-300">
                        <VarietyIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3
                      className="text-xl font-bold text-[#14261b] mb-2 group-hover:text-[#b71d16] transition-colors"
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
                      endIcon={<ArrowRight className="w-3.5 h-3.5" />}
                      sx={{
                        borderColor: "#00552e",
                        color: "#00552e",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        py: 0.8,
                        "&:hover": {
                          borderColor: "#b71d16",
                          color: "#b71d16",
                          bgcolor: "#fdf5f5",
                        },
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
            {qualityItems.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-4 ${
                    idx < qualityItems.length - 1 ? "md:border-r md:border-[#ffc400]/40" : ""
                  }`}
                >
                  <div className="w-14 h-14 rounded-full bg-white border border-[#ffc400]/60 text-[#00552e] flex items-center justify-center mx-auto mb-3 shadow-xs">
                    <ItemIcon className="w-7 h-7 text-[#00552e] stroke-[1.8]" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#14261b]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#536159] mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
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
            {chooseCards.map((c) => {
              const ChooseIcon = c.icon;
              return (
                <article
                  key={c.title}
                  className="group bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#dce6dd]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#f3f8f4] text-[#00552e] flex items-center justify-center mx-auto mb-4 border border-[#dce6dd] group-hover:bg-[#00552e] group-hover:text-[#ffc400] transition-colors duration-300">
                    <ChooseIcon className="w-7 h-7 stroke-[1.8]" />
                  </div>
                  <h3
                    className="text-base font-bold text-[#14261b] mb-2 group-hover:text-[#00552e] transition-colors"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {c.title}
                  </h3>
                  <p className="text-xs text-[#536159] leading-relaxed">
                    {c.desc}
                  </p>
                </article>
              );
            })}
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
                <FileSpreadsheet className="w-9 h-9 text-[#ffc400] mb-3 stroke-[1.8]" />
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
                  endIcon={<Download className="w-4 h-4 ml-1" />}
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
                  Download PDF Sheet
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
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00552e] hover:text-[#b71d16] transition-colors cursor-pointer group"
                >
                  <span>Contact Trade Desk</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
              <IconButton onClick={() => setSelectedVariety(null)} size="small" aria-label="Close dialog">
                <X className="w-5 h-5 text-[#14261b]" />
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
                startIcon={<Download className="w-4 h-4" />}
                sx={{ color: "#00552e", fontWeight: 700, fontSize: "0.75rem" }}
              >
                Download Quality Specs
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
                  bgcolor: "#b71d16",
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  "&:hover": { bgcolor: "#96140e" },
                }}
              >
                Inquire For This Chilli
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
