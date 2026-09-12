'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePortal } from '@/context/PortalContext';
import {
  BookOpen,
  Cpu,
  CheckCircle2,
  Languages,
  Atom,
  Palette,
} from 'lucide-react';

const defaultWings = [
  {
    title: 'Pre-Primary Wing (Early Years)',
    grades: 'Playgroup to Kindergarten (Ages 3 – 5)',
    tag: 'Play & Discovery',
    badgeColor: 'bg-pink-100 text-pink-700 border-pink-200',
    borderColor: 'border-pink-200',
    color: 'from-pink-500 to-rose-500',
    description:
      'A safe, sensory-rich play-based curriculum focusing on social development, phonics, number sense, emotional expression, and motor coordination.',
    subjects: ['Phonics & Pre-Reading', 'Sensory Play & Art', 'Numbers & Shapes', 'Gross Motor Games', 'Music & Storytelling'],
  },
  {
    title: 'Primary School Wing',
    grades: 'Grades 1 to 5 (Ages 6 – 10)',
    tag: 'Foundations & Inquiry',
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
    borderColor: 'border-blue-200',
    color: 'from-blue-500 to-indigo-500',
    description:
      'Building solid conceptual understanding in mathematics, languages, environmental sciences, and logical problem-solving through interactive collaborative projects.',
    subjects: ['Core Mathematics', 'English Language Arts', 'General Science & Tech', 'Second Language', 'Social Studies & Civics'],
  },
  {
    title: 'Middle School Wing',
    grades: 'Grades 6 to 8 (Ages 11 – 13)',
    tag: 'Exploration & Analysis',
    badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    borderColor: 'border-emerald-200',
    color: 'from-emerald-500 to-teal-500',
    description:
      'Transitioning into independent analytical thinking, hands-on scientific laboratory experiments, computer programming, and structured debate.',
    subjects: ['Physics, Chem, Biology', 'Advanced Algebra & Geometry', 'Python & Digital Skills', 'History & World Cultures', 'Foreign Languages'],
  },
  {
    title: 'Senior Secondary Wing',
    grades: 'Grades 9 to 12 (Ages 14 – 18)',
    tag: 'Career & College Prep',
    badgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
    borderColor: 'border-purple-200',
    color: 'from-purple-500 to-indigo-600',
    description:
      'Comprehensive pre-university streams (Science, Commerce, Humanities) guided by expert board faculties with focused college placement mentoring.',
    subjects: ['Science: Physics, Chem, Math, Bio/CS', 'Commerce: Accounts, Business, Econ', 'Humanities: Psychology, Political Sci', 'Career Counseling & SAT/JEE Prep'],
  },
];

const features = [
  {
    icon: Atom,
    title: 'Hands-on Science Laboratories',
    description: 'State-of-the-art physics, chemistry, biology, and math discovery labs for experiential conceptual verification.',
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
  },
  {
    icon: Cpu,
    title: 'STEM & AI Literacy Curriculum',
    description: 'Coding from Grade 3, robotics kits, algorithm thinking, and AI fundamentals for the next generation of innovators.',
    color: 'text-purple-600 bg-purple-50 border-purple-200',
  },
  {
    icon: Languages,
    title: 'Global Languages & Public Debate',
    description: 'Bilingual proficiency programs, inter-school Model UN delegations, and speech & drama training.',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    icon: Palette,
    title: 'Visual & Performing Arts Integration',
    description: 'Pottery, classical & western music, digital graphic design, and annual theatrical school productions.',
    color: 'text-amber-600 bg-amber-50 border-amber-200',
  },
];

export default function AcademicsPage() {
  const { portalData, onNavigate } = usePortal();
  const wingList =
    portalData?.academicWings && portalData.academicWings.length > 0
      ? portalData.academicWings
      : defaultWings;

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
            <BookOpen size={14} className="text-amber-500" />
            <span>Curriculum Excellence &amp; Pathways</span>
          </div>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0b3d2e] tracking-tight">
            Academic Wings &amp; Curricula
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            A continuous, intellectually invigorating developmental pathway from Kindergarten through Senior Secondary graduation.
          </p>
        </div>
      </section>

      {/* ── 4 ACADEMIC WINGS DETAIL ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="space-y-12">
          {wingList.map((wing, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-[#dceee3] p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className={`h-2 w-full absolute top-0 left-0 bg-gradient-to-r ${wing.color || 'from-[#0b3d2e] to-emerald-600'}`} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${wing.badgeColor || 'bg-[#edf7f2] text-[#0b3d2e] border-[#dceee3]'}`}>
                      {wing.tag}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      {wing.grades}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#0b3d2e] group-hover:text-emerald-700 transition-colors">
                    {wing.title}
                  </h3>

                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {wing.description}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate && onNavigate('admissions')}
                      className="inline-flex items-center gap-2 text-xs font-black text-[#0b3d2e] hover:text-emerald-700 transition-colors"
                    >
                      Inquire for this Wing &rarr;
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200/90">
                  <h5 className="font-heading font-black text-xs uppercase tracking-wider text-slate-500 mb-3">
                    Curriculum Highlights &amp; Subjects
                  </h5>
                  <ul className="space-y-2.5">
                    {(wing.subjects || wing.features || []).map((sub, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                        <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CURRICULUM HIGHLIGHTS & KEY PILLARS ──────────────────────── */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="inline-block bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold text-xs px-3.5 py-1.5 rounded-xl uppercase tracking-wider">
              Enrichment Pillars
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">
              Beyond the Standard Textbook
            </h2>
            <p className="text-sm text-slate-600 font-medium">
              We integrate technological fluency, creative arts, and global communication into our everyday syllabus.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 flex flex-col justify-between hover:bg-white hover:border-indigo-300 hover:shadow-lg transition-all group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${feat.color}`}>
                      <Icon size={24} />
                    </div>
                    <h4 className="font-heading font-black text-base text-slate-900 mb-2">{feat.title}</h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION (Vibrant & Light Friendly) ─────────────────── */}
      <section className="py-20 w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
        <div className="bg-gradient-to-r from-[#0b3d2e] via-[#0e523f] to-[#146049] rounded-3xl p-10 sm:p-14 text-white shadow-xl shadow-[#0b3d2e]/20 border border-emerald-500/30">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4 text-white">
            Curious About Our Academic Curriculum?
          </h2>
          <p className="text-sm sm:text-base text-emerald-100 max-w-xl mx-auto mb-8 font-medium">
            Download our complete academic syllabus booklet or schedule a one-on-one session with our academic coordinators.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => onNavigate && onNavigate('admissions')}
              className="bg-white hover:bg-[#edf7f2] text-[#0b3d2e] font-heading font-black text-xs px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 cursor-pointer"
            >
              Apply for 2026-27
            </button>
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="bg-white/15 hover:bg-white/25 text-white font-bold text-xs px-7 py-4 rounded-xl border border-white/25 transition-all cursor-pointer"
            >
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
