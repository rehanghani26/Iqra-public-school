'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, BookOpen, ShieldCheck, Users, Trophy, Bus, CreditCard } from 'lucide-react';

const faqs = [
  {
    q: 'What curriculum and accreditation does the school follow?',
    a: 'Our school follows a globally benchmarked dual curriculum combining high academic standards with STEM, humanities, and practical project-based learning. We are fully accredited with continuous curriculum reviews to prepare students for top international universities and competitive examinations.',
    tag: 'Curriculum',
    icon: BookOpen,
    color: 'border-blue-200 bg-blue-50 text-blue-700',
  },
  {
    q: 'How does the school ensure student safety and campus security?',
    a: 'Student safety is our utmost priority. Our campus features 24/7 HD CCTV monitoring, biometric access checkpoints, verified background checks for all faculty & staff, on-campus medical infirmaries with full-time registered nurses, and GPS-tracked school buses with emergency panic buttons.',
    tag: 'Safety & Security',
    icon: ShieldCheck,
    color: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  },
  {
    q: 'What is the teacher-to-student ratio in classrooms?',
    a: 'We maintain an optimal ratio of 1:18 across all sections. This ensures our experienced teachers can provide individualized academic mentoring, monitor emotional well-being, and provide personalized remediation or advanced enrichment.',
    tag: 'Faculty & Mentorship',
    icon: Users,
    color: 'border-purple-200 bg-purple-50 text-purple-700',
  },
  {
    q: 'What sports and extracurricular programs are available?',
    a: 'We offer an extensive athletic & cultural program including football, swimming, lawn tennis, basketball, robotics club, debating society, instrumental music, drama, fine arts, and annual international Model UN delegations.',
    tag: 'Sports & Arts',
    icon: Trophy,
    color: 'border-amber-200 bg-amber-50 text-amber-700',
  },
  {
    q: 'Does the school provide dedicated bus transportation?',
    a: 'Yes, we operate a modern, climate-controlled school bus fleet covering all prime residential zones of the city. Every bus has a trained female attendant, speed governors, first-aid equipment, and real-time parent app tracking.',
    tag: 'Transport',
    icon: Bus,
    color: 'border-cyan-200 bg-cyan-50 text-cyan-700',
  },
  {
    q: 'What is the fee payment schedule and scholarship policy?',
    a: 'School fees are structured quarterly through our secure ERP parent portal. We offer merit scholarships for outstanding academic distinction and athletic accomplishments upon recommendation by the academic board.',
    tag: 'Fees & Scholarships',
    icon: CreditCard,
    color: 'border-rose-200 bg-rose-50 text-rose-700',
  },
];

const FaqSection = ({ portalData }) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const faqList = portalData?.faqs && portalData.faqs.length > 0 ? portalData.faqs : faqs;

  return (
    <section className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#edf7f2] border border-[#d2e8dc] text-[#0b3d2e] font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-xs">
            <HelpCircle size={14} className="text-[#0b3d2e]" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#0b3d2e] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Everything you need to know about our school culture, admissions, safety standards, and student life.
          </p>
        </div>

        {/* Accordion Grid across full width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          {faqList.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            const Icon = faq.icon || HelpCircle;
            const badgeColor = 'border-emerald-200 bg-emerald-50 text-emerald-800';
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-emerald-500 bg-white shadow-lg shadow-[#0b3d2e]/5 ring-2 ring-emerald-500/10'
                    : 'border-[#dceee3] bg-white hover:border-emerald-400 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 group transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${
                        isOpen
                          ? 'bg-[#0b3d2e] text-white shadow-sm'
                          : 'bg-[#edf7f2] text-[#0b3d2e]'
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <span className={`inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border mb-1.5 ${badgeColor}`}>
                        {faq.tag}
                      </span>
                      <h3 className="font-serif font-black text-base sm:text-lg text-slate-900 leading-snug group-hover:text-[#0b3d2e] transition-colors">
                        {faq.q}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-[#edf7f2] text-[#0b3d2e] rotate-180' : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-100 pl-16">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
