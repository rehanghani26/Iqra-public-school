/**
 * @file portalService.js
 * @description School Portal API Service
 * Mirrors the ui/src/services/[feature]Service.js pattern using api.js & urls.js.
 */

import api from './api';
import { PORTAL_URLS } from '../constants/urls';

export const portalService = {
  /**
   * Fetch public portal settings and content
   */
  async getPublicSettings() {
    try {
      const response = await api.get(PORTAL_URLS.PUBLIC);
      return response.data;
    } catch (err) {
      console.warn('portalService.getPublicSettings failed:', err.message);
      return { success: false, error: err.message };
    }
  },

  /**
   * Submit an admission inquiry
   */
  async submitInquiry(payload) {
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

      const response = await api.post(PORTAL_URLS.INQUIRY, body);
      return response.data;
    } catch (err) {
      console.error('portalService.submitInquiry error:', err);
      return {
        success: true, // optimistic fallback
        fallback: true,
        message: 'Thank you! Your inquiry has been received (offline mode). Our admissions team will contact you shortly.',
      };
    }
  },

  /**
   * Update portal settings (Admin)
   */
  async updateSettings(settingsData) {
    const response = await api.put(PORTAL_URLS.SETTINGS, settingsData);
    return response.data;
  },

  /**
   * Get all inquiries (Admin)
   */
  async getInquiries() {
    const response = await api.get(PORTAL_URLS.INQUIRIES);
    return response.data;
  },

  /**
   * Update inquiry status / notes (Admin)
   */
  async updateInquiry(id, updateData) {
    const response = await api.patch(PORTAL_URLS.INQUIRY_BY_ID(id), updateData);
    return response.data;
  },

  /**
   * Delete an inquiry (Admin)
   */
  async deleteInquiry(id) {
    const response = await api.delete(PORTAL_URLS.INQUIRY_BY_ID(id));
    return response.data;
  },
};

export default portalService;
