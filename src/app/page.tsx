'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import About from '@/components/About';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <main className="w-full bg-black min-h-screen text-white">
      <SmoothScroll />
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
