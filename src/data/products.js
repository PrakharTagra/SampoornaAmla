export const products = [
  {
    id: "pure-amla",
    slug: "pure-amla",
    name: "Pure Amla",
    shortDescription: "100% natural & fresh, handpicked from Pratapgarh orchards.",
    description:
      "Whole Amla fruit, handpicked from the orchards of Pratapgarh and packed without added preservatives. A daily staple for those who prefer their Amla in its most natural form.",
    category: "fruit",
    thumbnail: "/images/products/pure-amla/main.png",
    images: [
      "/images/products/pure-amla/main.png",
      "/images/products/pure-amla/bottle-front.png",
      "/images/products/pure-amla/open-jar.png",
      "/images/products/pure-amla/bottle-back.png",
      "/images/products/pure-amla/slide.png",
    ],
    rating: 4.8,
    reviewCount: 46,
    origin: "Pratapgarh, Uttar Pradesh",
    variants: [
      { id: "pure-amla-250g", name: "250 g", weight: "250 g", price: 199, compareAtPrice: null, sku: "PA-FRT-250", stock: 20 },
      { id: "pure-amla-500g", name: "500 g", weight: "500 g", price: 349, compareAtPrice: 399, sku: "PA-FRT-500", stock: 20 },
      { id: "pure-amla-1kg", name: "1 kg", weight: "1 kg", price: 599, compareAtPrice: 699, sku: "PA-FRT-1000", stock: 15 },
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
      "Sun-dried Amla, stone-ground into a fine powder. Easy to store and simple to add to your daily routine.",
    category: "powder",
    thumbnail: "/images/products/amla-powder/main.png",
    images: [
      "/images/products/amla-powder/main.png",
      "/images/products/amla-powder/jar.png",
      "/images/products/amla-powder/bottle-front.png",
      "/images/products/amla-powder/bottle-back.png",
    ],
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
    thumbnail: "/images/products/dried-amla/main.png",
    images: [
      "/images/products/dried-amla/main.png",
      "/images/products/dried-amla/bottle-front.png",
      "/images/products/dried-amla/open-jar.png",
      "/images/products/dried-amla/bottle-back.png",
      "/images/products/dried-amla/bucket.png",
    ],
    rating: 4.5,
    reviewCount: 22,
    origin: "Pratapgarh, Uttar Pradesh",
    variants: [
      { id: "dried-amla-250g", name: "250 g", weight: "250 g", price: 229, compareAtPrice: null, sku: "PA-DRD-250", stock: 20 },
      { id: "dried-amla-500g", name: "500 g", weight: "500 g", price: 399, compareAtPrice: null, sku: "PA-DRD-500", stock: 20 },
      { id: "dried-amla-1kg", name: "1 kg", weight: "1 kg", price: 699, compareAtPrice: 749, sku: "PA-DRD-1000", stock: 10 },
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
