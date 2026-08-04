import React, { useState } from 'react';
import { ShieldCheck, Truck, Clock, Award, ChevronDown, ChevronUp, Lock } from 'lucide-react';
import { FAQS } from '../data/storeData';

export const TrustPages: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-zinc-950 text-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            100% Buyer Protection & Transparent Guarantees
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Shipping, Warranty & Security Policy</h1>
          <p className="text-xs text-zinc-400 max-w-lg mx-auto">
            Everything you need to know about our express logistics, 30-day trial, and 2-year manufacturer warranty.
          </p>
        </div>

        {/* 4 Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
              <Truck className="w-5 h-5" /> Express Air Shipping Timelines
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Domestic US & EU orders are fulfilled within 6-12 hours and delivered in 2-4 business days via DHL Express or FedEx Airway. Global shipping takes 4-7 business days with pre-cleared customs duty.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
              <Award className="w-5 h-5" /> 2-Year Global Manufacturer Warranty
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              All DropFlow hardware is covered by a 2-year full replacement warranty against component defects, acoustic degradation, or battery performance issues.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-base">
              <Clock className="w-5 h-5" /> 30-Day Risk-Free Money-Back Trial
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Try our studio acoustics and circadian lamps in your own environment for 30 days. If you are not completely satisfied, return for a 100% refund with prepaid return shipping labels.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-base">
              <Lock className="w-5 h-5" /> Encrypted Buyer Protection
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Transactions are protected using AES 256-bit SSL encryption. We accept Visa, Mastercard, American Express, Apple Pay, Google Pay, and Shop Pay.
            </p>
          </div>
        </div>

        {/* Interactive FAQ Section */}
        <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-6">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left font-bold text-sm text-white"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4 text-amber-400" />}
                </button>
                {openFaq === idx && (
                  <p className="text-xs text-zinc-300 pt-3 border-t border-zinc-800/80 mt-3 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
