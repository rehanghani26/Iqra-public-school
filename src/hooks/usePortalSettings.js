/**
 * @file usePortalSettings.js
 * @description Hook to fetch and refresh live public portal settings
 */

import { useState, useEffect, useCallback } from 'react';
import { portalService } from '../services/portalService';
import { DEFAULT_PORTAL_DATA } from '../context/PortalContext';

export const usePortalSettings = () => {
  const [data, setData] = useState(DEFAULT_PORTAL_DATA);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSettings = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await portalService.getPublicSettings();
      const payload = res?.data || res?.portal;
      if (res?.success && payload) {
        setData((prev) => ({
          ...prev,
          ...payload,
          contact: {
            ...prev.contact,
            ...(payload.contact || {}),
          },
        }));
      }
    } catch (err) {
      setError(err.message);
      console.warn('usePortalSettings fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  return {
    portalData: data,
    loading,
    error,
    refresh: fetchSettings,
  };
};

export default usePortalSettings;
