import React, { useState } from 'react';
import { Sparkles, CircleCheck, CircleX, ShieldAlert, Trophy } from 'lucide-react';

interface BeforeAfterShowcaseProps {
  beforeLabel?: string;
  beforeImage?: string;
  beforeDesc?: string;
  afterLabel?: string;
  afterImage?: string;
  afterDesc?: string;
}

export const BeforeAfterShowcase: React.FC<BeforeAfterShowcaseProps> = ({
  beforeLabel = 'Mass Market Generic Product',
  beforeImage = 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80',
  beforeDesc = 'Hollow plastic housing, generic driver, no noise cancellation, 15h battery, uncertified battery cell.',
  afterLabel = 'DropFlow Engineered Standard',
  afterImage = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
  afterDesc = 'Aerospace 6061-T6 Aluminium, Beryllium drivers, 42dB hybrid ANC, 48h battery with fast charging, 2-Year warranty.'
}) => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="p-6 md:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 text-white space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            True DTC Quality Comparison
          </div>
          <h3 className="text-xl font-bold">Why DropFlow Replaces Generic Dropshipping</h3>
        </div>
        <p className="text-xs text-zinc-400 max-w-sm">
          Slide left or right to see how our engineered hardware differs from unverified mass market templates.
        </p>
      </div>

      {/* Interactive Visual Comparison Container */}
      <div className="relative overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-800 aspect-[16/9] select-none">
        {/* Before Image (Left Background) */}
        <div className="absolute inset-0">
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="w-full h-full object-cover grayscale opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-bold flex items-center gap-1.5">
            <CircleX className="w-3.5 h-3.5" />
            {beforeLabel}
          </div>
        </div>

        {/* After Image (Right Clipped Overlay) */}
        <div
          className="absolute inset-y-0 right-0 overflow-hidden"
          style={{ left: `${sliderPos}%` }}
        >
          <img
            src={afterImage}
            alt={afterLabel}
            className="absolute top-0 right-0 max-w-none h-full object-cover"
            style={{ width: '100%', transform: `translateX(${100 - sliderPos}%)` }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5" />
            {afterLabel}
          </div>
        </div>

        {/* Divider Bar & Handle */}
        <div
          className="absolute inset-y-0 z-20 w-1 bg-amber-400 cursor-ew-resize"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-400 text-zinc-950 flex items-center justify-center font-bold text-xs shadow-xl">
            ↔
          </div>
        </div>

        {/* Interactive Slider Input */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="absolute inset-0 z-30 opacity-0 cursor-ew-resize"
        />
      </div>

      {/* Feature Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30 text-xs space-y-2">
          <div className="flex items-center gap-2 font-bold text-red-400">
            <ShieldAlert className="w-4 h-4" />
            Mass Market Generic Alternatives
          </div>
          <p className="text-zinc-400 leading-relaxed">{beforeDesc}</p>
        </div>

        <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30 text-xs space-y-2">
          <div className="flex items-center gap-2 font-bold text-emerald-400">
            <CircleCheck className="w-4 h-4" />
            DropFlow Engineered Standard
          </div>
          <p className="text-zinc-300 leading-relaxed">{afterDesc}</p>
        </div>
      </div>
    </div>
  );
};
