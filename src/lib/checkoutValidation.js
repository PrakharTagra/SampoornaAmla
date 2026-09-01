// Phase 6: pure validation helpers for the checkout flow. Kept framework-free
// so CheckoutForm-equivalent step components can call the same rules the
// review step re-checks before "Place Order" — one source of truth instead
// of re-implementing regexes per field.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/; // Indian mobile numbers: 10 digits, starts 6-9
const PINCODE_RE = /^[1-9]\d{5}$/; // Indian PIN codes: 6 digits, doesn't start 0
const UPI_RE = /^[\w.+-]+@[\w.-]+$/;
const CARD_NUMBER_RE = /^\d{13,16}$/;
const CARD_EXPIRY_RE = /^(0[1-9]|1[0-2])\/\d{2}$/;
const CARD_CVV_RE = /^\d{3,4}$/;

export function validateContact(contact) {
  const errors = {};
  if (!contact.fullName || contact.fullName.trim().length < 2) {
    errors.fullName = "Enter your full name.";
  }
  if (!contact.email || !EMAIL_RE.test(contact.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!contact.phone || !PHONE_RE.test(contact.phone.trim())) {
    errors.phone = "Enter a valid 10-digit mobile number.";
  }
  return errors;
}

export function validateAddress(address) {
  const errors = {};
  if (!address.line1 || address.line1.trim().length < 5) {
    errors.line1 = "Enter your address.";
  }
  if (!address.city || address.city.trim().length < 2) {
    errors.city = "Enter your city.";
  }
  if (!address.state) {
    errors.state = "Select your state.";
  }
  if (!address.pincode || !PINCODE_RE.test(address.pincode.trim())) {
    errors.pincode = "Enter a valid 6-digit PIN code.";
  }
  return errors;
}

export function validatePayment(payment) {
  const errors = {};
  if (payment.method === "upi") {
    if (!payment.upiId || !UPI_RE.test(payment.upiId.trim())) {
      errors.upiId = "Enter a valid UPI ID (e.g. name@bank).";
    }
  } else if (payment.method === "card") {
    if (!payment.cardName || payment.cardName.trim().length < 2) {
      errors.cardName = "Enter the name on the card.";
    }
    if (!payment.cardNumber || !CARD_NUMBER_RE.test(payment.cardNumber.replace(/\s/g, ""))) {
      errors.cardNumber = "Enter a valid card number.";
    }
    if (!payment.cardExpiry || !CARD_EXPIRY_RE.test(payment.cardExpiry.trim())) {
      errors.cardExpiry = "Use MM/YY format.";
    }
    if (!payment.cardCvv || !CARD_CVV_RE.test(payment.cardCvv.trim())) {
      errors.cardCvv = "Enter a valid CVV.";
    }
  }
  // "cod" has no fields to validate.
  return errors;
}

export function hasErrors(errors) {
  return Object.keys(errors).length > 0;
}
