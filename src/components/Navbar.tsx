'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string | number) => {
    e.preventDefault();
    const win = window as unknown as { lenisScrollTo?: (target: string | number) => void };
    if (win.lenisScrollTo) {
      win.lenisScrollTo(target);
    } else {
      // fallback bila Lenis belum load
      if (typeof target === 'number' && target === 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.querySelector(target as string);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'} px-4 pointer-events-none`}>
      <nav className={`pointer-events-auto flex items-center justify-between px-6 sm:px-8 py-3 rounded-full transition-all duration-300 border text-white shadow-lg max-w-[95vw] w-full sm:w-auto sm:min-w-[500px] ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md border-white/20' 
          : 'bg-black/40 backdrop-blur-sm border-white/10'
      }`}>
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); handleAnchorClick(e, 0 as any); }}
          className="text-xs sm:text-sm font-bold tracking-widest uppercase hover:text-gray-300 transition-colors whitespace-nowrap cursor-pointer"
        >
          {siteConfig.name}
        </a>
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <a
            href="#work"
            onClick={(e) => handleAnchorClick(e, '#work')}
            className="text-[10px] sm:text-xs uppercase tracking-wider text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            WORK
          </a>
          <a
            href="#services"
            onClick={(e) => handleAnchorClick(e, '#services')}
            className="text-[10px] sm:text-xs uppercase tracking-wider text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            SERVICES
          </a>
          <a
            href="#about"
            onClick={(e) => handleAnchorClick(e, '#about')}
            className="text-[10px] sm:text-xs uppercase tracking-wider text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            ABOUT
          </a>
        </div>
      </nav>
    </header>
  );
}
