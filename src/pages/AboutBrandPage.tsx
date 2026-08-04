import React from 'react';
import { Trophy, Globe, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';
import { PRESS_QUOTES } from '../data/storeData';

export const AboutBrandPage: React.FC = () => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 space-y-20">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            The DropFlow Manifesto
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            We Rebuilt E-Commerce around <br />
            <span className="text-amber-400">Craftsmanship & Reliability.</span>
          </h1>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Generic stores flooded the internet with low-quality plastic goods. DropFlow was created in Stockholm and San Francisco to engineer true high-fidelity hardware, backed by direct global fulfillment partners.
          </p>
        </div>

        {/* Brand Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-3">
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 w-fit">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">1. Precision Materials</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Beryllium diaphragms, anodized 6061-T6 aluminium, hand-poured porcelain clay, and German Fidlock magnetic catches. Zero shortcuts.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-3">
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 w-fit">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">2. Express Logistics</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Our order fulfillment system routes purchases directly to the nearest regional warehouse for swift global dispatch.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-3">
            <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 w-fit">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">3. 100% Sustainability</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              100% recycled Cordura ballistic nylon, FSC-certified American walnut timber, and 0% single-use plastic packaging across all shipments.
            </p>
          </div>
        </div>

        {/* Press Quotes */}
        <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 space-y-6 text-center">
          <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400">Featured in Global Press</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRESS_QUOTES.map((pq, i) => (
              <div key={i} className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs space-y-2">
                <p className="text-zinc-300 italic">"{pq.quote}"</p>
                <p className="font-extrabold text-amber-400 uppercase tracking-wider">— {pq.outlet}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
