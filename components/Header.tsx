"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Button,
  Drawer,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Import", href: "/import" },
    { label: "Export", href: "/export" },
    { label: "Our Principal", href: "/#industries" },
    { label: "News & Blog", href: "/#focus" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname === href) return true;
    return false;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileOpen(false);
    // If on home page and href is an anchor, smooth scroll
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden sm:block bg-[#f6faf7] border-b border-[#d9e4dc] text-[0.72rem] text-[#5f6d65] font-medium transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="tel:+916382584350"
              className="flex items-center gap-1.5 hover:text-[#005b32] transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-[#005b32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 63825 84350</span>
            </a>
            <a
              href="mailto:exim@ngrimpex.in"
              className="flex items-center gap-1.5 hover:text-[#005b32] transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-[#005b32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>exim@ngrimpex.in</span>
            </a>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#005b32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Chennai, Tamil Nadu, India</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-400">Follow us:</span>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-5 h-5 rounded-full bg-emerald-100/60 hover:bg-[#005b32] hover:text-white flex items-center justify-center transition-colors text-[0.65rem] font-bold text-[#005b32]"
                title="LinkedIn"
              >
                in
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-5 h-5 rounded-full bg-emerald-100/60 hover:bg-[#005b32] hover:text-white flex items-center justify-center transition-colors text-[0.65rem] font-bold text-[#005b32]"
                title="Facebook"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-5 h-5 rounded-full bg-emerald-100/60 hover:bg-[#005b32] hover:text-white flex items-center justify-center transition-colors text-[0.65rem] font-bold text-[#005b32]"
                title="Instagram"
              >
                ◎
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_8px_25px_rgba(0,53,31,0.08)] py-2"
            : "bg-white shadow-[0_3px_13px_rgba(0,0,0,0.06)] py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/#home" className="group flex flex-col items-start leading-none select-none">
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#005b32] flex items-baseline">
              NG<span className="text-[#b6a700] group-hover:text-[#ffd000] transition-colors">R</span>
            </span>
            <span className="text-[0.45rem] sm:text-[0.5rem] tracking-[0.38em] font-extrabold text-[#5f6d65] uppercase pl-0.5 mt-0.5">
              IMPEX
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => {
              const active = isLinkActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-[0.84rem] font-bold py-2 relative border-b-2 transition-all ${
                    active
                      ? "text-[#005b32] border-[#005b32]"
                      : "text-[#173e2a] border-transparent hover:text-[#005b32] hover:border-[#005b32]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              variant="contained"
              onClick={() => {
                if (pathname === "/") {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/#contact";
                }
              }}
              sx={{
                bgcolor: "#ffd000",
                color: "#143c28",
                fontWeight: 800,
                fontSize: "0.78rem",
                px: 2.5,
                py: 1.1,
                borderRadius: "6px",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                display: { xs: "none", sm: "inline-flex" },
                boxShadow: "0 4px 12px rgba(255, 208, 0, 0.3)",
                "&:hover": {
                  bgcolor: "#e6bc00",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 18px rgba(0, 59, 35, 0.2)",
                },
                transition: "all 0.2s ease-in-out",
              }}
            >
              Contact Us →
            </Button>

            {/* Mobile Hamburger Button */}
            <IconButton
              aria-label="Open navigation menu"
              onClick={() => setMobileOpen(true)}
              sx={{
                display: { lg: "none" },
                border: "1px solid #d9e4dc",
                borderRadius: "6px",
                p: 1,
                color: "#005b32",
              }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </IconButton>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: "80%",
              maxWidth: 320,
              bgcolor: "#ffffff",
              p: 2,
            },
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pb: 2 }}>
          <Link href="/#home" onClick={() => setMobileOpen(false)} className="flex flex-col leading-none">
            <span className="text-2xl font-black tracking-tight text-[#005b32]">
              NG<span className="text-[#b6a700]">R</span>
            </span>
            <span className="text-[0.45rem] tracking-[0.35em] font-extrabold text-[#5f6d65] uppercase">
              IMPEX
            </span>
          </Link>
          <IconButton onClick={() => setMobileOpen(false)} size="small">
            <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ pt: 2 }}>
          {navLinks.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  sx={{
                    py: 1.5,
                    borderRadius: "6px",
                    bgcolor: active ? "#f0f7f2" : "transparent",
                    "&:hover": { bgcolor: "#f4f8f4", color: "#005b32" },
                  }}
                >
                  <span
                    className={`font-bold text-[0.95rem] ${
                      active ? "text-[#005b32]" : "text-[#173e2a]"
                    }`}
                  >
                    {item.label}
                  </span>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Box sx={{ mt: 3, pt: 2, borderTop: "1px solid #d9e4dc" }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => {
              setMobileOpen(false);
              if (pathname === "/") {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "/#contact";
              }
            }}
            sx={{
              bgcolor: "#ffd000",
              color: "#143c28",
              fontWeight: 800,
              py: 1.5,
              borderRadius: "6px",
              boxShadow: "0 4px 12px rgba(255, 208, 0, 0.3)",
              "&:hover": { bgcolor: "#e6bc00" },
            }}
          >
            Contact Us →
          </Button>

          <div className="mt-6 space-y-2 text-xs text-[#5f6d65]">
            <p className="flex items-center gap-2">
              <span>☎</span> +91 63825 84350
            </p>
            <p className="flex items-center gap-2">
              <span>✉</span> exim@ngrimpex.in
            </p>
            <p className="flex items-center gap-2">
              <span>📍</span> Chennai, Tamil Nadu, India
            </p>
          </div>
        </Box>
      </Drawer>
    </>
  );
}
