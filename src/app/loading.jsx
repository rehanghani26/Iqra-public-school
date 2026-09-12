'use client';

import React from 'react';
import LogoLoader from '@/components/LogoLoader';

export default function Loading() {
  return <LogoLoader fullScreen={true} variant="dark" message="Loading Campus Portal..." />;
}
