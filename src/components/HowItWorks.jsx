import React from 'react';
import { ArrowRight, Server, CircuitBoard, FileText, BarChart3 } from 'lucide-react';

const steps = [
  {
    title: 'Ingest + normalize',
    desc: 'Connect EHR/LIMS, cloud buckets, and public sources. We de-duplicate, harmonize schemas, and attach metadata for PHI-aware handling.',
    icon: Server,
    stat: 'Supports AWS/GCP/Azure, S3/GS, HL7/FHIR'
  },
  {
    title: 'Annotate + reason',
    desc: 'Run annotations (VEP, SnpEff), frequency crosswalk, phenotype matching. The agent drafts ACMG-style assessments with citations.',
    icon: CircuitBoard,
    stat: 'Citations captured with DOI/PMID links'
  },
  {
    title: 'Review + collaborate',
    desc: 'Inline comments, tasking, and suggested edits. Versioned changes create a full audit trail that is exportable.',
    icon: FileText,
    stat: 'Exports to PDF/JSON, LIMS sync'
  },
  {
    title: 'Report + learn',
    desc: 'Generate explainable clinical or research-ready reports. Feedback loops improve model suggestions over time.',
    icon: BarChart3,
    stat: 'Avg. turnaround cut by 50–70%'
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="lg:w-1/3">
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">How it works</h2>
            <p className="mt-3 text-white/70">From raw data to explainable decisions — AlgoGenome streamlines each step while preserving scientific rigor.</p>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 hover:bg-white/10 transition">
              Book a 20‑min walkthrough
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <ol className="lg:w-2/3 grid gap-6 sm:grid-cols-2">
            {steps.map((s, i) => (
              <li key={i} className="relative rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-lg font-semibold">{i + 1}. {s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
                <p className="mt-3 text-xs text-emerald-300/90">{s.stat}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
