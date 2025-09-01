import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TrustSection from './components/TrustSection';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <Features />
      <HowItWorks />
      <TrustSection />

      <footer className="border-t border-white/10 bg-black/60 backdrop-blur py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-emerald-400" />
            <span className="text-sm text-white/70">© {new Date().getFullYear()} AlgoGenome, Inc. All rights reserved.</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <a href="#security" className="hover:text-white transition">Security</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
