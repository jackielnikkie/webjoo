'use client';

import React from 'react';
import { siteConfig } from '@/config/site';

export default function Location() {
  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-serif text-white">
          {siteConfig.location}
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Available for aerial projects across East Java.
        </p>
      </div>
    </section>
  );
}
