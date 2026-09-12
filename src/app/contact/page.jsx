'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePortal } from '@/context/PortalContext';
import {
  Phone,
  Mail,
  Clock,
  Navigation,
} from 'lucide-react';
import ContactSection from '@/components/ContactSection';

const defaultDepartments = [
  {
    title: 'Admissions & Campus Tours',
    phone: '+1 (555) 234-5678',
    email: 'admissions@alhamdschool.edu',
    hours: 'Mon – Sat: 8:00 AM – 4:00 PM',
    color: 'border-[#dceee3] bg-[#edf7f2]/60',
  },
  {
    title: 'Principal & Academic Director Office',
    phone: '+1 (555) 234-5680',
    email: 'principal@alhamdschool.edu',
    hours: 'By prior appointment only',
    color: 'border-[#dceee3] bg-emerald-50/50',
  },
  {
    title: 'Transport & Safety Helpline',
    phone: '+1 (555) 234-5699',
    email: 'transport@alhamdschool.edu',
    hours: '6:30 AM – 6:00 PM on school days',
    color: 'border-emerald-200 bg-emerald-50/50',
  },
  {
    title: 'Accounts & Fee Desk',
    phone: '+1 (555) 234-5682',
    email: 'accounts@alhamdschool.edu',
    hours: 'Mon – Fri: 9:00 AM – 3:00 PM',
    color: 'border-amber-200 bg-amber-50/50',
  },
];

export default function ContactPage() {
  const {
    portalData,
    onSubmitInquiry,
    inquirySubmitting,
    inquirySuccess,
  } = usePortal();

  const departmentList =
    portalData?.departments && portalData.departments.length > 0
      ? portalData.departments
      : defaultDepartments;

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
          <div className="inline-flex items-center gap-2 bg-white border border-[#dceee3] text-[#0b3d2e] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
            <Navigation size={14} className="text-amber-500" />
            <span>Campus Office &amp; Helpdesk</span>
          </div>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0b3d2e] tracking-tight">
            Contact &amp; Visit Us
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            We welcome parents, prospective families, and visitors to connect with our campus administration.
          </p>
        </div>
      </section>

      {/* ── DEPARTMENT DIRECTORY ──────────────────────────────────────── */}
      <section className="py-16 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="inline-block bg-[#edf7f2] border border-[#dceee3] text-[#0b3d2e] font-bold text-xs px-3.5 py-1.5 rounded-xl uppercase tracking-wider">
            Directory
          </span>
          <h2 className="font-serif font-bold text-3xl text-[#0b3d2e]">
            Department Contact Lines
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Reach out directly to the specialized desk for expedited assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departmentList.map((dep, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-6 shadow-xs flex flex-col justify-between ${dep.color || 'border-[#dceee3] bg-[#edf7f2]/50'}`}
            >
              <div>
                <h4 className="font-heading font-black text-base text-slate-900 mb-3">{dep.title}</h4>
                <div className="space-y-2 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="text-[#0b3d2e] flex-shrink-0" />
                    <span className="font-bold">{dep.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={13} className="text-emerald-700 flex-shrink-0" />
                    <span className="break-all">{dep.email}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] text-slate-500 font-semibold">
                <Clock size={12} className="text-amber-600" />
                <span>{dep.hours}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION & FORM ───────────────────────────────── */}
      <ContactSection
        portalData={portalData}
        onSubmitInquiry={onSubmitInquiry}
        inquirySubmitting={inquirySubmitting}
        inquirySuccess={inquirySuccess}
      />
    </motion.div>
  );
}
