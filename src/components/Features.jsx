import React from 'react';
import { Database, Search, Brain, Layers, FileSearch, Shield } from 'lucide-react';

const items = [
  {
    icon: Database,
    title: 'Live aggregation',
    desc: 'Continuously ingests literature, preprints, clinical guidelines, public datasets (ClinVar, gnomAD, Ensembl, UniProt) and private repositories with incremental updates.'
  },
  {
    icon: Search,
    title: 'Semantic search over genomes',
    desc: 'Ask complex questions across variants, genes, pathways, and phenotypes. Natural language + structured filters. Exact matches and reasoning-backed suggestions.'
  },
  {
    icon: Brain,
    title: 'AI co-analyst',
    desc: 'Automates variant triage, annotation, pathogenicity assessment, and case summarization. Produces citation-linked rationales you can audit and export.'
  },
  {
    icon: Layers,
    title: 'Pipeline orchestration',
    desc: 'Bring your own pipelines (WDL/CWL/Nextflow). Orchestrate workflows with versioned configs, environment pinning, and one-click re-runs.'
  },
  {
    icon: FileSearch,
    title: 'Provenance & reproducibility',
    desc: 'Every step is logged with checksums, container hashes, and data lineage. Generate FDA-ready audit trails and freeze analyses for review.'
  },
  {
    icon: Shield,
    title: 'Enterprise security',
    desc: 'Encryption in transit and at rest, SSO/SAML, fine-grained RBAC, PHI-aware redaction. HIPAA-ready.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-black to-[#06070a]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.10),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Make genomics analysis faster, safer, and explainable</h2>
        <p className="mt-3 text-white/70 max-w-2xl">AlgoGenome unifies data, tools, and reasoning into a single workspace designed for clinical and research teams.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <FeatureCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition overflow-hidden">
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-fuchsia-500/10 via-cyan-400/10 to-emerald-400/10 blur-2xl" />
      <div className="relative z-10">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-4 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
