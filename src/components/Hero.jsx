"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  Award,
  Users,
  GraduationCap,
  Trophy,
  CheckCircle2,
  Play,
  Calendar,
  BookOpen,
  Heart,
  Leaf,
  Building,
  Globe,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { schoolTemplate, event } from "@/asset";

const Hero = ({ portalData, onNavigate }) => {
  const schoolName = portalData?.schoolName || "Iqra Public School";
  const tagline = portalData?.tagline || "Knowledge, Character & Excellence";
  const heroSubtitle =
    portalData?.heroSubtitle ||
    "At Iqra Public School Motihari, we nurture young minds with quality education, moral integrity, and modern learning tools.";
  const admissionBadge =
    portalData?.admissionBadge || "Admissions Open for 2026 – 2027";
  const heroImage = portalData?.heroImage || schoolTemplate;

  const nameWords = (schoolName || "Iqra Public School").trim().split(" ");
  const firstName = nameWords[0] || "Iqra";
  const restName = nameWords.slice(1).join(" ") || "Public School";

  const metrics = [
    {
      label: "Happy Students",
      value: "2,500+",
      icon: Users,
      color: "text-emerald-800",
      bg: "bg-emerald-100/90 border border-emerald-300/80",
      numColor: "text-emerald-900",
      hoverBg: "hover:bg-emerald-50/70",
    },
    {
      label: "Expert Faculty",
      value: "150+",
      icon: GraduationCap,
      color: "text-amber-800",
      bg: "bg-amber-100/90 border border-amber-300/80",
      numColor: "text-amber-900",
      hoverBg: "hover:bg-amber-50/70",
    },
    {
      label: "Academic Programs",
      value: "25+",
      icon: BookOpen,
      color: "text-teal-800",
      bg: "bg-teal-100/90 border border-teal-300/80",
      numColor: "text-teal-900",
      hoverBg: "hover:bg-teal-50/70",
    },
    {
      label: "Years of Trust",
      value: "20+",
      icon: Trophy,
      color: "text-yellow-800",
      bg: "bg-yellow-100/90 border border-yellow-300/80",
      numColor: "text-yellow-900",
      hoverBg: "hover:bg-yellow-50/70",
    },
    {
      label: "Safe Campus",
      value: "100%",
      icon: ShieldCheck,
      color: "text-emerald-800",
      bg: "bg-emerald-100/90 border border-emerald-300/80",
      numColor: "text-emerald-900",
      hoverBg: "hover:bg-emerald-50/70",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#f5f9f6] via-[#f9fcfb] to-white">
      {/* ── Soft Leaf & Foliage Decorative Background Accents ───────── */}
      <div className="absolute top-0 left-0 w-80 h-80 opacity-20 pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#0b3d2e]"
        >
          <path
            d="M40 0C40 60 0 100 0 100C60 100 100 40 100 40C100 100 60 140 60 140C120 140 160 80 160 80C160 140 120 180 120 180C180 180 200 120 200 120"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#e1f0e8]/50 rounded-full blur-3xl pointer-events-none" />

      {/* ── MAIN HERO ROW (Full Width) ─────────────────────────────────── */}
      <section className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16 pt-6 sm:pt-14 pb-12 sm:pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          {/* ── LEFT COLUMN: Typography, Badge & CTAs (5 cols) - order-2 on mobile, order-1 on desktop ────────── */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 order-2 lg:order-1">
            {/* Admissions Badge with Gold Mortarboard Icon */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => onNavigate && onNavigate("admissions")}
              className="inline-flex items-center gap-2.5 bg-white border border-[#d2e8dc] text-slate-800 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold hover:border-[#0b3d2e] transition-all cursor-pointer group shadow-2xs"
            >
              <div className="w-6 h-6 rounded-full bg-[#fef3c7] text-[#b45309] flex items-center justify-center font-bold flex-shrink-0">
                <GraduationCap size={13} />
              </div>
              <span className="font-semibold text-slate-800 group-hover:text-[#0b3d2e] transition-colors">
                {admissionBadge}
              </span>
              <ChevronRight
                size={14}
                className="text-slate-400 group-hover:translate-x-0.5 transition-transform flex-shrink-0"
              />
            </motion.div>

            {/* Main Headline (Exact editorial serif styling) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-[#0b3d2e] tracking-tight leading-[1.08]"
            >
              {firstName} <br />
              <span className="relative inline-block">
                {restName}
                <span className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-24 sm:w-32 h-1 sm:h-1.5 bg-[#10b981] rounded-full" />
              </span>
              <br />
              <span className="font-normal font-sans text-2xl sm:text-4xl lg:text-5xl text-[#0b3d2e]/90 block mt-2 sm:mt-3">
                for a Better Tomorrow
              </span>
            </motion.h1>

            {/* Subtitle Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xs sm:text-base text-slate-600 leading-relaxed font-medium max-w-xl"
            >
              {heroSubtitle}
            </motion.p>

            {/* 2 Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2"
            >
              {/* Primary: Apply for Admission */}
              <button
                onClick={() => onNavigate && onNavigate("admissions")}
                className="bg-[#0b3d2e] hover:bg-[#072c21] text-white font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Apply for Admission</span>
                <ArrowRight size={15} />
              </button>

              {/* Secondary: Take a Virtual Tour */}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Campus & Student Showcase (7 cols) - order-1 on mobile, order-2 on desktop ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 relative order-1 lg:order-2"
          >
            {/* Whimsical Handwritten Doodle & Note (Top Right) */}
            <div className="absolute -top-12 right-4 z-20 hidden sm:flex items-center gap-2 text-right">
              <div>
                <span className="font-serif italic font-bold text-sm sm:text-base text-[#0b3d2e] block leading-tight">
                  Education Today
                </span>
                <span className="font-serif italic font-bold text-sm sm:text-base text-[#0b3d2e] block leading-tight">
                  A Brighter Tomorrow
                </span>
              </div>
              <svg
                className="w-7 h-7 text-[#0b3d2e] -rotate-12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </div>

            {/* School Campus Photo Frame - Responsive Sizing for Mobile */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-white h-[260px] sm:h-[380px] md:h-[460px] lg:h-auto lg:min-h-[600px] xl:min-h-[660px] w-full bg-slate-100 group flex items-center justify-center shadow-lg sm:shadow-none">
              <img
                src={heroImage}
                alt={`${schoolName} Campus`}
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />

              {/* School Facade Plaque Overlay */}
              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl border border-[#d2e8dc] z-10 shadow-xs">
                <span className="font-serif font-black text-[11px] sm:text-sm text-[#0b3d2e] block leading-tight">
                  {(schoolName || "Iqra Public School").toUpperCase()}
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold text-emerald-700 tracking-wider block mt-0.5 uppercase">
                  Learn &bull; Grow &bull; Succeed
                </span>
              </div>

              {/* Floating Pill on Right of Campus Frame */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                onClick={() => onNavigate && onNavigate("about")}
                className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 bg-[#0b3d2e]/95 backdrop-blur-md text-white px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl border border-emerald-500/40 flex items-center gap-2 sm:gap-3 cursor-pointer hover:bg-[#0b3d2e] transition-all z-10 shadow-md"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-emerald-700/80 text-white flex items-center justify-center flex-shrink-0">
                  <BookOpen size={15} />
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-black block leading-tight">
                    Same Values
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-emerald-200 font-bold block leading-tight">
                    Brighter Futures
                  </span>
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-white/30 flex items-center justify-center text-white/80 flex-shrink-0">
                  <ArrowRight size={10} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── FLOATING METRIC COUNTER CARD (Vibrant Colorful Design) ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12 bg-gradient-to-br from-white via-[#f6fbf8] to-[#edf7f1] rounded-2xl sm:rounded-[32px] border-2 border-[#bfe0ce] p-4 sm:p-7 relative z-20 overflow-hidden shadow-xl shadow-[#0b3d2e]/5"
        >
          {/* Top Gradient Accent Ribbon */}
          <div className="h-1.5 w-full bg-gradient-to-r from-emerald-600 via-teal-500 via-amber-500 to-emerald-700 absolute top-0 left-0" />

          {/* Subtle Decorative Leaf Watermark */}
          <div className="absolute -bottom-4 -right-4 w-44 h-44 opacity-20 pointer-events-none text-emerald-800">
            <svg
              viewBox="0 0 100 100"
              fill="currentColor"
              className="w-full h-full"
            >
              <path d="M50 0C50 35 15 50 0 50C35 50 50 85 50 100C50 65 85 50 100 50C65 50 50 15 50 0Z" />
              <path
                d="M20 80C35 60 65 60 80 40C65 55 50 80 20 80Z"
                opacity="0.6"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center pt-1">
            {/* Left: 5 Key Metric Counters with Rich Jewel Tones (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-2">
              {metrics.map((m, idx) => {
                const Icon = m.icon;
                const isLast = idx === metrics.length - 1;
                return (
                  <div
                    key={idx}
                    className={`flex flex-col items-center text-center p-2.5 sm:p-3 rounded-2xl transition-all duration-300 ${m.hoverBg} relative group ${
                      !isLast ? "md:border-r md:border-emerald-200/60" : ""
                    } ${idx === 4 ? "col-span-2 sm:col-span-1" : ""}`}
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${m.bg} flex items-center justify-center mb-2 sm:mb-2.5 transition-transform duration-300 group-hover:scale-110 shadow-xs`}
                    >
                      <Icon size={20} className={m.color} />
                    </div>
                    <div
                      className={`font-serif font-black text-xl sm:text-3xl tracking-tight mb-0.5 ${m.numColor}`}
                    >
                      {m.value}
                    </div>
                    <div className="text-[10px] sm:text-xs font-bold text-slate-600 leading-tight">
                      {m.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Signature Deep Forest Green Brand Quote Box (4 cols) */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#06261c] via-[#0b3d2e] to-[#0d4a38] text-white rounded-2xl p-4 sm:p-5 border border-emerald-500/30 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-start gap-3 relative z-10">
                <span className="font-serif font-black text-4xl sm:text-5xl text-amber-400 leading-none select-none -mt-1 drop-shadow-sm">
                  “
                </span>
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm text-emerald-50 font-medium leading-relaxed italic font-serif">
                    A good education is the foundation for a better future.
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] text-emerald-200 font-bold uppercase tracking-wider">
                    <Leaf size={11} className="text-emerald-300" />
                    <span>Iqra Educational Vision</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
