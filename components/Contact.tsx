"use client";

import React, { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Zap,
  ShieldCheck,
  Ship,
  ArrowRight,
  ExternalLink,
  Lock,
} from "lucide-react";

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  // Toast notification state
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState<"success" | "info">("success");

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setToastSeverity("info");
      setToastMessage("Please fill in all required fields.");
      setToastOpen(true);
      return;
    }

    setToastSeverity("success");
    setToastMessage("Thank you! Your trade inquiry has been submitted. Our team will contact you shortly.");
    setToastOpen(true);
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      inquiryType: "",
      message: "",
    });
  };

  return (
    <>
      <section
        id="contact"
        className="py-20 sm:py-28 bg-gradient-to-b from-[#f4f8f5] via-[#ffffff] to-[#f4f8f5] relative overflow-hidden"
      >
        {/* Soft Background Accents */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#005b32]/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#ffd000]/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#005b32]/10 border border-[#005b32]/20 text-xs font-bold uppercase tracking-[0.15em] text-[#005b32] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#005b32] animate-pulse" />
              <span>Global Trade Desk &amp; Sourcing Inquiries</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#173e2a] tracking-tight">
              Let’s Grow Your Global Business Together
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-[#ffd000] to-[#ff7a00] rounded-full mx-auto mt-4" />
            <p className="mt-4 text-sm sm:text-base text-[#5f6d65] leading-relaxed">
              Connect directly with our international trade desk for certified export-import supply, bulk CIF/FOB quotations, technical product dossiers, and long-term procurement partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Contact Details (Left Column) */}
            <div className="lg:col-span-5 space-y-5">
              {/* Live Desk Status Card */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
                  </span>
                  <div>
                    <span className="text-xs font-bold text-emerald-950 block uppercase tracking-wider">
                      Trade Desk Active
                    </span>
                    <span className="text-[11px] text-emerald-700">
                      Average response time: &lt; 24 hours
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-800 bg-white/95 px-3 py-1 rounded-full border border-emerald-200 shadow-xs">
                  Mon – Sat (IST)
                </span>
              </div>

              {/* Contact Cards */}
              <div className="space-y-3.5">
                {/* 1. Head Office */}
                <div className="group p-5 rounded-2xl bg-white border border-[#d9e4dc] hover:border-[#005b32]/40 transition-all duration-300 shadow-[0_4px_16px_rgba(0,58,33,0.04)] hover:shadow-[0_8px_24px_rgba(0,58,33,0.08)] flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#005b32]/10 text-[#005b32] flex items-center justify-center shrink-0 border border-[#005b32]/15 shadow-xs group-hover:bg-[#005b32] group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div className="flex-1">
                    <b className="block text-xs font-bold text-[#173e2a] uppercase tracking-wider mb-1">
                      Corporate Headquarters
                    </b>
                    <p className="text-xs sm:text-sm text-[#4a5a51] leading-relaxed mb-2">
                      7/66 Krishnagiri Main Road, Kandili, Tirupathur, Tamil Nadu – 635901, India
                    </p>
                    <a
                      href="https://maps.google.com/?q=Kandili,Tirupathur,Tamil+Nadu,India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#005b32] hover:text-[#004727] group-hover:underline"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* 2. Direct Phone & WhatsApp */}
                <div className="group p-5 rounded-2xl bg-white border border-[#d9e4dc] hover:border-[#005b32]/40 transition-all duration-300 shadow-[0_4px_16px_rgba(0,58,33,0.04)] hover:shadow-[0_8px_24px_rgba(0,58,33,0.08)] flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#005b32]/10 text-[#005b32] flex items-center justify-center shrink-0 border border-[#005b32]/15 shadow-xs group-hover:bg-[#005b32] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div className="flex-1">
                    <b className="block text-xs font-bold text-[#173e2a] uppercase tracking-wider mb-1">
                      Direct Trade Hotline
                    </b>
                    <a
                      href="tel:+916382584350"
                      className="block text-sm sm:text-base font-extrabold text-[#173e2a] hover:text-[#005b32] transition-colors mb-2"
                    >
                      +91 63825 84350
                    </a>
                    <div className="flex items-center gap-2">
                      <a
                        href="tel:+916382584350"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#f0f6f2] hover:bg-[#005b32] text-[#005b32] hover:text-white text-[11px] font-bold transition-colors"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Call Direct</span>
                      </a>
                      <a
                        href="https://wa.me/916382584350?text=Hello%20NGR%20Impex,%20I%20have%20a%20trade%20inquiry"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-100/70 hover:bg-emerald-600 text-emerald-800 hover:text-white text-[11px] font-bold transition-colors"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* 3. Official Email */}
                <div className="group p-5 rounded-2xl bg-white border border-[#d9e4dc] hover:border-[#005b32]/40 transition-all duration-300 shadow-[0_4px_16px_rgba(0,58,33,0.04)] hover:shadow-[0_8px_24px_rgba(0,58,33,0.08)] flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#005b32]/10 text-[#005b32] flex items-center justify-center shrink-0 border border-[#005b32]/15 shadow-xs group-hover:bg-[#005b32] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div className="flex-1">
                    <b className="block text-xs font-bold text-[#173e2a] uppercase tracking-wider mb-1">
                      Official Trade Desk Email
                    </b>
                    <a
                      href="mailto:exim@ngrimpex.in"
                      className="block text-sm sm:text-base font-extrabold text-[#173e2a] hover:text-[#005b32] transition-colors mb-1"
                    >
                      exim@ngrimpex.in
                    </a>
                    <span className="text-xs text-[#5f6d65] block">
                      Dedicated portal for technical dossiers &amp; RFQs
                    </span>
                  </div>
                </div>

                {/* 4. Business Hours */}
                <div className="group p-5 rounded-2xl bg-white border border-[#d9e4dc] hover:border-[#005b32]/40 transition-all duration-300 shadow-[0_4px_16px_rgba(0,58,33,0.04)] hover:shadow-[0_8px_24px_rgba(0,58,33,0.08)] flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#005b32]/10 text-[#005b32] flex items-center justify-center shrink-0 border border-[#005b32]/15 shadow-xs group-hover:bg-[#005b32] group-hover:text-white transition-colors">
                    <Clock className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div className="flex-1">
                    <b className="block text-xs font-bold text-[#173e2a] uppercase tracking-wider mb-1">
                      Operating Schedule
                    </b>
                    <span className="text-xs sm:text-sm font-semibold text-[#173e2a] block">
                      Monday – Saturday: 9:00 AM – 6:00 PM (IST)
                    </span>
                    <span className="text-xs text-[#5f6d65] block mt-0.5">
                      Sunday: Closed (Emergency shipment monitoring available)
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Pillars */}
              <div className="pt-2 grid grid-cols-3 gap-2.5 text-center">
                <div className="p-3 rounded-xl bg-white/80 border border-[#d9e4dc] flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-1">
                    <Zap className="w-4 h-4 fill-amber-500" />
                  </div>
                  <span className="text-[11px] font-bold text-[#173e2a] block">Fast Quote</span>
                  <span className="text-[10px] text-gray-500 block">&lt; 24h Turnaround</span>
                </div>
                <div className="p-3 rounded-xl bg-white/80 border border-[#d9e4dc] flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#005b32] flex items-center justify-center mb-1">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-[#173e2a] block">Lab Certified</span>
                  <span className="text-[10px] text-gray-500 block">COA &amp; SGS Assured</span>
                </div>
                <div className="p-3 rounded-xl bg-white/80 border border-[#d9e4dc] flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-1">
                    <Ship className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-[#173e2a] block">CIF / FOB</span>
                  <span className="text-[10px] text-gray-500 block">40+ Global Ports</span>
                </div>
              </div>
            </div>

            {/* Inquiry Form (Right Column) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-[#d9e4dc] shadow-[0_16px_45px_rgba(0,58,33,0.08)] p-6 sm:p-10 relative overflow-hidden">
                {/* Top Accent Gradient Bar */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#005b32] via-[#ffd000] to-[#005b32]" />

                <div className="mb-8">
                  <h3 className="text-xl sm:text-2xl font-black text-[#173e2a] tracking-tight">
                    Request a Formal Trade Quotation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5f6d65] mt-1.5 leading-relaxed">
                    Please provide your product requirements below. Our export-import specialists will respond with pricing, specifications, and shipment schedules.
                  </p>
                </div>

                <form onSubmit={handleSubmitInquiry} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#173e2a] mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alexander Wright"
                        value={formData.name}
                        onChange={(e) => handleFormChange("name", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#d0ded5] bg-[#fafcfb] text-[#173e2a] placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#005b32] focus:bg-white focus:ring-4 focus:ring-[#005b32]/10 transition-all duration-200"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#173e2a] mb-1.5">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. procurement@company.com"
                        value={formData.email}
                        onChange={(e) => handleFormChange("email", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#d0ded5] bg-[#fafcfb] text-[#173e2a] placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#005b32] focus:bg-white focus:ring-4 focus:ring-[#005b32]/10 transition-all duration-200"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#173e2a] mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Global Trade Ltd"
                        value={formData.company}
                        onChange={(e) => handleFormChange("company", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#d0ded5] bg-[#fafcfb] text-[#173e2a] placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#005b32] focus:bg-white focus:ring-4 focus:ring-[#005b32]/10 transition-all duration-200"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#173e2a] mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleFormChange("phone", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#d0ded5] bg-[#fafcfb] text-[#173e2a] placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#005b32] focus:bg-white focus:ring-4 focus:ring-[#005b32]/10 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type / Category */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#173e2a] mb-1.5">
                      Trade Division / Product Interest
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => handleFormChange("inquiryType", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#d0ded5] bg-[#fafcfb] text-[#173e2a] text-sm focus:outline-none focus:border-[#005b32] focus:bg-white focus:ring-4 focus:ring-[#005b32]/10 transition-all duration-200 cursor-pointer"
                    >
                      <option value="">Select Department / Product Division...</option>
                      <optgroup label="Export Products">
                        <option value="Export - Quality Rice & DDGS">Export: Quality Rice, Broken Rice &amp; Rice DDGS</option>
                        <option value="Export - Sesame Seeds">Export: Sesame Seeds (Natural, Hulled, Black)</option>
                        <option value="Export - Mango Pulp">Export: Alphonso &amp; Totapuri Mango Pulp</option>
                        <option value="Export - Dried Red Chilli">Export: Dried Red Chilli (Teja, Sanam, Byadgi)</option>
                        <option value="Export - Silage Making">Export: Silage Making &amp; Animal Forage</option>
                      </optgroup>
                      <optgroup label="Import Products">
                        <option value="Import - Metal Scrap">Import: Certified Metal Scrap (HMS 1&amp;2, Copper, Aluminium)</option>
                        <option value="Import - Industrial Acids">Import: Industrial &amp; Technical Acids</option>
                        <option value="Import - Cosmetic Chemical">Import: Cosmetic Chemicals &amp; USP Glycerin</option>
                        <option value="Import - Plastic Chemical">Import: Plastic Chemicals &amp; Polymer Resins</option>
                        <option value="Import - Cassia Cinnamon">Import: Cassia Cinnamon &amp; Whole Spices</option>
                        <option value="Import - Star Anise">Import: Autumn Star Anise</option>
                      </optgroup>
                      <optgroup label="Corporate & Partnerships">
                        <option value="Partnership & Distribution">Strategic Partnership &amp; Global Distribution</option>
                        <option value="General Inquiry">General Trade &amp; Procurement Inquiry</option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Message / Specifications */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#173e2a] mb-1.5">
                      Procurement Requirements &amp; Volume <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Specify target product, required grades/purity, estimated order volume (MT / Containers), destination port (CIF / FOB), and target delivery timeline..."
                      value={formData.message}
                      onChange={(e) => handleFormChange("message", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#d0ded5] bg-[#fafcfb] text-[#173e2a] placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#005b32] focus:bg-white focus:ring-4 focus:ring-[#005b32]/10 transition-all duration-200 resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#ffd000] via-[#ffc400] to-[#e6b800] hover:from-[#ffc400] hover:to-[#ffd000] text-[#173e2a] font-extrabold text-sm sm:text-base tracking-wide uppercase shadow-[0_8px_25px_rgba(255,208,0,0.35)] hover:shadow-[0_10px_30px_rgba(255,208,0,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group"
                    >
                      <span>Submit Trade Inquiry</span>
                      <span className="w-7 h-7 rounded-lg bg-[#173e2a] text-white flex items-center justify-center text-xs">
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </div>

                  {/* Trust Footer */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#5f6d65] border-t border-[#eef5f0]">
                    <div className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-[#005b32]" />
                      <span>100% Confidential • Direct Factory Sourcing</span>
                    </div>
                    <span className="text-gray-400">Strict Quality &amp; COA Compliance</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Submission Toast Notification */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={5000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setToastOpen(false)}
          severity={toastSeverity}
          sx={{
            width: "100%",
            bgcolor: toastSeverity === "success" ? "#063f28" : "#173e2a",
            color: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          {toastMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
