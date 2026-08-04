import React, { useState } from 'react';
import { Search, MapPin, Truck, CheckCircle2, ShieldCheck, RefreshCw } from 'lucide-react';

export const LiveOrderTracker: React.FC = () => {
  const [searchId, setSearchId] = useState('DFL-904821');
  const [searching, setSearching] = useState(false);
  const [trackingData, setTrackingData] = useState<{
    id: string;
    customer: string;
    status: string;
    carrier: string;
    trackingNumber: string;
    estimatedDelivery: string;
    origin: string;
    destination: string;
    steps: { title: string; desc: string; time: string; completed: boolean }[];
  }>({
    id: 'DFL-904821',
    customer: 'Alexander Wright',
    status: 'In Transit via Air Express',
    carrier: 'DHL Express Airway',
    trackingNumber: 'DHL-EXPRESS-992014812',
    estimatedDelivery: 'Tomorrow by 3:00 PM',
    origin: 'Stockholm Arlanda Airport (ARN)',
    destination: 'San Francisco, CA (SFO)',
    steps: [
      { title: 'Order Payment Confirmed', desc: 'Authorized via 256-Bit Encrypted DropFlow Gateway', time: 'Aug 4, 10:14 AM', completed: true },
      { title: 'Routed to Stockholm Hub', desc: 'Supplier PO created and confirmed', time: 'Aug 4, 10:15 AM', completed: true },
      { title: 'Airway Bill & Express Label Created', desc: 'Package scanned at Stockholm Air Freight Terminal', time: 'Aug 4, 11:30 AM', completed: true },
      { title: 'Customs & Duty Clearance Cleared', desc: 'Pre-cleared with zero import fees for buyer', time: 'Aug 4, 02:45 PM', completed: true },
      { title: 'Out for Last-Mile Courier Delivery', desc: 'Courier vehicle dispatched to destination address', time: 'Estimated Aug 5, 09:00 AM', completed: false }
    ]
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
      setTrackingData(prev => ({
        ...prev,
        id: searchId.toUpperCase()
      }));
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-white">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
          <Truck className="w-3.5 h-3.5 animate-bounce" />
          Real-Time Global Logistics Telemetry
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Live Order & Package Tracker</h1>
        <p className="text-xs text-zinc-400 max-w-lg mx-auto">
          Track your DropFlow order in real-time as it moves from our supplier warehouses straight to your door.
        </p>
      </div>

      {/* Search Input Form */}
      <form onSubmit={handleSearch} className="flex gap-2 max-w-xl mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            value={searchId}
            onChange={e => setSearchId(e.target.value)}
            placeholder="Enter Order ID (e.g. DFL-904821) or Tracking #"
            className="w-full pl-11 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50"
          />
        </div>
        <button
          type="submit"
          disabled={searching}
          className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs rounded-xl flex items-center gap-2 transition disabled:opacity-50"
        >
          {searching ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Track Order'}
        </button>
      </form>

      {/* Main Tracking Card */}
      <div className="p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-8 backdrop-blur-xl">
        {/* Status Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-zinc-950 border border-zinc-800">
          <div>
            <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Current Package Status</span>
            <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2 mt-0.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              {trackingData.status}
            </h3>
            <p className="text-xs text-zinc-400 mt-1">Carrier: <span className="text-white font-semibold">{trackingData.carrier}</span> ({trackingData.trackingNumber})</p>
          </div>

          <div className="sm:text-right border-t sm:border-t-0 border-zinc-800 pt-3 sm:pt-0">
            <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Estimated Delivery</span>
            <div className="text-base font-bold text-amber-300">{trackingData.estimatedDelivery}</div>
            <span className="text-[11px] text-emerald-400 flex items-center sm:justify-end gap-1 mt-0.5">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% On-Time Guarantee
            </span>
          </div>
        </div>

        {/* Origin / Destination Map Indicator */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900 border border-zinc-800/80 text-xs text-zinc-300">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <div>
              <span className="text-[10px] text-zinc-500 block uppercase font-bold">Origin Warehouse</span>
              <span className="font-bold text-white">{trackingData.origin}</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-zinc-600">
            - - - - - - - <Truck className="w-4 h-4 text-emerald-400" /> - - - - - - -
          </div>
          <div className="flex items-center gap-2 text-right">
            <div>
              <span className="text-[10px] text-zinc-500 block uppercase font-bold">Destination</span>
              <span className="font-bold text-white">{trackingData.destination}</span>
            </div>
            <MapPin className="w-4 h-4 text-emerald-400" />
          </div>
        </div>

        {/* Step Progression Timeline */}
        <div className="space-y-6 pt-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Package Shipment History
          </h4>
          <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-800">
            {trackingData.steps.map((step, idx) => (
              <div key={idx} className="relative flex items-start gap-4">
                <span className={`absolute -left-6 top-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step.completed ? 'bg-emerald-500 text-zinc-950 ring-4 ring-emerald-500/20' : 'bg-zinc-800 text-zinc-500 border border-zinc-700'}`}>
                  {step.completed ? '✓' : idx + 1}
                </span>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h5 className={`text-sm font-bold ${step.completed ? 'text-white' : 'text-zinc-400'}`}>{step.title}</h5>
                    <span className="text-[11px] text-zinc-500">({step.time})</span>
                  </div>
                  <p className="text-xs text-zinc-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
