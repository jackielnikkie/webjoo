'use client';

import React from 'react';

const services = [
  {
    title: 'Aerial Photography',
    description: 'High-resolution aerial imagery for property, landscapes, tourism, and commercial projects.',
    tags: ['Property', 'Landscape', 'Tourism', 'Commercial'],
  },
  {
    title: 'Aerial Videography',
    description: 'Cinematic 4K drone videography tailored for brand promotions, events, and dynamic visual storytelling.',
    tags: ['Promotion', 'Events', 'Tourism', 'Property'],
  },
  {
    title: 'Custom Aerial Production',
    description: 'Tailored aerial video production designed around client-specific creative visions.',
    tags: ['Tailored Shooting', 'Creative Direction'],
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-24 px-6 sm:px-12 md:px-20 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif uppercase tracking-widest text-white">
            SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col justify-between p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
