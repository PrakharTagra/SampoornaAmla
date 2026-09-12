import Input from "../primitives/Input";
import Select from "../primitives/Select";
import { checkoutData } from "../../data/sitedata";

export default function AddressFields({ value, errors, onChange }) {
  const set = (field) => (e) => onChange({ ...value, [field]: e.target.value });

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <Input
        id="line1"
        label="Address"
        placeholder="House no., street, area"
        value={value.line1}
        onChange={set("line1")}
        error={errors.line1}
        className="sm:col-span-2"
        autoComplete="address-line1"
      />
      <Input
        id="line2"
        label="Apartment, suite, etc. (optional)"
        placeholder="Landmark, floor, etc."
        value={value.line2}
        onChange={set("line2")}
        className="sm:col-span-2"
        autoComplete="address-line2"
      />
      <Input
        id="city"
        label="City"
        placeholder="City"
        value={value.city}
        onChange={set("city")}
        error={errors.city}
        autoComplete="address-level2"
      />
      <Select id="state" label="State" value={value.state} onChange={set("state")} error={errors.state}>
        <option value="">Select state</option>
        {checkoutData.states.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </Select>
      <Input
        id="pincode"
        label="PIN code"
        placeholder="6-digit PIN code"
        value={value.pincode}
        onChange={set("pincode")}
        error={errors.pincode}
        autoComplete="postal-code"
        maxLength={6}
      />
    </div>
  );
}
