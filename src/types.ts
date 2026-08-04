export type PageView = 
  | 'home' 
  | 'shop' 
  | 'product-details' 
  | 'collections' 
  | 'about' 
  | 'contact' 
  | 'faq' 
  | 'checkout' 
  | 'why-us' 
  | 'best-sellers' 
  | 'flash-sale' 
  | 'bundle-deals' 
  | 'shipping' 
  | 'tracking' 
  | 'returns-warranty' 
  | 'sustainability' 
  | 'suppliers' 
  | 'community' 
  | 'blog' 
  | 'blog-detail' 
  | 'account' 
  | 'wishlist' 
  | 'compare' 
  | 'automation-hub';

export interface ProductHotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  description: string;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  category: 'audio' | 'lighting' | 'desk-accessories' | 'lifestyle' | 'wearables';
  collection: 'studio-series' | 'executive-suite' | 'minimalist-living' | 'travel-tech';
  mainImage: string;
  gallery: string[];
  description: string;
  features: string[];
  specs: SpecItem[];
  hotspots?: ProductHotspot[];
  stockLevel: number;
  stockStatus: 'in-stock' | 'low-stock' | 'back-order';
  supplier: {
    id: string;
    name: string;
    location: string;
    dispatchTimeHours: number;
    shippingCarriers: string[];
    costPrice: number;
    sku: string;
  };
  variants?: {
    colors?: { name: string; hex: string; image?: string }[];
    sizes?: string[];
  };
  isBestSeller?: boolean;
  isNew?: boolean;
  isFlashSale?: boolean;
  flashDiscountPercent?: number;
  frequentlyBoughtTogetherId?: string;
  beforeAfter?: {
    beforeLabel: string;
    beforeImage: string;
    beforeDesc: string;
    afterLabel: string;
    afterImage: string;
    afterDesc: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface OrderFulfillmentStep {
  title: string;
  description: string;
  timestamp: string;
  status: 'completed' | 'in-progress' | 'pending';
  location?: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  shippingAddress: string;
  items: CartItem[];
  totalAmount: number;
  marginAmount: number;
  orderDate: string;
  status: 'Pending Auto-Routing' | 'Sent to Supplier' | 'Tracking Issued' | 'Customs Cleared' | 'In Transit' | 'Out for Delivery' | 'Delivered';
  supplierName: string;
  supplierSku: string;
  trackingNumber: string;
  carrier: string;
  timeline: OrderFulfillmentStep[];
  autoFulfilled: boolean;
  fulfillmentLog: string[];
}

export interface SupplierSyncStatus {
  supplierId: string;
  supplierName: string;
  apiHealth: '100% Operational' | 'Syncing' | 'Degraded';
  lastSynced: string;
  syncedProductsCount: number;
  autoFulfillSuccessRate: number;
  averageFulfillmentHours: number;
  connectedCarriers: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  avatar: string;
  rating: number;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
  productTitle: string;
  productImage: string;
  date: string;
  videoUrl?: string;
}
