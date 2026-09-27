'use client';

import React from 'react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="w-full py-8 md:py-10 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="text-sm text-white font-medium">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
        <div className="text-sm text-gray-500">
          Based in <span className="text-white/80">{siteConfig.location}</span>.
        </div>
      </div>
    </footer>
  );
}
