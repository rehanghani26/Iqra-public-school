'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, BookOpen } from 'lucide-react';
import { schoolLogo } from '@/asset';

/**
 * Premium Logo-Centric Animated Loader for Iqra Public School
 * Features:
 * - Central illuminated Iqra Public School emblem with breathing pulse
 * - Dual spinning orbital energy rings (Emerald & Gold)
 * - Shimmering ambient glow backdrop
 * - Animated progress track with brand gradient
 * - Typography: "IQRA PUBLIC SCHOOL" & "LEARN • GROW • SUCCEED"
 */
const LogoLoader = ({
  fullScreen = true,
  message = 'Loading Campus Portal...',
  variant = 'dark', // 'dark' | 'light'
}) => {
  const isDark = variant === 'dark';

  const containerClasses = fullScreen
    ? `fixed inset-0 z-50 flex flex-col items-center justify-center ${
        isDark
          ? 'bg-gradient-to-b from-[#041c14] via-[#0b3d2e] to-[#06261c] text-white'
          : 'bg-gradient-to-b from-[#f4f9f6] via-white to-[#edf7f1] text-slate-800'
      }`
    : `w-full py-16 flex flex-col items-center justify-center ${
        isDark ? 'text-white' : 'text-slate-800'
      }`;

  return (
    <div className={containerClasses}>
      {/* ── Soft Ambient Radial Glows ─────────────────────────────── */}
      <div className="absolute w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute w-64 h-64 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative flex flex-col items-center z-10 px-4">
        {/* ── LOGO & SPINNER WRAPPER ─────────────────────────────────── */}
        <div className="relative flex items-center justify-center w-36 h-36 sm:w-44 sm:h-44 mb-6">
          {/* Outer Pulsing Aura Ring */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className={`absolute inset-0 rounded-full ${
              isDark ? 'bg-emerald-500/20' : 'bg-emerald-300/30'
            } blur-md`}
          />

          {/* Outer Clockwise Spinning Gradient Orbital Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
            className="absolute -inset-2 sm:-inset-3 rounded-full border-2 border-transparent border-t-emerald-400 border-r-amber-400/80 border-b-emerald-600/40 opacity-90"
          />

          {/* Counter-Clockwise Inner Accent Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
            className="absolute -inset-4 sm:-inset-5 rounded-full border border-dashed border-emerald-400/30 opacity-60"
          />

          {/* Center White Circular Badge Hosting Authentic School Logo */}
          <motion.div
            animate={{ scale: [0.97, 1.03, 0.97] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white shadow-2xl p-2 flex items-center justify-center border-2 border-white/80 overflow-hidden group"
          >
            {/* Shimmer Light Sweep Effect */}
            <motion.div
              animate={{ x: ['-150%', '150%'] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut', repeatDelay: 1 }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-12 pointer-events-none z-10"
            />

            {/* School Logo Emblem */}
            <img
              src={schoolLogo}
              alt="Iqra Public School Logo"
              className="w-full h-full object-contain filter drop-shadow-sm select-none"
            />
          </motion.div>

          {/* Small Floating Gold Star/Sparkle Badge */}
          <motion.div
            animate={{ y: [0, -4, 0], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="absolute -top-1 right-2 sm:right-4 w-7 h-7 rounded-full bg-gradient-to-tr from-amber-400 to-amber-300 text-slate-950 flex items-center justify-center shadow-lg border border-white/40"
          >
            <Sparkles size={13} className="fill-current text-slate-950" />
          </motion.div>
        </div>

        {/* ── BRAND TITLES & MOTTO ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-1.5"
        >
          <h3
            className={`font-serif font-black text-xl sm:text-2xl tracking-widest uppercase ${
              isDark ? 'text-white' : 'text-[#0b3d2e]'
            }`}
          >
            Iqra Public School
          </h3>

          <p
            className={`text-[11px] sm:text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 ${
              isDark ? 'text-emerald-300' : 'text-emerald-700'
            }`}
          >
            <span>Learn</span>
            <span className="text-amber-400">&bull;</span>
            <span>Grow</span>
            <span className="text-amber-400">&bull;</span>
            <span>Succeed</span>
          </p>
        </motion.div>

        {/* ── ANIMATED PROGRESS BAR & STATUS ─────────────────────────── */}
        <div className="w-48 sm:w-56 mt-6 space-y-2.5">
          <div className="h-1.5 w-full bg-black/20 dark:bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'easeInOut',
              }}
              className="h-full w-2/3 bg-gradient-to-r from-emerald-400 via-amber-300 to-emerald-300 rounded-full shadow-xs"
            />
          </div>

          <p
            className={`text-center text-[11px] font-semibold tracking-wide ${
              isDark ? 'text-emerald-200/80' : 'text-slate-500'
            }`}
          >
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoLoader;
