'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import LogoLoader from './LogoLoader';
import { usePortal } from '@/context/PortalContext';

export default function PortalShell({ children }) {
  const { portalData, activePage, onNavigate, loading } = usePortal();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-700 selection:text-white relative w-full max-w-full overflow-x-hidden">
      {/* ── Branded Logo Loader (Home Page Only) ─────── */}
      <AnimatePresence>
        {loading && activePage === 'home' && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
            className="fixed inset-0 z-50 pointer-events-auto"
          >
            <LogoLoader fullScreen={true} variant="dark" message="Loading Campus Portal..." />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Universal Sticky Glassmorphic Header */}
      <Header
        portalData={portalData}
        activePage={activePage}
        onNavigate={onNavigate}
      />

      {/* Main Page View */}
      <main className="flex-1">{children}</main>

      {/* Universal Rich Footer */}
      <Footer
        portalData={portalData}
        onNavigate={onNavigate}
      />
    </div>
  );
}
