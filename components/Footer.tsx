"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, TextField, Snackbar, Alert } from "@mui/material";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setToastMessage("Thank you for subscribing to NGR Impex newsletter!");
    setToastOpen(true);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-br from-[#003a24] via-[#004b2c] to-[#005d36] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/#home" className="inline-block leading-none">
              <span className="text-3xl font-black tracking-tight text-white flex items-baseline">
                NG<span className="text-[#ffd000]">R</span>
              </span>
              <span className="block text-[0.5rem] tracking-[0.4em] font-extrabold text-[#b3d8c3] uppercase mt-1">
                IMPEX
              </span>
            </Link>
            <p className="text-sm font-semibold text-[#ffd000]">
              Global Trade. A Greener Tomorrow.
            </p>
            <p className="text-xs text-[#dbebe1] leading-relaxed">
              Connecting dependable international producers with high-growth markets across agricultural commodities, industrial chemicals, polymers, and raw materials.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#ffd000] hover:text-[#003a24] text-white flex items-center justify-center transition-all text-xs font-bold"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#ffd000] hover:text-[#003a24] text-white flex items-center justify-center transition-all text-xs font-bold"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#ffd000] hover:text-[#003a24] text-white flex items-center justify-center transition-all text-xs font-bold"
                aria-label="Instagram"
              >
                ◎
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-extrabold tracking-wider uppercase text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffd000]"></span>
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs text-[#dbebe1]">
              <li>
                <Link href="/" className="hover:text-[#ffd000] transition-colors flex items-center gap-2">
                  <span className="text-[#ffd000]">›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#ffd000] transition-colors flex items-center gap-2">
                  <span className="text-[#ffd000]">›</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/import/metal-scrap" className="hover:text-[#ffd000] transition-colors flex items-center gap-2">
                  <span className="text-[#ffd000]">›</span> Metal Scrap
                </Link>
              </li>
              <li>
                <Link href="/import/acids" className="hover:text-[#ffd000] transition-colors flex items-center gap-2">
                  <span className="text-[#ffd000]">›</span> Industrial Acids
                </Link>
              </li>
              <li>
                <Link href="/import/cosmetic-chemical" className="hover:text-[#ffd000] transition-colors flex items-center gap-2">
                  <span className="text-[#ffd000]">›</span> Cosmetic Chemicals
                </Link>
              </li>
              <li>
                <Link href="/export/red-chilli" className="hover:text-[#ffd000] transition-colors flex items-center gap-2">
                  <span className="text-[#ffd000]">›</span> Dried Red Chilli
                </Link>
              </li>
              <li>
                <Link href="/export/mango-pulp" className="hover:text-[#ffd000] transition-colors flex items-center gap-2">
                  <span className="text-[#ffd000]">›</span> Mango Pulp
                </Link>
              </li>
              <li>
                <Link href="/export/sesame-seed" className="hover:text-[#ffd000] transition-colors flex items-center gap-2">
                  <span className="text-[#ffd000]">›</span> Sesame Seeds
                </Link>
              </li>
              <li>
                <Link href="/export/quality-rice" className="hover:text-[#ffd000] transition-colors flex items-center gap-2">
                  <span className="text-[#ffd000]">›</span> Quality Rice
                </Link>
              </li>
              <li>
                <Link href="/export/silage-making" className="hover:text-[#ffd000] transition-colors flex items-center gap-2">
                  <span className="text-[#ffd000]">›</span> Silage Making
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-[#ffd000] transition-colors flex items-center gap-2">
                  <span className="text-[#ffd000]">›</span> Export Commodities
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-[#ffd000] transition-colors flex items-center gap-2">
                  <span className="text-[#ffd000]">›</span> Industries Served
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#ffd000] transition-colors flex items-center gap-2">
                  <span className="text-[#ffd000]">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-sm font-extrabold tracking-wider uppercase text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffd000]"></span>
              Contact Info
            </h3>
            <div className="space-y-3 text-xs text-[#dbebe1]">
              <div className="flex items-start gap-2.5">
                <span className="text-base text-[#ffd000] leading-none mt-0.5">📍</span>
                <span>7/66 Krishnagiri Main Road, Kandili, Tirupathur, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-base text-[#ffd000] leading-none">☎</span>
                <a href="tel:+916382584350" className="hover:text-white transition-colors">
                  +91 63825 84350
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-base text-[#ffd000] leading-none">✉</span>
                <a href="mailto:exim@ngrimpex.in" className="hover:text-white transition-colors">
                  exim@ngrimpex.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-base text-[#ffd000] leading-none">⏱</span>
                <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-sm font-extrabold tracking-wider uppercase text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffd000]"></span>
              Newsletter
            </h3>
            <p className="text-xs text-[#dbebe1] mb-4 leading-relaxed">
              Get the latest updates on international market indices, commodities, and global trade movements.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-3.5 py-2.5 bg-white/10 border border-white/20 rounded-md text-xs text-white placeholder-gray-300 focus:outline-none focus:border-[#ffd000] focus:ring-1 focus:ring-[#ffd000] transition-all"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: "#ffd000",
                  color: "#143c28",
                  fontWeight: 800,
                  fontSize: "0.78rem",
                  py: 1.1,
                  borderRadius: "6px",
                  textTransform: "uppercase",
                  "&:hover": {
                    bgcolor: "#e6bc00",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                Subscribe →
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="border-t border-white/15 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#b8d6c4]">
          <p>© 2026 NGR Impex. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Quality Compliance</a>
          </div>
        </div>
      </div>

      <Snackbar
        open={toastOpen}
        autoHideDuration={4000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={() => setToastOpen(false)} severity="success" sx={{ width: "100%", bgcolor: "#063f28", color: "#fff" }}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </footer>
  );
}
