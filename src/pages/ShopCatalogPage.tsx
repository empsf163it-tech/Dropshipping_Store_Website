import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { Product } from '../types';
import { SlidersHorizontal, Sparkles } from 'lucide-react';

interface ShopCatalogPageProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  wishlistIds: string[];
  compareIds: string[];
}

export const ShopCatalogPage: React.FC<ShopCatalogPageProps> = ({
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  onToggleCompare,
  wishlistIds,
  compareIds
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [maxPrice, setMaxPrice] = useState(500);

  let filtered = PRODUCTS.filter(p => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
    if (p.price > maxPrice) return false;
    return true;
  });

  if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price);
  if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);

  return (
    <div className="bg-zinc-950 text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            DropFlow DTC Flagship Catalog
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Precision Hardware & Lifestyle Studio</h1>
          <p className="text-xs text-zinc-400 max-w-xl mx-auto">
            Filtered by category, real-time inventory stock levels, and automated supplier fulfillment.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${selectedCategory === cat.id ? 'bg-amber-500 text-zinc-950 shadow' : 'bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort & Price Filter */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <SlidersHorizontal className="w-4 h-4 text-amber-400" />
              <span>Max Price: <strong className="text-white">${maxPrice}</strong></span>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={maxPrice}
                onChange={e => setMaxPrice(Number(e.target.value))}
                className="w-24 accent-amber-500 cursor-pointer"
              />
            </div>

            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs font-semibold focus:outline-none focus:border-amber-500/50"
            >
              <option value="featured">Sort by Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(product => (
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
    </div>
  );
};
