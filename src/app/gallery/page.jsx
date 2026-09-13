'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePortal } from '@/context/PortalContext';
import GallerySection from '@/components/GallerySection';
import {
  Camera,
  Sparkles,
  ArrowRight,
  ChevronRight,
  GraduationCap,
  Building2,
  Calendar,
  Eye,
  Trophy,
  Phone,
} from 'lucide-react';
import Link from 'next/link';

export default function GalleryPage() {
  const { portalData, onNavigate } = usePortal();

  const schoolName = portalData?.schoolName || 'Iqra Public School';
  const tagline = portalData?.tagline || 'Knowledge, Character & Excellence';

  return (
    <div className="w-full bg-[#fcfdfd] text-slate-800 selection:bg-[#0b3d2e] selection:text-white overflow-hidden">
      {/* ── TOP HERO HEADER & BREADCRUMB ──────────────────────────────── */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#eaf4ee] via-[#f3f9f5] to-[#fcfdfd] border-b border-[#dceee3] overflow-hidden">
        {/* Soft Ambient Foliage Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/35 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center space-y-4 max-w-5xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 mb-2">
            <Link
              href="/"
              prefetch={true}
              className="hover:text-[#0b3d2e] transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={13} className="text-slate-400" />
            <span className="text-[#0b3d2e] font-extrabold">Photo Gallery</span>
          </div>

          {/* Eyebrow Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-white border border-[#dceee3] text-[#0b3d2e] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs"
          >
            <Camera size={14} className="text-amber-500" />
            <span>Official Visual Archives &bull; {schoolName}</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-[#0b3d2e] tracking-tight leading-[1.12]"
          >
            Campus Life &amp; Moments of Excellence
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Explore an authentic visual tour of our state-of-the-art campus, daily moral assemblies,
            science exhibitions, district sports championships, national holiday parades, and boarding life.
          </motion.p>

          {/* Quick Stat Chips */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-xl border border-[#dceee3] shadow-xs text-xs font-bold text-slate-700">
              <Sparkles size={13} className="text-emerald-600" />
              <span>14+ Curated Highlights</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-xl border border-[#dceee3] shadow-xs text-xs font-bold text-slate-700">
              <Building2 size={13} className="text-teal-600" />
              <span>Campus Infrastructure</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-xl border border-[#dceee3] shadow-xs text-xs font-bold text-slate-700">
              <Trophy size={13} className="text-amber-600" />
              <span>Sports &amp; Accolades</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-xl border border-[#dceee3] shadow-xs text-xs font-bold text-slate-700">
              <Calendar size={13} className="text-blue-600" />
              <span>Annual Fest &amp; Events</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FULL GALLERY SECTION WITH FILTER TABS & LIGHTBOX ───────────── */}
      <GallerySection portalData={portalData} isPreview={false} onNavigate={onNavigate} />

      {/* ── BOTTOM CAMPUS VISIT & ADMISSION PROMPT ─────────────────────── */}
      <section className="py-16 sm:py-20 w-full px-4 sm:px-8 lg:px-12 xl:px-16 bg-[#f8fbf9] border-t border-[#dceee3]">
        <div className="bg-gradient-to-r from-[#06261c] via-[#0b3d2e] to-[#0e523f] rounded-3xl p-8 sm:p-12 text-white shadow-2xl shadow-[#0b3d2e]/25 border border-emerald-500/30 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden max-w-7xl mx-auto">
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 relative z-10 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border border-white/20">
              <Sparkles size={12} className="text-amber-400" />
              <span>Experience Our Campus In Person</span>
            </div>
            <h2 className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
              Ready to See Iqra Public School For Yourself?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-medium">
              Schedule a guided campus tour with our admissions counseling team. Walk through our smart classrooms,
              science laboratories, library, and sports grounds, and discover why families trust us for their children's future.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 w-full lg:w-auto flex-shrink-0">
            <Link
              href="/admissions"
              prefetch={true}
              className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-amber-300/60"
            >
              <GraduationCap size={16} />
              <span>Apply for Admission</span>
            </Link>
            <Link
              href="/contact"
              prefetch={true}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full border border-white/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
            >
              <Phone size={14} />
              <span>Contact Admissions Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
