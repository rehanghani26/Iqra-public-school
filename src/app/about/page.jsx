'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePortal } from '@/context/PortalContext';
import {
  Building2,
  Sparkles,
  BookOpen,
  Compass,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { schoolTemplate, directorSir, directorSirMain, award4 } from '@/asset';

const defaultLeadership = [
  {
    name: 'Hasan Shahid',
    role: 'Director, Iqra Public School',
    degrees: 'Educational Visionary & Founder',
    image: directorSir,
    quote:
      'Our endeavor is to enlighten minds with beneficial knowledge and deep-rooted moral values so our children can excel in modern society with dignity and purpose.',
  },
  {
    name: 'Dr. Zafar Iqbal',
    role: 'Principal & Head of Academic Council',
    degrees: 'Ph.D. Education, Senior Academician',
    image: directorSirMain,
    quote:
      'Education is not merely the transmission of facts, but the ignition of curiosity, compassion, and leadership in every young mind that walks through our gates.',
  },
  {
    name: 'Senior Academic Faculty',
    role: 'Head of Curriculum & Student Mentorship',
    degrees: 'CBSE Pedagogy Experts & Master Teachers',
    image: award4,
    quote:
      'A warm, disciplined, and stimulating atmosphere where every child in Motihari is encouraged to realize their highest potential.',
  },
];

const defaultMilestones = [
  { year: '2004', title: 'Campus Founded', desc: 'Started with 120 students and a vision for holistic schooling.' },
  { year: '2012', title: 'STEM & Robotics Hub', desc: 'Introduced 3D printing and coding for middle schoolers.' },
  { year: '2018', title: 'National Sports Award', desc: 'Recognized for top sporting infrastructure in the state.' },
  { year: '2026', title: 'Global Dual Accreditation', desc: 'Now serving over 1,500 students with 100% board distinctions.' },
];

export default function AboutPage() {
  const { portalData, onNavigate } = usePortal();

  const schoolName = portalData?.schoolName || 'Apex International Academy';
  const tagline = portalData?.tagline || 'Quality Education for a Better Future';
  const aboutDesc =
    portalData?.aboutDescription ||
    'Our school provides quality education in a safe and friendly environment with experienced teachers and modern learning facilities.';

  const leadershipList =
    portalData?.leadership && portalData.leadership.length > 0
      ? portalData.leadership
      : defaultLeadership;

  const milestonesList =
    portalData?.milestones && portalData.milestones.length > 0
      ? portalData.milestones
      : defaultMilestones;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="bg-slate-50 min-h-screen"
    >
      {/* ── HEADER HERO BANNER (Light & Elegant) ───────────────────────── */}
      <section className="relative bg-gradient-to-b from-[#edf7f2] via-[#f8fbf9] to-white text-slate-900 py-16 sm:py-20 border-b border-[#dceee3] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#dceee3]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center space-y-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-white border border-[#dceee3] text-[#0b3d2e] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs"
          >
            <Building2 size={14} className="text-amber-500" />
            <span>Discover Our Heritage &amp; Vision</span>
          </motion.div>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0b3d2e] tracking-tight">
            About {schoolName}
          </h1>
          <p className="text-base sm:text-lg font-bold text-emerald-700 max-w-2xl mx-auto">
            {tagline}
          </p>
        </div>
      </section>

      {/* ── CORE INTRODUCTION ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="bg-white rounded-3xl border border-[#dceee3] p-8 sm:p-12 shadow-xl shadow-[#0b3d2e]/5 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#edf7f2] text-[#0b3d2e] px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider border border-[#dceee3]">
              <Sparkles size={14} className="text-amber-500" />
              <span>Our Foundational Promise</span>
            </div>

            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0b3d2e] tracking-tight leading-tight">
              A Legacy of Holistic Brilliance, Compassion, and Character
            </h2>

            {/* Exact Paragraph Highlight */}
            <div className="bg-gradient-to-br from-[#edf7f2] to-white p-6 rounded-2xl border border-[#dceee3] text-[#0b3d2e] font-medium text-base sm:text-lg leading-relaxed shadow-xs">
              "{aboutDesc}"
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              At {schoolName}, we believe that every student has infinite potential. Through modern digital classrooms, certified passionate teachers, comprehensive sports coaching, and a safe, nurturing pastoral community, we create an environment where children do not just study — they flourish.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
              <div className="text-center p-3 rounded-2xl bg-[#f8fbf9] border border-[#dceee3]">
                <div className="font-serif font-bold text-2xl text-[#0b3d2e]">20+</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase">Years of Service</div>
              </div>
              <div className="text-center p-3 rounded-2xl bg-[#f8fbf9] border border-[#dceee3]">
                <div className="font-serif font-bold text-2xl text-emerald-700">1:18</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase">Teacher:Student</div>
              </div>
              <div className="text-center p-3 rounded-2xl bg-[#f8fbf9] border border-[#dceee3]">
                <div className="font-serif font-bold text-2xl text-[#0e523f]">100%</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase">College Entry</div>
              </div>
              <div className="text-center p-3 rounded-2xl bg-[#f8fbf9] border border-[#dceee3]">
                <div className="font-serif font-bold text-2xl text-amber-600">50+</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase">Trophies &amp; Cups</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={schoolTemplate}
                alt="Iqra Public School Campus"
                className="w-full h-[440px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-[#dceee3] hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#edf7f2] text-[#0b3d2e] flex items-center justify-center font-bold">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h5 className="font-extrabold text-xs text-[#0b3d2e]">100% Safe Campus</h5>
                  <p className="text-[11px] text-slate-500">24/7 Security &amp; Medical Nurse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ──────────────────────────────────────────── */}
      <section className="py-16 bg-white border-y border-[#dceee3]">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#edf7f2] to-white rounded-3xl p-8 sm:p-10 border border-[#dceee3] shadow-xs relative overflow-hidden group">
              <div className="w-12 h-12 rounded-2xl bg-[#0b3d2e] text-white flex items-center justify-center font-bold mb-6 shadow-md shadow-[#0b3d2e]/30 group-hover:scale-110 transition-transform">
                <Compass size={24} />
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#0b3d2e] mb-3">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                To be a premier institution of educational innovation that inspires ethical discernment, creative resilience, and world-class scholarship in every learner, equipping them to lead in an interconnected global society.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#edf7f2] to-white rounded-3xl p-8 sm:p-10 border border-[#dceee3] shadow-xs relative overflow-hidden group">
              <div className="w-12 h-12 rounded-2xl bg-[#0e523f] text-white flex items-center justify-center font-bold mb-6 shadow-md shadow-[#0e523f]/30 group-hover:scale-110 transition-transform">
                <BookOpen size={24} />
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#0b3d2e] mb-3">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                To deliver a personalized, joyful learning journey built on academic rigor, moral integrity, physical fitness, and technological empowerment through experienced mentors and an encouraging campus community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACADEMIC LEADERSHIP ───────────────────────────────────────── */}
      <section className="py-20 sm:py-28 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="inline-block bg-[#edf7f2] border border-[#dceee3] text-[#0b3d2e] font-bold text-xs px-3.5 py-1.5 rounded-xl uppercase tracking-wider">
            Mentorship &amp; Guidance
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0b3d2e]">
            Meet Our Educational Leadership
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Dedicated pedagogical leaders guiding curriculum excellence and holistic student welfare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadershipList.map((leader, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl border border-[#dceee3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold text-emerald-300 block">{leader.degrees}</span>
                  <h4 className="font-serif font-bold text-lg text-white">{leader.name}</h4>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#edf7f2] text-[#0b3d2e] border border-[#dceee3]">
                  {leader.role}
                </span>
                <p className="text-xs text-slate-600 italic leading-relaxed font-medium">
                  "{leader.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── MILESTONES (Light & Full Width) ──────────────────────────── */}
      <section className="py-20 bg-[#f8fbf9] border-y border-[#dceee3] text-slate-900">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
              Our Journey Through Time
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0b3d2e]">
              Milestones of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestonesList.map((m, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#dceee3] rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/40 hover:shadow-lg transition-all shadow-soft"
              >
                <div className="text-3xl font-serif font-bold text-[#0b3d2e] mb-2">
                  {m.year}
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900 mb-2">{m.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ────────────────────────────────────────────── */}
      <section className="py-20 w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
        <div className="bg-gradient-to-r from-[#0b3d2e] via-[#0e523f] to-[#146049] rounded-3xl p-10 sm:p-14 text-white shadow-xl shadow-[#0b3d2e]/20 border border-emerald-500/30">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4">
            Become Part of the {schoolName} Story
          </h2>
          <p className="text-sm sm:text-base text-emerald-100 max-w-xl mx-auto mb-8 font-medium">
            Join a community dedicated to your child's happiness, intellectual growth, and future readiness.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => onNavigate && onNavigate('admissions')}
              className="bg-white text-[#0b3d2e] hover:bg-[#edf7f2] font-heading font-black text-xs px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
            >
              Start Admission Process <ArrowRight size={16} />
            </button>
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-7 py-4 rounded-xl border border-white/20 transition-all"
            >
              Contact Campus Office
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
