// DropFlow Studio & Living — Product Data
// HTML5 + CSS3 + Vanilla JavaScript — No framework required

const PRODUCTS = [
  // ==========================================
  // BOUGHT PRODUCTS (Order History)
  // ==========================================
  {
    id: 'lumen-desk-mat-pro',
    title: 'Lumen Desk Mat Pro',
    subtitle: 'Magnetic Cable Management & Vegan Leather.',
    price: 89,
    originalPrice: 110,
    rating: 4.8,
    reviewsCount: 142,
    category: 'desk-accessories',
    collection: 'executive-suite',
    mainImage: 'https://via.placeholder.com/800x800.png?text=Lumen+Desk+Mat',
    gallery: [
      'https://via.placeholder.com/800x800.png?text=Lumen+Desk+Mat+1',
      'https://via.placeholder.com/800x800.png?text=Lumen+Desk+Mat+2',
      'https://via.placeholder.com/800x800.png?text=Lumen+Desk+Mat+3'
    ],
    colors: [
      { name: 'Obsidian Black', hex: '#111111' },
      { name: 'Saddle Brown', hex: '#8B5A2B' }
    ],
    features: ['Magnetic charging zone', 'Water-resistant surface', 'Non-slip natural rubber base'],
    description: 'Transform your workspace with the Lumen Desk Mat Pro. Featuring integrated magnetic zones to hide your cables and a premium vegan leather finish that ages beautifully.',
    isNew: false,
    stockStatus: 'high',
    stockLevel: 120
  },
  {
    id: 'beryllium-studio-monitors',
    title: 'Beryllium Studio Monitors',
    subtitle: 'Uncolored Audio Fidelity for Desktop.',
    price: 499,
    originalPrice: 550,
    rating: 5.0,
    reviewsCount: 89,
    category: 'audio',
    collection: 'studio-series',
    mainImage: 'https://via.placeholder.com/800x800.png?text=Studio+Monitors',
    gallery: [
      'https://via.placeholder.com/800x800.png?text=Studio+Monitors+1',
      'https://via.placeholder.com/800x800.png?text=Studio+Monitors+2'
    ],
    colors: [
      { name: 'Matte White', hex: '#F5F5F5' },
      { name: 'Carbon Black', hex: '#222222' }
    ],
    features: ['Beryllium tweeters', 'Active Class-D amplification', 'Acoustic isolation pads included'],
    description: 'Hear exactly what the artist intended. Our studio monitors use aerospace-grade beryllium tweeters for zero distortion at any volume.',
    isNew: false,
    stockStatus: 'medium',
    stockLevel: 45
  },
  {
    id: 'aura-ambient-lightbar',
    title: 'Aura Ambient Lightbar',
    subtitle: 'Glare-free screen illumination.',
    price: 129,
    originalPrice: 150,
    rating: 4.7,
    reviewsCount: 310,
    category: 'lighting',
    collection: 'minimalist-living',
    mainImage: 'https://via.placeholder.com/800x800.png?text=Aura+Lightbar',
    gallery: [
      'https://via.placeholder.com/800x800.png?text=Aura+Lightbar+1',
      'https://via.placeholder.com/800x800.png?text=Aura+Lightbar+2'
    ],
    colors: [
      { name: 'Space Gray', hex: '#4A4A4A' }
    ],
    features: ['Asymmetrical optical design', 'Auto-dimming ambient sensor', 'Ra95 High color rendering'],
    description: 'Prevent eye strain during late-night sessions. The Aura Lightbar mounts perfectly to your monitor, illuminating only your desk area with zero screen glare.',
    isNew: false,
    stockStatus: 'high',
    stockLevel: 200
  },
  {
    id: 'graphite-cable-organizer',
    title: 'Graphite Cable Organizer',
    subtitle: 'Machined aluminum cord control.',
    price: 35,
    originalPrice: 45,
    rating: 4.5,
    reviewsCount: 56,
    category: 'desk-accessories',
    collection: 'executive-suite',
    mainImage: 'https://via.placeholder.com/800x800.png?text=Cable+Organizer',
    gallery: [
      'https://via.placeholder.com/800x800.png?text=Cable+Organizer+1'
    ],
    colors: [
      { name: 'Graphite', hex: '#333333' }
    ],
    features: ['Solid CNC aluminum block', 'Micro-suction base', 'Holds up to 4 thick cables'],
    description: 'Keep your charging cables exactly where you left them. A solid, heavy block of aluminum that anchors to your desk without sticky residue.',
    isNew: false,
    stockStatus: 'high',
    stockLevel: 340
  },

  // ==========================================
  // WISHLIST PRODUCTS
  // ==========================================
  {
    id: 'nomad-titanium-backpack',
    title: 'Nomad Titanium Backpack',
    subtitle: 'Weatherproof. Anti-theft. Ultra-light.',
    price: 249,
    originalPrice: 299,
    rating: 4.9,
    reviewsCount: 412,
    category: 'lifestyle',
    collection: 'travel-tech',
    mainImage: 'https://via.placeholder.com/800x800.png?text=Nomad+Backpack',
    gallery: [
      'https://via.placeholder.com/800x800.png?text=Nomad+Backpack+1',
      'https://via.placeholder.com/800x800.png?text=Nomad+Backpack+2'
    ],
    colors: [
      { name: 'Midnight', hex: '#191919' },
      { name: 'Olive Drab', hex: '#4B5320' }
    ],
    features: ['Ballistic nylon shell', 'Hidden titanium locking mechanism', '16-inch suspended laptop sleeve'],
    description: 'The ultimate daily carry. Built from military-grade ballistic nylon with a structural titanium locking frame to protect your most valuable tech.',
    isNew: true,
    isBestSeller: true,
    stockStatus: 'medium',
    stockLevel: 78
  },
  {
    id: 'acoustic-pods-pro',
    title: 'Acoustic Pods Pro',
    subtitle: 'Next-generation ANC earbuds.',
    price: 199,
    originalPrice: 229,
    rating: 4.6,
    reviewsCount: 890,
    category: 'audio',
    collection: 'travel-tech',
    mainImage: 'https://via.placeholder.com/800x800.png?text=Acoustic+Pods',
    gallery: [
      'https://via.placeholder.com/800x800.png?text=Acoustic+Pods+1',
      'https://via.placeholder.com/800x800.png?text=Acoustic+Pods+2'
    ],
    colors: [
      { name: 'Ceramic White', hex: '#FFFFFF' },
      { name: 'Matte Black', hex: '#111111' }
    ],
    features: ['32 hours battery life', 'Multi-point Bluetooth 5.3', 'Adaptive transparency mode'],
    description: 'Silence the world or let it in. Featuring studio-grade drivers in a pocketable format with AI-powered noise cancellation.',
    isNew: false,
    stockStatus: 'high',
    stockLevel: 450
  },
  {
    id: 'circadian-floor-lamp',
    title: 'Circadian Floor Lamp',
    subtitle: 'Sunlight-mimicking ambient lighting.',
    price: 399,
    originalPrice: 450,
    rating: 4.9,
    reviewsCount: 65,
    category: 'lighting',
    collection: 'minimalist-living',
    mainImage: 'https://via.placeholder.com/800x800.png?text=Floor+Lamp',
    gallery: [
      'https://via.placeholder.com/800x800.png?text=Floor+Lamp+1'
    ],
    colors: [
      { name: 'Brushed Steel', hex: '#7A7A7A' }
    ],
    features: ['Dynamic color temperature (2700K - 6500K)', 'Appless touch control', 'Solid marble base'],
    description: 'A sculptural piece that regulates your sleep cycle. It automatically transitions from bright, cool daylight to warm, melatonin-friendly amber as evening approaches.',
    isNew: true,
    stockStatus: 'low',
    stockLevel: 12
  },
  {
    id: 'executive-ergo-chair',
    title: 'Executive Ergo Chair',
    subtitle: 'Gravity-defying spinal support.',
    price: 899,
    originalPrice: 1050,
    rating: 4.8,
    reviewsCount: 110,
    category: 'desk-accessories',
    collection: 'executive-suite',
    mainImage: 'https://via.placeholder.com/800x800.png?text=Ergo+Chair',
    gallery: [
      'https://via.placeholder.com/800x800.png?text=Ergo+Chair+1',
      'https://via.placeholder.com/800x800.png?text=Ergo+Chair+2'
    ],
    colors: [
      { name: 'Ash Grey', hex: '#B2B2B2' },
      { name: 'Onyx', hex: '#000000' }
    ],
    features: ['Dynamic lumbar tracking', 'Cooling mesh weave', 'Machined aluminum skeleton'],
    description: 'Designed to move with you. The Executive Ergo chair adapts to your spine in real-time, completely eliminating pressure points during marathon sessions.',
    isNew: false,
    stockStatus: 'medium',
    stockLevel: 30
  },

  // ==========================================
  // LIKED PRODUCTS
  // ==========================================
  {
    id: 'quantum-power-bank',
    title: 'Quantum Power Bank',
    subtitle: '20,000mAh with 100W PD Output.',
    price: 119,
    originalPrice: 140,
    rating: 4.7,
    reviewsCount: 340,
    category: 'wearables',
    collection: 'travel-tech',
    mainImage: 'https://via.placeholder.com/800x800.png?text=Quantum+Power',
    gallery: [
      'https://via.placeholder.com/800x800.png?text=Quantum+Power+1'
    ],
    colors: [
      { name: 'Gunmetal', hex: '#2C3539' }
    ],
    features: ['Charges a laptop to 50% in 30 mins', 'OLED status display', 'Airline safe capacity'],
    description: 'Never hunt for a wall outlet again. The Quantum packs enough density to charge your high-performance laptop and phone simultaneously at full speed.',
    isNew: false,
    stockStatus: 'high',
    stockLevel: 180
  },
  {
    id: 'magnetic-desk-charger',
    title: 'Magnetic Float Charger',
    subtitle: '3-in-1 wireless charging tree.',
    price: 149,
    originalPrice: 179,
    rating: 4.8,
    reviewsCount: 220,
    category: 'wearables',
    collection: 'executive-suite',
    mainImage: 'https://via.placeholder.com/800x800.png?text=Float+Charger',
    gallery: [
      'https://via.placeholder.com/800x800.png?text=Float+Charger+1'
    ],
    colors: [
      { name: 'Silver', hex: '#C0C0C0' },
      { name: 'Black', hex: '#000000' }
    ],
    features: ['15W MagSafe compatible', 'Hidden Apple Watch puck', 'Weighted zinc alloy base'],
    description: 'Elevate your devices. A minimalist, architectural charging stand that powers your phone, watch, and earbuds while hiding all wires.',
    isNew: false,
    stockStatus: 'high',
    stockLevel: 210
  },
  {
    id: 'travel-coffee-kit',
    title: 'Nomad Coffee Kit',
    subtitle: 'Titanium burr grinder & aeropress.',
    price: 189,
    originalPrice: 210,
    rating: 4.9,
    reviewsCount: 154,
    category: 'lifestyle',
    collection: 'travel-tech',
    mainImage: 'https://via.placeholder.com/800x800.png?text=Coffee+Kit',
    gallery: [
      'https://via.placeholder.com/800x800.png?text=Coffee+Kit+1'
    ],
    colors: [
      { name: 'Titanium', hex: '#878681' }
    ],
    features: ['Conical titanium burrs', 'Nested travel case', 'Aerospace aluminum body'],
    description: 'Cafe-quality espresso, anywhere on earth. Our ultra-compact hand grinder and extraction kit is built for the purist on the go.',
    isNew: true,
    stockStatus: 'low',
    stockLevel: 18
  },
  {
    id: 'alloy-headphone-stand',
    title: 'Alloy Headphone Stand',
    subtitle: 'Industrial display for premium audio.',
    price: 79,
    originalPrice: 99,
    rating: 4.6,
    reviewsCount: 88,
    category: 'desk-accessories',
    collection: 'studio-series',
    mainImage: 'https://via.placeholder.com/800x800.png?text=Headphone+Stand',
    gallery: [
      'https://via.placeholder.com/800x800.png?text=Headphone+Stand+1'
    ],
    colors: [
      { name: 'Matte Black', hex: '#111111' }
    ],
    features: ['Curved silicone resting pad', 'Solid 2lb base', 'Integrated cord wrap'],
    description: 'Give your high-fidelity headphones the pedestal they deserve. Designed to prevent headband denting with a perfectly contoured resting surface.',
    isNew: false,
    stockStatus: 'high',
    stockLevel: 140
  },

  // ==========================================
  // OTHER / NEW ARRIVALS
  // ==========================================
  {
    id: 'studio-boom-mic-arm',
    title: 'Studio Boom Mic Arm',
    subtitle: 'Silent motion. Hidden cable channel.',
    price: 119,
    originalPrice: 140,
    rating: 4.8,
    reviewsCount: 204,
    category: 'audio',
    collection: 'studio-series',
    mainImage: 'https://via.placeholder.com/800x800.png?text=Boom+Arm',
    gallery: [
      'https://via.placeholder.com/800x800.png?text=Boom+Arm+1'
    ],
    colors: [
      { name: 'Black', hex: '#000000' }
    ],
    features: ['Internal spring mechanism', 'Toolless tension adjustment', 'Low-profile desk clamp'],
    description: 'Broadcast-quality mounting. Smooth, completely silent articulation with an internal channel that completely hides your XLR or USB cable.',
    isNew: true,
    stockStatus: 'medium',
    stockLevel: 65
  },
  {
    id: 'zenith-smart-bulb',
    title: 'Zenith Smart Bulb 2-Pack',
    subtitle: 'Thread-enabled circadian glow.',
    price: 59,
    originalPrice: 70,
    rating: 4.5,
    reviewsCount: 450,
    category: 'lighting',
    collection: 'minimalist-living',
    mainImage: 'https://via.placeholder.com/800x800.png?text=Smart+Bulbs',
    gallery: [
      'https://via.placeholder.com/800x800.png?text=Smart+Bulbs+1'
    ],
    colors: [
      { name: 'Frosted Glass', hex: '#EAEAEA' }
    ],
    features: ['Instant Thread network response', '1100 lumens peak brightness', 'Seamless circadian sync'],
    description: 'Upgrade your existing lamps. These smart bulbs automatically track the sun to provide energizing light during the day and relaxing warmth at night.',
    isNew: false,
    isBestSeller: true,
    stockStatus: 'high',
    stockLevel: 800
  },
  {
    id: 'carbon-fiber-briefcase',
    title: 'Carbon Fiber Briefcase',
    subtitle: 'The modern attaché.',
    price: 399,
    originalPrice: 450,
    rating: 4.9,
    reviewsCount: 42,
    category: 'lifestyle',
    collection: 'executive-suite',
    mainImage: 'https://via.placeholder.com/800x800.png?text=Briefcase',
    gallery: [
      'https://via.placeholder.com/800x800.png?text=Briefcase+1'
    ],
    colors: [
      { name: 'Carbon Weave', hex: '#2B2B2B' }
    ],
    features: ['Real 3K carbon fiber shell', 'TSA-approved biometric lock', 'Impact resistant'],
    description: 'Incredibly light. Unbelievably strong. Make a statement in the boardroom with an attaché case engineered like a hypercar.',
    isNew: true,
    stockStatus: 'low',
    stockLevel: 9
  },
  {
    id: 'ergo-split-keyboard',
    title: 'Ergo Split Mechanical',
    subtitle: 'Ortholinear typing bliss.',
    price: 289,
    originalPrice: 320,
    rating: 4.7,
    reviewsCount: 190,
    category: 'desk-accessories',
    collection: 'studio-series',
    mainImage: 'https://via.placeholder.com/800x800.png?text=Split+Keyboard',
    gallery: [
      'https://via.placeholder.com/800x800.png?text=Split+Keyboard+1'
    ],
    colors: [
      { name: 'Almond', hex: '#EED9C4' },
      { name: 'Slate', hex: '#4A5054' }
    ],
    features: ['Hot-swappable switches', 'Fully programmable via QMK', 'Tentable solid brass base'],
    description: 'Relieve wrist strain instantly. A split, fully programmable mechanical keyboard that allows your hands to rest at their natural shoulder width.',
    isNew: true,
    stockStatus: 'medium',
    stockLevel: 44
  },
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
    colors: [
      { name: 'Space Obsidian', hex: '#1c1d21' },
      { name: 'Titanium Silver', hex: '#cfd4dc' },
      { name: 'Warm Cream', hex: '#e8e2d5' }
    ],
    stockLevel: 14,
    stockStatus: 'low-stock',
    isBestSeller: true,
    isFlashSale: true,
    flashDiscountPercent: 18
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
    colors: [
      { name: 'Sandstone Beige', hex: '#d9cdbe' },
      { name: 'Nordic Charcoal', hex: '#2b2c30' },
      { name: 'Terracotta Warm', hex: '#b86d52' }
    ],
    stockLevel: 32,
    stockStatus: 'in-stock',
    isBestSeller: true
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
    colors: [],
    stockLevel: 8,
    stockStatus: 'low-stock',
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
    colors: [],
    stockLevel: 45,
    stockStatus: 'in-stock',
    isBestSeller: true
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
    mainImage: 'assets/images/powerbank.jpg',
    gallery: [
      'assets/images/powerbank.jpg'
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
    colors: [],
    stockLevel: 19,
    stockStatus: 'in-stock',
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
    colors: [],
    stockLevel: 22,
    stockStatus: 'in-stock'
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
    colors: [],
    stockLevel: 6,
    stockStatus: 'low-stock',
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
    colors: [],
    stockLevel: 12,
    stockStatus: 'low-stock',
    isFlashSale: true,
    flashDiscountPercent: 20
  }
];

const CATEGORIES = [
  { id: 'all', name: 'All Products', emoji: '✦' },
  { id: 'audio', name: 'Acoustics & Audio', emoji: '🎧' },
  { id: 'lighting', name: 'Circadian Lighting', emoji: '💡' },
  { id: 'desk-accessories', name: 'Desk Architecture', emoji: '🖥️' },
  { id: 'lifestyle', name: 'Everyday Carry & Travel', emoji: '🎒' },
  { id: 'wearables', name: 'Power & Wearables', emoji: '⚡' }
];

const COLLECTIONS = [
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

const CUSTOMER_REVIEWS = [
  {
    id: 'rev-1',
    author: 'Elena Rostova',
    location: 'Zurich, Switzerland',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    title: 'The soundstage on Horizon is transcendent.',
    comment: 'I replaced my studio Sennheisers with DropFlow Horizon. The beryllium driver dynamics paired with ANC are second to none. Ordering was seamless and tracking updated live every step from Stockholm!',
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

const FAQS = [
  {
    q: 'How does order fulfillment work?',
    a: 'When you place an order on DropFlow, our intelligent fulfillment router calculates the optimal warehouse based on your delivery address, live stock availability, and shipping speed. Order details are transmitted seamlessly, and a tracking ID is issued as soon as the item leaves our facility.'
  },
  {
    q: 'What is DropFlow\'s 30-Day Money-Back Guarantee?',
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

// Helper: get discount percent
function getDiscountPercent(product) {
  if (product.originalPrice > product.price) {
    return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  }
  return 0;
}

// Helper: get product by id
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}

// Helper: get products by category
function getProductsByCategory(categoryId) {
  if (categoryId === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === categoryId);
}

// Helper: search products
function searchProducts(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return PRODUCTS.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.subtitle.toLowerCase().includes(q)
  );
}

// DropFlow Studio & Living — Cart Logic
// Uses localStorage for persistence

const CART_KEY = 'dropflow_cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(product, selectedColor, quantity) {
  quantity = quantity || 1;
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id && item.selectedColor === (selectedColor || ''));
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      originalPrice: product.originalPrice,
      mainImage: product.mainImage,
      selectedColor: selectedColor || (product.colors && product.colors[0] ? product.colors[0].name : ''),
      quantity: quantity
    });
  }
  saveCart(cart);
  showAddedToCartFeedback();
}

function removeFromCart(productId, selectedColor) {
  let cart = getCart();
  cart = cart.filter(item => !(item.id === productId && item.selectedColor === selectedColor));
  saveCart(cart);
}

function updateCartItemQty(productId, selectedColor, quantity) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId && i.selectedColor === selectedColor);
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId, selectedColor);
      return;
    }
    item.quantity = quantity;
    saveCart(cart);
  }
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function getCartSubtotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function updateCartBadge() {
  const count = getCartCount();
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

function showAddedToCartFeedback() {
  // Small toast notification
  let toast = document.getElementById('cart-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cart-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }
  toast.textContent = '✓ Added to cart!';
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// Initialize badge on page load
document.addEventListener('DOMContentLoaded', updateCartBadge);

// DropFlow Studio & Living — Navigation Module
// Hamburger menu, mobile nav, search overlay

document.addEventListener('DOMContentLoaded', function () {

  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavClose = document.getElementById('mobile-nav-close');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  const mobileNavLinks = document.querySelectorAll('#mobile-nav a, #mobile-nav .nav-link');

  // ── Open Mobile Menu ──────────────────────────────────────────────────────
  function openMenu() {
    if (!mobileNav || !hamburgerBtn) return;
    mobileNav.classList.add('is-open');
    mobileNav.setAttribute('aria-hidden', 'false');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    if (mobileNavOverlay) mobileNavOverlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
    // Focus first link
    const firstLink = mobileNav.querySelector('a, button');
    if (firstLink) firstLink.focus();
  }

  // ── Close Mobile Menu ─────────────────────────────────────────────────────
  function closeMenu() {
    if (!mobileNav || !hamburgerBtn) return;
    mobileNav.classList.remove('is-open');
    mobileNav.setAttribute('aria-hidden', 'true');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    if (mobileNavOverlay) mobileNavOverlay.classList.remove('is-visible');
    document.body.style.overflow = '';
    hamburgerBtn.focus();
  }

  // ── Event Listeners ───────────────────────────────────────────────────────
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function () {
      const isOpen = mobileNav.classList.contains('is-open');
      isOpen ? closeMenu() : openMenu();
    });
  }

  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeMenu);
  }

  if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener('click', closeMenu);
  }

  // Close on nav link click
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // ── Header Scroll Behavior ─────────────────────────────────────────────────
  const header = document.querySelector('.site-header');
  if (header) {
    let lastScroll = 0;
    window.addEventListener('scroll', function () {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 80) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ── Active Nav Link Highlight ─────────────────────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.desktop-nav a, .mobile-nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPage)) {
      link.classList.add('active');
    }
  });

  // ── Search Functionality ──────────────────────────────────────────────────
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const mobileSearchInput = document.getElementById('mobile-search-input');

  function performSearch(query, resultsContainer) {
    if (!resultsContainer) return;
    const results = searchProducts(query);
    if (!query || query.length < 2) {
      resultsContainer.style.display = 'none';
      return;
    }
    resultsContainer.style.display = 'block';
    if (results.length === 0) {
      resultsContainer.innerHTML = '<p class="search-empty">No products found for "' + query + '"</p>';
      return;
    }
    resultsContainer.innerHTML = results.map(p => `
      <a href="product.html?id=${p.id}" class="search-result-item">
        <img src="${p.mainImage}" alt="${p.title}" loading="lazy" referrerpolicy="no-referrer">
        <div>
          <p class="search-result-title">${p.title}</p>
          <p class="search-result-price">$${p.price}</p>
        </div>
      </a>
    `).join('');
  }

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', function () {
      performSearch(this.value.trim(), searchResults);
    });

    // Close search results on click outside
    document.addEventListener('click', function (e) {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.style.display = 'none';
      }
    });
  }

  if (mobileSearchInput) {
    mobileSearchInput.addEventListener('input', function () {
      const mobileResults = document.getElementById('mobile-search-results');
      performSearch(this.value.trim(), mobileResults);
    });
  }

  // ── Flash Sale Countdown Timer ─────────────────────────────────────────────
  const timerEl = document.getElementById('flash-timer');
  if (timerEl) {
    // Start at 2h 48m 12s
    let totalSeconds = 2 * 3600 + 48 * 60 + 12;
    function updateTimer() {
      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;
      timerEl.textContent =
        String(h).padStart(2, '0') + ':' +
        String(m).padStart(2, '0') + ':' +
        String(s).padStart(2, '0');
      totalSeconds--;
      if (totalSeconds < 0) totalSeconds = 3 * 3600; // reset to 3h loop
    }
    updateTimer();
    setInterval(updateTimer, 1000);
  }

});

// DropFlow Studio & Living — Main Script
// Page-specific interactivity

document.addEventListener('DOMContentLoaded', function () {

  // ── Newsletter Form ───────────────────────────────────────────────────────
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input || !input.value) return;
      const successEl = form.parentElement.querySelector('.newsletter-success');
      form.style.display = 'none';
      if (successEl) successEl.classList.add('show');
    });
  });

  // ── FAQ Accordion ─────────────────────────────────────────────────────────
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function () {
        const isOpen = item.classList.contains('open');
        // Close all
        faqItems.forEach(i => i.classList.remove('open'));
        // Toggle clicked
        if (!isOpen) item.classList.add('open');
      });
    }
  });

  // ── Home: Render Collections ──────────────────────────────────────────────
  const collectionsGrid = document.getElementById('collections-grid');
  if (collectionsGrid && typeof COLLECTIONS !== 'undefined') {
    collectionsGrid.innerHTML = COLLECTIONS.map(col => `
      <a href="shop.html?collection=${col.id}" class="collection-card fade-in">
        <img src="${col.image}" alt="${col.name}" loading="lazy" referrerpolicy="no-referrer">
        <div class="collection-card-overlay">
          <h3>${col.name}</h3>
          <p>${col.tagline}</p>
        </div>
      </a>
    `).join('');
  }

  // ── Home: Render Trending Products ────────────────────────────────────────
  const trendingGrid = document.getElementById('trending-grid');
  if (trendingGrid && typeof PRODUCTS !== 'undefined') {
    const trending = PRODUCTS.filter(p => p.isBestSeller || p.isFlashSale).slice(0, 4);
    trendingGrid.innerHTML = trending.map(p => renderProductCard(p)).join('');
    initProductCards(trendingGrid);
  }

  // ── Home: Render Reviews ──────────────────────────────────────────────────
  const reviewsGrid = document.getElementById('reviews-grid');
  if (reviewsGrid && typeof CUSTOMER_REVIEWS !== 'undefined') {
    reviewsGrid.innerHTML = CUSTOMER_REVIEWS.map(r => `
      <div class="review-card fade-in">
        <div class="review-stars">${'★'.repeat(r.rating)}</div>
        <h4 class="review-title">${r.title}</h4>
        <p class="review-comment">${r.comment}</p>
        <div class="review-author">
          <img src="${r.avatar}" alt="${r.author}" loading="lazy" referrerpolicy="no-referrer">
          <div>
            <p class="review-author-name">${r.author}</p>
            <p class="review-author-location">${r.location}</p>
          </div>
          ${r.verifiedPurchase ? '<span class="verified-badge">✓ Verified</span>' : ''}
        </div>
      </div>
    `).join('');
  }

  // ── Shop Page: Category Filter ────────────────────────────────────────────
  const shopGrid = document.getElementById('shop-grid');
  const categoryTabs = document.querySelectorAll('.category-tab');

  if (shopGrid && typeof PRODUCTS !== 'undefined') {
    // Check for collection param
    const params = new URLSearchParams(window.location.search);
    const collectionId = params.get('collection');
    let initialCategory = params.get('category') || 'all';

    let filteredProducts = initialCategory === 'all'
      ? PRODUCTS
      : getProductsByCategory(initialCategory);

    if (collectionId) {
      filteredProducts = PRODUCTS.filter(p => p.collection === collectionId);
      // Update section title
      const col = COLLECTIONS.find(c => c.id === collectionId);
      if (col) {
        const shopTitle = document.getElementById('shop-page-title');
        if (shopTitle) shopTitle.textContent = col.name;
      }
    }

    renderShopGrid(filteredProducts);

    // Highlight active category tab
    categoryTabs.forEach(tab => {
      if (tab.dataset.category === initialCategory) tab.classList.add('active');
      tab.addEventListener('click', function () {
        categoryTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const cat = this.dataset.category;
        const products = getProductsByCategory(cat);
        renderShopGrid(products);
      });
    });
  }

  function renderShopGrid(products) {
    if (!shopGrid) return;
    if (products.length === 0) {
      shopGrid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:4rem;color:var(--text-muted);">No products found in this category.</div>';
      return;
    }
    shopGrid.innerHTML = products.map(p => renderProductCard(p)).join('');
    initProductCards(shopGrid);
  }

  // ── Product Card Renderer ─────────────────────────────────────────────────
  function renderProductCard(p) {
    const discount = getDiscountPercent(p);
    const viewingCount = 12 + Math.floor(p.id.length * 2.5);
    const colorsHtml = p.colors && p.colors.length > 0
      ? `<div class="color-swatches">
          ${p.colors.map((c, i) => `<button class="color-swatch-btn ${i === 0 ? 'active' : ''}" style="background:${c.hex}" title="${c.name}" data-name="${c.name}" aria-label="${c.name}"></button>`).join('')}
          <span class="swatch-name">${p.colors[0].name}</span>
        </div>`
      : '';

    return `
      <article class="product-card" data-id="${p.id}">
        <a href="product.html?id=${p.id}" class="product-card-image-link" style="display:block;text-decoration:none;">
          <div class="product-card-image">
            <img src="${p.mainImage}" alt="${p.title}" loading="lazy" referrerpolicy="no-referrer">
            <div class="badge-stack">
              ${p.isBestSeller ? '<span class="badge badge-bestseller">Best Seller</span>' : ''}
              ${p.isNew ? '<span class="badge badge-new">New</span>' : ''}
              ${discount > 0 ? `<span class="badge badge-sale">-${discount}% OFF</span>` : ''}
            </div>
            <div class="viewing-indicator">
              <span class="viewing-dot"></span> ${viewingCount} viewing
            </div>
          </div>
        </a>
        <div class="product-card-info">
          <div class="product-card-meta">
            <span class="product-category">${p.category}</span>
            <div class="product-rating">
              <span class="star">★</span>
              <span class="rating-num">${p.rating}</span>
              <span class="review-count">(${p.reviewsCount})</span>
            </div>
          </div>
          <a href="product.html?id=${p.id}" style="text-decoration:none;">
            <h3 class="product-card-title">${p.title}</h3>
          </a>
          <p class="product-card-subtitle">${p.subtitle}</p>
          ${colorsHtml}
          <div class="product-price-row">
            <div>
              <span class="price-current">$${p.price}</span>
              ${p.originalPrice > p.price ? `<span class="price-original">$${p.originalPrice}</span>` : ''}
            </div>
            <button class="quick-add-btn" data-id="${p.id}" data-color="${p.colors && p.colors[0] ? p.colors[0].name : ''}" aria-label="Add ${p.title} to cart">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span>Quick Add</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  // Attach event listeners for quick-add and color swatches
  function initProductCards(container) {
    // Quick Add buttons
    container.querySelectorAll('.quick-add-btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const productId = this.dataset.id;
        const color = this.dataset.color;
        const product = getProductById(productId);
        if (product) {
          addToCart(product, color, 1);
          const origHtml = this.innerHTML;
          this.classList.add('added');
          this.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span>Added!</span>';
          setTimeout(() => {
            this.classList.remove('added');
            this.innerHTML = origHtml;
          }, 1400);
        }
      });
    });

    // Color swatch selection
    container.querySelectorAll('.color-swatches').forEach(swatchGroup => {
      const swatches = swatchGroup.querySelectorAll('.color-swatch-btn');
      const nameEl = swatchGroup.querySelector('.swatch-name');
      swatches.forEach(swatch => {
        swatch.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          swatches.forEach(s => s.classList.remove('active'));
          this.classList.add('active');
          if (nameEl) nameEl.textContent = this.dataset.name;
          // Update quick-add btn color
          const card = this.closest('.product-card');
          if (card) {
            const addBtn = card.querySelector('.quick-add-btn');
            if (addBtn) addBtn.dataset.color = this.dataset.name;
          }
        });
      });
    });
  }

  // ── Product Detail Page ───────────────────────────────────────────────────
  const productDetailSection = document.getElementById('product-detail-section');
  if (productDetailSection) {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const product = productId ? getProductById(productId) : PRODUCTS[0];

    if (!product) {
      productDetailSection.innerHTML = '<div class="container" style="padding:4rem 0;text-align:center;"><h2>Product not found.</h2><a href="shop.html" class="btn btn-primary" style="margin-top:1rem;">Browse Shop</a></div>';
      return;
    }

    // Update page title
    document.title = product.title + ' — DropFlow Studio & Living';

    // Gallery
    const mainImg = document.getElementById('gallery-main-img');
    const thumbsContainer = document.getElementById('gallery-thumbs');
    if (mainImg && thumbsContainer) {
      mainImg.src = product.mainImage;
      mainImg.alt = product.title;
      thumbsContainer.innerHTML = product.gallery.map((img, i) => `
        <button class="gallery-thumb ${i === 0 ? 'active' : ''}" data-src="${img}" aria-label="View image ${i+1}">
          <img src="${img}" alt="${product.title} view ${i+1}" loading="lazy" referrerpolicy="no-referrer">
        </button>
      `).join('');
      thumbsContainer.querySelectorAll('.gallery-thumb').forEach(thumb => {
        thumb.addEventListener('click', function () {
          thumbsContainer.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
          this.classList.add('active');
          mainImg.style.opacity = '0';
          setTimeout(() => {
            mainImg.src = this.dataset.src;
            mainImg.style.opacity = '1';
          }, 200);
        });
      });
    }

    // Info
    const titleEl = document.getElementById('pd-title');
    const subtitleEl = document.getElementById('pd-subtitle');
    const ratingEl = document.getElementById('pd-rating');
    const priceEl = document.getElementById('pd-price');
    const stockEl = document.getElementById('pd-stock');
    const descEl = document.getElementById('pd-desc');
    const featuresEl = document.getElementById('pd-features');

    if (titleEl) titleEl.textContent = product.title;
    if (subtitleEl) subtitleEl.textContent = product.subtitle;
    if (ratingEl) ratingEl.innerHTML = `<span style="color:var(--accent);font-weight:700;">★ ${product.rating}</span> <span style="color:var(--text-muted);">(${product.reviewsCount} reviews)</span>`;

    if (priceEl) {
      const discount = getDiscountPercent(product);
      priceEl.innerHTML = `
        <span class="price-big">$${product.price}</span>
        ${product.originalPrice > product.price ? `<span class="price-strikethrough">$${product.originalPrice}</span>` : ''}
        ${discount > 0 ? `<span class="price-save">Save ${discount}%</span>` : ''}
      `;
    }

    if (stockEl) {
      const isLow = product.stockStatus === 'low-stock';
      stockEl.innerHTML = `<span class="stock-dot ${product.stockStatus}"></span> <span class="${isLow ? 'stock-low-stock' : 'stock-in-stock'}">${isLow ? `Only ${product.stockLevel} left in stock!` : 'In Stock — Ships within 24h'}</span>`;
    }

    if (descEl) descEl.textContent = product.description;

    if (featuresEl && product.features) {
      featuresEl.innerHTML = product.features.map(f => `
        <li class="feature-item"><span class="feature-check">✓</span> ${f}</li>
      `).join('');
    }

    // Color picker
    const colorPicker = document.getElementById('pd-colors');
    const colorLabel = document.getElementById('pd-color-label');
    let selectedColor = product.colors && product.colors[0] ? product.colors[0].name : '';

    if (colorPicker && product.colors && product.colors.length > 0) {
      colorPicker.innerHTML = product.colors.map((c, i) => `
        <button class="color-pick-btn ${i === 0 ? 'active' : ''}" style="background:${c.hex}" title="${c.name}" data-name="${c.name}" aria-label="${c.name}"></button>
      `).join('');
      if (colorLabel) colorLabel.textContent = 'Color: ' + selectedColor;
      colorPicker.querySelectorAll('.color-pick-btn').forEach(btn => {
        btn.addEventListener('click', function () {
          colorPicker.querySelectorAll('.color-pick-btn').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          selectedColor = this.dataset.name;
          if (colorLabel) colorLabel.textContent = 'Color: ' + selectedColor;
        });
      });
    } else if (colorPicker) {
      colorPicker.closest('.color-picker-section').style.display = 'none';
    }

    // Specs
    const specsBody = document.getElementById('specs-body');
    if (specsBody && product.specs) {
      specsBody.innerHTML = product.specs.map(s => `
        <tr><th>${s.label}</th><td>${s.value}</td></tr>
      `).join('');
    }

    // Quantity
    let qty = 1;
    const qtyDisplay = document.getElementById('qty-display');
    const qtyMinus = document.getElementById('qty-minus');
    const qtyPlus = document.getElementById('qty-plus');

    function updateQtyDisplay() {
      if (qtyDisplay) qtyDisplay.textContent = qty;
    }

    if (qtyMinus) qtyMinus.addEventListener('click', () => { if (qty > 1) { qty--; updateQtyDisplay(); } });
    if (qtyPlus) qtyPlus.addEventListener('click', () => { qty++; updateQtyDisplay(); });

    // Add to Cart
    const addToCartBtn = document.getElementById('pd-add-to-cart');
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', function () {
        addToCart(product, selectedColor, qty);
        this.textContent = '✓ Added to Cart!';
        this.style.background = 'var(--success)';
        setTimeout(() => {
          this.textContent = 'Add to Cart';
          this.style.background = '';
        }, 1800);
      });
    }

    // Buy Now
    const buyNowBtn = document.getElementById('pd-buy-now');
    if (buyNowBtn) {
      buyNowBtn.addEventListener('click', function () {
        addToCart(product, selectedColor, qty);
        window.location.href = 'cart.html';
      });
    }

    // Related Products
    const relatedGrid = document.getElementById('related-grid');
    if (relatedGrid) {
      const related = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
      relatedGrid.innerHTML = (related.length > 0 ? related : PRODUCTS.filter(p => p.id !== product.id).slice(0, 4))
        .map(p => renderProductCard(p)).join('');
      initProductCards(relatedGrid);
    }
  }

  // ── Cart Page ─────────────────────────────────────────────────────────────
  const cartSection = document.getElementById('cart-section');
  if (cartSection) {
    renderCartPage();
  }

  function renderCartPage() {
    const cart = getCart();
    const cartItemsList = document.getElementById('cart-items-list');
    const cartEmptyEl = document.getElementById('cart-empty');
    const cartSummaryEl = document.getElementById('cart-summary');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');

    if (!cartItemsList) return;

    if (cart.length === 0) {
      if (cartEmptyEl) cartEmptyEl.style.display = 'block';
      if (cartSummaryEl) cartSummaryEl.style.display = 'none';
      cartItemsList.style.display = 'none';
      return;
    }

    if (cartEmptyEl) cartEmptyEl.style.display = 'none';
    if (cartSummaryEl) cartSummaryEl.style.display = 'block';
    cartItemsList.style.display = 'flex';

    cartItemsList.innerHTML = cart.map(item => `
      <article class="cart-item">
        <div class="cart-item-image">
          <img src="${item.mainImage}" alt="${item.title}" loading="lazy" referrerpolicy="no-referrer">
        </div>
        <div class="cart-item-details">
          <h3 class="cart-item-title">${item.title}</h3>
          ${item.selectedColor ? `<p class="cart-item-variant">Color: ${item.selectedColor}</p>` : ''}
          <div class="cart-item-controls">
            <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
            <div class="cart-qty-controls">
              <button class="cart-qty-btn" data-action="minus" data-id="${item.id}" data-color="${item.selectedColor}" aria-label="Decrease quantity">−</button>
              <span class="cart-qty-num">${item.quantity}</span>
              <button class="cart-qty-btn" data-action="plus" data-id="${item.id}" data-color="${item.selectedColor}" aria-label="Increase quantity">+</button>
            </div>
            <button class="cart-remove-btn" data-id="${item.id}" data-color="${item.selectedColor}" aria-label="Remove ${item.title}">Remove</button>
          </div>
        </div>
      </article>
    `).join('');

    // Qty buttons
    cartItemsList.querySelectorAll('.cart-qty-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const id = this.dataset.id;
        const color = this.dataset.color;
        const currentCart = getCart();
        const item = currentCart.find(i => i.id === id && i.selectedColor === color);
        if (!item) return;
        const newQty = this.dataset.action === 'plus' ? item.quantity + 1 : item.quantity - 1;
        updateCartItemQty(id, color, newQty);
        renderCartPage();
      });
    });

    // Remove buttons
    cartItemsList.querySelectorAll('.cart-remove-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        removeFromCart(this.dataset.id, this.dataset.color);
        renderCartPage();
      });
    });

    // Summary
    const subtotal = getCartSubtotal();
    const freeShipping = subtotal >= 150;
    if (subtotalEl) subtotalEl.textContent = '$' + subtotal.toFixed(2);
    if (totalEl) totalEl.textContent = '$' + subtotal.toFixed(2);

    const shippingEl = document.getElementById('cart-shipping');
    if (shippingEl) {
      shippingEl.innerHTML = freeShipping
        ? '<span class="free">Free</span>'
        : '<span>$9.99</span>';
    }
  }

  // ── Contact Form ──────────────────────────────────────────────────────────
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = '✓ Message Sent!';
        btn.style.background = 'var(--success)';
        this.reset();
        setTimeout(() => {
          btn.textContent = 'Send Message';
          btn.style.background = '';
        }, 3000);
      }
    });
  }

  // ── Account Form Tabs ─────────────────────────────────────────────────────
  const accountTabs = document.querySelectorAll('.account-tab-btn');
  accountTabs.forEach(tab => {
    tab.addEventListener('click', function () {
      accountTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

});

