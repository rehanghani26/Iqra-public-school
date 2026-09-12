'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePortal } from '@/context/PortalContext';
import Hero from '@/components/Hero';
import NoticeTicker from '@/components/NoticeTicker';
import AboutSection from '@/components/AboutSection';
import AcademicWings from '@/components/AcademicWings';
import FacilitiesSection from '@/components/FacilitiesSection';
import AdmissionsRoadmap from '@/components/AdmissionsRoadmap';
import GallerySection from '@/components/GallerySection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  const {
    portalData,
    onNavigate,
    onSubmitInquiry,
    inquirySubmitting,
    inquirySuccess,
  } = usePortal();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-0"
    >
      {/* 1. Hero Section */}
      <Hero portalData={portalData} onNavigate={onNavigate} />

      {/* 2. Notice Ticker (Removed as requested) */}
      {/* <NoticeTicker portalData={portalData} onNavigate={onNavigate} /> */}

      {/* 3. About School Section */}
      <AboutSection portalData={portalData} onNavigate={onNavigate} />

      {/* 4. Campus Photo Gallery (Moved before Academic Wings) */}
      <GallerySection portalData={portalData} />

      {/* 5. Academic Wings & Curricula */}
      <AcademicWings portalData={portalData} onNavigate={onNavigate} />

      {/* 6. Campus Facilities */}
      <FacilitiesSection portalData={portalData} onNavigate={onNavigate} />

      {/* 7. 3-Step Admissions Roadmap (Removed from home page as requested) */}
      {/* <AdmissionsRoadmap
        portalData={portalData}
        onApplyClick={() => onNavigate && onNavigate('admissions')}
      /> */}

      {/* 8. Frequently Asked Questions */}
      <FaqSection portalData={portalData} />

      {/* 9. Campus Contact & Inquiry Form */}
      <ContactSection
        portalData={portalData}
        onSubmitInquiry={onSubmitInquiry}
        inquirySubmitting={inquirySubmitting}
        inquirySuccess={inquirySuccess}
      />
    </motion.div>
  );
}
