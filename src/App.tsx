import React, { useState } from 'react';
import { PageView, Product, CartItem } from './types';
import { PRODUCTS } from './data/products';

// Global Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroBanner } from './components/HeroBanner';
import { BentoGrid } from './components/BentoGrid';
import { TrendingProducts } from './components/TrendingProducts';
import { ProductDetailView } from './components/ProductDetailView';
import { AIFinderModal } from './components/AIFinderModal';
import { FloatingCartDrawer } from './components/FloatingCartDrawer';
import { CompareProductsModal } from './components/CompareProductsModal';
import { RecentPurchasePopup } from './components/RecentPurchasePopup';
import { SupplierAutomationConsole } from './components/SupplierAutomationConsole';
import { LiveOrderTracker } from './components/LiveOrderTracker';


// Pages
import { ShopCatalogPage } from './pages/ShopCatalogPage';
import { AboutBrandPage } from './pages/AboutBrandPage';
import { TrustPages } from './pages/TrustPages';
import { CommunityPages } from './pages/CommunityPages';
import { BlogPage } from './pages/BlogPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { AccountPage } from './pages/AccountPage';

export function App() {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart, Wishlist, Compare State
  const [cart, setCart] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1, selectedColor: 'Midnight Black' }
  ]);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['aura-ceramic-lamp']);
  const [compareIds, setCompareIds] = useState<string[]>(['horizon-anc-headphones', 'starlight-magsafe-powerbank']);

  // Modals
  const [isAIConciergeOpen, setIsAIConciergeOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);


  // Navigation Helper
  const handleNavigate = (page: PageView) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setActivePage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart Operations
  const handleAddToCart = (product: Product, selectedColor?: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1, selectedColor: selectedColor || product.variants?.colors?.[0]?.name }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart(prev => prev.map(i => i.product.id === productId ? { ...i, quantity } : i));
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart(prev => prev.filter(i => i.product.id !== productId));
  };

  // Wishlist & Compare Toggles
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds(prev => 
      prev.includes(product.id) ? prev.filter(id => id !== product.id) : [...prev, product.id]
    );
  };

  const handleToggleCompare = (product: Product) => {
    setCompareIds(prev =>
      prev.includes(product.id) ? prev.filter(id => id !== product.id) : [...prev, product.id]
    );
  };

  const comparedProducts = PRODUCTS.filter(p => compareIds.includes(p.id));

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased selection:bg-amber-500 selection:text-zinc-950 flex flex-col justify-between">
      {/* Top Navbar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlistIds.length}
        compareCount={compareIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAIConcierge={() => setIsAIConciergeOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}

        products={PRODUCTS}
        onSelectProduct={handleSelectProduct}
      />

      {/* Main Page View Routing */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            <HeroBanner
              onNavigate={handleNavigate}
              onOpenAIConcierge={() => setIsAIConciergeOpen(true)}
            />
            <BentoGrid
              products={PRODUCTS}
              onSelectProduct={handleSelectProduct}
            />
            <TrendingProducts
              products={PRODUCTS}
              onSelectProduct={handleSelectProduct}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              onToggleCompare={handleToggleCompare}
              wishlistIds={wishlistIds}
              compareIds={compareIds}
            />
          </>
        )}

        {(activePage === 'shop' || activePage === 'collections' || activePage === 'flash-sale' || activePage === 'bundle-deals' || activePage === 'why-us') && (
          <ShopCatalogPage
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onToggleCompare={handleToggleCompare}
            wishlistIds={wishlistIds}
            compareIds={compareIds}
          />
        )}

        {activePage === 'product-detail' && selectedProduct && (
          <ProductDetailView
            product={selectedProduct}
            allProducts={PRODUCTS}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onToggleCompare={handleToggleCompare}
            isWishlisted={wishlistIds.includes(selectedProduct.id)}
            isCompared={compareIds.includes(selectedProduct.id)}
            onNavigateToTracking={() => handleNavigate('tracking')}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {activePage === 'about' && <AboutBrandPage />}
        
        {(activePage === 'shipping' || activePage === 'returns-warranty' || activePage === 'faq') && (
          <TrustPages />
        )}

        {activePage === 'community' && <CommunityPages />}

        {activePage === 'blog' && <BlogPage />}

        {activePage === 'tracking' && <LiveOrderTracker />}

        {activePage === 'automation-hub' && <SupplierAutomationConsole />}

        {activePage === 'checkout' && (
          <CheckoutPage
            cart={cart}
            onClearCart={() => setCart([])}
            onNavigateToTracking={() => handleNavigate('tracking')}
          />
        )}

        {activePage === 'account' && <AccountPage onNavigate={handleNavigate} />}

        {activePage === 'wishlist' && (
          <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
            <h1 className="text-3xl font-bold">Your Saved Wishlist ({wishlistIds.length})</h1>
            {wishlistIds.length === 0 ? (
              <p className="text-zinc-500 text-xs">No saved items in your wishlist.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRODUCTS.filter(p => wishlistIds.includes(p.id)).map(p => (
                  <div key={p.id} className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
                    <img src={p.mainImage} alt={p.title} className="w-full h-40 object-cover rounded-xl bg-zinc-950" referrerPolicy="no-referrer" />
                    <h4 className="font-bold text-sm text-white line-clamp-1">{p.title}</h4>
                    <p className="text-amber-400 font-bold">${p.price}</p>
                    <button
                      onClick={() => handleAddToCart(p)}
                      className="w-full py-2 bg-amber-500 text-zinc-950 font-bold text-xs rounded-xl"
                    >
                      Move to Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Interactive Popups & Drawers */}
      <RecentPurchasePopup products={PRODUCTS} />

      <AIFinderModal
        isOpen={isAIConciergeOpen}
        onClose={() => setIsAIConciergeOpen(false)}
        onSelectProduct={handleSelectProduct}
      />

      <FloatingCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => handleNavigate('checkout')}
      />

      <CompareProductsModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        products={comparedProducts}
        onAddToCart={handleAddToCart}
        onRemoveFromCompare={id => setCompareIds(prev => prev.filter(x => x !== id))}
      />


    </div>
  );
}

export default App;
