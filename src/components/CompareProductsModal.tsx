import React from 'react';
import { X, Check, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface CompareProductsModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onAddToCart: (product: Product) => void;
  onRemoveFromCompare: (productId: string) => void;
}

export const CompareProductsModal: React.FC<CompareProductsModalProps> = ({
  isOpen,
  onClose,
  products,
  onAddToCart,
  onRemoveFromCompare
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 text-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800">
          <div>
            <h3 className="text-lg font-bold">Side-by-Side Hardware Comparison</h3>
            <p className="text-xs text-zinc-400">Comparing {products.length} DropFlow DTC Flagship Items</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 rounded-lg hover:text-white hover:bg-zinc-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Table */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {products.length === 0 ? (
            <div className="py-12 text-center text-zinc-500 text-sm space-y-2">
              <p>No products selected for comparison.</p>
              <p className="text-xs text-zinc-600">Click "Compare" on any product card in the catalog to add items here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 bg-zinc-950/60 w-1/4 text-zinc-400 font-semibold uppercase tracking-wider">Features & Specs</th>
                    {products.map(prod => (
                      <th key={prod.id} className="p-4 bg-zinc-950 w-1/3 min-w-[220px] align-top">
                        <div className="space-y-3">
                          <button
                            onClick={() => onRemoveFromCompare(prod.id)}
                            className="text-[10px] text-zinc-500 hover:text-red-400 flex items-center gap-1"
                          >
                            <X className="w-3 h-3" /> Remove
                          </button>
                          <img
                            src={prod.mainImage}
                            alt={prod.title}
                            className="w-20 h-20 object-cover rounded-xl bg-zinc-800"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h4 className="font-bold text-white text-sm line-clamp-1">{prod.title}</h4>
                            <p className="text-amber-400 font-bold text-sm mt-0.5">${prod.price}</p>
                          </div>
                          <button
                            onClick={() => onAddToCart(prod)}
                            className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs rounded-lg flex items-center justify-center gap-1 transition"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            Add to Cart
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80">
                  <tr>
                    <td className="p-4 font-bold text-zinc-400 bg-zinc-950/30">Category & Collection</td>
                    {products.map(p => (
                      <td key={p.id} className="p-4 text-zinc-200 capitalize">{p.category} ({p.collection})</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-zinc-400 bg-zinc-950/30">Material & Build</td>
                    {products.map(p => (
                      <td key={p.id} className="p-4 text-zinc-300">{p.features?.[1] || 'Anodized Premium Grade'}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-zinc-400 bg-zinc-950/30">Stock & Dispatch Status</td>
                    {products.map(p => (
                      <td key={p.id} className="p-4 font-semibold text-emerald-400 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Ready for Auto-Dispatch ({p.stockLevel} units left)
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-zinc-400 bg-zinc-950/30">Supplier Hub</td>
                    {products.map(p => (
                      <td key={p.id} className="p-4 text-zinc-400">{p.supplier.name} ({p.supplier.location})</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-zinc-400 bg-zinc-950/30">Warranty & Guarantee</td>
                    {products.map(p => (
                      <td key={p.id} className="p-4 text-zinc-300">2-Year Full Global Warranty + 30-Day Returns</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
