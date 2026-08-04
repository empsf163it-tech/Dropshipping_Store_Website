import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface FloatingCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
}

export const FloatingCartDrawer: React.FC<FloatingCartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 150;
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const total = Math.max(0, subtotal - appliedDiscount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === 'DROPFLOW10' || promoCode.toUpperCase() === 'WELCOME') {
      setAppliedDiscount(Math.round(subtotal * 0.1));
    } else {
      alert('Invalid promo code. Try "DROPFLOW10" for 10% off!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-950 border-l border-zinc-800 text-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h3 className="text-base font-bold tracking-wide">Your Shopping Bag ({cart.reduce((s, i) => s + i.quantity, 0)})</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="p-4 bg-zinc-900 border-b border-zinc-800/80 text-xs space-y-2">
            <div className="flex items-center justify-between font-semibold">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <Truck className="w-4 h-4 text-emerald-400" />
                {amountToFreeShipping === 0 ? (
                  <span className="text-emerald-400 font-bold">🎉 You unlocked Free Express Air Shipping!</span>
                ) : (
                  <span>Add <strong className="text-amber-400">${amountToFreeShipping.toFixed(0)}</strong> more for Free Shipping</span>
                )}
              </span>
              <span className="text-zinc-500">{freeShippingProgress.toFixed(0)}%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="py-20 text-center space-y-3 text-zinc-500">
                <ShoppingBag className="w-12 h-12 mx-auto stroke-1 text-zinc-600" />
                <p className="text-sm">Your shopping cart is currently empty.</p>
                <p className="text-xs text-zinc-600">Explore our Studio & Living collections to add items.</p>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.product.id} className="flex gap-4 p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <img
                    src={item.product.mainImage}
                    alt={item.product.title}
                    className="w-20 h-20 object-cover rounded-xl bg-zinc-800"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 flex flex-col justify-between text-xs">
                    <div>
                      <div className="flex justify-between font-bold text-white">
                        <h4 className="line-clamp-1">{item.product.title}</h4>
                        <span>${item.product.price * item.quantity}</span>
                      </div>
                      <p className="text-[11px] text-amber-400 font-medium mt-0.5">{item.product.subtitle}</p>
                      {item.selectedColor && (
                        <span className="text-[10px] text-zinc-400 block mt-1">Color: {item.selectedColor}</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-zinc-700 rounded-lg bg-zinc-950">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2.5 py-1 text-zinc-400 hover:text-white"
                        >
                          -
                        </button>
                        <span className="px-2 font-semibold text-white">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2.5 py-1 text-zinc-400 hover:text-white"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-zinc-500 hover:text-red-400 p-1 transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-zinc-800 bg-zinc-950/80 space-y-4 text-xs">
              {/* Promo code */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={e => setPromoCode(e.target.value)}
                  placeholder="Promo code (e.g. DROPFLOW10)"
                  className="flex-1 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-amber-500/50 uppercase"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg transition"
                >
                  Apply
                </button>
              </form>

              {/* Math summary */}
              <div className="space-y-1.5 text-zinc-300 font-medium">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount (DROPFLOW10)</span>
                    <span>-${appliedDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Express Air Shipping</span>
                  <span className="text-emerald-400 font-semibold">{amountToFreeShipping === 0 ? 'FREE' : '$12.00'}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-zinc-800 text-sm font-bold text-white">
                  <span>Total Amount</span>
                  <span className="text-amber-400">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => {
                  onProceedToCheckout();
                  onClose();
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-extrabold text-sm tracking-wide flex items-center justify-center gap-2 transition shadow-lg shadow-amber-500/20"
              >
                Proceed to Secure Checkout
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-zinc-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 256-Bit SSL Encrypted
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" /> 30-Day Money-Back
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
