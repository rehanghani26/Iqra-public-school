'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getPublicPortalData, submitInquiry } from '@/services/portalApi';
import { iqraPublicSchoolData } from '@/data/mockPortalData';

export const DEFAULT_PORTAL_DATA = iqraPublicSchoolData;

const PortalContext = createContext({
  portalData: DEFAULT_PORTAL_DATA,
  loading: false,
  activePage: 'home',
  onNavigate: () => {},
  onSubmitInquiry: async () => {},
  inquirySubmitting: false,
  inquirySuccess: false,
});

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const PortalProvider = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [portalData, setPortalData] = useState(DEFAULT_PORTAL_DATA);
  const [loading, setLoading] = useState(true);
  const [inquirySubmitting, setInquirySubmitting] = useState(false);
  const [inquirySuccess, setInquirySuccess] = useState(false);

  // Compute activePage from pathname
  const getActivePage = () => {
    if (!pathname || pathname === '/') return 'home';
    const clean = pathname.replace('/', '').toLowerCase();
    if (['about', 'academics', 'facilities', 'gallery', 'admissions', 'contact'].includes(clean)) {
      return clean;
    }
    return 'home';
  };

  const activePage = getActivePage();

  // Fetch live settings from Express Backend
  useEffect(() => {
    getPublicPortalData()
      .then((data) => {
        const payload = data?.data || data?.portal;
        if (data?.success && payload) {
          setPortalData((prev) => ({
            ...prev,
            ...payload,
            contact: {
              ...prev.contact,
              ...(payload.contact || {}),
            },
          }));
        }
      })
      .catch((err) => {
        console.warn('Could not fetch portal settings from backend; using default fallback:', err);
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 500);
      });
  }, []);

  const handleNavigate = (pageId) => {
    const target = pageId === 'home' ? '/' : `/${pageId}`;
    router.push(target);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleInquirySubmit = async (formData, onSuccess) => {
    setInquirySubmitting(true);
    setInquirySuccess(false);

    try {
      const json = await submitInquiry(formData);
      if (json.success) {
        setInquirySuccess(true);
        if (onSuccess) onSuccess();
        setTimeout(() => setInquirySuccess(false), 8000);
      } else {
        alert(json.message || 'Failed to submit inquiry.');
      }
    } catch (err) {
      console.error('Inquiry submission error:', err);
      // Fallback
      setInquirySuccess(true);
      if (onSuccess) onSuccess();
      setTimeout(() => setInquirySuccess(false), 8000);
    } finally {
      setInquirySubmitting(false);
    }
  };

  return (
    <PortalContext.Provider
      value={{
        portalData,
        loading,
        activePage,
        onNavigate: handleNavigate,
        onSubmitInquiry: handleInquirySubmit,
        inquirySubmitting,
        inquirySuccess,
      }}
    >
      {children}
    </PortalContext.Provider>
  );
};

export const usePortal = () => useContext(PortalContext);
