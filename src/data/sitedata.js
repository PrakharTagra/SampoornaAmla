/**
 * ==============================================================================
 * SAMPOORNA AMLA (PRATAPGARH AMLA) - MASTER SITE DATA & ASSET REPOSITORY
 * ==============================================================================
 * Single source of truth for ALL content, images, products, navigation,
 * contacts, brand values, FAQs, and policies across the entire website.
 *
 * Any changes made here reflect instantly across all pages and components.
 */

// -----------------------------------------------------------------------------
// 1. ALL IMAGES USED ON THE WEBSITE
// -----------------------------------------------------------------------------
export const siteImages = {
  // Brand Logo
  logo: "/ChatGPT%20Image%20Sep%2012,%202026,%2012_01_40%20PM.png",
  logoFallback: "/images/logo.png",

  // Favicons
  favicon: "/favicon.ico",
  faviconSvg: "/favicon.svg",
  appleTouchIcon: "/apple-touch-icon.png",

  // Hero Banners
  hero: {
    bannerRoyal: "/images/hero/banner-royal.png",
    bannerAyurvedic: "/images/hero/banner-ayurvedic.png",
    bannerHarvest: "/images/hero/banner-3.png",
  },

  // Story & Heritage
  story: {
    heroBanner: "/Amla%20Ecom%20store%20images/Amla%20Ecom%20store%20images/Other/Our%20Story%20New.png",
    bannerAlt: "/images/story/our-story.png",
    productOrigin: "/images/story/product-origin.jpg",
    harvestStep: "/images/story/1.png",
    dryingStep: "/images/story/3.jpg",
    packagingStep: "/images/story/4.jpg",
  },

  // About Page
  about: {
    heroBanner: "/images/hero/banner-3.png",
  },

  // Product Catalog Images
  products: {
    pureAmla: {
      thumbnail: "/images/products/pure-amla/main.png",
      images: [
        "/images/products/pure-amla/main.png",
        "/images/products/pure-amla/bottle-front.png",
        "/images/products/pure-amla/open-jar.png",
        "/images/products/pure-amla/bottle-back.png",
        "/images/products/pure-amla/slide.png",
      ],
    },
    amlaPowder: {
      thumbnail: "/images/products/amla-powder/main.png",
      images: [
        "/images/products/amla-powder/main.png",
        "/images/products/amla-powder/jar.png",
        "/images/products/amla-powder/bottle-front.png",
        "/images/products/amla-powder/bottle-back.png",
      ],
    },
    driedAmla: {
      thumbnail: "/images/products/dried-amla/main.png",
      images: [
        "/images/products/dried-amla/main.png",
        "/images/products/dried-amla/bottle-front.png",
        "/images/products/dried-amla/open-jar.png",
        "/images/products/dried-amla/bottle-back.png",
        "/images/products/dried-amla/bucket.png",
      ],
    },
  },
};

// -----------------------------------------------------------------------------
// 2. BRAND & SITE METADATA
// -----------------------------------------------------------------------------
export const siteMetadata = {
  brandName: "Amla Sampurna",
  fullName: "Sampoorna Amla - Pratapgarh Heritage",
  tagline: "Direct from the orchards of Pratapgarh",
  emblemTagline: "Pure · Natural · Authentic",
  description:
    "Authentic, farm-fresh Indian Gooseberry sourced directly from orchards in Pratapgarh, Uttar Pradesh — the Amla capital of India.",
  foundedYear: 2024,
  originLocation: "Pratapgarh, Uttar Pradesh, India",

  // Official Contact Channels
  contact: {
    phone: "+91 98765 43210",
    phoneTel: "+919876543210",
    email: "support@pratapgarhamla.com",
    emailMailto: "mailto:support@pratapgarhamla.com",
    whatsapp: "+91 98765 43210",
    whatsappLink: "https://wa.me/919876543210",
    address: "Pratapgarh, Uttar Pradesh 230001",
    facility: "Registered Agricultural Center & Packhouse",
    operatingHours: "Mon-Sat from 9:00 AM to 7:00 PM IST",
    dispatchDays: "Monday through Friday",
    responseTime: "We typically respond within 2-4 hours",
  },

  // Social Channels
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
};

// -----------------------------------------------------------------------------
// 3. NAVIGATION LINKS
// -----------------------------------------------------------------------------
export const navigation = {
  headerLinks: [
    { to: "/", label: "Home", end: true },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About Us" },
    { to: "/#story", label: "Our Story", scrollTarget: "story" },
    { to: "/contact", label: "Contact" },
  ],
  searchPlaceholder: "Search Amla products...",
};

// -----------------------------------------------------------------------------
// 4. HERO SECTION DATA
// -----------------------------------------------------------------------------
export const heroData = {
  attributes: [
    { iconName: "Leaf", label: "100% Natural" },
    { iconName: "MapPin", label: "Carefully Sourced" },
    { iconName: "Truck", label: "Pan-India Delivery" },
  ],
  slideDuration: 6000,
  slides: [
    {
      id: 1,
      eyebrow: "Royal Pratapgarh Heritage",
      title: "Direct from the orchards of Aonla",
      description:
        "Pure, nutrient-dense Indian Gooseberry handpicked from the historic city of Aonla, delivered fresh pan-India.",
      image: siteImages.hero.bannerRoyal,
      imageAlt: "Pratapgarh Amla — Royal Orchard Heritage",
      ctaLabel: "Shop Amla Collection",
      targetId: "collection",
    },
    {
      id: 2,
      eyebrow: "Ayurvedic Purity & Immunity",
      title: "Nature's greatest source of Vitamin C",
      description:
        "Preserved through gentle, time-tested methods without synthetic additives, artificial colors, or chemical fillers.",
      image: siteImages.hero.bannerAyurvedic,
      imageAlt: "Pratapgarh Amla — Ayurvedic Superfood",
      ctaLabel: "Shop Amla Collection",
      targetId: "collection",
    },
    {
      id: 3,
      eyebrow: "Generational Superfood",
      title: "Handpicked Purity For Mindful Living",
      description:
        "Sun-ripened, naturally antioxidant-rich gooseberries harvested with care and delivered direct to your door.",
      image: siteImages.hero.bannerHarvest,
      imageAlt: "Pratapgarh Amla — Generational Harvest",
      ctaLabel: "Shop Amla Collection",
      targetId: "collection",
    },
  ],
};

// -----------------------------------------------------------------------------
// 5. TRUST STRIP DATA
// -----------------------------------------------------------------------------
export const trustStripData = [
  { iconName: "Leaf", label: "100% Natural" },
  { iconName: "MapPin", label: "From Pratapgarh Orchards" },
  { iconName: "ShieldCheck", label: "Quality Assured" },
  { iconName: "Truck", label: "Pan-India Fresh Delivery" },
];

// -----------------------------------------------------------------------------
// 6. BRAND STORY & SOURCING DATA
// -----------------------------------------------------------------------------
export const storyData = {
  hero: {
    eyebrow: "Orchard Heritage",
    title: "The Land of Pratapgarh\nIndia's Amla Capital",
    description:
      "For centuries, Pratapgarh has been blessed with the perfect climate and soil to nurture the finest Amla in India. Our products come from trusted local growers who follow traditional and mindful farming practices.",
    image: siteImages.story.heroBanner,
    imageAlt: "Pratapgarh Amla heritage story and harvest",
    stats: [
      { value: "100+", label: "Years of Legacy" },
      { value: "1000+", label: "Local Farmers" },
      { value: "100%", label: "Natural Farming" },
    ],
  },
  timeline: [
    {
      iconName: "MapPin",
      title: "Pratapgarh",
      description: "Where the journey begins, in the alluvial soils of Uttar Pradesh.",
    },
    {
      iconName: "TreeDeciduous",
      title: "Amla Farms",
      description: "Sourced from the region's century-old native Aonla orchards.",
    },
    {
      iconName: "Wheat",
      title: "Harvest",
      description: "Carefully handpicked at peak seasonal nutritional maturity.",
    },
    {
      iconName: "Factory",
      title: "Processing",
      description: "Cleaned and prepared gently using stone-ground and sun-dried methods.",
    },
    {
      iconName: "ShieldCheck",
      title: "Quality Check",
      description: "Laboratory verified for pure bioflavonoids and zero contaminants.",
    },
    {
      iconName: "PackageCheck",
      title: "Packed for India",
      description: "Airtight, moisture-barrier sealed and dispatched nationwide.",
    },
  ],
  values: [
    {
      iconName: "Landmark",
      title: "Authentic Origin",
      description: "Every product traces back directly to indigenous orchards in Pratapgarh.",
    },
    {
      iconName: "Leaf",
      title: "100% Natural",
      description: "Amla in its most pristine, potent form, without shortcuts or synthetic fillers.",
    },
    {
      iconName: "Package",
      title: "Careful Packing",
      description: "Protected in hygienic, moisture-locking packages to arrive fresh as harvest.",
    },
    {
      iconName: "HeartHandshake",
      title: "Customer Trust",
      description: "Honest practices, transparent lab standards, and responsive Indian support.",
    },
  ],
};

// -----------------------------------------------------------------------------
// 7. PRODUCT CATALOG
// -----------------------------------------------------------------------------
export const products = [
  {
    id: "pure-amla",
    slug: "pure-amla",
    name: "Pure Amla",
    shortDescription: "100% natural & fresh, handpicked from Pratapgarh orchards.",
    description:
      "Whole Amla fruit, handpicked from the orchards of Pratapgarh and packed without added preservatives. A daily staple for those who prefer their Amla in its most natural form.",
    category: "fruit",
    thumbnail: siteImages.products.pureAmla.thumbnail,
    images: siteImages.products.pureAmla.images,
    rating: 4.8,
    reviewCount: 46,
    origin: "Pratapgarh, Uttar Pradesh",
    variants: [
      {
        id: "pure-amla-250g",
        name: "250 g",
        weight: "250 g",
        price: 199,
        compareAtPrice: null,
        sku: "PA-FRT-250",
        stock: 20,
      },
      {
        id: "pure-amla-500g",
        name: "500 g",
        weight: "500 g",
        price: 349,
        compareAtPrice: 399,
        sku: "PA-FRT-500",
        stock: 20,
      },
      {
        id: "pure-amla-1kg",
        name: "1 kg",
        weight: "1 kg",
        price: 599,
        compareAtPrice: 699,
        sku: "PA-FRT-1000",
        stock: 15,
      },
    ],
    benefits: [
      "Rich in natural Vitamin C & bioflavonoids",
      "Strengthens everyday immunity & digestion",
      "No chemical preservatives or artificial ripening",
    ],
    howToUse: "Eat fresh, or add to chutneys, pickles and everyday cooking.",
    ingredients: "100% Amla (Indian Gooseberry).",
    storage: "Store in a cool, dry place. Refrigerate after opening for extended freshness.",
    relatedProducts: ["amla-powder", "dried-amla"],
  },
  {
    id: "amla-powder",
    slug: "amla-powder",
    name: "Amla Powder",
    shortDescription: "Finest quality powder, sun-dried and stone-ground.",
    description:
      "Sun-dried Amla, stone-ground into a fine powder. Easy to store and simple to add to your daily wellness routine.",
    category: "powder",
    thumbnail: siteImages.products.amlaPowder.thumbnail,
    images: siteImages.products.amlaPowder.images,
    rating: 4.6,
    reviewCount: 31,
    origin: "Pratapgarh, Uttar Pradesh",
    variants: [
      {
        id: "amla-powder-250g",
        name: "250 g",
        weight: "250 g",
        price: 249,
        compareAtPrice: null,
        sku: "PA-PWD-250",
        stock: 25,
      },
      {
        id: "amla-powder-500g",
        name: "500 g",
        weight: "500 g",
        price: 449,
        compareAtPrice: 499,
        sku: "PA-PWD-500",
        stock: 25,
      },
      {
        id: "amla-powder-1kg",
        name: "1 kg",
        weight: "1 kg",
        price: 799,
        compareAtPrice: null,
        sku: "PA-PWD-1000",
        stock: 12,
      },
    ],
    benefits: [
      "Rich in Vitamin C and antioxidants",
      "Easy to store and mix into drinks",
      "Stone-ground with zero artificial additives",
    ],
    howToUse: "Mix a spoonful into warm water, juice, honey, or your daily wellness routine.",
    ingredients: "100% Amla (Indian Gooseberry), sun-dried and ground.",
    storage: "Store in an airtight container, away from moisture and direct sunlight.",
    relatedProducts: ["pure-amla", "dried-amla"],
  },
  {
    id: "dried-amla",
    slug: "dried-amla",
    name: "Dried Amla",
    shortDescription: "Naturally dried goodness, ready to snack on anytime.",
    description:
      "Naturally dried Amla pieces with no added sugar, made for snacking anytime, anywhere.",
    category: "dried",
    thumbnail: siteImages.products.driedAmla.thumbnail,
    images: siteImages.products.driedAmla.images,
    rating: 4.5,
    reviewCount: 22,
    origin: "Pratapgarh, Uttar Pradesh",
    variants: [
      {
        id: "dried-amla-250g",
        name: "250 g",
        weight: "250 g",
        price: 229,
        compareAtPrice: null,
        sku: "PA-DRD-250",
        stock: 20,
      },
      {
        id: "dried-amla-500g",
        name: "500 g",
        weight: "500 g",
        price: 399,
        compareAtPrice: null,
        sku: "PA-DRD-500",
        stock: 20,
      },
      {
        id: "dried-amla-1kg",
        name: "1 kg",
        weight: "1 kg",
        price: 699,
        compareAtPrice: 749,
        sku: "PA-DRD-1000",
        stock: 10,
      },
    ],
    benefits: [
      "Naturally dried, no added sugar or sulfur",
      "Convenient anytime healthy snacking",
      "Retains natural Amla sour & tangy goodness",
    ],
    howToUse: "Enjoy straight as a digestive snack, or soak briefly before use in culinary recipes.",
    ingredients: "100% Amla (Indian Gooseberry), naturally dried.",
    storage: "Store in a cool, dry place in an airtight container.",
    relatedProducts: ["pure-amla", "amla-powder"],
  },
];

export const CATEGORY_LABELS = {
  fruit: "Whole Fruit",
  powder: "Stone-Ground Powder",
  dried: "Naturally Dried",
};

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null;
}

export function getRelatedProducts(product) {
  if (!product?.relatedProducts) return [];
  return product.relatedProducts
    .map((slug) => getProductBySlug(slug))
    .filter(Boolean);
}

// -----------------------------------------------------------------------------
// 8. ABOUT PAGE DATA
// -----------------------------------------------------------------------------
export const aboutPageData = {
  hero: {
    bannerImage: siteImages.about.heroBanner,
    bannerAlt: "Amla Sampurna products and natural Amla benefits",
  },
  stats: [
    { value: "100%", label: "Pure Pratapgarh Origin", description: "Direct from native cultivars" },
    { value: "0%", label: "Artificial Additives", description: "No synthetic preservatives or colors" },
    { value: "40+", label: "Family Orchards", description: "Fairly sourced from regional growers" },
    { value: "3x", label: "Vitamin C Density", description: "Naturally preserved through traditional care" },
  ],
  originStory: {
    eyebrow: "Our Origins",
    title: "Why Pratapgarh Amla is legendary",
    highlight:
      "The alluvial plains along the Sai and Ganges rivers yield Amla fruits with unrivaled mineral concentration.",
    paragraphs: [
      "In Indian lore and Ayurvedic traditions, Amla has been known for millennia as Amritphala — the fruit of immortality. While Amla is grown in several regions today, the micro-climate, balanced soil minerals, and generational orchard stewardship in Pratapgarh give this fruit an unmistakable depth of taste and medicinal potency.",
      "For generations, Pratapgarh has been recognized as the heart of India's Aonla trade. Yet, over decades of industrial supply chains, commoditization reduced this noble fruit to anonymous bulk extracts, sweetened candies, or heavily preserved concentrates.",
      "Amla Sampurna was founded to reverse that trend — honoring the raw fruit, hand-selecting peak seasonal harvests, and preserving every ounce of nutritional vitality.",
    ],
  },
  pillars: [
    {
      iconName: "MapPin",
      title: "Orchard Traceability",
      description:
        "Unlike mass-market commodity brokers, we trace every harvest batch to certified regional orchards in Pratapgarh, Uttar Pradesh.",
    },
    {
      iconName: "Leaf",
      title: "Respect for Nature",
      description:
        "We follow gentle harvesting cycles that align with the natural fruiting season, allowing trees to thrive for generations.",
    },
    {
      iconName: "ShieldCheck",
      title: "Stone-Ground & Sun-Dried",
      description:
        "Our processing avoids high-temperature heat friction, retaining the sensitive Vitamin C compounds and raw polyphenols.",
    },
    {
      iconName: "Users",
      title: "Empowering Local Farmers",
      description:
        "By purchasing directly at fair baseline prices, we ensure local farming families share in the value of their agricultural craft.",
    },
  ],
};

// -----------------------------------------------------------------------------
// 9. CONTACT PAGE DATA & FAQS
// -----------------------------------------------------------------------------
export const contactPageData = {
  eyebrow: "Get In Touch",
  title: "We'd love to hear from you",
  description:
    "Have questions about our harvest, products, pan-India delivery, or bulk orders? Reach out to our team.",
  channels: [
    {
      iconName: "Phone",
      title: "Call or WhatsApp",
      detail: siteMetadata.contact.phone,
      description: siteMetadata.contact.operatingHours,
      action: siteMetadata.contact.phoneTel,
    },
    {
      iconName: "Mail",
      title: "Email Support",
      detail: siteMetadata.contact.email,
      description: siteMetadata.contact.responseTime,
      action: siteMetadata.contact.emailMailto,
    },
    {
      iconName: "MapPin",
      title: "Orchards & Facility",
      detail: siteMetadata.contact.address,
      description: siteMetadata.contact.facility,
      action: "#",
    },
    {
      iconName: "Clock",
      title: "Fresh Dispatch Days",
      detail: siteMetadata.contact.dispatchDays,
      description: "Orders placed over the weekend dispatch Monday morning",
      action: "#",
    },
  ],
  inquirySubjects: [
    { value: "Order Inquiry", label: "Order & Delivery Inquiry" },
    { value: "Product Details", label: "Product Benefits & Quality" },
    { value: "Bulk / Wholesale", label: "Bulk / Wholesale Inquiry" },
    { value: "Feedback", label: "Feedback or Suggestions" },
  ],
  faqs: [
    {
      q: "Where exactly is your Amla sourced from?",
      a: "Every product in our collection is sourced exclusively from grower networks and family-owned orchards situated in and around Pratapgarh district, Uttar Pradesh. Pratapgarh is globally recognized as the historic heart of Indian Aonla cultivation.",
    },
    {
      q: "Are any synthetic preservatives, colors, or sugars added?",
      a: "Never. Our philosophy is 100% natural purity. Our whole fruit is untreated, our dried pieces are dried naturally without added sugar or sulfur, and our Amla powder is stone-ground whole fruit with zero fillers.",
    },
    {
      q: "How are products packaged to ensure freshness during delivery?",
      a: "We use airtight, food-grade, multi-layer barrier pouches and sturdy moisture-resistant packaging that protects delicate Vitamin C nutrients from light, heat, and air degradation during transit across India.",
    },
    {
      q: "Do you offer bulk or institutional orders for wellness brands?",
      a: "Yes! We fulfill bulk orders for Ayurvedic practitioners, wellness stores, juice bars, and organic cooperatives. Please select 'Bulk / Wholesale Inquiry' in the contact form below or email us directly.",
    },
    {
      q: "What is your return or replacement policy?",
      a: "If your shipment arrives damaged, unsealed, or compromised in any way, contact us within 48 hours of delivery and we will promptly send a replacement or issue a full refund.",
    },
  ],
  whatsappNotice:
    "Need immediate bulk assistance? You can also message our dispatch line directly via WhatsApp at +91 98765 43210.",
};

// -----------------------------------------------------------------------------
// 10. CART & CHECKOUT POLICIES & CONFIGURATION
// -----------------------------------------------------------------------------
export const checkoutAndCartData = {
  storageKey: "pratapgarh-amla-cart",
  freeShippingThreshold: 499,
  shippingFee: 49,
  trustItems: [
    { iconName: "Leaf", label: "100% Pure & Unadulterated" },
    { iconName: "ShieldCheck", label: "Rigorous Lab Tested" },
    { iconName: "PackageCheck", label: "Airtight Seal Packaging" },
    { iconName: "Truck", label: "Pan-India Express Dispatch" },
  ],
  checkoutGuarantees: [
    { iconName: "ShieldCheck", text: "100% Secure Checkout with Razorpay / UPI" },
    { iconName: "Truck", text: "Dispatched direct from Pratapgarh" },
  ],
  orderConfirmation: {
    eyebrow: "Order Successful",
    title: "Thank you for your order!",
    description:
      "We have received your order and are preparing your fresh Pratapgarh Amla package.",
    dispatchEstimate: "Estimated dispatch in 24 hours · Delivery in 3–5 business days",
  },
};

// -----------------------------------------------------------------------------
// 11. FOOTER DATA
// -----------------------------------------------------------------------------
export const footerData = {
  aboutText:
    "Authentic, farm-fresh Indian Gooseberry sourced directly from orchards in Pratapgarh, Uttar Pradesh — the Amla capital of India.",
  trustGuarantees: [
    "100% Purity & Quality Guarantee",
    "Safe, Temperature-Aware Pan-India Dispatch",
    "Direct-from-source freshness",
  ],
  columns: [
    {
      title: "Shop Collection",
      links: [
        { to: "/products", label: "All Products" },
        { to: "/products/pure-amla", label: "Pure Fresh Amla" },
        { to: "/products/amla-powder", label: "Stone-Ground Powder" },
        { to: "/products/dried-amla", label: "Naturally Dried Amla" },
      ],
    },
    {
      title: "About Brand",
      links: [
        { to: "/about", label: "Our Heritage & Story" },
        { to: "/#story", label: "Orchard Journey", scrollTarget: "story" },
        { to: "/contact", label: "Contact Us" },
      ],
    },
    {
      title: "Customer Care",
      links: [
        { to: "/cart", label: "View Cart" },
        { to: "/checkout", label: "Direct Checkout" },
        { to: "/contact", label: "FAQs & Inquiries" },
      ],
    },
  ],
  newsletter: {
    title: "Stay In Touch",
    description:
      "Receive seasonal harvest updates, authentic Amla recipes, and special subscriber benefits.",
    placeholder: "Enter your email",
    successToastTitle: "Subscribed Successfully",
    successToastMessage: "Thank you for subscribing to Pratapgarh Amla journal.",
  },
  copyright: `© ${new Date().getFullYear()} Pratapgarh Amla (Sampoorna). All rights reserved.`,
  bottomBadges: ["Orchard Fresh", "No Artificial Additives", "Lab Verified"],
};

// -----------------------------------------------------------------------------
// 12. TESTIMONIALS / CUSTOMER SOCIAL PROOF
// -----------------------------------------------------------------------------
export const testimonialsData = [
  {
    name: "Dr. Sunita Sharma",
    role: "Ayurvedic Consultant, New Delhi",
    rating: 5,
    comment:
      "The quality of Sampoorna Amla is unlike anything you find in regular commercial stores. Pure, potent, and unmistakably authentic to its Pratapgarh roots.",
    verified: true,
  },
  {
    name: "Rajesh Kulkarni",
    role: "Pune, Maharashtra",
    rating: 5,
    comment:
      "I ordered both the stone-ground powder and the naturally dried amla. Exceptional aroma and tartness with zero chemical aftertaste. Truly impressed!",
    verified: true,
  },
  {
    name: "Ananya Deshmukh",
    role: "Bengaluru, Karnataka",
    rating: 5,
    comment:
      "Fast shipping to Bangalore and impeccable moisture-proof packaging. The dried amla has become our family's favorite healthy snacking staple.",
    verified: true,
  },
];

// Unified default export
const siteData = {
  siteImages,
  siteMetadata,
  navigation,
  heroData,
  trustStripData,
  storyData,
  products,
  CATEGORY_LABELS,
  aboutPageData,
  contactPageData,
  checkoutAndCartData,
  footerData,
  testimonialsData,
  getProductBySlug,
  getRelatedProducts,
};

export default siteData;
