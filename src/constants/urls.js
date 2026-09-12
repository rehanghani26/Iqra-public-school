/**
 * @file urls.js
 * @description Centralized API endpoint URL constants.
 * Mirrors the enterprise-school-erp ui/src/constants/urls.js pattern.
 */

// ─── Portal Endpoints ────────────────────────────────────────────────────────
export const PORTAL_URLS = {
  PUBLIC: '/portal/public',
  SETTINGS: '/portal/settings',
  INQUIRY: '/portal/inquiry',
  INQUIRIES: '/portal/inquiries',
  INQUIRY_BY_ID: (id) => `/portal/inquiries/${id}`,
};

// ─── Auth Endpoints ──────────────────────────────────────────────────────────
export const AUTH_URLS = {
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  REFRESH: '/auth/refresh',
  ME: '/auth/me',
};

// ─── Unified API URLs Object ────────────────────────────────────────────────
export const API_URLS = {
  PORTAL: PORTAL_URLS,
  AUTH: AUTH_URLS,
};

export default API_URLS;
