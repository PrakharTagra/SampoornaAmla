export const siteMetadata = {
  brandName: "Amla Sampurna",
  emblemTagline: "Pure · Natural · Authentic",
  description: "Authentic, farm-fresh Indian Gooseberry sourced directly from orchards in Pratapgarh, Uttar Pradesh.",
  supportEmail: "support@pratapgarhamla.com",
  supportPhone: "+91 98765 43210",
  supportHours: "Mon-Sat from 9:00 AM to 7:00 PM IST",
};

export const siteImages = {
  logo: "/images/logo.png",
  logoFallback: "/images/logo-fallback.png",
  hero: {
    bannerRoyal: "/images/hero/banner-royal.png",
    bannerAyurvedic: "/images/hero/banner-ayurvedic.png",
    bannerHarvest: "/images/hero/banner-harvest.png",
  },
  story: {
    heroBanner: "/images/story/story-hero.png",
  },
};

export const navigation = {
  searchPlaceholder: "Search Amla products",
  headerLinks: [
    { to: "/", label: "Home", end: true },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About Us" },
    { to: "/#story", label: "Our Story", scrollTarget: "story" },
    { to: "/contact", label: "Contact" },
  ],
  footerColumns: [
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
};

export const heroData = {
  slideDuration: 6000,
  attributes: [
    { iconName: "Leaf", label: "100% Natural" },
    { iconName: "MapPin", label: "Carefully Sourced" },
    { iconName: "Truck", label: "Pan-India Delivery" },
  ],
  slides: [
    {
      id: 1,
      eyebrow: "Royal Pratapgarh Heritage",
      title: "Direct from the orchards of Aonla",
      description: "Pure, nutrient-dense Indian Gooseberry handpicked from the historic city of Aonla, delivered fresh pan-India.",
      image: siteImages.hero.bannerRoyal,
      imageAlt: "Pratapgarh Amla — Royal Orchard Heritage",
      ctaLabel: "Shop Amla Collection",
    },
    {
      id: 2,
      eyebrow: "Ayurvedic Purity & Immunity",
      title: "Nature's greatest source of Vitamin C",
      description: "Preserved through gentle, time-tested methods without synthetic additives, artificial colors, or chemical fillers.",
      image: siteImages.hero.bannerAyurvedic,
      imageAlt: "Pratapgarh Amla — Ayurvedic Superfood",
      ctaLabel: "Shop Amla Collection",
    },
  ],
};

export const trustStripData = [
  { iconName: "Leaf", label: "100% Natural" },
  { iconName: "MapPin", label: "From Pratapgarh Orchards" },
  { iconName: "ShieldCheck", label: "Quality Assured" },
  { iconName: "Truck", label: "Pan-India Fresh Delivery" },
];

export const storyData = {
  hero: {
    title: "The Land of Pratapgarh\nIndia's Amla Capital",
    description: "For centuries, Pratapgarh has been blessed with the perfect climate and soil to nurture the finest Amla in India. Our products come from trusted local growers who follow traditional and mindful farming practices.",
    image: siteImages.story.heroBanner,
    imageAlt: "Pratapgarh Amla heritage story and harvest",
    stats: [
      { value: "100+", label: "Years of Legacy" },
      { value: "1000+", label: "Local Farmers" },
      { value: "100%", label: "Natural Farming" },
    ],
  },
  timeline: [
    { iconName: "MapPin", title: "Pratapgarh", description: "Where the journey begins, in Uttar Pradesh." },
    { iconName: "TreeDeciduous", title: "Amla Farms", description: "Sourced from the region's Aonla orchards." },
    { iconName: "Wheat", title: "Harvest", description: "Fruit is gathered through the growing season." },
    { iconName: "Factory", title: "Processing", description: "Cleaned and prepared for each product form." },
    { iconName: "ShieldCheck", title: "Quality Check", description: "Checked before it's approved for packing." },
    { iconName: "PackageCheck", title: "Packed for India", description: "Sealed and readied for delivery nationwide." },
  ],
  values: [
    { iconName: "Landmark", title: "Authentic Origin", description: "Every product traces back directly to indigenous orchards in Pratapgarh." },
    { iconName: "Leaf", title: "100% Natural", description: "Amla in its most pristine, potent form, without shortcuts or synthetic fillers." },
    { iconName: "Package", title: "Careful Packing", description: "Protected in hygienic, moisture-locking packages to arrive fresh as harvest." },
    { iconName: "HeartHandshake", title: "Customer Trust", description: "Honest practices, transparent lab standards, and responsive Indian support." },
  ],
};

export const aboutPageData = {
  hero: {
    bannerImage: siteImages.hero.bannerHarvest,
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
    highlight: "The alluvial plains along the Sai and Ganges rivers yield Amla fruits with unrivaled mineral concentration.",
    paragraphs: [
      "In Indian lore and Ayurvedic traditions, Amla has been known for millennia as Amritphala — the fruit of immortality. While Amla is grown in several regions today, the micro-climate, balanced soil minerals, and generational orchard stewardship in Pratapgarh give this fruit an unmistakable depth of taste and medicinal potency.",
      "For generations, Pratapgarh has been recognized as the heart of India's Aonla trade. Yet, over decades of industrial supply chains, commoditization reduced this noble fruit to anonymous bulk extracts, sweetened candies, or heavily preserved concentrates.",
      "Amla Sampurna was founded to reverse that trend — honoring the raw fruit, hand-selecting peak seasonal harvests, and preserving every ounce of nutritional vitality.",
    ],
  },
  pillars: [
    { iconName: "MapPin", title: "Orchard Traceability", description: "Unlike mass-market commodity brokers, we trace every harvest batch to certified regional orchards in Pratapgarh, Uttar Pradesh." },
    { iconName: "Leaf", title: "Respect for Nature", description: "We follow gentle harvesting cycles that align with the natural fruiting season, allowing trees to thrive for generations." },
    { iconName: "ShieldCheck", title: "Stone-Ground & Sun-Dried", description: "Our processing avoids high-temperature heat friction, retaining the sensitive Vitamin C compounds and raw polyphenols." },
    { iconName: "Users", title: "Empowering Local Farmers", description: "By purchasing directly at fair baseline prices, we ensure local farming families share in the value of their agricultural craft." },
  ],
};

export const contactPageData = {
  eyebrow: "Get In Touch",
  title: "We'd love to hear from you",
  description: "Have questions about our harvest, products, pan-India delivery, or bulk orders? Reach out to our team.",
  channels: [
    { iconName: "Phone", title: "Call or WhatsApp", detail: siteMetadata.supportPhone, description: siteMetadata.supportHours, action: "tel:+919876543210" },
    { iconName: "Mail", title: "Email Support", detail: siteMetadata.supportEmail, description: "We typically respond within 2-4 hours", action: "mailto:support@pratapgarhamla.com" },
    { iconName: "MapPin", title: "Orchards & Facility", detail: "Pratapgarh, Uttar Pradesh 230001", description: "Registered Agricultural Center & Packhouse", action: "#" },
    { iconName: "Clock", title: "Fresh Dispatch Days", detail: "Monday through Friday", description: "Orders placed over the weekend dispatch Monday morning", action: "#" },
  ],
  inquirySubjects: [
    { value: "Order Inquiry", label: "Order & Delivery Inquiry" },
    { value: "Product Details", label: "Product Benefits & Quality" },
    { value: "Bulk / Wholesale", label: "Bulk / Wholesale Inquiry" },
    { value: "Feedback", label: "Feedback or Suggestions" },
  ],
  faqs: [
    { q: "Where exactly is your Amla sourced from?", a: "Every product in our collection is sourced exclusively from grower networks and family-owned orchards situated in and around Pratapgarh district, Uttar Pradesh. Pratapgarh is globally recognized as the historic heart of Indian Aonla cultivation." },
    { q: "Are any synthetic preservatives, colors, or sugars added?", a: "Never. Our philosophy is 100% natural purity. Our whole fruit is untreated, our dried pieces are dried naturally without added sugar or sulfur, and our Amla powder is stone-ground whole fruit with zero fillers." },
    { q: "How are products packaged to ensure freshness during delivery?", a: "We use airtight, food-grade, multi-layer barrier pouches and sturdy moisture-resistant packaging that protects delicate Vitamin C nutrients from light, heat, and air degradation during transit across India." },
    { q: "Do you offer bulk or institutional orders for wellness brands?", a: "Yes! We fulfill bulk orders for Ayurvedic practitioners, wellness stores, juice bars, and organic cooperatives. Please select Bulk / Wholesale Inquiry in the contact form or email us directly." },
    { q: "What is your return or replacement policy?", a: "If your shipment arrives damaged, unsealed, or compromised in any way, contact us within 48 hours of delivery and we will promptly send a replacement or issue a full refund." },
  ],
};

export const checkoutData = {
  paymentMethods: [
    { id: "cod", label: "Cash on Delivery", description: "Pay when your order arrives." },
    { id: "upi", label: "UPI", description: "Pay via any UPI app." },
    { id: "card", label: "Credit / Debit Card", description: "Visa, Mastercard, RuPay." },
  ],
  steps: ["Details", "Payment", "Review"],
  states: ["Andhra Pradesh", "Bihar", "Delhi", "Gujarat", "Haryana", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana", "Uttar Pradesh", "Uttarakhand", "West Bengal"],
};

export const productDetailData = {
  trustItems: [
    { iconName: "Leaf", label: "100% Pure & Unadulterated" },
    { iconName: "ShieldCheck", label: "Rigorous Lab Tested" },
    { iconName: "PackageCheck", label: "Airtight Seal Packaging" },
    { iconName: "Truck", label: "Pan-India Express Dispatch" },
  ],
};

export const footerData = {
  description: "Authentic, farm-fresh Indian Gooseberry sourced directly from orchards in Pratapgarh, Uttar Pradesh — the Amla capital of India.",
  guarantees: [
    "100% Purity & Quality Guarantee",
    "Safe, Temperature-Aware Pan-India Dispatch",
    "Direct-from-source freshness",
  ],
  subscribeSuccessTitle: "Subscribed Successfully",
  subscribeSuccessMessage: "Thank you for subscribing to Amla Sampurna journal.",
};

export const products = [
  {
    id: "pure-amla", slug: "pure-amla", name: "Pure Amla",
    shortDescription: "100% natural & fresh, handpicked from Pratapgarh orchards.",
    description: "Whole Amla fruit, handpicked from the orchards of Pratapgarh and packed without added preservatives. A daily staple for those who prefer their Amla in its most natural form.",
    category: "fruit", thumbnail: "/images/products/pure-amla/main.png",
    images: ["/images/products/pure-amla/main.png", "/images/products/pure-amla/bottle-front.png", "/images/products/pure-amla/open-jar.png", "/images/products/pure-amla/bottle-back.png", "/images/products/pure-amla/slide.png"],
    rating: 4.8, reviewCount: 46, origin: "Pratapgarh, Uttar Pradesh",
    variants: [
      { id: "pure-amla-250g", name: "250 g", weight: "250 g", price: 199, compareAtPrice: null, sku: "PA-FRT-250", stock: 20 },
      { id: "pure-amla-500g", name: "500 g", weight: "500 g", price: 349, compareAtPrice: 399, sku: "PA-FRT-500", stock: 20 },
      { id: "pure-amla-1kg", name: "1 kg", weight: "1 kg", price: 599, compareAtPrice: 699, sku: "PA-FRT-1000", stock: 15 },
    ],
    benefits: ["Rich in natural Vitamin C & bioflavonoids", "Strengthens everyday immunity & digestion", "No chemical preservatives or artificial ripening"],
    howToUse: "Eat fresh, or add to chutneys, pickles and everyday cooking.", ingredients: "100% Amla (Indian Gooseberry).", storage: "Store in a cool, dry place. Refrigerate after opening for extended freshness.", relatedProducts: ["amla-powder", "dried-amla"],
  },
  {
    id: "amla-powder", slug: "amla-powder", name: "Amla Powder",
    shortDescription: "Finest quality powder, sun-dried and stone-ground.",
    description: "Sun-dried Amla, stone-ground into a fine powder. Easy to store and simple to add to your daily routine.",
    category: "powder", thumbnail: "/images/products/amla-powder/main.png",
    images: ["/images/products/amla-powder/main.png", "/images/products/amla-powder/jar.png", "/images/products/amla-powder/bottle-front.png", "/images/products/amla-powder/bottle-back.png"],
    rating: 4.6, reviewCount: 31, origin: "Pratapgarh, Uttar Pradesh",
    variants: [
      { id: "amla-powder-250g", name: "250 g", weight: "250 g", price: 249, compareAtPrice: null, sku: "PA-PWD-250", stock: 25 },
      { id: "amla-powder-500g", name: "500 g", weight: "500 g", price: 449, compareAtPrice: 499, sku: "PA-PWD-500", stock: 25 },
      { id: "amla-powder-1kg", name: "1 kg", weight: "1 kg", price: 799, compareAtPrice: null, sku: "PA-PWD-1000", stock: 12 },
    ],
    benefits: ["Rich in Vitamin C and antioxidants", "Easy to store and mix into drinks", "Stone-ground with zero artificial additives"],
    howToUse: "Mix a spoonful into warm water, juice, honey, or your daily wellness routine.", ingredients: "100% Amla (Indian Gooseberry), sun-dried and ground.", storage: "Store in an airtight container, away from moisture and direct sunlight.", relatedProducts: ["pure-amla", "dried-amla"],
  },
  {
    id: "dried-amla", slug: "dried-amla", name: "Dried Amla",
    shortDescription: "Naturally dried goodness, ready to snack on anytime.",
    description: "Naturally dried Amla pieces with no added sugar, made for snacking anytime, anywhere.",
    category: "dried", thumbnail: "/images/products/dried-amla/main.png",
    images: ["/images/products/dried-amla/main.png", "/images/products/dried-amla/bottle-front.png", "/images/products/dried-amla/open-jar.png", "/images/products/dried-amla/bottle-back.png", "/images/products/dried-amla/bucket.png"],
    rating: 4.5, reviewCount: 22, origin: "Pratapgarh, Uttar Pradesh",
    variants: [
      { id: "dried-amla-250g", name: "250 g", weight: "250 g", price: 229, compareAtPrice: null, sku: "PA-DRD-250", stock: 20 },
      { id: "dried-amla-500g", name: "500 g", weight: "500 g", price: 399, compareAtPrice: null, sku: "PA-DRD-500", stock: 20 },
      { id: "dried-amla-1kg", name: "1 kg", weight: "1 kg", price: 699, compareAtPrice: 749, sku: "PA-DRD-1000", stock: 10 },
    ],
    benefits: ["Naturally dried, no added sugar or sulfur", "Convenient anytime healthy snacking", "Retains natural Amla sour & tangy goodness"],
    howToUse: "Enjoy straight as a digestive snack, or soak briefly before use in culinary recipes.", ingredients: "100% Amla (Indian Gooseberry), naturally dried.", storage: "Store in a cool, dry place in an airtight container.", relatedProducts: ["pure-amla", "amla-powder"],
  },
];

export const CATEGORY_LABELS = { fruit: "Whole Fruit", powder: "Stone-Ground Powder", dried: "Naturally Dried" };

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug) || null;
}

export function getRelatedProducts(product) {
  if (!product?.relatedProducts) return [];
  return product.relatedProducts.map((slug) => getProductBySlug(slug)).filter(Boolean);
}
