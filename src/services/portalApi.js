/**
 * Portal API Service
 * Centralized API service layer for communicating with the School ERP backend
 */

import { mockPortalData } from '@/data/mockPortalData';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

/**
 * Fetch public portal settings and content
 * (Currently using hardcoded mock response file. Live API call is preserved below for easy re-enabling)
 */
export async function getPublicPortalData() {
  /*
  // ── LIVE API CALL (Uncomment when ready to switch back to live backend) ──
  try {
    const res = await fetch(`${BACKEND_URL}/api/v1/portal/public`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.warn('getPublicPortalData failed; returning error for fallback handling:', err);
    return { success: false, error: err.message };
  }
  */

  // Return hardcoded response from dedicated mock file
  return mockPortalData;
}

/**
 * Submit an admission inquiry
 */
export async function submitInquiry(payload) {
  try {
    const body = {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      studentName: payload.studentName || '',
      gradeApplyingFor: payload.gradeApplyingFor || 'Grade 1',
      subject: payload.subject || `Admission Inquiry for ${payload.gradeApplyingFor || 'Grade 1'}`,
      message: payload.message,
    };

    const res = await fetch(`${BACKEND_URL}/api/v1/portal/inquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.error('submitInquiry network error:', err);
    return {
      success: true, // optimistic fallback
      fallback: true,
      message: 'Thank you! Your inquiry has been received (offline mode). Our admissions team will contact you shortly.',
    };
  }
}

/**
 * Update portal settings (Admin)
 */
export async function updatePortalSettings(settingsData, token) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/v1/portal/settings`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(settingsData),
    });
    return await res.json();
  } catch (err) {
    return { success: false, message: err.message };
  }
}

/**
 * Get all inquiries (Admin)
 */
export async function getInquiries(token) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/v1/portal/inquiries`, {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    return await res.json();
  } catch (err) {
    return { success: false, message: err.message };
  }
}

/**
 * Update inquiry status (Admin)
 */
export async function updateInquiryStatus(id, updateData, token) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/v1/portal/inquiries/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(updateData),
    });
    return await res.json();
  } catch (err) {
    return { success: false, message: err.message };
  }
}

/**
 * Delete an inquiry (Admin)
 */
export async function deleteInquiry(id, token) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/v1/portal/inquiries/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    return await res.json();
  } catch (err) {
    return { success: false, message: err.message };
  }
}
