import React from 'react';
import { ShieldCheck, Lock, KeyRound, BadgeCheck } from 'lucide-react';

export default function TrustSection() {
  return (
    <section id="security" className="relative py-20 bg-gradient-to-b from-[#06070a] to-black">
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Security, compliance, and trust by design</h2>
            <p className="mt-3 text-white/70 max-w-2xl">AlgoGenome is built for regulated environments. We align with industry best practices to protect sensitive genomic and clinical data while enabling collaboration.</p>

            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <TrustItem icon={ShieldCheck} title="Access control" desc="SSO/SAML, SCIM provisioning, fine-grained RBAC, per-project secrets." />
              <TrustItem icon={Lock} title="Encryption" desc="TLS 1.2+ in transit, AES-256 at rest, envelope encryption for keys." />
              <TrustItem icon={KeyRound} title="Data governance" desc="Row/column-level permissions, PHI-aware redaction, audit logs, immutable trails." />
              <TrustItem icon={BadgeCheck} title="Compliance" desc="HIPAA-ready, GDPR-aligned, SOC 2 Type II in progress. BAAs available." />
            </dl>

            <div id="contact" className="mt-8">
              <form onSubmit={(e) => e.preventDefault()} className="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col sm:flex-row gap-3">
                <input type="email" required placeholder="Work email" className="w-full rounded-md bg-black/60 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" />
                <button type="submit" className="whitespace-nowrap rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition">Request early access</button>
              </form>
              <p className="mt-3 text-xs text-white/60">By submitting, you agree to our terms and privacy policy. We’ll reach out with onboarding details.</p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-cyan-400/10 to-emerald-400/10 p-6">
              <h3 className="text-lg font-semibold">What you can do today</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/80 list-disc list-inside">
                <li>Connect to S3/GS and ingest VCFs, BAM/CRAM indexes, and metadata.</li>
                <li>Run annotation against VEP/SnpEff with pinned containers.</li>
                <li>Ask natural language questions about variants and phenotypes.</li>
                <li>Generate draft ACMG-style assessments with citations.</li>
                <li>Export reports and full provenance as PDF/JSON.</li>
              </ul>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                <Badge label="Role-based access (RBAC)" />
                <Badge label="SSO/SAML" />
                <Badge label="Audit trails" />
                <Badge label="Encryption at rest" />
                <Badge label="PHI-aware redaction" />
                <Badge label="Citations & DOIs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <dt className="font-medium">{title}</dt>
          <dd className="text-sm text-white/70">{desc}</dd>
        </div>
      </div>
    </div>
  );
}

function Badge({ label }) {
  return (
    <span className="inline-flex items-center justify-center rounded-md border border-white/15 bg-black/40 px-2.5 py-1 text-white/80">{label}</span>
  );
}
