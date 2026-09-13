'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePortal } from '@/context/PortalContext';
import {
  FileCheck2,
  Calendar,
  Sparkles,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import AdmissionsRoadmap from '@/components/AdmissionsRoadmap';
import InquiryForm from '@/components/InquiryForm';
import FaqSection from '@/components/FaqSection';

const defaultAgeCriteria = [
  { grade: 'Pre-Nursery / Playgroup', age: '2.5 – 3 Years', cutoff: 'As of March 31, 2026' },
  { grade: 'Kindergarten 1 (LKG)', age: '3.5 – 4 Years', cutoff: 'As of March 31, 2026' },
  { grade: 'Kindergarten 2 (UKG)', age: '4.5 – 5 Years', cutoff: 'As of March 31, 2026' },
  { grade: 'Grade 1', age: '5.5 – 6.5 Years', cutoff: 'As of March 31, 2026' },
  { grade: 'Grade 2 to Grade 5', age: 'Age appropriate + Previous school report card', cutoff: 'Subject to seat availability' },
  { grade: 'Grade 6 to Grade 9', age: 'Written diagnostic assessment & interview', cutoff: 'Subject to seat availability' },
  { grade: 'Grade 11 (All Streams)', age: 'Class 10 Board exam marksheet + Aptitude counseling', cutoff: 'Merit-based admission' },
];

const defaultDocuments = [
  'Child’s Official Birth Certificate (Municipal copy)',
  'Recent passport-sized color photographs of student (4 copies)',
  'Photographs of Parents / Guardians (2 copies each)',
  'Academic marksheets / progress reports from previous two academic sessions',
  'Original Transfer Certificate (TC) counter-signed by competent educational authority',
  'Proof of residential address (Electricity bill / Passport / Lease agreement)',
  'Immunization record & blood group medical certificate',
];

export default function AdmissionsPage() {
  const {
    portalData,
    onSubmitInquiry,
    inquirySubmitting,
    inquirySuccess,
  } = usePortal();

  const activeAgeCriteria =
    portalData?.ageCriteria && portalData.ageCriteria.length > 0
      ? portalData.ageCriteria
      : defaultAgeCriteria;

  const activeDocuments =
    portalData?.documents && portalData.documents.length > 0
      ? portalData.documents
      : defaultDocuments;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ── HEADER HERO BANNER (Light & Elegant) ───────────────────────── */}
      <section className="relative bg-gradient-to-b from-[#edf7f2] via-[#f8fbf9] to-white text-slate-900 py-16 sm:py-20 border-b border-[#dceee3] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#dceee3]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-white border border-[#dceee3] text-[#0b3d2e] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
            <Sparkles size={14} className="text-amber-500" />
            <span>Academic Year 2026-2027 Admissions Open</span>
          </div>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0b3d2e] tracking-tight">
            Begin Your Child's Journey to Lifelong Excellence
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Join a vibrant community of passionate educators and ambitious learners. Review guidelines, check eligibility, and submit your application below.
          </p>
        </div>
      </section>

      {/* ── 3-STEP ADMISSIONS ROADMAP ─────────────────────────────────── */}
      <AdmissionsRoadmap portalData={portalData} />

      {/* ── ELIGIBILITY & AGE CRITERIA ───────────────────────────────── */}
      <section className="py-16 sm:py-24 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Age Eligibility Table (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#dceee3] p-8 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#edf7f2] text-[#0b3d2e] flex items-center justify-center font-bold">
                <Calendar size={20} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-2xl text-[#0b3d2e]">Age Eligibility Criteria</h3>
                <p className="text-xs text-slate-500 font-medium">Applicable for Academic Year 2026-2027 admissions</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#dceee3] text-slate-400 font-black uppercase text-[10px] tracking-wider">
                    <th className="pb-3">Grade Level</th>
                    <th className="pb-3">Age Requirement</th>
                    <th className="pb-3">Cut-off Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {activeAgeCriteria.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#f8fbf9] transition-colors">
                      <td className="py-3.5 font-bold text-slate-900">{row.grade}</td>
                      <td className="py-3.5 text-emerald-700 font-bold">{row.age}</td>
                      <td className="py-3.5 text-slate-500 font-medium">{row.cutoff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900 font-medium">
              <AlertCircle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <span>
                Relaxations on age criteria are strictly subject to educational board norms and academic director approval.
              </span>
            </div>
          </div>

          {/* Right: Required Documents Checklist (5 cols, Vibrant & Light Friendly) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0b3d2e] via-[#0e523f] to-[#146049] rounded-3xl p-8 sm:p-10 text-white shadow-xl shadow-[#0b3d2e]/15 border border-emerald-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center font-bold backdrop-blur-md border border-white/20">
                  <FileCheck2 size={20} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-white">Document Checklist</h3>
                  <p className="text-xs text-emerald-200">Required during campus verification</p>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-slate-200 font-medium">
                {activeDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-indigo-200 font-medium">Need assistance with paperwork?</span>
              <a
                href="tel:+15552345678"
                className="text-amber-300 font-bold hover:underline flex items-center gap-1"
              >
                Call Counselor &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIRECT ADMISSION INQUIRY FORM SECTION ─────────────────────── */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm
            onSubmitInquiry={onSubmitInquiry}
            inquirySubmitting={inquirySubmitting}
            inquirySuccess={inquirySuccess}
          />
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ────────────────────────────────── */}
      <FaqSection portalData={portalData} />
    </div>
  );
}
