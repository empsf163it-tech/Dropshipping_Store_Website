import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Product } from '../types';

interface BentoGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ products, onSelectProduct }) => {
  const hp = products.find(p => p.id === 'horizon-anc-headphones') || products[0];
  const lamp = products.find(p => p.id === 'aura-ceramic-lamp') || products[1];
  const bag = products.find(p => p.id === 'lunar-modular-backpack') || products[2];
  const pb = products.find(p => p.id === 'starlight-magsafe-powerbank') || products[3];

  return (
    <section className="py-20 bg-zinc-950 text-white border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Designed For Focus & Aesthetics
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">The Bento Hardware Showcase</h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Explore our meticulously engineered DTC essentials, each backed by live multi-supplier inventory telemetry.
          </p>
        </div>

        {/* Bento Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Large Bento Tile (7 cols) */}
          {hp && (
            <div 
              onClick={() => onSelectProduct(hp)}
              className="md:col-span-7 group relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-between cursor-pointer hover:border-zinc-700 transition duration-500 min-h-[420px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />
              <img
                src={hp.mainImage}
                alt={hp.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Top Tag */}
              <div className="relative z-20 flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700 text-amber-400 text-xs font-bold backdrop-blur-md">
                  Studio Acoustics
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30 backdrop-blur-md flex items-center gap-1">
                  <Zap className="w-3 h-3" /> Auto-Dispatches in 12h
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-20 space-y-2 mt-auto">
                <h3 className="text-2xl font-extrabold text-white group-hover:text-amber-300 transition">{hp.title}</h3>
                <p className="text-xs text-zinc-300 max-w-lg">{hp.description}</p>
                <div className="flex items-center justify-between pt-3">
                  <span className="text-xl font-bold text-amber-400">${hp.price} <span className="text-xs text-zinc-500 line-through">${hp.originalPrice}</span></span>
                  <span className="text-xs font-bold text-white flex items-center gap-1 group-hover:translate-x-1 transition">
                    View Hardware Hotspots <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Bento Tile 2: Lamp (5 cols) */}
          {lamp && (
            <div 
              onClick={() => onSelectProduct(lamp)}
              className="md:col-span-5 group relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-between cursor-pointer hover:border-zinc-700 transition duration-500 min-h-[420px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent z-10" />
              <img
                src={lamp.mainImage}
                alt={lamp.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              <div className="relative z-20">
                <span className="px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700 text-amber-400 text-xs font-bold backdrop-blur-md">
                  Circadian Lighting
                </span>
              </div>

              <div className="relative z-20 space-y-2 mt-auto">
                <h3 className="text-xl font-extrabold text-white group-hover:text-amber-300 transition">{lamp.title}</h3>
                <p className="text-xs text-zinc-300 line-clamp-2">{lamp.description}</p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-lg font-bold text-amber-400">${lamp.price}</span>
                  <span className="text-xs font-bold text-white flex items-center gap-1 group-hover:translate-x-1 transition">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Bento Tile 3: Backpack (6 cols) */}
          {bag && (
            <div 
              onClick={() => onSelectProduct(bag)}
              className="md:col-span-6 group relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 p-6 flex flex-col justify-between cursor-pointer hover:border-zinc-700 transition duration-500 min-h-[300px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent z-10" />
              <img
                src={bag.mainImage}
                alt={bag.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              <div className="relative z-20 flex justify-between">
                <span className="px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700 text-amber-400 text-xs font-bold backdrop-blur-md">
                  Weatherproof Carry
                </span>
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Cordura 840D
                </span>
              </div>

              <div className="relative z-20 space-y-1 mt-auto">
                <h3 className="text-lg font-extrabold text-white group-hover:text-amber-300 transition">{bag.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-amber-400">${bag.price}</span>
                  <span className="text-xs font-bold text-white flex items-center gap-1">
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Bento Tile 4: Power Bank (6 cols) */}
          {pb && (
            <div 
              onClick={() => onSelectProduct(pb)}
              className="md:col-span-6 group relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 p-6 flex flex-col justify-between cursor-pointer hover:border-zinc-700 transition duration-500 min-h-[300px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent z-10" />
              <img
                src={pb.mainImage}
                alt={pb.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              <div className="relative z-20">
                <span className="px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700 text-amber-400 text-xs font-bold backdrop-blur-md">
                  Power & Wearables
                </span>
              </div>

              <div className="relative z-20 space-y-1 mt-auto">
                <h3 className="text-lg font-extrabold text-white group-hover:text-amber-300 transition">{pb.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-amber-400">${pb.price}</span>
                  <span className="text-xs font-bold text-white flex items-center gap-1">
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
