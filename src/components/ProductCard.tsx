import React, { useState } from 'react';
import { Star, Eye, Layers, Heart, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  isWishlisted?: boolean;
  isCompared?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  onToggleCompare,
  isWishlisted = false,
  isCompared = false
}) => {
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const discountPercent = product.originalPrice > product.price 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div 
      onClick={() => onSelectProduct(product)}
      className="group relative flex flex-col rounded-2xl bg-zinc-900/60 border border-zinc-800/80 overflow-hidden text-white cursor-pointer hover:border-zinc-700 transition duration-300 hover:shadow-xl hover:shadow-black/50"
    >
      {/* Top Image Container */}
      <div className="relative aspect-square overflow-hidden bg-zinc-950">
        <img
          src={product.mainImage}
          alt={product.title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-108"
          referrerPolicy="no-referrer"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isBestSeller && (
            <span className="px-2.5 py-1 rounded-md bg-amber-500 text-zinc-950 font-black text-[10px] uppercase tracking-wider shadow">
              BEST SELLER
            </span>
          )}
          {product.isNew && (
            <span className="px-2.5 py-1 rounded-md bg-blue-500 text-white font-black text-[10px] uppercase tracking-wider shadow">
              NEW RELEASE
            </span>
          )}
          {discountPercent > 0 && (
            <span className="px-2.5 py-1 rounded-md bg-red-500 text-white font-black text-[10px] uppercase tracking-wider shadow">
              -{discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Quick Action Overlay Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={(e) => { e.stopPropagation(); onToggleWishlist(product); }}
            className={`p-2 rounded-xl backdrop-blur-md transition ${isWishlisted ? 'bg-amber-500 text-zinc-950' : 'bg-zinc-900/80 text-white hover:bg-zinc-800'}`}
            title="Wishlist"
          >
            <Heart className="w-4 h-4 fill-current" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onToggleCompare(product); }}
            className={`p-2 rounded-xl backdrop-blur-md transition ${isCompared ? 'bg-amber-500 text-zinc-950' : 'bg-zinc-900/80 text-white hover:bg-zinc-800'}`}
            title="Compare Specs"
          >
            <Layers className="w-4 h-4" />
          </button>
        </div>

        {/* Live Visitor Indicator */}
        <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-zinc-950/80 border border-zinc-800 backdrop-blur-md text-[10px] text-zinc-300 flex items-center gap-1.5">
          <Eye className="w-3 h-3 text-amber-400" />
          <span>{12 + Math.floor(product.id.length * 2.5)} viewing</span>
        </div>
      </div>

      {/* Card Info Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px] text-zinc-400">
            <span className="capitalize text-amber-400 font-semibold">{product.category}</span>
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-3 h-3 fill-current" />
              <span className="font-bold">{product.rating}</span>
              <span className="text-zinc-500">({product.reviewsCount})</span>
            </div>
          </div>

          <h3 className="font-bold text-sm text-white line-clamp-1 group-hover:text-amber-300 transition">
            {product.title}
          </h3>
          <p className="text-xs text-zinc-400 line-clamp-1">
            {product.subtitle}
          </p>
        </div>

        {/* Color Swatch Selector */}
        {product.variants?.colors && product.variants.colors.length > 0 && (
          <div className="flex items-center gap-1.5 pt-1">
            {product.variants.colors.map((c, i) => (
              <button
                key={c.name}
                onClick={(e) => { e.stopPropagation(); setSelectedColorIndex(i); }}
                style={{ backgroundColor: c.hex }}
                className={`w-3.5 h-3.5 rounded-full border ${selectedColorIndex === i ? 'ring-2 ring-amber-400 border-white scale-110' : 'border-zinc-700'}`}
                title={c.name}
              />
            ))}
            <span className="text-[10px] text-zinc-500 ml-1">
              {product.variants.colors[selectedColorIndex]?.name}
            </span>
          </div>
        )}

        {/* Price & Quick Add Button */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80">
          <div>
            <span className="text-base font-extrabold text-white">${product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-zinc-500 line-through ml-2">${product.originalPrice}</span>
            )}
          </div>

          <button
            onClick={handleQuickAdd}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${addedAnimation ? 'bg-emerald-500 text-zinc-950' : 'bg-zinc-800 hover:bg-amber-500 hover:text-zinc-950 text-white'}`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-3.5 h-3.5" /> Added!
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" /> Quick Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
