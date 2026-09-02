import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Star, Leaf, ShieldCheck, PackageCheck, Truck, MapPin } from "lucide-react";
import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";
import Breadcrumb from "../components/primitives/Breadcrumb";
import Badge from "../components/primitives/Badge";
import Button from "../components/primitives/Button";
import Divider from "../components/primitives/Divider";
import Price from "../components/primitives/Price";
import QuantitySelector from "../components/primitives/QuantitySelector";
import TrustItem from "../components/primitives/TrustItem";
import ProductGallery from "../components/product/ProductGallery";
import VariantSelector from "../components/product/VariantSelector";
import ProductTabs from "../components/product/ProductTabs";
import ProductGrid from "../components/product/ProductGrid";
import ProductQuickView from "../components/product/ProductQuickView";
import { getProductBySlug, getRelatedProducts, CATEGORY_LABELS } from "../data/products";
import { useCart } from "../context/CartContext";
import NotFound from "./NotFound";

const TRUST_ITEMS = [
  { icon: Leaf, label: "Natural / No Preservatives" },
  { icon: ShieldCheck, label: "Quality Assured" },
  { icon: PackageCheck, label: "Secure Packaging" },
  { icon: Truck, label: "Pan-India Delivery" },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) return <NotFound />;

  return <ProductDetailContent product={product} />;
}

function ProductDetailContent({ product }) {
  const { addItem, closeDrawer } = useCart();
  const navigate = useNavigate();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [product.id]);

  const totalPrice = selectedVariant.price * quantity;
  const related = getRelatedProducts(product);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const handleBuyNow = () => {
    addItem(product, selectedVariant, quantity);
    closeDrawer();
    navigate("/cart");
  };

  return (
    <>
      <Container className="pt-6 sm:pt-8">
        <Breadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "Products", to: "/products" },
            { label: product.name },
          ]}
        />
      </Container>

      <section className="py-8 sm:py-12">
        <Container className="grid sm:grid-cols-2 gap-10 sm:gap-14">
          <ProductGallery images={product.images} name={product.name} ratio="portrait" />

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              {CATEGORY_LABELS[product.category] ? (
                <Badge tone="forest" className="w-fit">
                  {CATEGORY_LABELS[product.category]}
                </Badge>
              ) : null}
              <h1 className="font-serif text-3xl sm:text-4xl text-brown leading-tight">
                {product.name}
              </h1>
              <p className="text-sm text-brown/70 leading-relaxed">{product.shortDescription}</p>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-0.5 text-gold-200">
                <Star size={14} fill="currentColor" strokeWidth={0} />
                <span className="font-medium text-brown">{product.rating}</span>
              </div>
              <span className="text-brown/50">({product.reviewCount} Reviews)</span>
              <span className="text-brown/30">&middot;</span>
              <span className="flex items-center gap-1 text-brown/50">
                <MapPin size={13} />
                {product.origin}
              </span>
            </div>

            <Divider />

            <p className="text-sm text-brown/75 leading-relaxed">{product.description}</p>

            <VariantSelector
              variants={product.variants}
              selectedId={selectedVariant.id}
              onSelect={setSelectedVariant}
            />

            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-brown/80">Quantity</span>
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>

            <div className="flex items-baseline gap-3">
              <Price amount={totalPrice} compareAt={selectedVariant.compareAtPrice ? selectedVariant.compareAtPrice * quantity : null} size="lg" />
              {quantity > 1 ? (
                <span className="text-xs text-brown/45">
                  {selectedVariant.name} &times; {quantity}
                </span>
              ) : null}
            </div>

            <div className="flex flex-col xs:flex-row gap-3">
              <Button variant="primary" size="lg" className="flex-1" onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <Button variant="secondary" size="lg" className="flex-1" onClick={handleBuyNow}>
                Buy Now
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 pt-4 border-t border-brown/10">
              {TRUST_ITEMS.map((item) => (
                <TrustItem key={item.label} icon={item.icon} label={item.label} labelClassName="text-xs" />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-4 sm:py-6">
        <Container>
          <ProductTabs product={product} />
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-forest text-ivory relative overflow-hidden">
        <Container className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="font-sans text-xs tracking-[0.14em] text-gold-50">Origin</span>
            <h2 className="font-serif text-2xl sm:text-3xl leading-tight">
              Sourced from {product.origin}
            </h2>
            <p className="text-sm text-ivory/75 leading-relaxed">
              Every batch of {product.name} begins in the Aonla orchards of Pratapgarh, is
              harvested, processed and quality-checked before it is packed and sent across India.
            </p>
          </div>
          <Button as={Link} to="/#story" variant="gold" size="md" className="shrink-0 sm:ml-auto">
            Discover Our Story
          </Button>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="py-16 sm:py-20">
          <Container className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="You may also like"
              title="More from the collection"
              align="center"
            />
            <ProductGrid products={related} onQuickView={setQuickViewProduct} />
          </Container>
        </section>
      ) : null}

      <ProductQuickView
        product={quickViewProduct}
        open={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </>
  );
}
