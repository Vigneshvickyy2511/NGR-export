"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  PlusCircle,
  MinusCircle,
  Maximize2,
  Minimize2,
  Share2,
  Download,
  MoreHorizontal,
  RotateCcw,
  X,
  Phone,
  Mail,
  MapPin,
  Check,
  Award,
  Volume2,
  VolumeX,
  ShieldCheck,
  Globe,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface RiceBrochureViewerProps {
  onDownloadPdf?: () => void;
}

interface FlipState {
  direction: "next" | "prev";
  fromSpread: number;
  toSpread: number;
}

export default function RiceBrochureViewer({ onDownloadPdf }: RiceBrochureViewerProps) {
  // Spreads:
  // spread 1 = Inside Front Cover & Front Cover (Displays "1/6")
  // spread 2 = Pages 2 & 3 (1121 XXL Basmati & Culinary Specs, displays "2/6")
  // spread 3 = Pages 4 & 5 (Sugandha & Sona Masoori/Non-Basmati, displays "4/6")
  // spread 4 = Pages 6 & Inside Back Cover (Packaging & Compliance, displays "6/6")
  const [currentSpread, setCurrentSpread] = useState<number>(1);
  const totalSpreads = 4;
  const [zoom, setZoom] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showThumbnails, setShowThumbnails] = useState<boolean>(false);
  const [showMoreMenu, setShowMoreMenu] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [flipState, setFlipState] = useState<FlipState | null>(null);
  const [autoScale, setAutoScale] = useState<number>(1);

  const viewerContainerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);

  // Drag tracking for swiping
  const dragStartX = useRef<number | null>(null);
  const dragDistance = useRef<number>(0);

  // Responsive scaling to fit any screen
  useEffect(() => {
    const handleResize = () => {
      if (!viewerContainerRef.current) return;
      const w = viewerContainerRef.current.clientWidth;
      const naturalBookWidth = 760;
      if (w < 820) {
        const factor = Math.min(1, Math.max(0.44, (w - 24) / naturalBookWidth));
        setAutoScale(factor);
      } else {
        setAutoScale(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Synthesize realistic book paper rustle and air whoosh sound
  const playPageSound = useCallback(() => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Filtered white noise burst (paper friction)
      const bufferSize = Math.floor(ctx.sampleRate * 0.16);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const bandpass = ctx.createBiquadFilter();
      bandpass.type = "bandpass";
      bandpass.frequency.setValueAtTime(800, ctx.currentTime);
      bandpass.frequency.exponentialRampToValueAtTime(420, ctx.currentTime + 0.16);
      bandpass.Q.setValueAtTime(1.5, ctx.currentTime);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.001, ctx.currentTime);
      noiseGain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.02);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);

      noise.connect(bandpass);
      bandpass.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      // Low-frequency whoosh (paper movement through air)
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.16);
      oscGain.gain.setValueAtTime(0.025, ctx.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);

      osc.connect(oscGain);
      oscGain.connect(ctx.destination);

      noise.start(ctx.currentTime);
      osc.start(ctx.currentTime);
      noise.stop(ctx.currentTime + 0.16);
      osc.stop(ctx.currentTime + 0.16);
    } catch {
      // AudioContext unavailable
    }
  }, [soundEnabled]);

  const nextSpread = useCallback(() => {
    if (currentSpread >= totalSpreads || flipState !== null) return;
    playPageSound();
    setFlipState({
      direction: "next",
      fromSpread: currentSpread,
      toSpread: currentSpread + 1,
    });
  }, [currentSpread, totalSpreads, flipState, playPageSound]);

  const prevSpread = useCallback(() => {
    if (currentSpread <= 1 || flipState !== null) return;
    playPageSound();
    setFlipState({
      direction: "prev",
      fromSpread: currentSpread,
      toSpread: currentSpread - 1,
    });
  }, [currentSpread, flipState, playPageSound]);

  const goToSpread = useCallback(
    (targetSpread: number) => {
      if (targetSpread === currentSpread || flipState !== null) return;
      playPageSound();
      setFlipState({
        direction: targetSpread > currentSpread ? "next" : "prev",
        fromSpread: currentSpread,
        toSpread: targetSpread,
      });
      setShowThumbnails(false);
      setShowMoreMenu(false);
    },
    [currentSpread, flipState, playPageSound]
  );

  const handleFlipComplete = () => {
    if (flipState) {
      setCurrentSpread(flipState.toSpread);
      setFlipState(null);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        nextSpread();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        prevSpread();
      } else if (e.key === "Escape") {
        if (showThumbnails) setShowThumbnails(false);
        if (showMoreMenu) setShowMoreMenu(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSpread, prevSpread, showThumbnails, showMoreMenu]);

  // Fullscreen listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 1.8));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.8));
  const handleResetZoom = () => setZoom(1);

  const toggleFullscreen = async () => {
    if (!viewerContainerRef.current) return;
    try {
      if (!document.fullscreenElement) {
        await viewerContainerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error("Fullscreen error:", err);
    }
  };

  const handleShare = async () => {
    if (typeof window === "undefined") return;
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Premium Indian Basmati & Non-Basmati Rice Specifications — NGR Impex",
          text: "Explore export milling specifications, average grain length (AGL), moisture limits, and container packaging for Indian Quality Rice.",
          url: shareUrl,
        });
        return;
      } catch {
        // Fallback
      }
    }
    await navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const handleDownload = () => {
    if (onDownloadPdf) onDownloadPdf();
    setShowMoreMenu(false);
  };

  // Mouse click on left/right half to turn page
  const handleBookClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!bookRef.current || flipState !== null) return;
    const rect = bookRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    if (clickX >= width * 0.5) {
      if (currentSpread < totalSpreads) nextSpread();
    } else {
      if (currentSpread > 1) prevSpread();
    }
  };

  // Pointer drag to flip
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = e.clientX;
    dragDistance.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current !== null) {
      dragDistance.current = e.clientX - dragStartX.current;
    }
  };

  const handlePointerUp = () => {
    if (dragStartX.current !== null) {
      if (dragDistance.current < -50) {
        nextSpread();
      } else if (dragDistance.current > 50) {
        prevSpread();
      }
    }
    dragStartX.current = null;
    dragDistance.current = 0;
  };

  const getPageLabel = () => {
    const spread = flipState ? flipState.toSpread : currentSpread;
    if (spread === 1) return "1/6";
    if (spread === 2) return "2/6";
    if (spread === 3) return "4/6";
    return "6/6";
  };

  // Watermark ripples
  const ConcentricRipples = ({ className = "" }: { className?: string }) => (
    <svg
      viewBox="0 0 200 200"
      className={`absolute pointer-events-none opacity-20 ${className}`}
      fill="none"
      stroke="#c29668"
      strokeWidth="1.2"
    >
      <circle cx="100" cy="100" r="18" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="36" />
      <circle cx="100" cy="100" r="54" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="72" />
      <circle cx="100" cy="100" r="92" strokeDasharray="2 4" />
    </svg>
  );

  // Gold Quality Seal
  const GoldQualityBadge = ({ className = "" }: { className?: string }) => (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg viewBox="0 0 170 170" className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
        <defs>
          <radialGradient id="goldPlateRice" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff8cf" />
            <stop offset="30%" stopColor="#ffd700" />
            <stop offset="65%" stopColor="#cfa110" />
            <stop offset="100%" stopColor="#7a5500" />
          </radialGradient>
          <linearGradient id="ribbonGradRice" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff6c8" />
            <stop offset="25%" stopColor="#ffd84d" />
            <stop offset="70%" stopColor="#d89e13" />
            <stop offset="100%" stopColor="#8d6200" />
          </linearGradient>
          <filter id="badgeShadowRice" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.5" />
          </filter>
        </defs>

        <g fill="url(#goldPlateRice)">
          {Array.from({ length: 36 }).map((_, i) => (
            <polygon
              key={i}
              points="85,8 89,18 81,18"
              transform={`rotate(${i * 10} 85 85)`}
            />
          ))}
          <circle cx="85" cy="85" r="72" fill="url(#goldPlateRice)" />
        </g>

        <circle cx="85" cy="85" r="62" fill="#1b120c" stroke="#ffe066" strokeWidth="2.5" />
        <circle cx="85" cy="85" r="58" fill="none" stroke="#cca010" strokeWidth="1" strokeDasharray="3 2" />

        <g fill="#ffe066" transform="translate(0, -6)">
          <polygon points="85,42 87,47 92,47 88,50 90,55 85,52 80,55 82,50 78,47 83,47" transform="scale(0.85) translate(15, 6)" />
          <polygon points="85,42 87,47 92,47 88,50 90,55 85,52 80,55 82,50 78,47 83,47" transform="scale(0.65) translate(46, 22)" />
          <polygon points="85,42 87,47 92,47 88,50 90,55 85,52 80,55 82,50 78,47 83,47" transform="scale(0.65) translate(-4, 22)" />
        </g>

        <text
          x="85"
          y="72"
          textAnchor="middle"
          fill="#ffeaa7"
          fontSize="9"
          fontWeight="900"
          letterSpacing="0.8"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          BEST QUALITY
        </text>

        <g filter="url(#badgeShadowRice)">
          <polygon points="12,94 30,82 30,104 12,94" fill="#a47200" />
          <polygon points="158,94 140,82 140,104 158,94" fill="#a47200" />
          <path
            d="M 24 93 Q 85 86 146 93 L 142 110 Q 85 103 28 110 Z"
            fill="url(#ribbonGradRice)"
            stroke="#634500"
            strokeWidth="0.8"
          />
          <text
            x="85"
            y="103"
            textAnchor="middle"
            fill="#1d1203"
            fontSize="11"
            fontWeight="950"
            letterSpacing="2.5"
            fontFamily="Arial Black, Impact, sans-serif"
          >
            ★ PRODUCT ★
          </text>
        </g>
      </svg>
    </div>
  );

  // Logo Component matching NG Exports & Imports
  const NgLogo = () => (
    <div className="flex items-center justify-center gap-2">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-md">
          <path
            d="M 20 80 L 20 28 C 20 20 30 18 36 26 L 60 70 L 60 30"
            fill="none"
            stroke="#7cb342"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M 26 22 C 34 8 50 12 48 24 C 44 26 36 28 26 22 Z" fill="#8bc34a" />
          <path
            d="M 50 50 L 78 50 C 84 50 88 56 86 64 L 80 80 C 78 84 72 86 66 86 L 46 86"
            fill="none"
            stroke="#ffca28"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <polygon points="56,36 78,36 72,48 56,48" fill="#ffd54f" />
        </svg>
      </div>
      <div className="text-left leading-tight">
        <span className="block text-xs font-black tracking-widest text-[#ffd54f] uppercase drop-shadow-sm">
          EXPORTS &amp; IMPORTS
        </span>
      </div>
    </div>
  );

  // ==========================================
  // PAGE RENDERERS (LEFT & RIGHT OF EACH SPREAD)
  // ==========================================

  // SPREAD 1 LEFT PAGE: INSIDE FRONT COVER (Catalogue Intro & Table of Contents)
  const renderInsideFrontCover = () => (
    <div
      className="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#1b120a] via-[#140c06] to-[#0e0703] overflow-hidden text-white select-none"
      style={{
        backgroundImage: `linear-gradient(rgba(24, 15, 10, 0.92), rgba(18, 10, 6, 0.96)), url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80')`,
        backgroundSize: "cover",
      }}
    >
      <ConcentricRipples className="-top-12 -left-12 w-60 h-60 opacity-20" />

      {/* Header Emblem */}
      <div className="relative z-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffc400]/15 border border-[#ffc400]/30 text-[#ffc400] text-[10px] font-black tracking-widest uppercase">
          <Sparkles className="w-3 h-3 text-[#ffc400]" />
          OFFICIAL EXPORT SPECIFICATION CATALOGUE
        </div>

        <div>
          <h3
            className="text-2xl sm:text-3xl font-black text-white leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Premium Indian <br />
            <span className="text-[#ffd54f]">Basmati &amp; Non-Basmati Rice</span>
          </h3>
          <p className="text-xs text-gray-300 mt-2 leading-relaxed">
            Welcome to NGR Impex&apos;s official grain export catalogue. Sourced directly from the snow-fed
            Himalayan foothills of Punjab and Haryana, and the fertile river delta plains of South India.
            Precision-milled, aged, and sortex-graded under stringent international export standards.
          </p>
        </div>

        {/* Table of Contents Cards */}
        <div className="space-y-2 pt-2">
          <div className="text-[11px] font-black tracking-wider uppercase text-[#ffc400]/90">
            Catalogue Index
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <span className="font-bold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#ffd54f]/30 text-[#ffe082] flex items-center justify-center text-[10px] font-black">
                  1
                </span>
                1121 XXL Basmati (World&apos;s Longest Grain, 8.35mm+)
              </span>
              <span className="text-[11px] text-[#ffc400] font-bold">Pages 2–3</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <span className="font-bold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#ffd54f]/30 text-[#ffe082] flex items-center justify-center text-[10px] font-black">
                  2
                </span>
                Sugandha &amp; Pusa Basmati (Aromatic Steam / Sella)
              </span>
              <span className="text-[11px] text-[#ffc400] font-bold">Page 4</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <span className="font-bold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#ffd54f]/30 text-[#ffe082] flex items-center justify-center text-[10px] font-black">
                  3
                </span>
                Sona Masoori &amp; PR 11 / IR 64 Non-Basmati
              </span>
              <span className="text-[11px] text-[#ffc400] font-bold">Page 5</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <span className="font-bold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#ffd54f]/30 text-[#ffe082] flex items-center justify-center text-[10px] font-black">
                  4
                </span>
                Packaging (BOPP, Non-Woven, Jute) &amp; Sea Logistics
              </span>
              <span className="text-[11px] text-[#ffc400] font-bold">Page 6</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
        <span>NGR Impex &bull; Agro Grain Division</span>
        <span className="text-[#ffc400] font-bold flex items-center gap-1">
          Click right page to turn &rarr;
        </span>
      </div>
    </div>
  );

  // SPREAD 1 RIGHT PAGE: FRONT COVER (Page 1)
  const renderFrontCover = () => (
    <div
      className="relative w-full h-full p-5 sm:p-7 flex flex-col justify-between bg-gradient-to-b from-[#211710] via-[#1a110a] to-[#140b06] overflow-hidden select-none"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 17, 10, 0.88), rgba(18, 10, 6, 0.94)), url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80')`,
        backgroundSize: "cover",
      }}
    >
      <ConcentricRipples className="-top-8 -right-8 w-56 h-56 opacity-25" />

      {/* Top Curved Arch Cutout with Pristine Rice Bowl */}
      <div className="relative w-full h-[240px] sm:h-[280px] overflow-hidden rounded-t-xl">
        <div
          className="absolute inset-0 bg-[#fffdf7] shadow-2xl"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 90%, 93% 97%, 85% 91%, 0 46%)",
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=90"
              alt="Pristine Basmati Rice in bowl"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Sculpted White/Gold Border Line */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <path d="M 0 46 Q 50 68 85 91 Q 93 97 100 90" fill="none" stroke="#ffd54f" strokeWidth="3.5" />
        </svg>
      </div>

      {/* Middle Brand Logo & Title Area */}
      <div className="relative z-10 px-2 text-center -mt-3">
        <NgLogo />
        <p className="text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] text-[#ffd54f] flex items-center justify-center gap-1.5 my-1">
          <span className="text-sm leading-none">+</span>
          THE BEST QUALITY
          <span className="text-sm leading-none">+</span>
        </p>
        <div className="my-1">
          <span
            className="block text-xs font-black uppercase tracking-widest text-[#aed581]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Aged &amp; Milled
          </span>
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#ffd54f] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-tight"
            style={{ fontFamily: "Arial Black, Impact, sans-serif" }}
          >
            Quality Rice
          </h1>
          <p className="text-[10px] text-gray-300 font-medium tracking-wider uppercase mt-0.5">
            1121 XXL Basmati &bull; Sugandha &bull; Sona Masoori &bull; IR 64
          </p>
        </div>
      </div>

      {/* Bottom Contact Strip */}
      <div className="relative z-10 w-full pt-2.5 pb-2.5 px-3 border-t border-white/10 bg-black/60 backdrop-blur-xs text-center space-y-1 rounded-b-lg">
        <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] text-white/95">
          <div className="flex items-center gap-1">
            <Phone className="w-3 h-3 text-[#ffc400] shrink-0" />
            <a
              href="tel:+916382584350"
              onClick={(e) => e.stopPropagation()}
              className="font-bold hover:text-[#ffc400] transition-colors"
            >
              +91 63825 84350
            </a>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-3 h-3 text-[#ffc400] shrink-0" />
            <a
              href="mailto:exim@ngtraders.org"
              onClick={(e) => e.stopPropagation()}
              className="font-bold hover:text-[#ffc400] transition-colors"
            >
              exim@ngtraders.org
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 text-[9px] text-gray-300">
          <MapPin className="w-3 h-3 text-[#ffc400] shrink-0" />
          <span>7/66 Krishnagiri Main Rd, Kandili, Tirupathur, TN 635901, India</span>
        </div>
      </div>
    </div>
  );

  // SPREAD 2 LEFT PAGE: 1121 XXL BASMATI DETAILS (Page 2)
  const renderBasmati1121Left = () => (
    <div
      className="relative w-full h-full p-5 sm:p-7 flex flex-col justify-between bg-gradient-to-br from-[#1b120a] via-[#140c06] to-[#0e0703] overflow-hidden text-white select-none"
      style={{
        backgroundImage: `linear-gradient(rgba(24, 15, 10, 0.9), rgba(18, 10, 6, 0.95)), url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80')`,
        backgroundSize: "cover",
      }}
    >
      <ConcentricRipples className="-top-8 -left-8 w-56 h-56 opacity-25" />

      <div className="space-y-3 relative z-10">
        <div>
          <h2
            className="text-2xl sm:text-3xl font-black text-white leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            1121 XXL Basmati
          </h2>
          <h3 className="text-base sm:text-lg font-black text-[#ffd54f] uppercase tracking-wide">
            Extra Long Grain (Steam / Sella)
          </h3>
        </div>

        <p className="text-xs sm:text-[12.5px] text-gray-200 leading-relaxed font-sans">
          Globally acclaimed for possessing the world&apos;s longest grain length before and after cooking
          (8.35mm–8.40mm). Naturally aged to perfection, elongating up to 2.5 times upon cooking with a dry,
          non-sticky texture, pristine pearly luster, and unmistakable royal fragrance.
        </p>

        {/* Product Details Pill */}
        <div className="space-y-1 pt-1">
          <div className="inline-block bg-[#ecdcb9] text-[#1b120a] font-black text-[11px] px-3 py-0.5 rounded-full shadow-xs">
            Milling &amp; Grain Profile
          </div>
          <div className="text-xs text-gray-200 space-y-0.5 pl-1 font-sans">
            <p>
              <span className="font-extrabold text-white">Variants:</span> Steam, Creamy Sella, Golden Sella &amp; Raw
            </p>
            <p>
              <span className="font-extrabold text-white">Average Grain Length (AGL):</span> 8.35 mm &ndash; 8.40 mm Min
            </p>
            <p>
              <span className="font-extrabold text-white">Cooking Elongation:</span> Up to 2.5x times extension
            </p>
          </div>
        </div>

        {/* Specifications Pill */}
        <div className="space-y-1 pt-1">
          <div className="inline-block bg-[#ecdcb9] text-[#1b120a] font-black text-[11px] px-3 py-0.5 rounded-full shadow-xs">
            Technical Specifications
          </div>
          <div className="text-xs text-gray-200 space-y-0.5 pl-1 font-sans">
            <div className="grid grid-cols-12 gap-1">
              <span className="col-span-6 font-extrabold text-white">Moisture Content</span>
              <span className="col-span-6">: &le; 12.5% Max</span>
            </div>
            <div className="grid grid-cols-12 gap-1">
              <span className="col-span-6 font-extrabold text-white">Broken Ratio</span>
              <span className="col-span-6">: &le; 1.0% Max</span>
            </div>
            <div className="grid grid-cols-12 gap-1">
              <span className="col-span-6 font-extrabold text-white">Purity Assay</span>
              <span className="col-span-6">: &ge; 95% Pure Basmati</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
        <span>1121 XXL Basmati Specifications</span>
        <span className="font-bold text-white">Page 2</span>
      </div>
    </div>
  );

  // SPREAD 2 RIGHT PAGE: 1121 APPLICATIONS & PHOTO (Page 3)
  const renderBasmati1121Right = () => (
    <div
      className="relative w-full h-full p-5 sm:p-7 flex flex-col justify-between items-center text-right bg-gradient-to-bl from-[#1b120a] via-[#140c06] to-[#0e0703] overflow-hidden text-white select-none"
      style={{
        backgroundImage: `linear-gradient(rgba(24, 15, 10, 0.9), rgba(18, 10, 6, 0.95)), url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80')`,
        backgroundSize: "cover",
      }}
    >
      <ConcentricRipples className="-top-8 -right-6 w-56 h-56 opacity-25" />

      {/* Culinary Applications Pill */}
      <div className="w-full text-left relative z-10">
        <div className="inline-block bg-[#ecdcb9] text-[#1b120a] font-black text-[11px] px-3 py-0.5 rounded-full shadow-xs mb-2">
          Culinary &amp; Catering Applications
        </div>
        <ul className="space-y-1 text-xs text-gray-200 font-sans">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
            <span>Royal Hyderabadi, Awadhi &amp; Lucknowi festive biryanis</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
            <span>Middle Eastern Mandi, Kabsa &amp; Bukhari specialty dishes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
            <span>Fine-dining Persian pilafs &amp; international 5-star catering</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
            <span>100% DNA tested for authentic varietal purity</span>
          </li>
        </ul>
      </div>

      {/* Gold Quality Seal */}
      <div className="w-full flex justify-center py-1 relative z-10">
        <GoldQualityBadge />
      </div>

      {/* Curved Cutout with Cooked Rice Photo */}
      <div className="relative w-full max-w-[280px] h-32 sm:h-40 rounded-bl-3xl overflow-hidden border-l-4 border-t-4 border-white shadow-2xl relative z-10">
        <Image
          src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=88"
          alt="Royal Biryani Basmati Rice"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="w-full pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
        <span className="text-[#ffc400] font-bold">NGR Impex &bull; Himalayan Terai Belt</span>
        <span className="font-bold text-white">Page 3</span>
      </div>
    </div>
  );

  // SPREAD 3 LEFT PAGE: SUGANDHA & PUSA BASMATI (Page 4)
  const renderSugandhaLeft = () => (
    <div
      className="relative w-full h-full p-5 sm:p-7 flex flex-col justify-between bg-gradient-to-br from-[#1b120a] via-[#140c06] to-[#0e0703] overflow-hidden text-white select-none"
      style={{
        backgroundImage: `linear-gradient(rgba(24, 15, 10, 0.9), rgba(18, 10, 6, 0.95)), url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80')`,
        backgroundSize: "cover",
      }}
    >
      <ConcentricRipples className="-top-8 -left-8 w-56 h-56 opacity-25" />

      <div className="space-y-3 relative z-10">
        <div>
          <h2
            className="text-2xl sm:text-3xl font-black text-white leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Sugandha &amp; Pusa
          </h2>
          <h3 className="text-base sm:text-lg font-black text-[#ffd54f] uppercase tracking-wide">
            Aromatic Basmati Hybrids
          </h3>
        </div>

        <p className="text-xs sm:text-[12.5px] text-gray-200 leading-relaxed font-sans">
          Naturally sweet and aromatic basmati varieties providing exceptional value for commercial catering
          and everyday restaurant service. Retains rich basmati genetics with high grain integrity, fluffy separation,
          and delicate buttery aroma upon cooking.
        </p>

        {/* Product Details Pill */}
        <div className="space-y-1 pt-1">
          <div className="inline-block bg-[#ecdcb9] text-[#1b120a] font-black text-[11px] px-3 py-0.5 rounded-full shadow-xs">
            Product Details
          </div>
          <div className="text-xs text-gray-200 space-y-0.5 pl-1 font-sans">
            <p>
              <span className="font-extrabold text-white">Finishing:</span> Steam, Creamy Sella &amp; Raw White Milled
            </p>
            <p>
              <span className="font-extrabold text-white">Average Grain Length (AGL):</span> 7.85 mm &ndash; 7.95 mm Min
            </p>
            <p>
              <span className="font-extrabold text-white">Moisture Content:</span> &le; 12.5% Maximum
            </p>
          </div>
        </div>

        {/* Specifications Pill */}
        <div className="space-y-1 pt-1">
          <div className="inline-block bg-[#ecdcb9] text-[#1b120a] font-black text-[11px] px-3 py-0.5 rounded-full shadow-xs">
            Specifications
          </div>
          <div className="text-xs text-gray-200 space-y-0.5 pl-1 font-sans">
            <div className="grid grid-cols-12 gap-1">
              <span className="col-span-6 font-extrabold text-white">Broken Ratio</span>
              <span className="col-span-6">: &le; 1.5% Max</span>
            </div>
            <div className="grid grid-cols-12 gap-1">
              <span className="col-span-6 font-extrabold text-white">Purity Level</span>
              <span className="col-span-6">: &ge; 95% Pure</span>
            </div>
            <div className="grid grid-cols-12 gap-1">
              <span className="col-span-6 font-extrabold text-white">Damaged / Discolored</span>
              <span className="col-span-6">: &le; 0.5% Max</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
        <span>Sugandha &amp; Pusa Specifications</span>
        <span className="font-bold text-white">Page 4</span>
      </div>
    </div>
  );

  // SPREAD 3 RIGHT PAGE: SONA MASOORI & NON-BASMATI (Page 5)
  const renderNonBasmatiRight = () => (
    <div
      className="relative w-full h-full p-5 sm:p-7 flex flex-col justify-between items-center text-right bg-gradient-to-bl from-[#1b120a] via-[#140c06] to-[#0e0703] overflow-hidden text-white select-none"
      style={{
        backgroundImage: `linear-gradient(rgba(24, 15, 10, 0.9), rgba(18, 10, 6, 0.95)), url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80')`,
        backgroundSize: "cover",
      }}
    >
      <ConcentricRipples className="-top-8 -right-6 w-56 h-56 opacity-25" />

      {/* Sona Masoori & Commercial Pill */}
      <div className="w-full text-left relative z-10">
        <div className="inline-block bg-[#ecdcb9] text-[#1b120a] font-black text-[11px] px-3 py-0.5 rounded-full shadow-xs mb-2">
          Sona Masoori &amp; Commercial Grades
        </div>
        <ul className="space-y-1 text-xs text-gray-200 font-sans">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
            <span>Sona Masoori (5.10mm&ndash;5.25mm): Lightweight South Indian staple</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
            <span>PR 11 / 14 &amp; IR 64: High-yield commercial non-basmati</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
            <span>Low in starch, easy to digest, ideal for daily nutrition</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
            <span>Optical sortex cleaned with silky water-polished finish</span>
          </li>
        </ul>
      </div>

      {/* Gold Quality Seal */}
      <div className="w-full flex justify-center py-1 relative z-10">
        <GoldQualityBadge />
      </div>

      {/* Curved Cutout with Sona Masoori Photo */}
      <div className="relative w-full max-w-[280px] h-32 sm:h-40 rounded-bl-3xl overflow-hidden border-l-4 border-t-4 border-white shadow-2xl relative z-10">
        <Image
          src="https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=85"
          alt="Sona Masoori and Parboiled Rice"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="w-full pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
        <span className="text-[#ffc400] font-bold">South Indian &amp; Commercial Grains</span>
        <span className="font-bold text-white">Page 5</span>
      </div>
    </div>
  );

  // SPREAD 4 LEFT PAGE: PACKAGING & LOGISTICS BACK COVER (Page 6)
  const renderBackCover = () => (
    <div
      className="relative w-full h-full p-5 sm:p-7 flex flex-col justify-between bg-gradient-to-b from-[#1b120a] via-[#140c06] to-[#0e0703] overflow-hidden text-white select-none"
      style={{
        backgroundImage: `linear-gradient(rgba(24, 15, 10, 0.9), rgba(18, 10, 6, 0.94)), url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80')`,
        backgroundSize: "cover",
      }}
    >
      <ConcentricRipples className="-bottom-8 right-2 w-64 h-64 opacity-25" />

      <div className="space-y-3 relative z-10 flex-1 flex flex-col justify-between">
        <div>
          <div className="inline-block bg-[#ffc400]/15 text-[#ffc400] px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase mb-1">
            GLOBAL TRADE &bull; SEA FREIGHT LOGISTICS
          </div>
          <h2
            className="text-2xl sm:text-3xl font-black text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Packaging &amp; <span className="text-[#ffc400]">Port Logistics</span>
          </h2>
          <p className="text-xs text-gray-200 mt-0.5 font-sans">
            Engineered multi-barrier packaging designed to protect aging aromatics and prevent maritime moisture damage.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
            <span className="font-bold text-[#ffc400] block text-[11px] mb-0.5">Packaging Options</span>
            <p className="text-gray-300 text-[11px]">BOPP Multicolor: 5kg, 10kg, 20kg</p>
            <p className="text-gray-300 text-[11px]">Non-Woven &amp; Jute: 10kg, 25kg, 50kg</p>
            <p className="text-gray-300 text-[11px]">Bulk PP Bags: 25kg, 50kg &amp; 1 MT</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
            <span className="font-bold text-[#ffc400] block text-[11px] mb-0.5">Container Capacity</span>
            <p className="text-gray-300 text-[11px]">20ft FCL: 25.0 &ndash; 26.0 MT</p>
            <p className="text-gray-300 text-[11px]">40ft FCL: Heavy container stuffing</p>
            <p className="text-gray-300 text-[11px]">Palletized or Floor Loaded</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
            <span className="font-bold text-[#ffc400] block text-[11px] mb-0.5">Ports of Loading</span>
            <p className="text-gray-300 text-[11px]">Mundra Port (INMUN1)</p>
            <p className="text-gray-300 text-[11px]">JNPT Nhava Sheva (INNSA1)</p>
            <p className="text-gray-300 text-[11px]">Chennai / Kakinada Port</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
            <span className="font-bold text-[#ffc400] block text-[11px] mb-0.5">Documentation</span>
            <p className="text-gray-300 text-[11px]">Certificate of Origin &amp; DNA Purity</p>
            <p className="text-gray-300 text-[11px]">Phytosanitary &amp; Fumigation</p>
            <p className="text-gray-300 text-[11px]">SGS / Geo-Chem Inspection</p>
          </div>
        </div>

        {/* Contact & Inquire Box */}
        <div className="bg-gradient-to-r from-[#00381e] to-[#00552e] border border-[#ffc400]/40 rounded-xl p-3 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="text-left">
              <span className="text-[10px] font-black uppercase text-[#ffc400] tracking-wider block">
                NGR Impex Rice Desk
              </span>
              <span className="text-xs sm:text-sm font-bold text-white">
                Ready to order export containers?
              </span>
            </div>
            <Award className="w-6 h-6 text-[#ffc400] shrink-0" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDownload();
              }}
              className="w-full sm:w-auto px-3.5 py-1.5 bg-white/15 hover:bg-white/25 text-white font-bold text-[11px] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Download Full PDF
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-3.5 py-1.5 bg-[#ffc400] hover:bg-[#ffe066] text-[#00381e] font-black text-[11px] uppercase tracking-wider rounded-lg transition-transform hover:scale-105 active:scale-95 shadow-md cursor-pointer text-center"
            >
              Send Trade Inquiry
            </button>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
        <span>NGR Impex &bull; Product Catalogue Back Cover</span>
        <span className="font-bold text-white">Page 6 / 6</span>
      </div>
    </div>
  );

  // SPREAD 4 RIGHT PAGE: INSIDE BACK COVER (Certifications & Compliance)
  const renderInsideBackCover = () => (
    <div
      className="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#1b120a] via-[#140c06] to-[#0e0703] overflow-hidden text-white select-none"
      style={{
        backgroundImage: `linear-gradient(rgba(24, 15, 10, 0.92), rgba(18, 10, 6, 0.96)), url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80')`,
        backgroundSize: "cover",
      }}
    >
      <ConcentricRipples className="-bottom-8 -right-8 w-60 h-60 opacity-20" />

      <div className="relative z-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7cb342]/20 border border-[#7cb342]/40 text-[#aed581] text-[10px] font-black tracking-widest uppercase">
          <ShieldCheck className="w-3.5 h-3.5 text-[#aed581]" />
          GLOBAL QUALITY COMPLIANCE
        </div>

        <div>
          <h3
            className="text-2xl sm:text-3xl font-black text-white leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Export Standards &amp; <br />
            <span className="text-[#ffc400]">Certifications</span>
          </h3>
          <p className="text-xs text-gray-300 mt-2 leading-relaxed">
            Every shipment of rice from NGR Impex complies with international grain specifications, DNA basmati
            purity testing, aflatoxin tolerances, and pesticide residue limits mandated by global importing nations.
          </p>
        </div>

        {/* 4 Trust Highlights */}
        <div className="space-y-2 pt-1 text-xs">
          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 border border-white/10">
            <Globe className="w-5 h-5 text-[#ffc400] shrink-0" />
            <div>
              <span className="font-bold text-white block text-[11px]">APEDA &amp; BEDF Registered</span>
              <span className="text-[10px] text-gray-300">Basmati Export Development Foundation certified exporter</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 border border-white/10">
            <ShieldCheck className="w-5 h-5 text-[#ffc400] shrink-0" />
            <div>
              <span className="font-bold text-white block text-[11px]">US FDA, ISO 22000 &amp; HACCP</span>
              <span className="text-[10px] text-gray-300">Certified precision milling and optical sortex infrastructure</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 border border-white/10">
            <Award className="w-5 h-5 text-[#ffc400] shrink-0" />
            <div>
              <span className="font-bold text-white block text-[11px]">Halal, Kosher &amp; FSSAI Approved</span>
              <span className="text-[10px] text-gray-300">100% natural, non-GMO, clean label compliance worldwide</span>
            </div>
          </div>
        </div>

        {/* Quick Contact Desk */}
        <div className="pt-2 text-center">
          <span className="text-[11px] text-gray-400 block mb-1.5">Direct WhatsApp / Export Desk:</span>
          <a
            href="https://wa.me/916382584350"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25d366]/20 border border-[#25d366]/50 text-[#25d366] hover:bg-[#25d366]/30 text-xs font-bold transition-all cursor-pointer"
          >
            <span>Chat on WhatsApp: +91 63825 84350</span>
          </a>
        </div>
      </div>

      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
        <span>End of Product Catalogue</span>
        <span className="text-[#ffc400] font-bold flex items-center gap-1">
          &larr; Click left page to turn back
        </span>
      </div>
    </div>
  );

  // Helper function to render the LEFT page of any spread
  const renderLeftPage = (spread: number) => {
    switch (spread) {
      case 1:
        return renderInsideFrontCover();
      case 2:
        return renderBasmati1121Left();
      case 3:
        return renderSugandhaLeft();
      case 4:
        return renderBackCover();
      default:
        return null;
    }
  };

  // Helper function to render the RIGHT page of any spread
  const renderRightPage = (spread: number) => {
    switch (spread) {
      case 1:
        return renderFrontCover();
      case 2:
        return renderBasmati1121Right();
      case 3:
        return renderNonBasmatiRight();
      case 4:
        return renderInsideBackCover();
      default:
        return null;
    }
  };

  const currentZoomScale = autoScale * zoom;

  return (
    <section id="product-pdf-viewer" className="py-12 sm:py-16 bg-white select-none">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00532f] tracking-tight mb-2 sm:mb-3"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Download Product Details
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#526059] max-w-2xl mx-auto leading-relaxed">
            Get in-depth information about our premium Indian Basmati and Non-Basmati rice. Explore grain length
            specifications, milling standards, packaging options, and export documentation.
          </p>
        </div>

        {/* DearFlip Style Outer Stage */}
        <div
          ref={viewerContainerRef}
          style={{ backgroundColor: "rgb(119, 119, 119)" }}
          className={`relative w-full rounded-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl ${
            isFullscreen
              ? "fixed inset-0 z-50 rounded-none h-screen p-4"
              : "min-h-[660px] sm:min-h-[760px] md:h-[829px] p-3 sm:p-6 md:p-8"
          }`}
        >
          {/* Main 3D Book Viewport */}
          <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden">
            {/* Left Nav Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSpread();
              }}
              disabled={currentSpread === 1 || flipState !== null}
              aria-label="Previous Page"
              className={`absolute left-2 sm:left-4 z-40 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                currentSpread === 1 || flipState !== null
                  ? "opacity-20 cursor-not-allowed text-white/30"
                  : "bg-black/50 hover:bg-black/80 text-white hover:scale-110 active:scale-95 shadow-2xl backdrop-blur-xs"
              }`}
            >
              <ChevronLeft className="w-7 h-7 stroke-[2.5]" />
            </button>

            {/* Right Nav Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSpread();
              }}
              disabled={currentSpread === totalSpreads || flipState !== null}
              aria-label="Next Page"
              className={`absolute right-2 sm:right-4 z-40 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                currentSpread === totalSpreads || flipState !== null
                  ? "opacity-20 cursor-not-allowed text-white/30"
                  : "bg-black/50 hover:bg-black/80 text-white hover:scale-110 active:scale-95 shadow-2xl backdrop-blur-xs"
              }`}
            >
              <ChevronRight className="w-7 h-7 stroke-[2.5]" />
            </button>

            {/* 3D BOOK STAGE WITH PERSPECTIVE */}
            <div
              style={{
                perspective: "2600px",
                transform: `scale(${currentZoomScale})`,
              }}
              className="relative transition-transform duration-200 origin-center select-none flex items-center justify-center"
            >
              {/* BOOK CONTAINER */}
              <div
                ref={bookRef}
                onClick={handleBookClick}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                style={{
                  transformStyle: "preserve-3d",
                  WebkitTransformStyle: "preserve-3d",
                }}
                className="relative w-[760px] h-[720px] rounded-sm bg-[#18110b] shadow-[0_30px_70px_rgba(0,0,0,0.65),0_12px_30px_rgba(0,0,0,0.5)] border-y border-black/40 cursor-pointer"
              >
                {/* Book Edge Thickness / Multi-Page Stack Illusion */}
                <div className="absolute -left-[5px] inset-y-1 w-[5px] bg-gradient-to-r from-[#0d0805] to-[#251a12] rounded-l-xs border-l border-white/10 shadow-lg pointer-events-none" />
                <div className="absolute -right-[5px] inset-y-1 w-[5px] bg-gradient-to-l from-[#0d0805] to-[#251a12] rounded-r-xs border-r border-white/10 shadow-lg pointer-events-none" />

                {/* ======================================================== */}
                {/* 1. STATIONARY BASE LAYERS (PAGES UNDERNEATH DURING FLIP) */}
                {/* ======================================================== */}
                <div className="absolute inset-0 flex overflow-hidden rounded-sm">
                  {/* LEFT PAGE BASE */}
                  <div className="relative w-1/2 h-full overflow-hidden border-r border-black/40">
                    {/* Render left page */}
                    {flipState?.direction === "prev"
                      ? renderLeftPage(flipState.toSpread)
                      : renderLeftPage(flipState ? flipState.fromSpread : currentSpread)}

                    {/* Dynamic landing shadow for NEXT turn */}
                    {flipState?.direction === "next" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.45, 0] }}
                        transition={{ duration: 0.65, ease: "easeInOut" }}
                        className="absolute inset-0 pointer-events-none bg-gradient-to-l from-black/50 via-black/20 to-transparent"
                      />
                    )}
                  </div>

                  {/* RIGHT PAGE BASE */}
                  <div className="relative w-1/2 h-full overflow-hidden border-l border-black/40">
                    {/* Render right page */}
                    {flipState?.direction === "next"
                      ? renderRightPage(flipState.toSpread)
                      : renderRightPage(flipState ? flipState.fromSpread : currentSpread)}

                    {/* Dynamic lifting shadow for NEXT turn */}
                    {flipState?.direction === "next" && (
                      <motion.div
                        initial={{ opacity: 0.55 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/60 via-black/25 to-transparent"
                      />
                    )}
                  </div>
                </div>

                {/* ======================================================== */}
                {/* 2. CENTER BOOK SPINE CREASE (3D CENTER FOLD)            */}
                {/* ======================================================== */}
                <div
                  className="absolute inset-y-0 left-1/2 w-10 -translate-x-1/2 pointer-events-none z-30"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 25%, rgba(255,255,255,0.04) 50%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0.5) 100%)",
                  }}
                />

                {/* ======================================================== */}
                {/* 3. THE 3D FLIPPING LEAF (BOOK PAGE SWAP ENGINE)          */}
                {/* ======================================================== */}
                {flipState && (
                  <>
                    {/* NEXT PAGE FLIP (Right page lifts and folds 180deg over spine to Left) */}
                    {flipState.direction === "next" && (
                      <motion.div
                        key={`flip-next-${flipState.fromSpread}-${flipState.toSpread}`}
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: -180 }}
                        transition={{
                          duration: 0.65,
                          ease: [0.25, 1, 0.5, 1],
                        }}
                        onAnimationComplete={handleFlipComplete}
                        style={{
                          position: "absolute",
                          left: "50%",
                          top: 0,
                          width: "50%",
                          height: "100%",
                          transformOrigin: "left center",
                          transformStyle: "preserve-3d",
                          WebkitTransformStyle: "preserve-3d",
                          zIndex: 40,
                          pointerEvents: "none",
                        }}
                      >
                        {/* FRONT FACE OF TURNING LEAF (Current Right Page lifting up) */}
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            transform: "rotateY(0deg)",
                            overflow: "hidden",
                            borderLeft: "1px solid rgba(0,0,0,0.4)",
                          }}
                          className="bg-[#18110b] shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                        >
                          {renderRightPage(flipState.fromSpread)}

                          {/* Dynamic 3D lighting gradient as page turns perpendicular */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.7, 0.2] }}
                            transition={{ duration: 0.65, times: [0, 0.5, 1] }}
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background:
                                "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(255,255,255,0.2) 35%, rgba(0,0,0,0.55) 100%)",
                            }}
                          />
                        </div>

                        {/* BACK FACE OF TURNING LEAF (Incoming Left Page landing on left) */}
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                            overflow: "hidden",
                            borderRight: "1px solid rgba(0,0,0,0.4)",
                          }}
                          className="bg-[#18110b] shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                        >
                          {renderLeftPage(flipState.toSpread)}

                          {/* Dynamic 3D lighting gradient as page settles flat on left */}
                          <motion.div
                            initial={{ opacity: 0.7 }}
                            animate={{ opacity: 0 }}
                            transition={{ duration: 0.65, ease: "easeOut" }}
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background:
                                "linear-gradient(to left, rgba(0,0,0,0.65) 0%, rgba(255,255,255,0.15) 30%, rgba(0,0,0,0.3) 100%)",
                            }}
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* PREVIOUS PAGE FLIP (Left page lifts and folds 180deg over spine to Right) */}
                    {flipState.direction === "prev" && (
                      <motion.div
                        key={`flip-prev-${flipState.fromSpread}-${flipState.toSpread}`}
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: 180 }}
                        transition={{
                          duration: 0.65,
                          ease: [0.25, 1, 0.5, 1],
                        }}
                        onAnimationComplete={handleFlipComplete}
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: "50%",
                          height: "100%",
                          transformOrigin: "right center",
                          transformStyle: "preserve-3d",
                          WebkitTransformStyle: "preserve-3d",
                          zIndex: 40,
                          pointerEvents: "none",
                        }}
                      >
                        {/* FRONT FACE OF TURNING LEAF (Current Left Page lifting up) */}
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            transform: "rotateY(0deg)",
                            overflow: "hidden",
                            borderRight: "1px solid rgba(0,0,0,0.4)",
                          }}
                          className="bg-[#18110b] shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                        >
                          {renderLeftPage(flipState.fromSpread)}

                          {/* Dynamic 3D lighting gradient */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.7, 0.2] }}
                            transition={{ duration: 0.65, times: [0, 0.5, 1] }}
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background:
                                "linear-gradient(to left, rgba(0,0,0,0.65) 0%, rgba(255,255,255,0.2) 35%, rgba(0,0,0,0.55) 100%)",
                            }}
                          />
                        </div>

                        {/* BACK FACE OF TURNING LEAF (Incoming Right Page landing on right) */}
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            transform: "rotateY(-180deg)",
                            overflow: "hidden",
                            borderLeft: "1px solid rgba(0,0,0,0.4)",
                          }}
                          className="bg-[#18110b] shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                        >
                          {renderRightPage(flipState.toSpread)}

                          {/* Dynamic 3D lighting gradient */}
                          <motion.div
                            initial={{ opacity: 0.7 }}
                            animate={{ opacity: 0 }}
                            transition={{ duration: 0.65, ease: "easeOut" }}
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background:
                                "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(255,255,255,0.15) 30%, rgba(0,0,0,0.3) 100%)",
                            }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </>
                )}

                {/* ======================================================== */}
                {/* 4. PAGE CORNER CURL HOVER HINTS (INVITING USER TO CLICK) */}
                {/* ======================================================== */}
                {flipState === null && currentSpread < totalSpreads && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      nextSpread();
                    }}
                    title="Click to turn next page"
                    className="group absolute bottom-0 right-0 z-35 w-16 h-16 flex items-end justify-end p-2 cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-tl-xl bg-gradient-to-br from-[#ffd54f]/90 via-[#cfa110] to-[#7a5500] shadow-[-3px_-3px_10px_rgba(0,0,0,0.6)] group-hover:scale-125 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform flex items-center justify-center border-t border-l border-white/40">
                      <ChevronRight className="w-4 h-4 text-[#1a110a] stroke-[3]" />
                    </div>
                  </div>
                )}

                {flipState === null && currentSpread > 1 && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      prevSpread();
                    }}
                    title="Click to turn previous page"
                    className="group absolute bottom-0 left-0 z-35 w-16 h-16 flex items-end justify-start p-2 cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-tr-xl bg-gradient-to-bl from-[#ffd54f]/90 via-[#cfa110] to-[#7a5500] shadow-[3px_-3px_10px_rgba(0,0,0,0.6)] group-hover:scale-125 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex items-center justify-center border-t border-r border-white/40">
                      <ChevronLeft className="w-4 h-4 text-[#1a110a] stroke-[3]" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Floating Control Bar (Exact DearFlip UI: .df-ui) */}
          <div className="relative z-40 mt-3 flex items-center justify-center">
            <div className="bg-white/95 backdrop-blur-md text-gray-700 shadow-2xl rounded-full px-3 sm:px-6 py-2 flex items-center gap-2 sm:gap-4 border border-gray-200/80">
              {/* Page Number Indicator (.df-ui-page) */}
              <div
                title="Current Page"
                className="text-xs sm:text-sm font-black text-gray-700 px-2 py-0.5 border-r border-gray-200 min-w-[48px] text-center"
              >
                {getPageLabel()}
              </div>

              {/* Toggle Thumbnails (.df-ui-thumbnail) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowThumbnails((prev) => !prev);
                }}
                className={`p-1.5 rounded-full hover:bg-gray-100 text-gray-600 hover:text-black transition-colors cursor-pointer ${
                  showThumbnails ? "bg-gray-200 text-black" : ""
                }`}
                title="Toggle Thumbnails"
                aria-label="Toggle Thumbnails"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>

              {/* Zoom In (.df-ui-zoomin) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomIn();
                }}
                disabled={zoom >= 1.8}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 hover:text-black transition-colors disabled:opacity-40 cursor-pointer"
                title="Zoom In"
                aria-label="Zoom In"
              >
                <PlusCircle className="w-4 h-4" />
              </button>

              {/* Zoom Out (.df-ui-zoomout) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomOut();
                }}
                disabled={zoom <= 0.8}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 hover:text-black transition-colors disabled:opacity-40 cursor-pointer"
                title="Zoom Out"
                aria-label="Zoom Out"
              >
                <MinusCircle className="w-4 h-4" />
              </button>

              {/* Fullscreen (.df-ui-fullscreen) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 hover:text-black transition-colors cursor-pointer"
                title={isFullscreen ? "Exit Fullscreen" : "Toggle Fullscreen"}
                aria-label="Toggle Fullscreen"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              {/* Share (.df-ui-share) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare();
                }}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 hover:text-black transition-colors relative cursor-pointer"
                title="Share"
                aria-label="Share"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              </button>

              {/* More Menu (.df-ui-more) */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMoreMenu((prev) => !prev);
                  }}
                  className={`p-1.5 rounded-full hover:bg-gray-100 text-gray-600 hover:text-black transition-colors cursor-pointer ${
                    showMoreMenu ? "bg-gray-200 text-black" : ""
                  }`}
                  title="More"
                  aria-label="More"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>

                {/* Dropdown Menu */}
                {showMoreMenu && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-11 right-0 w-52 bg-white rounded-xl shadow-2xl border border-gray-200 py-1.5 text-xs text-gray-700 z-50 animate-hero-enter"
                  >
                    <button
                      onClick={handleDownload}
                      className="w-full px-3.5 py-2 flex items-center gap-2 hover:bg-emerald-50 hover:text-emerald-700 text-left transition-colors font-medium cursor-pointer"
                      title="Download PDF File"
                    >
                      <Download className="w-4 h-4 text-emerald-600" />
                      Download Grain Specification Sheet
                    </button>

                    <button
                      onClick={() => {
                        setSoundEnabled((prev) => !prev);
                      }}
                      className="w-full px-3.5 py-2 flex items-center gap-2 hover:bg-gray-100 text-left transition-colors cursor-pointer"
                    >
                      {soundEnabled ? (
                        <>
                          <Volume2 className="w-4 h-4 text-emerald-600" />
                          Turn off Sound
                        </>
                      ) : (
                        <>
                          <VolumeX className="w-4 h-4 text-gray-400" />
                          Turn on Sound
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => {
                        handleResetZoom();
                        setShowMoreMenu(false);
                      }}
                      className="w-full px-3.5 py-2 flex items-center gap-2 hover:bg-gray-100 text-left transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4 text-gray-500" />
                      Reset Zoom (100%)
                    </button>

                    <div className="border-t border-gray-100 my-1" />

                    <button
                      onClick={() => {
                        goToSpread(1);
                      }}
                      className="w-full px-3.5 py-1.5 text-left text-gray-500 hover:bg-gray-100 cursor-pointer"
                    >
                      Goto First Page
                    </button>

                    <button
                      onClick={() => {
                        goToSpread(totalSpreads);
                      }}
                      className="w-full px-3.5 py-1.5 text-left text-gray-500 hover:bg-gray-100 cursor-pointer"
                    >
                      Goto Last Page
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Thumbnails Drawer (.df-sidemenu-wrapper) */}
          <AnimatePresence>
            {showThumbnails && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="absolute inset-x-3 sm:inset-x-8 bottom-20 z-50 bg-gray-900/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/10"
              >
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    Brochure Spreads (3D Book Swapping)
                  </span>
                  <button
                    onClick={() => setShowThumbnails(false)}
                    className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { spread: 1, label: "1/6", title: "Front Cover & Index" },
                    { spread: 2, label: "2/6", title: "1121 XXL Basmati" },
                    { spread: 3, label: "4/6", title: "Sugandha & Sona Masoori" },
                    { spread: 4, label: "6/6", title: "Logistics & Back Cover" },
                  ].map((item) => (
                    <button
                      key={item.spread}
                      onClick={() => goToSpread(item.spread)}
                      className={`group flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all cursor-pointer ${
                        currentSpread === item.spread
                          ? "bg-[#00532f] text-white ring-2 ring-[#ffd54f]"
                          : "bg-white/5 text-gray-300 hover:bg-white/15"
                      }`}
                    >
                      <div className="w-20 h-16 rounded bg-[#211710] border border-white/20 flex items-center justify-center gap-1 text-xs font-bold text-gray-300 group-hover:border-white/50">
                        <BookOpen className="w-4 h-4 text-[#ffd54f]" />
                        <span>{item.label}</span>
                      </div>
                      <span className="text-[10px] font-medium truncate w-full text-center">
                        {item.title}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Copied Link Toast */}
          <AnimatePresence>
            {copiedLink && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-4 right-4 z-50 bg-[#00381e] text-white px-4 py-2 rounded-lg text-xs font-bold shadow-xl border border-emerald-400/40 flex items-center gap-2"
              >
                <Check className="w-4 h-4 text-emerald-400" />
                Brochure link copied to clipboard!
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
