const TONES = {
  neutral: "bg-brown/5 text-brown/80",
  gold: "bg-gold/15 text-gold-200",
  forest: "bg-forest/10 text-forest",
};

export default function Badge({ tone = "neutral", className = "", children }) {
  return (
    <span className={`inline-flex items-center rounded-sm px-2.5 py-1 text-xs font-medium ${TONES[tone]} ${className}`}>
      {children}
    </span>
  );
}
