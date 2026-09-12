export default function TrustItem({ icon: Icon, label, className = "", labelClassName = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {Icon ? <Icon size={18} className="text-amla-200 shrink-0" strokeWidth={1.5} /> : null}
      <span className={`text-sm text-brown/75 ${labelClassName}`}>{label}</span>
    </div>
  );
}
