import React, { useState } from 'react';
import { 
  Star, 
  ShoppingBag, 
  Heart, 
  Layers, 
  Check, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  Clock, 
  Award,
  ChevronDown,
  ChevronUp,
  Plus
} from 'lucide-react';
import { Product } from '../types';
import { InteractiveHotspots } from './InteractiveHotspots';
import { BeforeAfterShowcase } from './BeforeAfterShowcase';

interface ProductDetailViewProps {
  product: Product;
  allProducts: Product[];
  onAddToCart: (product: Product, selectedColor?: string) => void;
  onToggleWishlist: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  isWishlisted?: boolean;
  isCompared?: boolean;
  onNavigateToTracking: () => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  allProducts,
  onAddToCart,
  onToggleWishlist,
  onToggleCompare,
  isWishlisted = false,
  isCompared = false,
  onNavigateToTracking,
  onSelectProduct
}) => {
  const [selectedImage, setSelectedImage] = useState(product.mainImage);
  const [selectedColor, setSelectedColor] = useState(product.variants?.colors?.[0]?.name || '');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [openSpecAccordion, setOpenSpecAccordion] = useState(true);

  // Bundle offer product lookup
  const bundleProduct = allProducts.find(p => p.id === product.frequentlyBoughtTogetherId);
  const [bundleChecked, setBundleChecked] = useState(true);

  const handleAddToCart = () => {
    onAddToCart(product, selectedColor);
    if (bundleProduct && bundleChecked) {
      onAddToCart(bundleProduct);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const bundleTotalPrice = bundleProduct && bundleChecked 
    ? Math.round((product.price + bundleProduct.price) * 0.85) 
    : product.price;

  return (
    <div className="bg-zinc-950 text-white min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* Top Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Gallery & Interactive Hotspots (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 aspect-[4/3]">
              <img
                src={selectedImage}
                alt={product.title}
                className="w-full h-full object-cover transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-zinc-950/80 border border-zinc-800 text-amber-400 text-xs font-bold backdrop-blur-md">
                ⚡ Ready for Express Dispatch
              </div>
            </div>

            {/* Gallery Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.gallery?.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-2xl overflow-hidden border-2 flex-shrink-0 transition ${selectedImage === img ? 'border-amber-400 scale-105' : 'border-zinc-800 hover:border-zinc-700'}`}
                >
                  <img src={img} alt={`${product.title} ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>

            {/* Hotspots Component */}
            {product.hotspots && product.hotspots.length > 0 && (
              <div className="pt-6 border-t border-zinc-800/80">
                <InteractiveHotspots
                  image={product.mainImage}
                  hotspots={product.hotspots}
                  productTitle={product.title}
                />
              </div>
            )}
          </div>

          {/* Right: Purchase Control & Specs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Header info */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span className="text-amber-400 font-bold uppercase tracking-wider">{product.category} • {product.collection}</span>
                <div className="flex items-center gap-1 text-amber-400 font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{product.rating}</span>
                  <span className="text-zinc-500">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-white">{product.title}</h1>
              <p className="text-sm text-amber-300/90 font-medium">{product.subtitle}</p>
            </div>

            {/* Price & Scarcity Badge */}
            <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-white">${product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-base text-zinc-500 line-through">${product.originalPrice}</span>
                )}
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                  Save ${(product.originalPrice - product.price).toFixed(0)}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold pt-1">
                <Clock className="w-4 h-4 animate-spin" />
                <span>🔥 Scarcity Alert: Only {product.stockLevel} units remaining in {product.supplier.location}</span>
              </div>
            </div>

            {/* Color Swatches */}
            {product.variants?.colors && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                  Select Color: <span className="text-amber-400">{selectedColor}</span>
                </label>
                <div className="flex gap-3">
                  {product.variants.colors.map(c => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-semibold transition ${selectedColor === c.name ? 'border-amber-400 bg-amber-500/10 text-white' : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white'}`}
                    >
                      <span className="w-3.5 h-3.5 rounded-full border border-zinc-700" style={{ backgroundColor: c.hex }} />
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <p className="text-xs text-zinc-300 leading-relaxed">
              {product.description}
            </p>

            {/* Key Features Bullet List */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Engineered Highlights</h4>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {product.features?.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to Cart Controls */}
            <div className="space-y-3 pt-2">
              <div className="flex gap-3">
                <div className="flex items-center border border-zinc-700 rounded-2xl bg-zinc-900 px-3">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-zinc-400 hover:text-white font-bold p-2">-</button>
                  <span className="px-3 font-bold text-sm text-white">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-zinc-400 hover:text-white font-bold p-2">+</button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-4 px-6 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-xl ${added ? 'bg-emerald-500 text-zinc-950' : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 shadow-amber-500/20'}`}
                >
                  {added ? (
                    <>
                      <Check className="w-5 h-5" /> Added to Bag
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" /> Add to Shopping Bag
                    </>
                  )}
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`flex-1 py-2.5 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition ${isWishlisted ? 'border-amber-400 text-amber-400 bg-amber-500/10' : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white'}`}
                >
                  <Heart className="w-4 h-4 fill-current" />
                  {isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
                </button>

                <button
                  onClick={() => onToggleCompare(product)}
                  className={`flex-1 py-2.5 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition ${isCompared ? 'border-amber-400 text-amber-400 bg-amber-500/10' : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white'}`}
                >
                  <Layers className="w-4 h-4" />
                  {isCompared ? 'Comparing Item' : 'Compare Specs'}
                </button>
              </div>
            </div>

            {/* Live Fulfillment Guarantee Card */}
            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-xs space-y-2">
              <div className="flex items-center justify-between font-bold text-white">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Truck className="w-4 h-4" /> Express Supplier Dispatch
                </span>
                <button onClick={onNavigateToTracking} className="text-[11px] text-amber-400 hover:underline">
                  Track Live Logistics
                </button>
              </div>
              <p className="text-zinc-400">
                Stock is reserved in <strong className="text-white">{product.supplier.name}</strong> ({product.supplier.location}).
                Dispatches via {product.supplier.shippingCarriers.join(', ')} in under {product.supplier.dispatchTimeHours} hours.
              </p>
            </div>
          </div>
        </div>

        {/* Frequently Bought Together Bundle Builder */}
        {bundleProduct && (
          <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h3 className="text-xl font-bold">Frequently Bought Together Bundle</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                SAVE 15%
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Product 1 */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-950 border border-zinc-800 flex-1">
                <img src={product.mainImage} alt={product.title} className="w-16 h-16 object-cover rounded-xl bg-zinc-900" referrerPolicy="no-referrer" />
                <div className="text-xs">
                  <p className="font-bold text-white">{product.title}</p>
                  <p className="text-amber-400 font-bold">${product.price}</p>
                </div>
              </div>

              <Plus className="w-6 h-6 text-zinc-500 flex-shrink-0" />

              {/* Product 2 */}
              <div 
                onClick={() => onSelectProduct(bundleProduct)}
                className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-950 border border-zinc-800 flex-1 cursor-pointer hover:border-zinc-700 transition"
              >
                <img src={bundleProduct.mainImage} alt={bundleProduct.title} className="w-16 h-16 object-cover rounded-xl bg-zinc-900" referrerPolicy="no-referrer" />
                <div className="text-xs">
                  <p className="font-bold text-white line-clamp-1">{bundleProduct.title}</p>
                  <p className="text-amber-400 font-bold">${bundleProduct.price}</p>
                </div>
              </div>

              {/* Bundle Price & Add CTA */}
              <div className="p-4 rounded-2xl bg-zinc-950 border border-amber-500/30 space-y-2 flex-shrink-0 min-w-[220px]">
                <div className="text-xs font-semibold text-zinc-400">Combined Bundle Price:</div>
                <div className="text-2xl font-black text-amber-400">${bundleTotalPrice} <span className="text-xs text-zinc-500 line-through">${product.price + bundleProduct.price}</span></div>
                <button
                  onClick={handleAddToCart}
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs transition"
                >
                  Buy 2-Item Bundle (-15%)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Before & After Comparison */}
        {product.beforeAfter && (
          <BeforeAfterShowcase
            beforeLabel={product.beforeAfter.beforeLabel}
            beforeImage={product.beforeAfter.beforeImage}
            beforeDesc={product.beforeAfter.beforeDesc}
            afterLabel={product.beforeAfter.afterLabel}
            afterImage={product.beforeAfter.afterImage}
            afterDesc={product.beforeAfter.afterDesc}
          />
        )}

        {/* Specs Accordion */}
        <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4">
          <button
            onClick={() => setOpenSpecAccordion(!openSpecAccordion)}
            className="w-full flex items-center justify-between text-left text-lg font-bold"
          >
            <span>Technical Specifications & Materials</span>
            {openSpecAccordion ? <ChevronUp className="w-5 h-5 text-amber-400" /> : <ChevronDown className="w-5 h-5 text-amber-400" />}
          </button>

          {openSpecAccordion && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-zinc-800 text-xs">
              {product.specs?.map((spec, i) => (
                <div key={i} className="flex justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-zinc-400 font-medium">{spec.label}</span>
                  <span className="font-bold text-white">{spec.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
