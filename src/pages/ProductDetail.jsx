import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, Leaf, ShieldCheck, PackageCheck, Truck, MapPin, Check } from "lucide-react";
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
import PageTransition from "../animations/PageTransition";
import FadeIn from "../animations/FadeIn";
import { getProductBySlug, getRelatedProducts, CATEGORY_LABELS, checkoutAndCartData } from "../data/sitedata";
import { useCart } from "../hooks/useCart";
import { useToast } from "../hooks/useToast";
import NotFound from "./NotFound";

const ICON_MAP = {
  Leaf,
  ShieldCheck,
  PackageCheck,
  Truck,
};

const TRUST_ITEMS = checkoutAndCartData.trustItems.map((item) => ({
  icon: ICON_MAP[item.iconName] || Leaf,
  label: item.label,
}));

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) return <NotFound />;

  return (
    <PageTransition>
      <ProductDetailContent key={product.id} product={product} />
    </PageTransition>
  );
}

function ProductDetailContent({ product }) {
  const { addItem, closeDrawer } = useCart();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const totalPrice = selectedVariant.price * quantity;
  const related = getRelatedProducts(product);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);

    addToast({
      title: "Added to Bag",
      message: `${quantity} × ${product.name} (${selectedVariant.name}) added to cart.`,
      type: "success",
    });
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
        <Container className="grid sm:grid-cols-2 gap-10 sm:gap-14 items-start">
          <FadeIn direction="up">
            <ProductGallery images={product.images} name={product.name} ratio="portrait" />
          </FadeIn>

          <FadeIn direction="up" delay={100} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              {CATEGORY_LABELS[product.category] ? (
                <Badge tone="forest" className="w-fit">
                  {CATEGORY_LABELS[product.category]}
                </Badge>
              ) : null}
              <h1 className="font-serif text-3xl sm:text-4xl text-brown font-bold leading-tight">
                {product.name}
              </h1>
              <p className="text-sm text-brown/70 leading-relaxed">{product.shortDescription}</p>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-1 text-gold-200">
                <Star size={15} fill="currentColor" strokeWidth={0} />
                <span className="font-semibold text-brown">{product.rating}</span>
              </div>
              <span className="text-brown/50">({product.reviewCount} Verified Reviews)</span>
              <span className="text-brown/30">&middot;</span>
              <span className="flex items-center gap-1 text-brown/60 text-xs font-medium">
                <MapPin size={13} className="text-forest" />
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

            <div className="flex items-baseline gap-3 pt-1">
              <Price
                amount={totalPrice}
                compareAt={selectedVariant.compareAtPrice ? selectedVariant.compareAtPrice * quantity : null}
                size="lg"
              />
              {quantity > 1 ? (
                <span className="text-xs text-brown/50 font-medium">
                  ({selectedVariant.name} &times; {quantity})
                </span>
              ) : null}
            </div>

            <div className="flex flex-col xs:flex-row gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                className={`flex-1 transition-all duration-300 ${addedAnimation ? "bg-forest-50" : ""}`}
                onClick={handleAddToCart}
              >
                {addedAnimation ? (
                  <span className="flex items-center gap-1.5 animate-fade-in">
                    <Check size={18} /> Added to Bag
                  </span>
                ) : (
                  "Add to Bag"
                )}
              </Button>
              <Button variant="secondary" size="lg" className="flex-1" onClick={handleBuyNow}>
                Buy It Now
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-5 border-t border-brown/10">
              {TRUST_ITEMS.map((item) => (
                <TrustItem key={item.label} icon={item.icon} label={item.label} labelClassName="text-xs" />
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Tabs */}
      <section className="py-6 sm:py-8">
        <Container>
          <ProductTabs product={product} />
        </Container>
      </section>

      {/* Related Products */}
      {related.length > 0 ? (
        <section className="py-16 sm:py-20 border-t border-brown/10 bg-ivory-50/50">
          <Container className="flex flex-col gap-10">
            <FadeIn direction="up">
              <SectionHeading
                eyebrow="Complementary"
                title="You May Also Like"
                align="center"
              />
            </FadeIn>
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
