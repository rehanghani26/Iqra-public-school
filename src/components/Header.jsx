'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Phone,
  Mail,
  Sparkles,
  Users,
  ExternalLink,
  Menu,
  X,
  ChevronRight,
  Search,
  BookOpen,
  Building2,
  Home,
  Shield,
  ArrowRight,
} from 'lucide-react';

const Header = ({ portalData, activePage = 'home', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const schoolName = portalData?.schoolName || 'Iqra Public School';
  const affiliation =
    portalData?.affiliation || 'Affiliated to CBSE Pattern & Modern Curriculum';
  const contact = portalData?.contact || {
    phone: '+91 94314 26252',
    email: 'info@iqrapublicschool.com',
    timing: 'Monday – Thursday: 09:00 AM – 02:30 PM',
  };

  const navItems = [
    { id: 'home', label: 'Home', href: '/', icon: Home },
    { id: 'about', label: 'About School', href: '/about', icon: Users },
    { id: 'academics', label: 'Academics', href: '/academics', icon: BookOpen },
    { id: 'facilities', label: 'Facilities', href: '/facilities', icon: Building2 },
    { id: 'admissions', label: 'Admissions', href: '/admissions', icon: GraduationCap },
    { id: 'contact', label: 'Contact', href: '/contact', icon: Phone },
  ];

  const handleNavClick = (id) => {
    if (onNavigate) {
      onNavigate(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* ── MAIN STICKY NAVBAR (Full Brand Forest Green) ────────────── */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-[#06261c] via-[#0b3d2e] to-[#08382b] border-b border-[#145a44]/70 shadow-lg shadow-[#06261c]/30 backdrop-blur-md">
        {/* Subtle Top Gold/Emerald Accent Ribbon */}
        <div className="h-0.5 w-full bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-400 opacity-80" />

        <div className="w-full px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-4">
          {/* School Emblem + School Name (Left) */}
          <Link
            href="/"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left flex-shrink-0"
          >
            {/* Emblem Logo */}
            <div className="w-12 h-12 rounded-2xl bg-white p-1 flex items-center justify-center text-[#0b3d2e] shadow-md border border-white/30 group-hover:scale-105 transition-transform overflow-hidden">
              {portalData?.schoolLogo ? (
                <img
                  src={portalData.schoolLogo}
                  alt={schoolName}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <div className="relative flex items-center justify-center">
                  <Shield size={26} className="text-[#0b3d2e]" />
                  <BookOpen size={13} className="absolute text-emerald-600" />
                </div>
              )}
            </div>
            <div>
              <span className="font-serif font-black text-xl sm:text-2xl text-white tracking-tight block leading-tight group-hover:text-emerald-200 transition-colors">
                {schoolName}
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-emerald-300/90 uppercase tracking-wider block mt-0.5">
                {affiliation}
              </span>
            </div>
          </Link>

          {/* Center Navigation Menu Pill */}
          <nav className="hidden lg:flex items-center bg-[#072a20]/90 p-1.5 rounded-full border border-[#165e47]/70 backdrop-blur-md shadow-inner">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-white text-[#0b3d2e] shadow-md scale-105 font-black'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-[#0b3d2e]' : 'text-emerald-300/80'} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Search + Apply Online Button */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              aria-label="Search portal"
              className="w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shadow-xs"
            >
              <Search size={16} />
            </button>

            <button
              onClick={() => handleNavClick('admissions')}
              className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-lg shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer border border-amber-300/60"
            >
              <span>Apply Online</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE SLIDE-DOWN DRAWER (Brand Themed) ───────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-[#072a20] border-b border-[#145a44] px-5 py-6 shadow-2xl sticky top-20 z-40 text-white"
          >
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                      activePage === item.id
                        ? 'bg-white text-[#0b3d2e] shadow-md font-black'
                        : 'text-white/85 hover:bg-white/10'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon size={16} /> {item.label}
                    </span>
                    <ChevronRight size={14} className="opacity-50" />
                  </button>
                );
              })}
            </div>

            <div className="mt-5 pt-5 border-t border-emerald-900/60 flex flex-col gap-2.5">
              <button
                onClick={() => handleNavClick('admissions')}
                className="w-full text-center bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black py-3 rounded-xl text-xs shadow-lg flex items-center justify-center gap-2 border border-amber-300/60"
              >
                <span>Apply Online</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
