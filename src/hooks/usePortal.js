/**
 * @file usePortal.js
 * @description Hook to access live portal context state and navigation
 */

import { useContext } from 'react';
import { PortalContext } from '../context/PortalContext';

export const usePortal = () => {
  const context = useContext(PortalContext);
  if (!context) {
    throw new Error('usePortal must be used within a PortalProvider');
  }
  return context;
};

export default usePortal;
