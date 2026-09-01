// Full product data contract (implementation.md Section 7).
// The UI (ProductQuickView, ProductDetail, ProductCard, collection page)
// must consume this dynamically and never hard-code pack sizes or prices.
//
// Photography: `images`/`thumbnail` are left `null` as placeholders since no
// real product photography was supplied. ProductImage renders a tasteful
// fallback. Populating a URL here is the only change needed to swap in real
// photos — no component changes required.

export const products = [
  {
    id: "pure-amla",
    slug: "pure-amla",
    name: "Pure Amla",
    shortDescription: "100% natural & fresh, handpicked from Pratapgarh orchards.",
    description:
      "Whole Amla fruit, handpicked from the orchards of Pratapgarh and packed without added preservatives. A daily staple for those who prefer their Amla in its most natural form.",
    category: "fruit",
    images: [null, null, null],
    thumbnail: null,
    rating: 4.8,
    reviewCount: 46,
    origin: "Pratapgarh, Uttar Pradesh",
    variants: [
      { id: "pure-amla-250g", name: "250 g", weight: "250 g", price: 199, compareAtPrice: null, sku: "PA-FRT-250", stock: 20 },
      { id: "pure-amla-500g", name: "500 g", weight: "500 g", price: 349, compareAtPrice: 399, sku: "PA-FRT-500", stock: 20 },
      { id: "pure-amla-1kg", name: "1 kg", weight: "1 kg", price: 599, compareAtPrice: 699, sku: "PA-FRT-1000", stock: 15 },
    ],
    benefits: [
      "Rich in Vitamin C",
      "Supports everyday immunity",
      "No added preservatives",
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
      "Sun-dried Amla, stone-ground into a fine powder. Easy to store and simple to add to your daily routine.",
    category: "powder",
    images: [null, null, null],
    thumbnail: null,
    rating: 4.6,
    reviewCount: 31,
    origin: "Pratapgarh, Uttar Pradesh",
    variants: [
      { id: "amla-powder-250g", name: "250 g", weight: "250 g", price: 249, compareAtPrice: null, sku: "PA-PWD-250", stock: 25 },
      { id: "amla-powder-500g", name: "500 g", weight: "500 g", price: 449, compareAtPrice: 499, sku: "PA-PWD-500", stock: 25 },
      { id: "amla-powder-1kg", name: "1 kg", weight: "1 kg", price: 799, compareAtPrice: null, sku: "PA-PWD-1000", stock: 12 },
    ],
    benefits: [
      "Rich in Vitamin C and antioxidants",
      "Easy to store and use",
      "No artificial additives",
    ],
    howToUse: "Mix a spoonful into water, juice or your regular wellness routine.",
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
    images: [null, null, null],
    thumbnail: null,
    rating: 4.5,
    reviewCount: 22,
    origin: "Pratapgarh, Uttar Pradesh",
    variants: [
      { id: "dried-amla-250g", name: "250 g", weight: "250 g", price: 229, compareAtPrice: null, sku: "PA-DRD-250", stock: 20 },
      { id: "dried-amla-500g", name: "500 g", weight: "500 g", price: 399, compareAtPrice: null, sku: "PA-DRD-500", stock: 20 },
      { id: "dried-amla-1kg", name: "1 kg", weight: "1 kg", price: 699, compareAtPrice: 749, sku: "PA-DRD-1000", stock: 10 },
    ],
    benefits: [
      "Naturally dried, no added sugar",
      "Convenient anytime snacking",
      "Retains natural Amla goodness",
    ],
    howToUse: "Enjoy as a snack, or soak briefly before use in recipes.",
    ingredients: "100% Amla (Indian Gooseberry), naturally dried.",
    storage: "Store in a cool, dry place in an airtight container.",
    relatedProducts: ["pure-amla", "amla-powder"],
  },
];

// Human-readable labels for each `product.category` value. Shared by the
// Product Detail page (category badge) and the Products collection page
// (category filter nav) so the two stay in sync as categories are added.
export const CATEGORY_LABELS = {
  fruit: "Whole Fruit",
  powder: "Powder",
  dried: "Dried",
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
