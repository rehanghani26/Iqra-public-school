'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { usePortal } from '../context/PortalContext';

/**
 * PortalLayout
 * Mirrors ui/src/layouts/DashboardLayout.jsx pattern.
 * Provides the sticky header, main scrollable body, and universal footer.
 */
export const PortalLayout = ({ children }) => {
  const { portalData, activePage, onNavigate } = usePortal();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Universal Sticky Glassmorphic Header */}
      <Header
        portalData={portalData}
        activePage={activePage}
        onNavigate={onNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">{children}</main>

      {/* Universal Rich Footer */}
      <Footer
        portalData={portalData}
        onNavigate={onNavigate}
      />
    </div>
  );
};

export default PortalLayout;
