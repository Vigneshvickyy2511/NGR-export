"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Snackbar, Alert } from "@mui/material";
import { motion, type Variants } from "motion/react";
import {
  Sparkles,
  Leaf,
  Globe2,
  Truck,
  BadgeCheck,
  HeartPulse,
  Sprout,
  HeartHandshake,
  Handshake,
  Target,
  Scale,
  Users,
  Award,
  Warehouse,
  ShieldCheck,
  Wheat,
  FlaskConical,
  Ship,
  ArrowRight,
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: custom * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutView() {
  const router = useRouter();
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

        {/* Floating Decorative Motifs with Lucide Icons */}
        <motion.div
          initial={{ opacity: 0, rotate: -35 }}
          animate={{ opacity: 0.08, rotate: -25, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 1 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute left-[-20px] top-6 text-white select-none pointer-events-none z-[1]"
          aria-hidden="true"
        >
          <Leaf className="w-32 h-32 sm:w-44 sm:h-44 stroke-[1.2]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotate: -40 }}
          animate={{ opacity: 0.06, rotate: -30, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 1 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute left-[35%] bottom-[-45px] text-white select-none pointer-events-none z-[1]"
          aria-hidden="true"
        >
          <Globe2 className="w-36 h-36 sm:w-48 sm:h-48 stroke-[1.2]" />
        </motion.div>

        {/* Hero Content with Staggered Entrance */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16"
        >
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-[#ffd000] tracking-widest uppercase shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ffd000]" />
            Discover Our Legacy &amp; Vision
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            custom={1}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-2 leading-none drop-shadow-lg"
          >
            About Us
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            custom={2}
            className="w-20 sm:w-24 h-1.5 bg-[#ffd000] rounded-full mt-4"
          />
        </motion.div>
      </section>

      {/* 2. ABOUT MAIN DETAIL SECTION */}
      <section id="about" className="py-16 sm:py-24 bg-gradient-to-br from-white via-white to-[#eff7ec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Copy Column */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
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

              {/* Pan-India & Global Trade Capabilities Badges */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#e2ece5] shadow-xs hover:border-[#a5c7b2] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#00552f]/10 text-[#00552f] flex items-center justify-center shrink-0">
                    <Warehouse className="w-5 h-5 text-[#00552f]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#173c29]">Pan-India</span>
                    <span className="block text-[11px] text-[#5f6963]">Warehouses</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#e2ece5] shadow-xs hover:border-[#a5c7b2] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#00552f]/10 text-[#00552f] flex items-center justify-center shrink-0">
                    <Globe2 className="w-5 h-5 text-[#00552f]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#173c29]">Global</span>
                    <span className="block text-[11px] text-[#5f6963]">Import Sourcing</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#e2ece5] shadow-xs hover:border-[#a5c7b2] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#00552f]/10 text-[#00552f] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#00552f]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#173c29]">100% Quality</span>
                    <span className="block text-[11px] text-[#5f6963]">Certified Standards</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Collage Column */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative pt-4 pb-8 pl-4 pr-2"
            >
              {/* Gold decorative border box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute left-0 top-8 w-[68%] h-[88%] border-2 border-[#ffd000] rounded-2xl pointer-events-none -z-0"
                aria-hidden="true"
              />

              {/* Main warehouse logistics image */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-[72%] h-[320px] sm:h-[380px] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,61,35,0.22)] border border-emerald-100"
              >
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=86"
                  alt="Warehouse Logistics Hub"
                  fill
                  sizes="(max-width: 1024px) 70vw, 35vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Secondary overlapping shipping image */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="absolute right-0 bottom-0 z-20 w-[48%] h-[200px] sm:h-[240px] rounded-xl overflow-hidden border-4 border-white shadow-[0_16px_36px_rgba(0,61,35,0.25)]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=650&q=84"
                  alt="Global Freight Container Ship"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Floating Trust Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute left-2 bottom-3 z-30 inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-emerald-100 shadow-[0_12px_30px_rgba(0,61,35,0.18)]"
              >
                <div className="w-8 h-8 rounded-lg bg-[#ffd000]/20 text-[#00552f] flex items-center justify-center shrink-0">
                  <Award className="w-4.5 h-4.5 text-[#00552f]" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#173c29] leading-tight">Since 2022</p>
                  <p className="text-[10px] font-bold text-[#00552f] uppercase tracking-wider">Trusted Global Trade</p>
                </div>
              </motion.div>
            </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#ffd000] mb-1">
              What We Offer
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              We Prefer Quality
            </h2>
            <div className="w-14 h-1 bg-[#ffd000] rounded-full mx-auto mt-3 animate-pulse-dash" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 relative"
          >
            {[
              {
                icon: Truck,
                title: "Fast Delivery",
                desc: "Strategic logistics & rapid order dispatch",
              },
              {
                icon: BadgeCheck,
                title: "Certified Products",
                desc: "FSSAI & international quality compliance",
              },
              {
                icon: HeartPulse,
                title: "Only Healthy",
                desc: "Pure & unadulterated food ingredients",
              },
              {
                icon: Sprout,
                title: "Organic Making",
                desc: "Eco-friendly sourcing & natural products",
              },
            ].map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  custom={idx}
                  className="group relative text-center flex flex-col items-center"
                >
                  {/* Horizontal connector line on desktop */}
                  {idx < 3 && (
                    <div
                      className="hidden md:block absolute top-[44px] left-[65%] w-[70%] h-[2px] bg-[#ffd000]/60 z-0 pointer-events-none"
                      aria-hidden="true"
                    />
                  )}

                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 350, damping: 15 }}
                    className="relative z-10 w-20 h-20 sm:w-22 sm:h-22 rounded-full border-3 border-[#ffd000] bg-[#004a2d] flex items-center justify-center shadow-md cursor-pointer transition-shadow hover:shadow-[0_14px_35px_rgba(0,0,0,0.35)]"
                  >
                    <IconComp className="w-9 h-9 sm:w-10 sm:h-10 text-[#ffd000] stroke-[1.8]" />
                  </motion.div>
                  <b className="block mt-4 text-sm sm:text-base font-bold text-white tracking-wide">
                    {feature.title}
                  </b>
                  <p className="mt-1 text-xs text-emerald-100/75 max-w-[180px] leading-relaxed hidden sm:block">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. OUR VALUES SECTION */}
      <section id="values" className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#00552f] mb-1">
              Our Core Principles
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#173c29]">
              Our Values
            </h2>
            <div className="w-14 h-1 bg-[#ffd000] rounded-full mx-auto mt-3 animate-pulse-dash" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {/* Value 1: Passionate (spans 2 cols on lg) */}
            <motion.article
              variants={fadeInUp}
              custom={0}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group lg:col-span-2 p-6 sm:p-7 rounded-xl border border-[#dce8df] bg-gradient-to-br from-white to-[#edf6ea] shadow-sm hover:shadow-lg hover:border-[#a5c7b2] flex items-center gap-5 cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#00552f]/10 border border-[#00552f]/20 flex items-center justify-center shrink-0 text-[#00552f] shadow-xs group-hover:bg-[#00552f] group-hover:text-white transition-colors duration-300">
                <HeartHandshake className="w-7 h-7 stroke-[1.8]" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#173c29] mb-1">
                  Passionate
                </h3>
                <p className="text-xs sm:text-sm text-[#5f6963] leading-relaxed">
                  To delight customers in every transaction with proactive care and tailored solutions.
                </p>
              </div>
            </motion.article>

            {/* Value 2: Reliable (spans 2 cols on lg, rich emerald card) */}
            <motion.article
              variants={fadeInUp}
              custom={1}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group lg:col-span-2 p-6 sm:p-7 rounded-xl border border-emerald-800 bg-gradient-to-br from-[#00713e] to-[#004a2b] text-white shadow-md hover:shadow-xl flex items-center gap-5 cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#ffd000] shadow-xs group-hover:bg-white/20 transition-colors duration-300">
                <Handshake className="w-7 h-7 stroke-[1.8]" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1">
                  Reliable
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                  To deliver our commitments on time, every time, maintaining strict supply continuity.
                </p>
              </div>
            </motion.article>

            {/* Value 3: Focused */}
            <motion.article
              variants={fadeInUp}
              custom={2}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group p-6 rounded-xl border border-[#dce8df] bg-gradient-to-br from-white to-[#edf6ea] shadow-sm hover:shadow-lg hover:border-[#a5c7b2] text-center flex flex-col items-center justify-center min-h-[170px] cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00552f]/10 border border-[#00552f]/20 flex items-center justify-center mb-3 text-[#00552f] group-hover:bg-[#00552f] group-hover:text-white transition-colors duration-300">
                <Target className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h3 className="text-base font-extrabold text-[#173c29] mb-1">
                Focused
              </h3>
              <p className="text-xs text-[#5f6963] leading-relaxed">
                To adhere to our vision and achieve our business objectives.
              </p>
            </motion.article>

            {/* Value 4: Ethical */}
            <motion.article
              variants={fadeInUp}
              custom={3}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group p-6 rounded-xl border border-[#dce8df] bg-gradient-to-br from-white to-[#edf6ea] shadow-sm hover:shadow-lg hover:border-[#a5c7b2] text-center flex flex-col items-center justify-center min-h-[170px] cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00552f]/10 border border-[#00552f]/20 flex items-center justify-center mb-3 text-[#00552f] group-hover:bg-[#00552f] group-hover:text-white transition-colors duration-300">
                <Scale className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h3 className="text-base font-extrabold text-[#173c29] mb-1">
                Ethical
              </h3>
              <p className="text-xs text-[#5f6963] leading-relaxed">
                To be upright and transparent in all our commercial practices.
              </p>
            </motion.article>

            {/* Value 5: Relationships */}
            <motion.article
              variants={fadeInUp}
              custom={4}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group p-6 rounded-xl border border-[#dce8df] bg-gradient-to-br from-white to-[#edf6ea] shadow-sm hover:shadow-lg hover:border-[#a5c7b2] text-center flex flex-col items-center justify-center min-h-[170px] cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00552f]/10 border border-[#00552f]/20 flex items-center justify-center mb-3 text-[#00552f] group-hover:bg-[#00552f] group-hover:text-white transition-colors duration-300">
                <Users className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h3 className="text-base font-extrabold text-[#173c29] mb-1">
                Relationships
              </h3>
              <p className="text-xs text-[#5f6963] leading-relaxed">
                To align with clients and partners who share our core values.
              </p>
            </motion.article>

            {/* Value 6: Excellence */}
            <motion.article
              variants={fadeInUp}
              custom={5}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group p-6 rounded-xl border border-[#dce8df] bg-gradient-to-br from-white to-[#edf6ea] shadow-sm hover:shadow-lg hover:border-[#a5c7b2] text-center flex flex-col items-center justify-center min-h-[170px] cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00552f]/10 border border-[#00552f]/20 flex items-center justify-center mb-3 text-[#00552f] group-hover:bg-[#00552f] group-hover:text-white transition-colors duration-300">
                <Award className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h3 className="text-base font-extrabold text-[#173c29] mb-1">
                Excellence
              </h3>
              <p className="text-xs text-[#5f6963] leading-relaxed">
                To achieve our true potential through continuous progress.
              </p>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* 5. RECENT ADDED / WHAT'S NEW GALLERY */}
      <section id="news" className="py-16 sm:py-20 bg-[#f6faf7] border-t border-[#d9e4dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#00552f] mb-1">
              Recent Added
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#173c29]">
              What’s New?
            </h2>
            <div className="w-14 h-1 bg-[#ffd000] rounded-full mx-auto mt-3 animate-pulse-dash" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {/* Gallery Image 1: Spices */}
            <motion.figure
              variants={scaleIn}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-xl overflow-hidden border border-[#d9e4dc] bg-white shadow-sm hover:shadow-xl m-0 cursor-pointer"
            >
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=86"
                  alt="Premium Sesame Seeds and Spices"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:saturate-115"
                />
              </div>
              <figcaption className="p-4 sm:p-5 bg-white border-t border-[#d9e4dc] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Wheat className="w-4 h-4 text-[#00552f]" />
                    <b className="text-sm font-bold text-[#173c29]">Agro Commodities</b>
                  </div>
                  <span className="text-xs text-[#5f6d65] block">Premium sesame seeds, spices, and pulses</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#00552f] flex items-center justify-center group-hover:bg-[#00552f] group-hover:text-white transition-colors duration-300 shrink-0">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </figcaption>
            </motion.figure>

            {/* Gallery Image 2: Industrial Chemicals */}
            <motion.figure
              variants={scaleIn}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-xl overflow-hidden border border-[#d9e4dc] bg-white shadow-sm hover:shadow-xl m-0 cursor-pointer"
            >
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=86"
                  alt="Industrial Chemicals and Laboratory Acids"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:saturate-115"
                />
              </div>
              <figcaption className="p-4 sm:p-5 bg-white border-t border-[#d9e4dc] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FlaskConical className="w-4 h-4 text-[#00552f]" />
                    <b className="text-sm font-bold text-[#173c29]">Industrial Chemicals</b>
                  </div>
                  <span className="text-xs text-[#5f6d65] block">Specialty acids, reagents, and polymer solutions</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#00552f] flex items-center justify-center group-hover:bg-[#00552f] group-hover:text-white transition-colors duration-300 shrink-0">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </figcaption>
            </motion.figure>

            {/* Gallery Image 3: Cargo Logistics */}
            <motion.figure
              variants={scaleIn}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-xl overflow-hidden border border-[#d9e4dc] bg-white shadow-sm hover:shadow-xl m-0 cursor-pointer"
            >
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=800&q=86"
                  alt="Global Container Freight"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:saturate-115"
                />
              </div>
              <figcaption className="p-4 sm:p-5 bg-white border-t border-[#d9e4dc] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Ship className="w-4 h-4 text-[#00552f]" />
                    <b className="text-sm font-bold text-[#173c29]">Maritime Logistics</b>
                  </div>
                  <span className="text-xs text-[#5f6d65] block">Scheduled global shipments and port operations</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#00552f] flex items-center justify-center group-hover:bg-[#00552f] group-hover:text-white transition-colors duration-300 shrink-0">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </figcaption>
            </motion.figure>
          </motion.div>
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
