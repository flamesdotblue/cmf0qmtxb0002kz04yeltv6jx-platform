import React from 'react';
import { ArrowRight, BadgeCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2060&auto=format&fit=crop"
          alt="Abstract genomics visualization"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-20 flex flex-col items-start justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur">
          <BadgeCheck className="h-4 w-4 text-emerald-400" />
          <span className="text-xs text-white/80">HIPAA-ready. SOC 2 in progress.</span>
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          AlgoGenome
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300">Search + thinking engine for genomics</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base md:text-lg text-white/80">
          Aggregate, clean, and reason over the world’s genomic knowledge in real time. Our AI agent automates multi-step workflows: from ingestion and variant annotation to ACMG-style assessment, report generation, and audit logging.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-black px-5 py-3 font-medium shadow-lg shadow-white/10 hover:bg-white/90 transition">
            Request early access
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition">
            Explore features
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-white/70">
          <Stat label="Data sources" value=">120" />
          <Stat label="Time saved per case" value="7–10 hrs" />
          <Stat label="Citations & provenance" value="Tracked" />
          <Stat label="Reproducible pipelines" value="Yes" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur">
      <div className="text-white font-medium">{value}</div>
      <div className="text-white/70 text-[11px] mt-1">{label}</div>
    </div>
  );
}
