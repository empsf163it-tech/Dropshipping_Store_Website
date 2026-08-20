// DropFlow Studio & Living â€” Product Data
// HTML5 + CSS3 + Vanilla JavaScript â€” No framework required

const PRODUCTS = [
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
      'Tapered 8Â° Incline for Neutral Ergonomic Angle'
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
    description: 'Maintains your preferred drink temperature (50Â°C to 62.5Â°C) for up to 3 hours or all day on the included wireless charging coaster.',
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
  { id: 'all', name: 'All Products', emoji: 'âœ¦' },
  { id: 'audio', name: 'Acoustics & Audio', emoji: 'ðŸŽ§' },
  { id: 'lighting', name: 'Circadian Lighting', emoji: 'ðŸ’¡' },
  { id: 'desk-accessories', name: 'Desk Architecture', emoji: 'ðŸ–¥ï¸' },
  { id: 'lifestyle', name: 'Everyday Carry & Travel', emoji: 'ðŸŽ’' },
  { id: 'wearables', name: 'Power & Wearables', emoji: 'âš¡' }
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

// DropFlow Studio & Living â€” Cart Logic
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
  toast.textContent = 'âœ“ Added to cart!';
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// Initialize badge on page load
document.addEventListener('DOMContentLoaded', updateCartBadge);

// DropFlow Studio & Living â€” Navigation Module
// Hamburger menu, mobile nav, search overlay

document.addEventListener('DOMContentLoaded', function () {

  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavClose = document.getElementById('mobile-nav-close');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  const mobileNavLinks = document.querySelectorAll('#mobile-nav a, #mobile-nav .nav-link');

  // â”€â”€ Open Mobile Menu â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

  // â”€â”€ Close Mobile Menu â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  function closeMenu() {
    if (!mobileNav || !hamburgerBtn) return;
    mobileNav.classList.remove('is-open');
    mobileNav.setAttribute('aria-hidden', 'true');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    if (mobileNavOverlay) mobileNavOverlay.classList.remove('is-visible');
    document.body.style.overflow = '';
    hamburgerBtn.focus();
  }

  // â”€â”€ Event Listeners â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

  // â”€â”€ Header Scroll Behavior â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

  // â”€â”€ Active Nav Link Highlight â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.desktop-nav a, .mobile-nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPage)) {
      link.classList.add('active');
    }
  });

  // â”€â”€ Search Functionality â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

  // â”€â”€ Flash Sale Countdown Timer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

// DropFlow Studio & Living â€” Main Script
// Page-specific interactivity

document.addEventListener('DOMContentLoaded', function () {

  // â”€â”€ Newsletter Form â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

  // â”€â”€ FAQ Accordion â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

  // â”€â”€ Home: Render Collections â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

  // â”€â”€ Home: Render Trending Products â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const trendingGrid = document.getElementById('trending-grid');
  if (trendingGrid && typeof PRODUCTS !== 'undefined') {
    const trending = PRODUCTS.filter(p => p.isBestSeller || p.isFlashSale).slice(0, 4);
    trendingGrid.innerHTML = trending.map(p => renderProductCard(p)).join('');
    initProductCards(trendingGrid);
  }

  // â”€â”€ Home: Render Reviews â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const reviewsGrid = document.getElementById('reviews-grid');
  if (reviewsGrid && typeof CUSTOMER_REVIEWS !== 'undefined') {
    reviewsGrid.innerHTML = CUSTOMER_REVIEWS.map(r => `
      <div class="review-card fade-in">
        <div class="review-stars">${'â˜…'.repeat(r.rating)}</div>
        <h4 class="review-title">${r.title}</h4>
        <p class="review-comment">${r.comment}</p>
        <div class="review-author">
          <img src="${r.avatar}" alt="${r.author}" loading="lazy" referrerpolicy="no-referrer">
          <div>
            <p class="review-author-name">${r.author}</p>
            <p class="review-author-location">${r.location}</p>
          </div>
          ${r.verifiedPurchase ? '<span class="verified-badge">âœ“ Verified</span>' : ''}
        </div>
      </div>
    `).join('');
  }

  // â”€â”€ Shop Page: Category Filter â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

  // â”€â”€ Product Card Renderer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
              <span class="star">â˜…</span>
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

  // â”€â”€ Product Detail Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
    document.title = product.title + ' â€” DropFlow Studio & Living';

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
    if (ratingEl) ratingEl.innerHTML = `<span style="color:var(--accent);font-weight:700;">â˜… ${product.rating}</span> <span style="color:var(--text-muted);">(${product.reviewsCount} reviews)</span>`;

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
      stockEl.innerHTML = `<span class="stock-dot ${product.stockStatus}"></span> <span class="${isLow ? 'stock-low-stock' : 'stock-in-stock'}">${isLow ? `Only ${product.stockLevel} left in stock!` : 'In Stock â€” Ships within 24h'}</span>`;
    }

    if (descEl) descEl.textContent = product.description;

    if (featuresEl && product.features) {
      featuresEl.innerHTML = product.features.map(f => `
        <li class="feature-item"><span class="feature-check">âœ“</span> ${f}</li>
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
        this.textContent = 'âœ“ Added to Cart!';
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

  // â”€â”€ Cart Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
              <button class="cart-qty-btn" data-action="minus" data-id="${item.id}" data-color="${item.selectedColor}" aria-label="Decrease quantity">âˆ’</button>
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

  // â”€â”€ Contact Form â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = 'âœ“ Message Sent!';
        btn.style.background = 'var(--success)';
        this.reset();
        setTimeout(() => {
          btn.textContent = 'Send Message';
          btn.style.background = '';
        }, 3000);
      }
    });
  }

  // â”€â”€ Account Form Tabs â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const accountTabs = document.querySelectorAll('.account-tab-btn');
  accountTabs.forEach(tab => {
    tab.addEventListener('click', function () {
      accountTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

});

