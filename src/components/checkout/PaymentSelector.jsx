import { Banknote, Smartphone, CreditCard } from "lucide-react";
import Input from "../primitives/Input";
import { checkoutData } from "../../data/sitedata";

const ICON_MAP = { cod: Banknote, upi: Smartphone, card: CreditCard };

export default function PaymentSelector({ value, errors, onChange }) {
  const setMethod = (method) => onChange({ ...value, method });
  const setField = (field) => (e) => onChange({ ...value, [field]: e.target.value });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        {checkoutData.paymentMethods.map(({ id, label, description }) => {
          const Icon = ICON_MAP[id] || Banknote;
          const selected = value.method === id;
          return (
            <label
              key={id}
              className={`flex items-start gap-3 rounded-sm border px-4 py-3.5 cursor-pointer transition-colors duration-200 ${
                selected ? "border-forest bg-forest/5" : "border-brown/15 hover:border-brown/30"
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                checked={selected}
                onChange={() => setMethod(id)}
                className="mt-1 accent-forest"
              />
              <Icon size={18} className={selected ? "text-forest" : "text-brown/50"} strokeWidth={1.75} />
              <span className="flex flex-col">
                <span className="text-sm font-medium text-brown">{label}</span>
                <span className="text-xs text-brown/55">{description}</span>
              </span>
            </label>
          );
        })}
      </div>

      {value.method === "upi" ? (
        <Input
          id="upiId"
          label="UPI ID"
          placeholder="name@bank"
          value={value.upiId}
          onChange={setField("upiId")}
          error={errors.upiId}
        />
      ) : null}

      {value.method === "card" ? (
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            id="cardName"
            label="Name on card"
            placeholder="Name as on card"
            value={value.cardName}
            onChange={setField("cardName")}
            error={errors.cardName}
            className="sm:col-span-2"
            autoComplete="cc-name"
          />
          <Input
            id="cardNumber"
            label="Card number"
            placeholder="1234 5678 9012 3456"
            value={value.cardNumber}
            onChange={setField("cardNumber")}
            error={errors.cardNumber}
            className="sm:col-span-2"
            inputMode="numeric"
            maxLength={19}
            autoComplete="cc-number"
          />
          <Input
            id="cardExpiry"
            label="Expiry"
            placeholder="MM/YY"
            value={value.cardExpiry}
            onChange={setField("cardExpiry")}
            error={errors.cardExpiry}
            maxLength={5}
            autoComplete="cc-exp"
          />
          <Input
            id="cardCvv"
            label="CVV"
            placeholder="CVV"
            value={value.cardCvv}
            onChange={setField("cardCvv")}
            error={errors.cardCvv}
            inputMode="numeric"
            maxLength={4}
            autoComplete="cc-csc"
          />
        </div>
      ) : null}
    </div>
  );
}
