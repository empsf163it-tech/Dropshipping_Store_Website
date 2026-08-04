import React, { useState } from 'react';
import { ProductHotspot } from '../types';
import { Info, Sparkles } from 'lucide-react';

interface InteractiveHotspotsProps {
  image: string;
  hotspots: ProductHotspot[];
  productTitle: string;
}

export const InteractiveHotspots: React.FC<InteractiveHotspotsProps> = ({
  image,
  hotspots,
  productTitle
}) => {
  const [activeHotspot, setActiveHotspot] = useState<ProductHotspot | null>(hotspots[0] || null);

  if (!hotspots || hotspots.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
            Interactive Hardware Hotspots
          </h4>
        </div>
        <span className="text-[11px] text-zinc-500">Click hot spots to explore engineering</span>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 aspect-[4/3] group">
        <img
          src={image}
          alt={productTitle}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />

        {/* Hotspot Markers */}
        {hotspots.map((hs, index) => {
          const isActive = activeHotspot?.id === hs.id;
          return (
            <button
              key={hs.id}
              onClick={() => setActiveHotspot(hs)}
              style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 group/btn focus:outline-none"
            >
              <div className="relative flex items-center justify-center">
                {/* Ping ring */}
                <span className={`absolute inline-flex h-8 w-8 rounded-full ${isActive ? 'bg-amber-400/60 animate-ping' : 'bg-white/40'}`} />
                {/* Center dot */}
                <span className={`relative flex items-center justify-center h-6 w-6 rounded-full font-bold text-xs shadow-xl transition-all duration-300 ${isActive ? 'bg-amber-400 text-zinc-950 scale-125 ring-4 ring-amber-400/30' : 'bg-zinc-900/90 text-white border border-zinc-700 hover:bg-amber-400 hover:text-zinc-950'}`}>
                  {index + 1}
                </span>
              </div>
            </button>
          );
        })}

        {/* Floating Callout Card */}
        {activeHotspot && (
          <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-white backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex-shrink-0">
                <Info className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h5 className="text-sm font-bold text-amber-300">{activeHotspot.title}</h5>
                <p className="text-xs text-zinc-300 leading-relaxed">{activeHotspot.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
