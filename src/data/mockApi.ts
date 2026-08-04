import { Order } from '../types';

// ─── Pre-seeded Mock Order (mirrors server.ts data) ─────────────────────────

const MOCK_ORDERS: Order[] = [
  {
    id: 'DFL-904821',
    customerName: 'Alexander Wright',
    customerEmail: 'alex.wright@executive.co',
    shippingAddress: '450 Sutter St, San Francisco, CA 94108',
    items: [
      {
        product: {
          id: 'horizon-anc-headphones',
          title: 'Horizon Noise-Cancelling Headphones',
          subtitle: '',
          price: 349,
          originalPrice: 349,
          rating: 5,
          reviewsCount: 0,
          category: 'audio',
          collection: 'studio-series',
          mainImage: '',
          gallery: [],
          description: '',
          features: [],
          specs: [],
          stockLevel: 100,
          stockStatus: 'in-stock',
          supplier: { id: '', name: '', location: '', dispatchTimeHours: 0, shippingCarriers: [], costPrice: 0, sku: '' }
        },
        quantity: 1,
        selectedColor: 'Space Obsidian'
      }
    ],
    totalAmount: 349,
    marginAmount: 207,
    orderDate: new Date(Date.now() - 3600000 * 4).toISOString(),
    status: 'In Transit',
    supplierName: 'Spocket EU Direct Hub',
    supplierSku: 'SPK-AUDIO-HZ900',
    trackingNumber: 'DHL-EXPRESS-992014812',
    carrier: 'DHL Express',
    autoFulfilled: true,
    timeline: [
      {
        title: 'Order Received & Payment Verified',
        description: 'Customer payment authorized ($349.00 via Apple Pay).',
        timestamp: new Date(Date.now() - 3600000 * 4).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'completed',
        location: 'DropFlow Store Engine'
      },
      {
        title: 'Routed to Stockholm Facility',
        description: 'Inventory reserved in Stockholm Facility. Supplier PO #88392 auto-created.',
        timestamp: new Date(Date.now() - 3600000 * 3.8).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'completed',
        location: 'Spocket Sweden Depot'
      },
      {
        title: 'Express Label & Tracking Issued',
        description: 'DHL Express Airway Bill #992014812 generated.',
        timestamp: new Date(Date.now() - 3600000 * 2.5).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'completed',
        location: 'Stockholm Arlanda Air Cargo'
      },
      {
        title: 'Customs Clearance Completed',
        description: 'US Duty prepaid & import documentation cleared.',
        timestamp: new Date(Date.now() - 3600000 * 1).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'completed',
        location: 'SFO International Sorting Center'
      },
      {
        title: 'Out for Last-Mile Express Delivery',
        description: 'On courier vehicle for delivery to SOMA office.',
        timestamp: 'Estimate: Today 4:00 PM',
        status: 'in-progress',
        location: 'San Francisco Hub'
      }
    ],
    fulfillmentLog: [
      '[00:00:01] Payment received & fraud check passed (100% Trust score)',
      '[00:00:03] Supplier API routing selected Spocket EU Direct (Lowest latency & highest stock)',
      '[00:00:05] Automated Purchase Order #SPK-88392 posted via Webhook',
      '[00:01:12] Supplier system returned Tracking ID: DHL-EXPRESS-992014812'
    ]
  }
];

// Mutable local store (simulates server-side state)
let localOrders = [...MOCK_ORDERS];

// ─── Mock API Functions ─────────────────────────────────────────────────────

/** Simulates GET /api/orders */
export async function mockFetchOrders(): Promise<{ success: boolean; orders: Order[] }> {
  await delay(300);
  return { success: true, orders: localOrders };
}

/** Simulates POST /api/orders */
export async function mockCreateOrder(data: {
  customerName?: string;
  customerEmail?: string;
  shippingAddress?: string;
  items?: { productTitle: string; quantity: number; price: number; color?: string }[];
  totalAmount?: number;
}): Promise<{ success: boolean; message: string; order: Order }> {
  await delay(600);

  const orderId = `DFL-${Math.floor(100000 + Math.random() * 900000)}`;
  const trackingNum = `DHL-EXP-${Math.floor(100000000 + Math.random() * 900000000)}`;
  const totalAmount = data.totalAmount || 0;
  const costTotal = Math.round(totalAmount * 0.42);
  const margin = Math.round(totalAmount - costTotal);

  const newOrder: Order = {
    id: orderId,
    customerName: data.customerName || 'Valued Collector',
    customerEmail: data.customerEmail || 'customer@dropflow.com',
    shippingAddress: data.shippingAddress || '123 Luxury Ave, Beverly Hills, CA 90210',
    items: (data.items || []).map(item => ({
      product: {
        id: item.productTitle.toLowerCase().replace(/\s+/g, '-'),
        title: item.productTitle,
        subtitle: '',
        price: item.price,
        originalPrice: item.price,
        rating: 5,
        reviewsCount: 0,
        category: 'lifestyle' as const,
        collection: 'studio-series' as const,
        mainImage: '',
        gallery: [],
        description: '',
        features: [],
        specs: [],
        stockLevel: 100,
        stockStatus: 'in-stock' as const,
        supplier: { id: '', name: '', location: '', dispatchTimeHours: 0, shippingCarriers: [], costPrice: 0, sku: '' }
      },
      quantity: item.quantity,
      selectedColor: item.color
    })),
    totalAmount,
    marginAmount: margin,
    orderDate: new Date().toISOString(),
    status: 'Sent to Supplier',
    supplierName: 'ShipBob LA Fulfillment Engine',
    supplierSku: 'SB-FAST-DISPATCH',
    trackingNumber: trackingNum,
    carrier: 'FedEx Express Air',
    autoFulfilled: true,
    timeline: [
      {
        title: 'Order Confirmed & Payment Processed',
        description: '256-bit Encrypted transaction authorized.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'completed',
        location: 'DropFlow Gateway'
      },
      {
        title: 'Dispatched to Supplier API',
        description: 'PO transmitted via Webhook to ShipBob LA Node.',
        timestamp: new Date(Date.now() + 10000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'completed',
        location: 'Fulfillment Dispatch'
      },
      {
        title: 'Express Label Created',
        description: `Tracking number ${trackingNum} assigned.`,
        timestamp: 'In Progress',
        status: 'in-progress',
        location: 'LA Cargo Hub'
      },
      {
        title: 'Out for Courier Delivery',
        description: 'Estimated delivery in 2 business days.',
        timestamp: 'Pending',
        status: 'pending',
        location: 'Local Destination Depot'
      }
    ],
    fulfillmentLog: [
      `[${new Date().toLocaleTimeString()}] Order #${orderId} received from checkout`,
      `[${new Date().toLocaleTimeString()}] Automated supplier selection: ShipBob LA (Fastest ETA)`,
      `[${new Date().toLocaleTimeString()}] Webhook payload dispatched with automated tracking listener`,
      `[${new Date().toLocaleTimeString()}] Margin captured: $${margin} (ROI 138%)`
    ]
  };

  localOrders = [newOrder, ...localOrders];

  return {
    success: true,
    message: 'Order created & auto-fulfilled through supplier network!',
    order: newOrder
  };
}

/** Simulates POST /api/inventory/sync */
export async function mockInventorySync(): Promise<{
  success: boolean;
  message: string;
  updatedStatus: {
    lastGlobalSync: string;
    suppliers: { name: string; status: string; pingMs: number; stockCount: number }[];
  };
}> {
  await delay(500);

  const suppliers = [
    { name: 'Spocket EU Direct', status: 'Connected', pingMs: Math.floor(20 + Math.random() * 50), stockCount: 142 + Math.floor(Math.random() * 5) - 2 },
    { name: 'CJ Dropshipping US', status: 'Connected', pingMs: Math.floor(20 + Math.random() * 50), stockCount: 88 + Math.floor(Math.random() * 5) - 2 },
    { name: 'Zendrop Europe', status: 'Connected', pingMs: Math.floor(20 + Math.random() * 50), stockCount: 210 + Math.floor(Math.random() * 5) - 2 },
    { name: 'ShipBob LA Engine', status: 'Connected', pingMs: Math.floor(20 + Math.random() * 50), stockCount: 310 + Math.floor(Math.random() * 5) - 2 },
    { name: 'AliExpress Direct API', status: 'Syncing', pingMs: Math.floor(80 + Math.random() * 60), stockCount: 520 + Math.floor(Math.random() * 5) - 2 }
  ];

  return {
    success: true,
    message: 'Triggered live multi-supplier API sync across all fulfillment nodes.',
    updatedStatus: {
      lastGlobalSync: new Date().toISOString(),
      suppliers
    }
  };
}

/** Simulates POST /api/ai-finder — smart keyword-based recommendation engine */
export async function mockAIFinder(prompt: string, budget?: string, recipient?: string): Promise<{
  success: boolean;
  data: {
    aiAnalysis: string;
    recommendedProductIds: string[];
    personalizedTips: string;
  };
}> {
  await delay(800);

  const q = (prompt || '').toLowerCase();

  // Smart keyword matching for curated recommendations
  let recommendedProductIds: string[];
  let aiAnalysis: string;
  let personalizedTips: string;

  if (q.includes('audio') || q.includes('headphone') || q.includes('music') || q.includes('sound')) {
    recommendedProductIds = ['horizon-anc-headphones', 'nexus-headphones-stand'];
    aiAnalysis = 'Based on your audio preference, our Horizon headphones deliver beryllium-driver clarity with 40-hour battery. The Nexus stand completes the premium desk setup.';
    personalizedTips = 'Pair the Horizon with a lossless audio streaming service for the full beryllium diaphragm soundstage experience.';
  } else if (q.includes('light') || q.includes('lamp') || q.includes('ambient') || q.includes('focus')) {
    recommendedProductIds = ['aura-ceramic-lamp', 'solstice-ambient-projector'];
    aiAnalysis = 'Circadian-aligned lighting enhances focus and reduces eye strain. Our Aura lamp with SunLike LEDs auto-adjusts color temperature throughout the day.';
    personalizedTips = 'Place the Aura lamp at desk height and the Solstice projector on a shelf for layered ambient lighting that mimics golden hour.';
  } else if (q.includes('travel') || q.includes('backpack') || q.includes('commute') || q.includes('outdoor')) {
    recommendedProductIds = ['lunar-modular-backpack', 'starlight-magsafe-powerbank'];
    aiAnalysis = 'For frequent travelers, the Lunar backpack offers military-grade Cordura waterproofing with magnetic Fidlock clasps, while the Starlight powerbank keeps all devices charged.';
    personalizedTips = 'Use the Lunar\'s modular attachment system to mount the Starlight powerbank for seamless on-the-go charging.';
  } else if (q.includes('desk') || q.includes('office') || q.includes('setup') || q.includes('workspace')) {
    recommendedProductIds = ['titan-wrist-rest-mat', 'aura-ceramic-lamp', 'nexus-headphones-stand'];
    aiAnalysis = 'A premium desk ecosystem starts with ergonomic foundations. Our Titan milled-aluminium wrist rest combined with the Aura circadian lamp creates an elite workspace.';
    personalizedTips = 'Position the Titan mat at keyboard level, the Aura lamp to your non-dominant side, and the Nexus stand within arm\'s reach for the perfect desk triangle.';
  } else if (q.includes('gift') || q.includes('present') || q.includes('birthday') || q.includes('holiday')) {
    recommendedProductIds = ['horizon-anc-headphones', 'ember-thermal-tumbler'];
    aiAnalysis = 'Our most-gifted items combine universal appeal with premium unboxing experiences. The Horizon headphones and Ember tumbler are crowd favorites with 5-star ratings.';
    personalizedTips = 'Both come in premium gift boxes with magnetic closures — ready to gift without additional wrapping.';
  } else if (q.includes('power') || q.includes('charge') || q.includes('battery') || q.includes('portable')) {
    recommendedProductIds = ['starlight-magsafe-powerbank', 'ember-thermal-tumbler'];
    aiAnalysis = 'Stay powered with our ultra-thin titanium powerbank featuring 10,000mAh capacity and real-time OLED display. Pair with the Ember smart tumbler for complete mobile independence.';
    personalizedTips = 'The Starlight supports MagSafe alignment for effortless magnetic charging with any compatible device.';
  } else {
    // Default recommendation
    recommendedProductIds = ['horizon-anc-headphones', 'aura-ceramic-lamp'];
    aiAnalysis = 'Selected based on our DTC sales velocity, premium acoustic metrics, and ergonomic compatibility. These two products represent the pinnacle of our catalog.';
    personalizedTips = 'Pair the Horizon headphones with the Aura ceramic lamp for an uninterrupted deep focus sanctuary at your desk.';
  }

  // Filter by budget if provided
  if (budget && budget.includes('Under $100')) {
    recommendedProductIds = recommendedProductIds.filter(id =>
      ['titan-wrist-rest-mat', 'starlight-magsafe-powerbank', 'nexus-headphones-stand', 'solstice-ambient-projector'].includes(id)
    );
    if (recommendedProductIds.length === 0) {
      recommendedProductIds = ['starlight-magsafe-powerbank', 'nexus-headphones-stand'];
      aiAnalysis = 'Under $100, our Starlight powerbank and Nexus stand deliver exceptional value with premium materials and engineering.';
    }
  }

  return {
    success: true,
    data: {
      aiAnalysis,
      recommendedProductIds,
      personalizedTips
    }
  };
}

// ─── Utility ────────────────────────────────────────────────────────────────

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
