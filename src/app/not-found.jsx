'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Home,
  ArrowLeft,
  Compass,
  BookOpen,
  Camera,
  GraduationCap,
  Phone,
  Sparkles,
  Shield,
} from 'lucide-react';

export default function NotFound() {
  const quickLinks = [
    { label: 'Home Overview', href: '/', icon: Home, desc: 'Return to campus homepage' },
    { label: 'About School', href: '/about', icon: Shield, desc: 'Our heritage & vision' },
    { label: 'Academic Wings', href: '/academics', icon: BookOpen, desc: 'Curricula & classes' },
    { label: 'Photo Gallery', href: '/gallery', icon: Camera, desc: 'Campus visual archives' },
    { label: 'Admissions Desk', href: '/admissions', icon: GraduationCap, desc: 'Apply for 2026-27' },
    { label: 'Campus Contact', href: '/contact', icon: Phone, desc: 'Directions & timings' },
  ];

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 sm:py-24 px-4 sm:px-8 bg-gradient-to-b from-[#f4f9f6] via-white to-[#edf7f1] relative overflow-hidden">
      {/* Background Ambient Foliage Accents */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-100/35 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-3xl mx-auto text-center relative z-10 space-y-8">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-white border border-[#d2e8dc] text-[#0b3d2e] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-xs"
        >
          <Compass size={14} className="text-amber-500 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Error 404 &bull; Page Not Found</span>
        </motion.div>

        {/* Big Stylized 404 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-2"
        >
          <h1 className="font-serif font-black text-7xl sm:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#06261c] via-[#0b3d2e] to-[#146049] tracking-tight select-none">
            404
          </h1>
          <h2 className="font-serif font-black text-2xl sm:text-4xl text-[#0b3d2e] tracking-tight">
            We Couldn&apos;t Find That Page
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-lg mx-auto leading-relaxed pt-1">
            The page you are looking for might have been moved, renamed, or doesn&apos;t exist.
            Explore one of our main campus destinations below.
          </p>
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 bg-[#0b3d2e] hover:bg-[#072c21] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#0b3d2e]/20 cursor-pointer"
          >
            <Home size={16} />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-white hover:bg-[#f0f7f3] text-[#0b3d2e] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full border border-[#0b3d2e]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-xs"
          >
            <Camera size={15} />
            <span>View Photo Gallery</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-[#f0f7f3] text-[#0b3d2e] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full border border-[#0b3d2e]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-xs"
          >
            <Phone size={15} />
            <span>Contact School</span>
          </Link>
        </motion.div>

        {/* Helpful Quick Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-emerald-900/10 text-left"
        >
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 text-center">
            Popular Campus Destinations
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {quickLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/90 border border-[#dceee3] hover:border-emerald-500 hover:shadow-md transition-all group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#edf7f2] text-[#0b3d2e] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0b3d2e] group-hover:text-white transition-colors">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-900 group-hover:text-[#0b3d2e] transition-colors">
                      {item.label}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      {item.desc}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
