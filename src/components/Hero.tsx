'use client';

import React, { useRef, useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const content = contentRef.current;

    if (!section || !video || !content) return;

    // IntersectionObserver untuk pause/play video — lebih agresif
    const videoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          if (videoLoaded) {
            video.play().catch(() => {});
          }
        } else {
          video.pause();
          // Reset ke awal supaya tidak makan memory
          if (!entry.isIntersecting) {
            video.currentTime = 0;
          }
        }
      },
      { threshold: [0, 0.3, 1] }
    );
    videoObserver.observe(section);

    // Load video hanya saat section mendekati viewport
    const loadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.load();
          setVideoLoaded(true);
          loadObserver.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    loadObserver.observe(section);

    // Tunggu GSAP load
    const initGSAP = () => {
      const win = window as unknown as { gsap?: any; ScrollTrigger?: any };
      if (!win.gsap || !win.ScrollTrigger) {
        setTimeout(initGSAP, 200);
        return;
      }

      const { gsap, ScrollTrigger } = win;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Parallax video - bergerak lebih lambat saat scroll
        gsap.to(video, {
          y: 100,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });

        // Animasi content fade out saat scroll
        const elements = content.querySelectorAll('.hero-animate-item');
        
        elements.forEach((el, index) => {
          gsap.to(el, {
            opacity: 0,
            y: -40 - (index * 10),
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: '+=60%',
              scrub: 1,
            },
          });
        });
      }, section);

      return () => ctx.revert();
    };

    const cleanup = initGSAP();

    return () => {
      videoObserver.disconnect();
      loadObserver.disconnect();
      if (cleanup) cleanup();
    };
  }, [videoLoaded]);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        onLoadedData={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover z-0 pointer-events-none transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <source src="/videos/drone_video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1] pointer-events-none" />

      {/* Content dengan scroll animation */}
      <div 
        ref={contentRef}
        className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto"
      >
        <h1 className="text-white leading-tight tracking-tight">
          <span 
            className="hero-animate-item block text-lg sm:text-2xl md:text-3xl tracking-[0.3em] uppercase mb-2 font-light"
          >
            CAPTURE THE
          </span>
          <span 
            className="hero-animate-item block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white my-1"
          >
            WORLD
          </span>
          <span 
            className="hero-animate-item block text-lg sm:text-2xl md:text-3xl tracking-[0.3em] uppercase mt-2 font-light"
          >
            FROM ABOVE
          </span>
        </h1>

        <p 
          className="hero-animate-item text-sm sm:text-base md:text-lg text-gray-300 max-w-lg mx-auto mt-6"
        >
          Aerial photography & cinematography from{' '}
          <span className="font-semibold text-white">{siteConfig.location}</span>.
        </p>

        <a
          href="#work"
          className="hero-animate-item mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase cursor-pointer hover:bg-white/20 hover:scale-105 transition-all border border-white/30 text-white bg-white/10 backdrop-blur-sm"
        >
          Explore Work
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
