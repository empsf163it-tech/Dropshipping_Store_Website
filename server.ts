import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Server-side Gemini AI Client
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (apiKey) {
  try {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } catch (err) {
    console.warn('Failed to initialize GoogleGenAI client:', err);
  }
}

// Simulated Server Database for Orders & Inventory
let serverOrders = [
  {
    id: 'DFL-904821',
    customerName: 'Alexander Wright',
    customerEmail: 'alex.wright@executive.co',
    shippingAddress: '450 Sutter St, San Francisco, CA 94108',
    items: [
      {
        productTitle: 'Horizon Noise-Cancelling Headphones',
        quantity: 1,
        price: 349,
        color: 'Space Obsidian'
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

let inventorySyncStatus = {
  lastGlobalSync: new Date().toISOString(),
  activeSuppliers: 5,
  totalItemsTracked: 1272,
  syncHealth: 'Optimal',
  automatedSyncIntervalSec: 15,
  suppliers: [
    { name: 'Spocket EU Direct', status: 'Connected', pingMs: 42, stockCount: 142 },
    { name: 'CJ Dropshipping US', status: 'Connected', pingMs: 65, stockCount: 88 },
    { name: 'Zendrop Europe', status: 'Connected', pingMs: 38, stockCount: 210 },
    { name: 'ShipBob LA Engine', status: 'Connected', pingMs: 18, stockCount: 310 },
    { name: 'AliExpress Direct API', status: 'Syncing', pingMs: 120, stockCount: 520 }
  ]
};

// API: Get Inventory Sync Status
app.get('/api/inventory', (req, res) => {
  res.json({
    success: true,
    data: {
      ...inventorySyncStatus,
      lastGlobalSync: new Date().toISOString()
    }
  });
});

// API: Force Live Supplier Inventory Resync
app.post('/api/inventory/sync', (req, res) => {
  inventorySyncStatus.suppliers = inventorySyncStatus.suppliers.map(s => ({
    ...s,
    pingMs: Math.floor(20 + Math.random() * 50),
    stockCount: s.stockCount + Math.floor(Math.random() * 5) - 2
  }));
  inventorySyncStatus.lastGlobalSync = new Date().toISOString();

  res.json({
    success: true,
    message: 'Triggered live multi-supplier API sync across all fulfillment nodes.',
    updatedStatus: inventorySyncStatus
  });
});

// API: Get Orders
app.get('/api/orders', (req, res) => {
  res.json({
    success: true,
    orders: serverOrders
  });
});

// API: Create Automated Order
app.post('/api/orders', (req, res) => {
  const { customerName, customerEmail, shippingAddress, items, totalAmount } = req.body;

  const orderId = `DFL-${Math.floor(100000 + Math.random() * 900000)}`;
  const trackingNum = `DHL-EXP-${Math.floor(100000000 + Math.random() * 900000000)}`;
  const costTotal = Math.round(totalAmount * 0.42);
  const margin = Math.round(totalAmount - costTotal);

  const newOrder = {
    id: orderId,
    customerName: customerName || 'Valued Collector',
    customerEmail: customerEmail || 'customer@dropflow.com',
    shippingAddress: shippingAddress || '123 Luxury Ave, Beverly Hills, CA 90210',
    items: items || [],
    totalAmount: totalAmount || 0,
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

  serverOrders.unshift(newOrder);

  res.json({
    success: true,
    message: 'Order created & auto-fulfilled through supplier network!',
    order: newOrder
  });
});

// API: AI Product Finder / Gift Concierge (using Gemini API)
app.post('/api/ai-finder', async (req, res) => {
  const { prompt, budget, category, recipient } = req.body;

  if (!aiClient) {
    // Fallback recommendation engine if API key isn't provided or set
    return res.json({
      success: true,
      recommendations: [
        {
          productId: 'horizon-anc-headphones',
          reason: 'Matches high acoustic standards with active noise cancellation and luxurious aerospace build.',
          score: 98
        },
        {
          productId: 'aura-ceramic-lamp',
          reason: 'Ideal for focus and lifestyle ambient warmth with integrated Qi charging.',
          score: 95
        }
      ],
      aiAnalysis: 'Curated based on our DTC sales velocity, premium acoustic metrics, and ergonomic compatibility.'
    });
  }

  try {
    const aiResponse = await aiClient.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: `You are DropFlow's Luxury AI Shopping Concierge. 
      Analyze the user's gift request and recommend 2-3 products from our flagship DTC store catalog:
      Products in store:
      1. horizon-anc-headphones ($349, Audio, Active Noise Cancellation, Beryllium Drivers, Premium Leather & Aluminium)
      2. aura-ceramic-lamp ($189, Lighting, Handcrafted Ceramic, Circadian SunLike LED, Qi Charger base)
      3. titan-wrist-rest-mat ($98, Desk Architecture, Aluminium Milled, Merino Wool Felt)
      4. lunar-modular-backpack ($249, Travel & Mobility, Cordura 840D Waterproof, German Fidlock Magnets)
      5. starlight-magsafe-powerbank ($89, Power, 11mm Ultra Thin Titanium, 10,000mAh, OLED display)
      6. nexus-headphones-stand ($79, Walnut Timber & Aluminium)
      7. ember-thermal-tumbler ($139, Smart Temperature Mug)
      8. solstice-ambient-projector ($119, Sunset Crystal Optics)

      User query: "${prompt || 'Suggest a premium tech or lifestyle gift'}"
      Budget: "${budget || 'Any'}"
      Recipient: "${recipient || 'Self or Professional'}"

      Respond in JSON format:
      {
        "aiAnalysis": "A short, polished, 2-sentence concierge recommendation rationale.",
        "recommendedProductIds": ["horizon-anc-headphones", "aura-ceramic-lamp"],
        "personalizedTips": "One high-end tip on how to pair or style these items."
      }`,
      config: {
        responseMimeType: 'application/json',
      }
    });

    const responseText = aiResponse.text || '{}';
    let parsedData = {};
    try {
      parsedData = JSON.parse(responseText);
    } catch {
      parsedData = {
        aiAnalysis: 'Selected based on premium craft, material durability, and design synergy.',
        recommendedProductIds: ['horizon-anc-headphones', 'lunar-modular-backpack'],
        personalizedTips: 'Pair the headphones with the modular backpack for ultimate travel focus.'
      };
    }

    res.json({
      success: true,
      data: parsedData
    });
  } catch (err: any) {
    console.error('Gemini AI Finder Error:', err);
    res.status(500).json({
      success: false,
      error: 'AI Concierge unavailable temporarily',
      fallbackProductIds: ['horizon-anc-headphones', 'aura-ceramic-lamp']
    });
  }
});

// Vite Development or Production Server integration
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`DropFlow Server running on http://localhost:${PORT}`);
  });
}

startServer();
