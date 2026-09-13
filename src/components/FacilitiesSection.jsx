'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users,
  BookOpen,
  Trophy,
  Compass,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

const FacilitiesSection = ({ portalData, onNavigate }) => {
  const facilities = portalData?.facilities || [
    {
      title: 'Experienced Teachers',
      badge: 'Experienced',
      description:
        'Certified master educators committed to personalized student mentorship, empathy, and academic excellence.',
      icon: 'teachers',
      gradient: 'from-blue-600 to-indigo-600',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200',
      shadow: 'hover:shadow-indigo-glow',
    },
    {
      title: 'Good Classrooms',
      badge: 'Modern',
      description:
        'Spacious, climate-controlled, smart interactive digital boards, natural sunlight, and ergonomic learning spaces.',
      icon: 'classrooms',
      gradient: 'from-emerald-600 to-teal-600',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      shadow: 'hover:shadow-emerald-glow',
    },
    {
      title: 'Sports & Activities',
      badge: 'Sports & Events',
      description:
        'Olympic-standard athletic turf, indoor badminton courts, football academy, swimming, music, and annual sports fest.',
      icon: 'activities',
      gradient: 'from-amber-600 to-orange-600',
      tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
      iconBg: 'bg-amber-50 text-amber-600 border-amber-200',
      shadow: 'hover:shadow-amber-glow',
    },
  ];

  return (
    <section id="facilities" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block bg-[#edf7f2] border border-[#d2e8dc] text-[#0b3d2e] font-bold text-xs px-3.5 py-1.5 rounded-xl uppercase tracking-wider shadow-xs">
            World-Class Infrastructure
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#0b3d2e]">
            Our Campus Facilities
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Designed to foster intellectual rigor, athletic health, and creative expression in a vibrant setting.
          </p>
        </div>

        {/* ── 3 CORE REQUESTED CARDS: TEACHERS, CLASSROOMS, ACTIVITIES ─────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => {
            const isTeachers = fac.icon === 'teachers' || fac.title.toLowerCase().includes('teacher');
            const isClassrooms = fac.icon === 'classrooms' || fac.title.toLowerCase().includes('classroom');

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl border border-[#dceee3] p-8 shadow-soft hover:shadow-forest-glow hover:border-emerald-500 relative overflow-hidden transition-all group"
              >
                {/* Top Subtle Colorful Gradient Border */}
                <div
                  className="h-2.5 w-full absolute top-0 left-0 bg-gradient-to-r from-[#0b3d2e] via-emerald-600 to-[#166c52]"
                />

                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold border shadow-xs group-hover:scale-110 transition-transform ${
                      fac.iconBg || 'bg-[#edf7f2] text-[#0b3d2e] border-[#d2e8dc]'
                    }`}
                  >
                    {isTeachers ? (
                      <Users size={28} />
                    ) : isClassrooms ? (
                      <BookOpen size={28} />
                    ) : (
                      <Trophy size={28} />
                    )}
                  </div>
                  <span
                    className={`text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full border ${
                      fac.tagColor || 'bg-[#f4f9f6] border-[#dceee3] text-[#0b3d2e]'
                    }`}
                  >
                    {fac.badge}
                  </span>
                </div>

                <h3 className="font-serif font-black text-2xl text-slate-900 mb-3 group-hover:text-[#0b3d2e] transition-colors">
                  {fac.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6">
                  {fac.description}
                </p>

                <Link
                  href="/facilities"
                  prefetch={true}
                  className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-extrabold text-[#0b3d2e] group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>Explore Facility Standards</span>
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ── EXTENDED CAMPUS HIGHLIGHTS BAR ────────────────────────────── */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <motion.div
            whileHover={{ y: -3 }}
            className="bg-purple-50/50 border border-purple-200/80 rounded-2xl p-4 flex items-center gap-3 shadow-xs"
          >
            <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold border border-purple-200">
              <Compass size={22} />
            </div>
            <div>
              <h5 className="font-extrabold text-xs text-slate-900">AI &amp; Computer Laboratories</h5>
              <p className="text-[11px] text-slate-600 font-medium">Coding, AI literacy, and STEM robotics kits</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="bg-cyan-50/50 border border-cyan-200/80 rounded-2xl p-4 flex items-center gap-3 shadow-xs"
          >
            <div className="w-11 h-11 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold border border-cyan-200">
              <BookOpen size={22} />
            </div>
            <div>
              <h5 className="font-extrabold text-xs text-slate-900">Resource Library &amp; Media</h5>
              <p className="text-[11px] text-slate-600 font-medium">Over 15,000 physical titles and digital journals</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="bg-emerald-50/50 border border-emerald-200/80 rounded-2xl p-4 flex items-center gap-3 shadow-xs"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold border border-emerald-200">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h5 className="font-extrabold text-xs text-slate-900">GPS-Tracked Bus Fleet</h5>
              <p className="text-[11px] text-slate-600 font-medium">Safe routes covering all major city neighborhoods</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
