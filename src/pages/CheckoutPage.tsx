import React, { useState } from 'react';
import { ShieldCheck, Lock, CheckCircle2, Truck, RefreshCw, ShoppingBag } from 'lucide-react';
import { CartItem, Order } from '../types';
import { mockCreateOrder } from '../data/mockApi';

interface CheckoutPageProps {
  cart: CartItem[];
  onClearCart: () => void;
  onNavigateToTracking: () => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  cart,
  onClearCart,
  onNavigateToTracking
}) => {
  const [formData, setFormData] = useState({
    name: 'Alexander Wright',
    email: 'alex.wright@executive.co',
    address: '450 Sutter St, San Francisco, CA 94108',
    card: '•••• •••• •••• 4242'
  });

  const [loading, setLoading] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await mockCreateOrder({
        customerName: formData.name,
        customerEmail: formData.email,
        shippingAddress: formData.address,
        items: cart.map(c => ({
          productTitle: c.product.title,
          quantity: c.quantity,
          price: c.product.price,
          color: c.selectedColor
        })),
        totalAmount: subtotal
      });

      if (data.success && data.order) {
        setCompletedOrder(data.order);
        onClearCart();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  if (completedOrder) {
    return (
      <div className="bg-zinc-950 text-white min-h-screen py-16 flex items-center justify-center p-4">
        <div className="max-w-xl w-full p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6 text-center shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
              ⚡ Routed to Regional Fulfillment Hub
            </span>
            <h2 className="text-2xl font-bold text-white pt-1">Payment Confirmed & Order Dispatched!</h2>
            <p className="text-xs text-zinc-400">Order Ref: <strong className="text-amber-400">{completedOrder.id}</strong></p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-left space-y-2">
            <div className="flex justify-between text-zinc-400 font-medium">
              <span>Customer Name:</span>
              <span className="text-white font-bold">{completedOrder.customerName}</span>
            </div>
            <div className="flex justify-between text-zinc-400 font-medium">
              <span>Shipping Address:</span>
              <span className="text-white font-bold">{completedOrder.shippingAddress}</span>
            </div>
            <div className="flex justify-between text-zinc-400 font-medium">
              <span>Tracking Number:</span>
              <span className="text-emerald-400 font-bold">{completedOrder.trackingNumber}</span>
            </div>
            <div className="flex justify-between text-zinc-400 font-medium">
              <span>Fulfillment Node:</span>
              <span className="text-amber-400 font-bold">{completedOrder.supplierName}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onNavigateToTracking}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 transition"
            >
              <Truck className="w-4 h-4" /> Track Package Live
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-950 text-white min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Lock className="w-3.5 h-3.5" />
            256-Bit SSL Encrypted Express Checkout
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">Complete Your Order</h1>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-16 text-zinc-500 text-sm space-y-2">
            <p>Your shopping bag is empty.</p>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Form Fields (7 cols) */}
            <div className="md:col-span-7 space-y-6 p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-400" /> Shipping & Delivery Address
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-zinc-400 font-semibold mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 font-semibold mb-1">Email Address for Live Tracking Notifications</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 font-semibold mb-1">Shipping Destination Street Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>

                <div className="pt-2">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Payment Card Info (Simulation)
                  </h4>
                  <input
                    type="text"
                    value={formData.card}
                    onChange={e => setFormData({ ...formData, card: e.target.value })}
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
              </div>
            </div>

            {/* Summary & Submit (5 cols) */}
            <div className="md:col-span-5 space-y-6 p-6 rounded-3xl bg-zinc-900 border border-zinc-800 h-fit">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-amber-400" /> Order Summary ({cart.length})
              </h3>

              <div className="space-y-3 text-xs max-h-48 overflow-y-auto">
                {cart.map(c => (
                  <div key={c.product.id} className="flex justify-between items-center text-zinc-300">
                    <div className="line-clamp-1 pr-2">
                      <span className="font-bold text-white">{c.product.title}</span> x {c.quantity}
                    </div>
                    <span className="font-bold text-amber-400">${c.product.price * c.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-800 space-y-2 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Express Air Freight</span>
                  <span className="text-emerald-400 font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-base font-black text-white pt-2 border-t border-zinc-800">
                  <span>Total Amount</span>
                  <span className="text-amber-400">${subtotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition disabled:opacity-50 shadow-xl shadow-amber-500/20"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Authorize Payment & Complete Order'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
