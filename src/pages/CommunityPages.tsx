import React from 'react';
import { Star, ShieldCheck, Heart, Sparkles, Video, Users } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/storeData';

export const CommunityPages: React.FC = () => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Users className="w-3.5 h-3.5" />
            10,000+ Global Creators & Collectors
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">DropFlow Community & Verified Reviews</h1>
          <p className="text-xs text-zinc-400 max-w-lg mx-auto">
            Real feedback, video unboxings, and desk setup inspiration from engineers, designers, and audiophiles worldwide.
          </p>
        </div>

        {/* Customer Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CUSTOMER_REVIEWS.map(rev => (
            <div key={rev.id} className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <ShieldCheck className="w-3 h-3" /> Verified Buyer
                  </span>
                </div>

                <h4 className="font-bold text-sm text-white">"{rev.title}"</h4>
                <p className="text-xs text-zinc-300 leading-relaxed">{rev.comment}</p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center gap-3">
                <img src={rev.avatar} alt={rev.author} className="w-10 h-10 rounded-full object-cover border border-amber-400" referrerPolicy="no-referrer" />
                <div className="text-xs">
                  <p className="font-bold text-white">{rev.author}</p>
                  <p className="text-[10px] text-zinc-500">{rev.location} • {rev.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ambassador & Affiliate Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-amber-950/20 to-zinc-900 border border-amber-500/30 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold">
            <Sparkles className="w-4 h-4" /> Join the DropFlow Ambassador Circle
          </div>
          <h2 className="text-2xl font-bold">Earn 15% Commission + Free Hardware Review Samples</h2>
          <p className="text-xs text-zinc-400 max-w-xl mx-auto">
            Are you a tech reviewer, desk setup creator, or interior design blogger? Join our ambassador network to receive pre-release prototypes and custom referral rewards.
          </p>
          <button className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs transition">
            Apply to Ambassador Program
          </button>
        </div>
      </div>
    </div>
  );
};
