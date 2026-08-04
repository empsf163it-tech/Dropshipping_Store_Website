import { BlogPost, CustomerReview, SupplierSyncStatus } from '../types';

export const SUPPLIER_HUBS: SupplierSyncStatus[] = [
  {
    supplierId: 'spocket-global-audio',
    supplierName: 'Spocket EU Direct Hub',
    apiHealth: '100% Operational',
    lastSynced: '2 seconds ago',
    syncedProductsCount: 142,
    autoFulfillSuccessRate: 99.8,
    averageFulfillmentHours: 11.4,
    connectedCarriers: ['DHL Express', 'FedEx International', 'UPS Worldwide']
  },
  {
    supplierId: 'cj-lighting-warehouse',
    supplierName: 'CJ Dropshipping US East Facility',
    apiHealth: '100% Operational',
    lastSynced: 'Just now',
    syncedProductsCount: 88,
    autoFulfillSuccessRate: 99.4,
    averageFulfillmentHours: 6.2,
    connectedCarriers: ['USPS Priority Mail', 'UPS Ground', 'FedEx Home']
  },
  {
    supplierId: 'zendrop-express',
    supplierName: 'Zendrop Direct Frankfurt Hub',
    apiHealth: '100% Operational',
    lastSynced: '5 seconds ago',
    syncedProductsCount: 210,
    autoFulfillSuccessRate: 99.9,
    averageFulfillmentHours: 14.1,
    connectedCarriers: ['DHL Global', 'DPD Express']
  },
  {
    supplierId: 'shipbob-hub',
    supplierName: 'ShipBob LA Fulfillment Engine',
    apiHealth: '100% Operational',
    lastSynced: '1 second ago',
    syncedProductsCount: 310,
    autoFulfillSuccessRate: 100.0,
    averageFulfillmentHours: 4.8,
    connectedCarriers: ['FedEx Express', 'DHL Express', 'OnTrac']
  },
  {
    supplierId: 'aliexpress-direct-tech',
    supplierName: 'AliExpress Direct Automated API',
    apiHealth: 'Syncing',
    lastSynced: '12 seconds ago',
    syncedProductsCount: 520,
    autoFulfillSuccessRate: 98.7,
    averageFulfillmentHours: 22.0,
    connectedCarriers: ['ePacket Express', 'YunExpress', 'Cainiao Heavy Freight']
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Elena Rostova',
    location: 'Zurich, Switzerland',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    title: 'The soundstage on Horizon is transcendent.',
    comment: 'I replaced my studio Sennheisers with DropFlow Horizon. The beryllium driver dynamics paired with ANC are second to none. Plus, ordering was seamless and tracking updated live every step from Stockholm!',
    verifiedPurchase: true,
    productTitle: 'Horizon Noise-Cancelling Headphones',
    productImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=200&q=80',
    date: '2 days ago'
  },
  {
    id: 'rev-2',
    author: 'Marcus Vance',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    title: 'Aura lamp transformed my home office atmosphere.',
    comment: 'The circadian light spectrum actually helps me focus during late coding sessions. The wireless charger built into the ceramic base is pure genius.',
    verifiedPurchase: true,
    productTitle: 'Aura Ambient Ceramic Desk Lamp',
    productImage: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=200&q=80',
    date: '5 days ago'
  },
  {
    id: 'rev-3',
    author: 'Kenji Sato',
    location: 'Tokyo, Japan',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    title: 'Lunar backpack holds up in typhoon rainstorms.',
    comment: 'I travel constantly between Tokyo and London. The Cordura nylon and Fidlock German magnetic clasps make airport security a breeze. 10/10 craftsmanship.',
    verifiedPurchase: true,
    productTitle: 'Lunar Weatherproof Modular Backpack',
    productImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=200&q=80',
    date: '1 week ago'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'circadian-lighting-guide',
    title: 'The Science of Circadian Workspaces: How Light Controls Peak Focus',
    excerpt: 'Discover how matching your indoor light color temperature to natural solar angles elevates serotonin production and prevents evening eye strain.',
    author: 'Dr. Julian Thorne, Lead Human Factors Ergonomist',
    readTime: '5 min read',
    date: 'August 1, 2026',
    category: 'Biohacking & Focus',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80',
    content: `Natural sunlight isn't static—it evolves from crisp 6000K blue-rich daylight at noon down to warm 2200K amber glow at dusk. Standard office bulbs blast 4000K harsh light constantly, tricking your pineal gland into suppressing melatonin long past sunset.

    At DropFlow, our lighting architecture utilizes full-spectrum SunLike LEDs that dynamically transition color temperature alongside your timezone, keeping your circadian rhythm balanced while eliminating PWM flickering.`
  },
  {
    id: 'beryllium-audio-drivers',
    title: 'Why Beryllium Acoustic Diaphragms Outperform Titanium and Plastic',
    excerpt: 'An inside look at the molecular density of Beryllium and why it creates zero-distortion audio soundstages for precision listening.',
    author: 'Sora Lindqvist, Audio Acoustic Engineer',
    readTime: '7 min read',
    date: 'July 28, 2026',
    category: 'Engineering & Acoustics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80',
    content: `In high-fidelity acoustics, the ideal speaker diaphragm must meet two opposing requirements: extreme stiffness and minimal mass. Soft plastics flex under rapid movement, causing harmonic distortion.

    Beryllium boasts a sound velocity of 12,890 meters per second—more than double titanium. This rigidity ensures the acoustic cone moves as a perfect piston, reproducing micro-details in high-res lossless audio.`
  }
];

export const FAQS = [
  {
    q: 'How does order fulfillment work?',
    a: 'When you place an order on DropFlow, our intelligent fulfillment router calculates the optimal warehouse based on your delivery address, live stock availability, and shipping speed. Order details are transmitted seamlessly, and a tracking ID is issued as soon as the item leaves our facility.'
  },
  {
    q: 'What is DropFlow’s 30-Day Money-Back Guarantee?',
    a: 'We stand behind our products completely. If you are not 100% satisfied with your purchase, return it within 30 days in its original condition for a full refund or exchange with zero restocking fees. Return shipping is prepaid for all US, EU, and UK orders.'
  },
  {
    q: 'How long does international delivery take?',
    a: 'Standard express shipping takes 2-4 business days for domestic US/EU orders, and 4-7 business days worldwide via DHL Express or FedEx International. You can track your package live at any second on our Order Tracking page.'
  },
  {
    q: 'Are DropFlow products covered under warranty?',
    a: 'Yes! Every DropFlow product includes a comprehensive 2-Year Global Manufacturer Warranty covering all hardware components, battery degradation, and mechanical defects.'
  }
];

export const PRESS_QUOTES = [
  { quote: 'DropFlow delivers true DTC craftsmanship and reliable global shipping.', outlet: 'TechCrunch' },
  { quote: 'Apple-level minimalist aesthetics combined with circadian science and incredible audio clarity.', outlet: 'WIRED Magazine' },
  { quote: 'The future of DTC e-commerce: instant dispatch, seamless shopping, and unmatched product engineering.', outlet: 'Forbes Design' }
];
