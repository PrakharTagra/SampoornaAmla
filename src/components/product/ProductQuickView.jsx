import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Leaf, ShieldCheck, PackageCheck, Truck } from "lucide-react";
import Modal from "../primitives/Modal";
import Button from "../primitives/Button";
import QuantitySelector from "../primitives/QuantitySelector";
import Price from "../primitives/Price";
import TrustItem from "../primitives/TrustItem";
import ProductGallery from "./ProductGallery";
import VariantSelector from "./VariantSelector";
import { useCart } from "../../hooks/useCart";

const TRUST_ITEMS = [
  { icon: Leaf, label: "Natural / No Preservatives" },
  { icon: ShieldCheck, label: "Quality Assured" },
  { icon: PackageCheck, label: "Secure Packaging" },
  { icon: Truck, label: "Pan-India Delivery" },
];

export default function ProductQuickView({ product, open, onClose }) {
  if (!product) return null;

  return (
    <Modal open={open} onClose={onClose} labelledBy="quick-view-title">
      <ProductQuickViewContent key={product.id} product={product} onClose={onClose} />
    </Modal>
  );
}

function ProductQuickViewContent({ product, onClose }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const { addItem, closeDrawer } = useCart();
  const navigate = useNavigate();

  const totalPrice = selectedVariant.price * quantity;

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    onClose();
  };

  const handleBuyNow = () => {
    addItem(product, selectedVariant, quantity);
    onClose();
    closeDrawer();
    navigate("/cart");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 p-4 sm:p-8 animate-fade-in">
      <ProductGallery images={product.images} name={product.name} ratio="wide" fit="contain" />

        <div className="flex flex-col gap-4">
          <div>
            <h2 id="quick-view-title" className="font-serif text-2xl text-brown">
              {product.name}
            </h2>
            <p className="text-xs text-amla-200 mt-1">100% Natural &amp; Fresh</p>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-0.5 text-gold-200">
              <Star size={14} fill="currentColor" strokeWidth={0} />
              <span className="font-medium text-brown">{product.rating}</span>
            </div>
            <span className="text-brown/50">({product.reviewCount} Reviews)</span>
          </div>

          <p className="text-sm text-brown/70 leading-relaxed">{product.description}</p>

          <VariantSelector
            variants={product.variants}
            selectedId={selectedVariant.id}
            onSelect={setSelectedVariant}
          />

          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-brown/80">Quantity</span>
            <QuantitySelector value={quantity} onChange={setQuantity} />
          </div>

          <Price amount={totalPrice} size="lg" />

          <div className="flex flex-col xs:flex-row gap-3">
            <Button variant="primary" size="md" className="flex-1" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button variant="secondary" size="md" className="flex-1" onClick={handleBuyNow}>
              Buy Now
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2 border-t border-brown/10">
            {TRUST_ITEMS.map((item) => (
              <TrustItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                labelClassName="text-xs"
              />
            ))}
          </div>
        </div>
      </div>
  );
}
