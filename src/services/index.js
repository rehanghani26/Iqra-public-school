/**
 * @file index.js
 * @description Central barrel export for all API services.
 * Mirrors ui/src/services/index.js pattern.
 */

export { default as api } from './api';
export * from './portalService';
export { default as portalService } from './portalService';
export * from './portalApi';
