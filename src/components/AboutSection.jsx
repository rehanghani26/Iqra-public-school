'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  CheckCircle2,
  Award,
  BookOpen,
  Trophy,
  ShieldCheck,
  Sparkles,
  Quote,
  ArrowRight,
  GraduationCap,
  Users,
  Star,
  Check,
} from 'lucide-react';
import { prayer, directorSir, award, schoolTemplate } from '@/asset';

const AboutSection = ({ portalData, onNavigate }) => {
  const schoolName = portalData?.schoolName || 'Iqra Public School';
  const aboutTitle = portalData?.aboutTitle || 'About Iqra Public School';
  const aboutDesc =
    portalData?.aboutDescription ||
    'Established with a vision to deliver value-based academic distinction, Iqra Public School provides a safe, disciplined, and stimulating atmosphere where every child in Motihari and East Champaran is encouraged to realize their highest potential.';
  const directorName = portalData?.directorName || 'Hasan Shahid';
  const directorRole = portalData?.directorRole || 'Director, Iqra Public School';
  const directorQuote =
    portalData?.directorQuote ||
    'Our endeavor is to enlighten minds with beneficial knowledge and deep-rooted moral values so our children can excel in modern society with dignity and purpose.';
  const aboutImage = portalData?.aboutImage || prayer;

  const coreValues = [
    {
      title: 'Safe & Disciplined Campus',
      desc: '24/7 CCTV surveillance, guarded gates & pastoral student care.',
      icon: ShieldCheck,
      cardBg: 'bg-gradient-to-br from-emerald-50 via-white to-emerald-50/40 border-emerald-200 hover:border-emerald-500',
      iconStyle: 'bg-emerald-600 text-white shadow-emerald-600/30',
      titleColor: 'text-[#0b3d2e]',
    },
    {
      title: 'Certified Expert Faculty',
      desc: 'Dedicated subject educators fostering conceptual clarity & mentorship.',
      icon: Award,
      cardBg: 'bg-gradient-to-br from-amber-50 via-white to-amber-50/40 border-amber-200 hover:border-amber-500',
      iconStyle: 'bg-amber-600 text-white shadow-amber-600/30',
      titleColor: 'text-amber-950',
    },
    {
      title: 'Smart Digital Learning',
      desc: 'Interactive visual aids, IT workstations & science experiment kits.',
      icon: BookOpen,
      cardBg: 'bg-gradient-to-br from-teal-50 via-white to-teal-50/40 border-teal-200 hover:border-teal-500',
      iconStyle: 'bg-teal-600 text-white shadow-teal-600/30',
      titleColor: 'text-teal-950',
    },
    {
      title: 'Holistic & Athletic Growth',
      desc: 'Competitive sports, moral education, public speaking & cultural arts.',
      icon: Trophy,
      cardBg: 'bg-gradient-to-br from-cyan-50 via-white to-cyan-50/40 border-cyan-200 hover:border-cyan-500',
      iconStyle: 'bg-emerald-700 text-white shadow-emerald-700/30',
      titleColor: 'text-slate-900',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-gradient-to-b from-[#f4f9f6] via-white to-[#edf7f1] relative overflow-hidden">
      {/* ── Soft Ambient Foliage & Mint Background Glows ───────────── */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ── LEFT COLUMN: Text Content & Narrative (6 cols) ───────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Pill Eyebrow with Rich Gold/Mint Gradient */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 via-[#e1f3ea] to-amber-100 border border-emerald-300/80 text-[#0b3d2e] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-xs">
              <Sparkles size={14} className="text-amber-600" />
              <span>Heritage &bull; Vision &bull; Excellence</span>
            </div>

            {/* Editorial Serif Heading with Gradient Highlight */}
            <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-[#0b3d2e] tracking-tight leading-[1.15]">
              Empowering Young Minds, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b3d2e] via-emerald-700 to-amber-600">
                Shaping Tomorrow's Leaders
              </span>
            </h2>

            {/* Editorial Excerpt with Forest Accent Stripe & Warm Background */}
            <div className="relative border-l-4 border-[#0b3d2e] bg-gradient-to-r from-[#eef7f2] via-[#f7faf8] to-white pl-6 pr-6 py-4 rounded-r-3xl border-y border-r border-[#cfe6d8] shadow-xs">
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium italic font-serif">
                "{aboutDesc}"
              </p>
            </div>

            {/* 4 Core Pillars Grid (Elevated Vibrant Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3 }}
                    className={`p-4 rounded-2xl border ${val.cardBg} shadow-sm hover:shadow-md transition-all flex items-start gap-3.5 group`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform ${val.iconStyle}`}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className={`font-heading font-extrabold text-sm ${val.titleColor} transition-colors`}>
                        {val.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                        {val.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ── DIRECTOR'S LEADERSHIP SIGNATURE CARD (Rich Brand Colors) ─── */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#06261c] via-[#0b3d2e] to-[#0d4a38] text-white border-2 border-emerald-500/40 shadow-xl relative overflow-hidden group">
              {/* Subtle Radial Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 relative z-10">
                {/* Director Photo with Gold Ring */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden shadow-lg border-2 border-amber-400 bg-[#06261c] group-hover:scale-105 transition-transform">
                    {directorSir ? (
                      <img
                        src={directorSir}
                        alt={directorName}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white font-serif font-bold text-xl">
                        HS
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-md">
                    <Quote size={11} className="fill-current" />
                  </div>
                </div>

                {/* Director Quote Text */}
                <div className="flex-1 space-y-1.5">
                  <p className="text-xs sm:text-sm text-emerald-50 italic font-serif leading-relaxed">
                    "{directorQuote}"
                  </p>
                  <div className="pt-1 flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <span className="font-heading font-black text-sm text-white block leading-tight">
                        {directorName}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-300 block">
                        {directorRole}
                      </span>
                    </div>

                    <button
                      onClick={() => onNavigate && onNavigate('about')}
                      className="inline-flex items-center gap-1.5 text-xs font-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 px-4 py-2 rounded-full shadow-md hover:scale-105 transition-all cursor-pointer"
                    >
                      <span>Read Message</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Layered Dynamic Visual Showcase (6 cols - Expanded Size) ─ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            {/* Main Stage Image Frame (Significantly Bigger & Taller) */}
            <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] xl:min-h-[700px] w-full group flex items-center justify-center">
              <img
                src={aboutImage}
                alt="Iqra Public School Campus Life & Assemblies"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />

              {/* Gentle Vignette Scrim at bottom for crystal clear text */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06261c]/95 via-[#06261c]/45 via-45% to-transparent opacity-95" />

              {/* Bottom Caption Overlay (Clear, Spacious, Uncluttered) */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 z-10">
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-600 text-white backdrop-blur-md inline-block shadow-xs">
                  Eidgah Road Campus
                </span>
                <h3 className="font-serif font-black text-xl sm:text-2xl text-white block leading-snug drop-shadow-sm">
                  Nurturing Character &amp; Knowledge Every Morning
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100 font-medium leading-relaxed max-w-lg">
                  Morning assembly congregation fostering spiritual grounding, moral integrity, and civic discipline.
                </p>
              </div>
            </div>

            {/* ── Overlapping Secondary Achievement Card (Top Right) ── */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="absolute -top-6 -right-3 sm:-right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border-2 border-amber-200 hidden sm:flex items-center gap-3 z-20 max-w-xs"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-slate-200">
                <img
                  src={award}
                  alt="Academic Awards"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md border border-amber-300 block w-fit mb-0.5">
                  Proven Distinction
                </span>
                <span className="font-heading font-black text-xs text-slate-900 block leading-tight">
                  Annual Merit Awards
                </span>
                <span className="text-[10px] font-bold text-slate-500 block">
                  CBSE Academic Honors
                </span>
              </div>
            </motion.div>

            {/* ── Floating Quality Badge (Top Left Glass Capsule) ─── */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute top-6 left-6 bg-gradient-to-br from-[#06261c]/95 via-[#0b3d2e]/95 to-[#08382b]/95 backdrop-blur-md text-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-emerald-400/40 z-20 flex items-center gap-3 max-w-xs"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-700/90 text-amber-300 flex items-center justify-center font-bold flex-shrink-0 shadow-md">
                <Trophy size={20} />
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-300 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="fill-current" />
                  ))}
                </div>
                <h5 className="font-heading font-black text-xs text-white leading-tight">
                  25+ Years of Trust
                </h5>
                <p className="text-[10px] text-emerald-200 font-semibold leading-tight mt-0.5">
                  Top-Ranked Value-Based School
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
