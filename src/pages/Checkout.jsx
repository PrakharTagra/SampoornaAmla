import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";
import Breadcrumb from "../components/primitives/Breadcrumb";
import Button from "../components/primitives/Button";
import Divider from "../components/primitives/Divider";
import StepIndicator from "../components/checkout/StepIndicator";
import ContactFields from "../components/checkout/ContactFields";
import AddressFields from "../components/checkout/AddressFields";
import PaymentSelector from "../components/checkout/PaymentSelector";
import ReviewStep from "../components/checkout/ReviewStep";
import OrderSummary from "../components/checkout/OrderSummary";
import OrderConfirmation from "../components/checkout/OrderConfirmation";
import { useCart } from "../context/CartContext";
import {
  validateContact,
  validateAddress,
  validatePayment,
  hasErrors,
} from "../lib/checkoutValidation";

function generateOrderId() {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `PA-${random}`;
}

export default function Checkout() {
  const { items, subtotal, shipping, total, clearCart } = useCart();

  const [step, setStep] = useState(1);
  const [contact, setContact] = useState({ fullName: "", email: "", phone: "" });
  const [address, setAddress] = useState({ line1: "", line2: "", city: "", state: "", pincode: "" });
  const [payment, setPayment] = useState({
    method: "cod",
    upiId: "",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
  });
  const [errors, setErrors] = useState({});

  const [order, setOrder] = useState(null);

  const goToStep = (target) => {
    setStep(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContinueFromDetails = () => {
    const contactErrors = validateContact(contact);
    const addressErrors = validateAddress(address);
    const combined = { ...contactErrors, ...addressErrors };
    setErrors(combined);
    if (!hasErrors(combined)) goToStep(2);
  };

  const handleContinueFromPayment = () => {
    const paymentErrors = validatePayment(payment);
    setErrors(paymentErrors);
    if (!hasErrors(paymentErrors)) goToStep(3);
  };

  const handlePlaceOrder = () => {
    const combined = {
      ...validateContact(contact),
      ...validateAddress(address),
      ...validatePayment(payment),
    };
    if (hasErrors(combined)) {
      setErrors(combined);
      return;
    }

    setOrder({ id: generateOrderId(), email: contact.email, total });
    clearCart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (order) {
    return (
      <Container className="py-6">
        <OrderConfirmation orderId={order.id} email={order.email} total={order.total} />
      </Container>
    );
  }

  if (items.length === 0) {
    return (
      <Container className="py-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <ShoppingBag className="text-amla/40" size={40} strokeWidth={1.5} />
          <SectionHeading
            align="center"
            title="Your cart is empty"
            description="Add a few products before checking out."
          />
          <Button as={Link} to="/products" variant="primary" size="md">
            Shop Amla
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <>
      <Container className="pt-6 sm:pt-8">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Cart", to: "/cart" }, { label: "Checkout" }]} />
      </Container>

      <section className="py-8 sm:py-12">
        <Container className="flex flex-col gap-8">
          <SectionHeading title="Checkout" />

          <StepIndicator current={step} onStepClick={goToStep} />

          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 flex flex-col gap-6">
              {step === 1 ? (
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-serif text-xl text-brown">Contact information</h3>
                    <ContactFields value={contact} errors={errors} onChange={setContact} />
                  </div>

                  <Divider />

                  <div className="flex flex-col gap-4">
                    <h3 className="font-serif text-xl text-brown">Delivery address</h3>
                    <AddressFields value={address} errors={errors} onChange={setAddress} />
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-fit"
                    onClick={handleContinueFromDetails}
                  >
                    Continue to Payment
                  </Button>
                </div>
              ) : null}

              {step === 2 ? (
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-serif text-xl text-brown">Payment method</h3>
                    <PaymentSelector value={payment} errors={errors} onChange={setPayment} />
                  </div>

                  <div className="flex gap-3">
                    <Button variant="ghost" size="lg" onClick={() => goToStep(1)}>
                      Back
                    </Button>
                    <Button variant="primary" size="lg" className="flex-1" onClick={handleContinueFromPayment}>
                      Continue to Review
                    </Button>
                  </div>
                </div>
              ) : null}

              {step === 3 ? (
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-serif text-xl text-brown">Review your order</h3>
                    <ReviewStep
                      contact={contact}
                      address={address}
                      payment={payment}
                      onEditDetails={() => goToStep(1)}
                      onEditPayment={() => goToStep(2)}
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button variant="ghost" size="lg" onClick={() => goToStep(2)}>
                      Back
                    </Button>
                    <Button variant="primary" size="lg" className="flex-1" onClick={handlePlaceOrder}>
                      Place Order
                    </Button>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="lg:sticky lg:top-24 bg-ivory-200/60 rounded-md p-6">
              <OrderSummary items={items} subtotal={subtotal} shipping={shipping} total={total} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
