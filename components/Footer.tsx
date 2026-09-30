"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Export Commodities", href: "/#products" },
    { label: "Import Products", href: "/import/metal-scrap" },
    { label: "Industries Served", href: "/#industries" },
    { label: "Contact Us", href: "/#contact" },
  ];

  const productLinks = [
    { label: "Dried Red Chilli", href: "/export/red-chilli", badge: "Export" },
    { label: "Mango Pulp", href: "/export/mango-pulp", badge: "Export" },
    { label: "Sesame Seeds", href: "/export/sesame-seed", badge: "Export" },
    { label: "Quality Rice", href: "/export/quality-rice", badge: "Export" },
    { label: "Silage Making", href: "/export/silage-making", badge: "Export" },
    { label: "Metal Scrap", href: "/import/metal-scrap", badge: "Import" },
    { label: "Industrial Acids", href: "/import/acids", badge: "Import" },
    { label: "Cosmetic Chemicals", href: "/import/cosmetic-chemical", badge: "Import" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#003a24] via-[#004b2c] to-[#005d36] text-white selection:bg-[#ffd000] selection:text-[#003a24]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand Profile */}
          <div className="space-y-4">
            <Link href="/" className="inline-block leading-none group">
              <span className="text-3xl font-black tracking-tight text-white flex items-baseline">
                NG<span className="text-[#ffd000] transition-colors duration-200 group-hover:text-white">R</span>
              </span>
              <span className="block text-[0.55rem] tracking-[0.4em] font-extrabold text-[#b3d8c3] uppercase mt-1">
                IMPEX
              </span>
            </Link>

            <p className="text-sm font-semibold text-[#ffd000]">
              Global Trade. A Greener Tomorrow.
            </p>

            <p className="text-xs text-[#dbebe1] leading-relaxed">
              Connecting dependable international producers with high-growth markets across agricultural commodities, industrial chemicals, polymers, and raw materials.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[0.7rem] text-[#b3d8c3]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffd000] animate-pulse" />
              <span>Verified Global Exim Partner</span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#ffd000] hover:text-[#003a24] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 text-xs font-bold shadow-sm"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#ffd000] hover:text-[#003a24] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 text-xs font-bold shadow-sm"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#ffd000] hover:text-[#003a24] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 text-xs font-bold shadow-sm"
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
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className="group hover:text-[#ffd000] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#ffd000] transition-transform duration-200 group-hover:translate-x-1">›</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Products */}
          <div>
            <h3 className="text-sm font-extrabold tracking-wider uppercase text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffd000]"></span>
              Our Products
            </h3>
            <ul className="space-y-2 text-xs text-[#dbebe1]">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group hover:text-[#ffd000] transition-colors flex items-center justify-between py-0.5"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#ffd000] transition-transform duration-200 group-hover:translate-x-1">›</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5">{item.label}</span>
                    </span>
                    <span
                      className={`text-[0.62rem] px-1.5 py-0.5 rounded font-medium tracking-wide uppercase transition-colors ${
                        item.badge === "Export"
                          ? "bg-[#ffd000]/15 text-[#ffd000] group-hover:bg-[#ffd000] group-hover:text-[#003a24]"
                          : "bg-white/10 text-[#b3d8c3] group-hover:bg-white/20 group-hover:text-white"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info & CTA */}
          <div>
            <h3 className="text-sm font-extrabold tracking-wider uppercase text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffd000]"></span>
              Contact Info
            </h3>
            <div className="space-y-3.5 text-xs text-[#dbebe1]">
              <div className="flex items-start gap-2.5">
                <span className="text-base text-[#ffd000] leading-none mt-0.5">📍</span>
                <span className="leading-relaxed">7/66 Krishnagiri Main Road, Kandili, Tirupathur, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-base text-[#ffd000] leading-none">☎</span>
                <a
                  href="tel:+916382584350"
                  className="hover:text-[#ffd000] transition-colors font-medium"
                >
                  +91 63825 84350
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-base text-[#ffd000] leading-none">✉</span>
                <a
                  href="mailto:exim@ngrimpex.in"
                  className="hover:text-[#ffd000] transition-colors font-medium"
                >
                  exim@ngrimpex.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-base text-[#ffd000] leading-none">⏱</span>
                <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
              </div>
            </div>

            <div className="pt-5">
              <Link
                href="/#contact"
                onClick={(e) => handleAnchorClick(e, "/#contact")}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#ffd000] hover:bg-[#ffe043] text-[#003a24] font-extrabold text-xs uppercase tracking-wider rounded-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_14px_rgba(255,208,0,0.25)] hover:shadow-[0_6px_20px_rgba(255,208,0,0.4)]"
              >
                <span>Send Trade Inquiry</span>
                <span className="text-sm font-bold">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="border-t border-white/15 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#b8d6c4]">
          <p>© 2026 NGR Impex. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-[#ffd000] transition-colors">
              About Us
            </Link>
            <span className="text-white/30">•</span>
            <Link
              href="/#contact"
              onClick={(e) => handleAnchorClick(e, "/#contact")}
              className="hover:text-[#ffd000] transition-colors"
            >
              Contact Us
            </Link>
            <span className="text-white/30">•</span>
            <span className="text-white/60">Quality Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
