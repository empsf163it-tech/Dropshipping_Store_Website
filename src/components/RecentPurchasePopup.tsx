import React, { useEffect, useState } from 'react';
import { ShoppingBag, X, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface RecentPurchasePopupProps {
  onSelectProduct: (product: Product) => void;
}

const LOCATIONS = [
  'Tokyo, Japan',
  'Stockholm, Sweden',
  'San Francisco, CA',
  'London, UK',
  'Zurich, Switzerland',
  'Austin, TX',
  'Paris, France',
  'Singapore'
];

const NAMES = [
  'Marcus V.',
  'Elena R.',
  'Kenji S.',
  'Soren L.',
  'Chloe M.',
  'Oliver B.',
  'Aria T.'
];

export const RecentPurchasePopup: React.FC<RecentPurchasePopupProps> = ({ onSelectProduct }) => {
  const [visible, setVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState<{
    name: string;
    location: string;
    product: Product;
    timeAgo: string;
  } | null>(null);

  useEffect(() => {
    // Initial popup after 4s
    const initialTimer = setTimeout(() => {
      triggerRandomPopup();
    }, 4000);

    // Periodic popups every 22s
    const interval = setInterval(() => {
      triggerRandomPopup();
    }, 22000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const triggerRandomPopup = () => {
    const randomProduct = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
    const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
    const randomLocation = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
    const timeAgo = `${Math.floor(1 + Math.random() * 8)}m ago`;

    setCurrentPurchase({
      name: randomName,
      location: randomLocation,
      product: randomProduct,
      timeAgo
    });
    setVisible(true);

    // Auto hide after 6 seconds
    setTimeout(() => {
      setVisible(false);
    }, 6000);
  };

  if (!visible || !currentPurchase) return null;

  return (
    <div className="fixed bottom-5 left-5 z-40 max-w-sm animate-in slide-in-from-bottom-5 duration-300">
      <div 
        onClick={() => onSelectProduct(currentPurchase.product)}
        className="group relative flex items-center gap-3 p-3.5 pr-8 rounded-2xl bg-zinc-900/95 border border-zinc-800 text-white shadow-2xl backdrop-blur-xl cursor-pointer hover:border-zinc-700 transition"
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            setVisible(false);
          }}
          className="absolute top-2 right-2 p-1 text-zinc-500 hover:text-white transition"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="relative flex-shrink-0">
          <img
            src={currentPurchase.product.mainImage}
            alt={currentPurchase.product.title}
            className="w-12 h-12 object-cover rounded-xl bg-zinc-800"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-1 -right-1 p-0.5 rounded-full bg-emerald-500 text-zinc-950">
            <ShieldCheck className="w-3 h-3" />
          </div>
        </div>

        <div className="text-xs space-y-0.5">
          <div className="flex items-center gap-1.5 text-zinc-400 font-medium">
            <span className="font-semibold text-white">{currentPurchase.name}</span> in {currentPurchase.location}
          </div>
          <p className="font-bold text-zinc-100 group-hover:text-amber-400 transition line-clamp-1">
            Purchased {currentPurchase.product.title}
          </p>
          <div className="flex items-center gap-2 text-[10px] text-zinc-500">
            <span>{currentPurchase.timeAgo}</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <ShoppingBag className="w-2.5 h-2.5" /> Verified Purchase
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
