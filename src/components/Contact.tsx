'use client';

import React from 'react';
import { siteConfig } from '@/config/site';

const socialPlatforms = [
  { name: 'instagram', label: 'Instagram' },
  { name: 'tiktok', label: 'TikTok' },
  { name: 'whatsapp', label: 'WhatsApp' },
];

export default function Contact() {
  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-12 md:mb-16 leading-tight font-serif text-white">
          READY TO TAKE YOUR<br className="hidden md:block" /> PROJECT HIGHER?
        </h2>
        
        <div>
          <a
            href="#"
            className="inline-block px-8 md:px-12 py-4 md:py-5 rounded-full text-sm md:text-base font-semibold tracking-wide uppercase cursor-pointer bg-white/10 hover:bg-white/20 border border-white/20 transition-all mb-12 md:mb-16 text-white"
          >
            GET IN TOUCH →
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {socialPlatforms.map((platform) => {
            const url = siteConfig.social[platform.name as keyof typeof siteConfig.social];
            if (!url || !url.trim()) return null;

            return (
              <a
                key={platform.name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-3 rounded-xl cursor-pointer bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
              >
                <span className="text-xs md:text-sm uppercase font-medium text-white/80 group-hover:text-white">
                  {platform.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
