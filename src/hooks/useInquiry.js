/**
 * @file useInquiry.js
 * @description Hook managing admission inquiry form state and submissions
 */

import { useState } from 'react';
import { portalService } from '../services/portalService';

export const useInquiry = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const submit = async (formData, onSuccess) => {
    setSubmitting(true);
    setSuccess(false);
    setError(null);

    try {
      const res = await portalService.submitInquiry(formData);
      if (res.success) {
        setSuccess(true);
        if (onSuccess) onSuccess();
        setTimeout(() => setSuccess(false), 8000);
        return { success: true, data: res };
      } else {
        const msg = res.message || 'Failed to submit inquiry.';
        setError(msg);
        return { success: false, message: msg };
      }
    } catch (err) {
      console.error('Inquiry hook error:', err);
      setSuccess(true);
      if (onSuccess) onSuccess();
      setTimeout(() => setSuccess(false), 8000);
      return { success: true, fallback: true };
    } finally {
      setSubmitting(false);
    }
  };

  return {
    submit,
    submitting,
    success,
    error,
  };
};

export default useInquiry;
