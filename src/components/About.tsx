'use client';

import React, { useRef, useEffect } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const name1Ref = useRef<HTMLSpanElement>(null);
  const name2Ref = useRef<HTMLSpanElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const photo = photoRef.current;
    const label = labelRef.current;
    const name1 = name1Ref.current;
    const name2 = name2Ref.current;
    const bio = bioRef.current;

    if (!section || !photo || !label || !name1 || !name2 || !bio) return;

    const initGSAP = () => {
      const win = window as unknown as { gsap?: any; ScrollTrigger?: any };
      if (!win.gsap || !win.ScrollTrigger) {
        setTimeout(initGSAP, 200);
        return;
      }

      const { gsap, ScrollTrigger } = win;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Photo: scale up + fade in
        gsap.from(photo, {
          scale: 0.85,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
          },
        });

        // Label: letter spacing expand
        gsap.from(label, {
          letterSpacing: '0.1em',
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play reverse play reverse',
          },
        });

        // Nama "Jonathan": clip reveal dari bawah
        gsap.from(name1, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play reverse play reverse',
          },
        });

        // Nama "Ganteng": delayed reveal
        gsap.from(name2, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play reverse play reverse',
          },
        });

        // Bio: fade in + slide up
        gsap.from(bio, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 65%',
            toggleActions: 'play reverse play reverse',
          },
        });
      }, section);

      return () => ctx.revert();
    };

    const cleanup = initGSAP();

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[320px_minmax(0,1fr)] gap-12 md:gap-10 lg:gap-14 items-center">
          {/* Kiri: Foto Profile - 1:1 square, kecil, hitam putih */}
          <div ref={photoRef} className="flex justify-center md:justify-start">
            <div className="aspect-square w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
              <img
                src="/images/profile.jpg"
                alt="Jonathan Ganteng"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* Kanan: Bio Data */}
          <div className="space-y-8">
            {/* Label */}
            <div className="text-left">
              <p 
                ref={labelRef}
                className="text-sm tracking-[0.25em] uppercase text-gray-300 mb-4"
                style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
              >
                Æro Vagus
              </p>
              <h2 
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
                style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
              >
                <span ref={name1Ref} className="block">Jonathan</span>
                <span ref={name2Ref} className="block text-white/80">Ganteng</span>
              </h2>
            </div>

            {/* Bio */}
            <p 
              ref={bioRef}
              className="text-lg text-gray-400 leading-relaxed text-left max-w-md"
              style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
            >
              Seorang freelance videographer drone yang mendedikasikan hobi dan keahliannya untuk menangkap keindahan visual dari udara.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
