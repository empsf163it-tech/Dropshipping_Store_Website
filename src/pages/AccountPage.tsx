import React, { useState } from 'react';
import { User, Package, MapPin, Heart, ShieldCheck, Truck } from 'lucide-react';
import { PageView } from '../types';

interface AccountPageProps {
  onNavigate: (page: PageView) => void;
}

export const AccountPage: React.FC<AccountPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'addresses' | 'security'>('orders');

  return (
    <div className="bg-zinc-950 text-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {/* User Card */}
        <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-amber-500 text-zinc-950 font-black text-xl flex items-center justify-center">
            AW
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Alexander Wright</h2>
            <p className="text-xs text-zinc-400">VIP Founding Member • alex.wright@executive.co</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 p-1.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs font-semibold w-fit">
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-xl transition ${activeTab === 'orders' ? 'bg-amber-500 text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'}`}
          >
            Order History & Logistics
          </button>
          <button
            onClick={() => setActiveTab('addresses')}
            className={`px-4 py-2 rounded-xl transition ${activeTab === 'addresses' ? 'bg-amber-500 text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'}`}
          >
            Shipping Addresses
          </button>
        </div>

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Package className="w-4 h-4 text-amber-400" /> Recent DropFlow Orders
            </h3>

            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3 text-xs">
              <div className="flex justify-between items-center text-zinc-400 border-b border-zinc-800/80 pb-2">
                <div>
                  <span>Order ID: <strong className="text-white">DFL-904821</strong></span>
                  <span className="text-zinc-500 ml-3">Aug 4, 2026</span>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                  In Transit via DHL Air
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-white">Horizon Active Noise-Cancelling Headphones (Midnight Black)</p>
                  <p className="text-zinc-400 text-[11px]">Stockholm Hub Dispatch</p>
                </div>
                <span className="font-bold text-amber-400">$349.00</span>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => onNavigate('tracking')}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-xl text-xs flex items-center gap-1.5 transition"
                >
                  <Truck className="w-3.5 h-3.5" /> Track Package Live
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Addresses Tab */}
        {activeTab === 'addresses' && (
          <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" /> Saved Delivery Destinations
            </h3>

            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs space-y-1">
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-bold text-[10px]">DEFAULT ADDRESS</span>
              <p className="font-bold text-white pt-1">Alexander Wright</p>
              <p className="text-zinc-400">450 Sutter St, Suite 1200</p>
              <p className="text-zinc-400">San Francisco, CA 94108, United States</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
