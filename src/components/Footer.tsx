import React, { useState } from 'react';
import { ShieldCheck, Truck, Award, Zap, ArrowRight, CheckCircle2, Github } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenGitModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenGitModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800/80 text-xs">
      {/* Top Value Banner */}
      <div className="border-b border-zinc-800/80 py-8 px-4 bg-zinc-900/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Express Air Dispatch</h4>
              <p className="text-zinc-400 text-[11px]">Free shipping on orders over $150</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Automated Supply Chain</h4>
              <p className="text-zinc-400 text-[11px]">Live telemetry & instant supplier PO</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">2-Year Global Warranty</h4>
              <p className="text-zinc-400 text-[11px]">Full hardware replacement coverage</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">30-Day Money-Back</h4>
              <p className="text-zinc-400 text-[11px]">Hassle-free returns & prepaid label</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand Info & Newsletter (Col 1 & 2) */}
        <div className="lg:col-span-2 space-y-4">
          <div>
            <span className="text-2xl font-black tracking-widest bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              DropFlow
            </span>
            <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase block">
              STUDIO & LIVING DTC ARCHITECTURE
            </span>
          </div>

          <p className="text-zinc-400 text-xs max-w-sm leading-relaxed">
            Reinventing DTC e-commerce through beryllium acoustic engineering, circadian ambient lighting, and global express fulfillment.
          </p>

          {/* Newsletter Form */}
          <div className="space-y-2 pt-2">
            <span className="font-bold text-white uppercase tracking-wider text-[11px] block">
              Subscribe for VIP Early Releases & 10% OFF
            </span>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-2 font-semibold text-xs">
                <CheckCircle2 className="w-4 h-4" /> Welcome to DropFlow! Use code <strong className="text-white">DROPFLOW10</strong> at checkout.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="flex-1 px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-amber-500/50"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs rounded-xl flex items-center gap-1 transition"
                >
                  Join <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Shop Pages */}
        <div className="space-y-3">
          <h4 className="font-bold text-white uppercase tracking-wider text-xs">Shop & Conversion</h4>
          <ul className="space-y-2 text-zinc-400">
            <li><button onClick={() => onNavigate('shop')} className="hover:text-amber-400 transition">Catalog & All Products</button></li>
            <li><button onClick={() => onNavigate('flash-sale')} className="hover:text-amber-400 transition">Flash Sale (Limited Time)</button></li>
            <li><button onClick={() => onNavigate('bundle-deals')} className="hover:text-amber-400 transition">Frequently Bought Bundles</button></li>
            <li><button onClick={() => onNavigate('why-us')} className="hover:text-amber-400 transition">Why Choose DropFlow</button></li>
          </ul>
        </div>

        {/* Trust & Support */}
        <div className="space-y-3">
          <h4 className="font-bold text-white uppercase tracking-wider text-xs">Trust & Support</h4>
          <ul className="space-y-2 text-zinc-400">
            <li><button onClick={() => onNavigate('tracking')} className="hover:text-amber-400 transition">Live Order Tracking</button></li>
            <li><button onClick={() => onNavigate('shipping')} className="hover:text-amber-400 transition">Shipping & Delivery Timelines</button></li>
            <li><button onClick={() => onNavigate('returns-warranty')} className="hover:text-amber-400 transition">Returns & 2-Year Warranty</button></li>
            <li><button onClick={() => onNavigate('faq')} className="hover:text-amber-400 transition">Customer FAQ</button></li>
          </ul>
        </div>

        {/* Brand & Automation */}
        <div className="space-y-3">
          <h4 className="font-bold text-white uppercase tracking-wider text-xs">Story & Deployment</h4>
          <ul className="space-y-2 text-zinc-400">
            <li><button onClick={() => onNavigate('about')} className="hover:text-amber-400 transition">Our Story & Mission</button></li>
            <li><button onClick={() => onNavigate('community')} className="hover:text-amber-400 transition">Customer Gallery & Reviews</button></li>
            <li><button onClick={() => onNavigate('blog')} className="hover:text-amber-400 transition">Circadian & Focus Blog</button></li>
            <li><button onClick={() => onNavigate('automation-hub')} className="text-emerald-400 font-bold hover:underline flex items-center gap-1"><Zap className="w-3 h-3" /> Supplier Console</button></li>
            <li>
              <button onClick={onOpenGitModal} className="text-amber-400 font-bold hover:underline flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5" /> Deploy to GitHub Pages
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-zinc-900 py-6 px-4 text-center text-zinc-500 text-[11px]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} DropFlow Studio & Living Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-zinc-400">256-Bit SSL Encrypted</span>
            <span>•</span>
            <span className="text-zinc-400">Visa • Mastercard • Apple Pay • Google Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
