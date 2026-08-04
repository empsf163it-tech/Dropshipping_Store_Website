import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { TrendingUp, Sparkles, Trophy, Zap } from 'lucide-react';

interface TrendingProductsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  wishlistIds: string[];
  compareIds: string[];
}

export const TrendingProducts: React.FC<TrendingProductsProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  onToggleCompare,
  wishlistIds,
  compareIds
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'bestsellers' | 'flash' | 'new'>('all');

  const filteredProducts = products.filter(p => {
    if (activeTab === 'bestsellers') return p.isBestSeller;
    if (activeTab === 'flash') return p.isFlashSale;
    if (activeTab === 'new') return p.isNew;
    return true;
  });

  return (
    <section className="py-20 bg-zinc-950 text-white border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <TrendingUp className="w-3.5 h-3.5" />
              Conversion-Driven High Demand Items
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight">Trending DTC Hardware</h2>
            <p className="text-xs text-zinc-400 max-w-xl">
              Curated audio, lighting, and workspace essentials backed by automated supplier API fulfillment.
            </p>
          </div>

          {/* Tab Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs font-semibold">
            {[
              { id: 'all', label: 'All Catalog', icon: Sparkles },
              { id: 'bestsellers', label: 'Best Sellers', icon: Trophy },
              { id: 'flash', label: 'Flash Sale', icon: Zap },
              { id: 'new', label: 'New Releases', icon: TrendingUp }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition ${activeTab === tab.id ? 'bg-amber-500 text-zinc-950 font-extrabold shadow' : 'text-zinc-400 hover:text-white'}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              onToggleCompare={onToggleCompare}
              isWishlisted={wishlistIds.includes(product.id)}
              isCompared={compareIds.includes(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
