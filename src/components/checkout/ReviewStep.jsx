import { Pencil } from "lucide-react";

const PAYMENT_LABELS = {
  cod: "Cash on Delivery",
  upi: "UPI",
  card: "Credit / Debit Card",
};

function ReviewBlock({ title, onEdit, children }) {
  return (
    <div className="flex flex-col gap-2 rounded-sm border border-brown/10 px-4 py-3.5">
      <div className="flex items-center justify-between">
        <span className="text-xs tracking-[0.1em] text-brown/50 uppercase">{title}</span>
        <button
          type="button"
          onClick={onEdit}
          className="flex items-center gap-1 text-xs text-forest hover:text-forest-200 transition-colors duration-200"
        >
          <Pencil size={12} /> Edit
        </button>
      </div>
      <div className="text-sm text-brown">{children}</div>
    </div>
  );
}

export default function ReviewStep({ contact, address, payment, onEditDetails, onEditPayment }) {
  return (
    <div className="flex flex-col gap-4">
      <ReviewBlock title="Contact" onEdit={onEditDetails}>
        <p>{contact.fullName}</p>
        <p className="text-brown/60">
          {contact.email} · {contact.phone}
        </p>
      </ReviewBlock>

      <ReviewBlock title="Delivery address" onEdit={onEditDetails}>
        <p>{address.line1}</p>
        {address.line2 ? <p>{address.line2}</p> : null}
        <p className="text-brown/60">
          {address.city}, {address.state} {address.pincode}
        </p>
      </ReviewBlock>

      <ReviewBlock title="Payment" onEdit={onEditPayment}>
        <p>{PAYMENT_LABELS[payment.method]}</p>
        {payment.method === "upi" ? <p className="text-brown/60">{payment.upiId}</p> : null}
        {payment.method === "card" ? (
          <p className="text-brown/60">Card ending in {payment.cardNumber.slice(-4)}</p>
        ) : null}
      </ReviewBlock>
    </div>
  );
}
