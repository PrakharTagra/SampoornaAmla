import Input from "../primitives/Input";

export default function ContactFields({ value, errors, onChange }) {
  const set = (field) => (e) => onChange({ ...value, [field]: e.target.value });

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <Input
        id="fullName"
        label="Full name"
        placeholder="Your full name"
        value={value.fullName}
        onChange={set("fullName")}
        error={errors.fullName}
        className="sm:col-span-2"
        autoComplete="name"
      />
      <Input
        id="email"
        type="email"
        label="Email"
        placeholder="you@example.com"
        value={value.email}
        onChange={set("email")}
        error={errors.email}
        autoComplete="email"
      />
      <Input
        id="phone"
        type="tel"
        label="Mobile number"
        placeholder="10-digit mobile number"
        value={value.phone}
        onChange={set("phone")}
        error={errors.phone}
        autoComplete="tel"
        maxLength={10}
      />
    </div>
  );
}
