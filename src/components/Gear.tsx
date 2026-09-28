'use client';

import React, { useRef, useEffect } from 'react';

const gear = [
  {
    name: 'DJI Lito 1',
    role: 'Main Cinematic Unit',
    desc: 'Drone utama untuk pengambilan video sinematik udara resolusi tinggi.',
    image: '/images/gear/dji-lito.png',
    side: 'left' as const,
  },
  {
    name: 'DJI Neo 2',
    role: 'Compact Creative Unit',
    desc: 'Drone ringkas dan lincah untuk angle kreatif dinamis.',
    image: '/images/gear/dji-neo.png',
    side: 'right' as const,
  },
];

export default function Gear() {
  const sectionRef = useRef<HTMLElement>(null);
  const ctxRef = useRef<any>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const init = () => {
      const win = window as unknown as { gsap?: any; ScrollTrigger?: any };
      if (!win.gsap || !win.ScrollTrigger) {
        setTimeout(init, 200);
        return;
      }

      const { gsap, ScrollTrigger } = win;
      gsap.registerPlugin(ScrollTrigger);

      const isDesktop = window.matchMedia('(min-width: 768px)').matches;

      ctxRef.current = gsap.context(() => {
        const title = section.querySelector('.gear-title');
        const infos = gsap.utils.toArray<HTMLElement>('.gear-info');

        if (isDesktop) {
          // ===== DESKTOP: drone terbang konvergen + pin =====
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: '+=130%',
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          tl
            // Title muncul lebih dulu
            .fromTo('.gear-title',
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, ease: 'power2.out', duration: 0.5 }, 0)
            // Wrapper drone Lito masuk dari kiri
            .fromTo('.gear-fly-left',
              { xPercent: -180, yPercent: -60, scale: 0.3, opacity: 0 },
              { xPercent: 0, yPercent: 0, scale: 1, opacity: 1, ease: 'power2.out', duration: 1 }, 0)
            // Wrapper drone Neo masuk dari kanan
            .fromTo('.gear-fly-right',
              { xPercent: 180, yPercent: -60, scale: 0.3, opacity: 0 },
              { xPercent: 0, yPercent: 0, scale: 1, opacity: 1, ease: 'power2.out', duration: 1 }, 0)
            // Info cards muncul setelah drone mendekat
            .fromTo('.gear-info-left',
              { y: 50, opacity: 0 },
              { y: 0, opacity: 1, ease: 'power2.out', duration: 0.5 }, 0.6)
            .fromTo('.gear-info-right',
              { y: 50, opacity: 0 },
              { y: 0, opacity: 1, ease: 'power2.out', duration: 0.5 }, 0.6);

          // Float loop TERPISAH: hanya gerakkan <img> dalam, bukan wrapper
          const innerImgs = gsap.utils.toArray<HTMLElement>('.gear-float');
          innerImgs.forEach((img, i) => {
            gsap.to(img, {
              y: i === 0 ? -14 : -18,
              duration: 2.4 + i * 0.4,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            });
          });

          ScrollTrigger.refresh();
        } else {
          // ===== MOBILE: fallback fade-in + stagger sederhana =====
          const targets = [title, ...gsap.utils.toArray<HTMLElement>('.gear-drone'), ...infos].filter(Boolean);
          gsap.fromTo(targets,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play reverse play reverse',
              },
            });
        }
      }, section);

      return () => ctxRef.current?.revert();
    };

    const cleanup = init();

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section
      id="gear"
      ref={sectionRef}
      className="relative w-full bg-black border-t border-white/10 overflow-hidden"
    >
      <div className="relative w-full min-h-screen flex items-center justify-center py-24 px-6 md:px-12 lg:px-24">
        {/* Title */}
        <h2 className="gear-title absolute top-16 md:top-20 left-1/2 -translate-x-1/2 text-3xl sm:text-4xl md:text-5xl font-bold font-serif uppercase tracking-widest text-white text-center">
          Our Gear
        </h2>

        {/* === DESKTOP LAYOUT (drone terbang) === */}
        <div className="hidden md:block w-full max-w-6xl">
          <div className="relative grid grid-cols-2 gap-8 items-end">
            {gear.map((item) => (
              <div key={item.name} className="flex flex-col items-center">
                {/* Wrapper digerakkan timeline, img dalam yang float */}
                <div className={`gear-fly gear-fly-${item.side} w-full max-w-[320px]`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="gear-float gear-drone w-full h-64 md:h-72 object-contain drop-shadow-[0_20px_40px_rgba(255,255,255,0.08)]"
                  />
                </div>
                {/* Info */}
                <div className={`gear-info gear-info-${item.side} mt-8 text-center max-w-sm`}>
                  <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-2">
                    {item.role}
                  </p>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-white mb-3"
                    style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === MOBILE LAYOUT (grid statis) === */}
        <div className="md:hidden w-full max-w-md mt-16">
          <div className="grid grid-cols-1 gap-8">
            {gear.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center p-6 rounded-2xl bg-white/[0.03] border border-white/10"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="gear-drone w-40 h-40 object-contain"
                />
                <div className="gear-info mt-4 text-center">
                  <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-2">
                    {item.role}
                  </p>
                  <h3
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
