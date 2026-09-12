'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, ChevronRight } from 'lucide-react';

const DEFAULT_NOTICES = [
  {
    title: 'Admissions Open for Academic Year 2026-2027 (Limited Seats Available)',
    date: 'Sep 05, 2026',
    tag: 'Admissions',
    urgent: true,
  },
  {
    title: 'Annual Inter-School Robotics & STEM Innovation Fair Next Friday',
    date: 'Sep 12, 2026',
    tag: 'Events',
    urgent: false,
  },
  {
    title: 'Term 1 Comprehensive Assessment Schedule & Parent-Teacher Meeting',
    date: 'Sep 20, 2026',
    tag: 'Academic',
    urgent: false,
  },
];

const NoticeTicker = ({ portalData, onNavigate }) => {
  const notices = portalData?.notices && portalData.notices.length > 0 ? portalData.notices : DEFAULT_NOTICES;

  return (
    <section className="bg-[#f4f9f6] border-b border-[#dceee3] py-5">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-shrink-0">
            <motion.span
              animate={{ rotate: [0, -6, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0b3d2e] to-[#166c52] text-white flex items-center justify-center shadow-md border border-[#1b7a5e]/30"
            >
              <Flame size={18} className="text-amber-300" />
            </motion.span>
            <div>
              <h4 className="font-heading font-black text-sm text-[#0b3d2e] tracking-tight">
                Notice Board &amp; Bulletin
              </h4>
              <p className="text-[11px] text-slate-500 font-medium">
                Latest verified announcements for students &amp; parents
              </p>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
            {notices.map((n, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3 }}
                className="bg-white border border-[#dceee3] rounded-2xl p-3.5 flex items-start justify-between gap-2 shadow-xs hover:shadow-forest-glow hover:border-emerald-600 transition-all cursor-pointer group"
                onClick={() => onNavigate && onNavigate('admissions')}
              >
                <div className="min-w-0 flex-1">
                  <span
                    className={`inline-block text-[10px] font-black uppercase px-2 py-0.5 rounded-md mb-1 border ${
                      n.color || (n.urgent ? 'border-rose-200 bg-rose-50 text-rose-700' : 'border-emerald-200 bg-emerald-50 text-emerald-800')
                    }`}
                  >
                    {n.tag}
                  </span>
                  <p className="text-xs font-bold text-slate-800 group-hover:text-[#0b3d2e] transition-colors line-clamp-1">
                    {n.title}
                  </p>
                  <span className="text-[10px] text-slate-400 font-medium">{n.date}</span>
                </div>
                <ChevronRight size={14} className="text-slate-400 group-hover:text-[#0b3d2e] group-hover:translate-x-1 transition-all flex-shrink-0 mt-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeTicker;
