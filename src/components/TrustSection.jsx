import React from 'react';
import { Shield, Lock, BadgeCheck, ArrowRight } from 'lucide-react';

export default function TrustSection() {
  return (
    <section id="security" className="relative py-16 bg-gradient-to-b from-[#06070a] to-black">
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="lg:w-2/3">
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Security and trust, simplified</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Built for regulated environments with encryption, access controls, and full auditability — so your team can move fast and stay compliant.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <Badge icon={Shield} label="HIPAA-ready" />
              <Badge icon={BadgeCheck} label="SOC 2 in progress" />
              <Badge icon={Lock} label="Encryption at rest & transit" />
            </div>
          </div>

          <div id="contact" className="lg:w-1/3 w-full">
            <form onSubmit={(e) => e.preventDefault()} className="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <input type="email" required placeholder="Work email" className="w-full rounded-md bg-black/60 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" />
              <button type="submit" className="whitespace-nowrap rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition inline-flex items-center justify-center gap-2">
                Request early access
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-3 text-xs text-white/60">We’ll reach out with onboarding details and security documentation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon: Icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-black/40 px-3 py-2 text-white/80">
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </div>
  );
}
