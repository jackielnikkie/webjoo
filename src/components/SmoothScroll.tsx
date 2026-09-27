'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Lenis: any;
    gsap: any;
    ScrollTrigger: any;
  }
}

export default function SmoothScroll() {
  useEffect(() => {
    // Pastikan window CDN script ter-load sempurna
    if (typeof window === 'undefined' || !window.Lenis || !window.gsap || !window.ScrollTrigger) return;

    const { Lenis, gsap, ScrollTrigger } = window;

    // 1. Inisialisasi Lenis persis formula portfolio.html yang terbukti 100% licin
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    (window as unknown as { lenis: any }).lenis = lenis;

    // 2. Sync ScrollTrigger & Progress Bar
    lenis.on('scroll', () => {
      ScrollTrigger.update();
      const indicator = document.querySelector('.scroll-indicator') as HTMLElement | null;
      if (indicator) {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.scrollY;
        const scrollPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        indicator.style.width = `${scrollPercentage}%`;
      }
    });

    // 3. Integrasi GSAP Ticker Frame Rate Loop
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // 4. Expose lenis.scrollTo globally for anchor links
    (window as unknown as { lenisScrollTo: (target: string | number) => void }).lenisScrollTo = (target: string | number) => {
      if (target === 0 || target === '#top') {
        lenis.scrollTo(0, {
          duration: 1.5,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        lenis.scrollTo(target, {
          offset: -80,
          duration: 1.5,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    };

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  return null;
}
