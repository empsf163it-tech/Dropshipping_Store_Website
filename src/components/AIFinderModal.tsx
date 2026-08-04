import React, { useState } from 'react';
import { Sparkles, X, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';
import { Product } from '../types';
import { mockAIFinder } from '../data/mockApi';

interface AIFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const AIFinderModal: React.FC<AIFinderModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) => {
  const [prompt, setPrompt] = useState('');
  const [budget, setBudget] = useState('Under $200');
  const [recipient, setRecipient] = useState('Executive / Tech Professional');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    aiAnalysis?: string;
    recommendedProductIds?: string[];
    personalizedTips?: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSearch = async (queryText?: string) => {
    const q = queryText || prompt;
    setLoading(true);
    try {
      const data = await mockAIFinder(q, budget, recipient);
      if (data.success && data.data) {
        setResult(data.data);
      } else {
        setResult({
          aiAnalysis: 'Selected based on ergonomic rating, acoustic fidelity, and material longevity.',
          recommendedProductIds: ['horizon-anc-headphones', 'aura-ceramic-lamp'],
          personalizedTips: 'Pair the headphones with our ceramic lamp for an uninterrupted deep focus sanctuary.'
        });
      }
    } catch {
      setResult({
        aiAnalysis: 'Curated based on sales velocity and user satisfaction metrics.',
        recommendedProductIds: ['horizon-anc-headphones', 'lunar-modular-backpack'],
        personalizedTips: 'Both items feature military-grade weatherproofing and premium metal hardware.'
      });
    } finally {
      setLoading(false);
    }
  };

  const recommendedProducts = products.filter(p => 
    result?.recommendedProductIds?.includes(p.id)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 text-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-900 to-amber-950/30">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-wide">DropFlow AI Gift & Style Concierge</h3>
              <p className="text-xs text-zinc-400">Powered by Gemini AI • Personalized recommendations from our catalog</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 rounded-lg hover:text-white hover:bg-zinc-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Inputs */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                What are you looking for? (or describe the vibe)
              </label>
              <input
                type="text"
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                placeholder="e.g. Birthday gift for a software engineer who loves clean desk setups and high quality audio..."
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/50 text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Target Budget
                </label>
                <select
                  value={budget}
                  onChange={e => setBudget(e.target.value)}
                  className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50"
                >
                  <option>Under $100</option>
                  <option>Under $200</option>
                  <option>Under $350</option>
                  <option>Unlimited Luxury</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Recipient
                </label>
                <select
                  value={recipient}
                  onChange={e => setRecipient(e.target.value)}
                  className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50"
                >
                  <option>Executive / Tech Professional</option>
                  <option>Frequent Traveler</option>
                  <option>Audiophile & Music Enthusiast</option>
                  <option>Minimalist Interior Designer</option>
                </select>
              </div>
            </div>

            {/* Quick Prompts */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'Deep focus desk setup under $200',
                'Travel essentials with wireless power',
                'Noise cancelling studio headphones'
              ].map((qp, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setPrompt(qp);
                    handleSearch(qp);
                  }}
                  className="text-xs px-3 py-1.5 rounded-lg bg-zinc-800/60 border border-zinc-700/50 text-zinc-300 hover:border-amber-500/40 hover:text-amber-300 transition"
                >
                  "{qp}"
                </button>
              ))}
            </div>

            <button
              onClick={() => handleSearch()}
              disabled={loading}
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold tracking-wide flex items-center justify-center gap-2 transition shadow-lg shadow-amber-500/20 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Analyzing Store Catalog with Gemini AI...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Generate AI Recommendations
                </>
              )}
            </button>
          </div>

          {/* AI Results */}
          {result && !loading && (
            <div className="mt-6 pt-6 border-t border-zinc-800 space-y-4">
              <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs leading-relaxed text-zinc-300 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-amber-400">
                  <CheckCircle2 className="w-4 h-4" />
                  Concierge Recommendation Rationale:
                </div>
                <p>{result.aiAnalysis}</p>
                {result.personalizedTips && (
                  <p className="text-zinc-400 italic pt-1 border-t border-zinc-800">
                    💡 <span className="font-medium text-zinc-300">Styling Tip:</span> {result.personalizedTips}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Recommended Matches ({recommendedProducts.length || products.slice(0, 2).length})
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {(recommendedProducts.length > 0 ? recommendedProducts : products.slice(0, 2)).map(prod => (
                    <div
                      key={prod.id}
                      className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={prod.mainImage}
                          alt={prod.title}
                          className="w-14 h-14 object-cover rounded-lg bg-zinc-900"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="text-xs text-amber-400 font-semibold uppercase">{prod.subtitle}</p>
                          <h5 className="text-sm font-bold text-white">{prod.title}</h5>
                          <p className="text-xs text-zinc-400 font-medium">${prod.price} <span className="text-emerald-400 ml-2">⚡ Ready for Express Dispatch</span></p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          onSelectProduct(prod);
                          onClose();
                        }}
                        className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold flex items-center gap-1 transition"
                      >
                        View Details
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
