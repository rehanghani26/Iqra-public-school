'use client';

import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ArrowUp,
  MapPin,
  Sparkles,
} from 'lucide-react';

const Footer = ({ portalData, onNavigate }) => {
  const schoolName = portalData?.schoolName || 'Iqra Public School';
  const tagline = portalData?.tagline || 'Knowledge, Character & Excellence';
  const affiliation =
    portalData?.affiliation || 'Affiliated to CBSE Pattern & Modern Curriculum';
  const contact = portalData?.contact || {
    address: 'Near Hanuman Gadhi Masjid, Nakshey Tola, Eidgah Road, Motihari, Bihar - 845401',
    phone: '+91 94314 26252',
    email: 'info@iqrapublicschool.com',
    timing: 'Monday – Thursday: 09:00 AM – 02:30 PM | Friday: 09:00 AM – 11:00 AM | Saturday: 09:00 AM – 02:00 PM',
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNav = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
    scrollToTop();
  };

  return (
    <footer className="bg-[#f8fbf9] text-slate-600 text-xs relative overflow-hidden border-t border-[#dceee3]">
      {/* Top Colorful Accent Ribbon */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#0b3d2e] via-emerald-600 via-[#166c52] to-amber-400" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Col 1 & 2: School Branding & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 text-left group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0b3d2e] flex items-center justify-center text-white shadow-lg shadow-[#0b3d2e]/20 border border-emerald-500/30 group-hover:scale-105 transition-transform overflow-hidden">
                {portalData?.schoolLogo ? (
                  <img
                    src={portalData.schoolLogo}
                    alt={schoolName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <GraduationCap size={26} className="text-emerald-300" />
                )}
              </div>
              <div>
                <span className="font-serif font-bold text-2xl text-[#0b3d2e] tracking-tight block leading-tight">
                  {schoolName}
                </span>
                <span className="text-[11px] font-bold text-emerald-700 block mt-0.5">
                  {affiliation}
                </span>
              </div>
            </button>

            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-sm">
              "{tagline}" — Fostering global scholars, ethical leaders, and creative thinkers through world-class educators, modern labs, and athletic excellence.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-slate-600 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Campus Affiliation Code:</span>
              <span className="text-slate-800 font-mono font-bold bg-white px-2 py-0.5 rounded border border-[#dceee3] shadow-2xs">
                SCH-2026-CBSE-9912
              </span>
            </div>
          </div>

          {/* Col 3: Academic & Admissions Navigation */}
          <div>
            <h5 className="font-heading font-black text-[#0b3d2e] text-sm mb-4 uppercase tracking-wider">
              Explore Pages
            </h5>
            <ul className="space-y-2.5 font-semibold">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#0b3d2e] hover:translate-x-1 transition-all cursor-pointer text-slate-600"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#0b3d2e] hover:translate-x-1 transition-all cursor-pointer text-slate-600"
                >
                  About Our School
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('academics')}
                  className="hover:text-[#0b3d2e] hover:translate-x-1 transition-all cursor-pointer text-slate-600"
                >
                  Academic Wings &amp; Curricula
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('facilities')}
                  className="hover:text-[#0b3d2e] hover:translate-x-1 transition-all cursor-pointer text-slate-600"
                >
                  Modern Campus Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-[#0b3d2e] hover:translate-x-1 transition-all cursor-pointer text-slate-600"
                >
                  Photo Gallery &amp; Archives
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('admissions')}
                  className="hover:text-[#0b3d2e] hover:translate-x-1 transition-all cursor-pointer text-slate-600"
                >
                  Admissions 2026-27
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#0b3d2e] hover:translate-x-1 transition-all cursor-pointer text-slate-600"
                >
                  Campus Contact &amp; Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Contact & Timings */}
          <div>
            <h5 className="font-heading font-black text-[#0b3d2e] text-sm mb-4 uppercase tracking-wider">
              Campus Hours
            </h5>
            <div className="space-y-3 font-medium text-slate-600">
              <div className="flex items-start gap-2">
                <Clock size={15} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">School Timings:</span>
                  <span className="text-[11px] leading-relaxed block">{contact.timing}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone size={15} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Admissions Desk:</span>
                  <span className="text-[11px]">{contact.phone}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail size={15} className="text-[#0b3d2e] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Admissions Email:</span>
                  <span className="text-[11px] break-all">{contact.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 5: Student/Staff Resources */}
          <div className="space-y-4">
            <h5 className="font-heading font-black text-[#0b3d2e] text-sm uppercase tracking-wider">
              Campus Community
            </h5>
            <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
              Join a vibrant community of scholars, passionate educators, and engaged families dedicated to excellence and holistic growth.
            </p>

            {/* ERP Portal button (commented out per request) */}
            {/*
            <a
              href="http://localhost:3000/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-heading font-black py-3 rounded-xl text-xs shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 border border-indigo-400/30"
            >
              Access ERP Portal <ExternalLink size={13} />
            </a>
            */}

            <button
              onClick={scrollToTop}
              className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-[#edf7f2] text-[#0b3d2e] border border-[#dceee3] shadow-2xs transition-colors flex items-center justify-center gap-1.5 text-[11px] font-bold cursor-pointer"
            >
              <ArrowUp size={13} className="text-[#0b3d2e]" /> Back to Top
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#dceee3] flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>&copy; {new Date().getFullYear()} {schoolName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {/* <span>Powered by <strong className="text-indigo-600">Aegis School ERP Suite</strong></span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
