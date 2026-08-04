import { Product } from '../types';
import powerBankImage from '../../assets/Ultra-Slim-Magnetic-Wireless-Power-Bank-10000mAh-5.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'horizon-anc-headphones',
    title: 'Horizon Noise-Cancelling Headphones',
    subtitle: 'Acoustic Precision. Pure Beryllium Drivers.',
    price: 349,
    originalPrice: 429,
    rating: 4.9,
    reviewsCount: 328,
    category: 'audio',
    collection: 'studio-series',
    mainImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Engineered for audio purists and modern creators. Horizon combines custom 40mm Beryllium drivers with hybrid active noise cancellation (42dB reduction) wrapped in anodized aerospace aluminium and memory foam leather.',
    features: [
      'Active Hybrid Noise Cancellation (up to 42dB)',
      'Custom 40mm Beryllium Acoustic Diaphragm',
      '48-Hour Battery Life with Fast Charge (10m = 5h)',
      'Lossless LDAC & aptX Adaptive Bluetooth 5.3',
      'Quad-Beamforming Mics for Crystal Clear Calls'
    ],
    specs: [
      { label: 'Frequency Response', value: '10 Hz - 45,000 Hz' },
      { label: 'Impedance', value: '32 Ohms' },
      { label: 'Weight', value: '265g' },
      { label: 'Bluetooth Codecs', value: 'LDAC, AAC, SBC, aptX HD' },
      { label: 'Charging Interface', value: 'USB-C Fast Charging' },
      { label: 'Warranty', value: '2-Year Full Global Warranty' }
    ],
    hotspots: [
      { id: 'h1', x: 30, y: 35, title: 'Beryllium Drivers', description: 'Ultra-rigid acoustic drivers delivering zero harmonic distortion.' },
      { id: 'h2', x: 68, y: 48, title: 'Aerospace Aluminium Frame', description: 'Lightweight, durable matte finish crafted with 5-axis CNC machining.' },
      { id: 'h3', x: 45, y: 75, title: 'Protein Memory Cushioning', description: 'Zero-pressure ear cups tailored for all-day focus sessions.' }
    ],
    stockLevel: 14,
    stockStatus: 'low-stock',
    supplier: {
      id: 'spocket-global-audio',
      name: 'Spocket EU Direct',
      location: 'Stockholm, Sweden',
      dispatchTimeHours: 12,
      shippingCarriers: ['DHL Express', 'FedEx International'],
      costPrice: 142,
      sku: 'SPK-AUDIO-HZ900'
    },
    variants: {
      colors: [
        { name: 'Space Obsidian', hex: '#1c1d21' },
        { name: 'Titanium Silver', hex: '#cfd4dc' },
        { name: 'Warm Cream', hex: '#e8e2d5' }
      ]
    },
    isBestSeller: true,
    isFlashSale: true,
    flashDiscountPercent: 18,
    frequentlyBoughtTogetherId: 'nexus-headphones-stand',
    beforeAfter: {
      beforeLabel: 'Standard Mass-Market ANC',
      beforeImage: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80',
      beforeDesc: 'Plastic housing, muffled low-end bass, 15h battery, flimsy hinges.',
      afterLabel: 'DropFlow Horizon Architecture',
      afterImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
      afterDesc: 'Solid CNC aluminum, pristine spatial soundstage, 48h battery life.'
    }
  },
  {
    id: 'aura-ceramic-lamp',
    title: 'Aura Ambient Ceramic Desk Lamp',
    subtitle: 'Circadian Sunlight Simulation & Wireless Qi Charger',
    price: 189,
    originalPrice: 229,
    rating: 4.85,
    reviewsCount: 194,
    category: 'lighting',
    collection: 'minimalist-living',
    mainImage: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Sculptural elegance meets biological lighting science. Hand-poured matte ceramic base equipped with full-spectrum circadian LED that syncs with your body rhythm, alongside an invisible 15W Qi wireless charging pad.',
    features: [
      'Full-Spectrum SunLike LED (CRI 98+)',
      'Automated Circadian Warmth Sync (2200K - 5500K)',
      'Hidden 15W Fast Wireless Qi Charging Base',
      'Handcrafted Matte Ceramic & Brushed Brass Details',
      'Touch Slider Dimming with Memory Function'
    ],
    specs: [
      { label: 'Brightness', value: '850 Lumens' },
      { label: 'Color Temperature', value: '2200K - 5500K Adjustable' },
      { label: 'Power Consumption', value: '12W LED / 15W Qi' },
      { label: 'Material', value: 'Porcelain Clay & Anodized Brass' },
      { label: 'Dimensions', value: '38cm Height x 18cm Base' }
    ],
    hotspots: [
      { id: 'l1', x: 50, y: 25, title: 'SunLike LED Diffuser', description: 'Eliminates eye strain with flicker-free natural light spectrum.' },
      { id: 'l2', x: 50, y: 80, title: '15W Fast Qi Surface', description: 'Charge your phone or earbuds seamlessly while working.' }
    ],
    stockLevel: 32,
    stockStatus: 'in-stock',
    supplier: {
      id: 'cj-lighting-warehouse',
      name: 'CJ Dropshipping US East',
      location: 'NJ, United States',
      dispatchTimeHours: 6,
      shippingCarriers: ['USPS Priority', 'UPS Ground'],
      costPrice: 72,
      sku: 'CJ-LAMP-AUR15'
    },
    variants: {
      colors: [
        { name: 'Sandstone Beige', hex: '#d9cdbe' },
        { name: 'Nordic Charcoal', hex: '#2b2c30' },
        { name: 'Terracotta Warm', hex: '#b86d52' }
      ]
    },
    isBestSeller: true,
    isNew: false,
    frequentlyBoughtTogetherId: 'titan-ergonomic-deskmat'
  },
  {
    id: 'titan-wrist-rest-mat',
    title: 'Titan Precision Aluminium Wrist Rest & Felt Mat',
    subtitle: 'Ergonomic Desk Architecture & Precision Glide',
    price: 98,
    originalPrice: 120,
    rating: 4.92,
    reviewsCount: 142,
    category: 'desk-accessories',
    collection: 'executive-suite',
    mainImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Precision milled from a single block of aerospace aluminium with magnetic acoustic felt insert. Protects wrist ergonomics during 10+ hour deep work stretches while elevating desk aesthetic.',
    features: [
      'Single-Block Milled Aerospace Grade Aluminium',
      'Interchangeable Merino Wool Felt Top Insert',
      'Anti-Slip Natural Rubber Base Geometry',
      'Tapered 8° Incline for Neutral Ergonomic Angle'
    ],
    specs: [
      { label: 'Length', value: '360mm (Fits 75% & TKL Keyboards)' },
      { label: 'Material', value: '6061-T6 Aluminum & German Merino Wool' },
      { label: 'Weight', value: '410g' }
    ],
    stockLevel: 8,
    stockStatus: 'low-stock',
    supplier: {
      id: 'zendrop-premium',
      name: 'Zendrop Express Hub',
      location: 'Frankfurt, Germany',
      dispatchTimeHours: 18,
      shippingCarriers: ['DHL Global Express'],
      costPrice: 38,
      sku: 'ZD-WRIST-TT360'
    },
    isNew: true
  },
  {
    id: 'lunar-modular-backpack',
    title: 'Lunar Weatherproof Modular Backpack',
    subtitle: 'Magnetic Ecosystem. 24L-34L Expandable Capacity.',
    price: 249,
    originalPrice: 299,
    rating: 4.95,
    reviewsCount: 512,
    category: 'lifestyle',
    collection: 'travel-tech',
    mainImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Constructed from 100% recycled Cordura 840D Ballistic Nylon with Fidlock magnetic German buckles. Features a suspended 16" MacBook sleeve, RFID passport vault, and waterproof YKK AquaGuard zips.',
    features: [
      'Fidlock Magnetic German Quick-Release Buckles',
      '100% Recycled Cordura 840D Waterproof Ballistic Nylon',
      'Suspended 16" Laptop Compartment with Velvet Lining',
      'TSA Luggage Pass-Through & Concealed Passport Vault',
      'Expandable 24L to 34L Capacity for Weekend Trips'
    ],
    specs: [
      { label: 'Capacity', value: '24L - 34L Expandable' },
      { label: 'Weight', value: '1.25 kg' },
      { label: 'Laptop Sleeve', value: 'Up to 16" MacBook Pro' },
      { label: 'Waterproof Rating', value: 'IPX-5 Heavy Rainproof' }
    ],
    hotspots: [
      { id: 'b1', x: 45, y: 20, title: 'Fidlock Magnetic Catch', description: 'One-handed German magnetic opening mechanism.' },
      { id: 'b2', x: 50, y: 60, title: 'Cordura Ballistic Exterior', description: 'Rip-stop, puncture-proof, sustainable fabric.' }
    ],
    stockLevel: 45,
    stockStatus: 'in-stock',
    supplier: {
      id: 'shipbob-hub',
      name: 'ShipBob Global Fulfillment',
      location: 'LA, United States',
      dispatchTimeHours: 8,
      shippingCarriers: ['FedEx Express', 'DHL Express'],
      costPrice: 95,
      sku: 'SB-BAG-LUN34'
    },
    isBestSeller: true,
    isFlashSale: false
  },
  {
    id: 'starlight-magsafe-powerbank',
    title: 'Starlight Ultra-Slim 10,000mAh MagSafe Power Bank',
    subtitle: 'Graphene Fast Cooling & OLED Battery Display',
    price: 89,
    originalPrice: 110,
    rating: 4.88,
    reviewsCount: 280,
    category: 'wearables',
    collection: 'travel-tech',
    mainImage: powerBankImage,
    gallery: [
      powerBankImage
    ],
    description: 'Thinner than an iPhone at 11mm. Built with high-density solid-state battery cells wrapped in brushed titanium casing with real-time OLED output display and 20W PD USB-C bidirectional pass-through charging.',
    features: [
      '11mm Ultra-Slim Anodized Titanium Housing',
      'Strong N52 Neodymium Magnetic Snap (12N Holding Force)',
      'Real-Time OLED Display for Exact % & Charging Speed',
      'Bidirectional 20W USB-C Power Delivery',
      'Graphene Thermal Sheet Prevents Overheating'
    ],
    specs: [
      { label: 'Capacity', value: '10,000 mAh' },
      { label: 'Wireless Speed', value: '15W MagSafe Compatible' },
      { label: 'Wired Speed', value: '20W PD Output / Input' },
      { label: 'Thickness', value: '11.2 mm' },
      { label: 'Weight', value: '175g' }
    ],
    stockLevel: 19,
    stockStatus: 'in-stock',
    supplier: {
      id: 'aliexpress-direct-tech',
      name: 'AliExpress Direct Express',
      location: 'Shenzhen, China',
      dispatchTimeHours: 24,
      shippingCarriers: ['ePacket Direct', 'YunExpress'],
      costPrice: 32,
      sku: 'AX-PBANK-STL10'
    },
    isNew: true,
    isFlashSale: true,
    flashDiscountPercent: 19
  },
  {
    id: 'nexus-headphones-stand',
    title: 'Nexus Walnut & Aluminium Headphone Stand',
    subtitle: 'Sculptural Desk Storage with Cable Management Tray',
    price: 79,
    originalPrice: 95,
    rating: 4.9,
    reviewsCount: 88,
    category: 'desk-accessories',
    collection: 'studio-series',
    mainImage: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Crafted from solid American Walnut timber and matte black aluminium. Curved crown preserves headphone headband padding shape without denting memory foam cushions.',
    features: [
      'Solid American Walnut Headband Cradle',
      'Anodized Aluminium Support Column',
      'Integrated Catch-All Tray for Rings & Dongles',
      'Micro-Suction Pad Base for Zero Tipping'
    ],
    specs: [
      { label: 'Height', value: '280mm' },
      { label: 'Base Area', value: '140mm x 140mm' },
      { label: 'Timber Origin', value: 'FSC Certified Oregon Walnut' }
    ],
    stockLevel: 22,
    stockStatus: 'in-stock',
    supplier: {
      id: 'zendrop-woodcraft',
      name: 'Zendrop Europe',
      location: 'Vienna, Austria',
      dispatchTimeHours: 12,
      shippingCarriers: ['PostAT Express'],
      costPrice: 28,
      sku: 'ZD-STAND-NX80'
    }
  },
  {
    id: 'ember-thermal-tumbler',
    title: 'Ember Smart Thermal Tumbler',
    subtitle: 'App-Controlled Precise Temperature Preservation',
    price: 139,
    originalPrice: 165,
    rating: 4.82,
    reviewsCount: 210,
    category: 'lifestyle',
    collection: 'minimalist-living',
    mainImage: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Maintains your preferred drink temperature (50°C to 62.5°C) for up to 3 hours or all day on the included wireless charging coaster.',
    features: [
      'App-Controlled Temperature Presets',
      'Auto-Sleep Sensing Motion Sensor',
      'Scratch-Resistant Ceramic Coating',
      'Wireless Coaster Charger Included'
    ],
    specs: [
      { label: 'Capacity', value: '475ml / 16 oz' },
      { label: 'Battery', value: '3 Hours Off-Coaster' },
      { label: 'IP Rating', value: 'IPX7 Washable' }
    ],
    stockLevel: 6,
    stockStatus: 'low-stock',
    supplier: {
      id: 'spocket-us',
      name: 'Spocket US Direct',
      location: 'CA, United States',
      dispatchTimeHours: 12,
      shippingCarriers: ['USPS First Class'],
      costPrice: 58,
      sku: 'SPK-CUP-EM475'
    },
    isBestSeller: true
  },
  {
    id: 'solstice-ambient-projector',
    title: 'Solstice Sunset Optical Glass Projector',
    subtitle: 'High-Purity Crystal Lens & Atmosphere Creator',
    price: 119,
    originalPrice: 149,
    rating: 4.89,
    reviewsCount: 167,
    category: 'lighting',
    collection: 'minimalist-living',
    mainImage: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Cast cinematic Golden Hour gradient lighting across any interior wall with ultra-dense optical glass optics and quiet heat dissipation fans.',
    features: [
      '99.8% High-Purity Optical Glass Lens',
      '180-Degree Adjustable Metal Swivel Head',
      'Dynamic RGBW Gradient Color Mixing App'
    ],
    specs: [
      { label: 'Lens Diameter', value: '80mm' },
      { label: 'Power Input', value: '10W USB-C' }
    ],
    stockLevel: 12,
    stockStatus: 'low-stock',
    supplier: {
      id: 'cj-lighting-warehouse',
      name: 'CJ Dropshipping US East',
      location: 'NJ, United States',
      dispatchTimeHours: 8,
      shippingCarriers: ['USPS Express'],
      costPrice: 42,
      sku: 'CJ-LENS-SOL119'
    },
    isFlashSale: true,
    flashDiscountPercent: 20
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Products', icon: 'Sparkles' },
  { id: 'audio', name: 'Acoustics & Audio', icon: 'Headphones' },
  { id: 'lighting', name: 'Circadian Lighting', icon: 'Lamp' },
  { id: 'desk-accessories', name: 'Desk Architecture', icon: 'Monitor' },
  { id: 'lifestyle', name: 'Everyday Carry & Travel', icon: 'Briefcase' },
  { id: 'wearables', name: 'Power & Wearables', icon: 'Zap' }
];

export const COLLECTIONS = [
  {
    id: 'studio-series',
    name: 'Studio Series',
    tagline: 'Acoustic fidelity & workspace focus tools.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    itemCount: 4
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    tagline: 'Precision desk ergonomics & aluminium hardware.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    itemCount: 6
  },
  {
    id: 'minimalist-living',
    name: 'Minimalist Living',
    tagline: 'Organic ceramics, soft ambient lights, elevated home aesthetics.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    itemCount: 5
  },
  {
    id: 'travel-tech',
    name: 'Travel & Mobility',
    tagline: 'Weatherproof carry systems & ultra-thin magnetic power.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    itemCount: 3
  }
];
