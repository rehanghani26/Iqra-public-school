'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Navigation,
} from 'lucide-react';
import { schoolTemplate } from '@/asset';
import InquiryForm from './InquiryForm.jsx';

const ContactSection = ({ portalData, onSubmitInquiry, inquirySubmitting, inquirySuccess }) => {
  const schoolName = portalData?.schoolName || 'Apex International Academy';
  const contact = portalData?.contact || {
    address: '124 Academic Enclave, Knowledge Park, City Center',
    phone: '+1 (555) 234-5678',
    email: 'admissions@apexschool.edu',
    timing: 'Monday – Friday: 08:00 AM – 03:30 PM | Saturday: 08:30 AM – 12:30 PM',
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-100/60 border-t border-slate-200/80 relative overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: School Contact Info & Timings (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-[#edf7f2] border border-[#d2e8dc] text-[#0b3d2e] px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider mb-3 shadow-xs">
                <Navigation size={14} className="text-[#0b3d2e]" />
                <span>Visit &amp; Connect</span>
              </div>
              <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#0b3d2e] tracking-tight">
                Connect with Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b3d2e] via-emerald-700 to-[#166c52]">Campus</span>
              </h2>
              <p className="text-sm text-slate-600 font-medium leading-relaxed mt-2">
                Whether you want to explore admissions, schedule a guided campus tour, or reach our academic administration, we're here to assist.
              </p>
            </div>

            {/* School Contact Cards */}
            <div className="space-y-4">
              {/* Campus Address */}
              <div className="bg-white p-5 rounded-2xl border border-[#dceee3] shadow-sm hover:shadow-md hover:border-emerald-500 transition-all flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#edf7f2] text-[#0b3d2e] flex items-center justify-center flex-shrink-0 border border-[#d2e8dc] group-hover:scale-110 transition-transform">
                  <MapPin size={22} />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-black uppercase tracking-wider text-[#0b3d2e]">
                    Campus Location
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mt-0.5 leading-snug">
                    {contact.address}
                  </h4>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#0b3d2e] hover:text-emerald-700 mt-2"
                  >
                    Get Driving Directions <ExternalLink size={11} />
                  </a>
                </div>
              </div>

              {/* Phone Line */}
              <div className="bg-white p-5 rounded-2xl border border-[#dceee3] shadow-sm hover:shadow-md hover:border-emerald-500 transition-all flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0 border border-emerald-200 group-hover:scale-110 transition-transform">
                  <Phone size={22} />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-black uppercase tracking-wider text-emerald-800">
                    Admission Helpline
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                    {contact.phone}
                  </h4>
                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href={`tel:${contact.phone}`}
                      className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#0b3d2e] hover:text-emerald-700"
                    >
                      Call Admissions Desk &rarr;
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div className="bg-white p-5 rounded-2xl border border-[#dceee3] shadow-sm hover:shadow-md hover:border-emerald-500 transition-all flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0 border border-amber-200 group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-black uppercase tracking-wider text-purple-600">
                    Official Admissions Email
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                    {contact.email}
                  </h4>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-1 text-[11px] font-extrabold text-purple-600 hover:text-purple-800 mt-2"
                  >
                    Send Direct Email &rarr;
                  </a>
                </div>
              </div>

              {/* User Specified School Timing Card */}
              <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-white p-5 rounded-2xl border border-amber-200/90 shadow-sm hover:shadow-md transition-all flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:rotate-6 transition-transform">
                  <Clock size={22} />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-black uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    School &amp; Office Timings
                  </div>
                  <p className="text-sm font-black text-slate-900 mt-1 leading-relaxed">
                    {contact.timing}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium mt-1">
                    Visitor consultations are available during administrative office hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Campus Interactive Map Card */}
            <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-white p-2">
              <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center">
                <img
                  src={schoolTemplate}
                  alt={`${schoolName} Campus`}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-indigo-950/40 backdrop-blur-[2px]" />
                <div className="relative z-10 text-center p-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center mx-auto mb-2 shadow-lg animate-bounce">
                    <MapPin size={20} />
                  </div>
                  <h5 className="font-heading font-black text-white text-sm">
                    {schoolName}
                  </h5>
                  <p className="text-[11px] text-indigo-200 font-medium">Main Academic Campus &amp; Sports Complex</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Admission Inquiry Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <InquiryForm
              onSubmitInquiry={onSubmitInquiry}
              inquirySubmitting={inquirySubmitting}
              inquirySuccess={inquirySuccess}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
