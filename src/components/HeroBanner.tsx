import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Award, Globe } from 'lucide-react';
import { PageView } from '../types';

interface HeroBannerProps {
  onNavigate: (page: PageView) => void;
  onOpenAIConcierge: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onNavigate,
  onOpenAIConcierge
}) => {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white py-20 lg:py-32 border-b border-zinc-800/80">
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2315_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2315_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-700/80 text-xs font-semibold text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-bold">Express Global Fulfillment</span>
            <span className="text-zinc-600">•</span>
            <span className="text-amber-300">Stockholm, LA & Frankfurt Depots</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Acoustic Purity. <br />
            Circadian Lighting. <br />
            <span className="text-amber-400 font-extrabold italic">Engineered DTC.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            DropFlow replaces generic stores with precision hardware. Experience beryllium acoustic drivers, handcrafted porcelain lighting, and seamless express shipping across 5 global hubs.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={() => onNavigate('shop')}
              className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-black text-sm tracking-wider uppercase flex items-center justify-center gap-3 transition shadow-xl shadow-amber-500/20"
            >
              Explore Flagship Catalog
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenAIConcierge}
              className="w-full sm:w-auto py-4 px-6 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              Try AI Gift Concierge
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-400 border-t border-zinc-900">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>30-Day Money-Back</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>2-Year Global Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>Live Express Tracking</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Media & Floating Telemetry Glass Cards */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl aspect-[4/5] group">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80"
              alt="DropFlow Horizon Flagship Headphones"
              className="w-full h-full object-cover transition duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

            {/* Overlaid Product Highlight */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-zinc-900/90 border border-zinc-700/80 backdrop-blur-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
                  FLAGSHIP STUDIO SERIES
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                  ⚡ 14 Stock Left
                </span>
              </div>
              <h3 className="text-base font-bold text-white">Horizon Noise-Cancelling Headphones</h3>
              <p className="text-xs text-zinc-300">Beryllium Diaphragm Drivers • 42dB Hybrid ANC • $349</p>
              <button
                onClick={() => onNavigate('shop')}
                className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition mt-2"
              >
                Quick Buy / View Hotspots
              </button>
            </div>
          </div>

          {/* Floating Telemetry Glass Card */}
          <div className="hidden sm:flex absolute -top-6 -right-6 p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-xs shadow-2xl backdrop-blur-xl items-center gap-3 animate-bounce duration-1000">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">99.8% Auto-Fulfill</p>
              <p className="text-[10px] text-zinc-400">Spocket & ShipBob API Synced</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
