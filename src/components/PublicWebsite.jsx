'use client';

import React from 'react';
import HomePage from '@/app/page';

/**
 * PublicWebsite - Main School Portal wrapper
 * Modularized into components/ and app/ pages
 */
const PublicWebsite = ({
  portalData,
  onSubmitInquiry,
  inquirySubmitting,
  inquirySuccess,
  onNavigate,
}) => {
  return (
    <HomePage
      portalData={portalData}
      onSubmitInquiry={onSubmitInquiry}
      inquirySubmitting={inquirySubmitting}
      inquirySuccess={inquirySuccess}
      onNavigate={onNavigate}
    />
  );
};

export default PublicWebsite;
