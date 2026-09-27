'use client';

import React, { useEffect, useRef } from 'react';

const projects = [
  { id: '01', title: 'Landscape', video: '/videos/portfolio/01-landscape.mp4' },
  { id: '02', title: 'Property', video: '/videos/portfolio/02-property.mp4' },
  { id: '03', title: 'Tourism', video: '/videos/portfolio/03-tourism.mp4' },
  { id: '04', title: 'Commercial', video: '/videos/portfolio/04-commercial.mp4' },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<any>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const init = () => {
      const win = window as unknown as { gsap?: any; ScrollTrigger?: any };
      if (!win.gsap || !win.ScrollTrigger) {
        setTimeout(init, 200);
        return;
      }

      const { gsap, ScrollTrigger } = win;
      gsap.registerPlugin(ScrollTrigger);

      const scrollAmount = track.scrollWidth - window.innerWidth;

      ctxRef.current = gsap.context(() => {
        gsap.to(track, {
          x: -scrollAmount,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${scrollAmount}`,
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }, section);
    };

    init();

    // IntersectionObserver untuk lazy play video - threshold lebih rendah
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
            video.currentTime = 0; // Reset ke awal saat keluar viewport
          }
        });
      },
      {
        threshold: 0.3, // Play saat 30% terlihat (lebih responsif)
        rootMargin: '100px', // Preload sedikit sebelum masuk viewport
      }
    );

    // Observe semua video
    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      if (ctxRef.current) {
        ctxRef.current.revert();
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="w-full bg-black border-t border-white/10"
    >
      {/* Header */}
      <div className="px-6 sm:px-12 md:px-20 pt-24 pb-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-widest font-serif mb-2">
            Selected Work
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            A collection of aerial perspectives captured across East Java.
          </p>
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-8 px-6 sm:px-12 md:px-20 pb-24"
          style={{ width: 'max-content' }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-card w-[70vw] md:w-[50vw] lg:w-[40vw] aspect-video relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl flex-shrink-0 group flex items-end p-6"
            >
              <video
                ref={(el) => { videoRefs.current[index] = el; }}
                muted
                loop
                playsInline
                preload="none" // Jangan load sampai perlu
                poster={`/images/portfolio/${project.id}.jpg`} // Fallback poster (kalau ada)
                className="absolute inset-0 w-full h-full object-cover brightness-90 transition-transform duration-500 group-hover:scale-105"
              >
                <source src={project.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <h3 className="relative z-10 text-white text-xl sm:text-2xl font-bold tracking-wide">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
