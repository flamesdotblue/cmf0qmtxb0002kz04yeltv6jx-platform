import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-7 w-7 rounded bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-emerald-400" />
          <span className="font-semibold tracking-tight">AlgoGenome</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#security" className="hover:text-white transition">Security</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="#contact" className="rounded-md bg-white text-black px-3 py-2 font-medium hover:bg-white/90 transition">Request access</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/15" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <div className="px-6 py-4 flex flex-col gap-3 text-sm text-white/80">
            <a onClick={() => setOpen(false)} href="#features" className="hover:text-white transition">Features</a>
            <a onClick={() => setOpen(false)} href="#security" className="hover:text-white transition">Security</a>
            <a onClick={() => setOpen(false)} href="#contact" className="hover:text-white transition">Contact</a>
            <a onClick={() => setOpen(false)} href="#contact" className="rounded-md bg-white text-black px-3 py-2 font-medium hover:bg-white/90 transition w-fit">Request access</a>
          </div>
        </div>
      )}
    </header>
  );
}
