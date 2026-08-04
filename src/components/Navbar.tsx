import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Sparkles, 
  Heart, 
  Layers, 
  User, 
  Zap, 
  Clock, 
  ChevronDown,
  Github
} from 'lucide-react';
import { PageView, Product } from '../types';

interface NavbarProps {
  activePage: PageView;
  onNavigate: (page: PageView) => void;
  cartCount: number;
  wishlistCount: number;
  compareCount: number;
  onOpenCart: () => void;
  onOpenAIConcierge: () => void;
  onOpenCompare: () => void;
  onOpenGitModal: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  cartCount,
  wishlistCount,
  compareCount,
  onOpenCart,
  onOpenAIConcierge,
  onOpenCompare,
  onOpenGitModal,
  products,
  onSelectProduct
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [activeMegamenu, setActiveMegamenu] = useState<'shop' | 'collections' | 'story' | null>(null);

  // Flash Sale Countdown Timer (3 hours loop)
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 48, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 2, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    if (q.trim().length > 1) {
      setIsSearching(true);
      const matches = products.filter(p => 
        p.title.toLowerCase().includes(q.toLowerCase()) || 
        p.category.toLowerCase().includes(q.toLowerCase()) ||
        p.description.toLowerCase().includes(q.toLowerCase())
      );
      setSearchResults(matches);
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-zinc-950/90 border-b border-zinc-800/80 backdrop-blur-xl text-white">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-950 via-zinc-900 to-amber-950 border-b border-amber-500/20 text-zinc-300 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <span className="px-2 py-0.5 rounded bg-amber-500 text-zinc-950 font-black text-[10px] tracking-wider uppercase">
              FLASH SALE
            </span>
            <span className="hidden sm:inline">Up to 25% OFF Studio Series + Free Express Air Shipping</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <div className="flex items-center gap-1 font-mono text-amber-400 font-bold">
              <Clock className="w-3 h-3" />
              <span>
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
            <span className="hidden md:inline text-zinc-600">|</span>
            <button 
              onClick={() => onNavigate('automation-hub')}
              className="hidden md:flex items-center gap-1 text-emerald-400 font-semibold hover:underline"
            >
              <Zap className="w-3 h-3" /> Supplier API Live
            </button>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <button 
              onClick={onOpenGitModal}
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/30 font-bold transition text-[10px]"
            >
              <Github className="w-3 h-3" /> Host on GitHub Pages
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="text-left focus:outline-none"
          >
            <span className="text-2xl font-black tracking-widest bg-gradient-to-r from-white via-zinc-200 to-amber-200 bg-clip-text text-transparent">
              DropFlow
            </span>
            <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase block -mt-1">
              STUDIO & LIVING
            </span>
          </button>
        </div>

        {/* Navigation Links with Hover Megamenu */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-zinc-300">
          <button
            onClick={() => onNavigate('home')}
            className={`hover:text-amber-400 transition ${activePage === 'home' ? 'text-amber-400 font-bold' : ''}`}
          >
            Home
          </button>

          {/* Shop Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveMegamenu('shop')}
            onMouseLeave={() => setActiveMegamenu(null)}
          >
            <button
              onClick={() => onNavigate('shop')}
              className={`flex items-center gap-1 hover:text-amber-400 transition py-2 ${activePage === 'shop' ? 'text-amber-400 font-bold' : ''}`}
            >
              Catalog & Shop <ChevronDown className="w-3 h-3" />
            </button>

            {activeMegamenu === 'shop' && (
              <div className="absolute top-full left-0 w-64 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl text-xs space-y-2 capitalize tracking-normal text-zinc-300 animate-in fade-in slide-in-from-top-2 duration-150">
                <button onClick={() => { onNavigate('shop'); setActiveMegamenu(null); }} className="w-full text-left p-2 rounded-lg hover:bg-zinc-800 hover:text-amber-400 transition">
                  🔥 Best Sellers
                </button>
                <button onClick={() => { onNavigate('flash-sale'); setActiveMegamenu(null); }} className="w-full text-left p-2 rounded-lg hover:bg-zinc-800 hover:text-amber-400 transition">
                  ⚡ Flash Sale (Limited Stock)
                </button>
                <button onClick={() => { onNavigate('bundle-deals'); setActiveMegamenu(null); }} className="w-full text-left p-2 rounded-lg hover:bg-zinc-800 hover:text-amber-400 transition">
                  📦 Frequently Bought Bundles
                </button>
                <button onClick={() => { onNavigate('why-us'); setActiveMegamenu(null); }} className="w-full text-left p-2 rounded-lg hover:bg-zinc-800 hover:text-amber-400 transition">
                  ✨ Why Choose DropFlow
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => onNavigate('collections')}
            className={`hover:text-amber-400 transition ${activePage === 'collections' ? 'text-amber-400 font-bold' : ''}`}
          >
            Collections
          </button>

          <button
            onClick={() => onNavigate('tracking')}
            className={`hover:text-amber-400 transition ${activePage === 'tracking' ? 'text-amber-400 font-bold' : ''}`}
          >
            Order Tracking
          </button>

          <button
            onClick={() => onNavigate('about')}
            className={`hover:text-amber-400 transition ${activePage === 'about' ? 'text-amber-400 font-bold' : ''}`}
          >
            Brand Story
          </button>

          <button
            onClick={() => onNavigate('automation-hub')}
            className={`px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold flex items-center gap-1.5 hover:bg-emerald-500/20 transition ${activePage === 'automation-hub' ? 'ring-2 ring-emerald-400' : ''}`}
          >
            <Zap className="w-3 h-3" /> Supplier Hub
          </button>
        </nav>

        {/* Search & Actions */}
        <div className="flex items-center gap-3">
          {/* Live Search Bar */}
          <div className="relative hidden md:block w-48 lg:w-60">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => handleSearchChange(e.target.value)}
              placeholder="Search catalog..."
              className="w-full pl-9 pr-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-amber-500/50"
            />

            {/* Search Preview Dropdown */}
            {isSearching && (
              <div className="absolute top-full left-0 right-0 mt-2 p-2 rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl z-50 space-y-1">
                {searchResults.length === 0 ? (
                  <p className="p-3 text-xs text-zinc-500 text-center">No items found</p>
                ) : (
                  searchResults.map(p => (
                    <div
                      key={p.id}
                      onClick={() => {
                        onSelectProduct(p);
                        setIsSearching(false);
                        setSearchQuery('');
                      }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800 cursor-pointer transition text-xs"
                    >
                      <img src={p.mainImage} alt={p.title} className="w-8 h-8 object-cover rounded bg-zinc-950" referrerPolicy="no-referrer" />
                      <div>
                        <p className="font-bold text-white line-clamp-1">{p.title}</p>
                        <p className="text-amber-400">${p.price}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* AI Concierge Button */}
          <button
            onClick={onOpenAIConcierge}
            className="p-2 rounded-xl bg-gradient-to-r from-amber-500/10 to-amber-500/20 border border-amber-500/30 text-amber-300 hover:text-white hover:border-amber-400 transition flex items-center gap-1.5 text-xs font-bold"
            title="AI Shopping Concierge"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">AI Gift Finder</span>
          </button>

          {/* Compare Button */}
          <button
            onClick={onOpenCompare}
            className="relative p-2 text-zinc-400 hover:text-white transition rounded-lg hover:bg-zinc-900"
            title="Compare Products"
          >
            <Layers className="w-4 h-4" />
            {compareCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-zinc-950 text-[10px] font-black flex items-center justify-center">
                {compareCount}
              </span>
            )}
          </button>

          {/* Wishlist Button */}
          <button
            onClick={() => onNavigate('wishlist')}
            className="relative p-2 text-zinc-400 hover:text-white transition rounded-lg hover:bg-zinc-900"
            title="Saved Wishlist"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-zinc-950 text-[10px] font-black flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Account Button */}
          <button
            onClick={() => onNavigate('account')}
            className="p-2 text-zinc-400 hover:text-white transition rounded-lg hover:bg-zinc-900"
            title="Customer Account"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold transition flex items-center justify-center shadow-lg shadow-amber-500/10"
            title="Cart Drawer"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white text-zinc-950 text-[11px] font-black flex items-center justify-center shadow">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
