'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Check } from 'lucide-react';

const DEFAULT_WINGS = [
  {
    title: 'Pre-Primary Wing',
    grades: 'Nursery to Kindergarten (Ages 3-5)',
    description:
      'Play-based experiential learning fostering early curiosity, social harmony, sensory exploration, and language phonetics.',
    tag: 'Play & Explore',
    color: 'border-pink-200 bg-pink-50/60 text-pink-700',
    badgeBg: 'bg-pink-100 text-pink-700',
    features: ['Sensory Play Labs', 'Story & Phonics', 'Motor Skills Development'],
  },
  {
    title: 'Primary School',
    grades: 'Grades 1 to 5',
    description:
      'Robust foundations in STEM, languages, analytical reasoning, and collaborative classroom inquiry projects.',
    tag: 'Core Foundations',
    color: 'border-indigo-200 bg-indigo-50/60 text-indigo-700',
    badgeBg: 'bg-indigo-100 text-indigo-700',
    features: ['Foundational STEM', 'Bilingual Literacy', 'Interactive Digital Math'],
  },
  {
    title: 'Middle School',
    grades: 'Grades 6 to 8',
    description:
      'Inquiry-driven education with science labs, computer coding, leadership programs, and youth debate forums.',
    tag: 'Inquiry & Logic',
    color: 'border-emerald-200 bg-emerald-50/60 text-emerald-700',
    badgeBg: 'bg-emerald-100 text-emerald-700',
    features: ['Applied Science Labs', 'Python & Robotics', 'Public Speaking & Debate'],
  },
  {
    title: 'Senior Secondary',
    grades: 'Grades 9 to 12',
    description:
      'Rigorous preparatory curricula (Science, Commerce, Humanities) with personalized college and career counseling.',
    tag: 'Career & College',
    color: 'border-purple-200 bg-purple-50/60 text-purple-700',
    badgeBg: 'bg-purple-100 text-purple-700',
    features: ['Advanced Placement / SAT', 'Career Internships', 'University Placement'],
  },
];

const AcademicWings = ({ portalData, onNavigate }) => {
  const academicWings = portalData?.academicWings && portalData.academicWings.length > 0 ? portalData.academicWings : DEFAULT_WINGS;

  return (
    <section id="academics" className="py-20 bg-[#f8fbf9] border-y border-[#dceee3] overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-block bg-[#edf7f2] border border-[#d2e8dc] text-[#0b3d2e] font-bold text-xs px-3.5 py-1.5 rounded-xl uppercase tracking-wider shadow-xs">
            Comprehensive Learning Stages
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#0b3d2e]">
            Academic Wings &amp; Curricula
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Structured developmental pathways crafted to foster intellect, emotional maturity, and real-world mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicWings.map((wing, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-[#dceee3] rounded-3xl p-6 shadow-soft hover:shadow-forest-glow hover:border-emerald-500 transition-all flex flex-col justify-between group"
            >
              <div>
                <span
                  className={`inline-block text-[10px] font-black uppercase px-2.5 py-1 rounded-lg border mb-3 ${
                    wing.color ||
                    (i % 4 === 0
                      ? 'border-emerald-200 bg-emerald-50/70 text-emerald-800'
                      : i % 4 === 1
                      ? 'border-teal-200 bg-teal-50/70 text-teal-800'
                      : i % 4 === 2
                      ? 'border-amber-200 bg-amber-50/70 text-amber-800'
                      : 'border-emerald-200 bg-[#edf7f2] text-[#0b3d2e]')
                  }`}
                >
                  {wing.tag}
                </span>
                <h3 className="font-serif font-black text-xl text-slate-900 mb-1 group-hover:text-[#0b3d2e] transition-colors">
                  {wing.title}
                </h3>
                <p className="text-xs font-bold text-[#0b3d2e] mb-3">{wing.grades}</p>
                <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                  {wing.description}
                </p>

                {/* Key Features Bullet List */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  {(wing.features || wing.subjects || []).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] font-bold text-slate-700">
                      <Check size={12} className="text-emerald-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                onClick={() => onNavigate && onNavigate('academics')}
                className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0b3d2e] group-hover:text-emerald-700 transition-colors cursor-pointer"
              >
                <span>Curriculum Details</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicWings;
