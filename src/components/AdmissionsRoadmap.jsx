'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Compass,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  PhoneCall,
  CalendarCheck,
} from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Submit Online Inquiry',
    subtitle: 'Quick & Transparent',
    description:
      'Fill out the simple admission inquiry form online or visit our admissions office. Our academic counselors will contact you within 24 hours to guide you through seat availability.',
    icon: FileText,
    badge: 'Step 1: Get Started',
    color: 'from-blue-600 to-indigo-600',
    lightBg: 'bg-blue-50/60 border-blue-200/80',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    numberColor: 'text-blue-600',
  },
  {
    step: '02',
    title: 'Campus Tour & Assessment',
    subtitle: 'Discover & Interact',
    description:
      'Experience our world-class smart classrooms, athletic fields, and science labs. Students participate in an encouraging, age-appropriate friendly conversation with our educators.',
    icon: Compass,
    badge: 'Step 2: Experience',
    color: 'from-purple-600 to-indigo-600',
    lightBg: 'bg-purple-50/60 border-purple-200/80',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    numberColor: 'text-purple-600',
  },
  {
    step: '03',
    title: 'Enrollment & Welcome',
    subtitle: 'Join the Family',
    description:
      'Complete necessary document verification, receive your ERP parent portal credentials, uniform kit, syllabus schedule, and attend our exciting Student Orientation Day!',
    icon: CheckCircle2,
    badge: 'Step 3: Welcome',
    color: 'from-emerald-600 to-teal-600',
    lightBg: 'bg-emerald-50/60 border-emerald-200/80',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    numberColor: 'text-emerald-600',
  },
];

const AdmissionsRoadmap = ({ portalData, onApplyClick }) => {
  const stepList = portalData?.admissionSteps && portalData.admissionSteps.length > 0 ? portalData.admissionSteps : steps;
  return (
    <section id="admissions" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-50 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#edf7f2] border border-[#d2e8dc] text-[#0b3d2e] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles size={14} className="text-amber-500" />
              <span>Admissions 2026-2027 Open</span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-[#0b3d2e] tracking-tight">
              Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b3d2e] via-emerald-700 to-[#166c52]">3-Step Admissions</span> Process
            </h2>
            <p className="text-base text-slate-600 font-medium mt-3 leading-relaxed">
              We make school enrollment transparent, stress-free, and welcoming for both students and parents.
            </p>
          </motion.div>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 border-t-2 border-dashed border-emerald-200 -translate-y-12 z-0" />

          {stepList.map((item, idx) => {
            const Icon = item.icon || FileText;
            const gradientColor = 'from-[#0b3d2e] to-[#166c52]';
            const badgeColor = 'bg-[#edf7f2] text-[#0b3d2e] border-[#d2e8dc]';
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className="relative z-10 bg-white rounded-3xl border border-[#dceee3] p-8 shadow-soft hover:shadow-forest-glow hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top Glowing Gradient Line */}
                <div className={`h-2.5 w-full absolute top-0 left-0 rounded-t-3xl bg-gradient-to-r ${gradientColor}`} />

                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${gradientColor} text-white font-serif font-black text-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform`}
                    >
                      {item.step}
                    </div>
                    <span
                      className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif font-black text-xl text-slate-900 mb-1 group-hover:text-[#0b3d2e] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0b3d2e] group-hover:text-emerald-700 transition-colors">
                  <span className="flex items-center gap-1.5">
                    <Icon size={14} className="text-[#0b3d2e]" />
                    Verified Checklist
                  </span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Banner (Forest Green & Mint Friendly) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 bg-gradient-to-r from-[#0b3d2e] via-[#0e523f] to-[#146049] rounded-3xl p-8 sm:p-10 text-white shadow-xl shadow-[#0b3d2e]/20 border border-emerald-500/30 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-2 text-center lg:text-left relative z-10">
            <span className="inline-block text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-sm">
              Limited Seats Available for 2026-2027
            </span>
            <h4 className="font-serif font-black text-2xl sm:text-3xl text-white">
              Ready to Give Your Child an Inspiring Education?
            </h4>
            <p className="text-sm text-emerald-100 font-medium max-w-xl">
              Schedule a personalized school tour or submit your admission query right away.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center flex-shrink-0 relative z-10">
            <button
              onClick={() => {
                if (onApplyClick) onApplyClick();
                else {
                  const el = document.getElementById('inquiry-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white hover:bg-[#f0f7f3] text-[#0b3d2e] font-black text-xs px-6 py-3.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <CalendarCheck size={16} className="text-[#0b3d2e]" /> Apply Online Now
            </button>
            <a
              href="tel:+15552345678"
              className="bg-white/15 hover:bg-white/25 text-white font-bold text-xs px-5 py-3.5 rounded-full border border-white/25 transition-all flex items-center gap-2"
            >
              <PhoneCall size={15} className="text-emerald-300" /> Talk to Admissions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionsRoadmap;
