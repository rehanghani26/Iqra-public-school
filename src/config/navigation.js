/**
 * @file navigation.js
 * @description Centralized navigation configuration for Portal
 * Mirrors ui/src/config/navigation.js pattern.
 */

export const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About School', href: '/about' },
  { id: 'academics', label: 'Academics', href: '/academics' },
  { id: 'facilities', label: 'Facilities', href: '/facilities' },
  { id: 'admissions', label: 'Admissions', href: '/admissions' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

export const ERP_LOGIN_URL = 'http://localhost:3000/login';

export default NAV_ITEMS;
