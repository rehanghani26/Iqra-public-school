'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePortal } from '@/context/PortalContext';
import {
  Users,
  BookOpen,
  Trophy,
  Compass,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  HeartPulse,
  Bus,
  Coffee,
} from 'lucide-react';
import { directorSir, schoolTemplate, award2, hostel } from '@/asset';

const coreFacilities = [
  {
    title: 'Experienced Teachers',
    badge: 'Experienced',
    tagline: 'Passionate Educators & Certified Mentors',
    description:
      'Our distinguished teaching faculty brings together certified master educators, subject specialists, and compassionate mentors. With continuous professional development, modern pedagogical training, and a deep dedication to student well-being, our teachers inspire curiosity and cultivate lifelong learners.',
    highlights: [
      '100% Certified post-graduate educators',
      'Continuous teacher training workshops & CBSE certifications',
      'Personalized mentorship & remedial attention for every student',
      'Low teacher-to-student classroom ratio',
    ],
    icon: Users,
    color: 'from-blue-600 to-indigo-600',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    image: directorSir,
  },
  {
    title: 'Good Classrooms',
    badge: 'Modern',
    tagline: 'Climate-Controlled & Smart Interactive Learning Spaces',
    description:
      'Our classrooms are thoughtfully engineered to optimize concentration, creativity, and collaborative learning. Featuring high-definition interactive smart touch displays, ergonomic age-appropriate furniture, abundant natural sunlight, and clean climate-controlled ventilation.',
    highlights: [
      'Modern interactive smart display setups with touch stylus',
      'Ergonomically designed spine-friendly student desks',
      'Acoustically treated, high natural daylight environments',
      'Integrated digital audio systems for multimedia learning',
    ],
    icon: BookOpen,
    color: 'from-emerald-600 to-teal-600',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    image: schoolTemplate,
  },
  {
    title: 'Sports & Activities',
    badge: 'Sports & Events',
    tagline: 'Campus Playgrounds, Athletics & Extracurricular Events',
    description:
      'Physical vitality, team spirit, and creative expression are integral to our school culture. Our campus grounds support competitive cricket, football, athletic running, badminton, alongside annual sports functions and youth felicitations.',
    highlights: [
      'Dedicated cricket & football activity grounds',
      'Annual sports tournament & athletic championships',
      'Character-building & team sportsmanship coaching',
      'Indoor chess, table tennis, and physical fitness programs',
    ],
    icon: Trophy,
    color: 'from-amber-500 to-orange-600',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    image: award2,
  },
];

const extended = [
  {
    title: 'AI & Robotics Laboratories',
    desc: 'Equipped with high-performance workstations, 3D printers, Python AI software, and Arduino & Raspberry Pi kits.',
    icon: Compass,
    color: 'text-purple-600 bg-purple-50 border-purple-200',
  },
  {
    title: 'Central Media Library',
    desc: 'Over 15,000 physical volumes, reading pods, and subscriptions to leading global research databases.',
    icon: BookOpen,
    color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
  },
  {
    title: 'GPS-Tracked Safe Transport',
    desc: 'Air-conditioned bus fleet equipped with real-time GPS tracking, speed regulators, and female attendants.',
    icon: Bus,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    title: 'Full-Time Medical Infirmary',
    desc: 'Certified registered nurses on campus throughout school hours with emergency medical tie-ups.',
    icon: HeartPulse,
    color: 'text-rose-600 bg-rose-50 border-rose-200',
  },
  {
    title: 'Hygienic Dining Cafeteria',
    desc: 'Nutritious, chef-curated hot meals and healthy snacks prepared daily in a sanitized kitchen.',
    icon: Coffee,
    color: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  {
    title: '24/7 Security & HD CCTV',
    desc: 'Complete perimeter security, visitor verification badges, and continuous video monitoring.',
    icon: ShieldCheck,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
  },
];

export default function FacilitiesPage() {
  const { portalData, onNavigate } = usePortal();

  const activeCoreFacilities =
    portalData?.facilities && portalData.facilities.length > 0
      ? portalData.facilities.map((fac, idx) => ({
          ...(coreFacilities[idx] || coreFacilities[0]),
          ...fac,
          highlights: fac.highlights || coreFacilities[idx]?.highlights || [
            'Certified & Experienced Faculty',
            'Interactive curriculum & modern learning kits',
            'Personalized student mentorship',
          ],
          image:
            fac.image ||
            coreFacilities[idx]?.image ||
            schoolTemplate,
        }))
      : coreFacilities;

  const activeExtended =
    portalData?.extendedFacilities && portalData.extendedFacilities.length > 0
      ? portalData.extendedFacilities
      : extended;

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
            <Sparkles size={14} className="text-amber-500" />
            <span>World-Class Infrastructure</span>
          </div>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0b3d2e] tracking-tight">
            Our Modern Campus Facilities
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Engineered to empower minds, build athletic resilience, and support safe, collaborative childhood exploration.
          </p>
        </div>
      </section>

      {/* ── 3 CORE REQUESTED FACILITIES IN DETAIL ─────────────────────── */}
      <section className="py-16 sm:py-24 w-full px-4 sm:px-8 lg:px-12 xl:px-16 space-y-16">
        {activeCoreFacilities.map((fac, idx) => {
          const Icon =
            fac.icon === 'teachers'
              ? Users
              : fac.icon === 'classrooms'
              ? BookOpen
              : fac.icon === 'activities'
              ? Trophy
              : fac.icon || Users;
          const isReversed = idx % 2 === 1;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl border border-[#dceee3] overflow-hidden shadow-xl shadow-[#0b3d2e]/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div
                className={`lg:col-span-6 p-8 sm:p-12 space-y-5 ${
                  isReversed ? 'lg:order-2' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${fac.color || 'from-[#0b3d2e] to-emerald-600'} text-white flex items-center justify-center shadow-md`}>
                    <Icon size={24} />
                  </div>
                  <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border ${fac.badgeColor || 'bg-[#edf7f2] text-[#0b3d2e] border-[#dceee3]'}`}>
                    {fac.badge}
                  </span>
                </div>

                <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0b3d2e] tracking-tight">
                  {fac.title}
                </h2>
                <h4 className="text-sm font-bold text-emerald-700 uppercase tracking-wide">
                  {fac.tagline}
                </h4>

                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  {fac.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {(fac.highlights || []).map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs font-bold text-slate-800">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`lg:col-span-6 h-full min-h-[340px] sm:min-h-[420px] relative overflow-hidden ${
                  isReversed ? 'lg:order-1' : ''
                }`}
              >
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* ── EXTENDED CAMPUS HIGHLIGHTS ───────────────────────────────── */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="inline-block bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold text-xs px-3.5 py-1.5 rounded-xl uppercase tracking-wider">
              Comprehensive Amenities
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">
              Campus Infrastructure at a Glance
            </h2>
            <p className="text-sm text-slate-600 font-medium">
              Every detail is engineered to provide an extraordinary learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeExtended.map((item, idx) => {
              const Icon =
                item.icon === 'compass'
                  ? Compass
                  : item.icon === 'book'
                  ? BookOpen
                  : item.icon === 'bus'
                  ? Bus
                  : item.icon || Compass;
              const color =
                item.color ||
                (idx === 0
                  ? 'text-purple-600 bg-purple-50 border-purple-200'
                  : idx === 1
                  ? 'text-cyan-600 bg-cyan-50 border-cyan-200'
                  : 'text-emerald-600 bg-emerald-50 border-emerald-200');
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:bg-white hover:border-indigo-300 hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${color}`}>
                    <Icon size={22} />
                  </div>
                  <h4 className="font-heading font-black text-base text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VISIT CAMPUS CTA (Vibrant & Light Friendly) ──────────────── */}
      <section className="py-20 w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
        <div className="bg-gradient-to-r from-[#0b3d2e] via-[#0e523f] to-[#146049] rounded-3xl p-10 sm:p-14 text-white shadow-xl shadow-[#0b3d2e]/20 border border-emerald-500/30">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4 text-white">
            Experience Our Campus in Person
          </h2>
          <p className="text-sm sm:text-base text-emerald-100 max-w-xl mx-auto mb-8 font-medium">
            Book a personalized guided campus walk to see our smart classrooms, sports arenas, and science labs.
          </p>
          <button
            onClick={() => onNavigate && onNavigate('contact')}
            className="bg-white text-[#0b3d2e] hover:bg-[#edf7f2] font-heading font-black text-xs px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 cursor-pointer"
          >
            Book a Guided Campus Tour &rarr;
          </button>
        </div>
      </section>
    </motion.div>
  );
}
