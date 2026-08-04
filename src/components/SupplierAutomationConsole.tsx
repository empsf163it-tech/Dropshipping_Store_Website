import React, { useEffect, useState } from 'react';
import { 
  Server, 
  RefreshCw, 
  Zap, 
  DollarSign, 
  CheckCircle, 
  Truck, 
  Activity, 
  Layers, 
  Lock,
  Plus
} from 'lucide-react';
import { SUPPLIER_HUBS } from '../data/storeData';
import { mockFetchOrders, mockCreateOrder, mockInventorySync } from '../data/mockApi';
import { Order } from '../types';

export const SupplierAutomationConsole: React.FC = () => {
  const [syncing, setSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState('Just now');
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState<'inventory' | 'orders' | 'margins' | 'rules'>('inventory');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await mockFetchOrders();
      if (data.success) {
        setOrders(data.orders);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleForceSync = async () => {
    setSyncing(true);
    try {
      const data = await mockInventorySync();
      if (data.success) {
        setLastSyncTime(new Date().toLocaleTimeString());
      }
    } catch (e) {
      console.error(e);
    } finally {
      setTimeout(() => setSyncing(false), 800);
    }
  };

  const handleSimulateOrder = async () => {
    try {
      const data = await mockCreateOrder({
        customerName: 'Sophie Martinez',
        customerEmail: 'sophie.m@designstudio.io',
        shippingAddress: '742 Evergreen Terrace, Springfield, OR',
        items: [
          { productTitle: 'Aura Ambient Ceramic Lamp', quantity: 1, price: 189 }
        ],
        totalAmount: 189
      });
      if (data.success) {
        fetchOrders();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const totalRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);
  const totalMargin = orders.reduce((sum, o) => sum + (o.marginAmount || Math.round(o.totalAmount * 0.58)), 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8 text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            Automated Supply Chain Hub • 100% Synced
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">Real-Time Inventory & Order Processing Console</h1>
          <p className="text-sm text-zinc-400 max-w-2xl">
            Live multi-warehouse inventory telemetry, automated purchase order webhooks, tracking ID routing, and margin optimization.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleSimulateOrder}
            className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs flex items-center gap-2 transition shadow-lg shadow-amber-500/10"
          >
            <Plus className="w-4 h-4" />
            Simulate Customer Order
          </button>
          <button
            onClick={handleForceSync}
            disabled={syncing}
            className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs flex items-center gap-2 transition border border-zinc-700 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${syncing ? 'animate-spin text-amber-400' : ''}`} />
            {syncing ? 'Syncing APIs...' : 'Force Global Resync'}
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-medium">
            <span>Global Supplier API Health</span>
            <Activity className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-emerald-400">99.9% Operational</div>
          <p className="text-[11px] text-zinc-500">5 Warehouses (US, EU, ASIA)</p>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-medium">
            <span>Active Tracked SKUs</span>
            <Layers className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-white">1,272 SKUs</div>
          <p className="text-[11px] text-zinc-500">Updated {lastSyncTime}</p>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-medium">
            <span>Automated Orders Processed</span>
            <Truck className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white">{orders.length + 148} Orders</div>
          <p className="text-[11px] text-zinc-500">Avg. Dispatch: 8.4 Hours</p>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-medium">
            <span>Net Profit Margin (DTC)</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-emerald-400">${totalMargin} (59.2%)</div>
          <p className="text-[11px] text-zinc-500">Gross Vol: ${totalRevenue}</p>
        </div>
      </div>

      {/* Console Tabs */}
      <div className="flex border-b border-zinc-800 gap-6 text-sm font-semibold">
        {[
          { id: 'inventory', label: 'Supplier Hub Telemetry' },
          { id: 'orders', label: 'Automated Order Pipelines' },
          { id: 'margins', label: 'Margin & Profit Analyzer' },
          { id: 'rules', label: 'Fulfillment Rules & Webhooks' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`pb-3 border-b-2 transition ${activeTab === tab.id ? 'border-amber-400 text-amber-400' : 'border-transparent text-zinc-400 hover:text-white'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Supplier Telemetry */}
      {activeTab === 'inventory' && (
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Server className="w-5 h-5 text-amber-400" />
              Connected Global Fulfillment Networks
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-zinc-300">
                <thead className="bg-zinc-950 text-zinc-400 uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Supplier / Hub</th>
                    <th className="p-3.5">API Health</th>
                    <th className="p-3.5">Synced SKUs</th>
                    <th className="p-3.5">Auto-Fulfill Rate</th>
                    <th className="p-3.5">Avg Dispatch</th>
                    <th className="p-3.5">Carriers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60">
                  {SUPPLIER_HUBS.map(hub => (
                    <tr key={hub.supplierId} className="hover:bg-zinc-800/30 transition">
                      <td className="p-3.5 font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        {hub.supplierName}
                      </td>
                      <td className="p-3.5">
                        <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                          {hub.apiHealth}
                        </span>
                      </td>
                      <td className="p-3.5 font-semibold text-white">{hub.syncedProductsCount} Products</td>
                      <td className="p-3.5 text-emerald-400 font-bold">{hub.autoFulfillSuccessRate}%</td>
                      <td className="p-3.5 text-zinc-300">{hub.averageFulfillmentHours} hrs</td>
                      <td className="p-3.5 text-zinc-400">{hub.connectedCarriers.join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Orders Pipeline */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Truck className="w-5 h-5 text-emerald-400" />
              Live Order Routing Queue ({orders.length})
            </h3>
            {orders.length === 0 ? (
              <p className="text-sm text-zinc-500 py-8 text-center">No active orders in queue. Click "Simulate Customer Order" above!</p>
            ) : (
              <div className="space-y-4">
                {orders.map(order => (
                  <div key={order.id} className="p-5 rounded-xl bg-zinc-950 border border-zinc-800/80 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-amber-400">{order.id}</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                            ⚡ Auto-Routed via Webhook
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1">Customer: {order.customerName} ({order.customerEmail})</p>
                      </div>

                      <div className="text-right">
                        <span className="text-sm font-bold text-white">${order.totalAmount}</span>
                        <p className="text-xs text-emerald-400 font-semibold">Net Profit: +${order.marginAmount}</p>
                      </div>
                    </div>

                    {/* Timeline Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-xs">
                      {order.timeline?.map((step, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800/80 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-zinc-300">{step.title}</span>
                            {step.status === 'completed' && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
                          </div>
                          <p className="text-[10px] text-zinc-400">{step.description}</p>
                          <span className="text-[9px] text-amber-400/80">{step.timestamp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Fulfillment Logs */}
                    <div className="p-3 rounded-lg bg-zinc-900/80 font-mono text-[11px] text-emerald-400/90 space-y-1 border border-zinc-800">
                      {order.fulfillmentLog?.map((log, lIdx) => (
                        <div key={lIdx}>{log}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: Margin Analyzer */}
      {activeTab === 'margins' && (
        <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-emerald-400" />
            Unit Economics & Profitability Calculator
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
              <span className="text-xs text-zinc-400">Average Retail Price</span>
              <div className="text-2xl font-bold text-white">$249.00</div>
              <p className="text-[11px] text-zinc-500">Per unit average customer cart</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
              <span className="text-xs text-zinc-400">Average Supplier COGS</span>
              <div className="text-2xl font-bold text-red-400">$98.00</div>
              <p className="text-[11px] text-zinc-500">Including express air freight</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
              <span className="text-xs text-zinc-400">Net Profit Margin</span>
              <div className="text-2xl font-bold text-emerald-400">$151.00 (60.6%)</div>
              <p className="text-[11px] text-zinc-500">Automated net yield per transaction</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Rules & Webhooks */}
      {activeTab === 'rules' && (
        <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4 text-xs">
          <h3 className="text-lg font-bold flex items-center gap-2 text-white">
            <Lock className="w-5 h-5 text-amber-400" />
            Automated Fulfillment Rules & Supplier Fallbacks
          </h3>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
              <div>
                <h5 className="font-bold text-white">Rule 1: Primary Warehouse Routing</h5>
                <p className="text-zinc-400">Route orders based on nearest postal code and highest inventory count.</p>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/30">ENABLED</span>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
              <div>
                <h5 className="font-bold text-white">Rule 2: Low Stock Auto-Reorder Trigger</h5>
                <p className="text-zinc-400">Automatically trigger supplier reorder PO when stock drops below 10 units.</p>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/30">ENABLED</span>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
              <div>
                <h5 className="font-bold text-white">Rule 3: Tracking ID Customer Webhook Notification</h5>
                <p className="text-zinc-400">Send live SMS/Email with carrier tracking URL as soon as label is scanned.</p>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/30">ENABLED</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
