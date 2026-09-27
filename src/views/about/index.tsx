"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Button, Snackbar, Alert } from "@mui/material";

export default function AboutView() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 70, y: 40 });
  const [toastOpen, setToastOpen] = useState(false);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y });
  };

  const handleContactClick = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/#contact";
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section
        id="about-hero"
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-[380px] sm:min-h-[440px] flex items-center justify-start text-white overflow-hidden"
      >
        {/* Animated Background Image */}
        <div
          className="absolute -inset-4 z-0 bg-cover bg-center animate-hero-drift pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(100deg, rgba(0, 67, 38, 0.95) 0%, rgba(0, 67, 38, 0.72) 56%, rgba(0, 55, 32, 0.45) 100%), url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1800&q=88')`,
          }}
        />

        {/* Dynamic Spotlight Glow */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255, 213, 0, 0.18) 0%, transparent 35%)`,
          }}
        />

        {/* Decorative Leaf Motifs */}
        <span
          className="absolute left-[-20px] top-8 text-8xl sm:text-9xl text-white opacity-[0.07] select-none pointer-events-none -rotate-[25deg] z-[1]"
          aria-hidden="true"
        >
          ❧
        </span>
        <span
          className="absolute left-[35%] bottom-[-45px] text-8xl sm:text-9xl text-white opacity-[0.06] select-none pointer-events-none -rotate-[30deg] z-[1]"
          aria-hidden="true"
        >
          ❧
        </span>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 animate-hero-enter">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-[#ffd000] tracking-widest uppercase">
            <span>●</span> Discover Our Legacy &amp; Vision
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-2 leading-none drop-shadow-lg">
            About Us
          </h1>
          <div className="w-20 sm:w-24 h-1.5 bg-[#ffd000] rounded-full mt-4" />
        </div>
      </section>

      {/* 2. ABOUT MAIN DETAIL SECTION */}
      <section id="about" className="py-16 sm:py-24 bg-gradient-to-br from-white via-white to-[#eff7ec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Copy Column */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#00552f] mb-1">
                  About Us
                </p>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#173c29] leading-tight tracking-tight">
                  Quality Food Products, <br />
                  <span className="text-[#00552f]">Trusted Global Source</span>
                </h2>
                <div className="w-12 h-1 bg-[#ffd000] rounded-full mt-3 animate-pulse-dash origin-left" />
              </div>

              <p className="text-sm sm:text-base text-[#5f6963] leading-relaxed">
                Since 2022, <strong>NGR Impex</strong> has been at the forefront of supplying various food ingredients and chemicals to a variety of industries including food, pharma, plastic and personal care industries, ferrous and non-ferrous scrap. Our commitment to excellence drives our success in the global market.
              </p>

              <p className="text-sm sm:text-base text-[#5f6963] leading-relaxed">
                NGR Impex has emerged as one of the leading importers of food ingredients and chemicals in India. Our strategically located warehouses can fulfill all your requirements on a timely basis across India.
              </p>

              <div className="pt-2">
                <Button
                  variant="contained"
                  onClick={handleContactClick}
                  sx={{
                    bgcolor: "#ffd000",
                    color: "#17351f",
                    fontWeight: 900,
                    fontSize: "0.8rem",
                    px: 3.5,
                    py: 1.3,
                    borderRadius: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    boxShadow: "0 8px 22px rgba(216, 168, 0, 0.25)",
                    "&:hover": {
                      bgcolor: "#e6bc00",
                      transform: "translateY(-2px)",
                      boxShadow: "0 14px 28px rgba(216, 168, 0, 0.4)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  Contact Us →
                </Button>
              </div>
            </div>

            {/* Right Collage Column */}
            <div className="relative pt-4 pb-8 pl-4 pr-2">
              {/* Gold decorative border box */}
              <div
                className="absolute left-0 top-8 w-[68%] h-[88%] border-2 border-[#ffd000] rounded-2xl pointer-events-none -z-0"
                aria-hidden="true"
              />

              {/* Main warehouse logistics image */}
              <div className="relative z-10 w-[72%] h-[320px] sm:h-[380px] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,61,35,0.22)] border border-emerald-100">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=86"
                  alt="Warehouse Logistics Hub"
                  fill
                  sizes="(max-width: 1024px) 70vw, 35vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Secondary overlapping shipping image */}
              <div className="absolute right-0 bottom-0 z-20 w-[48%] h-[200px] sm:h-[240px] rounded-xl overflow-hidden border-4 border-white shadow-[0_16px_36px_rgba(0,61,35,0.25)]">
                <Image
                  src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=650&q=84"
                  alt="Global Freight Container Ship"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER SECTION */}
      <section
        className="py-16 sm:py-20 text-white relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 68, 39, 0.94), rgba(0, 97, 58, 0.94)), url('https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1700&q=80')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#ffd000] mb-1">
              What We Offer
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              We Prefer Quality
            </h2>
            <div className="w-14 h-1 bg-[#ffd000] rounded-full mx-auto mt-3 animate-pulse-dash" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
            {[
              { icon: "🚚", title: "Fast Delivery" },
              { icon: "✓", title: "Certified Products" },
              { icon: "❦", title: "Only Healthy" },
              { icon: "♧", title: "Organic Making" },
            ].map((feature, idx) => (
              <div key={feature.title} className="group relative text-center flex flex-col items-center">
                {/* Horizontal connector line on desktop */}
                {idx < 3 && (
                  <div
                    className="hidden md:block absolute top-[44px] left-[65%] w-[70%] h-[2px] bg-[#ffd000]/60 z-0 pointer-events-none"
                    aria-hidden="true"
                  />
                )}

                <div className="relative z-10 w-20 h-20 sm:w-22 sm:h-22 rounded-full border-3 border-[#ffd000] bg-[#004a2d] flex items-center justify-center text-3xl sm:text-4xl shadow-md group-hover:-translate-y-2 group-hover:rotate-6 group-hover:shadow-[0_12px_35px_rgba(0,0,0,0.35)] transition-all duration-300">
                  {feature.icon}
                </div>
                <b className="block mt-4 text-sm sm:text-base font-bold text-white tracking-wide">
                  {feature.title}
                </b>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR VALUES SECTION */}
      <section id="values" className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#00552f] mb-1">
              Our Values
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#173c29]">
              Our Values
            </h2>
            <div className="w-14 h-1 bg-[#ffd000] rounded-full mx-auto mt-3 animate-pulse-dash" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Value 1: Passionate (spans 2 cols on lg) */}
            <article className="lg:col-span-2 p-6 sm:p-7 rounded-xl border border-[#dce8df] bg-gradient-to-br from-white to-[#edf6ea] shadow-sm hover:-translate-y-1.5 hover:shadow-lg hover:border-[#a5c7b2] transition-all duration-300 flex items-center gap-5">
              <div className="text-4xl sm:text-5xl text-[#00552f] shrink-0">
                ♡
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#173c29] mb-1">
                  Passionate
                </h3>
                <p className="text-xs sm:text-sm text-[#5f6963] leading-relaxed">
                  To delight customers in every transaction with proactive care and tailored solutions.
                </p>
              </div>
            </article>

            {/* Value 2: Reliable (spans 2 cols on lg, rich emerald card) */}
            <article className="lg:col-span-2 p-6 sm:p-7 rounded-xl border border-emerald-800 bg-gradient-to-br from-[#00713e] to-[#004a2b] text-white shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex items-center gap-5">
              <div className="text-4xl sm:text-5xl shrink-0">
                🤝
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1">
                  Reliable
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                  To deliver our commitments on time, every time, maintaining strict supply continuity.
                </p>
              </div>
            </article>

            {/* Value 3: Focused */}
            <article className="p-6 rounded-xl border border-[#dce8df] bg-gradient-to-br from-white to-[#edf6ea] shadow-sm hover:-translate-y-1.5 hover:shadow-lg hover:border-[#a5c7b2] transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[170px]">
              <div className="text-3xl sm:text-4xl mb-3 text-[#00552f]">
                🎯
              </div>
              <h3 className="text-base font-extrabold text-[#173c29] mb-1">
                Focused
              </h3>
              <p className="text-xs text-[#5f6963] leading-relaxed">
                To adhere to our vision and achieve our business objectives.
              </p>
            </article>

            {/* Value 4: Ethical */}
            <article className="p-6 rounded-xl border border-[#dce8df] bg-gradient-to-br from-white to-[#edf6ea] shadow-sm hover:-translate-y-1.5 hover:shadow-lg hover:border-[#a5c7b2] transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[170px]">
              <div className="text-3xl sm:text-4xl mb-3 text-[#00552f]">
                ♢
              </div>
              <h3 className="text-base font-extrabold text-[#173c29] mb-1">
                Ethical
              </h3>
              <p className="text-xs text-[#5f6963] leading-relaxed">
                To be upright and transparent in all our commercial practices.
              </p>
            </article>

            {/* Value 5: Relationships */}
            <article className="p-6 rounded-xl border border-[#dce8df] bg-gradient-to-br from-white to-[#edf6ea] shadow-sm hover:-translate-y-1.5 hover:shadow-lg hover:border-[#a5c7b2] transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[170px]">
              <div className="text-3xl sm:text-4xl mb-3 text-[#00552f]">
                ♧
              </div>
              <h3 className="text-base font-extrabold text-[#173c29] mb-1">
                Relationships
              </h3>
              <p className="text-xs text-[#5f6963] leading-relaxed">
                To align with clients and partners who share our core values.
              </p>
            </article>

            {/* Value 6: Excellence */}
            <article className="p-6 rounded-xl border border-[#dce8df] bg-gradient-to-br from-white to-[#edf6ea] shadow-sm hover:-translate-y-1.5 hover:shadow-lg hover:border-[#a5c7b2] transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[170px]">
              <div className="text-3xl sm:text-4xl mb-3 text-[#00552f]">
                ☆
              </div>
              <h3 className="text-base font-extrabold text-[#173c29] mb-1">
                Excellence
              </h3>
              <p className="text-xs text-[#5f6963] leading-relaxed">
                To achieve our true potential through continuous progress.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 5. RECENT ADDED / WHAT'S NEW GALLERY */}
      <section id="news" className="py-16 sm:py-20 bg-[#f6faf7] border-t border-[#d9e4dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#00552f] mb-1">
              Recent Added
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#173c29]">
              What’s New?
            </h2>
            <div className="w-14 h-1 bg-[#ffd000] rounded-full mx-auto mt-3 animate-pulse-dash" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Gallery Image 1: Spices */}
            <figure className="group relative rounded-xl overflow-hidden border border-[#d9e4dc] bg-white shadow-sm hover:shadow-xl transition-all duration-300 m-0">
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=86"
                  alt="Premium Sesame Seeds and Spices"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:saturate-115"
                />
              </div>
              <figcaption className="p-4 bg-white border-t border-[#d9e4dc]">
                <b className="block text-sm font-bold text-[#173c29]">Agro Commodities</b>
                <span className="text-xs text-[#5f6d65]">Premium sesame seeds, spices, and pulses</span>
              </figcaption>
            </figure>

            {/* Gallery Image 2: Industrial Chemicals */}
            <figure className="group relative rounded-xl overflow-hidden border border-[#d9e4dc] bg-white shadow-sm hover:shadow-xl transition-all duration-300 m-0">
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=86"
                  alt="Industrial Chemicals and Laboratory Acids"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:saturate-115"
                />
              </div>
              <figcaption className="p-4 bg-white border-t border-[#d9e4dc]">
                <b className="block text-sm font-bold text-[#173c29]">Industrial Chemicals</b>
                <span className="text-xs text-[#5f6d65]">Specialty acids, reagents, and polymer solutions</span>
              </figcaption>
            </figure>

            {/* Gallery Image 3: Cargo Logistics */}
            <figure className="group relative rounded-xl overflow-hidden border border-[#d9e4dc] bg-white shadow-sm hover:shadow-xl transition-all duration-300 m-0">
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=800&q=86"
                  alt="Global Container Freight"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:saturate-115"
                />
              </div>
              <figcaption className="p-4 bg-white border-t border-[#d9e4dc]">
                <b className="block text-sm font-bold text-[#173c29]">Maritime Logistics</b>
                <span className="text-xs text-[#5f6d65]">Scheduled global shipments and port operations</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Snackbar feedback */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={3000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={() => setToastOpen(false)} severity="success" sx={{ bgcolor: "#004326", color: "#fff" }}>
          Contact action captured. Connecting you with our team!
        </Alert>
      </Snackbar>
    </div>
  );
}
